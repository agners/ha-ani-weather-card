// The weather card's readings, as one ordered list (readings): each a type and, where it needs one or you'd rather, an
// entity. No strings and no Home Assistant here, so the editor carries it without the card's words.
//
// Without `readings`, the list is built from the options it replaces (metrics, the reading sensors, show_sun,
// uv_entity, uv_max_entity, rain_*), so every YAML written before keeps the card it had. With it, those options are
// ignored: compileReadings writes the list back into them for the parts that read them (the hero's wind, the view's
// totals, an older forecast bundle), so there's one source.

import type { AnimatedWeatherCardConfig } from './types';
import { metricKinds } from './metrics';

/** Every type a row can be */
export const READING_TYPES = [
    'humidity', 'wind', 'pressure', 'sun', 'uv', 'rain', 'aqi',
    'feels_like', 'dew_point', 'visibility', 'cloud_cover', 'gust',
    'uv_max', 'rain_event', 'rain_week', 'rain_month', 'rain_year',
    'sensor',
] as const;
export type ReadingType = typeof READING_TYPES[number];

/** One row, normalized */
export interface Reading {
    type: ReadingType;
    /** A sensor, or a weather entity whose attribute it reads; none reads the card's own weather entity */
    entity?: string;
    /** wind: the direction's sensor */
    direction_entity?: string;
    /** rain: the rate's sensor, shown while it rains */
    rate_entity?: string;
    /** sensor: the label; else the entity's own name */
    name?: string;
    /** In the view that opens on tap only */
    view: boolean;
}

/** The weather entity's attribute each type reads when the row names no sensor */
export const WEATHER_ATTRIBUTE: Partial<Record<ReadingType, string>> = {
    humidity: 'humidity', wind: 'wind_speed', pressure: 'pressure', uv: 'uv_index', feels_like: 'apparent_temperature',
    dew_point: 'dew_point', visibility: 'visibility', cloud_cover: 'cloud_coverage', gust: 'wind_gust_speed',
};

/** Shown only in the view that opens on tap, whatever the row says: a station's totals and today's highest UV */
export const VIEW_ONLY_TYPES: readonly ReadingType[] = ['uv_max', 'rain_event', 'rain_week', 'rain_month', 'rain_year'];

/** A type the weather entity can't report: its row needs a sensor, and without one it isn't drawn */
export const needsSensor = (type: ReadingType): boolean => type !== 'sun' && !Object.prototype.hasOwnProperty.call(WEATHER_ATTRIBUTE, type);

/** The list as it always was: humidity, wind, pressure and the next sunset or sunrise */
export const DEFAULT_READINGS: readonly ReadingType[] = ['humidity', 'wind', 'pressure', 'sun'];

const isType = (v: unknown): v is ReadingType => typeof v === 'string' && (READING_TYPES as readonly string[]).includes(v);
const text = (v: unknown): string | undefined => (typeof v === 'string' && v.trim() ? v.trim() : undefined);

/** One row from YAML: a bare type, or a type with its entity and flags. Anything else is no row */
export function normalizeReading(raw: unknown): Reading | null {
    if (typeof raw === 'string') {
        const type = raw.trim().toLowerCase();
        return isType(type) ? { type, view: VIEW_ONLY_TYPES.includes(type) } : null;
    }
    if (!raw || typeof raw !== 'object') return null;
    const r = raw as Record<string, unknown>;
    const type = typeof r.type === 'string' ? r.type.trim().toLowerCase() : '';
    if (!isType(type)) return null;
    const out: Reading = { type, view: r.view === true || VIEW_ONLY_TYPES.includes(type) };
    const entity = text(r.entity);
    if (entity) out.entity = entity;
    const direction = text(r.direction_entity);
    if (type === 'wind' && direction) out.direction_entity = direction;
    const rate = text(r.rate_entity);
    if (type === 'rain' && rate) out.rate_entity = rate;
    const name = text(r.name);
    if (name) out.name = name;
    return out;
}

/**
 * The card's readings, in order. `readings` when it's a list; else built from the options it replaces, so a card
 * set up before keeps its row and its view
 */
export function readingsOf(config: AnimatedWeatherCardConfig): Reading[] {
    const raw = (config as { readings?: unknown }).readings;
    if (Array.isArray(raw)) return raw.map(normalizeReading).filter((r): r is Reading => !!r);
    const out: Reading[] = [];
    const add = (r: Omit<Reading, 'view'> & { view?: boolean }) => {
        const clean = Object.fromEntries(Object.entries(r).filter(([, v]) => v !== undefined && v !== '')) as unknown as Reading;
        out.push({ ...clean, view: !!r.view || VIEW_ONLY_TYPES.includes(r.type) });
    };
    const kinds = metricKinds(config);
    for (const k of kinds) {
        if (k === 'sun') { if (config.show_sun !== false) add({ type: 'sun' }); continue; }
        if (k === 'humidity') add({ type: 'humidity', entity: config.humidity_sensor_entity });
        else if (k === 'wind') add({ type: 'wind', entity: config.wind_speed_sensor_entity, direction_entity: config.wind_direction_sensor_entity });
        else if (k === 'pressure') add({ type: 'pressure', entity: config.pressure_sensor_entity });
        else if (k === 'uv') add({ type: 'uv', entity: config.uv_entity });
        else if (k === 'rain') add({ type: 'rain', entity: config.rain_entity, rate_entity: config.rain_rate_entity });
    }
    // A sensor the row doesn't show still counted: the wind's set how fast the weather moves, the UV and rain sensors
    // filled the view's tiles. They stay, in the view only
    if (!kinds.includes('wind') && (config.wind_speed_sensor_entity || config.wind_direction_sensor_entity)) {
        add({ type: 'wind', entity: config.wind_speed_sensor_entity, direction_entity: config.wind_direction_sensor_entity, view: true });
    }
    if (!kinds.includes('uv') && config.uv_entity) add({ type: 'uv', entity: config.uv_entity, view: true });
    if (!kinds.includes('rain') && (config.rain_entity || config.rain_rate_entity)) add({ type: 'rain', entity: config.rain_entity, rate_entity: config.rain_rate_entity, view: true });
    if (config.uv_max_entity) add({ type: 'uv_max', entity: config.uv_max_entity });
    for (const t of ['rain_event', 'rain_week', 'rain_month', 'rain_year'] as const) {
        const e = config[`${t}_entity` as const];
        if (e) add({ type: t, entity: e });
    }
    return out;
}

