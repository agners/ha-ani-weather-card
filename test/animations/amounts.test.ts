import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { CloudsAnimation } from '../../src/clouds-animation';
import { FogAnimation } from '../../src/fog-animation';
import { WindAnimation, MAX_LEAVES, MAX_SWOOSHES } from '../../src/wind-animation';
import { StarsAnimation, drawNight, starBandOpacity } from '../../src/stars-animation';
import { WeatherAnimationController } from '../../src/animation-controller';
import { ModularIntegrationBridge } from '../../src/modular-integration-bridge';
import { CLOUD_LAYERS, driftWindFactor } from '../../src/gsap-effects';
import { SKY_DISSOLVE_SEC } from '../../src/sky';
import { getWeatherSettings } from '../../src/utils';
import type { EngineAmounts } from '../../src/types';
import type { FakeTimeline } from '../setup';

type Mock = ReturnType<typeof vi.fn>;
type GsapMock = { timeline: Mock; to: Mock; set: Mock };
const gsap = (): GsapMock => (window as unknown as { AnimatedWeatherCardGsap: GsapMock }).AnimatedWeatherCardGsap;
const timelines = (): FakeTimeline[] => gsap().timeline.mock.results.map(r => r.value as FakeTimeline);
/** The clouds' drifts: the timelines with a repeat delay (the look at the sun has none) */
const drifts = () => timelines().filter(tl => tl.vars.repeatDelay !== undefined);

const amounts = (extra: Partial<EngineAmounts> = {}): EngineAmounts => ({
    rain: { kind: 'rain', drops: 18 }, snow: 1, sleet: 1, clouds: [1, 1, 2], fog: 1, leaves: 1, gusts: 0, stars: 1, ...extra,
});

function makeHost(): HTMLElement {
    const host = document.createElement('div');
    host.innerHTML = `
        <div class="animated-weather-card">
            <div class="animation-layer"><div class="sun-track"><div class="sun"></div></div></div>
            <div class="animation-container wind-container"><div class="wind-layer"></div></div>
            <div class="animation-container clouds-container"><div class="clouds-layer"></div></div>
            <div class="animation-container fog-container"></div>
        </div>`;
    document.body.appendChild(host);
    const card = host.querySelector('.animated-weather-card') as HTMLElement;
    Object.defineProperty(card, 'offsetWidth', { value: 420 });
    Object.defineProperty(card, 'offsetHeight', { value: 230 });
    return host;
}

const front = (host: HTMLElement) => Array.from(host.querySelectorAll<HTMLElement>(`.clouds-layer [class*="cloud-gsap-${CLOUD_LAYERS[2].name}-"]`));
/** A cloud's place among its depth's clouds */
const placeOf = (cloud: HTMLElement) => cloud.className.match(/cloud-gsap-[a-z]+-(\d+)/)![1];
const places = (host: HTMLElement) => front(host).map(placeOf).sort();

