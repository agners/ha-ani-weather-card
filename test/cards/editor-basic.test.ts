import { describe, it, expect, afterEach, beforeEach } from 'vitest';
import '../../src/animated-weather-card-editor';

// The weather card's editor: the basics, Show all settings, and the settings you've changed, which always show

if (!customElements.get('ha-select')) customElements.define('ha-select', class extends HTMLElement {});

type Editor = HTMLElement & { setConfig(config: object): void; hass: unknown };
type Select = HTMLElement & { options: Array<{ value: string; label: string }>; value: string };
const STORE = 'animated-weather-card:editor-all';
const flush = () => new Promise(resolve => setTimeout(resolve, 0));

let editor: Editor;
let sent: Array<Record<string, unknown>>;

async function open(config: object): Promise<Editor> {
    editor = document.createElement('animated-weather-card-editor') as Editor;
    editor.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', ...config });
    document.body.appendChild(editor);
    await flush();
    sent = [];
    editor.addEventListener('config-changed', e => sent.push({ ...(e as CustomEvent).detail.config }));
    // Home Assistant hands the editor what it sent, as it does
    editor.addEventListener('config-changed', e => editor.setConfig((e as CustomEvent).detail.config));
    return editor;
}
const $ = <T extends HTMLElement = HTMLInputElement>(selector: string) => editor.querySelector(selector) as T;
const shown = (id: string) => $(`[data-row="${id}"]`).hasAttribute('data-open');
/** The rows you can see: open, in an open section */
const openRows = () => [...editor.querySelectorAll<HTMLElement>('[data-sec][data-open] [data-row][data-open]')].map(el => el.dataset.row);
const openSections = () => [...editor.querySelectorAll<HTMLElement>('[data-sec][data-open]')].map(el => el.dataset.sec);
const flip = (selector: string, checked: boolean) => { const el = $(selector); el.checked = checked; el.dispatchEvent(new Event('change')); };
const radio = (key: string, value: string) => { const el = $(`[id="${key}"] input[value="${value}"]`); el.checked = true; el.dispatchEvent(new Event('change')); };
const choose = (id: string, value: string) => $(`#${id}`).dispatchEvent(new CustomEvent('selected', { detail: { value } }));
const last = () => sent.at(-1)!;

beforeEach(() => localStorage.removeItem(STORE));
afterEach(() => { editor?.remove(); localStorage.removeItem(STORE); });

