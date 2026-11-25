// The dev card's world (the dev bundle). It changes the world the cards see, never the cards: each card it drives
// reads Home Assistant through it (lens), and finds there the world's weather in every weather entity, the real sun
// where Home Assistant is at the world's time, the sensors the card names filled with the world's readings, a forecast
// that goes on from now, and notes kept apart from yours. The cards then do what they would do in real life.
//
// Identity is what the cards react to, so it's kept on purpose. Home Assistant hands the cards a new hass on every
// state change anywhere; the world's entities are made once a minute and for each change, and reused for every hass in
// between, so a card sees a change only when the world changes. The connection is one per Home Assistant connection
// for the page: the forecast and the notes' storage arrive on it as they do on Home Assistant's, and a new forecast
// goes to the subscriptions already open, so nothing resubscribes. Anything it doesn't stand in for goes to Home
// Assistant by an explicit call on Home Assistant's own objects.

import type { HomeAssistant, HassEntity } from './types';
import { DEV_ENTITY, DEV_EVENT, devCards, type DevCard, type DevConfig, type DevWorld } from './dev-link';
import { devForecast, stateOf, CLOUD, VISIBILITY, RATE, DEV_SKIES, dewPoint, type DevSky, type DevReading } from './dev-forecast';
import { SAMPLE_READINGS, sampleNote, nextFlight } from './dev-samples';
import { solarState } from './solar';
import { moonPhaseName } from './moon';
import { normalizeFlight } from './flight-tracker';
import type { ForecastEntry } from './forecast-data';
import { cardDate, cardNow } from './clock';
import { readingsOf } from './readings';
import { lookup } from './utils';

export type DevSource = 'sim' | 'live';
/** The forecast the world's weather entities offer: hours and days, days alone, or none */
export type DevShape = 'full' | 'daily' | 'none';
/** Who writes the notes while the world is on: sample notes, or your own AI Task */
export type DevNotes = 'samples' | 'ai';

export interface DevState {
    source: DevSource;
    sky: DevSky;
    /** How far the cards' clock is moved, in whole minutes */
    offset: number;
    /** Set by hand, in °C; null follows the weather and the hour */
    temp: number | null;
    feels: number | null;
    /** Set by hand; null follows the sun and the cloud */
    uv: number | null;
    humidity: number;
    /** km/h */
    wind: number;
    bearing: number;
    /** hPa */
    pressure: number;
    /** mm today, and mm an hour (also the hour under way's precipitation, which auto mode's rain reads) */
    rainToday: number;
    rainRate: number;
    /** Set by hand: cloud cover (%), visibility (km) and gusts (km/h); null follows the weather */
    cloud: number | null;
    visibility: number | null;
    gust: number | null;
    shape: DevShape;
    notes: DevNotes;
}

/** What the world is now, for a card and for the dev card's window */
export interface DevNow {
    sky: DevSky;
    /** Home Assistant's condition: a clear sky is sunny or clear-night by the sun */
    state: string;
    reading: DevReading;
    uv: number;
    /** Cloud cover (%), visibility (km) and gusts (km/h), set by hand or the weather's */
    cloud: number;
    visibility: number;
    gust: number;
    day: boolean;
    elevation: number;
    rising: boolean;
    forecast: { hourly: ForecastEntry[]; daily: ForecastEntry[] };
}

/** One dev card on the page: it drives every card, or only those in dev_mode */
export interface DevDriver {
    drivesAll(): boolean;
}

type Listener = (message: unknown) => void;
interface Connection {
    subscribeMessage(listener: Listener, message: Record<string, unknown>): Promise<() => void>;
    sendMessagePromise?(message: Record<string, unknown>): Promise<unknown>;
    subscribeEvents?(listener: Listener, type?: string): Promise<() => void>;
}

const STORE = 'animated-weather-card-dev';
const MINUTE = 60_000;
const HOUR = 3_600_000;
/** Where the sun is when Home Assistant doesn't say where it is */
const NOWHERE = { latitude: 51.48, longitude: 0 };
/** A sample note takes a moment, so the status that says it's being written can be read */
const NOTE_WAIT_MS = 1200;
/** Indoors stays indoors */
const INDOOR = { temp: 21.5, humidity: 45 };
/** A station's totals beyond today, added to today's (mm) */
const TOTALS: Record<string, number> = { rain_event_entity: 0, rain_week_entity: 6.4, rain_month_entity: 31.2, rain_year_entity: 612 };

