import { describe, it, expect, afterEach, vi } from 'vitest';
import '../../src/animated-weather-card';
import '../../src/sun-tracker-card';
import { solarState } from '../../src/solar';
import { placeOf, locate, placeSun } from '../../src/place';
import { cardTimeZone } from '../../src/localize';
import { weatherOnSun } from '../../src/weather-share';

// Weather in another place (issue #34) and its own sun (issue #35): latitude, longitude and time_zone

type Card = HTMLElement & { setConfig(c: object): void; hass: unknown };
const mounted: HTMLElement[] = [];
afterEach(() => { for (const c of mounted.splice(0)) c.remove(); vi.useRealTimers(); });
const MIN = 60_000;
const near = (iso: string | null, want: string, minutes = 3) => {
    expect(iso).not.toBeNull();
    expect(Math.abs(Date.parse(iso!) - Date.parse(want)) / MIN, `${iso} vs ${want}`).toBeLessThanOrEqual(minutes);
};

describe('the sun from coordinates', () => {
    it('rises and sets where the published times say: Sydney and Lisbon, 19 November 2026', () => {
        // Sydney: sunrise 05:41, sunset 19:40 (UTC+11)
        const sydney = solarState(-33.8688, 151.2093, new Date('2026-11-19T00:00:00Z'));
        near(sydney.attributes.next_setting, '2026-11-19T08:40:00Z');
        near(sydney.attributes.next_rising, '2026-11-19T18:41:00Z');
        expect(sydney.state).toBe('above_horizon');
        expect(sydney.attributes.rising).toBe(true);
        // Lisbon, in the afternoon: on its way down, sunset at 17:19
        const lisbon = solarState(38.7223, -9.1393, new Date('2026-11-19T14:00:00Z'));
        near(lisbon.attributes.next_setting, '2026-11-19T17:19:00Z');
        expect(lisbon.attributes.rising).toBe(false);
        expect(lisbon.attributes.elevation).toBeGreaterThan(15);
    });

    it('has no sunrise in a polar night, nor last light in a white night', () => {
        const tromso = solarState(69.6492, 18.9553, new Date('2026-12-15T11:00:00Z'));
        expect(tromso.state).toBe('below_horizon');
        expect([tromso.attributes.next_rising, tromso.attributes.next_setting]).toEqual([null, null]);
        const reykjavik = solarState(64.1466, -21.9426, new Date('2026-06-21T12:00:00Z'));
        expect(reykjavik.attributes.next_dusk).toBeNull();
        expect(reykjavik.state).toBe('above_horizon');
    });
});

describe('a place', () => {
    it('is none without the options; the coordinates go together and in range; the time zone is a real one', () => {
        expect(placeOf({})).toBeNull();
        expect(placeOf({ latitude: -33.87, longitude: 151.21 })?.sunId).toBe('sun.awc_m338700_1512100');
        expect(placeOf({ latitude: '48.85', longitude: '2.35' })?.latitude).toBe(48.85);
        expect(placeOf({ time_zone: 'Europe/Rome' })).toMatchObject({ timeZone: 'Europe/Rome', sunId: undefined });
        expect(() => placeOf({ latitude: 10 })).toThrow(/go together/);
        expect(() => placeOf({ latitude: 95, longitude: 0 })).toThrow(/latitude/);
        expect(() => placeOf({ latitude: 10, longitude: 'east' })).toThrow(/longitude/);
        expect(() => placeOf({ time_zone: 'Mars/Olympus' })).toThrow(/time_zone/);
    });

    it('is Home Assistant seen from there: the same states, services and connection, its own sun, coordinates and time zone', () => {
        const callService = vi.fn();
        const hass = { states: { 'weather.home': { state: 'sunny' } }, config: { latitude: 38.7, longitude: -9.1, time_zone: 'Europe/Lisbon' }, locale: { language: 'en', time_format: '24', time_zone: 'local' }, callService } as never;
        const place = placeOf({ latitude: -33.87, longitude: 151.21, time_zone: 'Australia/Sydney' })!;
        const seen = locate(hass, place, placeSun(place)) as unknown as { states: Record<string, { state: string }>; config: Record<string, unknown>; callService: unknown };
        expect(seen.states['weather.home'].state).toBe('sunny');
        expect(seen.states[place.sunId!].state).toMatch(/_horizon$/);
        expect((hass as { states: Record<string, unknown> }).states[place.sunId!]).toBeUndefined();
        expect(seen.config).toMatchObject({ latitude: -33.87, longitude: 151.21, time_zone: 'Australia/Sydney' });
        expect(cardTimeZone(seen as never)).toBe('Australia/Sydney');
        expect(seen.callService).toBe(callService);
        // Seen from the same place, it stays as it is
        expect(locate(seen as never, place)).toBe(seen);
        // The card's weather says its clear sky by the place's sun; Home Assistant's own entity is left as it is
        const night = { entity_id: place.sunId, state: 'below_horizon', attributes: {} } as never;
        const fromThere = locate(hass, place, night, ['weather.home', undefined, 'weather.gone']) as unknown as { states: Record<string, { state: string }> };
        expect(fromThere.states['weather.home'].state).toBe('clear-night');
        expect((hass as { states: Record<string, { state: string }> }).states['weather.home'].state).toBe('sunny');
        expect(fromThere.states['weather.gone']).toBeUndefined();
    });
});