describe('the editor\'s basics', () => {
    it('show a new card six controls in four sections, and none of the drawers', async () => {
        await open({ sun_entity: 'sun.sun' });
        expect(openRows()).toEqual(['entity', 'name', 'layout', 'color_palette', 'show_forecast', 'note']);
        expect(openSections()).toEqual(['weather', 'look', 'forecast', 'note']);
        expect($('[data-drawers]').hasAttribute('data-open')).toBe(false);
        expect($('#all_settings').hasAttribute('checked')).toBe(false);
        // Nothing is dimmed, and the nightstand's fields aren't on a regular card
        expect(editor.querySelector('[style*="opacity"], [style*="pointer-events"]')).toBeNull();
        expect(shown('alarm_entity')).toBe(false);
    });

    it('turn into every setting with the switch, which is kept per browser, never written to the card, and draws nothing again', async () => {
        await open({});
        const entity = $('#entity');
        flip('#all_settings', true);
        expect(localStorage.getItem(STORE)).toBe('1');
        expect(sent).toEqual([]);
        expect($('#entity')).toBe(entity);
        expect($('.card-config').hasAttribute('data-all')).toBe(true);
        expect(openSections()).toEqual(['weather', 'look', 'forecast', 'note', 'readings', 'sky', 'colors', 'planes', 'interactions', 'dev']);
        for (const id of ['outdoor_sensor_entity', 'show_location', 'temperature_decimals', 'time_date', 'hero', 'animate', 'flights_entity', 'actions', 'dev_mode']) expect(shown(id), id).toBe(true);
        // The forecast's own rows wait for the forecast
        expect(shown('forecast_graph')).toBe(false);
        flip('#show_forecast', true);
        expect(shown('forecast_graph')).toBe(true);
        expect($('[data-live]').textContent).toContain('All settings shown');
        editor.remove();
        // The next editor opens as this one was left
        await open({});
        expect($('#all_settings').hasAttribute('checked')).toBe(true);
        expect(shown('outdoor_sensor_entity')).toBe(true);
    });

    it('show any setting the card has changed, in its place, and keep it shown when it\'s cleared', async () => {
        await open({ outdoor_sensor_entity: 'sensor.garden', animate: true, show_location: true, auto_pause: false });
        // Defaults the old editor wrote out don't count
        expect(shown('outdoor_sensor_entity')).toBe(true);
        expect(shown('animate')).toBe(false);
        expect(shown('show_location')).toBe(false);
        expect(openSections()).toEqual(['weather', 'look', 'forecast', 'note']);
        const picker = $('#outdoor_sensor_entity');
        picker.value = '';
        picker.dispatchEvent(new Event('value-changed'));
        expect(last()).not.toHaveProperty('outdoor_sensor_entity');
        expect(shown('outdoor_sensor_entity')).toBe(true);
    });

    it('show a card made with the old options its readings, under a drawer that says what they are', async () => {
        await open({ metrics: ['humidity', 'wind', 'uv'], humidity_sensor_entity: 'sensor.garden_humidity', uv_entity: 'sensor.uv', rain_week_entity: 'sensor.rain_week' });
        expect(shown('readings')).toBe(true);
        expect(shown('show_attributes')).toBe(false);
        expect(openSections()).toContain('readings');
        expect($('[data-summary="readings"]').textContent).toBe('Humidity, Wind, UV index · 1 in the forecast view');
        expect(editor.querySelectorAll('.rd-row')).toHaveLength(4);
    });
});

describe('the editor\'s merged controls', () => {
    beforeEach(() => localStorage.setItem(STORE, '1'));

    it('write the layout as the card reads it, and show a nightstand set with compact as the nightstand', async () => {
        await open({});
        radio('layout', 'compact');
        expect(last()).toMatchObject({ compact: true });
        radio('layout', 'nightstand');
        expect(last()).toMatchObject({ layout: 'nightstand' });
        expect(last()).not.toHaveProperty('compact');
        expect(shown('alarm_entity')).toBe(true);
        radio('layout', 'default');
        expect(last()).not.toHaveProperty('layout');
        expect(last()).not.toHaveProperty('compact');
        editor.remove();
        await open({ compact: true, layout: 'nightstand' });
        expect(($('#layout input:checked') as HTMLInputElement).value).toBe('nightstand');
    });

    it('keep the key beside the one they turn off: the days\' count, the indoor style, what the tags say', async () => {
        await open({ show_forecast: true, show_days: true, forecast_days: 5, indoor_temperature_entity: 'sensor.in', indoor_style: 'icon', flights_entity: 'sensor.fr24', flight_label: 'route' });
        expect(($('#forecast_days') as Select).value).toBe('5');
        choose('forecast_days', 'none');
        expect(last()).toMatchObject({ forecast_days: 5 });
        expect(last()).not.toHaveProperty('show_days');
        choose('forecast_days', '7');
        expect(last()).toMatchObject({ show_days: true });
        expect(last()).not.toHaveProperty('forecast_days');
        choose('indoor_line', 'hidden');
        expect(last()).toMatchObject({ show_indoor: false, indoor_style: 'icon' });
        choose('indoor_line', 'label');
        expect(last()).not.toHaveProperty('show_indoor');
        expect(last()).not.toHaveProperty('indoor_style');
        choose('plane_tags', 'none');
        expect(last()).toMatchObject({ show_flight_labels: false, flight_label: 'route' });
        choose('reading_style', 'value');
        expect(last()).toMatchObject({ show_attribute_labels: false, show_attribute_icons: false });
        choose('reading_style', 'both');
        expect(last()).not.toHaveProperty('show_attribute_labels');
    });

    it('word every switch so on means on, and write nothing for a default', async () => {
        await open({});
        flip('#lightning_shake', false);
        expect(last()).toMatchObject({ disable_lightning_shake: true });
        flip('#lightning_shake', true);
        expect(last()).not.toHaveProperty('disable_lightning_shake');
        flip('#animate', false);
        expect(last()).toMatchObject({ animate: false });
        // The weather's still: what moves it goes
        expect(shown('spill_particles')).toBe(false);
        flip('#animate', true);
        expect(last()).not.toHaveProperty('animate');
        radio('sky_follows', 'hours');
        expect(last()).toMatchObject({ enable_day_night_cycle: true });
        expect(shown('day_hours')).toBe(true);
        radio('color_palette', 'theme');
        expect(last()).toMatchObject({ color_palette: 'theme' });
        radio('color_palette', 'default');
        expect(last()).not.toHaveProperty('color_palette');
    });

    it('take another place\'s fields off with its switch, and bring back what was typed', async () => {
        await open({ latitude: -33.87, longitude: 151.21, time_zone: 'Australia/Sydney' });
        expect(shown('place_fields')).toBe(true);
        flip('#another_place', false);
        for (const k of ['latitude', 'longitude', 'time_zone']) expect(last()).not.toHaveProperty(k);
        expect(shown('place_fields')).toBe(false);
        flip('#another_place', true);
        expect(last()).toMatchObject({ latitude: -33.87, longitude: 151.21, time_zone: 'Australia/Sydney' });
    });
});

