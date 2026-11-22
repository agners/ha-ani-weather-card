import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest';
import '../../src/animated-weather-card';
import '../../src/animated-weather-card-dev';
import { theWorld } from '../../src/dev-card';
import { defaultState, type DevDriver } from '../../src/dev-world';
import { DEV_ENTITY, devSee } from '../../src/dev-link';
import { NoteWriter } from '../../src/note-generator';
import { solarState } from '../../src/solar';
import type { HomeAssistant } from '../../src/types';

// The dev card changes the world the cards see, never the cards: each card it drives reads Home Assistant through
// it, and does what it would do in real life

type Card = HTMLElement & { setConfig(c: object): void; hass: HomeAssistant | undefined; flyOver?(f: unknown[]): void };
const world = theWorld();
const all: DevDriver = { drivesAll: () => true };
const onlyDev: DevDriver = { drivesAll: () => false };
const frames = () => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
const until = async (done: () => boolean, ms = 3000) => {
    const end = Date.now() + ms;
    while (!done() && Date.now() < end) await new Promise(r => setTimeout(r, 25));
};

function baseHass(extra: Record<string, unknown> = {}): HomeAssistant & { callWS: ReturnType<typeof vi.fn>; callService: ReturnType<typeof vi.fn>; connection: { subscribeMessage: ReturnType<typeof vi.fn> } } {
    return {
        states: {
            'weather.home': { entity_id: 'weather.home', state: 'rainy', attributes: { temperature: 14, humidity: 88, friendly_name: 'Home', supported_features: 3, temperature_unit: '°C' } },
            'sun.sun': { entity_id: 'sun.sun', state: 'above_horizon', attributes: { elevation: 30, rising: true } },
            'sensor.garden': { entity_id: 'sensor.garden', state: '3', attributes: { unit_of_measurement: '°F' } },
            'sensor.flights': { entity_id: 'sensor.flights', state: '0', attributes: { flights: [] } },
        },
        config: { latitude: 52.37, longitude: 4.9, time_zone: 'UTC', unit_system: { temperature: '°C' }, components: [] },
        language: 'en', locale: { language: 'en', time_format: '24', time_zone: 'server' },
        localize: () => '',
        formatEntityState: (s: { state: string }) => s.state,
        connection: { subscribeMessage: vi.fn(async () => () => {}) },
        callWS: vi.fn(async () => null),
        callService: vi.fn(async () => ({})),
        ...extra,
    } as never;
}

const cards: HTMLElement[] = [];
function mount(config: object, hass: HomeAssistant, type = 'animated-weather-card'): Card {
    const card = document.createElement(type) as Card;
    card.setConfig({ type: `custom:${type}`, ...config });
    card.hass = hass;
    document.body.append(card);
    cards.push(card);
    return card;
}

beforeEach(() => { world.set({ ...defaultState() }); });
afterEach(async () => {
    vi.useRealTimers();
    world.release(all);
    world.release(onlyDev);
    for (const c of cards.splice(0)) c.remove();
    document.querySelectorAll('animated-weather-dev-card').forEach(e => e.remove());
    world.pause(false);
    vi.useRealTimers();
    try { localStorage.clear(); } catch { /* none */ }
    await new Promise(r => setTimeout(r, 1100));
});

