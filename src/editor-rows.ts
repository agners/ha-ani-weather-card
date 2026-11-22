// The weather card's editor, as a table of rows (the editor bundle): which options each row holds, whether it's one of
// the basics or shows only with "Show all settings", when it applies, and whether the card's config has changed it.
// No DOM and no strings shown, so a test can hold every option to a row.
//
// A row shows when it applies and is a basic one, or all settings are on, or the config has changed one of its options
// from its default: the switch filters defaults, never what you've set. "Changed" means a value other than the
// default, never a key that's merely there, since the old editor wrote defaults out (`animate: true`) and every new
// card carries `sun_entity: sun.sun`.

import type { AnimatedWeatherCardConfig } from './types';
import { DEFAULT_ENGINE_SETTINGS } from './constants';
import { REPLACED_OPTIONS, isDefaultList, readingsOf } from './readings';

type Config = AnimatedWeatherCardConfig;

/** The editor's own state that rows depend on: the mode, and choices not yet in the config */
export interface RowContext {
    /** Show all settings */
    all: boolean;
    /** Weather for another place: on, though nothing's typed yet, or off */
    place: boolean;
    /** The note's source */
    note: 'off' | 'ai' | 'entity';
    /** No default AI Task, so its picker joins the basics */
    noDefaultAi: boolean;
}

/** What the card does when an option is left out */
export const DEFAULTS: Readonly<Record<string, unknown>> = {
    show_location: true, temperature_decimals: 0, compact: false, layout: 'default', color_palette: 'default',
    hero: 'temperature', show_clock: false, show_date: false, show_forecast: false, show_days: false, forecast_days: 7,
    forecast_metric: 'temp', forecast_graph: 'line',
    show_attributes: true, show_attribute_labels: true, show_attribute_icons: true, show_indoor: true, indoor_style: 'label',
    show_flight_labels: true, flight_label: 'flight', plane_speed: 1, planes_on_load: false,
    animate: true, spill_particles: true, disable_lightning_shake: false, auto_pause: false, dev_mode: false,
    enable_day_night_cycle: false, sunrise_hour: 6, sunset_hour: 20,
    night: 'auto', night_red: true, night_lux: 5, wake_time: '07:00',
    show_note: false, note_tone: 'snarky', note_attribute: 'note', note_max_age: 180, sun_entity: 'sun.sun',
};

const empty = (v: unknown) => v === undefined || v === null || (typeof v === 'string' && !v.trim()) || (Array.isArray(v) && !v.length);

/** night as the card reads it: YAML-mode dashboards hand `on` and `off` over as true and false */
const nightOf = (v: unknown) => (v === true ? 'on' : v === false ? 'off' : v);

/** One option, other than its default? `engine_settings.rainCount` and `custom_colors.sunny_bg` reach inside */
export function isChanged(config: Config, key: string): boolean {
    const c = config as Record<string, unknown>;
    if (key.startsWith('engine_settings.')) {
        const k = key.slice(16) as keyof typeof DEFAULT_ENGINE_SETTINGS;
        const v = (c.engine_settings as Record<string, unknown> | undefined)?.[k];
        // The card treats anything but a number as unset
        return typeof v === 'number' && isFinite(v) && v !== DEFAULT_ENGINE_SETTINGS[k];
    }
    if (key.startsWith('custom_colors.')) return !empty((c.custom_colors as Record<string, unknown> | undefined)?.[key.slice(14)]);
    const v = c[key];
    if (empty(v)) return false;
    if (!(key in DEFAULTS)) return true;
    const d = DEFAULTS[key];
    if (key === 'night') return nightOf(v) !== d;
    if (key === 'wake_time') return String(v).replace(/^(\d):/, '0$1:') !== d;
    if (typeof d === 'number') return Number(v) !== d;
    return v !== d;
}

/** The tap with no tap_action, as the card has it: nothing on a nightstand, the forecast with it on, else the details */
export const tapDefault = (c: Config): string => (c.layout === 'nightstand' ? 'none' : c.show_forecast ? 'forecast' : 'more-info');

const action = (v: unknown): string | undefined => (v && typeof v === 'object' && typeof (v as { action?: unknown }).action === 'string' ? (v as { action: string }).action : undefined);

export const ENGINE_KEYS = Object.keys(DEFAULT_ENGINE_SETTINGS).map(k => `engine_settings.${k}`);
export const SKY_COLOR_KEYS = ['sunny_bg', 'cloudy_bg', 'rainy_bg', 'stormy_bg', 'snowy_bg', 'windy_bg', 'fog_color'].map(k => `custom_colors.${k}`);
export const INK_COLOR_KEYS = ['temperature_color', 'text_color', 'sun_color', 'rain_color', 'snow_color'].map(k => `custom_colors.${k}`);

export type Tier = 'basic' | 'all';

