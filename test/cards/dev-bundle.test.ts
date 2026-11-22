import { describe, it, expect, afterEach, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import '../../src/animated-weather-card';

// No dev bundle import here: this file checks the cards fetch it themselves.

describe('the dev bundle', () => {
    let card: HTMLElement & { setConfig(config: object): void };
    const devScripts = () => document.head.querySelectorAll('script[src*="animated-weather-card-dev"]');

    afterEach(() => {
        card?.remove();
        devScripts().forEach(s => s.remove());
        document.head.querySelectorAll('script[data-test-main]').forEach(s => s.remove());
        vi.useRealTimers();
    });

    function beside(): void {
        const main = document.createElement('script');
        main.dataset.testMain = '';
        main.src = 'https://ha.local/hacsfiles/ha-ani-weather-card/animated-weather-card.js?hacstag=123';
        document.head.appendChild(main);
    }

    async function mount(type: string, config: object): Promise<void> {
        vi.useFakeTimers();
        card = document.createElement(type) as typeof card;
        card.setConfig({ type: `custom:${type}`, ...config });
        document.body.appendChild(card);
        await vi.advanceTimersByTimeAsync(300);
    }

    it('is fetched once from beside the main bundle, with its cache buster, by the dev card or a card in dev mode', async () => {
        beside();
        await mount('animated-weather-dev-card', {});
        const [script] = devScripts() as unknown as HTMLScriptElement[];
        expect(script.src).toBe('https://ha.local/hacsfiles/ha-ani-weather-card/animated-weather-card-dev.js?hacstag=123');
        // The dev card draws nothing until it arrives
        expect(card.shadowRoot).toBeNull();
        const dev = card;
        await mount('animated-weather-card', { dev_mode: true });
        expect(devScripts()).toHaveLength(1);
        dev.remove();
    });

    it('is never requested for a normal card', async () => {
        await mount('animated-weather-card', { entity: 'weather.home' });
        expect(devScripts()).toHaveLength(0);
    });

    it('keeps the dev card and its world out of the main bundle', () => {
        const main = readFileSync(join(process.cwd(), 'animated-weather-card.js'), 'utf8');
        const dev = readFileSync(join(process.cwd(), 'animated-weather-card-dev.js'), 'utf8');
        // The world's sample notes and its forecast's stories
        for (const text of ['Sun with commitment issues', 'Hours and days']) {
            expect(dev).toContain(text);
            expect(main).not.toContain(text);
        }
    });

    it('isn\'t offered in the card picker, whose live preview would take over the dashboard', () => {
        expect(window.customCards.some(c => c.type === 'animated-weather-dev-card')).toBe(false);
        expect(customElements.get('animated-weather-dev-card')).toBeDefined();
    });
});
