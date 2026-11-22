import { describe, it, expect, afterEach } from 'vitest';
import '../../src/animated-weather-card-editor';
import { readingsOf } from '../../src/readings';

// The readings as a table in the editor: one row per reading, its type then its entity, wind's direction and rain's
// rate, a name for any sensor, view only, up, down, remove, and Add a reading. Only an edit there writes `readings`

type Editor = HTMLElement & { setConfig(config: object): void; hass: unknown };
type Picker = HTMLElement & { value: string; includeDomains?: string[]; hass?: unknown };
const flush = () => new Promise(resolve => setTimeout(resolve, 0));
const mounted: HTMLElement[] = [];
afterEach(() => { for (const e of mounted.splice(0)) e.remove(); });

async function editor(config: object, hass: Record<string, unknown> = { states: { 'weather.home': { entity_id: 'weather.home', state: 'sunny', attributes: { uv_index: 3 } } }, config: { components: [] }, callWS: async () => null }) {
    const ed = document.createElement('animated-weather-card-editor') as Editor;
    ed.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', ...config });
    document.body.append(ed);
    mounted.push(ed);
    for (let i = 0; i < 100 && !ed.querySelector('.rd-add'); i++) await new Promise(r => setTimeout(r, 10));
    ed.hass = hass;
    await flush();
    const sent: Array<Record<string, unknown>> = [];
    ed.addEventListener('config-changed', e => sent.push({ ...(e as CustomEvent).detail.config }));
    // Home Assistant hands the editor what it sent, as it does
    ed.addEventListener('config-changed', e => ed.setConfig((e as CustomEvent).detail.config));
    return { ed, sent };
}
const rows = (ed: HTMLElement) => [...ed.querySelectorAll<HTMLElement>('.rd-row')];
const typeOf = (row: HTMLElement) => row.dataset.type;
const choose = (row: HTMLElement, value: string) => row.querySelector('.rd-type')!.dispatchEvent(new CustomEvent('selected', { detail: { value } }));
const pick = (row: HTMLElement, cls: string, value: string) => { const p = row.querySelector(cls) as Picker; p.value = value; p.dispatchEvent(new CustomEvent('value-changed', { detail: { value } })); };

