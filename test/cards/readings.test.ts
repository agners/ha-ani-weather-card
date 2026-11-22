import { describe, it, expect, afterEach } from 'vitest';
import '../../src/animated-weather-card';
import { compileReadings, readingsOf, shortForm, isDefaultList, aqiLevel, aqiLevels, type Reading } from '../../src/readings';
import type { AnimatedWeatherCardConfig, HomeAssistant } from '../../src/types';

// The readings as one list (readings): each a type and, where it needs one or you'd rather, an entity. Without it, the
// options it replaces build the same list, so every card set up before keeps its row and its view

type Card = HTMLElement & { setConfig(c: object): void; hass: unknown };
const mounted: HTMLElement[] = [];
afterEach(() => { for (const c of mounted.splice(0)) c.remove(); });
const settle = () => new Promise(r => setTimeout(r, 40));

const state = (entity_id: string, value: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state: value, attributes, last_changed: '', last_updated: '' });
function makeHass(extra: Record<string, ReturnType<typeof state>> = {}, formatEntityState?: (s: { entity_id: string; state: string; attributes: Record<string, unknown> }) => string): HomeAssistant {
    return {
        states: {
            'weather.home': state('weather.home', 'cloudy', {
                temperature: 14, humidity: 71, wind_speed: 12, wind_speed_unit: 'km/h', wind_bearing: 220, pressure: 1012, pressure_unit: 'hPa',
                apparent_temperature: 12.6, dew_point: 8.9, visibility: 6.4, visibility_unit: 'km', cloud_coverage: 88, wind_gust_speed: 31, uv_index: 2,
                friendly_name: 'Home',
            }),
            'sun.sun': state('sun.sun', 'above_horizon', { next_setting: '2026-11-22T16:30:00Z', next_rising: '2026-11-23T07:00:00Z', elevation: 10 }),
            ...extra,
        },
        config: { time_zone: 'UTC', unit_system: { temperature: '°C' } },
        language: 'en', locale: { language: 'en', time_format: '24', time_zone: 'server' },
        localize: () => '',
        ...(formatEntityState ? { formatEntityState } : {}),
    } as unknown as HomeAssistant;
}
function mount(config: object, hass = makeHass()): Card {
    const card = document.createElement('animated-weather-card') as Card;
    card.setConfig({ entity: 'weather.home', sun_entity: 'sun.sun', ...config });
    card.hass = hass;
    document.body.append(card);
    mounted.push(card);
    return card;
}
const rows = (card: HTMLElement) => [...card.querySelectorAll<HTMLElement>('.weather-attributes > .attribute')].map(a => ({
    kind: a.dataset.kind, label: a.querySelector('.attribute-label span')?.textContent, value: a.querySelector('.attribute-text')?.textContent, level: a.dataset.level,
}));
const types = (list: Reading[]) => list.map(r => `${r.type}${r.entity ? `:${r.entity}` : ''}${r.view ? ' (view)' : ''}`);

describe('the list, from the options it replaces', () => {
    it('is the row as it always was: humidity, wind, pressure and the sun', () => {
        expect(types(readingsOf({ entity: 'weather.home' }))).toEqual(['humidity', 'wind', 'pressure', 'sun']);
        expect(isDefaultList(readingsOf({ entity: 'weather.home' }))).toBe(true);
    });
    it('takes each sensor option, metrics\' order, show_sun, and keeps the view\'s own as view-only rows', () => {
        const list = readingsOf({
            entity: 'weather.home', metrics: ['uv', 'wind', 'humidity', 'sun'], show_sun: false,
            humidity_sensor_entity: 'sensor.h', wind_speed_sensor_entity: 'sensor.ws', wind_direction_sensor_entity: 'sensor.wd',
            pressure_sensor_entity: 'sensor.p', uv_entity: 'sensor.uv', uv_max_entity: 'sensor.uvmax',
            rain_entity: 'sensor.rain', rain_rate_entity: 'sensor.rate', rain_week_entity: 'sensor.week', rain_year_entity: 'sensor.year',
        });
        expect(types(list)).toEqual(['uv:sensor.uv', 'wind:sensor.ws', 'humidity:sensor.h', 'rain:sensor.rain (view)', 'uv_max:sensor.uvmax (view)', 'rain_week:sensor.week (view)', 'rain_year:sensor.year (view)']);
        expect(list[1].direction_entity).toBe('sensor.wd');
        expect(list[3].rate_entity).toBe('sensor.rate');
        // A wind sensor the row doesn't show still sets how fast the weather moves: a view-only row keeps it
        expect(types(readingsOf({ entity: 'weather.home', metrics: ['humidity'], wind_speed_sensor_entity: 'sensor.ws' }))).toEqual(['humidity', 'wind:sensor.ws (view)']);
    });
    it('loses nothing when the editor writes it as a list: the list it writes reads back the same', () => {
        const olds: AnimatedWeatherCardConfig[] = [
            { entity: 'weather.home' },
            { entity: 'weather.home', show_sun: false },
            { entity: 'weather.home', metrics: 'pressure, wind' },
            { entity: 'weather.home', metrics: ['humidity', 'uv', 'rain'], uv_entity: 'sensor.uv', rain_entity: 'sensor.r', rain_rate_entity: 'sensor.rr' },
            { entity: 'weather.home', humidity_sensor_entity: 'sensor.h', pressure_sensor_entity: 'sensor.p', wind_direction_sensor_entity: 'sensor.wd' },
            { entity: 'weather.home', metrics: [], uv_max_entity: 'sensor.m', rain_event_entity: 'sensor.e', rain_month_entity: 'sensor.mo' },
            { entity: 'weather.home', metrics: ['sun'], wind_speed_sensor_entity: 'sensor.ws', uv_entity: 'sensor.uv' },
        ];
        for (const old of olds) {
            const written = { entity: 'weather.home', readings: shortForm(readingsOf(old)) } as AnimatedWeatherCardConfig;
            expect(readingsOf(written), JSON.stringify(old)).toEqual(readingsOf(old));
        }
    });
});

