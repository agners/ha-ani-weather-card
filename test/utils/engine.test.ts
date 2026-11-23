import { describe, it, expect } from 'vitest';
import {
    amountToMm, autoPicture, cloudSplit, hourAt, hourInputs, rainKindAt, rateToMmH, readEngineInputs, visibilityToKm, USUAL_AMOUNTS,
} from '../../src/engine';
import { RAIN_POOL_SIZE } from '../../src/rain-animation';
import { SKY_CONDITIONS } from '../../src/sky';
import type { AnimatedWeatherCardConfig, HomeAssistant } from '../../src/types';

const HOUR = 3_600_000;

describe('the engine\'s units', () => {
    it('reads a rain rate in mm/h from any unit a sensor gives, and no unit as mm/h', () => {
        expect(rateToMmH(1.5)).toBe(1.5);
        expect(rateToMmH(1.5, 'mm/h')).toBe(1.5);
        expect(rateToMmH(0.1, 'in/h')).toBeCloseTo(2.54, 6);
        expect(rateToMmH(24, 'mm/d')).toBeCloseTo(1, 6);
        expect(rateToMmH(1, 'cm/h')).toBe(10);
        expect(rateToMmH(0.24, 'in/d')).toBeCloseTo(0.254, 6);
    });
    it('reads an hour\'s precipitation and a visibility in their units', () => {
        expect(amountToMm(0.1, 'in')).toBeCloseTo(2.54, 6);
        expect(amountToMm(2, 'mm')).toBe(2);
        expect(visibilityToKm(10, 'km')).toBe(10);
        expect(visibilityToKm(10, 'mi')).toBeCloseTo(16.09344, 4);
        expect(visibilityToKm(500, 'm')).toBe(0.5);
        expect(visibilityToKm(1000, 'ft')).toBeCloseTo(0.3048, 6);
    });
});

describe('the hour under way', () => {
    const at = (offset: number, extra = {}) => ({ datetime: new Date(Date.UTC(2026, 10, 23, 12) + offset).toISOString(), ...extra });
    const now = Date.UTC(2026, 10, 23, 12, 30);
    it('is the entry the moment falls in, else the first if it starts within the hour, never further', () => {
        expect(hourAt([at(0, { precipitation: 1 }), at(HOUR, { precipitation: 2 })], now)?.precipitation).toBe(1);
        expect(hourAt([at(HOUR, { precipitation: 2 })], now)?.precipitation).toBe(2);
        expect(hourAt([at(3 * HOUR, { precipitation: 2 })], now)).toBeUndefined();
        expect(hourAt([at(-2 * HOUR)], now)).toBeUndefined();
        expect(hourAt(undefined, now)).toBeUndefined();
    });
});

describe('the engine\'s amounts', () => {
    it('look as they always have with nothing to go on, in every condition', () => {
        const kind: Record<string, string> = { 'light-rain': 'light', stormy: 'storm', pouring: 'pouring' };
        for (const cls of SKY_CONDITIONS) {
            const picture = autoPicture(cls, {});
            const rainKind = (kind[cls] ?? 'rain') as keyof typeof RAIN_POOL_SIZE;
            expect(picture.rain, cls).toEqual({ kind: rainKind, drops: RAIN_POOL_SIZE[rainKind] });
            expect({ ...picture, rain: USUAL_AMOUNTS.rain }, cls).toEqual(USUAL_AMOUNTS);
        }
        // The usual clouds are the card's own 1, 1, 2
        expect(cloudSplit(4)).toEqual([1, 1, 2]);
    });

    it('give the rain its kind by the rate: light, steady, heavy, pouring, held past each break', () => {
        expect(autoPicture('rainy', { rate: 0.2 }).rain.kind).toBe('light');
        expect(autoPicture('rainy', { rate: 1 }).rain.kind).toBe('rain');
        expect(autoPicture('rainy', { rate: 3 }).rain.kind).toBe('storm');
        expect(autoPicture('rainy', { rate: 9 }).rain.kind).toBe('pouring');
        // On a break the rain keeps its kind until the rate is well past it
        expect(rainKindAt(0.52, 'light')).toBe('light');
        expect(rainKindAt(0.6, 'light')).toBe('rain');
        expect(rainKindAt(0.48, 'rain')).toBe('rain');
        expect(rainKindAt(0.42, 'rain')).toBe('light');
        // More rain, more drops, all the way up
        const drops = [0.1, 0.3, 0.7, 1.5, 3, 6, 12, 30].map(rate => autoPicture('rainy', { rate }).rain.drops);
        for (let i = 1; i < drops.length; i++) expect(drops[i]).toBeGreaterThan(drops[i - 1]);
    });

    it('keep each condition\'s floor: pouring is always pouring, light rain never more than steady', () => {
        const pouring = autoPicture('pouring', { rate: 0.2 });
        expect(pouring.rain.kind).toBe('pouring');
        expect(pouring.rain.drops).toBeGreaterThanOrEqual(RAIN_POOL_SIZE.storm);
        expect(autoPicture('light-rain', { rate: 20 }).rain.kind).toBe('rain');
        // A storm's rain can be steady, never light
        expect(autoPicture('stormy', { rate: 0.2 }).rain.kind).toBe('rain');
    });

    it('give snow and sleet their amount by the same water, clouds by cover within their condition, fog by visibility', () => {
        expect(autoPicture('snowy', { rate: 0.1 }).snow).toBeCloseTo(0.4, 2);
        expect(autoPicture('snowy', { rate: 5 }).snow).toBeCloseTo(2.2, 2);
        expect(autoPicture('sleety', { rate: 2.5 }).sleet).toBeCloseTo(1.6, 2);
        const total = (cls: string, cloud: number) => autoPicture(cls, { cloud }).clouds.reduce((a, b) => a + b, 0);
        expect(total('cloudy', 0)).toBe(4);
        expect(total('cloudy', 100)).toBe(8);
        expect(total('partly-cloudy', 0)).toBe(3);
        expect(total('partly-cloudy', 100)).toBe(5);
        expect(autoPicture('foggy', { visibility: 0.1 }).fog).toBe(1);
        expect(autoPicture('foggy', { visibility: 20 }).fog).toBe(0.45);
        expect(autoPicture('foggy', { visibility: 1 }).fog).toBe(0.8);
    });

    it('give leaves by the wind, gusts by how far they reach past it, and a clear night fewer stars under cloud', () => {
        expect(autoPicture('windy', { wind: 5 }).leaves).toBe(0.5);
        expect(autoPicture('windy', { wind: 30 }).leaves).toBe(1);
        expect(autoPicture('windy', { wind: 100 }).leaves).toBe(2.4);
        expect(autoPicture('windy', { wind: 30, gust: 30 }).gusts).toBe(0);
        expect(autoPicture('windy', { wind: 30, gust: 55 }).gusts).toBe(1);
        expect(autoPicture('windy', { gust: 50 }).gusts).toBe(0.5);
        expect(autoPicture('clear-night', { cloud: 0 }).stars).toBe(1);
        expect(autoPicture('clear-night', { cloud: 50 }).stars).toBe(0.35);
    });
});