/** Cooler outside the middle of the day, by where the sun is (°C) */
function cooling(elevation: number, rising: boolean): number {
    if (elevation >= 6) return 0;
    if (elevation >= -6) return rising ? 4 : 2;
    return 5;
}

const round = (n: number, d: number) => Math.round(n * 10 ** d) / 10 ** d;

/** The units an entity reports in, else Home Assistant's unit system */
export function unitsOf(hass: HomeAssistant, real?: HassEntity) {
    const a = real?.attributes ?? {};
    const us = hass.config?.unit_system?.temperature === '°F';
    return {
        temperature: String(a.temperature_unit ?? (us ? '°F' : '°C')),
        wind: String(a.wind_speed_unit ?? (us ? 'mph' : 'km/h')),
        pressure: String(a.pressure_unit ?? (us ? 'inHg' : 'hPa')),
        precipitation: String(a.precipitation_unit ?? (us ? 'in' : 'mm')),
        visibility: String(a.visibility_unit ?? (us ? 'mi' : 'km')),
    };
}

/** The world is metric; each value goes out in the unit it's asked for, rounded as an integration rounds it */
export const CONVERT = {
    temperature: (c: number, u: string) => round(u === '°F' ? c * 9 / 5 + 32 : c, 1),
    wind: (k: number, u: string) => round(u === 'mph' ? k / 1.609344 : u === 'm/s' ? k / 3.6 : u === 'kn' ? k / 1.852 : u === 'ft/s' ? k / 1.09728 : k, 1),
    pressure: (h: number, u: string) => u === 'inHg' ? round(h * 0.02953, 2) : u === 'mmHg' ? round(h * 0.750062, 1) : u === 'kPa' ? round(h / 10, 2) : u === 'psi' ? round(h * 0.0145038, 2) : u === 'Pa' ? Math.round(h * 100) : round(h, 1),
    precipitation: (mm: number, u: string) => u === 'in' ? round(mm / 25.4, 2) : u === 'cm' ? round(mm / 10, 2) : round(mm, 1),
    visibility: (km: number, u: string) => round(u === 'mi' ? km / 1.609344 : u === 'm' ? km * 1000 : km, 1),
};
type Kind = keyof typeof CONVERT;

/** Back to the world's metric from a unit the dev card shows */
export function fromUnit(kind: Kind, v: number, u: string): number {
    if (kind === 'temperature') return u === '°F' ? (v - 32) * 5 / 9 : v;
    if (kind === 'visibility') return u === 'mi' ? v * 1.609344 : u === 'm' ? v / 1000 : v;
    if (kind === 'wind') return u === 'mph' ? v * 1.609344 : u === 'm/s' ? v * 3.6 : u === 'kn' ? v * 1.852 : u === 'ft/s' ? v * 1.09728 : v;
    if (kind === 'pressure') return u === 'inHg' ? v / 0.02953 : u === 'mmHg' ? v / 0.750062 : u === 'kPa' ? v * 10 : u === 'psi' ? v / 0.0145038 : u === 'Pa' ? v / 100 : v;
    return u === 'in' ? v * 25.4 : u === 'cm' ? v * 10 : v;
}
/** The units the world converts to, by kind */
const UNITS: Record<Kind, readonly string[]> = {
    temperature: ['°C', '°F'], wind: ['km/h', 'mph', 'm/s', 'kn', 'ft/s'], pressure: ['hPa', 'mbar', 'inHg', 'mmHg', 'kPa', 'psi', 'Pa'],
    precipitation: ['mm', 'in', 'cm'], visibility: ['km', 'mi', 'm'],
};

