import { describe, it, expect, vi, afterEach } from 'vitest';
import { daylight, daylightChange, solarState, sunEvent } from '../../src/solar';
import { formatDaylightChange, daysToLastMonth } from '../../src/localize';
import { daylightDeltaText, sunShift } from '../../src/sun-tracker-card';
import type { HomeAssistant } from '../../src/types';

type Place = readonly [number, number];
const AMSTERDAM: Place = [52.37, 4.9];
const SYDNEY: Place = [-33.87, 151.21];
const TROMSO: Place = [69.65, 18.96];
const EQUATOR: Place = [0, 0];

/** Local mean noon of a date at a place, near its solar noon */
const noonOf = (date: string, [, longitude]: Place) => Date.parse(`${date}T12:00:00Z`) - longitude * 4 * 60_000;
const minutesOn = (place: Place, date: string) => daylight(place[0], place[1], noonOf(date, place)).minutes;
const change = (place: Place, date: string, back = 1) => daylightChange(place[0], place[1], noonOf(date, place), back);

/** Home Assistant at a place, its times in the place's zone */
const hassAt = ([latitude, longitude]: Place, time_zone: string, language = 'en') => ({
    states: {}, language, locale: { language, time_format: '24', time_zone: 'server' },
    config: { latitude, longitude, time_zone }, localize: () => '',
}) as unknown as HomeAssistant;

describe('the day\'s length, from the sun\'s path', () => {
    it('gives Amsterdam its published solstices and the equator its twelve hours and a little', () => {
        // 8:48 to 16:29 on the shortest day, 5:18 to 22:06 on the longest; refraction and the disc add some 7 minutes at the equator
        expect(Math.abs(minutesOn(AMSTERDAM, '2026-12-21') - 460.7)).toBeLessThan(1.5);
        expect(Math.abs(minutesOn(AMSTERDAM, '2026-06-21') - 1008.5)).toBeLessThan(1.5);
        expect(Math.abs(minutesOn(EQUATOR, '2026-03-20') - 727)).toBeLessThan(2);
    });

    it('agrees with the sunrise and sunset the sun entity reports for a place, to the minute', () => {
        const [latitude, longitude] = AMSTERDAM;
        // Just after midnight UTC, the next sunrise and sunset are that day's
        const s = solarState(latitude, longitude, new Date('2026-11-23T00:30:00Z')).attributes;
        const fromState = (Date.parse(s.next_setting!) - Date.parse(s.next_rising!)) / 60_000;
        expect(Math.abs(minutesOn(AMSTERDAM, '2026-11-23') - fromState)).toBeLessThan(1);
    });

    it('turns at both solstices, the other way south of the equator', () => {
        expect(change(AMSTERDAM, '2026-12-19')).toBeLessThan(0);
        expect(change(AMSTERDAM, '2026-12-23')).toBeGreaterThan(0);
        expect(change(AMSTERDAM, '2026-06-19')).toBeGreaterThan(0);
        expect(change(AMSTERDAM, '2026-06-23')).toBeLessThan(0);
        expect(change(SYDNEY, '2026-12-19')).toBeGreaterThan(0);
        expect(change(SYDNEY, '2026-12-23')).toBeLessThan(0);
        // A few seconds a day either side of the turn; nearly four minutes at the equinox
        expect(Math.abs(change(AMSTERDAM, '2026-12-21')!)).toBeLessThan(15);
        expect(change(AMSTERDAM, '2026-03-20')).toBeGreaterThan(200);
        expect(change(AMSTERDAM, '2026-03-20')).toBeLessThan(260);
    });

    it('steps evenly from day to day through the solstice, to the second', () => {
        const days = Array.from({ length: 14 }, (_, i) => change(AMSTERDAM, `2026-12-${String(15 + i).padStart(2, '0')}`)!);
        const steps = days.slice(1).map((d, i) => d - days[i]);
        // About 6.6 s a day here; a crossing found a second off would show as a step of 5 or 8
        for (const step of steps) expect(step, days.join(' ')).toBeGreaterThanOrEqual(6), expect(step, days.join(' ')).toBeLessThanOrEqual(7);
    });

    it('says nothing through a polar day or night, and counts one before today as no daylight or all of it', () => {
        expect(change(TROMSO, '2026-12-15')).toBeNull();
        expect(change(TROMSO, '2026-06-21')).toBeNull();
        expect(daylight(TROMSO[0], TROMSO[1], noonOf('2027-01-08', TROMSO))).toEqual({ minutes: 0, polar: true });
        expect(daylight(TROMSO[0], TROMSO[1], noonOf('2026-06-21', TROMSO))).toEqual({ minutes: 1440, polar: true });
        // The sun is back by 20 January; a week before, it hadn't risen
        const today = daylight(TROMSO[0], TROMSO[1], noonOf('2027-01-20', TROMSO));
        expect(today.polar).toBe(false);
        expect(change(TROMSO, '2027-01-20', 12)).toBe(Math.round(today.minutes * 60));
    });

    it('counts the same date last month, the last of a shorter month standing in', () => {
        expect(daysToLastMonth(new Date(2026, 10, 23, 12))).toBe(31);
        expect(daysToLastMonth(new Date(2026, 2, 31, 12))).toBe(31);
        expect(daysToLastMonth(new Date(2026, 2, 1, 12))).toBe(28);
        expect(daysToLastMonth(new Date(2026, 0, 15, 12))).toBe(31);
        // In the card's time zone: 1 December in Auckland while it's still 30 November in Europe
        const auckland = hassAt([-36.85, 174.76], 'Pacific/Auckland');
        expect(daysToLastMonth(new Date('2026-11-30T20:00:00Z'), auckland)).toBe(30);
    });
});

