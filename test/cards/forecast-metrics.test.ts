import { describe, it, expect, afterEach } from 'vitest';
import '../../src/animated-weather-card';
import '../../src/animated-weather-card-forecast';
import { createChips, createDaily, createHourly, chipLabels, chipName } from '../../src/fc-row';
import { Timeline } from '../../src/fc-core';
import { METRICS, hours, week } from '../../src/fc-data';
import { FC_WORDS } from '../../src/fc-words';
import type { ForecastEntry } from '../../src/forecast-data';

// Every value an hourly forecast carries gets a chip: the UV index, the wind (with its arrow), its gusts, humidity,
// the dew point, cloud cover and pressure, after the four the row began with. Where they're more than fit, the chips
// scroll sideways, and a swipe on them is theirs, not the slide's.

const HOUR = 3600_000;
const W = FC_WORDS.en;
const hass = { config: { time_zone: 'UTC' }, language: 'en', locale: { language: 'en', time_format: '24' } } as never;
const start = (() => { const d = new Date(); d.setMinutes(0, 0, 0); return d; })();
function entries(): ForecastEntry[] {
    return Array.from({ length: 30 }, (_, i) => ({
        datetime: new Date(start.getTime() + i * HOUR).toISOString(), condition: 'cloudy',
        temperature: 14, apparent_temperature: 12, precipitation_probability: 20, precipitation: 0,
        // The UV index: none for the first two hours, then a day's
        uv_index: i < 2 ? 0 : 5.4, wind_speed: i === 3 ? 0 : 18.4, wind_gust_speed: 33, wind_bearing: 225,
        humidity: 71, dew_point: 9, cloud_coverage: i === 1 ? 0 : 60, pressure: 1013.4,
    }));
}
const units = { wind: 'km/h', pressure: 'hPa' };
const has = Object.fromEntries(METRICS.map(m => [m, true])) as never;
const mounted: HTMLElement[] = [];
afterEach(() => { mounted.splice(0).forEach(e => e.remove()); });

function row(graph?: string) {
    const r = createHourly({ W, lang: 'en', hours: hours(new Timeline(entries(), 'hourly', Date.now()).slots, hass), metric: 'temp', has, noun: 'rain', pitch: 50, plot: 44, valueHeight: 20, units, graph: graph as never, conditionName: c => c });
    document.body.append(r.el);
    mounted.push(r.el);
    return r;
}
const vals = (r: ReturnType<typeof row>) => [...r.el.querySelectorAll<HTMLElement>('.fc-val')].slice(0, 5).map(v => v.innerHTML);

describe('the other values on the hourly row', () => {
    it('the wind with an arrow where it blows, its gusts, the UV index and cloud cover: none where there\'s nothing', () => {
        const r = row();
        r.setMetric('wind', { animate: false });
        const wind = vals(r);
        // As the card's own arrow: from the south-west, it blows north-east
        expect(wind[0]).toMatch(/^<svg class="fc-dir"[^>]*style="transform:rotate\(45deg\)"[^]*<\/svg>18$/);
        expect(wind[3]).toBe('');
        expect(r.el.dataset.values).toBe('above');
        r.setMetric('gust', { animate: false });
        expect(vals(r)[0]).toBe('33');
        r.setMetric('uv', { animate: false });
        expect(vals(r)).toEqual(['', '', '5', '5', '5']);
        r.setMetric('cloud', { animate: false });
        expect(vals(r).slice(0, 3)).toEqual(['60<i class="fc-pct">%</i>', '', '60<i class="fc-pct">%</i>']);
        r.setMetric('humidity', { animate: false });
        expect(vals(r)[0]).toBe('71<i class="fc-pct">%</i>');
    });
    it('the dew point on the line, as the temperatures are; the pressure ungrouped, standing over its line', () => {
        const r = row();
        r.setMetric('dew', { animate: false });
        expect(vals(r)[0]).toBe('9');
        expect(r.el.dataset.values).toBe('line');
        r.setMetric('pressure', { animate: false });
        // Four figures on the line would leave dashes between them that read as minus signs
        expect(vals(r)[0]).toBe('1013');
        expect(r.el.dataset.values).toBe('above');
    });
    it('no bar for an hour of nothing, and every point inside the plot', () => {
        const r = row('bars');
        const bars = () => (r.el.querySelector('.fc-bars path')?.getAttribute('d') ?? '').match(/M/g)?.length ?? 0;
        r.setMetric('uv', { animate: false });
        expect(bars()).toBe(28);
        r.setMetric('wind', { animate: false });
        expect(bars()).toBe(29);
        for (const m of METRICS) {
            r.setMetric(m, { animate: false });
            // Each hour's point: the move's, then each curve's end
            const [m0, ...curves] = (r.el.querySelector('.fc-line')?.getAttribute('d') ?? '').split('C');
            const ys = [Number(m0.split(' ')[1]), ...curves.map(c => Number(c.trim().split(' ')[5]))];
            expect(Math.min(...ys), m).toBeGreaterThanOrEqual(0);
            expect(Math.max(...ys), m).toBeLessThanOrEqual(44);
        }
    });
    it('says each hour in words, with its unit', () => {
        const r = row();
        const first = () => r.el.querySelector('.fc-sr li')?.textContent;
        r.setMetric('wind', { animate: false });
        expect(first()).toBe('Now: cloudy, 18 km/h');
        expect(r.el.querySelector('.fc-sr')?.getAttribute('aria-label')).toBe('Hourly forecast: Wind');
        r.setMetric('pressure', { animate: false });
        expect(first()).toBe('Now: cloudy, 1013 hPa');
        r.setMetric('dew', { animate: false });
        expect(first()).toBe('Now: cloudy, 9 degrees');
        r.setMetric('gust', { animate: false });
        expect(r.el.querySelector('.fc-sr')?.getAttribute('aria-label')).toBe('Hourly forecast: Wind gusts');
    });
});