describe('what the weather says now', () => {
    const config = (extra: Partial<AnimatedWeatherCardConfig> = {}) => ({ type: 'x', entity: 'weather.home', ...extra }) as AnimatedWeatherCardConfig;
    const hass = (states: Record<string, { state: string; attributes?: Record<string, unknown> }>, weather: Record<string, unknown> = {}) => ({
        states: { 'weather.home': { entity_id: 'weather.home', state: 'rainy', attributes: weather }, ...Object.fromEntries(Object.entries(states).map(([id, s]) => [id, { entity_id: id, attributes: {}, ...s }])) },
        config: { unit_system: { temperature: '°C', length: 'km' } },
    }) as unknown as HomeAssistant;

    it('takes the rain from a rate sensor above 0, else the hour\'s precipitation in the entity\'s unit', () => {
        expect(readEngineInputs(hass({ 'sensor.rate': { state: '0.1', attributes: { unit_of_measurement: 'in/h' } } }), config({ rain_rate_entity: 'sensor.rate' })).rate).toBeCloseTo(2.54, 6);
        // A sensor at 0 isn't a reading: the hour says it
        const hour = { datetime: '', precipitation: 0.2 };
        expect(readEngineInputs(hass({ 'sensor.rate': { state: '0' } }, { precipitation_unit: 'in' }), config({ rain_rate_entity: 'sensor.rate' }), hour).rate).toBeCloseTo(5.08, 6);
        expect(readEngineInputs(hass({}), config(), { datetime: '', precipitation: 0 }).rate).toBeUndefined();
    });

    it('takes cloud, visibility and gusts from a reading\'s own sensor first, then the entity, then the hour', () => {
        const withRows = config({ readings: [{ type: 'cloud_cover', entity: 'sensor.cloud' }, { type: 'visibility', entity: 'sensor.seen' }, { type: 'gust', entity: 'sensor.gust' }] as never });
        const states = { 'sensor.cloud': { state: '80' }, 'sensor.seen': { state: '2', attributes: { unit_of_measurement: 'mi' } }, 'sensor.gust': { state: '10', attributes: { unit_of_measurement: 'm/s' } } };
        const both = readEngineInputs(hass(states, { cloud_coverage: 20, visibility: 9, wind_gust_speed: 5 }), withRows);
        expect(both.cloud).toBe(80);
        expect(both.visibility).toBeCloseTo(3.218688, 4);
        expect(both.gust).toBeCloseTo(36, 6);
        const entity = readEngineInputs(hass({}, { cloud_coverage: 20, visibility: 900, visibility_unit: 'm', wind_gust_speed: 40 }), config(), { datetime: '', cloud_coverage: 70 });
        expect(entity).toMatchObject({ cloud: 20, visibility: 0.9, gust: 40 });
        expect(readEngineInputs(hass({}), config(), { datetime: '', cloud_coverage: 70, wind_gust_speed: 30 })).toMatchObject({ cloud: 70, gust: 30 });
    });

    it('takes the wind the card shows, raw: a missing wind stays missing', () => {
        expect(readEngineInputs(hass({ 'sensor.wind': { state: '5', attributes: { unit_of_measurement: 'm/s' } } }, { wind_speed: 3 }), config({ wind_speed_sensor_entity: 'sensor.wind' })).wind).toBeCloseTo(18, 6);
        expect(readEngineInputs(hass({}, { wind_speed: 10, wind_speed_unit: 'mph' }), config()).wind).toBeCloseTo(16.09344, 4);
        expect(readEngineInputs(hass({}), config()).wind).toBeUndefined();
        expect(readEngineInputs(hass({}), config(), { datetime: '', wind_speed: 12 }).wind).toBe(12);
    });

    it('reads an hour of the forecast the same way', () => {
        expect(hourInputs({ datetime: '', precipitation: 0.1, cloud_coverage: 40, wind_speed: 10, wind_gust_speed: 20 }, { precipitation_unit: 'in', wind_speed_unit: 'mph' }))
            .toEqual({ rate: expect.closeTo(2.54, 6), cloud: 40, wind: expect.closeTo(16.09344, 4), gust: expect.closeTo(32.18688, 4) });
        expect(hourInputs({ datetime: '', precipitation: 0 }, {})).toEqual({});
    });
});
