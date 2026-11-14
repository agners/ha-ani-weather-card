import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import '../../src/animated-weather-card';
import '../../src/sun-tracker-card';
import { skyColors } from '../../src/sky';
import { clearStarsFromWords, drawNight, starCount, veilStars } from '../../src/stars-animation';

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

describe('no star behind a word', () => {
    const rect = (left: number, top: number, right: number, bottom: number) =>
        ({ left, top, right, bottom, width: right - left, height: bottom - top, x: left, y: top, toJSON() {} }) as DOMRect;
    const at = (el: HTMLElement, r: DOMRect) => { el.getBoundingClientRect = () => r; return el; };

    it('places each star clear of the words where there is room, and veils one that finds none', () => {
        // A 400 × 200 sky; stars keep its top 70% (140 px). A word over the left half of that band
        const layer = at(document.createElement('div'), rect(0, 0, 400, 200));
        const word = rect(0, 0, 200, 140);
        const [field] = drawNight(layer, 300, { moon: false, words: [word] });
        const stars = [...field.querySelectorAll<HTMLElement>('.star-gsap')];
        expect(stars).toHaveLength(300);
        const shown = stars.filter(s => !s.classList.contains('awc-veiled'));
        // Twelve tries each at a sky not quite half free: hardly any star finds no room
        expect(shown.length).toBeGreaterThan(290);
        for (const star of shown) {
            const x = parseFloat(star.style.left) * 4, y = parseFloat(star.style.top) * 2, size = parseFloat(star.style.width);
            const onWord = x + size > word.left - 20 && x < word.right + 20 && y + size > word.top - 10 && y < word.bottom + 10;
            expect(onWord).toBe(false);
        }
    });

    it('veils a star a word moves over, and shows it again once the word moves away', () => {
        const a = at(document.createElement('div'), rect(50, 20, 52, 22));
        const b = at(document.createElement('div'), rect(300, 20, 302, 22));
        veilStars([a, b], [rect(10, 10, 100, 30)]);
        expect([a.classList.contains('awc-veiled'), b.classList.contains('awc-veiled')]).toEqual([true, false]);
        veilStars([a, b], [rect(280, 10, 320, 30)]);
        expect([a.classList.contains('awc-veiled'), b.classList.contains('awc-veiled')]).toEqual([false, true]);
        // Twenty px of room beside a word, so a star on its line doesn't read as its punctuation; ten above and below
        veilStars([a], [rect(71, 20, 80, 30)]);
        expect(a.classList.contains('awc-veiled')).toBe(true);
        veilStars([a], [rect(73, 20, 80, 30)]);
        expect(a.classList.contains('awc-veiled')).toBe(false);
        veilStars([a], [rect(40, 31, 80, 40)]);
        expect(a.classList.contains('awc-veiled')).toBe(true);
        veilStars([a], [rect(40, 33, 80, 40)]);
        expect(a.classList.contains('awc-veiled')).toBe(false);
    });

    it('reads the card\'s words line by line, and never the sky\'s own text, like a plane\'s tag', () => {
        const card = document.createElement('div');
        card.innerHTML = '<div class="weather-info"><div class="weather-desc">Clear, night</div></div>'
            + '<div class="animation-layer"><div class="stars-field"><div class="star-gsap"></div><div class="star-gsap"></div></div><span class="plane-tag">LH 400</span></div>';
        document.body.append(card);
        const [onWord, onTag] = [...card.querySelectorAll<HTMLElement>('.star-gsap')];
        at(onWord, rect(50, 20, 52, 22));
        at(onTag, rect(320, 20, 322, 22));
        // The text's own line, not its block (which spans the card)
        const proto = Range.prototype as unknown as { getClientRects?: () => DOMRect[] };
        const before = proto.getClientRects;
        proto.getClientRects = function (this: Range) {
            const el = this.startContainer.parentElement;
            return el?.classList.contains('weather-desc') ? [rect(10, 10, 100, 30)] : el?.classList.contains('plane-tag') ? [rect(300, 10, 360, 30)] : [];
        };
        try {
            clearStarsFromWords(card);
        } finally {
            if (before) proto.getClientRects = before; else delete proto.getClientRects;
            card.remove();
        }
        expect(onWord.classList.contains('awc-veiled')).toBe(true);
        expect(onTag.classList.contains('awc-veiled')).toBe(false);
    });
});