describe('the chips, more than fit', () => {
    function chips(metrics = [...METRICS], width = 311, natural = 736) {
        const changes: string[] = [];
        const c = createChips({ W, metrics, value: 'temp', noun: 'rain', onChange: m => changes.push(m) });
        document.body.append(c.el);
        mounted.push(c.el);
        // jsdom lays out nothing: the chips' width, and the row's at its words
        Object.defineProperty(c.el, 'clientWidth', { configurable: true, get: () => width });
        Object.defineProperty(c.el.querySelector('.fc-chips-row'), 'scrollWidth', { configurable: true, get: () => natural });
        c.fit();
        return { c, changes, scroller: c.el.querySelector('.fc-chips-scroll') as HTMLElement };
    }
    it('scroll sideways on the short words, theirs and not the slide\'s, and keep them all in one radiogroup', () => {
        const { c, scroller } = chips();
        expect(c.el.hasAttribute('data-scroll')).toBe(true);
        expect(c.el.dataset.level).toBe('1');
        expect(scroller.classList.contains('awc-noclaim')).toBe(true);
        expect([...c.el.querySelectorAll('[role="radio"]')].map(e => e.textContent)).toEqual(['Temp', 'Feels like', 'Chance', 'Amount', 'UV', 'Wind', 'Gusts', 'Humidity', 'Dew', 'Clouds', 'Pressure']);
        expect(c.el.getAttribute('role')).toBe('radiogroup');
        // The selected capsule's copy scrolls with them, inside the same track
        expect(c.sel?.parentElement).toBe(c.el.querySelector('.fc-chips-row')?.parentElement);
    });
    it('don\'t scroll where they fit, and the slide can take a swipe on them as before', () => {
        const { c, scroller } = chips(['temp', 'feels', 'chance', 'amount'], 311, 288);
        expect(c.el.hasAttribute('data-scroll')).toBe(false);
        expect(scroller.classList.contains('awc-noclaim')).toBe(false);
    });
    it('a click picks a chip; the click a mouse drag ends in picks nothing and never reaches the card', () => {
        const { c, changes, scroller } = chips();
        (c.el.querySelector('[data-metric="wind"]') as HTMLElement).click();
        expect(changes).toEqual(['wind']);
        expect(c.value()).toBe('wind');
        const pointer = (target: EventTarget, type: string, x: number) => {
            const e = new MouseEvent(type, { clientX: x, bubbles: true, cancelable: true, button: 0 });
            Object.defineProperty(e, 'pointerType', { value: 'mouse' });
            target.dispatchEvent(e);
        };
        const humidity = c.el.querySelector('[data-metric="humidity"]') as HTMLElement;
        let heard = 0;
        document.body.addEventListener('click', () => heard++);
        pointer(humidity, 'pointerdown', 200);
        pointer(window, 'pointermove', 150);
        pointer(window, 'pointerup', 150);
        humidity.click();
        expect(c.value()).toBe('wind');
        expect(heard).toBe(0);
        expect(c.el.classList.contains('fc-dragging')).toBe(false);
        // The next click is a press again
        humidity.click();
        expect(c.value()).toBe('humidity');
        void scroller;
    });
    it('every chip has its words, full and short, and a name, in every language', () => {
        for (const [lang, words] of Object.entries(FC_WORDS)) {
            const labels = chipLabels(words, 'rain');
            for (const m of METRICS) {
                expect(labels[m]?.every(t => typeof t === 'string' && t.length > 0), `${lang} ${m}`).toBe(true);
                expect(chipName(words, m, 'rain'), `${lang} ${m}`).toBeTruthy();
            }
        }
    });
});

