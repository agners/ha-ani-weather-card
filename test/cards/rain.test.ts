import { describe, it, expect, afterEach } from 'vitest';
import '../../src/animated-weather-card';
import '../../src/animated-weather-card-forecast';
import '../../src/animated-weather-card-editor';
import { readRain, formatRain, metricKinds } from '../../src/weather-data';
import { FC_WORDS } from '../../src/fc-words';

// Rain amounts from a station's sensors (issue #33): today's rain, the rate while it rains, and the totals in the view

type Card = HTMLElement & { setConfig(c: object): void; hass: unknown; openForecast(): void };
const mounted: HTMLElement[] = [];
afterEach(() => { for (const c of mounted.splice(0)) c.remove(); document.querySelector('.awc-view-host')?.remove(); });
const settle = () => new Promise(r => setTimeout(r, 30));
const until = async (done: () => boolean, ms = 10_000) => {
    const end = Date.now() + ms;
    while (!done() && Date.now() < end) await new Promise(r => setTimeout(r, 20));
};

/** A day of rain by the hour, so the view has a forecast to open on */
function hourly() {
    const start = new Date(); start.setMinutes(0, 0, 0);
    return Array.from({ length: 24 }, (_, i) => ({ datetime: new Date(start.getTime() + i * 3600_000).toISOString(), condition: 'rainy', temperature: 14, precipitation: 0.4 }));
}
const sensor = (id: string, state: string, unit?: string) => ({ [id]: { entity_id: id, state, attributes: unit ? { unit_of_measurement: unit } : {} } });
function makeHass(states: Record<string, unknown> = {}, language = 'en') {
    return {
        states: {
            'weather.home': { entity_id: 'weather.home', state: 'rainy', attributes: { temperature: 14, humidity: 90, friendly_name: 'Home', supported_features: 3 } },
            ...states,
        },
        config: { time_zone: 'UTC', unit_system: { temperature: '°C' } },
        language, locale: { language, time_format: '24' },
        localize: () => '',
        formatEntityState: (s: { state: string }) => s.state,
        connection: { subscribeMessage: async (listener: (m: unknown) => void, message: { forecast_type: string }) => { listener({ type: message.forecast_type, forecast: message.forecast_type === 'hourly' ? hourly() : [] }); return () => {}; } },
    };
}
function mount(config: object, hass: unknown): Card {
    const card = document.createElement('animated-weather-card') as Card;
    card.setConfig({ entity: 'weather.home', ...config });
    document.body.append(card);
    card.hass = hass;
    mounted.push(card);
    return card;
}
const rainOf = (card: HTMLElement) => card.querySelector('.attribute[data-kind="rain"]') as HTMLElement;
const cfg = { entity: 'weather.home', rain_entity: 'sensor.rain_today', rain_rate_entity: 'sensor.rain_rate' };

describe('the rain reading', () => {
    it('is a reading metrics can name', () => {
        expect(metricKinds({ metrics: ['rain', 'wind'] })).toEqual(['rain', 'wind']);
    });

    it('is today\'s rain, or the rate while it rains, in each sensor\'s unit, to a tenth (a hundredth in inches)', () => {
        const today = sensor('sensor.rain_today', '4.23', 'mm');
        expect(readRain(makeHass(today) as never, cfg)).toEqual({ now: false, text: '4.2 mm' });
        expect(readRain(makeHass({ ...today, ...sensor('sensor.rain_rate', '0', 'mm/h') }) as never, cfg)).toEqual({ now: false, text: '4.2 mm' });
        expect(readRain(makeHass({ ...today, ...sensor('sensor.rain_rate', '1.25', 'mm/h') }) as never, cfg)).toEqual({ now: true, text: '1.3 mm/h' });
        expect(readRain(makeHass(sensor('sensor.rain_today', '0.123', 'in')) as never, cfg)).toEqual({ now: false, text: '0.12 in' });
        expect(readRain(makeHass(sensor('sensor.rain_today', 'unavailable', 'mm')) as never, cfg)).toBeNull();
        expect(readRain(makeHass() as never, { entity: 'weather.home' })).toBeNull();
        // In the language's number format, and in mm without a unit
        expect(formatRain(4.23, 'mm', makeHass({}, 'de') as never)).toBe('4,2 mm');
        expect(readRain(makeHass(sensor('sensor.rain_today', '3')) as never, cfg)?.text).toBe('3.0 mm');
    });

    it('labels itself by what it shows, and turns to the rate and back as the rain starts and stops', async () => {
        const today = sensor('sensor.rain_today', '4.2', 'mm');
        const hass = makeHass({ ...today, ...sensor('sensor.rain_rate', '0', 'mm/h') });
        const card = mount({ ...cfg, metrics: ['humidity', 'rain'] }, hass);
        await settle();
        const label = () => rainOf(card).querySelector('.attribute-label span')?.textContent;
        const value = () => rainOf(card).querySelector('.attribute-text')?.textContent;
        expect([label(), value()]).toEqual(['Rain today', '4.2 mm']);
        expect(rainOf(card).querySelector('.attribute-icon')).not.toBeNull();
        card.hass = { ...hass, states: { ...hass.states, ...sensor('sensor.rain_rate', '2.4', 'mm/h') } };
        await settle();
        expect([label(), value()]).toEqual(['Rain now', '2.4 mm/h']);
        card.hass = { ...hass, states: { ...hass.states, ...sensor('sensor.rain_today', '6.8', 'mm'), ...sensor('sensor.rain_rate', '0', 'mm/h') } };
        await settle();
        expect([label(), value()]).toEqual(['Rain today', '6.8 mm']);
    });

    it('says "--" until its sensor reports, leaves out a row with none, and writes a sensor\'s unit as text, never as markup', async () => {
        const card = mount({ ...cfg, metrics: ['rain'] }, makeHass(sensor('sensor.rain_today', '1', '<img src=x onerror="alert(1)">')));
        await settle();
        expect(card.querySelector('img')).toBeNull();
        expect(rainOf(card).querySelector('.attribute-text')?.textContent).toBe('1.0 <img src=x onerror="alert(1)">');
        // A rain row with no sensor set says nothing the weather entity could: it isn't drawn
        const none = mount({ metrics: ['rain'] }, makeHass());
        await settle();
        expect(rainOf(none)).toBeNull();
        // One whose sensor hasn't reported yet is, with "--", and its label
        const waiting = mount({ metrics: ['rain'], rain_entity: 'sensor.rain_soon' }, makeHass());
        await settle();
        expect(rainOf(waiting).querySelector('.attribute-text')?.textContent).toBe('--');
        expect(rainOf(waiting).querySelector('.attribute-label span')?.textContent).toBe('Rain today');
    });
});