describe('the readings\' table', () => {
    it('starts as the row the card has: the defaults, or the list the old options make', async () => {
        const { ed } = await editor({});
        expect(rows(ed).map(typeOf)).toEqual(['humidity', 'wind', 'pressure', 'sun']);
        const old = await editor({ metrics: ['uv', 'rain'], uv_entity: 'sensor.uv', rain_entity: 'sensor.r', rain_week_entity: 'sensor.w' });
        expect(rows(old.ed).map(typeOf)).toEqual(['uv', 'rain', 'rain_week']);
        expect((rows(old.ed)[1].querySelector('.rd-entity') as Picker).value).toBe('sensor.r');
        // The old pickers and slots are gone
        expect(ed.querySelector('#metric_0, #humidity_sensor_entity, #uv_entity, #rain_entity, #show_sun')).toBeNull();
    });

    it('gives each picker Home Assistant and the domains its type can read: a sensor, or a weather entity where it reports the value', async () => {
        const hass = { states: {}, config: { components: [] }, callWS: async () => null };
        const { ed } = await editor({ readings: ['humidity', { type: 'wind', entity: 'sensor.ws', direction_entity: 'sensor.wd' }, { type: 'rain', entity: 'sensor.r' }, 'sun'] }, hass);
        const [hum, wind, rain, sun] = rows(ed);
        expect((hum.querySelector('.rd-entity') as Picker).includeDomains).toEqual(['sensor', 'weather']);
        expect(hum.querySelector('.rd-entity')!.getAttribute('helper')).toBe('Empty: weather.home\'s own');
        expect((wind.querySelector('.rd-direction') as Picker).value).toBe('sensor.wd');
        expect((rain.querySelector('.rd-entity') as Picker).includeDomains).toEqual(['sensor']);
        expect((rain.querySelector('.rd-rate') as Picker).hass).toBe(hass);
        expect(sun.querySelector('.rd-entity')).toBeNull();
    });

    it('adds a reading, its type first, then its entity; writes the short form and drops the options it replaces', async () => {
        const { ed, sent } = await editor({ metrics: ['humidity', 'wind'], humidity_sensor_entity: 'sensor.h', show_sun: false });
        (ed.querySelector('.rd-add') as HTMLButtonElement).click();
        // UV first, since the weather entity reports one
        expect(rows(ed).map(typeOf)).toEqual(['humidity', 'wind', 'uv']);
        choose(rows(ed)[2], 'aqi');
        expect(rows(ed)[2].querySelector('.rd-warn')).not.toBeNull();
        pick(rows(ed)[2], '.rd-entity', 'sensor.aqi');
        const last = sent.at(-1)!;
        expect(last.readings).toEqual([{ type: 'humidity', entity: 'sensor.h' }, 'wind', { type: 'aqi', entity: 'sensor.aqi' }]);
        for (const k of ['metrics', 'humidity_sensor_entity', 'show_sun']) expect(last, k).not.toHaveProperty(k);
        expect(rows(ed)[2].querySelector('.rd-warn')).toBeNull();
    });

    it('moves, removes, marks view only, names a sensor, and writes nothing for the defaults', async () => {
        const { ed, sent } = await editor({});
        (rows(ed)[3].querySelector('.rd-up') as HTMLButtonElement).click();
        expect(sent.at(-1)!.readings).toEqual(['humidity', 'wind', 'sun', 'pressure']);
        (rows(ed)[2].querySelector('.rd-down') as HTMLButtonElement).click();
        expect(sent.at(-1)!).not.toHaveProperty('readings');
        const view = rows(ed)[0].querySelector('.rd-view-switch') as HTMLInputElement;
        view.checked = true;
        view.dispatchEvent(new Event('change'));
        expect(sent.at(-1)!.readings).toEqual([{ type: 'humidity', view: true }, 'wind', 'pressure', 'sun']);
        (rows(ed)[3].querySelector('.rd-remove') as HTMLButtonElement).click();
        (ed.querySelector('.rd-add') as HTMLButtonElement).click();
        choose(rows(ed).at(-1)!, 'sensor');
        pick(rows(ed).at(-1)!, '.rd-entity', 'sensor.co2');
        const name = rows(ed).at(-1)!.querySelector('[id^="rd-name-"]') as HTMLInputElement;
        name.value = 'CO₂';
        name.dispatchEvent(new Event('change'));
        const list = sent.at(-1)!.readings;
        expect(list).toEqual([{ type: 'humidity', view: true }, 'wind', 'pressure', { type: 'sensor', entity: 'sensor.co2', name: 'CO₂' }]);
        // What it writes is what the card reads
        expect(readingsOf({ readings: list } as never).map(r => r.type)).toEqual(['humidity', 'wind', 'pressure', 'sensor']);
    });

    it('keeps the old options until the table itself is edited, and shows UV and AQI levels only with their rows', async () => {
        const { ed, sent } = await editor({ metrics: ['humidity', 'uv'], uv_entity: 'sensor.uv' });
        const loc = ed.querySelector('#show_location') as HTMLInputElement;
        loc.checked = false;
        loc.dispatchEvent(new Event('change'));
        expect(sent.at(-1)!).toMatchObject({ metrics: ['humidity', 'uv'], uv_entity: 'sensor.uv' });
        expect(sent.at(-1)!).not.toHaveProperty('readings');
        expect((ed.querySelector('[data-levels-for="uv"]') as HTMLElement).hidden).toBe(false);
        expect((ed.querySelector('[data-levels-for="aqi"]') as HTMLElement).hidden).toBe(true);
    });
});