/** The sensors a card can name, each with the world's reading for it and how it's measured */
const SENSORS: Record<string, { kind?: Kind; unit?: string; device?: string; read(now: DevNow, s: DevState): number | string }> = {
    outdoor_sensor_entity: { kind: 'temperature', device: 'temperature', read: n => n.reading.temp },
    feels_like_entity: { kind: 'temperature', device: 'temperature', read: n => n.reading.feels },
    humidity_sensor_entity: { unit: '%', device: 'humidity', read: n => n.reading.humidity },
    wind_speed_sensor_entity: { kind: 'wind', device: 'wind_speed', read: n => n.reading.wind },
    wind_direction_sensor_entity: { unit: '°', read: n => n.reading.bearing },
    pressure_sensor_entity: { kind: 'pressure', device: 'atmospheric_pressure', read: n => n.reading.pressure },
    indoor_temperature_entity: { kind: 'temperature', device: 'temperature', read: () => INDOOR.temp },
    indoor_humidity_entity: { unit: '%', device: 'humidity', read: () => INDOOR.humidity },
    uv_entity: { unit: 'UV index', read: n => n.uv },
    uv_max_entity: { unit: 'UV index', read: n => Math.max(n.uv, Number(n.forecast.daily[0]?.uv_index ?? 0)) },
    rain_entity: { kind: 'precipitation', device: 'precipitation', read: (_, s) => s.rainToday },
    rain_rate_entity: { kind: 'precipitation', device: 'precipitation_intensity', read: (_, s) => s.rainRate },
    rain_event_entity: { kind: 'precipitation', device: 'precipitation', read: (_, s) => s.rainToday + TOTALS.rain_event_entity },
    rain_week_entity: { kind: 'precipitation', device: 'precipitation', read: (_, s) => s.rainToday + TOTALS.rain_week_entity },
    rain_month_entity: { kind: 'precipitation', device: 'precipitation', read: (_, s) => s.rainToday + TOTALS.rain_month_entity },
    rain_year_entity: { kind: 'precipitation', device: 'precipitation', read: (_, s) => s.rainToday + TOTALS.rain_year_entity },
    moon_entity: { read: () => moonPhaseName(cardDate()) },
};

/** The readings' types the world fills when a row names a sensor for them (readings.ts), beyond the options above */
const READING_SENSORS: Record<string, typeof SENSORS[string]> = {
    feels_like: SENSORS.feels_like_entity,
    dew_point: { kind: 'temperature', device: 'temperature', read: n => dewPoint(n.reading.temp, n.reading.humidity) },
    visibility: { kind: 'visibility', device: 'distance', read: n => n.visibility },
    cloud_cover: { unit: '%', read: n => n.cloud },
    gust: { kind: 'wind', device: 'wind_speed', read: n => n.gust },
    // Air quality on the US EPA scale: clean after rain and wind, worst in still fog
    aqi: { device: 'aqi', read: n => AQI[n.sky] ?? 40 },
};
const AQI: Record<string, number> = {
    clear: 38, partlycloudy: 34, cloudy: 46, fog: 92, windy: 18, 'windy-variant': 22, rainy: 14, pouring: 9, lightning: 55,
    'lightning-rainy': 20, snowy: 24, 'snowy-rainy': 21, hail: 17, exceptional: 168,
};

/** The world's starting point: partly cloudy, now */
export function defaultState(): DevState {
    return withSky({ source: 'sim', offset: 0, shape: 'full', notes: 'samples' } as DevState, 'partlycloudy');
}

/** A new weather brings its own readings */
export function withSky(s: DevState, sky: DevSky): DevState {
    const r = SAMPLE_READINGS[sky];
    const rate = RATE[sky] ?? 0;
    return {
        ...s, sky, temp: null, feels: null, uv: null, humidity: r.humidity, wind: r.wind, bearing: r.bearing, pressure: r.pressure,
        rainToday: round(rate * 3, 1), rainRate: rate, cloud: null, visibility: null, gust: null,
    };
}

/** The connection the world's cards read through: the forecast and the notes' storage, the rest Home Assistant's */
class StandIn implements Connection {
    private forecasts = new Set<{ entity: string; type: string; listener: Listener }>();
    /** The newest Home Assistant seen through it: where the sun is, and the units */
    hass?: HomeAssistant;

    constructor(private readonly world: World, private readonly real: Connection | undefined) {}

    subscribeMessage(listener: Listener, message: Record<string, unknown>): Promise<() => void> {
        if (message.type === 'weather/subscribe_forecast') {
            const sub = { entity: String(message.entity_id), type: String(message.forecast_type), listener };
            this.forecasts.add(sub);
            this.answer(sub);
            return Promise.resolve(() => { this.forecasts.delete(sub); });
        }
        if (message.type === 'frontend/subscribe_user_data') return Promise.resolve(this.world.subscribeStore(String(message.key), listener));
        return this.real ? this.real.subscribeMessage(listener, message) : Promise.reject(new Error('No connection'));
    }

    sendMessagePromise(message: Record<string, unknown>): Promise<unknown> {
        return this.real?.sendMessagePromise ? this.real.sendMessagePromise(message) : Promise.reject(new Error('No connection'));
    }

    subscribeEvents(listener: Listener, type?: string): Promise<() => void> {
        return this.real?.subscribeEvents ? this.real.subscribeEvents(listener, type) : Promise.reject(new Error('No connection'));
    }

