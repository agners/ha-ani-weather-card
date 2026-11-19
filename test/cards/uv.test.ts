import { describe, it, expect, afterEach, beforeEach } from 'vitest';
import '../../src/animated-weather-card';
import '../../src/animated-weather-card-forecast';
import '../../src/animated-weather-card-editor';
import { metricKinds, uvLevel, uvLevels, readUv, DEFAULT_METRICS } from '../../src/weather-data';
import { FC_WORDS } from '../../src/fc-words';
import { HOUR_EVENT, sendHour } from '../../src/hour-link';
import { getMainCardStyles, UV_TINTS } from '../../src/styles/card';

// The UV index (issue #18): the metrics option, uv_entity and its levels

const HOUR = 3600_000;
type Card = HTMLElement & { setConfig(c: object): void; hass: unknown; openForecast(): void };
const mounted: HTMLElement[] = [];
afterEach(() => { for (const c of mounted.splice(0)) c.remove(); document.querySelector('.awc-view-host')?.remove(); });
const settle = () => new Promise(r => setTimeout(r, 30));
const until = async (done: () => boolean, ms = 10_000) => {
    const end = Date.now() + ms;
    while (!done() && Date.now() < end) await new Promise(r => setTimeout(r, 20));
};

/** An hourly forecast whose UV is 7 for the next three hours and 2 from then on, so an hour ahead reads the same at any minute */
function forecast() {
    const start = new Date(); start.setMinutes(0, 0, 0);
    return Array.from({ length: 30 }, (_, i) => ({
        datetime: new Date(start.getTime() + i * HOUR).toISOString(), condition: 'sunny',
        temperature: 21, humidity: 60, wind_speed: 12, pressure: 1012, uv_index: i < 3 ? 7 : 2,
    }));
}

function makeHass(states: Record<string, unknown> = {}, attrs: Record<string, unknown> = {}) {
    return {
        states: {
            'weather.home': { entity_id: 'weather.home', state: 'sunny', attributes: { temperature: 21, humidity: 55, pressure: 1016, wind_speed: 13, friendly_name: 'Home', supported_features: 3, ...attrs } },
            ...states,
        },
        config: { time_zone: 'UTC', unit_system: { temperature: '°C' } },
        language: 'en', locale: { language: 'en', time_format: '24' },
        localize: () => '',
        formatEntityState: (s: { state: string }) => s.state,
        connection: {
            subscribeMessage: async (listener: (m: unknown) => void, message: { forecast_type: string }) => {
                listener({ type: message.forecast_type, forecast: message.forecast_type === 'hourly' ? forecast() : [] });
                return () => {};
            },
        },
    };
}
const sensor = (id: string, state: string) => ({ [id]: { entity_id: id, state, attributes: {} } });

function mount(config: object, hass: unknown): Card {
    const card = document.createElement('animated-weather-card') as Card;
    card.setConfig({ entity: 'weather.home', ...config });
    document.body.append(card);
    card.hass = hass;
    mounted.push(card);
    return card;
}
const uvOf = (card: HTMLElement) => card.querySelector('.attribute[data-kind="uv"]') as HTMLElement;

describe('the readings the row shows (metrics)', () => {
    it('the row as it always was without it; with it, the names it knows, in its order, each once', () => {
        expect(metricKinds({})).toEqual(['humidity', 'wind', 'pressure', 'sun']);
        expect(DEFAULT_METRICS).toEqual(['humidity', 'wind', 'pressure', 'sun']);
        expect(metricKinds({ metrics: ['uv', 'wind', 'UV', 'gusts', 'humidity'] })).toEqual(['uv', 'wind', 'humidity']);
        expect(metricKinds({ metrics: 'wind, uv' })).toEqual(['wind', 'uv']);
        expect(metricKinds({ metrics: [] })).toEqual([]);
    });

    it('draws them in that order, and only them', async () => {
        const card = mount({ metrics: ['uv', 'wind'] }, makeHass({}, { uv_index: 4 }));
        await settle();
        expect([...card.querySelectorAll('.weather-attributes .attribute')].map(a => (a as HTMLElement).dataset.kind)).toEqual(['uv', 'wind']);
    });
});