describe('clouds by their amounts', () => {
    it('start with each depth\'s clouds; more come in from the left at the wind\'s speed, fewer leave as they reach the right', async () => {
        const host = makeHost();
        const clouds = new CloudsAnimation(host, { intensity: 0.6, scale: 1, isPartlyCloudy: true, amounts: amounts({ clouds: [1, 1, 3] }) }, { entity: 'weather.home' }, 10);
        await clouds.start();
        expect(host.querySelectorAll('.cloud-gsap')).toHaveLength(5);
        expect(front(host)).toHaveLength(3);
        const before = drifts().length;
        // Already in the sky, somewhere along its path
        expect(drifts()[0].progress).toHaveBeenCalledWith(expect.any(Number));

        // The wind picks up, then the cover grows: two clouds come in from the left, out of sight, one after the other,
        // at the wind's speed as the others now go
        const start = driftWindFactor(getWeatherSettings({ entity: 'weather.home' }, 10).windSpeed);
        clouds.setWindSpeed(40);
        clouds.setAmounts(amounts({ clouds: [1, 1, 5] }));
        const added = drifts().slice(before);
        expect(added).toHaveLength(2);
        expect(front(host)).toHaveLength(5);
        expect(added[0].vars.delay).toBe(0);
        expect(added[1].vars.delay).toBeGreaterThan(0);
        added.forEach(tl => expect(tl.progress).not.toHaveBeenCalled());
        const scale = driftWindFactor(getWeatherSettings({ entity: 'weather.home' }, 40).windSpeed) / start;
        expect(added[0].timeScale).toHaveBeenCalledWith(scale);
        // Each takes the place (its size and height) after the others
        expect(places(host)).toEqual(['1', '2', '3', '4', '5']);

        // Less cover: the last to come leave, once they've crossed; the rest carry on
        clouds.setAmounts(amounts({ clouds: [1, 1, 2] }));
        expect(front(host)).toHaveLength(5);
        drifts().forEach(tl => tl.vars.onRepeat?.());
        expect(places(host)).toEqual(['1', '2']);
        expect(host.querySelectorAll('.cloud-gsap')).toHaveLength(4);

        // On their way out, they stay if the cover comes back before they've gone
        clouds.setAmounts(amounts({ clouds: [1, 1, 1] }));
        const now = drifts().length;
        clouds.setAmounts(amounts({ clouds: [1, 1, 2] }));
        expect(drifts()).toHaveLength(now);
        drifts().forEach(tl => tl.vars.onRepeat?.());
        expect(front(host)).toHaveLength(2);
        await clouds.stop();
        host.remove();
    });

    it('fade in and out where they are for the slide\'s hours, and what it hid goes once the weather changes', async () => {
        const host = makeHost();
        const clouds = new CloudsAnimation(host, { intensity: 0.6, scale: 1, isPartlyCloudy: true, amounts: amounts() }, { entity: 'weather.home' }, 10);
        await clouds.start();
        const before = drifts().length;
        clouds.setAmounts(amounts({ clouds: [1, 1, 3] }), true);
        // A new cloud somewhere along its path, faded in
        const added = drifts().slice(before);
        expect(added).toHaveLength(1);
        expect(added[0].vars.delay).toBeUndefined();
        const opacityTo = (track: Element) => gsap().to.mock.calls.filter(([t]) => Array.isArray(t) && t.includes(track)).at(-1)?.[1];
        const third = front(host).find(c => placeOf(c) === '3')!;
        expect(gsap().set).toHaveBeenCalledWith([third.parentElement], { opacity: 0 });
        expect(opacityTo(third.parentElement!)).toMatchObject({ opacity: 1, duration: 0.3 });
        // An hour with fewer: they fade out, and stay for the next hour
        clouds.setAmounts(amounts({ clouds: [1, 1, 1] }), true);
        const second = front(host).find(c => placeOf(c) === '2')!;
        expect(opacityTo(second.parentElement!)).toMatchObject({ opacity: 0, duration: 0.3 });
        expect(front(host)).toHaveLength(3);
        // The next hour has two: the second fades back in
        clouds.setAmounts(amounts({ clouds: [1, 1, 2] }), true);
        expect(opacityTo(second.parentElement!)).toMatchObject({ opacity: 1 });
        // A hidden cloud that crosses leaves, out of sight
        drifts().forEach(tl => tl.vars.onRepeat?.());
        expect(places(host)).toEqual(['1', '2']);
        // And the weather's own change takes what the slide hid at once
        clouds.setAmounts(amounts({ clouds: [1, 1, 3] }), true);
        clouds.setAmounts(amounts({ clouds: [1, 1, 1] }), true);
        expect(front(host)).toHaveLength(3);
        clouds.setAmounts(amounts({ clouds: [1, 1, 1] }));
        expect(places(host)).toEqual(['1']);
        await clouds.stop();
        host.remove();
    });

    it('start paused while the card is, and take their twins with them on the theme palette', async () => {
        const host = makeHost();
        const config = { entity: 'weather.home', color_palette: 'theme' as const };
        const clouds = new CloudsAnimation(host, { intensity: 0.6, scale: 1, isPartlyCloudy: true, amounts: amounts() }, config, 10);
        await clouds.start();
        expect(host.querySelectorAll('.cloud-occluder')).toHaveLength(4);
        await clouds.pause();
        const before = drifts().length;
        clouds.setAmounts(amounts({ clouds: [1, 1, 3] }));
        expect(drifts()[before].pause).toHaveBeenCalled();
        expect(host.querySelectorAll('.cloud-occluder')).toHaveLength(5);
        clouds.setAmounts(amounts({ clouds: [1, 1, 1] }));
        drifts().forEach(tl => tl.vars.onRepeat?.());
        expect(host.querySelectorAll('.cloud-gsap')).toHaveLength(3);
        expect(host.querySelectorAll('.cloud-occluder')).toHaveLength(3);
        await clouds.stop();
        host.remove();
    });

    it('dim the sun only through a track that shows', async () => {
        const host = makeHost();
        const sun = host.querySelector('.sun') as HTMLElement;
        const box = (el: Element, x: number, y: number, w: number, h: number) => {
            (el as unknown as { getBoundingClientRect: () => object }).getBoundingClientRect = () => ({ left: x, top: y, right: x + w, bottom: y + h, width: w, height: h });
        };
        box(sun, 400, 40, 40, 40);
        const clouds = new CloudsAnimation(host, { intensity: 0.6, scale: 1, isPartlyCloudy: true, amounts: amounts({ clouds: [0, 0, 1] }) }, { entity: 'weather.home' }, 10);
        await clouds.start();
        const looks = timelines().find(tl => tl.vars.onRepeat && tl.vars.repeatDelay === undefined)!;
        const cloud = host.querySelector<HTMLElement>('.cloud-gsap')!;
        box(cloud, 380, 30, 120, 60);
        const track = host.querySelector('.sun-track')!;
        const dims = () => gsap().to.mock.calls.some(([t]) => t === track);
        (cloud.parentElement as HTMLElement).style.opacity = '0';
        looks.vars.onRepeat();
        expect(dims()).toBe(false);
        (cloud.parentElement as HTMLElement).style.opacity = '1';
        looks.vars.onRepeat();
        expect(dims()).toBe(true);
        await clouds.stop();
        host.remove();
    });
});