    /** A new forecast: to every subscription open, as Home Assistant sends one */
    push(): void {
        for (const sub of this.forecasts) this.answer(sub);
    }

    private answer(sub: { entity: string; type: string; listener: Listener }): void {
        if (!this.hass) return;
        sub.listener({ type: sub.type, forecast: this.world.forecastFor(this.hass, sub.entity, sub.type) });
    }
}

export class World implements DevWorld {
    state: DevState;
    private version = 0;
    private drivers = new Set<DevDriver>();
    private all = false;
    private grace?: ReturnType<typeof setTimeout>;
    private flights: Record<string, unknown>[] = [];
    private flown = 0;
    private store = new Map<string, unknown>();
    private storeListeners = new Map<string, Set<Listener>>();
    private standIns = new Map<unknown, StandIn>();
    private lensed = new WeakMap<HomeAssistant, { stamp: string; per: WeakMap<object, HomeAssistant> }>();
    private entities = new Map<string, HassEntity>();
    private entitiesStamp = '';
    private nowCache?: { key: string; now: DevNow };
    private forecastKey = '';
    private converted = new Map<string, ForecastEntry[] | null>();
    private watchers = new Set<() => void>();
    private frame = 0;
    private minuteTimer?: ReturnType<typeof setTimeout>;

    constructor() {
        this.state = this.load();
        this.armMinute();
    }

    // ── What the cards ask ────────────────────────────────────────────────────

    /** The cards' clock moves only while a dev card drives every card on the page: it moves every card's clock */
    get offset(): number {
        return this.clockMoves() ? this.state.offset * MINUTE : 0;
    }

    clockMoves(): boolean {
        return this.state.source === 'sim' && this.all;
    }

    wants(config: DevConfig): boolean {
        // Live is your Home Assistant, except for a dev_mode card with no weather of its own to read
        if (this.state.source === 'live') return config.entity === DEV_ENTITY;
        return !!config.dev_mode || this.all;
    }

    lens(hass: HomeAssistant, config: DevConfig): HomeAssistant {
        const stamp = this.stamp();
        let cached = this.lensed.get(hass);
        if (!cached || cached.stamp !== stamp) {
            cached = { stamp, per: new WeakMap() };
            this.lensed.set(hass, cached);
        }
        let out = cached.per.get(config);
        if (!out) {
            out = this.build(hass, config);
            cached.per.set(config, out);
        }
        return out;
    }

    // ── What the dev card does ────────────────────────────────────────────────

    /** A dev card arrived: while one drives every card, every card follows */
    drive(driver: DevDriver): void {
        clearTimeout(this.grace);
        this.drivers.add(driver);
        this.recount();
    }

    /** A dev card left: the cards go back to your weather after a moment, which a re-render of the dashboard fills */
    release(driver: DevDriver): void {
        this.drivers.delete(driver);
        clearTimeout(this.grace);
        this.grace = setTimeout(() => this.recount(), 1000);
    }

    /** A dev card's options changed, or one came or went */
    recount(): void {
        const all = [...this.drivers].some(d => d.drivesAll());
        if (all !== this.all) { this.all = all; this.changed(); }
    }

    set(patch: Partial<DevState>): void {
        const before = this.state;
        const next = { ...before, ...patch };
        if (patch.sky && patch.sky !== before.sky) Object.assign(next, withSky(next, patch.sky), patch.temp !== undefined ? { temp: patch.temp } : {});
        // A note from the future, or from another day or another world, doesn't stand
        const day = (o: number) => Math.floor((Date.now() + o * MINUTE - new Date().getTimezoneOffset() * MINUTE) / 86_400_000);
        if (next.source !== before.source || next.offset < before.offset || day(next.offset) !== day(before.offset)) this.clearStore();
        this.state = next;
        this.changed();
    }

    /** The cards the world drives now */
    driving(): DevCard[] {
        return [...devCards()].filter(card => { const c = card.devConfig(); return !!c && this.wants(c); });
    }

    /**
     * A plane over every card: in the simulated world, through the flights sensor of a card that names one (its
     * tracker sees a new flight), and straight over the others; live, straight over every weather card
     */
    fly(): void {
        const raw = nextFlight(this.flown++);
        const info = normalizeFlight(raw);
        const sim = this.state.source === 'sim';
        if (sim) { this.flights = [raw]; this.changed(); }
        if (!info) return;
        for (const card of devCards()) {
            if (card.devKind === 'tracker' || !card.flyOver) continue;
            const c = card.devConfig();
            if (sim && c?.flights_entity && this.wants(c)) continue;
            card.flyOver([info]);
        }
    }

