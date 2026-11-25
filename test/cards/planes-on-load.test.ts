import { describe, it, expect, afterEach, vi } from 'vitest';
import '../../src/animated-weather-card';

// planes_on_load (issue #36): the first look at the flights comes with the first hass update, before the planes
// bundle has loaded, so the planes already up have to wait for it, and for the card to be seen, rather than be lost.
// Its own file, so the planes bundle hasn't been asked for by another test.

type Card = HTMLElement & { setConfig(config: object): void; hass: unknown };
type Win = { AnimatedWeatherCardPlanes?: unknown };

class FakePlanes {
    static made: FakePlanes[] = [];
    flown: string[][] = [];
    constructor() {
        FakePlanes.made.push(this);
    }
    async start() {}
    async pause() {}
    async resume() {}
    async destroy() {}
    flyOver(flights: { id: string }[]) {
        this.flown.push(flights.map(f => f.id));
    }
}

const flight = (id: string, extra: object = {}) => ({ id, flight_number: id, aircraft_code: 'A20N', altitude: 12000, ground_speed: 300, heading: 90, on_ground: 0, ...extra });

const hass = (flights: object[]) => ({
    states: {
        'weather.home': { entity_id: 'weather.home', state: 'sunny', attributes: { temperature: 21, friendly_name: 'Home' } },
        'sun.sun': { entity_id: 'sun.sun', state: 'above_horizon', attributes: { elevation: 30, rising: false } },
        'sensor.flights': { entity_id: 'sensor.flights', state: String(flights.length), attributes: { flights } },
    },
    config: { time_zone: 'UTC' },
    language: 'en',
    localize: () => '',
});

function setHidden(hidden: boolean): void {
    Object.defineProperty(document, 'hidden', { configurable: true, get: () => hidden });
    document.dispatchEvent(new Event('visibilitychange'));
}

/** The planes bundle arrives: it registers itself, then its script's load fires */
async function bundleArrives(): Promise<void> {
    (window as unknown as Win).AnimatedWeatherCardPlanes = FakePlanes;
    const script = document.querySelector('script[src*="animated-weather-card-planes"]') as HTMLScriptElement;
    expect(script).not.toBeNull();
    script.onload?.(new Event('load'));
    await vi.advanceTimersByTimeAsync(50);
}

describe('planes_on_load', () => {
    let card: Card;

    afterEach(() => {
        card?.remove();
        setHidden(false);
        delete (window as unknown as Win).AnimatedWeatherCardPlanes;
        vi.useRealTimers();
    });

    it('flies the planes already up once the planes bundle has loaded, those still up, with what they report now', async () => {
        vi.useFakeTimers();
        FakePlanes.made = [];
        card = document.createElement('animated-weather-card') as Card;
        card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', flights_entity: 'sensor.flights', planes_on_load: true });
        // The first look, as a dashboard opens: three up, one on the ground
        card.hass = hass([flight('a'), flight('b'), flight('c'), flight('g', { on_ground: 1 })]);
        document.body.appendChild(card);
        await vi.advanceTimersByTimeAsync(500);
        // c lands while the bundle is on its way
        card.hass = hass([flight('a'), flight('b'), flight('g', { on_ground: 1 })]);
        await vi.advanceTimersByTimeAsync(50);
        expect(FakePlanes.made).toHaveLength(0);

        await bundleArrives();
        expect(FakePlanes.made).toHaveLength(1);
        expect(FakePlanes.made[0].flown).toEqual([['a', 'b']]);

        // Once only: a new arrival flies alone, and the first ones don't come round again
        card.hass = hass([flight('a'), flight('b'), flight('n')]);
        await vi.advanceTimersByTimeAsync(50);
        expect(FakePlanes.made[0].flown).toEqual([['a', 'b'], ['n']]);
    });

    it('waits for the card to be seen when it opens in a hidden tab', async () => {
        vi.useFakeTimers();
        setHidden(true);
        card = document.createElement('animated-weather-card') as Card;
        card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', flights_entity: 'sensor.flights', planes_on_load: true });
        card.hass = hass([flight('a')]);
        document.body.appendChild(card);
        await vi.advanceTimersByTimeAsync(500);
        // Bundle already registered by the test before: the planes start, paused
        FakePlanes.made = [];
        (window as unknown as Win).AnimatedWeatherCardPlanes = FakePlanes;
        setHidden(false);
        await vi.advanceTimersByTimeAsync(500);
        expect(FakePlanes.made.flatMap(p => p.flown)).toEqual([['a']]);
    });

    it('the view that opens on tap, built ahead and hidden, doesn\'t fly them again when it opens', async () => {
        vi.useFakeTimers();
        setHidden(true);
        FakePlanes.made = [];
        (window as unknown as Win).AnimatedWeatherCardPlanes = FakePlanes;
        card = document.createElement('animated-weather-card') as Card;
        (card as unknown as { surface: string }).surface = 'view';
        card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', flights_entity: 'sensor.flights', planes_on_load: true });
        card.hass = hass([flight('a')]);
        document.body.appendChild(card);
        await vi.advanceTimersByTimeAsync(500);
        setHidden(false);
        await vi.advanceTimersByTimeAsync(500);
        expect(FakePlanes.made.flatMap(p => p.flown)).toEqual([]);
    });

    it('without it, the planes already up stay where they are', async () => {
        vi.useFakeTimers();
        FakePlanes.made = [];
        (window as unknown as Win).AnimatedWeatherCardPlanes = FakePlanes;
        card = document.createElement('animated-weather-card') as Card;
        card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', flights_entity: 'sensor.flights' });
        card.hass = hass([flight('a')]);
        document.body.appendChild(card);
        await vi.advanceTimersByTimeAsync(500);
        expect(FakePlanes.made).toHaveLength(1);
        expect(FakePlanes.made[0].flown).toEqual([]);
    });
});
