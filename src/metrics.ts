// The metric row's readings by name (metrics), and the UV index's levels: no strings and no Home Assistant, so the
// editor can use them without the card's words

import type { AnimatedWeatherCardConfig } from './types';

/** The readings the metric row can show, by the names `metrics` takes */
export const METRIC_KINDS = ['humidity', 'wind', 'pressure', 'sun', 'uv'] as const;
export type MetricKind = typeof METRIC_KINDS[number];
/** The row as it always was: humidity, wind, pressure and the next sunset or sunrise */
export const DEFAULT_METRICS: readonly MetricKind[] = ['humidity', 'wind', 'pressure', 'sun'];

/**
 * The readings in the metric row, in order: `metrics` as a list (or "uv, wind"), the names it knows, each once.
 * Without it, the row as it always was
 */
export function metricKinds(config: AnimatedWeatherCardConfig): MetricKind[] {
    const raw = config.metrics;
    const list = Array.isArray(raw) ? raw : typeof raw === 'string' ? raw.split(',') : null;
    if (!list) return [...DEFAULT_METRICS];
    const out: MetricKind[] = [];
    for (const v of list) {
        const k = String(v).trim().toLowerCase() as MetricKind;
        if ((METRIC_KINDS as readonly string[]).includes(k) && !out.includes(k)) out.push(k);
    }
    return out;
}

/** Where the WHO's UV levels start: moderate at 3, high at 6, very high at 8, extreme at 11 (low below 3) */
export const UV_LEVELS: readonly number[] = [3, 6, 8, 11];
export const UV_LEVEL_NAMES = ['low', 'moderate', 'high', 'very_high', 'extreme'] as const;
export type UvLevel = typeof UV_LEVEL_NAMES[number];

/** uv_levels when it's four rising numbers (a list, or "3, 6, 8, 11"), else the WHO's */
export function uvLevels(config: AnimatedWeatherCardConfig): readonly number[] {
    const raw: unknown = config.uv_levels;
    const list = Array.isArray(raw) ? raw : typeof raw === 'string' ? raw.split(',') : null;
    if (!list || list.length !== 4) return UV_LEVELS;
    const n = list.map(v => (typeof v === 'number' ? v : parseFloat(String(v))));
    return n.every((v, i) => isFinite(v) && (i === 0 || v > n[i - 1])) ? n : UV_LEVELS;
}

/** The level of a UV index, read as the whole number it's shown as */
export function uvLevel(value: number, levels: readonly number[] = UV_LEVELS): UvLevel {
    const v = Math.round(value);
    let i = 0;
    while (i < 4 && v >= levels[i]) i++;
    return UV_LEVEL_NAMES[i];
}