describe('the UV index', () => {
    it('reads the WHO\'s levels from the whole number it shows: low to 2, moderate to 5, high to 7, very high to 10, extreme from 11', () => {
        const at = (vs: number[]) => vs.map(v => uvLevel(v));
        expect(at([0, 2, 2.4])).toEqual(['low', 'low', 'low']);
        expect(at([2.5, 3, 5])).toEqual(['moderate', 'moderate', 'moderate']);
        expect(at([6, 7])).toEqual(['high', 'high']);
        expect(at([8, 10])).toEqual(['very_high', 'very_high']);
        expect(at([11, 14])).toEqual(['extreme', 'extreme']);
    });

    it('takes levels of your own: four rising numbers, as a list or "a, b, c, d"; anything else is the WHO\'s', () => {
        expect(uvLevels({ uv_levels: [2, 5, 7, 10] })).toEqual([2, 5, 7, 10]);
        expect(uvLevels({ uv_levels: '2, 5, 7, 10' as never })).toEqual([2, 5, 7, 10]);
        for (const bad of [[3, 6, 8], [3, 3, 8, 11], [3, 'x', 8, 11], 'nonsense', 5]) expect(uvLevels({ uv_levels: bad as never })).toEqual([3, 6, 8, 11]);
        // Moderate from 2, high from 5, very high from 7, extreme from 10
        expect([1, 4, 6, 9, 10].map(v => uvLevel(v, [2, 5, 7, 10]))).toEqual(['low', 'moderate', 'high', 'very_high', 'extreme']);
    });

    it('reads uv_entity, else the weather entity\'s uv_index, else nothing', () => {
        const cfg = { entity: 'weather.home', uv_entity: 'sensor.uv' };
        expect(readUv(makeHass(sensor('sensor.uv', '6.4'), { uv_index: 2 }) as never, cfg)).toBe(6.4);
        expect(readUv(makeHass(sensor('sensor.uv', 'unavailable'), { uv_index: 2 }) as never, cfg)).toBe(2);
        expect(readUv(makeHass({}, { uv_index: 2 }) as never, { entity: 'weather.home' })).toBe(2);
        expect(readUv(makeHass() as never, { entity: 'weather.home' })).toBeNull();
    });

    it('shows the number and its level\'s word, with the level for its icon\'s colour, and keeps up with the sensor', async () => {
        const hass = makeHass(sensor('sensor.uv', '6.4'));
        const card = mount({ metrics: ['humidity', 'uv'], uv_entity: 'sensor.uv' }, hass);
        await settle();
        const uv = uvOf(card);
        expect(uv.querySelector('.attribute-label span')?.textContent).toBe('UV index');
        expect(uv.querySelector('.attribute-text')?.textContent).toBe('6 High');
        expect(uv.dataset.level).toBe('high');
        expect(uv.querySelector('.attribute-icon')).not.toBeNull();
        card.hass = { ...hass, states: { ...hass.states, ...sensor('sensor.uv', '9') } };
        await settle();
        expect(uvOf(card).querySelector('.attribute-text')?.textContent).toBe('9 Very high');
        expect(uvOf(card).dataset.level).toBe('very_high');
        // In German
        const de = mount({ metrics: ['uv'], uv_entity: 'sensor.uv' }, { ...hass, language: 'de', locale: { language: 'de', time_format: '24' } });
        await settle();
        expect(uvOf(de).querySelector('.attribute-text')?.textContent).toBe('6 Hoch');
        // Home Assistant's frontend has no label for it: the card's own word
        expect(uvOf(de).querySelector('.attribute-label span')?.textContent).toBe('UV-Index');
    });

    it('says "--" for a sensor that isn\'t a number, and never writes its state into the card', async () => {
        const card = mount({ metrics: ['uv'], uv_entity: 'sensor.uv' }, makeHass(sensor('sensor.uv', '"><img src=x onerror="alert(1)">')));
        await settle();
        expect(card.querySelector('img')).toBeNull();
        expect(uvOf(card).querySelector('.attribute-text')?.textContent).toBe('--');
        expect(uvOf(card).hasAttribute('data-level')).toBe(false);
    });

    it('colours its icon by level on the sky palette only; the word says it too', () => {
        const css = getMainCardStyles();
        for (const [level, tint] of Object.entries(UV_TINTS)) {
            expect(css).toContain(`.animated-weather-card:not(.theme-colors) .attribute[data-kind="uv"][data-level="${level}"] .attribute-icon { color: ${tint}; }`);
        }
    });
});

