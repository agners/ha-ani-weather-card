import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import '../../src/animated-weather-card';
import '../../src/sun-tracker-card';
import { skyColors } from '../../src/sky';
import { drawNight, starCount } from '../../src/stars-animation';

// A winter evening: the sun went down at 17:20 and it's 19:55, before the
// clock's default sunset hour (20). Home Assistant already says clear-night.
const EVENING = Date.UTC(2026, 10, 6, 19, 55);

const sun = (elevation: number) => ({
    entity_id: 'sun.sun',
    state: elevation >= 0 ? 'above_horizon' : 'below_horizon',
    attributes: {
        elevation, rising: false,
        next_rising: '2026-11-07T07:10:00Z', next_setting: '2026-11-07T17:20:00Z',
        next_dawn: '2026-11-07T06:42:00Z', next_dusk: '2026-11-07T17:48:00Z',
        next_noon: '2026-11-07T12:15:00Z',
    },
});

const hass = (state: string, elevation: number) => ({
    states: {
        'weather.home': { entity_id: 'weather.home', state, attributes: { temperature: 9, temperature_unit: '°C' } },
        'sun.sun': sun(elevation),
    },
    config: { time_zone: 'UTC' },
    language: 'en',
    localize: () => '',
});

describe('a clear night before the clock says so', () => {
    type Card = HTMLElement & { setConfig(config: object): void; hass: unknown };
    let card: Card;
    const sky = () => card.querySelector('.animated-weather-card') as HTMLElement;

    beforeEach(() => {
        vi.useFakeTimers({ now: EVENING });
        card = document.createElement('animated-weather-card') as Card;
        card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', sun_entity: 'sun.sun' });
    });

    afterEach(() => {
        card.remove();
        vi.useRealTimers();
    });

    it('opens on the moon and stars', async () => {
        card.hass = hass('clear-night', -25);
        document.body.appendChild(card);
        await vi.advanceTimersByTimeAsync(1000);
        expect(sky().classList.contains('clear-night')).toBe(true);
        expect(sky().classList.contains('sunny')).toBe(false);
    });

    it('turns to the moon and stars when the state does, with updates still arriving', async () => {
        card.hass = hass('sunny', -2);
        document.body.appendChild(card);
        await vi.advanceTimersByTimeAsync(1000);
        expect(sky().classList.contains('sunny')).toBe(true);

        card.hass = hass('clear-night', -6.5);
        await vi.advanceTimersByTimeAsync(300);
        card.hass = hass('clear-night', -6.8);
        await vi.advanceTimersByTimeAsync(2000);
        expect(sky().classList.contains('clear-night')).toBe(true);
        expect(sky().dataset.phase).toBe('night');
    });

    it('follows the clock instead with the day/night cycle on', async () => {
        card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', enable_day_night_cycle: true, sunset_hour: 21 });
        card.hass = hass('clear-night', -25);
        document.body.appendChild(card);
        await vi.advanceTimersByTimeAsync(1000);
        expect(sky().classList.contains('sunny')).toBe(true);
    });
});

describe("the sun tracker's shared sky on a clear night", () => {
    beforeEach(() => vi.useFakeTimers({ now: EVENING }));
    afterEach(() => vi.useRealTimers());

    it('is the clear night, before the clock says so', () => {
        const tracker = document.createElement('animated-sun-tracker-card') as HTMLElement & { setConfig(c: object): void; hass: unknown };
        tracker.setConfig({ sun_entity: 'sun.sun', weather_entity: 'weather.home', compact: true });
        document.body.appendChild(tracker);
        tracker.hass = hass('clear-night', -25);
        const stCard = tracker.shadowRoot!.querySelector('.st-card') as HTMLElement;
        expect(stCard.style.getPropertyValue('--awc-sky-top')).toBe(skyColors('clear-night', 'night').top);
        expect(skyColors('clear-night', 'night').top).not.toBe(skyColors('sunny', 'night').top);
        tracker.remove();
    });
});