describe('the dev card\'s world', () => {
    it('drives every card while a dev card says so: the weather, the sun and the sensors each names', async () => {
        const hass = baseHass();
        const card = mount({ entity: 'weather.home', outdoor_sensor_entity: 'sensor.garden', sun_entity: 'sun.sun' }, hass);
        world.drive(all);
        world.set({ sky: 'snowy' });
        await frames();
        const seen = card.hass!;
        expect(seen.states['weather.home'].state).toBe('snowy');
        expect(seen.states['weather.home'].attributes.friendly_name).toBe('Home');
        // The sensor keeps its own unit: the world converts
        expect(seen.states['sensor.garden'].attributes.unit_of_measurement).toBe('°F');
        expect(Number(seen.states['sensor.garden'].state)).toBeLessThan(40);
        // The real sun where Home Assistant is, at the world's time
        const sun = solarState(52.37, 4.9);
        expect(seen.states['sun.sun'].attributes.elevation).toBeCloseTo(sun.attributes.elevation, 0);
        await until(() => !!card.querySelector('.animated-weather-card')?.classList.contains('snowy'));
        expect(card.querySelector('.animated-weather-card')?.classList.contains('snowy')).toBe(true);
        // Home Assistant itself is untouched
        expect(hass.states['weather.home'].state).toBe('rainy');
    });

    it('speaks your units: °F, mph, inHg and inches from one metric world', async () => {
        const hass = baseHass({ config: { latitude: 40.7, longitude: -74, time_zone: 'UTC', unit_system: { temperature: '°F' }, components: [] } });
        delete (hass.states['weather.home'].attributes as Record<string, unknown>).temperature_unit;
        const card = mount({ entity: 'weather.home', rain_entity: 'sensor.rain' }, hass);
        world.drive(all);
        world.set({ sky: 'rainy', temp: 20 });
        await frames();
        const w = card.hass!.states['weather.home'].attributes;
        expect([w.temperature, w.temperature_unit, w.wind_speed_unit, w.pressure_unit]).toEqual([68, '°F', 'mph', 'inHg']);
        expect(card.hass!.states['sensor.rain'].attributes.unit_of_measurement).toBe('in');
    });

    it('offers the forecast it\'s set to, and sends a new one to the subscriptions already open', async () => {
        const card = mount({ entity: 'weather.home' }, baseHass());
        world.drive(all);
        await frames();
        const got: { forecast: unknown[] | null }[] = [];
        await card.hass!.connection!.subscribeMessage((m: unknown) => got.push(m as never), { type: 'weather/subscribe_forecast', entity_id: 'weather.home', forecast_type: 'hourly' });
        expect(got[0].forecast).toHaveLength(48);
        world.set({ sky: 'pouring' });
        await frames();
        expect(got.length).toBe(2);
        expect((got[1].forecast as { condition: string }[])[0].condition).toBe('pouring');
        world.set({ shape: 'daily' });
        await frames();
        expect(card.hass!.states['weather.home'].attributes.supported_features).toBe(1);
        expect(got[got.length - 1].forecast).toBeNull();
        world.set({ shape: 'none' });
        await frames();
        expect(card.hass!.states['weather.home'].attributes.supported_features).toBe(0);
    });

    it('keeps its notes apart from yours, and writes sample ones', async () => {
        const hass = baseHass();
        world.drive(all);
        const seen = devSee(hass, { entity: 'weather.home', note_tone: 'dry' });
        await seen.callWS({ type: 'frontend/set_user_data', key: 'k', value: { line: 'x' } });
        expect(hass.callWS).not.toHaveBeenCalled();
        const values: unknown[] = [];
        await seen.connection!.subscribeMessage((m: unknown) => values.push(m), { type: 'frontend/subscribe_user_data', key: 'k' });
        expect(values).toEqual([{ value: { line: 'x' } }]);
        expect(seen.config.components).toContain('ai_task');
        expect(await seen.callWS({ type: 'ai_task/preferences/get' })).toMatchObject({ gen_data_entity_id: 'ai_task.dev_card' });
        const answer = seen.callService('ai_task', 'generate_data', {});
        expect((await answer as { response: { data: { line: string } } }).response.data.line).toMatch(/\w/);
        expect(hass.callService).not.toHaveBeenCalled();
        // Your AI: the call goes to Home Assistant, on Home Assistant's own object
        world.set({ notes: 'ai' });
        await devSee(hass, { entity: 'weather.home' }).callService('ai_task', 'generate_data', {});
        expect(hass.callService).toHaveBeenCalledTimes(1);
        expect(hass.callService.mock.contexts[0]).toBe(hass);
    });

    it('drives only dev_mode cards when the dev card says so, and a dev_mode card needs no entity', async () => {
        const hass = baseHass();
        const plain = mount({ entity: 'weather.home' }, hass);
        const dev = mount({ dev_mode: true }, hass);
        world.drive(onlyDev);
        world.set({ sky: 'fog' });
        await frames();
        expect(plain.hass!.states['weather.home'].state).toBe('rainy');
        expect(dev.hass!.states[DEV_ENTITY].state).toBe('fog');
        await until(() => !!dev.querySelector('.animated-weather-card')?.classList.contains('foggy'));
        expect(dev.querySelector('.animated-weather-card')?.classList.contains('foggy')).toBe(true);
        // The clock moves every card, so it stays put while the dev card drives only some
        world.set({ offset: 120 });
        expect(window.AnimatedWeatherCardDev!.offset).toBe(0);
    });

    it('goes live on your Home Assistant, but for a dev_mode card with no weather of its own', async () => {
        const hass = baseHass();
        const plain = mount({ entity: 'weather.home' }, hass);
        const dev = mount({ dev_mode: true }, hass);
        world.drive(all);
        world.set({ source: 'live', offset: 90 });
        await frames();
        expect(plain.hass!.states['weather.home'].state).toBe('rainy');
        expect(dev.hass!.states[DEV_ENTITY]).toBeDefined();
        expect(window.AnimatedWeatherCardDev!.offset).toBe(0);
    });

    it('gives every card your weather back once the dev card has left', async () => {
        const hass = baseHass();
        const card = mount({ entity: 'weather.home' }, hass);
        world.drive(all);
        world.set({ sky: 'hail' });
        await frames();
        expect(card.hass!.states['weather.home'].state).toBe('hail');
        world.release(all);
        await new Promise(r => setTimeout(r, 1100));
        await frames();
        expect(card.hass!.states['weather.home'].state).toBe('rainy');
    });

    it('unwraps a card it no longer drives, as the view that opens on tap is handed its card\'s view', async () => {
        const hass = baseHass();
        const config = { entity: 'weather.home' };
        world.drive(all);
        const seen = devSee(hass, config);
        expect(seen).not.toBe(hass);
        expect(devSee(seen, config)).toBe(seen);
        world.release(all);
        await new Promise(r => setTimeout(r, 1100));
        expect(devSee(seen, config)).toBe(hass);
    });

    it('lets a card for another place keep its own sun, on the world\'s weather', async () => {
        const card = mount({ entity: 'weather.home', latitude: -33.87, longitude: 151.21 }, baseHass());
        world.drive(all);
        world.set({ sky: 'cloudy' });
        await frames();
        const states = card.hass!.states;
        const own = Object.keys(card.config as object).length && (card as unknown as { config: { sun_entity: string } }).config.sun_entity;
        expect(own).toMatch(/^sun\.awc_/);
        expect(states[own as string].attributes.elevation).toBeCloseTo(solarState(-33.87, 151.21).attributes.elevation, 0);
        expect(states['weather.home'].state).toBe('cloudy');
    });

    it('keeps what a card reads the same object until the world changes, whatever Home Assistant sends', async () => {
        const hass = baseHass();
        world.drive(all);
        const config = { entity: 'weather.home' };
        const a = devSee(hass, config);
        const next = { ...hass, states: { ...hass.states, 'light.kitchen': { entity_id: 'light.kitchen', state: 'on', attributes: {} } } } as HomeAssistant;
        const b = devSee(next, config);
        expect(b).not.toBe(a);
        expect(b.states['weather.home']).toBe(a.states['weather.home']);
        expect(b.states['sun.sun']).toBe(a.states['sun.sun']);
        expect(b.connection).toBe(a.connection);
        expect(b.states['light.kitchen'].state).toBe('on');
    });

    it('flies a plane through the flights sensor a card names, and straight over the others', async () => {
        const hass = baseHass();
        const tracked = mount({ entity: 'weather.home', flights_entity: 'sensor.flights' }, hass);
        const other = mount({ entity: 'weather.home' }, hass);
        const flown = vi.fn();
        other.flyOver = flown;
        const trackedFly = vi.fn();
        tracked.flyOver = trackedFly;
        world.drive(all);
        world.fly();
        await frames();
        expect((tracked.hass!.states['sensor.flights'].attributes.flights as unknown[]).length).toBe(1);
        expect(trackedFly).not.toHaveBeenCalled();
        expect(flown).toHaveBeenCalledTimes(1);
        expect(flown.mock.calls[0][0][0]).toMatchObject({ aircraftCode: 'A20N' });
    });

    it('pauses every card, as a manual pause', async () => {
        const card = mount({ entity: 'weather.home' }, baseHass());
        world.pause(true);
        expect(card.hasAttribute('data-paused')).toBe(true);
        expect(world.paused()).toBe(true);
        world.pause(false);
        expect(card.hasAttribute('data-paused')).toBe(false);
    });

    it('moves the cards\' clock by whole minutes, and a jump back forgets the notes written ahead', async () => {
        const hass = baseHass();
        world.drive(all);
        world.set({ offset: 300 });
        expect(window.AnimatedWeatherCardDev!.offset).toBe(300 * 60_000);
        const seen = devSee(hass, { entity: 'weather.home' });
        await seen.callWS({ type: 'frontend/set_user_data', key: 'n', value: { line: 'later' } });
        world.set({ offset: 60 });
        const values: unknown[] = [];
        await devSee(hass, { entity: 'weather.home' }).connection!.subscribeMessage((m: unknown) => values.push(m), { type: 'frontend/subscribe_user_data', key: 'n' });
        expect(values).toEqual([{ value: null }]);
    });

    it('marks a card in dev mode as simulated while no dev card is on the page', async () => {
        const hass = baseHass();
        const dev = mount({ dev_mode: true }, hass);
        const tracker = mount({ dev_mode: true }, hass, 'animated-sun-tracker-card');
        const plain = mount({ entity: 'weather.home' }, hass);
        expect(dev.hasAttribute('data-awc-dev')).toBe(true);
        expect(tracker.hasAttribute('data-awc-dev')).toBe(true);
        expect(plain.hasAttribute('data-awc-dev')).toBe(false);
        world.drive(onlyDev);
        await frames();
        expect(dev.hasAttribute('data-awc-dev')).toBe(false);
        expect(tracker.hasAttribute('data-awc-dev')).toBe(false);
        // A dev card that leaves: after a moment, which a dashboard's re-render fills, the marker is back
        world.release(onlyDev);
        await frames();
        expect(dev.hasAttribute('data-awc-dev')).toBe(false);
        await new Promise(r => setTimeout(r, 1100));
        await frames();
        expect(dev.hasAttribute('data-awc-dev')).toBe(true);
        // jsdom draws no pseudo-elements: the card's own CSS carries the marker
        expect(dev.querySelector('style')?.textContent).toMatch(/\[data-awc-dev\] \.animated-weather-card::after \{[^}]*content: 'Simulated'/);
    });

    it('survives a stale copy of itself in this browser', () => {
        localStorage.setItem('animated-weather-card-dev', JSON.stringify({ sky: 'volcano', offset: 'soon', humidity: 400, source: 'live' }));
        const W = world.constructor as new () => typeof world;
        const fresh = new W();
        expect(fresh.state.sky).toBe('partlycloudy');
        expect(fresh.state.offset).toBe(0);
        expect(fresh.state.humidity).toBe(defaultState().humidity);
        expect(fresh.state.source).toBe('live');
    });
});