    /** Pause or resume every weather and forecast card on the page, as a manual pause */
    pause(paused: boolean): void {
        for (const card of devCards()) {
            if (!card.setAnimationsPaused) continue;
            card.wasManuallyPaused = paused;
            card.setAnimationsPaused(paused);
        }
    }

    paused(): boolean {
        const cards = [...devCards()].filter(c => c.setAnimationsPaused);
        return cards.length > 0 && cards.every(c => c.wasManuallyPaused);
    }

    /** The world now, as the dev card's window shows it (where Home Assistant is) */
    now(hass?: HomeAssistant): DevNow {
        return this.nowAt(hass);
    }

    watch(fn: () => void): () => void {
        this.watchers.add(fn);
        return () => this.watchers.delete(fn);
    }

    // ── The forecast and the notes' storage ──────────────────────────────────

    forecastFor(hass: HomeAssistant, entity: string, type: string): ForecastEntry[] | null {
        const s = this.state;
        if (type === 'twice_daily' || s.shape === 'none' || (type === 'hourly' && s.shape !== 'full')) return null;
        const u = unitsOf(hass, hass.states[entity]);
        const key = `${this.forecastKey}|${type}|${u.temperature}|${u.wind}|${u.pressure}|${u.precipitation}`;
        if (this.converted.has(key)) return this.converted.get(key)!;
        const entries = (type === 'hourly' ? this.nowAt(hass).forecast.hourly : this.nowAt(hass).forecast.daily).map(e => ({
            ...e,
            temperature: e.temperature === undefined ? undefined : CONVERT.temperature(e.temperature, u.temperature),
            templow: e.templow === undefined ? undefined : CONVERT.temperature(e.templow, u.temperature),
            apparent_temperature: e.apparent_temperature === undefined ? undefined : CONVERT.temperature(e.apparent_temperature, u.temperature),
            dew_point: e.dew_point === undefined ? undefined : CONVERT.temperature(e.dew_point, u.temperature),
            wind_speed: e.wind_speed === undefined ? undefined : CONVERT.wind(e.wind_speed, u.wind),
            wind_gust_speed: e.wind_gust_speed === undefined ? undefined : CONVERT.wind(e.wind_gust_speed, u.wind),
            pressure: e.pressure === undefined ? undefined : CONVERT.pressure(e.pressure, u.pressure),
            precipitation: e.precipitation === undefined ? undefined : CONVERT.precipitation(e.precipitation, u.precipitation),
        }));
        this.converted.set(key, entries);
        return entries;
    }

    subscribeStore(key: string, listener: Listener): () => void {
        if (!this.storeListeners.has(key)) this.storeListeners.set(key, new Set());
        this.storeListeners.get(key)!.add(listener);
        listener({ value: this.store.get(key) ?? null });
        return () => { this.storeListeners.get(key)?.delete(listener); };
    }

    private setStore(key: string, value: unknown): void {
        this.store.set(key, value);
        for (const l of this.storeListeners.get(key) ?? []) l({ value });
    }

    private clearStore(): void {
        const keys = [...this.store.keys()];
        this.store.clear();
        for (const key of keys) for (const l of this.storeListeners.get(key) ?? []) l({ value: null });
    }

    // ── Inside ────────────────────────────────────────────────────────────────

    /** Changes and minutes: what makes a card's view of the world new */
    private stamp(): string {
        return `${this.version}:${Math.floor(cardNow() / MINUTE)}`;
    }

    private where(hass?: HomeAssistant): { latitude: number; longitude: number } {
        const lat = Number(hass?.config?.latitude), lon = Number(hass?.config?.longitude);
        return isFinite(lat) && isFinite(lon) && (lat || lon) ? { latitude: lat, longitude: lon } : NOWHERE;
    }