describe('the days, on the other values', () => {
    const daily: ForecastEntry[] = Array.from({ length: 5 }, (_, i) => ({
        datetime: new Date(start.getTime() + i * 24 * HOUR).toISOString(), condition: 'sunny', temperature: 20, templow: 10,
        ...(i === 4 ? {} : { uv_index: 3 + i, wind_speed: 10 + i * 5, humidity: 60, pressure: 1010 + i, dew_point: 8 }),
    }));
    function days() {
        const d = createDaily({ hass, W, week: week(daily, 'daily', start.getTime(), hass, { count: 5 }), theme: false, units, lang: 'en', conditionName: c => c });
        document.body.append(d.el);
        mounted.push(d.el);
        return d;
    }
    const his = (d: ReturnType<typeof days>) => [...d.el.querySelectorAll('.fc-d-hi')].map(e => e.textContent);
    it('show each day\'s own figure, a dash where the forecast has none', () => {
        const d = days();
        d.setMetric('wind', { animate: false });
        expect(his(d)).toEqual(['10', '15', '20', '25', '–']);
        expect(d.el.querySelector('.fc-day')?.getAttribute('aria-label')).toMatch(/: sunny, Wind 10 km\/h$/);
        d.setMetric('uv', { animate: false });
        expect(his(d)).toEqual(['3', '4', '5', '6', '–']);
        d.setMetric('humidity', { animate: false });
        expect(his(d)[0]).toBe('60%');
        d.setMetric('pressure', { animate: false });
        expect(his(d)).toEqual(['1010', '1011', '1012', '1013', '–']);
        expect(d.el.dataset.metric).toBe('pressure');
        d.setMetric('dew', { animate: false });
        expect(his(d)[0]).toBe('8°');
        // A day with nothing to show has no bar
        expect((d.el.querySelectorAll('.fc-fill')[4] as HTMLElement).style.opacity).toBe('0');
    });
    it('lit as what they are: the temperature\'s scale for the dew point, the text\'s white for the rest', () => {
        const d = days();
        const fill = () => d.el.querySelector('.fc-fill') as HTMLElement;
        d.setMetric('dew', { animate: false });
        expect(fill().style.backgroundImage).toMatch(/^linear-gradient/);
        d.setMetric('wind', { animate: false });
        expect(fill().style.backgroundImage).toBe('');
        expect(fill().classList.contains('fc-wet')).toBe(false);
        d.setMetric('chance', { animate: false });
        expect(fill().classList.contains('fc-wet')).toBe(true);
    });
});

describe('on the card', () => {
    it('a sideways trackpad swipe on chips that scroll is theirs; on the row it moves through the hours', async () => {
        const forecast = entries();
        const hassCard = {
            states: { 'weather.home': { entity_id: 'weather.home', state: 'cloudy', attributes: { temperature: 14, friendly_name: 'Home', temperature_unit: '°C', wind_speed_unit: 'km/h', pressure_unit: 'hPa', supported_features: 3 } } },
            config: { time_zone: 'UTC', unit_system: { temperature: '°C' } }, language: 'en', locale: { language: 'en', time_format: '24' },
            localize: () => '', formatEntityState: (s: { state: string }) => s.state,
            connection: { subscribeMessage: async (listener: (m: unknown) => void, message: { forecast_type: string }) => { listener({ type: message.forecast_type, forecast: message.forecast_type === 'hourly' ? forecast : null }); return () => {}; } },
        };
        const card = document.createElement('animated-weather-card') as HTMLElement & { setConfig(c: object): void; hass: unknown };
        card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', show_forecast: true });
        card.hass = hassCard;
        document.body.append(card);
        mounted.push(card);
        const end = Date.now() + 10_000;
        while (!card.querySelector('[data-fc-chips]') && Date.now() < end) await new Promise(r => setTimeout(r, 20));
        const chipsEl = card.querySelector('[data-fc-chips]') as HTMLElement;
        expect([...chipsEl.querySelectorAll('[role="radio"]')].map(e => e.getAttribute('data-metric'))).toEqual([...METRICS]);
        // jsdom lays out nothing, so the chips never find they're too many: mark the scroller as they would
        const scroller = chipsEl.querySelector('.fc-chips-scroll') as HTMLElement;
        scroller.classList.add('awc-noclaim');
        const swipe = (target: Element) => { const e = new WheelEvent('wheel', { deltaX: 40, deltaY: 0, bubbles: true, cancelable: true }); target.dispatchEvent(e); return e.defaultPrevented; };
        expect(swipe(chipsEl.querySelector('.fc-chip')!)).toBe(false);
        expect(swipe(card.querySelector('.fc-hourly')!)).toBe(true);
    });
});