describe('a station\'s rain in the view that opens on tap', () => {
    it('shows today\'s rain, the rate while it rains, and the event, week, month and year in their units', async () => {
        const hass = makeHass({
            ...sensor('sensor.rain_today', '4.2', 'mm'), ...sensor('sensor.rain_rate', '1.2', 'mm/h'),
            ...sensor('sensor.rain_event', '6.1', 'mm'), ...sensor('sensor.rain_week', '12', 'mm'),
            ...sensor('sensor.rain_month', '0.82', 'in'), ...sensor('sensor.rain_year', 'unavailable', 'mm'),
        });
        const card = mount({
            ...cfg, show_forecast: true, rain_event_entity: 'sensor.rain_event', rain_week_entity: 'sensor.rain_week',
            rain_month_entity: 'sensor.rain_month', rain_year_entity: 'sensor.rain_year',
        }, hass);
        await settle();
        card.openForecast();
        await until(() => !!document.querySelector('.awc-view-host')?.shadowRoot?.querySelector('dialog')?.hasAttribute('open'));
        const grown = document.querySelector('.awc-view-host')!.shadowRoot!.querySelector('.fv-sheet > animated-weather-card') as HTMLElement;
        const rows = Object.fromEntries([...grown.querySelectorAll('.fv-rd')].map(r => [r.querySelector('.fv-rd-l')?.textContent, r.querySelector('strong')?.textContent]));
        expect(rows['Rain today']).toBe('4.2 mm');
        expect(rows['Rain now']).toBe('1.2 mm/h');
        expect(rows[FC_WORDS.en.rain_event]).toBe('6.1 mm');
        expect(rows[FC_WORDS.en.rain_week]).toBe('12.0 mm');
        expect(rows[FC_WORDS.en.rain_month]).toBe('0.82 in');
        // A sensor with no number has no tile
        expect(rows[FC_WORDS.en.rain_year]).toBeUndefined();
        (grown.querySelector('.fv-close') as HTMLElement).click();
        await until(() => !document.querySelector('.awc-view-host')?.shadowRoot?.querySelector('dialog')?.hasAttribute('open'));
    });
});

describe('the editor\'s rain', () => {
    if (!customElements.get('ha-select')) customElements.define('ha-select', class extends HTMLElement {});
    it('offers rain for a reading, and a picker for each rain sensor', async () => {
        const ed = document.createElement('animated-weather-card-editor') as HTMLElement & { setConfig(c: object): void };
        ed.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home' });
        document.body.append(ed);
        mounted.push(ed);
        await new Promise(resolve => setTimeout(resolve, 0));
        const slot = ed.querySelector('#metric_0') as HTMLElement & { options: Array<{ value: string }> };
        expect(slot.options.map(o => o.value)).toContain('rain');
        for (const id of ['rain_entity', 'rain_rate_entity', 'rain_event_entity', 'rain_week_entity', 'rain_month_entity', 'rain_year_entity']) {
            expect(ed.querySelector(`ha-entity-picker#${id}`), id).not.toBeNull();
        }
    });
});