describe('the UV index through the hours', () => {
    const other = document.createElement('div');
    const needle = (at: number | null) => sendHour({ source: other, entity: 'weather.home', sun: 'sun.sun', at, temperature: null, sky: null });
    beforeEach(() => needle(null));
    afterEach(() => window.dispatchEvent(new Event(HOUR_EVENT)));

    it('goes to the hour with its own level, and back to the sensor\'s at home', async () => {
        const hass = makeHass(sensor('sensor.uv', '7'));
        const card = mount({ metrics: ['uv', 'wind'], uv_entity: 'sensor.uv' }, hass);
        await settle();
        const text = () => uvOf(card).querySelector('.attribute-text')?.textContent;
        expect(text()).toBe('7 High');
        // Five hours on, the forecast's UV is 2
        needle(Date.now() + 5 * HOUR);
        await until(() => text() === '2 Low');
        expect(text()).toBe('2 Low');
        expect(uvOf(card).dataset.level).toBe('low');
        needle(null);
        await until(() => text() === '7 High');
        expect(text()).toBe('7 High');
        expect(uvOf(card).dataset.level).toBe('high');
    });
});

describe('the UV index in the view that opens on tap', () => {
    it('shows the sensor\'s, its level under it, and today\'s highest from uv_max_entity', async () => {
        const hass = makeHass({ ...sensor('sensor.uv', '5'), ...sensor('sensor.uv_max', '8.2') }, { uv_index: 1 });
        const card = mount({ show_forecast: true, uv_entity: 'sensor.uv', uv_max_entity: 'sensor.uv_max' }, hass);
        await settle();
        card.openForecast();
        await until(() => !!document.querySelector('.awc-view-host')?.shadowRoot?.querySelector('dialog')?.hasAttribute('open'));
        const grown = document.querySelector('.awc-view-host')!.shadowRoot!.querySelector('.fv-sheet > animated-weather-card') as HTMLElement;
        const row = (label: string) => [...grown.querySelectorAll('.fv-rd')].find(r => r.querySelector('.fv-rd-l')?.textContent === label);
        expect(row(FC_WORDS.en.uv)?.querySelector('strong')?.textContent).toBe('5');
        expect(row(FC_WORDS.en.uv)?.querySelector('em')?.textContent).toBe('Moderate');
        expect(row(FC_WORDS.en.uv_max)?.querySelector('strong')?.textContent).toBe('8');
        expect(row(FC_WORDS.en.uv_max)?.querySelector('em')?.textContent).toBe('Very high');
        (grown.querySelector('.fv-close') as HTMLElement).click();
        await until(() => !document.querySelector('.awc-view-host')?.shadowRoot?.querySelector('dialog')?.hasAttribute('open'));
    });
});

describe('the editor\'s readings', () => {
    // Home Assistant's ha-select, as the editors use it: options and value as properties
    if (!customElements.get('ha-select')) customElements.define('ha-select', class extends HTMLElement {});
    type Editor = HTMLElement & { setConfig(c: object): void; hass: unknown };
    async function editor(config: object) {
        const ed = document.createElement('animated-weather-card-editor') as Editor;
        ed.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', ...config });
        document.body.append(ed);
        await new Promise(resolve => setTimeout(resolve, 0));
        mounted.push(ed);
        const sent: Array<Record<string, unknown>> = [];
        ed.addEventListener('config-changed', e => sent.push((e as CustomEvent).detail.config));
        return { ed, sent };
    }
    const pick = (ed: HTMLElement, id: string, value: string) =>
        ed.querySelector(`#${id}`)!.dispatchEvent(new CustomEvent('selected', { detail: { value } }));

    it('four slots: a new reading in a slot writes the list; the row as it always was writes nothing', async () => {
        const { ed, sent } = await editor({});
        expect(ed.querySelectorAll('.metric-slots ha-select')).toHaveLength(4);
        pick(ed, 'metric_2', 'uv');
        expect(sent.at(-1)!.metrics).toEqual(['humidity', 'wind', 'uv', 'sun']);
        pick(ed, 'metric_2', 'pressure');
        expect(sent.at(-1)!.metrics).toBeUndefined();
        pick(ed, 'metric_3', 'none');
        expect(sent.at(-1)!.metrics).toEqual(['humidity', 'wind', 'pressure']);
    });

    it('UV levels: four rising numbers become a list, nothing goes back to the WHO\'s', async () => {
        const { ed, sent } = await editor({});
        const field = ed.querySelector('#uv_levels') as HTMLInputElement;
        field.value = '2, 5, 7, 10';
        field.dispatchEvent(new Event('change'));
        expect(sent.at(-1)!.uv_levels).toEqual([2, 5, 7, 10]);
        field.value = '';
        field.dispatchEvent(new Event('change'));
        expect(sent.at(-1)!.uv_levels).toBeUndefined();
    });
});
