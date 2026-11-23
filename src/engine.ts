// The weather engine's amounts in auto mode (engine_mode): how much rain, snow, cloud, fog and wind there is, from the
// weather's own values: a rain rate sensor or the forecast's hour, cloud cover, visibility, the wind and its gusts. The
// condition says which weather runs and sets a floor; these say how much of it. With nothing to go on, every
// condition looks as it always has (a test holds every class to it). Pure: no strings, no DOM.

import type { AnimatedWeatherCardConfig, EngineAmounts, HomeAssistant, RainKind } from './types';
import type { ForecastEntry } from './forecast-data';
import { readingsOf, WEATHER_ATTRIBUTE, type ReadingType } from './readings';
import { precipitationUnit } from './units';
import { convertWindSpeedToKmh } from './utils';

const HOUR = 3_600_000;

/** What the weather says now, each in one unit; a value it doesn't say is left out */
export interface EngineInputs {
    /** Rain or snow falling, mm/h of water */
    rate?: number;
    /** Cloud cover, % */
    cloud?: number;
    /** Visibility, km */
    visibility?: number;
    /** Wind, km/h */
    wind?: number;
    /** Gusts, km/h */
    gust?: number;
}

const lower = (unit: unknown) => String(unit ?? '').toLowerCase().replace(/\s+/g, '');

/** A rain rate in mm/h from a sensor's value and unit: in/h, cm/h, mm/d and the like; without a unit, mm/h */
export function rateToMmH(value: number, unit?: unknown): number {
    const u = lower(unit);
    let v = value;
    if (u.startsWith('in') || u.includes('inch')) v *= 25.4;
    else if (u.startsWith('cm')) v *= 10;
    if (/\/(d|day|24h)$/.test(u)) v /= 24;
    return v;
}

/** A forecast hour's precipitation in mm, in the entity's precipitation unit */
export function amountToMm(value: number, unit?: unknown): number {
    const u = lower(unit);
    if (u.startsWith('in') || u.includes('inch')) return value * 25.4;
    if (u.startsWith('cm')) return value * 10;
    return value;
}

/** A visibility in km, from km, m, mi or ft */
export function visibilityToKm(value: number, unit?: unknown): number {
    const u = lower(unit);
    if (u.startsWith('mi')) return value * 1.609344;
    if (u.startsWith('ft')) return value * 0.0003048;
    if (u === 'm' || u.startsWith('met')) return value / 1000;
    return value;
}

const num = (v: unknown): number | undefined => {
    const n = typeof v === 'number' ? v : typeof v === 'string' && v.trim() !== '' ? Number(v) : NaN;
    return Number.isFinite(n) ? n : undefined;
};

/** The hourly entry under way at `now`, else the first one if it starts within the hour; never a day's total */
export function hourAt(hourly: readonly ForecastEntry[] | null | undefined, now: number): ForecastEntry | undefined {
    const entries = (hourly ?? []).map(e => ({ e, t: Date.parse(e.datetime) })).filter(x => !isNaN(x.t)).sort((a, b) => a.t - b.t);
    for (let i = 0; i < entries.length; i++) {
        const end = entries[i + 1]?.t ?? entries[i].t + HOUR;
        if (entries[i].t <= now && now < Math.min(end, entries[i].t + HOUR)) return entries[i].e;
    }
    const first = entries[0];
    return first && first.t > now && first.t - now <= HOUR ? first.e : undefined;
}

/**
 * What the weather says now. Each value takes the first source that has one: a reading's own sensor (so the sky
 * agrees with the number on the card), the weather entity, then the forecast's hour under way. A rain rate of 0
 * isn't a reading (a tipping bucket reads 0 between tips, and an unheated one in snow), and neither is an hour's 0.
 */