/** The options the list replaces: an edit to the table writes `readings` and drops these */
export const REPLACED_OPTIONS = [
    'metrics', 'show_sun', 'humidity_sensor_entity', 'wind_speed_sensor_entity', 'wind_direction_sensor_entity', 'pressure_sensor_entity',
    'uv_entity', 'uv_max_entity', 'rain_entity', 'rain_rate_entity', 'rain_event_entity', 'rain_week_entity', 'rain_month_entity', 'rain_year_entity',
] as const;

/** A sensor of the row's, not a weather entity read for its attribute */
const sensorOf = (r: Reading | undefined): string | undefined => (r?.entity && !r.entity.startsWith('weather.') ? r.entity : undefined);

/**
 * With `readings` set, the options it replaces are written from it (the first row of each type), and any set
 * alongside are ignored. Without it, the config is as it came
 */
export function compileReadings(config: AnimatedWeatherCardConfig): AnimatedWeatherCardConfig {
    if (!Array.isArray((config as { readings?: unknown }).readings)) return config;
    const list = readingsOf(config);
    const first = (t: ReadingType) => list.find(r => r.type === t);
    const out: Record<string, unknown> = { ...config };
    for (const k of REPLACED_OPTIONS) delete out[k];
    const wind = first('wind'), rain = first('rain');
    const set: Record<string, string | undefined> = {
        humidity_sensor_entity: sensorOf(first('humidity')),
        wind_speed_sensor_entity: sensorOf(wind), wind_direction_sensor_entity: wind?.direction_entity,
        pressure_sensor_entity: sensorOf(first('pressure')),
        uv_entity: sensorOf(first('uv')), uv_max_entity: first('uv_max')?.entity,
        rain_entity: sensorOf(rain), rain_rate_entity: rain?.rate_entity,
        rain_event_entity: first('rain_event')?.entity, rain_week_entity: first('rain_week')?.entity,
        rain_month_entity: first('rain_month')?.entity, rain_year_entity: first('rain_year')?.entity,
    };
    for (const [k, v] of Object.entries(set)) if (v) out[k] = v;
    return out as AnimatedWeatherCardConfig;
}

/** The rows the card's own row shows: not view only, and not one that needs a sensor and names none */
export const rowReadings = (list: readonly Reading[]): Array<{ r: Reading; i: number }> =>
    list.map((r, i) => ({ r, i })).filter(({ r }) => !r.view && !(needsSensor(r.type) && !r.entity));

/** Every entity the list reads, for the card to watch */
export const readingEntities = (list: readonly Reading[]): string[] =>
    [...new Set(list.flatMap(r => [r.entity, r.direction_entity, r.rate_entity]).filter((e): e is string => !!e))];

/** The list in YAML's short form: a bare type where there's nothing else to say */
export function shortForm(list: readonly Reading[]): Array<string | Record<string, unknown>> {
    return list.map(r => {
        const extra = Object.entries(r).filter(([k, v]) => k !== 'type' && k !== 'view' && v !== undefined);
        const view = r.view && !VIEW_ONLY_TYPES.includes(r.type);
        if (!extra.length && !view) return r.type;
        return { type: r.type, ...Object.fromEntries(extra), ...(view ? { view: true } : {}) };
    });
}

/** The default list, as the editor shows it when the card has none of its own */
export const isDefaultList = (list: readonly Reading[]): boolean =>
    list.length === DEFAULT_READINGS.length && list.every((r, i) => r.type === DEFAULT_READINGS[i] && !r.view && !r.entity && !r.direction_entity && !r.rate_entity && !r.name);

/** AQI on the US EPA scale: moderate from 51, unhealthy for some from 101, unhealthy 151, very unhealthy 201, hazardous 301 */
export const AQI_LEVELS: readonly number[] = [51, 101, 151, 201, 301];
export const AQI_LEVEL_NAMES = ['good', 'moderate', 'sensitive', 'unhealthy', 'very_unhealthy', 'hazardous'] as const;
export type AqiLevel = typeof AQI_LEVEL_NAMES[number];

/** aqi_levels when it's five rising numbers (where each level after good starts), else the EPA's */
export function aqiLevels(config: AnimatedWeatherCardConfig): readonly number[] {
    const raw: unknown = (config as { aqi_levels?: unknown }).aqi_levels;
    const list = Array.isArray(raw) ? raw : typeof raw === 'string' ? raw.split(',') : null;
    if (!list || list.length !== 5) return AQI_LEVELS;
    const n = list.map(v => (typeof v === 'number' ? v : parseFloat(String(v))));
    return n.every((v, i) => isFinite(v) && (i === 0 || v > n[i - 1])) ? n : AQI_LEVELS;
}

/** The level of an air quality index, read as the whole number it's shown as */
export function aqiLevel(value: number, levels: readonly number[] = AQI_LEVELS): AqiLevel {
    const v = Math.round(value);
    let i = 0;
    while (i < 5 && v >= levels[i]) i++;
    return AQI_LEVEL_NAMES[i];
}