describe('fog by its amount', () => {
    it('is as thick as the amounts say, thickening over the sky\'s few seconds, or a moment for the slide', async () => {
        const host = makeHost();
        const fog = new FogAnimation(host, { intensity: 1, scale: 1, layerCount: 2, amounts: amounts({ fog: 0.6 }) }, { entity: 'weather.home' }, 10);
        await fog.start();
        const amount = host.querySelector('.fog-container > .fog-amount')!;
        expect(amount.querySelectorAll('.fog-layer')).toHaveLength(2);
        expect(gsap().set).toHaveBeenCalledWith(amount, { opacity: 0.6 });
        fog.setAmounts(amounts({ fog: 0.45 }));
        expect(gsap().to.mock.calls.filter(([t]) => t === amount).at(-1)?.[1]).toMatchObject({ opacity: 0.45, duration: SKY_DISSOLVE_SEC });
        fog.setAmounts(amounts({ fog: 1 }), true);
        expect(gsap().to.mock.calls.filter(([t]) => t === amount).at(-1)?.[1]).toMatchObject({ opacity: 1, duration: 0.3 });
        await fog.stop();
        expect(host.querySelector('.fog-amount, .fog-layer')).toBeNull();
        host.remove();
    });

    it('is today\'s fog in manual', async () => {
        const host = makeHost();
        const fog = new FogAnimation(host, { intensity: 1, scale: 1, layerCount: 2 }, { entity: 'weather.home' }, 10);
        await fog.start();
        expect(gsap().set).toHaveBeenCalledWith(host.querySelector('.fog-amount'), { opacity: 1 });
        await fog.stop();
        host.remove();
    });
});