describe('the list, as readings', () => {
    it('takes bare types and rows, drops what it doesn\'t know, and keeps the totals and highest UV in the view', () => {
        const list = readingsOf({ entity: 'weather.home', readings: ['pressure', { type: 'AQI', entity: ' sensor.aqi ' }, 'constructor', { type: 'toString' }, 42, { type: 'rain_week', entity: 'sensor.w' }, { type: 'sensor', entity: 'sensor.co2', name: 'CO₂', view: true }] } as never);
        expect(types(list)).toEqual(['pressure', 'aqi:sensor.aqi', 'rain_week:sensor.w (view)', 'sensor:sensor.co2 (view)']);
        expect(list[3].name).toBe('CO₂');
        expect(shortForm(list)).toEqual(['pressure', { type: 'aqi', entity: 'sensor.aqi' }, { type: 'rain_week', entity: 'sensor.w' }, { type: 'sensor', entity: 'sensor.co2', name: 'CO₂', view: true }]);
    });
    it('wins over the options it replaces, and writes them for what still reads them', () => {
        const c = compileReadings({ entity: 'weather.home', uv_entity: 'sensor.old', metrics: ['humidity'], readings: [{ type: 'uv', entity: 'sensor.new' }, { type: 'wind', entity: 'weather.home', direction_entity: 'sensor.dir' }, { type: 'rain_year', entity: 'sensor.y' }] } as never);
        expect(c.uv_entity).toBe('sensor.new');
        expect(c.metrics).toBeUndefined();
        // A weather entity read for its attribute is no sensor
        expect(c.wind_speed_sensor_entity).toBeUndefined();
        expect(c.wind_direction_sensor_entity).toBe('sensor.dir');
        expect(c.rain_year_entity).toBe('sensor.y');
    });
});