describe('the change in words', () => {
    afterEach(() => vi.unstubAllGlobals());

    it('signs it in text, minutes and seconds, no seconds past an hour, never a zero after a figure or a minus zero', () => {
        expect(formatDaylightChange(134)).toBe('+2m 14s');
        expect(formatDaylightChange(-8)).toBe('−8s');
        expect(formatDaylightChange(4320)).toBe('+1h 12m');
        expect(formatDaylightChange(3600)).toBe('+1h');
        expect(formatDaylightChange(120)).toBe('+2m');
        expect(formatDaylightChange(0.4)).toBe('±0s');
        expect(formatDaylightChange(-0.4)).toBe('±0s');
    });

    it('in the dashboard\'s language, with Intl.DurationFormat or without it', () => {
        const en = hassAt(AMSTERDAM, 'Europe/Amsterdam');
        const uk = hassAt(AMSTERDAM, 'Europe/Kyiv', 'uk');
        if ((Intl as { DurationFormat?: unknown }).DurationFormat) {
            expect(formatDaylightChange(134, en)).toBe('+2m 14s');
            expect(formatDaylightChange(120, en)).toBe('+2m');
            // Nothing is still a figure: "±0s", not "±"
            expect(formatDaylightChange(0.4, en)).toBe('\u00b10s');
            expect(formatDaylightChange(0, uk)).toMatch(/^\u00b10/);
        }
        vi.stubGlobal('Intl', { ...Intl, DurationFormat: undefined });
        expect(formatDaylightChange(-134, uk)).toBe('−2 хв 14 с');
        expect(formatDaylightChange(4320, uk)).toBe('+1 год 12 хв');
        expect(formatDaylightChange(134, en)).toBe('+2m 14s');
    });

    it('since yesterday by default, last week or last month, or not at all; nothing without coordinates', () => {
        const hass = hassAt(AMSTERDAM, 'Europe/Amsterdam');
        const now = new Date('2026-11-23T11:00:00Z');
        expect(daylightDeltaText(hass, undefined, now)).toMatch(/^−\d+m( \d+s)? since yesterday$/);
        expect(daylightDeltaText(hass, 'week', now)).toMatch(/^−\d+m( \d+s)? since last week$/);
        expect(daylightDeltaText(hass, 'month', now)).toMatch(/^−1h \d+m since last month$/);
        expect(daylightDeltaText(hass, 'none', now)).toBe('');
        const nowhere = { ...hass, config: { time_zone: 'Europe/Amsterdam' } } as unknown as HomeAssistant;
        expect(daylightDeltaText(nowhere, 'day', now)).toBe('');
        // 0° is a place too
        expect(daylightDeltaText(hassAt(EQUATOR, 'UTC'), 'day', now)).toMatch(/since yesterday$/);
        expect(daylightDeltaText(hassAt(AMSTERDAM, 'Europe/Amsterdam', 'de'), 'day', now)).toMatch(/seit gestern$/);
        expect(daylightDeltaText(hassAt(TROMSO, 'Europe/Oslo', 'nb'), 'day', new Date('2026-12-15T11:00:00Z'))).toBe('');
    });

    it('holds all day and turns at the card\'s own midnight, far from Greenwich either way', () => {
        for (const [place, zone, offset] of [[[-36.85, 174.76], 'Pacific/Auckland', 13], [[21.31, -157.86], 'Pacific/Honolulu', -10]] as const) {
            const hass = hassAt(place, zone);
            // A local time on a local date, as an instant
            const at = (date: string, hour: number) => new Date(Date.parse(`${date}T00:00:00Z`) + (hour - offset) * 3_600_000);
            const day = ['2026-11-23', '2026-11-24'].map(date => [0.5, 12, 23.5].map(h => daylightDeltaText(hass, 'day', at(date, h))));
            for (const texts of day) expect(new Set(texts).size, `${zone}: ${texts.join(' | ')}`).toBe(1);
            // Each day is its own: the noon used is that date's
            const noon = (date: string) => at(date, 12).getTime();
            expect(day[0][0]).toBe(`${formatDaylightChange(daylightChange(place[0], place[1], noon('2026-11-23'), 1)!, hass)} since yesterday`);
            expect(day[1][0]).toBe(`${formatDaylightChange(daylightChange(place[0], place[1], noon('2026-11-24'), 1)!, hass)} since yesterday`);
        }
    });
});

