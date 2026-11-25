import { describe, it, expect, afterEach } from 'vitest';
import '../../src/animated-weather-card';
import { moonCycle, moonLit, moonLook } from '../../src/moon';
import { drawNight } from '../../src/stars-animation';
import { getMainCardStyles } from '../../src/styles';

// The night's moon in its real phase (issue #12)

type Card = HTMLElement & { setConfig(config: object): void; hass: unknown };

afterEach(() => document.body.replaceChildren());

/** How far apart two places in the moon's month are, either way round */
const apart = (a: number, b: number) => Math.min(Math.abs(a - b), 1 - Math.abs(a - b));
/** A day of the moon's month */
const DAY = 1 / 29.53;

describe('the moon\'s phase', () => {
    it('follows the date: 2026\'s November new moon, first quarter, full moon and last quarter', () => {
        // Published times, UTC: new 9 Nov 07:02, first quarter 17 Nov 11:48, full 24 Nov 14:53, last quarter 1 Dec 06:08
        expect(apart(moonCycle(new Date(Date.UTC(2026, 10, 9, 7, 2))), 0)).toBeLessThan(DAY);
        expect(apart(moonCycle(new Date(Date.UTC(2026, 10, 17, 11, 48))), 0.25)).toBeLessThan(DAY);
        expect(apart(moonCycle(new Date(Date.UTC(2026, 10, 24, 14, 53))), 0.5)).toBeLessThan(DAY);
        expect(apart(moonCycle(new Date(Date.UTC(2026, 11, 1, 6, 8))), 0.75)).toBeLessThan(DAY);
    });

    it('keeps within the phase a moon entity names, and leaves the date\'s when it already is', () => {
        // 19 November 2026: a waxing gibbous moon, two days past first quarter
        const day = new Date(Date.UTC(2026, 10, 19, 20));
        const date = moonCycle(day);
        expect(date).toBeGreaterThan(7.5 / 28);
        expect(date).toBeLessThan(13.5 / 28);
        expect(moonCycle(day, 'waxing_gibbous')).toBe(date);
        // An entity a few hours ahead or behind the date wins, at the edge of its phase nearest the date's
        expect(moonCycle(day, 'first_quarter')).toBeCloseTo(7.5 / 28, 6);
        expect(moonCycle(day, 'full_moon')).toBeCloseTo(13.5 / 28, 6);
        // The new moon spans the month's turn
        expect(apart(moonCycle(new Date(Date.UTC(2026, 10, 10, 20)), 'new_moon'), 0)).toBeLessThanOrEqual(0.5 / 28 + 1e-9);
        // A state that isn't one of the eight is the date's
        for (const state of ['unavailable', 'constructor', '"><img src=x onerror=alert(1)>', '']) expect(moonCycle(day, state)).toBe(date);
    });

    it('is lit as much as its phase: none new, half at the quarters, all of it full', () => {
        expect(moonLit(0)).toBeCloseTo(0);
        expect(moonLit(0.25)).toBeCloseTo(0.5);
        expect(moonLit(0.5)).toBeCloseTo(1);
        expect(moonLit(0.75)).toBeCloseTo(0.5);
    });
});

