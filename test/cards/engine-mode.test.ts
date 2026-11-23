import { describe, it, expect, afterEach, vi } from 'vitest';
import '../../src/animated-weather-card';
import type { EngineAmounts } from '../../src/types';
import type { ForecastEntry } from '../../src/forecast-data';

const HOUR = 3_600_000;
type Card = HTMLElement & { setConfig(config: object): void; hass: unknown };
type Controller = { setAmounts(a: EngineAmounts | null): void; applyWeatherCondition(c: string): void; amountsAt?: (e: ForecastEntry) => EngineAmounts | undefined; amounts: EngineAmounts | null };

/** Hours from the one under way, each with its precipitation (mm) */
const hours = (rain: number[]): ForecastEntry[] => {
    const start = Math.floor(Date.now() / HOUR) * HOUR;
    return rain.map((precipitation, i) => ({ datetime: new Date(start + i * HOUR).toISOString(), condition: 'rainy', temperature: 12, precipitation, cloud_coverage: 90 }));
};

function makeHass({ state = 'rainy', attrs = {}, sensors = {}, hourly = [] as ForecastEntry[], subscribed = [] as string[] } = {}) {
    return {
        states: {
            'weather.home': {
                entity_id: 'weather.home', state,
                attributes: { temperature: 12, humidity: 80, wind_speed: 10, pressure: 1008, temperature_unit: '°C', wind_speed_unit: 'km/h', supported_features: 3, ...attrs },
            },
            ...Object.fromEntries(Object.entries(sensors).map(([id, s]) => [id, { entity_id: id, attributes: {}, ...(s as object) }])),
        },
        config: { time_zone: 'UTC', unit_system: { temperature: '°C', length: 'km' } },
        language: 'en', locale: { language: 'en', time_format: '24' },
        localize: () => '',
        formatEntityState: (s: { state: string }) => s.state,
        connection: {
            subscribeMessage: async (listener: (m: unknown) => void, message: { forecast_type: string }) => {
                subscribed.push(message.forecast_type);
                listener({ type: message.forecast_type, forecast: message.forecast_type === 'hourly' ? hourly : [] });
                return () => {};
            },
        },
    };
}

const cards: Card[] = [];
async function mount(config: object, hass: ReturnType<typeof makeHass>): Promise<Card> {
    const card = document.createElement('animated-weather-card') as Card;
    card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', ...config });
    card.hass = hass;
    document.body.appendChild(card);
    cards.push(card);
    await vi.advanceTimersByTimeAsync(500);
    return card;
}
const controllerOf = (card: Card) => (card as unknown as { animationController: Controller }).animationController;

afterEach(() => {
    for (const c of cards.splice(0)) c.remove();
    vi.useRealTimers();
});

describe('engine_mode on the card', () => {
    it('drives the weather from the weather\'s own values by default, and leaves a tuned card on its sliders', async () => {
        vi.useFakeTimers();
        const auto = await mount({}, makeHass({ attrs: { cloud_coverage: 100 }, state: 'cloudy' }));
        expect(controllerOf(auto).amounts?.clouds).toEqual([2, 2, 4]);
        const tuned = await mount({ engine_settings: { rainCount: 2 } }, makeHass({ attrs: { cloud_coverage: 100 }, state: 'cloudy' }));
        expect(controllerOf(tuned).amounts).toBeNull();
        const both = await mount({ engine_mode: 'auto', engine_settings: { rainCount: 2 } }, makeHass({ attrs: { cloud_coverage: 100 }, state: 'cloudy' }));
        expect(controllerOf(both).amounts?.clouds).toEqual([2, 2, 4]);
        const manual = await mount({ engine_mode: 'manual' }, makeHass({ attrs: { cloud_coverage: 100 }, state: 'cloudy' }));
        expect(controllerOf(manual).amounts).toBeNull();
    });

    it('follows a new cloud cover or rain rate in place, without starting the weather again', async () => {
        vi.useFakeTimers();
        const sensors = { 'sensor.rate': { state: '0.2', attributes: { unit_of_measurement: 'mm/h' } } };
        const card = await mount({ rain_rate_entity: 'sensor.rate' }, makeHass({ sensors }));
        const controller = controllerOf(card);
        expect(controller.amounts?.rain.kind).toBe('light');
        const apply = vi.spyOn(controller, 'applyWeatherCondition');
        const set = vi.spyOn(controller, 'setAmounts');
        card.hass = makeHass({ sensors: { 'sensor.rate': { state: '12', attributes: { unit_of_measurement: 'mm/h' } } } });
        await vi.advanceTimersByTimeAsync(500);
        expect(set).toHaveBeenLastCalledWith(expect.objectContaining({ rain: expect.objectContaining({ kind: 'pouring' }) }));
        expect(apply).not.toHaveBeenCalled();
    });

    it('reads the hour under way only in auto mode, and the next one when the hour turns', async () => {
        vi.useFakeTimers();
        vi.setSystemTime(Math.floor(Date.now() / HOUR) * HOUR + 50 * 60_000);
        const subscribed: string[] = [];
        const hourly = hours([0.3, 12]);
        await mount({ engine_mode: 'manual' }, makeHass({ hourly, subscribed }));
        expect(subscribed).not.toContain('hourly');
        const card = await mount({}, makeHass({ hourly, subscribed }));
        expect(subscribed).toContain('hourly');
        expect(controllerOf(card).amounts?.rain.kind).toBe('light');
        // Ten minutes on, the hour has turned: 12 mm
        await vi.advanceTimersByTimeAsync(11 * 60_000);
        expect(controllerOf(card).amounts?.rain.kind).toBe('pouring');
    });

    it('gives the slide each hour\'s amounts in auto mode, none in manual', async () => {
        vi.useFakeTimers();
        const card = await mount({}, makeHass());
        const at = controllerOf(card).amountsAt!;
        expect(at({ datetime: '', condition: 'pouring', precipitation: 0 })?.rain.kind).toBe('pouring');
        expect(at({ datetime: '', condition: 'cloudy', cloud_coverage: 0 })?.clouds).toEqual([1, 1, 2]);
        expect(at({ datetime: '', condition: 'rainy', precipitation: 0.2 })?.rain.kind).toBe('light');
        const manual = await mount({ engine_mode: 'manual' }, makeHass());
        expect(controllerOf(manual).amountsAt).toBeUndefined();
    });

    it('thins a still night\'s stars under cloud as a moving one\'s', async () => {
        vi.useFakeTimers();
        const card = await mount({ animate: false }, makeHass({ state: 'clear-night', attrs: { cloud_coverage: 50 } }));
        const bands = () => Array.from(card.querySelectorAll<HTMLElement>('.stars-band')).map(b => b.style.opacity);
        expect(bands()).toEqual(['', '0.4', '0', '0']);
        card.hass = makeHass({ state: 'clear-night', attrs: { cloud_coverage: 0 } });
        await vi.advanceTimersByTimeAsync(500);
        expect(bands()).toEqual(['', '', '', '']);
    });
});