describe('the next sunrise\'s or sunset\'s shift', () => {
    const shift = (place: Place, zone: string, near: string, which: 'rise' | 'set', mode: 'day' | 'week' | 'month' = 'day') =>
        sunShift(hassAt(place, zone), mode, which, near);

    it('turns where it should: the earliest sunset before the solstice, the latest sunrise after it, the other way in Sydney', () => {
        expect(shift(AMSTERDAM, 'Europe/Amsterdam', '2026-12-05T15:30:00Z', 'set')).toBeLessThan(0);
        expect(shift(AMSTERDAM, 'Europe/Amsterdam', '2026-12-20T15:30:00Z', 'set')).toBeGreaterThan(0);
        expect(shift(AMSTERDAM, 'Europe/Amsterdam', '2026-12-20T07:45:00Z', 'rise')).toBeGreaterThan(0);
        expect(shift(AMSTERDAM, 'Europe/Amsterdam', '2027-01-10T07:45:00Z', 'rise')).toBeLessThan(0);
        expect(shift(AMSTERDAM, 'Europe/Amsterdam', '2026-03-10T17:30:00Z', 'set')).toBeGreaterThan(0);
        expect(shift(SYDNEY, 'Australia/Sydney', '2026-03-10T08:30:00Z', 'set')).toBeLessThan(0);
    });

    it('compares the next sunrise, tomorrow\'s, with today\'s, and a sunset past midnight with the one the night before', () => {
        const [lat, lon] = AMSTERDAM;
        const morning = sunEvent(lat, lon, Date.parse('2026-11-24T07:20:00Z'), 'rise', 1)!;
        expect(Math.abs(morning.now - Date.parse('2026-11-24T07:20:00Z'))).toBeLessThan(15 * 60_000);
        expect(Math.abs(morning.now - morning.then - 86_400_000)).toBeLessThan(3 * 60_000);
        // Reykjavík's midsummer sunset comes a few minutes after midnight
        const late = sunEvent(64.15, -21.94, Date.parse('2026-06-22T00:04:00Z'), 'set', 1)!;
        expect(Math.abs(late.now - Date.parse('2026-06-22T00:04:00Z'))).toBeLessThan(15 * 60_000);
        expect(Math.abs(late.now - late.then - 86_400_000)).toBeLessThan(60_000);
    });

    it('says nothing through a polar day or night, or without coordinates', () => {
        expect(shift(TROMSO, 'Europe/Oslo', '2026-06-21T22:00:00Z', 'set')).toBeNull();
        expect(shift(TROMSO, 'Europe/Oslo', '2026-12-15T11:00:00Z', 'rise')).toBeNull();
        const nowhere = { ...hassAt(AMSTERDAM, 'Europe/Amsterdam'), config: { time_zone: 'Europe/Amsterdam' } } as unknown as HomeAssistant;
        expect(sunShift(nowhere, 'day', 'set', '2026-11-23T15:37:00Z')).toBeNull();
        expect(shift(AMSTERDAM, 'Europe/Amsterdam', '2026-11-23T15:37:00Z', 'set', 'day')).not.toBeNull();
        expect(sunShift(hassAt(AMSTERDAM, 'Europe/Amsterdam'), 'none', 'set', '2026-11-23T15:37:00Z')).toBeNull();
    });

    it('in clock time: a week across the clock change is about an hour', () => {
        // Summer time ended on 25 October: the 28th's sunset came an hour and a quarter earlier on the clock than the 21st's
        const across = shift(AMSTERDAM, 'Europe/Amsterdam', '2026-10-28T16:15:00Z', 'set', 'week')!;
        expect(across).toBeLessThan(-4200);
        expect(across).toBeGreaterThan(-4800);
        const within = shift(AMSTERDAM, 'Europe/Amsterdam', '2026-11-11T15:50:00Z', 'set', 'week')!;
        expect(within).toBeLessThan(-600);
        expect(within).toBeGreaterThan(-900);
    });

    it('steps evenly from day to day, to the second', () => {
        const days = Array.from({ length: 14 }, (_, i) => shift(AMSTERDAM, 'Europe/Amsterdam', `2026-03-${String(1 + i).padStart(2, '0')}T17:30:00Z`, 'set')!);
        const steps = days.slice(1).map((d, i) => d - days[i]);
        for (const step of steps) expect(Math.abs(step), days.join(' ')).toBeLessThanOrEqual(2);
    });
});

