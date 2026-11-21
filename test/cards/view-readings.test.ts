import { describe, it, expect, afterEach } from 'vitest';
import '../../src/animated-weather-card';
import '../../src/animated-weather-card-forecast';
import { FORECAST_CSS } from '../../src/fc-css';
import type { ForecastExtras } from '../../src/forecast-host';
import { holdNowHeight } from '../../src/fc-view';

// The readings in the view that opens on tap: every label and the line under a value shown whole, in any language, and a
// tablet's right column that scrolls when a station's readings make it taller than the panel, rather than spilling over
// its top. jsdom has no layout, so these hold the rules and the switch; the bench measures the layout in Chromium,
// WebKit and Firefox

type Card = HTMLElement & { setConfig(c: object): void; hass: unknown; openForecast(): void };
const mounted: HTMLElement[] = [];
afterEach(() => { for (const c of mounted.splice(0)) c.remove(); document.querySelector('.awc-view-host')?.remove(); });
const until = async (done: () => boolean, ms = 10_000) => {
    const end = Date.now() + ms;
    while (!done() && Date.now() < end) await new Promise(r => setTimeout(r, 20));
};

function hourly() {
    const start = new Date(); start.setMinutes(0, 0, 0);
    return Array.from({ length: 24 }, (_, i) => ({ datetime: new Date(start.getTime() + i * 3600_000).toISOString(), condition: 'rainy', temperature: 14, precipitation: 0.4 }));
}
function makeHass(language = 'en') {
    return {
        states: {
            'weather.home': { entity_id: 'weather.home', state: 'rainy', attributes: { temperature: 14, humidity: 90, wind_speed: 19, wind_gust_speed: 30, wind_speed_unit: 'km/h', friendly_name: 'Home', supported_features: 3 } },
        },
        config: { time_zone: 'UTC', unit_system: { temperature: '°C' } },
        language, locale: { language, time_format: '24' },
        localize: () => '',
        formatEntityState: (s: { state: string }) => s.state,
        connection: { subscribeMessage: async (listener: (m: unknown) => void, message: { forecast_type: string }) => { listener({ type: message.forecast_type, forecast: message.forecast_type === 'hourly' ? hourly() : [] }); return () => {}; } },
    };
}

/** Open the view on a card in a language; the grown card inside it */
async function openView(language: string): Promise<HTMLElement> {
    const card = document.createElement('animated-weather-card') as Card;
    card.setConfig({ entity: 'weather.home', show_forecast: true });
    document.body.append(card);
    card.hass = makeHass(language);
    mounted.push(card);
    await new Promise(r => setTimeout(r, 30));
    card.openForecast();
    await until(() => !!document.querySelector('.awc-view-host')?.shadowRoot?.querySelector('dialog')?.hasAttribute('open'));
    return document.querySelector('.awc-view-host')!.shadowRoot!.querySelector('.fv-sheet > animated-weather-card') as HTMLElement;
}

/** A rule's declarations, by its exact selector */
const rule = (selector: string) => {
    const at = FORECAST_CSS.indexOf(`${selector} {`);
    expect(at, selector).toBeGreaterThanOrEqual(0);
    return FORECAST_CSS.slice(at, FORECAST_CSS.indexOf('}', at));
};

describe('the view\'s readings', () => {
    it('shows each label whole, wrapping between words and hyphenating only a word too long for a line of its own', () => {
        const label = rule('.fv-rd-l');
        expect(label).not.toMatch(/nowrap|ellipsis/);
        expect(label).toMatch(/hyphens: auto/);
        expect(label).toMatch(/hyphenate-limit-chars: 12 5 5/);
        expect(label).toMatch(/-webkit-hyphenate-limit-before: 5/);
        expect(rule('.fv-rd em')).not.toMatch(/nowrap/);
        // A row of tiles shares its lines: each tile spans three rows as a subgrid, and its label ends on the first
        expect(FORECAST_CSS).toMatch(/@supports \(grid-template-rows: subgrid\) \{\s*\.fv-rd \{ display: grid; grid-row: span 3; grid-template-rows: subgrid; row-gap: 0; \}\s*\.fv-rd-l \{ align-self: end; \}/);
        expect(FORECAST_CSS).toMatch(/@supports not \(grid-template-rows: subgrid\) \{\s*\.fv-rd \{ align-self: end; \}/);
    });

    it('carries the language its words are in, for hyphenation, and keeps a gust\'s number with its unit', async () => {
        const de = await openView('de');
        expect(de.querySelector('.fv-now')?.getAttribute('lang')).toBe('de');
        const wind = [...de.querySelectorAll('.fv-rd')].find(r => r.querySelector('em')?.textContent?.startsWith('Böen'));
        expect(wind?.querySelector('em')?.textContent).toBe('Böen 30 km/h');
        document.querySelector('.awc-view-host')?.remove();
        // A language the forecast has no words in shows English words, so it breaks them as English
        expect((await openView('sv')).querySelector('.fv-now')?.getAttribute('lang')).toBe('en');
    });

    it('scrolls a tablet\'s right column only when it runs past the panel, and lets go when the readings fit again', async () => {
        const grown = await openView('en');
        const extras = (grown as unknown as { extras: ForecastExtras }).extras;
        const root = grown.querySelector('.animated-weather-card') as HTMLElement;
        const list = grown.querySelector('.fv-list') as HTMLElement;
        let width = 1000, content = 700;
        Object.defineProperty(root, 'clientWidth', { configurable: true, get: () => width });
        Object.defineProperty(list, 'clientHeight', { configurable: true, get: () => 642 });
        Object.defineProperty(list, 'scrollHeight', { configurable: true, get: () => content });
        extras.fitted();
        expect(list.hasAttribute('data-scrolls')).toBe(true);
        // Its 6 px top padding may run into the panel's margin, as it always could
        content = 648;
        extras.fitted();
        expect(list.hasAttribute('data-scrolls')).toBe(false);
        // A phone's view scrolls as a whole, as it always has
        content = 900; width = 600;
        extras.fitted();
        expect(list.hasAttribute('data-scrolls')).toBe(false);
        // The column can't grow past its area, and scrolling it keeps the button's focus ring
        expect(FORECAST_CSS).toMatch(/\.fv-list \{ grid-column: 2; grid-row: 1 \/ -1; box-sizing: border-box; padding: 6px 0 0; max-height: 100%;/);
        expect(rule('.fv-list[data-scrolls]')).toMatch(/overflow-y: auto; margin: 0 -6px; padding: 6px 6px 22px;/);
    });

    it('keeps now\'s height while the hours are browsed, so the week beside or above them never moves', () => {
        // jsdom lays nothing out, so a step through the hours never reaches an hour here: this holds the rule the view
        // applies at each hour and at now (the bench shows the week staying put in Chromium)
        const block = document.createElement('div');
        let height = 292;
        Object.defineProperty(block, 'offsetHeight', { configurable: true, get: () => height });
        holdNowHeight(block, true);
        expect(block.style.minHeight).toBe('292px');
        // At the next hour it keeps now's, whatever the hour before held
        height = 180;
        holdNowHeight(block, true);
        expect(block.style.minHeight).toBe('292px');
        // Back at now it has its own height again, nothing inline left
        holdNowHeight(block, false);
        expect(block.style.minHeight).toBe('');
        // A block with no height yet (not laid out) gets none
        height = 0;
        holdNowHeight(block, true);
        expect(block.style.minHeight).toBe('');
    });
});