describe('the note writer', () => {
    it('reads its notes again through a new connection, so the dev card\'s notes never reach yours', () => {
        const a = { subscribeMessage: vi.fn(async () => () => {}) };
        const b = { subscribeMessage: vi.fn(async () => () => {}) };
        const make = (connection: unknown) => ({ ...baseHass(), connection, config: { time_zone: 'UTC', components: ['ai_task'] } }) as unknown as HomeAssistant;
        const host = { hass: make(a), config: { entity: 'weather.home', show_note: true }, noteVisible: true, showNote: vi.fn(), noteWriting: vi.fn() };
        const writer = new NoteWriter(host as never);
        writer.start();
        const userData = (c: typeof a) => c.subscribeMessage.mock.calls.filter(([, m]) => (m as { type: string }).type === 'frontend/subscribe_user_data');
        expect(userData(a)).toHaveLength(1);
        host.hass = make(b);
        writer.hassChanged();
        expect(userData(b)).toHaveLength(1);
        writer.stop();
    });
});

describe('the dev card', () => {
    it('draws the world and changes it: the weather, the source, a reading, the time', async () => {
        const hass = baseHass();
        mount({ entity: 'weather.home' }, hass);
        const dev = document.createElement('animated-weather-dev-card') as HTMLElement & { setConfig(c: object): void; hass: HomeAssistant };
        dev.setConfig({ type: 'custom:animated-weather-dev-card' });
        dev.hass = hass;
        document.body.append(dev);
        await frames();
        const root = dev.shadowRoot!;
        expect(root.querySelectorAll('.key')).toHaveLength(14);
        expect(root.querySelector('.driving')?.textContent).toBe('Driving 1 card');
        (root.querySelector('.key[data-sky="snowy"]') as HTMLElement).click();
        await frames();
        expect(world.state.sky).toBe('snowy');
        expect(root.querySelector('.key[data-sky="snowy"]')?.getAttribute('aria-checked')).toBe('true');
        expect(root.querySelector('.w-temp')?.textContent).toMatch(/°$/);
        (root.querySelector('.reading[data-r="temp"] .step[data-d="1"]') as HTMLElement).click();
        expect(world.state.temp).not.toBeNull();
        (root.querySelector('.reading[data-r="temp"] .r-auto') as HTMLElement).click();
        expect(world.state.temp).toBeNull();
        (root.querySelector('.day-next') as HTMLElement).click();
        expect(world.state.offset).toBe(1440);
        await frames();
        expect((root.querySelector('.now') as HTMLElement).hidden).toBe(false);
        (root.querySelector('.now') as HTMLElement).click();
        expect(world.state.offset).toBe(0);
        (root.querySelector('.seg[data-seg="source"] [data-v="live"]') as HTMLElement).click();
        await frames();
        expect(world.state.source).toBe('live');
        expect((root.querySelector('.key') as HTMLButtonElement).disabled).toBe(true);
        world.set({ source: 'sim' });
    });

    it('turns time travel off, and says why, while it drives only dev_mode cards', async () => {
        const dev = document.createElement('animated-weather-dev-card') as HTMLElement & { setConfig(c: object): void; hass: HomeAssistant };
        dev.setConfig({ type: 'custom:animated-weather-dev-card', cards: 'dev_mode' });
        dev.hass = baseHass();
        document.body.append(dev);
        await frames();
        const root = dev.shadowRoot!;
        expect((root.querySelector('.t-note') as HTMLElement).hidden).toBe(false);
        expect((root.querySelector('.scrub input') as HTMLInputElement).disabled).toBe(true);
    });
});