export function readEngineInputs(hass: HomeAssistant | undefined, config: AnimatedWeatherCardConfig, hour?: ForecastEntry): EngineInputs {
    const states = hass?.states ?? {};
    const weather = config.entity ? states[config.entity] : undefined;
    const attrs = (weather?.attributes ?? {}) as Record<string, unknown>;
    const inputs: EngineInputs = {};

    // A reading row's own source for a type: its sensor, or another weather entity's attribute
    const rows = (() => { try { return readingsOf(config); } catch { return []; } })();
    const rowSource = (type: ReadingType): { value: number; unit: unknown; attrs?: Record<string, unknown> } | undefined => {
        const row = rows.find(r => r.type === type && r.entity);
        const entity = row?.entity ? states[row.entity] : undefined;
        if (!row?.entity || !entity) return undefined;
        if (row.entity.startsWith('weather.')) {
            const a = (entity.attributes ?? {}) as Record<string, unknown>;
            const value = num(a[WEATHER_ATTRIBUTE[type] ?? '']);
            return value === undefined ? undefined : { value, unit: undefined, attrs: a };
        }
        const value = num(entity.state);
        return value === undefined ? undefined : { value, unit: entity.attributes?.unit_of_measurement };
    };

    // Rain or snow: a rate sensor above 0, else the hour's precipitation above 0
    const rateEntity = config.rain_rate_entity ? states[config.rain_rate_entity] : undefined;
    const rate = num(rateEntity?.state);
    if (rate !== undefined && rate > 0) inputs.rate = rateToMmH(rate, rateEntity?.attributes?.unit_of_measurement);
    else {
        const amount = num(hour?.precipitation);
        if (amount !== undefined && amount > 0) inputs.rate = amountToMm(amount, precipitationUnit(attrs, hass?.config?.unit_system));
    }

    const cloud = rowSource('cloud_cover')?.value ?? num(attrs.cloud_coverage) ?? num(hour?.cloud_coverage);
    if (cloud !== undefined) inputs.cloud = Math.min(100, Math.max(0, cloud));

    const seen = rowSource('visibility');
    if (seen) inputs.visibility = visibilityToKm(seen.value, seen.attrs ? seen.attrs.visibility_unit ?? 'km' : seen.unit);
    else {
        const v = num(attrs.visibility);
        if (v !== undefined) inputs.visibility = visibilityToKm(v, attrs.visibility_unit ?? 'km');
    }

    // The wind the card shows, raw: a sensor, else the entity; missing stays missing (the card's own 10 km/h isn't one)
    const windSensor = config.wind_speed_sensor_entity ? states[config.wind_speed_sensor_entity] : undefined;
    const windValue = num(windSensor?.state);
    const unit = attrs.wind_speed_unit as string | undefined;
    if (windValue !== undefined) inputs.wind = convertWindSpeedToKmh(windValue, windSensor?.attributes?.unit_of_measurement);
    else if (num(attrs.wind_speed) !== undefined) inputs.wind = convertWindSpeedToKmh(num(attrs.wind_speed)!, unit);
    else if (num(hour?.wind_speed) !== undefined) inputs.wind = convertWindSpeedToKmh(num(hour?.wind_speed)!, unit);

    const gust = rowSource('gust');
    if (gust) inputs.gust = convertWindSpeedToKmh(gust.value, gust.attrs ? (gust.attrs.wind_speed_unit as string) : (gust.unit as string));
    else if (num(attrs.wind_gust_speed) !== undefined) inputs.gust = convertWindSpeedToKmh(num(attrs.wind_gust_speed)!, unit);
    else if (num(hour?.wind_gust_speed) !== undefined) inputs.gust = convertWindSpeedToKmh(num(hour?.wind_gust_speed)!, unit);
    return inputs;
}

