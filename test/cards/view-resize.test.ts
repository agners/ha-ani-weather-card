import { describe, it, expect, afterEach } from 'vitest';
import '../../src/animated-weather-card';
import '../../src/animated-weather-card-forecast';

// The view that opens on tap follows the window while it's open: a resize, or a tablet turned, re-fits its panel, and
// the next open is built for the new size. jsdom has no Web Animations, so the view opens and closes at once here

type Card = HTMLElement & { setConfig(c: object): void; hass: unknown; openForecast(): void };
const mounted: HTMLElement[] = [];
const sized = (w: number, h: number) => {
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: w });
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: h });
};
afterEach(() => {
    for (const c of mounted.splice(0)) c.remove();
    document.querySelectorAll('.awc-view-host').forEach(e => e.remove());
    sized(1024, 768);
});
const until = async (done: () => boolean, ms = 10_000) => {
    const end = Date.now() + ms;
    while (!done() && Date.now() < end) await new Promise(r => setTimeout(r, 20));
};
const frames = () => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

function hourly() {
    const start = new Date(); start.setMinutes(0, 0, 0);
    return Array.from({ length: 24 }, (_, i) => ({ datetime: new Date(start.getTime() + i * 3600_000).toISOString(), condition: 'rainy', temperature: 14 }));
}
const hass = {
    states: { 'weather.home': { entity_id: 'weather.home', state: 'rainy', attributes: { temperature: 14, humidity: 90, friendly_name: 'Home', supported_features: 3 } } },
    config: { time_zone: 'UTC', unit_system: { temperature: '°C' } },
    language: 'en', locale: { language: 'en', time_format: '24' },
    localize: () => '',
    formatEntityState: (s: { state: string }) => s.state,
    connection: { subscribeMessage: async (listener: (m: unknown) => void, message: { forecast_type: string }) => { listener({ type: message.forecast_type, forecast: message.forecast_type === 'hourly' ? hourly() : [] }); return () => {}; } },
};

const host = () => document.querySelector('.awc-view-host') as HTMLElement | null;
const dialog = () => host()?.shadowRoot?.querySelector('dialog') as HTMLDialogElement | null;
const grown = () => host()!.shadowRoot!.querySelector('.fv-sheet > animated-weather-card') as HTMLElement;
const sheet = () => host()!.shadowRoot!.querySelector('.fv-sheet') as HTMLElement;
const place = () => { const s = grown().style; return [s.left, s.top, s.width, s.height].join(' '); };

describe('the view on a window that changes', () => {
    it('re-fits its panel to the window while it\'s open, and is built afresh for the new size next time', async () => {
        sized(1024, 768);
        const card = document.createElement('animated-weather-card') as Card;
        card.setConfig({ entity: 'weather.home', show_forecast: true });
        document.body.append(card);
        card.hass = hass;
        mounted.push(card);
        await new Promise(r => setTimeout(r, 30));
        card.openForecast();
        await until(() => !!dialog()?.hasAttribute('open'));
        // A tablet's panel
        expect(place()).toBe('24px 24px 976px 720px');
        // Turned into a phone: the whole screen under the status bar, its top corners round
        sized(375, 812);
        window.dispatchEvent(new Event('resize'));
        expect(place()).toBe('0px 10px 375px 802px');
        expect(sheet().style.clipPath).toBe('inset(10.00px 0.00px 0.00px 0.00px round 24.0px 24.0px 0.0px 0.0px)');
        // A tablet turned upright: a panel again
        sized(768, 1024);
        window.dispatchEvent(new Event('resize'));
        await frames();
        expect(place()).toBe('24px 122px 720px 780px');
        // Closed, it stops following the window
        (grown().querySelector('.fv-close') as HTMLElement).click();
        await until(() => !dialog()?.hasAttribute('open'));
        const before = place();
        sized(1024, 768);
        window.dispatchEvent(new Event('resize'));
        expect(place()).toBe(before);
        // Opened again, it's built for the window it's in now
        card.openForecast();
        await until(() => !!dialog()?.hasAttribute('open'));
        expect(place()).toBe('24px 24px 976px 720px');
        expect(document.querySelectorAll('.awc-view-host')).toHaveLength(1);
    });
});