/** Home, by day: sun.sun says the sun is high; the place is Sydney */
function homeHass() {
    return {
        states: {
            'weather.home': { entity_id: 'weather.home', state: 'clear-night', attributes: { temperature: 18, humidity: 70, friendly_name: 'Sydney' } },
            'sun.sun': { entity_id: 'sun.sun', state: 'above_horizon', attributes: { elevation: 30, rising: false, next_rising: '2026-11-20T07:24:00Z', next_setting: '2026-11-19T17:20:00Z' } },
        },
        config: { latitude: 38.72, longitude: -9.14, time_zone: 'Europe/Lisbon' },
        language: 'en', locale: { language: 'en', time_format: '24', time_zone: 'server' },
        localize: () => '',
    };
}
const SYDNEY = { latitude: -33.8688, longitude: 151.2093, time_zone: 'Australia/Sydney' };

describe('the weather card in another place', () => {
    function mount(config: object) {
        const card = document.createElement('animated-weather-card') as Card;
        card.setConfig({ entity: 'weather.home', ...config });
        document.body.append(card);
        card.hass = homeHass();
        mounted.push(card);
        return card.querySelector('.animated-weather-card') as HTMLElement;
    }

    it('takes its sky from that place\'s sun, shows its sunrise in its time, and its moon south of the equator', () => {
        vi.useFakeTimers({ toFake: ['Date'] });
        // 21:00 in Sydney: night there, day at home
        vi.setSystemTime(new Date('2026-11-19T10:00:00Z'));
        const root = mount(SYDNEY);
        expect(root.dataset.phase).toBe('night');
        const sun = root.querySelector('.attribute[data-kind="sun"]')!;
        expect(sun.querySelector('.attribute-label span')?.textContent).toBe('Sunrise');
        expect(sun.querySelector('.attribute-text')?.textContent).toMatch(/^05:4[01]$/);
        expect(root.querySelector('.animation-layer')!.getAttribute('data-moon')).toMatch(/s$/);
        // At home's own, the same moment is day
        expect(mount({}).dataset.phase).toBe('day');
        // The coordinates win over sun_entity, which can only be home's sun.sun
        expect(mount({ ...SYDNEY, sun_entity: 'sun.sun' }).dataset.phase).toBe('night');
    });

    it('moves with that sun each minute, with no update from Home Assistant', () => {
        vi.useFakeTimers({ toFake: ['Date', 'setInterval', 'clearInterval'] });
        // 19:00 in Sydney, before its sunset at 19:40
        vi.setSystemTime(new Date('2026-11-19T08:00:00Z'));
        const root = mount(SYDNEY);
        expect(root.dataset.phase).not.toBe('night');
        vi.advanceTimersByTime(100 * MIN);
        expect(root.dataset.phase).toBe('night');
    });

    it('names a clear sky by that place\'s sun, whatever the weather entity says by Home Assistant\'s own', async () => {
        vi.useFakeTimers({ toFake: ['Date'] });
        const seen = async (state: string, config: object) => {
            const hass = homeHass();
            (hass.states['weather.home'] as { state: string }).state = state;
            const card = document.createElement('animated-weather-card') as Card;
            card.setConfig({ entity: 'weather.home', ...config });
            document.body.append(card);
            card.hass = hass;
            mounted.push(card);
            const root = card.querySelector('.animated-weather-card') as HTMLElement;
            const clear = () => ['sunny', 'clear-night'].filter(c => root.classList.contains(c)).join();
            for (let i = 0; i < 50 && !clear() && !/cloud/.test(root.className); i++) await new Promise(r => setTimeout(r, 20));
            const sky = clear();
            return { sky, words: root.querySelector('.weather-desc')?.textContent, ha: hass.states['weather.home'].state };
        };
        // 21:00 in Sydney: an entity that says sunny by home's sun, which is up, reads as Sydney's clear night
        vi.setSystemTime(new Date('2026-11-19T10:00:00Z'));
        expect(await seen('sunny', SYDNEY)).toEqual({ sky: 'clear-night', words: 'Clear, night', ha: 'sunny' });
        // At home it's still sunny
        expect(await seen('sunny', {})).toMatchObject({ sky: 'sunny', words: 'Sunny' });
        // 11:00 in Sydney: clear night by home's sun is Sydney's sunny morning
        vi.setSystemTime(new Date('2026-11-19T00:00:00Z'));
        expect(await seen('clear-night', SYDNEY)).toEqual({ sky: 'sunny', words: 'Sunny', ha: 'clear-night' });
        // Only a clear sky: the rest is the weather's own
        expect((await seen('partlycloudy', SYDNEY)).words).toBe('Partly cloudy');
        // A time zone alone gives no sun of its own, so the entity's word stands
        expect((await seen('sunny', { time_zone: 'Australia/Sydney' })).words).toBe('Sunny');
    });

    it('says what\'s wrong with a place it can\'t use', () => {
        const card = document.createElement('animated-weather-card') as Card;
        expect(() => card.setConfig({ entity: 'weather.home', latitude: 120, longitude: 0 })).toThrow(/latitude/);
        expect(() => card.setConfig({ entity: 'weather.home', time_zone: 'Nowhere/Here' })).toThrow(/time_zone/);
    });
});

