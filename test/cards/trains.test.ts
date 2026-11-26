import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import '../../src/animated-weather-card';

const NOW = Date.parse('2026-11-13T08:00:00Z');
const at = (minutes: number) => new Date(NOW + minutes * 60_000).toISOString();
const DEPARTURE = 'sensor.zurich_bern_departure';

const hass = (departure: string) => ({
    states: {
        'weather.home': {
            entity_id: 'weather.home', state: 'cloudy',
            attributes: { temperature: 15, humidity: 69, wind_speed: 16, pressure: 1008, temperature_unit: '°C' },
        },
        [DEPARTURE]: { entity_id: DEPARTURE, state: departure, attributes: { friendly_name: 'Zürich HB Bern Departure' } },
    },
    config: { time_zone: 'UTC' },
    language: 'en',
    localize: () => '',
});

type Card = HTMLElement & {
    setConfig(config: object): void; hass: unknown;
    getGridOptions(): { rows: number }; getCardSize(): number;
};

describe('departure board', () => {
    let card: Card;

    const mount = async (config: object) => {
        card = document.createElement('animated-weather-card') as Card;
        card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', ...config });
        card.hass = hass(at(5));
        document.body.appendChild(card);
        await vi.advanceTimersByTimeAsync(500);
    };
    const due = () => card.querySelector('.train-board .train-due')?.textContent;

    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(NOW);
    });

    afterEach(() => {
        card.remove();
        vi.useRealTimers();
    });

    it('has no board without train_entities, or on the compact strip', async () => {
        await mount({});
        expect(card.querySelector('.train-board')).toBeNull();
        expect(card.getGridOptions().rows).toBe(4);
        card.remove();
        await mount({ train_entities: DEPARTURE, compact: true });
        expect(card.querySelector('.train-board')).toBeNull();
    });

    it('lists the connection under the weather and asks for a row more', async () => {
        await mount({ train_entities: DEPARTURE });
        expect(card.querySelector('.weather-info + .train-board')).not.toBeNull();
        expect(due()).toBe('5 min');
        expect(card.getGridOptions().rows).toBe(5);
        expect(card.getCardSize()).toBe(6);
    });

    it('counts down between sensor updates, in place', async () => {
        await mount({ train_entities: [DEPARTURE] });
        const board = card.querySelector('.train-board');
        await vi.advanceTimersByTimeAsync(2 * 60_000);
        expect(due()).toBe('3 min');
        expect(card.querySelector('.train-board')).toBe(board);
    });

    it('follows the sensor, and stops counting once removed', async () => {
        await mount({ train_entities: DEPARTURE });
        card.hass = hass(new Date(Date.now() + 12 * 60_000).toISOString());
        expect(due()).toBe('12 min');
        card.remove();
        await vi.advanceTimersByTimeAsync(5 * 60_000);
        expect(due()).toBe('12 min');
    });

    it.each([
        ['one connection and a note', { note_entity: 'sensor.note', train_entities: [DEPARTURE] }, 9],
        ['three connections and a note', { note_entity: 'sensor.note', train_entities: [DEPARTURE, DEPARTURE, DEPARTURE] }, 10],
        ['three connections', { train_entities: [DEPARTURE, DEPARTURE, DEPARTURE] }, 10],
    ])('under the forecast, asks only for the rows the forecast leaves it short of: %s', async (_name, config, rows) => {
        await mount({ show_forecast: true, ...config });
        expect(card.getGridOptions().rows).toBe(rows);
    });

    it('opens the departure sensor on a tap', async () => {
        await mount({ train_entities: DEPARTURE });
        const opened: string[] = [];
        card.addEventListener('hass-more-info', (e) => opened.push((e as CustomEvent).detail.entityId));
        (card.querySelector('.train-row') as HTMLElement).click();
        expect(opened).toEqual([DEPARTURE]);
    });
});