describe('the row', () => {
    it('draws every type in the list\'s order, the view-only ones left out', async () => {
        const hass = makeHass({
            'sensor.aqi': state('sensor.aqi', '128', { device_class: 'aqi' }),
            'sensor.co2': state('sensor.co2', '612', { unit_of_measurement: 'ppm', device_class: 'carbon_dioxide', friendly_name: 'Office CO2' }),
            'sensor.week': state('sensor.week', '12.4', { unit_of_measurement: 'mm' }),
        });
        const card = mount({ readings: ['feels_like', 'dew_point', 'visibility', 'cloud_cover', 'gust', { type: 'aqi', entity: 'sensor.aqi' }, { type: 'sensor', entity: 'sensor.co2' }, { type: 'sensor', entity: 'sensor.co2', name: 'CO₂' }, { type: 'rain_week', entity: 'sensor.week' }, { type: 'humidity', view: true }] }, hass);
        await settle();
        expect(rows(card)).toEqual([
            { kind: 'feels_like', label: 'Feels like', value: '13°', level: undefined },
            { kind: 'dew_point', label: 'Dew point', value: '9°', level: undefined },
            { kind: 'visibility', label: 'Visibility', value: '6.4 km', level: undefined },
            { kind: 'cloud_cover', label: 'Cloud cover', value: '88%', level: undefined },
            { kind: 'gust', label: 'Gusts', value: '31 km/h', level: undefined },
            { kind: 'aqi', label: 'Air quality', value: '128 Unhealthy for some', level: 'sensitive' },
            { kind: 'sensor', label: 'Office CO2', value: '612 ppm', level: undefined },
            { kind: 'sensor', label: 'CO₂', value: '612 ppm', level: undefined },
        ]);
    });
    it('reads any sensor as Home Assistant words it, and the US EPA\'s levels, or your own', async () => {
        const hass = makeHass({ 'sensor.door': state('sensor.door', 'on', { device_class: 'door' }) }, s => (s.state === 'on' ? 'Open' : s.state));
        const card = mount({ readings: [{ type: 'sensor', entity: 'sensor.door', name: 'Back door' }] }, hass);
        await settle();
        expect(rows(card)[0]).toMatchObject({ label: 'Back door', value: 'Open' });
        expect([0, 50, 51, 100, 101, 151, 201, 300, 301, 500].map(v => aqiLevel(v))).toEqual(['good', 'good', 'moderate', 'moderate', 'sensitive', 'unhealthy', 'very_unhealthy', 'very_unhealthy', 'hazardous', 'hazardous']);
        expect(aqiLevels({ aqi_levels: [26, 51, 76, 101, 126] } as never)).toEqual([26, 51, 76, 101, 126]);
        expect(aqiLevels({ aqi_levels: [5, 4, 3, 2, 1] } as never)).toEqual([51, 101, 151, 201, 301]);
    });
    it('draws a row whose sensor hasn\'t reported yet as "--", and its value once it does; leaves out one with no sensor set', async () => {
        const card = mount({ readings: ['humidity', { type: 'aqi', entity: 'sensor.aqi' }, 'aqi'] });
        await settle();
        expect(rows(card).map(r => `${r.kind} ${r.value}`)).toEqual(['humidity 71%', 'aqi --']);
        card.hass = makeHass({ 'sensor.aqi': state('sensor.aqi', '42') });
        await settle();
        expect(rows(card)[1]).toMatchObject({ value: '42 Good', level: 'good' });
    });
    it('updates each row in place, two of a kind at once', async () => {
        const a = state('sensor.a', '10', { unit_of_measurement: 'ppm' }), b = state('sensor.b', '20', { unit_of_measurement: 'ppm' });
        const card = mount({ readings: [{ type: 'sensor', entity: 'sensor.a', name: 'A' }, { type: 'sensor', entity: 'sensor.b', name: 'B' }] }, makeHass({ 'sensor.a': a, 'sensor.b': b }));
        await settle();
        const first = card.querySelector('.attribute[data-i="0"]');
        card.hass = makeHass({ 'sensor.a': state('sensor.a', '11', { unit_of_measurement: 'ppm' }), 'sensor.b': state('sensor.b', '22', { unit_of_measurement: 'ppm' }) });
        await settle();
        expect(rows(card).map(r => r.value)).toEqual(['11 ppm', '22 ppm']);
        expect(card.querySelector('.attribute[data-i="0"]')).toBe(first);
    });
    it('draws a new list without starting the weather again', async () => {
        const card = mount({});
        await settle();
        const sky = card.querySelector('.animated-weather-card');
        card.setConfig({ entity: 'weather.home', sun_entity: 'sun.sun', readings: ['gust', 'humidity'] });
        expect(rows(card).map(r => r.kind)).toEqual(['gust', 'humidity']);
        expect(card.querySelector('.animated-weather-card')).toBe(sky);
    });
    it('lets the wind row\'s sensor set how fast the weather moves, and an older forecast bundle\'s UV read the list', async () => {
        const hass = makeHass({ 'sensor.wind': state('sensor.wind', '40', { unit_of_measurement: 'km/h' }), 'sensor.uv': state('sensor.uv', '7') });
        const card = mount({ readings: [{ type: 'wind', entity: 'sensor.wind' }, { type: 'uv', entity: 'sensor.uv' }] }, hass);
        await settle();
        expect((card as unknown as { currentWindSpeedValue: number }).currentWindSpeedValue).toBe(40);
        const host = (card as unknown as { forecastHost(): { reading(k: string): { value: string; word?: string } | null; readings(): Array<{ label: string; value: string }> } }).forecastHost();
        expect(host.reading('uv')).toMatchObject({ value: '7', word: 'High' });
    });
    it('gives the view the card\'s air quality and sensors, in the row or view only', async () => {
        const hass = makeHass({ 'sensor.aqi': state('sensor.aqi', '20'), 'sensor.co2': state('sensor.co2', '700', { unit_of_measurement: 'ppm' }) });
        const card = mount({ readings: ['humidity', { type: 'aqi', entity: 'sensor.aqi' }, { type: 'sensor', entity: 'sensor.co2', name: 'CO₂', view: true }] }, hass);
        await settle();
        const host = (card as unknown as { forecastHost(): { readings(): Array<{ label: string; value: string; word?: string }> } }).forecastHost();
        expect(host.readings()).toEqual([{ label: 'Air quality', value: '20', word: 'Good', level: 'good' }, { label: 'CO₂', value: '700 ppm' }]);
    });
    it('writes names and states as text, never markup', async () => {
        const hass = makeHass({ 'sensor.x': state('sensor.x', '<img src=x onerror="alert(1)">', { friendly_name: '<b>x</b>' }) });
        const card = mount({ readings: [{ type: 'sensor', entity: 'sensor.x', name: '<img src=y onerror="alert(2)">' }, { type: 'sensor', entity: 'sensor.x' }] }, hass);
        await settle();
        expect(card.querySelector('.weather-attributes img, .weather-attributes b')).toBeNull();
        expect(rows(card)[1].label).toBe('<b>x</b>');
    });
});
