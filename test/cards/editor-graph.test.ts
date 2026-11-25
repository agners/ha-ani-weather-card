import { describe, it, expect, afterEach, beforeEach } from 'vitest';
import '../../src/animated-weather-card-editor';

// Home Assistant's ha-select, as the editors use it: options and value as properties
if (!customElements.get('ha-select')) customElements.define('ha-select', class extends HTMLElement {});

type Editor = HTMLElement & { setConfig(config: object): void };
type Select = HTMLElement & { options: Array<{ value: string; label: string }>; value: string };
const flush = () => new Promise(resolve => setTimeout(resolve, 0));

describe('the hours\' graph in both editors (forecast_graph)', () => {
    let editor: Editor;
    afterEach(() => editor?.remove());

    for (const [tag, type, extra] of [['animated-weather-card-editor', 'custom:animated-weather-card', { show_forecast: true }], ['animated-forecast-card-editor', 'custom:animated-forecast-card', {}]] as const) {
        it(`${tag}: a line, a line with a fill, bars or none, writing only a change from the line`, async () => {
            editor = document.createElement(tag) as Editor;
            editor.setConfig({ type, entity: 'weather.home', ...extra });
            document.body.appendChild(editor);
            await flush();
            const select = editor.querySelector('#forecast_graph') as Select;
            expect(select.options.map(o => o.value)).toEqual(['line', 'area', 'bars', 'none']);
            expect(select.value).toBe('line');
            let config: Record<string, unknown> | undefined;
            editor.addEventListener('config-changed', (e) => { config = (e as CustomEvent).detail.config; });
            select.dispatchEvent(new CustomEvent('selected', { detail: { value: 'bars' } }));
            expect(config).toMatchObject({ forecast_graph: 'bars' });
            select.dispatchEvent(new CustomEvent('selected', { detail: { value: 'line' } }));
            expect(config).not.toHaveProperty('forecast_graph');
        });
    }
});

describe('the forecast card\'s days in its editor (forecast_days)', () => {
    let editor: Editor;
    afterEach(() => editor?.remove());

    it('offers 0, 3, 5, 7 and 10, and shows another count YAML set among them', async () => {
        editor = document.createElement('animated-forecast-card-editor') as Editor;
        editor.setConfig({ type: 'custom:animated-forecast-card', entity: 'weather.home' });
        document.body.appendChild(editor);
        await flush();
        let select = editor.querySelector('#forecast_days') as Select;
        expect(select.options.map(o => o.value)).toEqual(['0', '3', '5', '7', '10']);
        expect(select.value).toBe('7');
        editor.remove();
        editor = document.createElement('animated-forecast-card-editor') as Editor;
        editor.setConfig({ type: 'custom:animated-forecast-card', entity: 'weather.home', forecast_days: 6 });
        document.body.appendChild(editor);
        await flush();
        select = editor.querySelector('#forecast_days') as Select;
        expect(select.options.map(o => o.value)).toEqual(['0', '3', '5', '6', '7', '10']);
        expect(select.value).toBe('6');
        expect(select.options.find(o => o.value === '6')?.label).toBe('6 days');
    });
});

describe('the big number and the time and date in the weather card\'s editor (hero, show_clock, show_date)', () => {
    let editor: Editor;
    beforeEach(() => localStorage.setItem('animated-weather-card:editor-all', '1'));
    afterEach(() => { editor?.remove(); localStorage.removeItem('animated-weather-card:editor-all'); });

    const radio = (key: string, value: string) => {
        const input = editor.querySelector(`[id="${key}"] input[value="${value}"]`) as HTMLInputElement;
        input.checked = true;
        input.dispatchEvent(new Event('change'));
    };

    it('picks the temperature or the time, writing only the time; with the time as the big number, the line before the place offers the date alone', async () => {
        editor = document.createElement('animated-weather-card-editor') as Editor;
        editor.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home' });
        document.body.appendChild(editor);
        await flush();
        expect((editor.querySelector('#hero input:checked') as HTMLInputElement).value).toBe('temperature');
        let config: Record<string, unknown> | undefined;
        editor.addEventListener('config-changed', (e) => { config = (e as CustomEvent).detail.config; });
        const timeDate = editor.querySelector('#time_date') as Select;
        expect(timeDate.options.map(o => o.value)).toEqual(['off', 'time', 'date', 'both']);
        timeDate.dispatchEvent(new CustomEvent('selected', { detail: { value: 'both' } }));
        expect(config).toMatchObject({ show_clock: true, show_date: true });
        timeDate.dispatchEvent(new CustomEvent('selected', { detail: { value: 'date' } }));
        expect(config).toMatchObject({ show_date: true });
        expect(config).not.toHaveProperty('show_clock');
        radio('hero', 'clock');
        expect(config).toMatchObject({ hero: 'clock' });
        expect(timeDate.options.map(o => o.value)).toEqual(['off', 'date']);
        expect(timeDate.value).toBe('date');
        timeDate.dispatchEvent(new CustomEvent('selected', { detail: { value: 'off' } }));
        expect(config).not.toHaveProperty('show_date');
        radio('hero', 'temperature');
        expect(config).not.toHaveProperty('hero');
    });

    it('says on a nightstand that it draws its own time, date and forecast, and keeps those rows out of the basics', async () => {
        localStorage.removeItem('animated-weather-card:editor-all');
        editor = document.createElement('animated-weather-card-editor') as Editor;
        editor.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', layout: 'nightstand' });
        document.body.appendChild(editor);
        await flush();
        const shown = (id: string) => editor.querySelector(`[data-row="${id}"]`)!.hasAttribute('data-open');
        expect(editor.querySelector('[data-sec="forecast"]')!.hasAttribute('data-open')).toBe(false);
        expect(shown('alarm_entity')).toBe(true);
        expect(shown('wake_time')).toBe(true);
        // With all settings, every row is there, with the reason above them
        (editor.querySelector('#all_settings') as HTMLInputElement).checked = true;
        editor.querySelector('#all_settings')!.dispatchEvent(new Event('change'));
        for (const id of ['why_forecast_nightstand', 'show_forecast', 'time_date', 'hero']) expect(shown(id), id).toBe(true);
    });
});

describe('the forecast card\'s weather in its editor (weather_effects)', () => {
    let editor: Editor;
    afterEach(() => editor?.remove());

    it('is off by default, and writes only the weather being on', async () => {
        editor = document.createElement('animated-forecast-card-editor') as Editor;
        editor.setConfig({ type: 'custom:animated-forecast-card', entity: 'weather.home' });
        document.body.appendChild(editor);
        await flush();
        const toggle = editor.querySelector('#weather_effects') as HTMLInputElement;
        expect(toggle.hasAttribute('checked')).toBe(false);
        let config: Record<string, unknown> | undefined;
        editor.addEventListener('config-changed', (e) => { config = (e as CustomEvent).detail.config; });
        toggle.checked = true;
        toggle.dispatchEvent(new Event('change'));
        expect(config).toMatchObject({ weather_effects: true });
        toggle.checked = false;
        toggle.dispatchEvent(new Event('change'));
        expect(config).not.toHaveProperty('weather_effects');
    });
});