    private nowAt(hass?: HomeAssistant): DevNow {
        const { latitude, longitude } = this.where(hass);
        const key = `${this.stamp()}|${latitude}|${longitude}`;
        if (this.nowCache?.key === key) return this.nowCache.now;
        const s = this.state;
        const at = cardDate();
        const sun = solarState(latitude, longitude, at);
        const elevation = sun.attributes.elevation;
        const day = sun.state === 'above_horizon';
        const sample = SAMPLE_READINGS[s.sky];
        const auto = sample.temp - cooling(elevation, sun.attributes.rising);
        const temp = s.temp ?? auto;
        const reading: DevReading = {
            temp, feels: s.feels ?? temp - (sample.temp - sample.feels),
            humidity: s.humidity, wind: s.wind, bearing: s.bearing, pressure: s.pressure,
        };
        const state = stateOf(s.sky, day);
        const cloud = s.cloud ?? CLOUD[s.sky] ?? 80;
        const uv = s.uv ?? Math.max(0, Math.round(8 * Math.sin((Math.max(0, elevation) * Math.PI) / 180) * (1 - (0.7 * cloud) / 100)));
        const dayTemp = sample.temp + (temp - auto);
        const fKey = [s.sky, state, round(temp, 1), round(reading.feels, 1), reading.humidity, reading.wind, reading.bearing, reading.pressure,
            s.rainRate, s.cloud, s.gust, Math.floor(at.getTime() / HOUR), latitude, longitude].join('|');
        let forecast = this.nowCache?.now.forecast;
        if (fKey !== this.forecastKey || !forecast) {
            forecast = devForecast({ sky: s.sky, state, reading, dayTemp, now: at, latitude, longitude });
            // The hour under way says what the dev card does: its rain rate, and the cloud and gusts set by hand
            const [hour, ...rest] = forecast.hourly;
            if (hour) {
                forecast = { ...forecast, hourly: [{
                    ...hour, precipitation: s.rainRate,
                    ...(s.cloud !== null ? { cloud_coverage: s.cloud } : {}), ...(s.gust !== null ? { wind_gust_speed: s.gust } : {}),
                }, ...rest] };
            }
            this.forecastKey = fKey;
            this.converted.clear();
        }
        const gust = s.gust ?? Number(forecast.hourly[0]?.wind_gust_speed ?? reading.wind * 1.5);
        const visibility = s.visibility ?? VISIBILITY[s.sky] ?? 16;
        const now = { sky: s.sky, state, reading, uv, cloud, visibility, gust, day, elevation, rising: sun.attributes.rising, forecast };
        this.nowCache = { key, now };
        return now;
    }

    /** An entity made once for each change and minute, and reused for every Home Assistant in between */
    private entity(id: string, make: () => HassEntity): HassEntity {
        const stamp = this.stamp();
        if (this.entitiesStamp !== stamp) { this.entities.clear(); this.entitiesStamp = stamp; }
        let e = this.entities.get(id);
        if (!e) { e = make(); this.entities.set(id, e); }
        return e;
    }

    private stateObject(id: string, state: string, attributes: Record<string, unknown>): HassEntity {
        const at = cardDate().toISOString();
        return { entity_id: id, state, attributes, last_changed: at, last_updated: at, context: { id: `dev-${this.version}`, parent_id: null, user_id: null } } as unknown as HassEntity;
    }

    private weather(hass: HomeAssistant, id: string): HassEntity {
        const real = hass.states[id];
        const u = unitsOf(hass, real);
        const n = this.nowAt(hass);
        const r = n.reading;
        return this.stateObject(id, n.state, {
            temperature: CONVERT.temperature(r.temp, u.temperature),
            apparent_temperature: CONVERT.temperature(r.feels, u.temperature),
            dew_point: CONVERT.temperature(dewPoint(r.temp, r.humidity), u.temperature),
            humidity: r.humidity,
            pressure: CONVERT.pressure(r.pressure, u.pressure),
            wind_speed: CONVERT.wind(r.wind, u.wind),
            wind_gust_speed: CONVERT.wind(n.gust, u.wind),
            wind_bearing: r.bearing,
            cloud_coverage: n.cloud,
            uv_index: n.uv,
            visibility: CONVERT.visibility(n.visibility, u.visibility),
            temperature_unit: u.temperature, pressure_unit: u.pressure, wind_speed_unit: u.wind,
            precipitation_unit: u.precipitation, visibility_unit: u.visibility,
            supported_features: { full: 3, daily: 1, none: 0 }[this.state.shape],
            friendly_name: real?.attributes?.friendly_name ?? 'Dev weather',
            attribution: 'The dev card',
        });
    }

    private sun(hass: HomeAssistant, id: string): HassEntity {
        const { latitude, longitude } = this.where(hass);
        const s = solarState(latitude, longitude, cardDate());
        return this.stateObject(id, s.state, { ...(hass.states[id]?.attributes ?? {}), ...s.attributes, friendly_name: hass.states[id]?.attributes?.friendly_name ?? 'Sun' });
    }