describe('wind by its amounts', () => {
    beforeEach(() => vi.useFakeTimers());
    afterEach(() => vi.useRealTimers());

    it('carries more leaves in a stronger wind, and more swooshes, more of them strong, in gusts', async () => {
        const host = makeHost();
        const wind = new WindAnimation(host, { intensity: 1, scale: 1, amounts: amounts({ leaves: 2, gusts: 1 }) }, { entity: 'weather.home' });
        await wind.start();
        vi.advanceTimersByTime(60_000);
        expect(host.querySelectorAll('.leaf-gsap').length).toBe(MAX_LEAVES * 2);
        expect(host.querySelectorAll('.wind-swoosh-gsap').length).toBe(MAX_SWOOSHES + 2);
        await wind.stop();
        // Light wind: fewer leaves, read at the next one
        const calm = new WindAnimation(host, { intensity: 1, scale: 1, amounts: amounts({ leaves: 0.5 }) }, { entity: 'weather.home' });
        await calm.start();
        vi.advanceTimersByTime(60_000);
        expect(host.querySelectorAll('.leaf-gsap').length).toBe(Math.round(MAX_LEAVES * 0.5));
        expect(host.querySelectorAll('.wind-swoosh-gsap').length).toBe(MAX_SWOOSHES);
        await calm.stop();
        host.remove();
    });

    it('makes a share of swooshes strong: a fifth with no gusts, half in full gusts', async () => {
        const host = makeHost();
        const random = vi.spyOn(Math, 'random').mockReturnValue(0.7);
        const wind = new WindAnimation(host, { intensity: 1, scale: 1, amounts: amounts({ gusts: 1 }) }, { entity: 'weather.home' });
        await wind.start();
        vi.advanceTimersByTime(5_000);
        const swoosh = host.querySelector<HTMLElement>('.wind-swoosh-gsap')!;
        // 0.7 is past half: strong in full gusts (2 px), where with none it would be faint (1 px)
        expect(swoosh.style.height).toBe('2px');
        await wind.stop();
        random.mockRestore();
        host.remove();
    });
});

describe('stars by their amount', () => {
    it('are dealt into four bands that cloud cover thins, a quarter at a time', () => {
        expect([0, 1, 2, 3].map(b => starBandOpacity(1, b))).toEqual([1, 1, 1, 1]);
        expect([0, 1, 2, 3].map(b => starBandOpacity(0.35, b))).toEqual([1, 0.4, 0, 0]);
        expect([0, 1, 2, 3].map(b => starBandOpacity(0.25, b))).toEqual([1, 0, 0, 0]);
        const layer = document.createElement('div');
        drawNight(layer, 20, { moon: false, share: 0.35 });
        const bands = Array.from(layer.querySelectorAll<HTMLElement>('.stars-field > .stars-band'));
        expect(bands).toHaveLength(4);
        expect(bands.map(b => b.querySelectorAll('.star-gsap').length)).toEqual([5, 5, 5, 5]);
        expect(bands.map(b => b.style.opacity)).toEqual(['', '0.4', '0', '0']);
    });

    it('thin and come out over the sky\'s few seconds as the cover changes, and in a moment for the slide', async () => {
        const host = makeHost();
        const stars = new StarsAnimation(host, { intensity: 1, scale: 1, starCount: 20, amounts: amounts({ stars: 0.6 }) }, { entity: 'weather.home' });
        await stars.start();
        const bands = Array.from(host.querySelectorAll<HTMLElement>('.stars-band'));
        expect(bands.map(b => b.style.opacity)).toEqual(['', '', '0.4', '0']);
        stars.setAmounts(amounts({ stars: 1 }));
        expect(gsap().to.mock.calls.filter(([t]) => t === bands[3]).at(-1)?.[1]).toMatchObject({ opacity: 1, duration: SKY_DISSOLVE_SEC });
        stars.setAmounts(amounts({ stars: 0.25 }), true);
        expect(gsap().to.mock.calls.filter(([t]) => t === bands[1]).at(-1)?.[1]).toMatchObject({ opacity: 0, duration: 0.3 });
        await stars.stop();
        host.remove();
    });
});

describe('the controller\'s amounts', () => {
    it('shows the weather\'s own change as it happens, and the slide\'s hours and its way home at once', () => {
        const host = makeHost();
        const update = vi.spyOn(ModularIntegrationBridge.prototype, 'updateAmounts');
        const controller = new WeatherAnimationController(host, { entity: 'weather.home' });
        const home = amounts({ fog: 0.6 }), hour = amounts({ fog: 1 });
        controller.setAmounts(home);
        expect(update).toHaveBeenLastCalledWith(home);
        controller.showAmounts(hour);
        expect(update).toHaveBeenLastCalledWith(hour, true);
        // While an hour shows, the weather's own change waits for it to come home
        controller.setAmounts(amounts({ fog: 0.45 }));
        expect(update).toHaveBeenLastCalledWith(hour);
        controller.showAmounts(null);
        expect(update).toHaveBeenLastCalledWith(amounts({ fog: 0.45 }), true);
        update.mockRestore();
        host.remove();
    });
});