/** An hour of the forecast as the engine reads it: its precipitation, cloud cover, wind and gusts, in the entity's units */
export function hourInputs(entry: ForecastEntry, weatherAttrs: Record<string, unknown> | undefined, system?: HomeAssistant['config']['unit_system']): EngineInputs {
    const inputs: EngineInputs = {};
    const unit = weatherAttrs?.wind_speed_unit as string | undefined;
    const amount = num(entry.precipitation);
    if (amount !== undefined && amount > 0) inputs.rate = amountToMm(amount, precipitationUnit(weatherAttrs, system));
    const cloud = num(entry.cloud_coverage);
    if (cloud !== undefined) inputs.cloud = Math.min(100, Math.max(0, cloud));
    const wind = num(entry.wind_speed);
    if (wind !== undefined) inputs.wind = convertWindSpeedToKmh(wind, unit);
    const gust = num(entry.wind_gust_speed);
    if (gust !== undefined) inputs.gust = convertWindSpeedToKmh(gust, unit);
    return inputs;
}

/** Between anchors, straight; or on a log scale of x, for amounts that span orders of magnitude */
function along(points: ReadonlyArray<readonly [number, number]>, x: number, log = false): number {
    if (x <= points[0][0]) return points[0][1];
    const last = points[points.length - 1];
    if (x >= last[0]) return last[1];
    for (let i = 1; i < points.length; i++) {
        const [x0, y0] = points[i - 1], [x1, y1] = points[i];
        if (x <= x1) {
            const t = log ? Math.log(x / x0) / Math.log(x1 / x0) : (x - x0) / (x1 - x0);
            return y0 + (y1 - y0) * t;
        }
    }
    return last[1];
}
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export const RAIN_KINDS: readonly RainKind[] = ['light', 'rain', 'storm', 'pouring'];
/** Where one kind of rain gives way to the next, mm/h: light, steady, heavy, pouring */
const RAIN_BREAKS = [0.5, 2.5, 8];
/** How far past a break the rain has to go before its kind changes, so a rate wavering on one doesn't flicker */
const HYSTERESIS = 1.15;
/** Drops on the reference card (420 × 230) by rate; each kind's usual rate lands on its pool (RAIN_POOL_SIZE) */
const RAIN_DROPS: ReadonlyArray<readonly [number, number]> = [[0.1, 6], [0.3, 10], [1.5, 18], [4, 24], [10, 32], [30, 44]];
/** Each rainy condition's floor, usual rate and ceiling, mm/h: the condition sets the floor, the weather moves it up */
const RAIN_BAND: Readonly<Record<string, readonly [number, number, number]>> = {
    'light-rain': [0.05, 0.3, 2.4], rainy: [0.1, 1.5, 60], stormy: [1, 4, 60], pouring: [8, 10, 60], 'snowy-rainy': [0.1, 1.5, 60],
};
/** The rain each condition shows with nothing to go on: the kind it always has */
const RAIN_KIND_OF: Readonly<Record<string, RainKind>> = { 'light-rain': 'light', rainy: 'rain', stormy: 'storm', pouring: 'pouring', 'snowy-rainy': 'rain' };
/** Drops of each kind at its usual rate, as the card has always drawn them */
const USUAL_DROPS: Readonly<Record<RainKind, number>> = { light: 10, rain: 18, storm: 24, pouring: 32 };

/** Snow and sleet: how many times today's flakes, by mm/h of water */
const SNOW: ReadonlyArray<readonly [number, number]> = [[0.1, 0.4], [0.3, 0.6], [1, 1], [2.5, 1.6], [5, 2.2]];
/** Clouds drawn by cover, and each cloudy condition's range; both draw 4 with nothing to go on */
const CLOUDS: ReadonlyArray<readonly [number, number]> = [[0, 2], [25, 3], [50, 4], [75, 6], [100, 8]];
const CLOUD_BAND: Readonly<Record<string, readonly [number, number]>> = { 'partly-cloudy': [3, 5], cloudy: [4, 8] };
/** Fog's thickness by visibility, km; never thicker than it always was (1), so no text loses contrast */
const FOG: ReadonlyArray<readonly [number, number]> = [[0.2, 1], [1, 0.8], [3, 0.6], [8, 0.45]];
/** Leaves on a windy day by wind, km/h */
const LEAVES: ReadonlyArray<readonly [number, number]> = [[10, 0.5], [20, 0.75], [30, 1], [50, 1.6], [80, 2.4]];
/** A clear night's stars, the share shown under cloud cover */
const STARS: ReadonlyArray<readonly [number, number]> = [[0, 1], [10, 0.85], [25, 0.6], [50, 0.35], [75, 0.25]];