    private sensor(hass: HomeAssistant, option: string, id: string, spec = SENSORS[option]): HassEntity {
        const real = hass.states[id];
        const n = this.nowAt(hass);
        const value = spec.read(n, this.state);
        let unit = spec.unit;
        let out: number | string = value;
        if (spec.kind && typeof value === 'number') {
            // The sensor's own unit when it's one the world knows, else Home Assistant's unit system
            const own = String(real?.attributes?.unit_of_measurement ?? '').replace('/h', '');
            const system = unitsOf(hass)[spec.kind];
            const plain = UNITS[spec.kind].includes(own) ? own : system;
            out = CONVERT[spec.kind](value, plain);
            unit = option === 'rain_rate_entity' ? `${plain}/h` : plain;
        }
        return this.stateObject(id, String(out), {
            ...(unit ? { unit_of_measurement: unit } : {}),
            ...(spec.device ? { device_class: spec.device, state_class: 'measurement' } : {}),
            friendly_name: real?.attributes?.friendly_name ?? option.replace(/_entity$/, '').replace(/_/g, ' '),
        });
    }

    private build(hass: HomeAssistant, config: DevConfig): HomeAssistant {
        const states: Record<string, HassEntity> = Object.create(hass.states);
        // The world is the weather: every weather entity reads it, the card's own and the one a tracker shares
        const weathers = new Set(Object.keys(hass.states).filter(id => id.startsWith('weather.')));
        for (const key of ['entity', 'weather_entity']) if (typeof config[key] === 'string' && String(config[key]).startsWith('weather.')) weathers.add(String(config[key]));
        weathers.add(DEV_ENTITY);
        for (const id of weathers) states[id] = this.entity(id, () => this.weather(hass, id));
        // The sun: Home Assistant's, and the one the card names, unless it's another place's, which the card works out
        const suns = new Set(['sun.sun']);
        if (typeof config.sun_entity === 'string' && !config.sun_entity.startsWith('sun.awc_')) suns.add(config.sun_entity);
        for (const id of suns) states[id] = this.entity(id, () => this.sun(hass, id));
        for (const option of Object.keys(SENSORS)) {
            const id = config[option];
            if (typeof id === 'string' && id) states[id] = this.entity(`${option}:${id}`, () => this.sensor(hass, option, id));
        }
        // The readings' other sensors: air quality, dew point, visibility, cloud cover, gusts (any sensor stays yours)
        for (const r of readingsOf(config as never)) {
            const spec = lookup(READING_SENSORS, r.type);
            if (!spec || !r.entity || r.entity.startsWith('weather.') || states[r.entity] !== hass.states[r.entity]) continue;
            const id = r.entity;
            states[id] = this.entity(`${r.type}:${id}`, () => this.sensor(hass, r.type, id, spec));
        }
        if (typeof config.flights_entity === 'string' && config.flights_entity) {
            const id = config.flights_entity;
            states[id] = this.entity(`flights:${id}`, () => this.stateObject(id, String(this.flights.length), { flights: this.flights, friendly_name: 'Flights' }));
        }

        const samples = this.state.notes === 'samples';
        const out = Object.create(hass) as HomeAssistant & Record<string, unknown>;
        const realConnection = hass.connection as unknown as Connection | undefined;
        let standIn = this.standIns.get(realConnection ?? null);
        if (!standIn) { standIn = new StandIn(this, realConnection); this.standIns.set(realConnection ?? null, standIn); }
        standIn.hass = hass;
        const components = hass.config?.components ?? [];
        // Writable, as a plain object's are: a card for another place sees the world through it and sets its own on top
        const own = (value: unknown) => ({ value, writable: true, enumerable: true, configurable: true });
        Object.defineProperties(out, {
            states: own(states),
            connection: own(standIn),
            // A sample note needs an AI Task to ask
            config: own(samples && !components.includes('ai_task') ? { ...hass.config, components: [...components, 'ai_task'] } : hass.config),
            callWS: own((message: Record<string, unknown>) => this.callWS(hass, message)),
            callService: own((domain: string, service: string, data?: unknown, target?: unknown, notify?: boolean, returnResponse?: boolean) =>
                this.callService(hass, config, domain, service, data, target, notify, returnResponse)),
            awcDevBase: own(hass),
        });
        return out;
    }

