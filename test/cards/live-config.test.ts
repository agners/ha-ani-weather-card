import { describe, it, expect, afterEach, vi } from 'vitest';
import '../../src/animated-weather-card';

// Home Assistant hands a card already on the dashboard its new config (hui-card's _updateElement, when the dashboard
// changes on another screen), and wrapper cards re-send theirs. The card's weather must keep going through both.

type Card = HTMLElement & { setConfig(config: object): void; hass: unknown; config?: Record<string, unknown> };
type Controller = { animations: Record<string, { isActive: boolean }>; applyWeatherCondition(c: string): void };

const hass = (state = 'rainy') => ({
    states: {
        'weather.home': {
            entity_id: 'weather.home', state,
            attributes: { temperature: 12, humidity: 80, wind_speed: 10, pressure: 1008, temperature_unit: '°C', wind_speed_unit: 'km/h', friendly_name: 'Home' },
        },
    },
    config: { time_zone: 'UTC', unit_system: { temperature: '°C' } },
    language: 'en', locale: { language: 'en', time_format: '24' },
    localize: () => '',
    formatEntityState: (s: { state: string }) => s.state,
});

const cards: Card[] = [];
async function mount(config: object): Promise<Card> {
    const card = document.createElement('animated-weather-card') as Card;
    card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', ...config });
    card.hass = hass();
    document.body.appendChild(card);
    cards.push(card);
    await vi.advanceTimersByTimeAsync(500);
    return card;
}
const controller = (card: Card) => (card as unknown as { animationController: Controller }).animationController;
const active = (card: Card) => Object.entries(controller(card).animations).filter(([, a]) => a.isActive).map(([k]) => k);

afterEach(() => {
    for (const c of cards.splice(0)) c.remove();
    vi.useRealTimers();
});

describe('a new config on a card already on the dashboard', () => {
    it('draws the card again and starts its weather, with the new options', async () => {
        vi.useFakeTimers();
        const card = await mount({});
        expect(active(card)).toEqual(['rain']);
        card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', compact: true });
        await vi.advanceTimersByTimeAsync(500);
        expect(active(card)).toEqual(['rain']);
        expect(card.querySelector('.animated-weather-card')!.getAttribute('data-variant')).toBe('compact');
        expect(card.querySelectorAll('.raindrop').length).toBeGreaterThan(0);
    });

    it('leaves the weather alone when the same config comes again, as a wrapper card re-sends it', async () => {
        vi.useFakeTimers();
        const card = await mount({ name: 'Garden' });
        const before = controller(card);
        const drops = card.querySelector('.raindrop');
        expect(drops).not.toBeNull();
        card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', name: 'Garden' });
        await vi.advanceTimersByTimeAsync(500);
        // The same controller and the same drops, still falling
        expect(controller(card)).toBe(before);
        expect(card.querySelector('.raindrop')).toBe(drops);
        expect(active(card)).toEqual(['rain']);
    });

    it('takes new gestures and readings in place, its weather still falling', async () => {
        vi.useFakeTimers();
        const card = await mount({});
        const before = controller(card);
        const sky = card.querySelector('.animated-weather-card');
        const drop = card.querySelector('.raindrop');
        card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', tap_action: { action: 'none' }, readings: ['pressure', 'humidity'] });
        await vi.advanceTimersByTimeAsync(500);
        expect(controller(card)).toBe(before);
        expect(card.querySelector('.animated-weather-card')).toBe(sky);
        expect(card.querySelector('.raindrop')).toBe(drop);
        expect([...card.querySelectorAll('.attribute')].map(a => (a as HTMLElement).dataset.kind)).toEqual(['pressure', 'humidity']);
        expect(active(card)).toEqual(['rain']);
    });

    it('starts the weather of a config that arrives while the first is still starting', async () => {
        vi.useFakeTimers();
        const card = document.createElement('animated-weather-card') as Card;
        card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home' });
        card.hass = hass();
        document.body.appendChild(card);
        cards.push(card);
        await vi.advanceTimersByTimeAsync(50);
        card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', spill_particles: false });
        await vi.advanceTimersByTimeAsync(500);
        expect(active(card)).toEqual(['rain']);
    });
});