describe('how the moon looks', () => {
    /** The mask's path: from its terminator out to the side it lights */
    const path = (cycle: number, southern = false) => decodeURIComponent(moonLook(cycle, southern).mask).match(/ d='([^']+)'/)![1];

    it('lights a waxing moon on the right north of the equator, a waning one on the left; the other way round south of it', () => {
        expect(path(0.1)).toMatch(/L130 130L130 -30Z$/);
        expect(path(0.9)).toMatch(/L-30 130L-30 -30Z$/);
        expect(path(0.1, true)).toMatch(/L-30 130L-30 -30Z$/);
        expect(path(0.9, true)).toMatch(/L130 130L130 -30Z$/);
    });

    it('bulges its terminator towards the lit side for a crescent, away from it for a gibbous moon, straight at the quarters', () => {
        // From the top of the disc to its bottom: sweep 1 bulges right, 0 left
        expect(path(0.1)).toMatch(/A40\.5 50 0 0 1 50 100/);
        expect(path(0.4)).toMatch(/A40\.5 50 0 0 0 50 100/);
        expect(path(0.25)).toMatch(/A0\.0 50 0 0 [01] 50 100/);
        expect(path(0.6, true)).toMatch(/A40\.5 50 0 0 0 50 100/);
    });

    it('is a mask the CSS can use whole: an SVG data URI, nothing in it unescaped', () => {
        const { mask } = moonLook(0.3);
        expect(mask).toMatch(/^url\("data:image\/svg\+xml,%3Csvg[^"#<>]*"\)$/);
    });

    it('glows as bright as it\'s lit, and never not at all', () => {
        const alpha = (cycle: number) => Number(/rgba\(226, 232, 255, ([\d.]+)\)/.exec(moonLook(cycle).halo)![1]);
        expect(alpha(0.5)).toBeCloseTo(0.28);
        expect(alpha(0)).toBeGreaterThan(0.08);
        expect(alpha(0.25)).toBeGreaterThan(alpha(0.1));
    });

    it('lights the moon\'s texture through the mask, over a faint disc of earthshine; without the mask, full as before', () => {
        const css = getMainCardStyles();
        expect(css).toMatch(/\.moon-gsap::after \{[^}]*-webkit-mask: var\(--awc-moon-mask, none\) center \/ 100% 100% no-repeat;[^}]*mask: var\(--awc-moon-mask, none\)/);
        expect(css).toMatch(/\.moon-gsap::before \{[^}]*box-shadow: var\(--awc-moon-halo, /);
    });
});

describe('the moon on the card', () => {
    const hass = (moonState?: string, latitude?: number) => ({
        states: {
            'weather.home': { entity_id: 'weather.home', state: 'clear-night', attributes: { temperature: 12, friendly_name: 'Home' } },
            'sun.sun': { entity_id: 'sun.sun', state: 'below_horizon', attributes: { elevation: -30, rising: false } },
            ...(moonState !== undefined ? { 'sensor.moon_phase': { entity_id: 'sensor.moon_phase', state: moonState, attributes: {} } } : {}),
        },
        config: { time_zone: 'UTC', ...(latitude !== undefined ? { latitude, longitude: 0 } : {}) },
        language: 'en',
        localize: () => '',
    });
    const mount = (config: object, h: object) => {
        const card = document.createElement('animated-weather-card') as Card;
        card.setConfig({ entity: 'weather.home', ...config });
        document.body.append(card);
        card.hass = h;
        return card.querySelector('.animation-layer') as HTMLElement;
    };

    it('draws tonight\'s phase without a moon entity, and keeps to the one it names with one', () => {
        const now = moonCycle(new Date());
        const plain = mount({}, hass());
        expect(plain.style.getPropertyValue('--awc-moon-mask')).toBe(moonLook(now).mask);
        expect(plain.style.getPropertyValue('--awc-moon-halo')).toBe(moonLook(now).halo);
        // The opposite phase to tonight's: the entity's
        const other = now < 0.5 ? 'waning_gibbous' : 'waxing_crescent';
        const named = mount({ moon_entity: 'sensor.moon_phase' }, hass(other));
        expect(named.style.getPropertyValue('--awc-moon-mask')).toBe(moonLook(moonCycle(new Date(), other)).mask);
        expect(named.style.getPropertyValue('--awc-moon-mask')).not.toBe(moonLook(now).mask);
    });

    it('turns it round south of the equator, by Home Assistant\'s latitude', () => {
        const north = mount({}, hass(undefined, 38.7));
        const south = mount({}, hass(undefined, -33.9));
        expect(south.style.getPropertyValue('--awc-moon-mask')).toBe(moonLook(moonCycle(new Date()), true).mask);
        expect(south.style.getPropertyValue('--awc-moon-mask')).not.toBe(north.style.getPropertyValue('--awc-moon-mask'));
    });

    it('never writes a moon entity\'s state into the card, and keeps its mask off the card\'s own style', () => {
        const layer = mount({ moon_entity: 'sensor.moon_phase' }, hass('"><img src=x onerror="alert(1)">'));
        const card = layer.closest('animated-weather-card')!;
        expect(card.querySelector('img')).toBeNull();
        expect(layer.style.getPropertyValue('--awc-moon-mask')).toBe(moonLook(moonCycle(new Date())).mask);
        expect(card.querySelector('.animated-weather-card')!.getAttribute('style') ?? '').not.toContain('url(');
    });
});

describe('no star behind the moon', () => {
    it('places the stars clear of the moon\'s disc, which would show them through its earthshine', () => {
        const rect = (left: number, top: number, right: number, bottom: number) =>
            ({ left, top, right, bottom, width: right - left, height: bottom - top, x: left, y: top, toJSON() {} }) as DOMRect;
        // A 400 × 200 sky with the moon's 34 px disc at 84% across, 20% down
        const layer = document.createElement('div');
        layer.getBoundingClientRect = () => rect(0, 0, 400, 200);
        const moon = rect(319, 23, 353, 57);
        const create = document.createElement.bind(document);
        const made = (tag: string) => {
            const el = create(tag);
            el.getBoundingClientRect = () => (el.className === 'moon-gsap' ? moon : rect(0, 0, 0, 0));
            return el;
        };
        document.createElement = made as typeof document.createElement;
        let field: HTMLElement, disc: HTMLElement;
        try {
            [field, disc] = drawNight(layer, 300, { moon: true });
        } finally {
            document.createElement = create;
        }
        // Over the stars
        expect([...layer.children]).toEqual([field, disc]);
        const shown = [...field.querySelectorAll<HTMLElement>('.star-gsap')].filter(s => !s.classList.contains('awc-veiled'));
        expect(shown.length).toBeGreaterThan(290);
        for (const star of shown) {
            const x = parseFloat(star.style.left) * 4, y = parseFloat(star.style.top) * 2, size = parseFloat(star.style.width);
            expect(x + size > moon.left - 20 && x < moon.right + 20 && y + size > moon.top - 10 && y < moon.bottom + 10).toBe(false);
        }
    });
});