    private async callWS(hass: HomeAssistant, message: Record<string, unknown>): Promise<unknown> {
        if (message.type === 'frontend/get_user_data') return { value: this.store.get(String(message.key)) ?? null };
        if (message.type === 'frontend/set_user_data') { this.setStore(String(message.key), message.value); return null; }
        if (message.type === 'ai_task/preferences/get' && this.state.notes === 'samples') return { gen_data_entity_id: 'ai_task.dev_card', gen_image_entity_id: null };
        return (hass.callWS as (m: Record<string, unknown>) => Promise<unknown>)(message);
    }

    private async callService(hass: HomeAssistant, config: DevConfig, domain: string, service: string, data?: unknown, target?: unknown, notify?: boolean, returnResponse?: boolean): Promise<unknown> {
        if (domain === 'ai_task' && service === 'generate_data' && this.state.notes === 'samples') {
            await new Promise(resolve => setTimeout(resolve, NOTE_WAIT_MS));
            const n = this.nowAt(hass);
            const [line, note] = sampleNote(n.sky, n.day, typeof config.note_tone === 'string' ? config.note_tone : 'snarky');
            return { context: {}, response: { conversation_id: 'dev-card', data: { line, note } } };
        }
        const call = hass.callService as unknown as (...args: unknown[]) => Promise<unknown>;
        return call.call(hass, domain, service, data, target, notify, returnResponse);
    }

    /** Something changed: every card reads Home Assistant again, once a frame, and the forecast goes out if it's new */
    private changed(): void {
        this.version++;
        this.save();
        if (this.frame) return;
        const run = () => {
            this.frame = 0;
            this.publish();
        };
        this.frame = typeof requestAnimationFrame === 'function' ? requestAnimationFrame(run) : (setTimeout(run, 16) as unknown as number);
    }

    private publish(): void {
        window.dispatchEvent(new CustomEvent(DEV_EVENT));
        // The cards read the world again above, which worked out the forecast; a new one, or a new shape, goes to the
        // subscriptions open
        for (const standIn of this.standIns.values()) if (standIn.hass) this.nowAt(standIn.hass);
        const sent = `${this.forecastKey}|${this.state.shape}`;
        if (sent !== this.sentForecast) {
            this.sentForecast = sent;
            for (const standIn of this.standIns.values()) standIn.push();
        }
        for (const fn of this.watchers) fn();
    }
    private sentForecast = '';

    /** Each minute of the cards' clock: the sun moves, and on the hour, the forecast */
    private armMinute(): void {
        clearTimeout(this.minuteTimer);
        this.minuteTimer = setTimeout(() => {
            this.publish();
            this.armMinute();
        }, MINUTE - (cardNow() % MINUTE) + 30);
    }

    /** The world as this browser left it, each value checked: an older or edited copy never breaks the cards */
    private load(): DevState {
        const s = defaultState();
        try {
            const saved = JSON.parse(localStorage.getItem(STORE) ?? 'null') as Partial<DevState> | null;
            if (!saved || typeof saved !== 'object') return s;
            const num = (v: unknown, lo: number, hi: number) => typeof v === 'number' && isFinite(v) && v >= lo && v <= hi;
            const out: DevState = (DEV_SKIES as readonly string[]).includes(saved.sky as string) ? withSky(s, saved.sky as DevSky) : s;
            if (saved.source === 'sim' || saved.source === 'live') out.source = saved.source;
            if (saved.shape === 'full' || saved.shape === 'daily' || saved.shape === 'none') out.shape = saved.shape;
            if (saved.notes === 'samples' || saved.notes === 'ai') out.notes = saved.notes;
            if (num(saved.offset, -60 * 24 * 400, 60 * 24 * 400)) out.offset = Math.round(saved.offset as number);
            for (const [k, lo, hi] of [['temp', -60, 60], ['feels', -70, 70], ['uv', 0, 20], ['cloud', 0, 100], ['visibility', 0, 100], ['gust', 0, 300]] as const) if (saved[k] === null || num(saved[k], lo, hi)) out[k] = saved[k] as number | null;
            for (const [k, lo, hi] of [['humidity', 0, 100], ['wind', 0, 250], ['bearing', 0, 360], ['pressure', 850, 1090], ['rainToday', 0, 500], ['rainRate', 0, 200]] as const) if (num(saved[k], lo, hi)) out[k] = saved[k] as number;
            return out;
        } catch { /* a private window, or nothing saved */ }
        return s;
    }

    private save(): void {
        try { localStorage.setItem(STORE, JSON.stringify(this.state)); } catch { /* not kept, which is fine */ }
    }
}