describe('the tracker\'s daylight change', () => {
    type Tracker = HTMLElement & { setConfig(config: object): void; hass: unknown };
    afterEach(() => { vi.useRealTimers(); document.body.innerHTML = ''; });

    const sun = {
        entity_id: 'sun.sun', state: 'above_horizon',
        attributes: {
            elevation: 12, rising: false,
            next_rising: '2026-11-24T07:18:00Z', next_setting: '2026-11-23T15:37:00Z',
            next_dawn: '2026-11-24T06:38:00Z', next_dusk: '2026-11-23T16:17:00Z', next_noon: '2026-11-24T11:27:00Z',
        },
    };
    const homeHass = (config: object = { latitude: AMSTERDAM[0], longitude: AMSTERDAM[1], time_zone: 'Europe/Amsterdam' }) => ({
        states: { 'sun.sun': sun }, language: 'en', locale: { language: 'en', time_format: '24', time_zone: 'server' }, config, localize: () => '',
    });
    function mount(config: object, hass: object = homeHass()): Tracker {
        vi.useFakeTimers({ toFake: ['Date'] });
        vi.setSystemTime(new Date('2026-11-23T11:00:00Z'));
        const tracker = document.createElement('animated-sun-tracker-card') as Tracker;
        tracker.setConfig(config);
        document.body.appendChild(tracker);
        tracker.hass = hass;
        return tracker;
    }
    const delta = (tracker: Tracker) => tracker.shadowRoot!.querySelector('.st-metric[data-kind="daylight"] .st-delta')?.textContent ?? null;

    it('sits under the daylight, quiet, since yesterday unless set', () => {
        expect(delta(mount({ sun_entity: 'sun.sun' }))).toMatch(/^−\d+m( \d+s)? since yesterday$/);
        expect(delta(mount({ sun_entity: 'sun.sun', daylight_delta: 'month' }))).toMatch(/since last month$/);
        // Its words as its tooltip too, for a phone, where only the figure shows
        const daylight = mount({ sun_entity: 'sun.sun' }).shadowRoot!.querySelector('.st-delta')!;
        expect(daylight.getAttribute('title')).toBe(daylight.textContent);
    });

    it('leaves the daylight alone when off, without details, on the compact tracker or without coordinates', () => {
        expect(delta(mount({ sun_entity: 'sun.sun', daylight_delta: 'none' }))).toBeNull();
        expect(delta(mount({ sun_entity: 'sun.sun', show_details: false }))).toBeNull();
        expect(delta(mount({ sun_entity: 'sun.sun' }, homeHass({ time_zone: 'Europe/Amsterdam' })))).toBeNull();
        // The daylight itself is still there
        const tracker = mount({ sun_entity: 'sun.sun', daylight_delta: 'none' });
        expect(tracker.shadowRoot!.querySelector('.st-metric[data-kind="daylight"] .st-metric-value')?.textContent).toMatch(/\d/);
    });

    it('after the countdown: how much earlier or later the next sunset is, in words, and as a signed figure for a narrow line', () => {
        const tracker = mount({ sun_entity: 'sun.sun' });
        const line = tracker.shadowRoot!.querySelector('.st-countdown')!;
        expect(line.querySelector('.st-shift-words')?.textContent).toMatch(/^(\d+m )?\d+s earlier$|^\d+m earlier$/);
        expect(line.querySelector('.st-shift-sign')?.textContent).toMatch(/^\u2212/);
        expect(line.querySelector('.st-shift-sign')?.getAttribute('aria-hidden')).toBe('true');
        // What it's compared with: its tooltip, and the end of the phrase screen readers hear
        expect(line.querySelector('.st-shift')?.getAttribute('title')).toMatch(/^(\d+m )?\d+s earlier than yesterday$|^\d+m earlier than yesterday$/);
        expect(line.querySelector('.st-shift-period')?.textContent).toBe(' than yesterday');
        expect(mount({ sun_entity: 'sun.sun', daylight_delta: 'week' }).shadowRoot!.querySelector('.st-shift')?.getAttribute('title')).toMatch(/earlier than last week$/);
        expect(mount({ sun_entity: 'sun.sun', daylight_delta: 'month' }).shadowRoot!.querySelector('.st-shift')?.getAttribute('title')).toMatch(/earlier than last month$/);
        expect(mount({ sun_entity: 'sun.sun', compact: true }).shadowRoot!.querySelector('.st-countdown .st-shift')).not.toBeNull();
        expect(mount({ sun_entity: 'sun.sun', daylight_delta: 'none' }).shadowRoot!.querySelector('.st-shift')).toBeNull();
        expect(mount({ sun_entity: 'sun.sun', show_header: false }).shadowRoot!.querySelector('.st-shift')).toBeNull();
        const css = tracker.shadowRoot!.querySelector('style')?.textContent ?? '';
        expect(css).toMatch(/\.st-shift-period,\s*\.st-shift\[data-form="sign"\] \.st-shift-words \{[^}]*clip-path: inset\(50%\)/);
        expect(css).toMatch(/\.st-countdown \{[^}]*white-space: nowrap/);
    });

    it('leaves the compact tracker\'s sky to the other sunrise or sunset: its change is the shift after the countdown', () => {
        const tracker = mount({ sun_entity: 'sun.sun', compact: true });
        expect(tracker.shadowRoot!.querySelectorAll('.st-chart-note')).toHaveLength(1);
        expect(tracker.shadowRoot!.querySelector('.st-delta')).toBeNull();
        expect(tracker.shadowRoot!.querySelector('.st-chart')!.getAttribute('aria-label')).not.toMatch(/Daylight/);
    });

    it('for another place, by that place\'s sun: longer days in Sydney while Amsterdam\'s shorten', () => {
        const tracker = mount({ latitude: SYDNEY[0], longitude: SYDNEY[1], time_zone: 'Australia/Sydney' });
        expect(delta(tracker)).toMatch(/^\+\d+m( \d+s)? since yesterday$/);
    });

    it('takes no room of its own: on the daylight\'s line, its words for screen readers where only the figure fits', () => {
        const tracker = mount({ sun_entity: 'sun.sun' });
        const value = tracker.shadowRoot!.querySelector('.st-metric[data-kind="daylight"] .st-metric-value')!;
        expect(value.querySelector('.st-delta-figure')?.textContent).toMatch(/^\u2212\d+m( \d+s)?$/);
        expect(value.querySelector('.st-delta-words')?.textContent).toBe(' since yesterday');
        const css = tracker.shadowRoot!.querySelector('style')?.textContent ?? '';
        // The words step aside visually, never out of the accessibility tree; the whole change goes only when even the figure doesn't fit
        expect(css).toMatch(/\.st-delta\[data-words="off"\] \.st-delta-words \{[^}]*clip-path: inset\(50%\)/);
        expect(css).toMatch(/\.st-delta\[hidden\] \{ display: none; \}/);
        expect(css).not.toMatch(/data-fit="snug"/);
    });
});