describe('a still clear night (animate: false, reduced motion)', () => {
    type Card = HTMLElement & { setConfig(config: object): void; hass: unknown };
    const mounted: Card[] = [];
    const matchMedia = window.matchMedia;
    beforeEach(() => vi.useFakeTimers({ now: EVENING }));
    afterEach(() => {
        for (const c of mounted.splice(0)) c.remove();
        window.matchMedia = matchMedia;
        vi.useRealTimers();
    });
    const mount = async (config: object, state = 'clear-night', type = 'animated-weather-card') => {
        const card = document.createElement(type) as Card;
        card.setConfig({ type: `custom:${type}`, entity: 'weather.home', sun_entity: 'sun.sun', ...config });
        card.hass = hass(state, -25);
        document.body.appendChild(card);
        mounted.push(card);
        await vi.advanceTimersByTimeAsync(1000);
        return card;
    };
    const night = (card: Card) => ({
        stars: card.querySelectorAll('.stars-field .star-gsap').length,
        twinkling: card.querySelectorAll('.star-gsap.twinkle').length,
        moon: card.querySelectorAll('.moon-gsap').length,
    });

    it('keeps its moon and stars with animate: false, as a still day keeps its sun, and none of them twinkle', async () => {
        const card = await mount({ animate: false });
        const sky = card.querySelector('.animated-weather-card')!;
        expect(sky.classList.contains('static')).toBe(true);
        // The moon shows through the card's class, so nothing written inline can hide it
        expect(sky.classList.contains('individual-stars-active')).toBe(true);
        expect(night(card)).toEqual({ stars: 15, twinkling: 0, moon: 1 });
    });

    it('keeps them with reduced motion too', async () => {
        window.matchMedia = ((query: string) => ({ ...matchMedia(query), matches: query.includes('reduce') })) as typeof window.matchMedia;
        const card = await mount({});
        expect(card.querySelector('.animated-weather-card')!.classList.contains('static')).toBe(false);
        expect(night(card)).toEqual({ stars: 15, twinkling: 0, moon: 1 });
    });

    it('gives them back when the night turns cloudy, and draws them again once, never twice', async () => {
        const card = await mount({ animate: false });
        card.hass = hass('cloudy', -25);
        await vi.advanceTimersByTimeAsync(1000);
        expect(night(card)).toEqual({ stars: 0, twinkling: 0, moon: 0 });
        expect(card.querySelector('.stars-field')).toBeNull();
        card.hass = hass('clear-night', -25);
        await vi.advanceTimersByTimeAsync(1000);
        expect(night(card)).toEqual({ stars: 15, twinkling: 0, moon: 1 });
        expect(card.querySelectorAll('.stars-field')).toHaveLength(1);
    });

    it('leaves the forecast card without them, which has no moon or stars of its own', async () => {
        const card = await mount({ animate: false }, 'clear-night', 'animated-forecast-card');
        expect(night(card)).toEqual({ stars: 0, twinkling: 0, moon: 0 });
    });
});

describe('the stars on a clear night', () => {
    it('are as many across a phone as the engine\'s clouds call for, and as full a sky on a wider card', () => {
        // Five per cloud across a phone (three clouds by default), at least 15
        expect(starCount(3, 353)).toBe(15);
        expect(starCount(3, 0)).toBe(15);
        expect(starCount(3, 300)).toBe(15);
        expect(starCount(1, 353)).toBe(15);
        expect(starCount(6, 353)).toBe(30);
        // Twice the width, twice the stars; past 1440 px, no more
        expect(starCount(3, 706)).toBe(30);
        expect(starCount(3, 1440)).toBe(61);
        expect(starCount(3, 3000)).toBe(61);
    });

    it('half of them twinkle, down to a quarter to under half of their light, over 2 to 4 s; a still night\'s don\'t', () => {
        const layer = document.createElement('div');
        const [field, moon] = drawNight(layer, 400, { moon: true });
        expect(field.className).toBe('stars-field');
        expect(moon.className).toBe('moon-gsap');
        const twinkling = [...field.querySelectorAll<HTMLElement>('.star-gsap.twinkle')];
        expect(twinkling.length).toBeGreaterThan(140);
        expect(twinkling.length).toBeLessThan(260);
        for (const star of twinkling) {
            const share = parseFloat(star.style.getPropertyValue('--star-dim')) / parseFloat(star.style.getPropertyValue('--star-o'));
            expect(share).toBeGreaterThan(0.2);
            expect(share).toBeLessThan(0.5);
            const period = parseFloat(star.style.animationDuration);
            expect(period).toBeGreaterThanOrEqual(2);
            expect(period).toBeLessThanOrEqual(4);
        }
        const [still] = drawNight(document.createElement('div'), 400, { moon: false, still: true });
        expect(still.querySelectorAll('.twinkle')).toHaveLength(0);
        expect(still.querySelectorAll('.star-gsap')).toHaveLength(400);
    });
});
