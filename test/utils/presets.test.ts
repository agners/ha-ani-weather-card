import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { PRESETS, PRESET_KEYS, WALL_MIN, applyPreset, presetOf } from '../../src/presets';

const types = readFileSync(join(process.cwd(), 'src/types.ts'), 'utf8');
const configType = types.slice(types.indexOf('export interface AnimatedWeatherCardConfig {'));
const option = (key: string) => new RegExp(`^ {4}${key}\\?:`, 'm').test(configType.slice(0, configType.indexOf('\n}')));

describe('the weather card\'s presets', () => {
    it('are seven, each writing only options it owns, and real ones', () => {
        expect(PRESETS.map(p => p.id)).toEqual(['standard', 'simple', 'forecast', 'full', 'strip', 'bedside', 'wall']);
        for (const preset of PRESETS) {
            for (const key of Object.keys(preset.options)) {
                expect(PRESET_KEYS as readonly string[], `${preset.id}: ${key}`).toContain(key);
                // grid_options is Home Assistant's own, for every card
                if (key !== 'grid_options') expect(option(key), `${preset.id}: ${key}`).toBe(true);
            }
            expect(preset.label.length).toBeGreaterThan(0);
            expect(preset.description.length).toBeGreaterThan(0);
        }
        // Only the Wall sets a size: it needs more than a sections column
        expect(PRESETS.filter(p => 'grid_options' in p.options).map(p => p.id)).toEqual(['wall']);
        const wall = PRESETS.find(p => p.id === 'wall')!.options.grid_options as { rows: number };
        expect(wall.rows * 56 + (wall.rows - 1) * 8).toBeGreaterThanOrEqual(WALL_MIN.height);
    });

    it('take back the options they own and leave the rest as set', () => {
        const mine = {
            type: 'custom:animated-weather-card' as const, entity: 'weather.home', name: 'Garden', color_palette: 'theme' as const,
            show_note: true, readings: ['uv'], forecast_days: 5, hero: 'clock' as const, show_forecast: true, compact: true,
            grid_options: { rows: 3 },
        };
        const full = applyPreset(mine, 'full');
        expect(full).toEqual({
            type: 'custom:animated-weather-card', entity: 'weather.home', name: 'Garden', color_palette: 'theme', show_note: true,
            readings: ['uv'], forecast_days: 5, show_forecast: true, show_days: true, show_clock: true, show_date: true,
        });
        // Standard is the card as it comes: nothing of its own
        const standard = applyPreset(mine, 'standard') as Record<string, unknown>;
        for (const key of PRESET_KEYS) expect(standard, key).not.toHaveProperty(key);
        expect(standard.entity).toBe('weather.home');
        // The input is left alone
        expect(mine.compact).toBe(true);
    });

    it('name the preset a config matches, defaults written out or not, its size aside; anything else is your own', () => {
        for (const preset of PRESETS) expect(presetOf(applyPreset({ entity: 'weather.home' }, preset.id)), preset.id).toBe(preset.id);
        expect(presetOf({ entity: 'weather.home' })).toBe('standard');
        expect(presetOf(undefined)).toBe('standard');
        expect(presetOf({ show_attributes: true, compact: false, layout: 'default', hero: 'temperature' })).toBe('standard');
        // Resized since: still the preset
        expect(presetOf({ show_forecast: true, grid_options: { rows: 9 } })).toBe('forecast');
        // The Wall is its size: the forecast with the time and date at a column's width is your own
        expect(presetOf({ show_forecast: true, show_clock: true, show_date: true, grid_options: { columns: 'full', rows: 12 } })).toBe('wall');
        expect(presetOf({ show_forecast: true, show_clock: true, show_date: true })).toBeNull();
        // A mix of your own
        expect(presetOf({ show_forecast: true, hero: 'clock' })).toBeNull();
        expect(presetOf({ compact: true, show_clock: true })).toBeNull();
    });
});