export interface RowSpec {
    tier: Tier;
    /** The options it holds */
    keys: readonly string[];
    /** When it applies; a changed row shows even when it doesn't, so nothing set is ever hidden */
    when?: (c: Config, x: RowContext) => boolean;
    /** Changed, when it isn't simply one of its keys differing from its default */
    changed?: (c: Config) => boolean;
    /** A basic row only in this case (the AI Task, with no default) */
    promote?: (c: Config, x: RowContext) => boolean;
    /** Text that explains why something else doesn't apply: it never counts as changed, nor alone shows its section */
    reason?: true;
}

const nightstand = (c: Config) => c.layout === 'nightstand';
const forecastRow = (c: Config, x: RowContext) => !!c.show_forecast && (x.all || !nightstand(c));
const animated = (c: Config) => c.animate !== false;

/** Every row, in the editor's order */
export const ROWS: Readonly<Record<string, RowSpec>> = {
    // Weather
    entity: { tier: 'basic', keys: ['entity'] },
    name: { tier: 'basic', keys: ['name'] },
    show_location: { tier: 'all', keys: ['show_location'] },
    outdoor_sensor_entity: { tier: 'all', keys: ['outdoor_sensor_entity'] },
    feels_like_entity: { tier: 'all', keys: ['feels_like_entity'] },
    another_place: { tier: 'all', keys: ['latitude', 'longitude', 'time_zone'] },
    place_fields: { tier: 'all', keys: ['latitude', 'longitude', 'time_zone'], when: (_, x) => x.place },

    // Layout and colors
    layout: { tier: 'basic', keys: ['compact', 'layout'] },
    color_palette: { tier: 'basic', keys: ['color_palette'] },
    temperature_decimals: { tier: 'all', keys: ['temperature_decimals'] },

    // Nightstand
    why_nightstand_only: { tier: 'basic', keys: [], reason: true, when: c => !nightstand(c) },
    alarm_entity: { tier: 'basic', keys: ['alarm_entity'], when: nightstand },
    wake_time: { tier: 'basic', keys: ['wake_time'], when: nightstand },
    night: { tier: 'all', keys: ['night'], when: nightstand },
    night_sensor: { tier: 'all', keys: ['night_sensor'], when: c => nightstand(c) && nightOf(c.night ?? 'auto') === 'auto' },
    night_lux: { tier: 'all', keys: ['night_lux'], when: c => nightstand(c) && !!c.night_sensor },
    bed_time: { tier: 'all', keys: ['bed_time'], when: nightstand },
    night_red: { tier: 'all', keys: ['night_red'], when: nightstand },

    // Forecast and clock
    why_forecast_nightstand: { tier: 'basic', keys: [], reason: true, when: nightstand },
    show_forecast: { tier: 'basic', keys: ['show_forecast'], when: (c, x) => x.all || !nightstand(c) },
    forecast_days: { tier: 'all', keys: ['show_days', 'forecast_days'], when: forecastRow },
    forecast_metric: { tier: 'all', keys: ['forecast_metric'], when: forecastRow },
    forecast_graph: { tier: 'all', keys: ['forecast_graph'], when: forecastRow },
    time_date: { tier: 'all', keys: ['show_clock', 'show_date'] },
    hero: { tier: 'all', keys: ['hero'] },

    // Weather note
    note: { tier: 'basic', keys: ['show_note', 'note_entity'], when: (c, x) => x.all || !nightstand(c) },
    why_note_compact: { tier: 'basic', keys: [], reason: true, when: (c, x) => !!c.compact && !nightstand(c) && x.note !== 'off' },
    why_note_nightstand: { tier: 'basic', keys: [], reason: true, when: nightstand },
    note_tone: { tier: 'basic', keys: ['note_tone'], when: (_, x) => x.note === 'ai' },
    note_ai_task_entity: { tier: 'all', keys: ['note_ai_task_entity'], when: (_, x) => x.note === 'ai', promote: (_, x) => x.noDefaultAi },
    note_calendar: { tier: 'all', keys: ['note_calendar'], when: (_, x) => x.note === 'ai' },
    note_entity: { tier: 'basic', keys: ['note_entity'], when: (_, x) => x.note === 'entity' },
    note_attribute: { tier: 'all', keys: ['note_attribute'], when: (_, x) => x.note === 'entity' },
    note_max_age: { tier: 'all', keys: ['note_max_age'], when: (_, x) => x.note !== 'off' },

    // Readings
    show_attributes: { tier: 'all', keys: ['show_attributes'] },
    readings: {
        tier: 'all', keys: ['readings', 'uv_levels', 'aqi_levels', ...REPLACED_OPTIONS], when: c => c.show_attributes !== false,
        changed: c => !isDefaultList(readingsOf(c)) || isChanged(c, 'uv_levels') || isChanged(c, 'aqi_levels'),
    },
    reading_style: { tier: 'all', keys: ['show_attribute_labels', 'show_attribute_icons'], when: c => c.show_attributes !== false },
    indoor_temperature_entity: { tier: 'all', keys: ['indoor_temperature_entity'] },
    indoor_humidity_entity: { tier: 'all', keys: ['indoor_humidity_entity'] },
    indoor_line: { tier: 'all', keys: ['show_indoor', 'indoor_style'], when: c => !!(c.indoor_temperature_entity || c.indoor_humidity_entity) },

    // Sky and motion
    animate: { tier: 'all', keys: ['animate'] },
    spill_particles: { tier: 'all', keys: ['spill_particles'], when: animated },
    lightning: { tier: 'all', keys: ['disable_lightning_shake'], when: animated },
    auto_pause: { tier: 'all', keys: ['auto_pause'] },
    sky_follows: { tier: 'all', keys: ['enable_day_night_cycle'] },
    day_hours: { tier: 'all', keys: ['sunrise_hour', 'sunset_hour'], when: c => !!c.enable_day_night_cycle },
    sun_entity: { tier: 'all', keys: ['sun_entity'] },
    moon_entity: { tier: 'all', keys: ['moon_entity'] },
    amounts: { tier: 'all', keys: ENGINE_KEYS, when: animated },

    // Custom colors
    sky_colors: { tier: 'all', keys: SKY_COLOR_KEYS, when: c => c.color_palette !== 'theme' },
    why_sky_colors_theme: { tier: 'all', keys: [], reason: true, when: c => c.color_palette === 'theme' },
    ink_colors: { tier: 'all', keys: INK_COLOR_KEYS },

    // Planes
    flights_entity: { tier: 'all', keys: ['flights_entity'] },
    plane_tags: { tier: 'all', keys: ['show_flight_labels', 'flight_label'], when: c => !!c.flights_entity },
    plane_speed: { tier: 'all', keys: ['plane_speed'], when: c => !!c.flights_entity },
    planes_on_load: { tier: 'all', keys: ['planes_on_load'], when: c => !!c.flights_entity },

    // Interactions
    actions: {
        tier: 'all', keys: ['tap_action', 'hold_action', 'double_tap_action'],
        changed: c => {
            const tap = action(c.tap_action);
            const other = (v: unknown) => { const a = action(v); return a !== undefined && a !== 'none'; };
            return (tap !== undefined && tap !== tapDefault(c)) || other(c.hold_action) || other(c.double_tap_action);
        },
    },

    // Simulated weather
    dev_mode: { tier: 'all', keys: ['dev_mode'] },
};