/** The kind of rain at a rate, held past each break by HYSTERESIS on the side of the kind it was */
export function rainKindAt(rate: number, previous?: RainKind): RainKind {
    const prev = previous ? RAIN_KINDS.indexOf(previous) : -1;
    let index = 0;
    RAIN_BREAKS.forEach((at, i) => {
        const threshold = prev < 0 ? at : i < prev ? at / HYSTERESIS : at * HYSTERESIS;
        if (rate >= threshold) index = i + 1;
    });
    return RAIN_KINDS[index];
}

/** A number of clouds split over the three depths, back to front, the front the fullest: 4 is the usual 1, 1, 2 */
export function cloudSplit(total: number): [number, number, number] {
    const back = Math.max(1, Math.floor(total * 0.3));
    const mid = Math.max(1, Math.round(total * 0.3));
    return [back, mid, Math.max(1, total - back - mid)];
}

/** Today's look for every condition: what the engine shows with nothing to go on */
export const USUAL_AMOUNTS: EngineAmounts = { rain: { kind: 'rain', drops: 18 }, snow: 1, sleet: 1, clouds: [1, 1, 2], fog: 1, leaves: 1, gusts: 0, stars: 1 };

/**
 * The amounts a condition shows for what the weather says. Each signal moves only its own part; with none, the part
 * is the condition's usual one. `previous` is the rain's kind now, so a rate on a break holds it.
 */
export function autoPicture(cls: string, inputs: EngineInputs, previous?: RainKind): EngineAmounts {
    const amounts: EngineAmounts = { ...USUAL_AMOUNTS, rain: { kind: RAIN_KIND_OF[cls] ?? 'rain', drops: 0 }, clouds: [...USUAL_AMOUNTS.clouds] };
    amounts.rain.drops = USUAL_DROPS[amounts.rain.kind];

    const band = RAIN_BAND[cls];
    if (band && inputs.rate !== undefined) {
        const rate = clamp(inputs.rate, band[0], band[2]);
        // Within the condition's kinds: pouring is always pouring, light rain never heavier than steady
        const lo = RAIN_KINDS.indexOf(rainKindAt(band[0])), hi = RAIN_KINDS.indexOf(rainKindAt(band[2]));
        const kind = RAIN_KINDS[clamp(RAIN_KINDS.indexOf(rainKindAt(rate, previous)), lo, hi)];
        amounts.rain = { kind, drops: Math.round(along(RAIN_DROPS, rate, true)) };
    }
    if (inputs.rate !== undefined) {
        const snow = along(SNOW, clamp(inputs.rate, 0.1, 10), true);
        amounts.snow = Math.round(snow * 100) / 100;
        amounts.sleet = amounts.snow;
    }
    const cloudBand = CLOUD_BAND[cls];
    if (cloudBand && inputs.cloud !== undefined) amounts.clouds = cloudSplit(clamp(Math.round(along(CLOUDS, inputs.cloud)), cloudBand[0], cloudBand[1]));
    if (inputs.visibility !== undefined) amounts.fog = Math.round(along(FOG, inputs.visibility) * 100) / 100;
    if (inputs.wind !== undefined) amounts.leaves = Math.round(along(LEAVES, inputs.wind) * 100) / 100;
    if (inputs.gust !== undefined) {
        const g = inputs.wind !== undefined ? (inputs.gust - inputs.wind) / 25 : (inputs.gust - 30) / 40;
        amounts.gusts = Math.round(clamp(g, 0, 1) * 100) / 100;
    }
    if (inputs.cloud !== undefined) amounts.stars = Math.round(along(STARS, inputs.cloud) * 100) / 100;
    return amounts;
}
