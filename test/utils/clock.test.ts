import { describe, it, expect, afterEach } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import '../../src/animated-weather-card';
import { cardNow, cardDate } from '../../src/clock';
import { placeOf, placeSun } from '../../src/place';
import { solarState } from '../../src/solar';

// The cards' clock: what time it is in the cards' world. The dev card moves it by an offset, and everything that asks
// the time asks it, while how long something took stays on the real clock

const HOUR = 3600_000;
afterEach(() => { delete window.AnimatedWeatherCardDev; document.body.innerHTML = ''; });

describe('the cards\' clock', () => {
    it('is the real time until the dev card moves it, by whole minutes', () => {
        expect(Math.abs(cardNow() - Date.now())).toBeLessThan(50);
        window.AnimatedWeatherCardDev = { offset: 5 * HOUR };
        expect(Math.abs(cardNow() - (Date.now() + 5 * HOUR))).toBeLessThan(50);
        expect(Math.abs(cardDate().getTime() - (Date.now() + 5 * HOUR))).toBeLessThan(50);
    });

    it('moves the hero\'s time, a place\'s sun and the sun\'s position with it', async () => {
        window.AnimatedWeatherCardDev = { offset: 7 * HOUR };
        const at = new Date(Date.now() + 7 * HOUR);
        const card = document.createElement('animated-weather-card') as HTMLElement & { setConfig(c: object): void; hass: unknown };
        card.setConfig({ entity: 'weather.home', hero: 'clock' });
        document.body.append(card);
        card.hass = {
            states: { 'weather.home': { entity_id: 'weather.home', state: 'sunny', attributes: { temperature: 20, friendly_name: 'Home' } } },
            config: { time_zone: 'UTC', unit_system: { temperature: '°C' } },
            language: 'en', locale: { language: 'en', time_format: '24', time_zone: 'server' }, localize: () => '',
            formatEntityState: (s: { state: string }) => s.state,
        };
        await new Promise(r => setTimeout(r, 30));
        const hh = String(at.getUTCHours()).padStart(2, '0');
        expect(card.querySelector('.awc-hero-clock')?.textContent).toMatch(new RegExp(`^${hh}:`));

        const sydney = placeOf({ latitude: -33.87, longitude: 151.21 })!;
        const sun = placeSun(sydney)!;
        expect(sun.attributes.elevation).toBeCloseTo(solarState(-33.87, 151.21, at).attributes.elevation, 0);
        expect(solarState(-33.87, 151.21).attributes.elevation).toBeCloseTo(solarState(-33.87, 151.21, at).attributes.elevation, 0);
    });

    it('is the only way the cards ask the time: no bare Date.now() or new Date() outside timings', () => {
        // How long something took stays on the real clock: the note's typing, the clock's fade, the nightstand's hold,
        // the calendar's refresh. Anything else asks clock.ts
        const timings = [/readAt/, /darkSince/, /calendarRead/, /const start = Date\.now\(\)/, /Date\.now\(\) - start/, /step\(Date\.now\(\)\)/, /demo-\$\{Date\.now\(\)\}/];
        // The dev card and its world compare the cards' clock with the real one
        const exempt = new Set(['clock.ts', 'dev-world.ts', 'dev-card.ts']);
        const dir = join(__dirname, '../../src');
        const bare: string[] = [];
        for (const file of readdirSync(dir).filter(f => f.endsWith('.ts') && !exempt.has(f))) {
            readFileSync(join(dir, file), 'utf8').split('\n').forEach((line, i) => {
                if (/Date\.now\(\)|new Date\(\)/.test(line) && !timings.some(t => t.test(line))) bare.push(`${file}:${i + 1}: ${line.trim()}`);
            });
        }
        expect(bare).toEqual([]);
    });
});