/**
 * The sections, in order, and their rows. The first five are always open and hold the basics; the drawers after
 * them hold only rows for all settings, and are closed until opened
 */
export const SECTIONS: Readonly<Record<string, readonly string[]>> = {
    weather: ['entity', 'name', 'show_location', 'outdoor_sensor_entity', 'feels_like_entity', 'another_place', 'place_fields'],
    look: ['layout', 'color_palette', 'temperature_decimals'],
    nightstand: ['why_nightstand_only', 'alarm_entity', 'wake_time', 'night', 'night_sensor', 'night_lux', 'bed_time', 'night_red'],
    forecast: ['why_forecast_nightstand', 'show_forecast', 'forecast_days', 'forecast_metric', 'forecast_graph', 'time_date', 'hero'],
    note: ['note', 'why_note_compact', 'why_note_nightstand', 'note_tone', 'note_ai_task_entity', 'note_calendar', 'note_entity', 'note_attribute', 'note_max_age'],
    readings: ['show_attributes', 'readings', 'reading_style', 'indoor_temperature_entity', 'indoor_humidity_entity', 'indoor_line'],
    sky: ['animate', 'spill_particles', 'lightning', 'auto_pause', 'sky_follows', 'day_hours', 'sun_entity', 'moon_entity', 'amounts'],
    colors: ['sky_colors', 'why_sky_colors_theme', 'ink_colors'],
    planes: ['flights_entity', 'plane_tags', 'plane_speed', 'planes_on_load'],
    interactions: ['actions'],
    dev: ['dev_mode'],
};

/** The sections that open and close */
export const DRAWERS: readonly string[] = ['readings', 'sky', 'colors', 'planes', 'interactions'];

/** The row changed in this config? */
export function rowChanged(id: string, config: Config): boolean {
    const spec = ROWS[id];
    if (!spec || spec.reason) return false;
    return spec.changed ? spec.changed(config) : spec.keys.some(k => isChanged(config, k));
}

/**
 * Does the row show? `pinned` holds the rows the config has changed this session: they stay, so a value cleared
 * under the finger doesn't take its field with it
 */
export function rowShown(id: string, config: Config, x: RowContext, pinned: ReadonlySet<string>): boolean {
    const spec = ROWS[id];
    if (!spec) return false;
    if (pinned.has(id)) return true;
    if (spec.when && !spec.when(config, x)) return false;
    return spec.tier === 'basic' || x.all || !!spec.promote?.(config, x);
}

/**
 * Does a section show? When one of its rows does, other than a reason: a reason only explains what's there (the
 * nightstand's own section appears on a regular card only when one of its options is set)
 */
export function sectionShown(ids: readonly string[], config: Config, x: RowContext, pinned: ReadonlySet<string>): boolean {
    return ids.some(id => !ROWS[id]?.reason && rowShown(id, config, x, pinned));
}