describe('the sun tracker in another place', () => {
    function mount(config: object) {
        const card = document.createElement('animated-sun-tracker-card') as Card;
        card.setConfig(config);
        document.body.append(card);
        card.hass = homeHass();
        mounted.push(card);
        return card;
    }

    it('draws that place\'s sun with no sun entity, its times in its time zone; it needs one or the other', () => {
        vi.useFakeTimers({ toFake: ['Date'] });
        vi.setSystemTime(new Date('2026-11-19T10:00:00Z'));
        const card = mount(SYDNEY);
        const text = card.shadowRoot!.textContent ?? '';
        expect(text).not.toMatch(/No sun data/);
        expect(text).toMatch(/05:4[01]/);
        expect(() => (document.createElement('animated-sun-tracker-card') as Card).setConfig({})).toThrow(/sun_entity/);
    });

    it('pairs with a weather card on the same place, as on the same sun', () => {
        const weather = document.createElement('animated-weather-card') as Card;
        weather.setConfig({ entity: 'weather.home', ...SYDNEY });
        document.body.append(weather);
        mounted.push(weather);
        expect(weatherOnSun(placeOf(SYDNEY)!.sunId)).toBe('weather.home');
    });
});

describe('the place in the editors', () => {
    it('writes the coordinates as numbers and the time zone by name, and nothing for an empty field, in all three', async () => {
        await import('../../src/animated-weather-card-editor');
        for (const [tag, type] of [['animated-weather-card-editor', 'custom:animated-weather-card'], ['animated-forecast-card-editor', 'custom:animated-forecast-card'], ['animated-sun-tracker-editor', 'custom:animated-sun-tracker-card']] as const) {
            const ed = document.createElement(tag) as HTMLElement & { setConfig(c: object): void };
            ed.setConfig({ type, entity: 'weather.home', sun_entity: 'sun.sun' });
            document.body.append(ed);
            mounted.push(ed);
            for (let i = 0; i < 100 && !ed.querySelector('#latitude'); i++) await new Promise(resolve => setTimeout(resolve, 20));
            const sent: Array<Record<string, unknown>> = [];
            ed.addEventListener('config-changed', e => sent.push((e as CustomEvent).detail.config));
            const set = (id: string, value: string) => {
                const field = ed.querySelector(`#${id}`) as HTMLInputElement;
                expect(field, `${tag} #${id}`).not.toBeNull();
                field.value = value;
                field.dispatchEvent(new Event('change'));
            };
            set('latitude', '-33.87');
            set('longitude', '151.21');
            set('time_zone', ' Australia/Sydney ');
            expect(sent.at(-1), tag).toMatchObject({ latitude: -33.87, longitude: 151.21, time_zone: 'Australia/Sydney' });
            set('time_zone', '');
            expect(sent.at(-1), tag).not.toHaveProperty('time_zone');
            // One editor at a time, as in Home Assistant: jsdom finds an id by the document's first
            ed.remove();
        }
    });
});