describe('the editor\'s resets and drawers', () => {
    beforeEach(() => localStorage.setItem(STORE, '1'));

    it('reset the amounts in place, with the drawer still open, leaving no engine_settings behind', async () => {
        await open({ engine_settings: { rainCount: 2.5 } });
        $('[data-drawer="sky"]').click();
        const drawer = $('[data-sec="sky"] .drw-c');
        expect(drawer.hasAttribute('data-open')).toBe(true);
        const reset = $('.reset-engine-btn');
        expect(reset.hasAttribute('data-off')).toBe(false);
        expect($('[data-summary="sky"]').textContent).toBe('Moving · 1 amount changed');
        reset.click();
        expect(last()).not.toHaveProperty('engine_settings');
        expect($('[data-sec="sky"] .drw-c')).toBe(drawer);
        expect(drawer.hasAttribute('data-open')).toBe(true);
        expect($('#rainCount').value).toBe('1');
        expect($('[data-out="rainCount"]').textContent).toBe('1.0×');
        expect(reset.hasAttribute('data-off')).toBe(true);
        // A slider set back to its default writes nothing either
        const rain = $('#rainCount');
        rain.value = '2';
        rain.dispatchEvent(new Event('change'));
        expect(last()).toMatchObject({ engine_settings: { rainCount: 2 } });
        rain.value = '1';
        rain.dispatchEvent(new Event('change'));
        expect(last()).not.toHaveProperty('engine_settings');
    });

    it('keep the open drawers and the mode when a YAML edit draws the editor again, without playing a reveal', async () => {
        await open({});
        $('[data-drawer="planes"]').click();
        editor.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', flights_entity: 'sensor.fr24' });
        expect($('.card-config').hasAttribute('data-instant')).toBe(true);
        expect($('[data-sec="planes"] .drw-c').hasAttribute('data-open')).toBe(true);
        expect($('[data-drawer="planes"]').getAttribute('aria-expanded')).toBe('true');
        expect(shown('plane_tags')).toBe(true);
        expect($('[data-summary="planes"]').textContent).toBe('sensor.fr24');
    });

    it('name each drawer\'s header a button inside a heading, tied to what it opens', async () => {
        await open({});
        const btn = $('[data-drawer="readings"]');
        expect(btn.parentElement!.localName).toBe('h3');
        expect(btn.getAttribute('aria-expanded')).toBe('false');
        expect(editor.querySelector(`#${btn.getAttribute('aria-controls')}`)).toBe($('[data-sec="readings"] .drw-c'));
        btn.click();
        expect(btn.getAttribute('aria-expanded')).toBe('true');
    });
});
