// The weather card's presets: a start for its look, picked in the editor, offered by the card picker and tried in the
// demo. A preset writes ordinary options, so the YAML says what the card does, and every option still works on its
// own. It owns the options that make a card's layout (PRESET_KEYS): picking one takes those back to its own and leaves
// everything else as it was, the entity, sensors, readings, colours, note, planes and actions. Pure: no DOM, so the
// main bundle (the card picker) and the editor's carry it alike.

import type { AnimatedWeatherCardConfig } from './types';

export type PresetId = 'standard' | 'simple' | 'forecast' | 'full' | 'strip' | 'bedside' | 'wall';

export interface Preset {
    id: PresetId;
    label: string;
    /** What it gives you, in a line */
    description: string;
    /** The options it writes over the ones it owns */
    options: Partial<AnimatedWeatherCardConfig>;
}

/**
 * The options a preset owns. Picking one removes them all, then writes its own. Without `grid_options` the card asks
 * for its own size in a sections view (getGridOptions), so only the Wall, which needs more than one column, sets one.
 */
export const PRESET_KEYS = [
    'compact', 'layout', 'show_forecast', 'show_days', 'show_clock', 'show_date', 'hero', 'show_attributes', 'grid_options',
] as const;

/** The wall's frame, which the card needs before it lays itself out for reading across the room (sky.ts isWallFrame) */
export const WALL_MIN = { width: 640, height: 540 };

export const PRESETS: readonly Preset[] = [
    { id: 'standard', label: 'Standard', description: 'The sky, the temperature and four readings', options: {} },
    { id: 'simple', label: 'Simple', description: 'The sky, the temperature and the condition, nothing else', options: { show_attributes: false } },
    { id: 'forecast', label: 'Forecast', description: 'The next hours under the readings; drag through them', options: { show_forecast: true } },
    {
        id: 'full', label: 'Full info', description: 'The time and date, the hours and the week',
        options: { show_forecast: true, show_days: true, show_clock: true, show_date: true },
    },
    { id: 'strip', label: 'Strip', description: 'One line, to sit under other cards', options: { compact: true } },
    { id: 'bedside', label: 'Bedside', description: 'A clock that goes red on black at night', options: { layout: 'nightstand' } },
    {
        id: 'wall', label: 'Wall', description: 'A panel to read across the room',
        options: { show_forecast: true, show_clock: true, show_date: true, grid_options: { columns: 'full', rows: 10 } },
    },
];

/** What each owned option is when it's left out, so a written default and a missing key match alike */
const OWNED_DEFAULTS: Readonly<Record<string, unknown>> = {
    compact: false, layout: 'default', show_forecast: false, show_days: false, show_clock: false, show_date: false,
    hero: 'temperature', show_attributes: true,
};

export const presetById = (id: string): Preset | undefined => PRESETS.find(p => p.id === id);

/** The config with a preset's look: the options it owns taken back to its own, the rest as they were */
export function applyPreset<C extends Partial<AnimatedWeatherCardConfig>>(config: C, id: PresetId): C {
    const preset = presetById(id);
    if (!preset) return config;
    const out: Record<string, unknown> = { ...config };
    for (const key of PRESET_KEYS) delete out[key];
    return { ...out, ...preset.options } as C;
}

/**
 * The preset this config matches: every option a preset owns as it writes it, defaults included, its size aside (you
 * may have resized the card since), except the Wall's, which is its size: full width. The forecast with the time and
 * date at a column's width is a look of your own. None is a look of your own (null).
 */
export function presetOf(config: Partial<AnimatedWeatherCardConfig> | undefined): PresetId | null {
    const c = (config ?? {}) as Record<string, unknown>;
    const value = (key: string, from: Record<string, unknown>) => from[key] ?? OWNED_DEFAULTS[key];
    for (const preset of PRESETS) {
        const options = preset.options as Record<string, unknown>;
        const same = PRESET_KEYS.filter(key => key !== 'grid_options')
            .every(key => value(key, c) === value(key, options));
        const sized = preset.id !== 'wall' || (c.grid_options as { columns?: unknown } | undefined)?.columns === 'full';
        if (same && sized) return preset.id;
    }
    return null;
}
