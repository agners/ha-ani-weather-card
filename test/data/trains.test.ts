import { describe, it, expect } from 'vitest';
import { formatDue, formatLine, readTrainRoutes, trainEntityList, trainRowsHtml } from '../../src/trains';
import { formatTime } from '../../src/localize';
import type { HomeAssistant } from '../../src/types';

const NOW = Date.parse('2026-11-13T08:00:00Z');
const at = (minutes: number) => new Date(NOW + minutes * 60_000).toISOString();

const sensor = (key: string) => `sensor.zurich_bern_${key}`;
const KEYS = ['departure0', 'departure1', 'departure2', 'platform', 'delay', 'line', 'transfers', 'destination'];

const makeHass = (states: Record<string, string>, registry = true): HomeAssistant => ({
    states: Object.fromEntries(Object.entries(states).map(([key, state]) => [sensor(key), {
        entity_id: sensor(key), state, attributes: { friendly_name: `Zürich HB Bern ${key}` },
    }])),
    entities: registry ? Object.fromEntries(KEYS.map(key => [sensor(key), {
        entity_id: sensor(key), device_id: 'dev1', platform: 'swiss_public_transport', translation_key: key,
    }])) : undefined,
    devices: registry ? { dev1: { name: 'Zürich HB Bern', name_by_user: null } } : undefined,
    locale: { language: 'en', time_format: '24' },
    config: { time_zone: 'UTC' },
} as unknown as HomeAssistant);

// Times are drawn in the browser's time zone
const clock = (minutes: number, hass: HomeAssistant) => formatTime(at(minutes), hass);

const full = { departure0: at(4), departure1: at(34), departure2: at(64), platform: '7', delay: '0', line: 'IC 1' };

describe('train departures', () => {
    it('takes one sensor or a list', () => {
        expect(trainEntityList('sensor.a')).toEqual(['sensor.a']);
        expect(trainEntityList(['sensor.a', '', 3, 'sensor.b'])).toEqual(['sensor.a', 'sensor.b']);
        expect(trainEntityList(undefined)).toEqual([]);
    });

    it('reads a connection from its departure sensor and the device\'s other sensors', () => {
        const [route] = readTrainRoutes(makeHass(full), sensor('departure0'), NOW);
        expect(route).toEqual({
            entity: sensor('departure0'), name: 'Zürich HB Bern',
            departures: [NOW + 4 * 60_000, NOW + 34 * 60_000, NOW + 64 * 60_000],
            line: 'IC 1', platform: '7', delayMin: 0, transfers: 0, destination: '',
        });
    });

    it('starts at the departure sensor it was given, without the first train\'s details', () => {
        const hass = makeHass({ ...full, delay: '3' });
        const [second] = readTrainRoutes(hass, sensor('departure1'), NOW);
        expect(second.departures).toEqual([NOW + 34 * 60_000, NOW + 64 * 60_000]);
        expect(second).toMatchObject({ entity: sensor('departure1'), line: '', platform: '', delayMin: 0, transfers: 0 });
        expect(readTrainRoutes(hass, sensor('departure2'), NOW)[0].departures).toEqual([NOW + 64 * 60_000]);
    });

    it('adds the delay to the first departure', () => {
        const [route] = readTrainRoutes(makeHass({ ...full, delay: '3' }), sensor('departure0'), NOW);
        expect(route.delayMin).toBe(3);
        expect(route.departures[0]).toBe(NOW + 7 * 60_000);
    });

    it('drops a train that has left, with its line and platform', () => {
        const [route] = readTrainRoutes(makeHass({ ...full, departure0: at(-2) }), sensor('departure0'), NOW);
        expect(route.departures).toEqual([NOW + 34 * 60_000, NOW + 64 * 60_000]);
        expect(route.line).toBe('');
        expect(route.platform).toBe('');
    });

    it('shows the one sensor it was given when the registry is not there', () => {
        const [route] = readTrainRoutes(makeHass(full, false), sensor('departure0'), NOW);
        expect(route.departures).toEqual([NOW + 4 * 60_000]);
        expect(route.name).toBe('Zürich HB Bern departure0');
    });

    it('leaves out a sensor that does not exist, and keeps one that is unavailable', () => {
        const hass = makeHass({ ...full, departure0: 'unavailable' });
        expect(readTrainRoutes(hass, 'sensor.nope', NOW)).toEqual([]);
        const [route] = readTrainRoutes(hass, sensor('departure0'), NOW);
        expect(route.departures).toEqual([NOW + 34 * 60_000, NOW + 64 * 60_000]);
    });

    it('counts down within the hour and shows the time beyond it', () => {
        const hass = makeHass(full);
        expect(formatDue(NOW + 20_000, NOW, hass)).toBe('<1 min');
        expect(formatDue(NOW + 4.9 * 60_000, NOW, hass)).toBe('4 min');
        expect(formatDue(NOW + 64 * 60_000, NOW, hass)).toBe(clock(64, hass));
        expect(clock(64, hass)).toMatch(/^\d\d:04$/);
    });

    it('draws a row per connection, escaping what it reads', () => {
        const hass = makeHass({ ...full, delay: '2', line: '<b>IC</b>' });
        const html = trainRowsHtml(readTrainRoutes(hass, sensor('departure0'), NOW), NOW, hass, 'Pl.');
        expect(html).toContain('<span class="train-due">6 min</span>');
        expect(html).toContain('&lt;b&gt;IC&lt;/b&gt;');
        expect(html).toContain('<span class="train-delay">+2′</span>');
        expect(html).toContain('<span class="train-platform">Pl. 7</span>');
        expect(html).toContain(`<span class="train-platform">Pl. 7</span><span class="train-time">${clock(6, hass)}</span>`
            + `<span class="train-later">${clock(34, hass)} · ${clock(64, hass)}</span>`);
    });

    it('reads a bus or tram line as a word and its number, and leaves trains alone', () => {
        expect(formatLine('B14')).toBe('Bus 14');
        expect(formatLine('NFB 1')).toBe('Bus 1');
        expect(formatLine('T9')).toBe('Tram 9');
        for (const line of ['S5', 'IC 1', 'IR70', 'BAT', 'B', '']) expect(formatLine(line)).toBe(line);
    });

    it('marks a first leg that has changes after it', () => {
        const hass = makeHass({ ...full, line: 'S5', transfers: '1' });
        const html = trainRowsHtml(readTrainRoutes(hass, sensor('departure0'), NOW), NOW, hass, 'Pl.', 'Transfers');
        expect(html).toContain('<span class="train-line">S5</span><span class="train-transfers" aria-label="Transfers: 1">+1</span>');
        const direct = makeHass({ ...full, transfers: '0' });
        expect(trainRowsHtml(readTrainRoutes(direct, sensor('departure0'), NOW), NOW, direct, 'Pl.')).not.toContain('train-transfers');
    });

    it('shows a departure over an hour away by its time once, not twice', () => {
        const hass = makeHass({ ...full, departure0: at(90), departure1: at(120), departure2: at(150) });
        const html = trainRowsHtml(readTrainRoutes(hass, sensor('departure0'), NOW), NOW, hass, 'Pl.');
        expect(html).toContain(`<span class="train-due">${clock(90, hass)}</span>`);
        expect(html).not.toContain('train-time');
    });

    it('names a stationboard\'s row after where its next departure is headed', () => {
        const hass = makeHass({ ...full, line: 'B1', destination: 'Obernau <Dorf>' });
        const [route] = readTrainRoutes(hass, sensor('departure0'), NOW);
        expect(route).toMatchObject({ line: 'Bus 1', destination: 'Obernau <Dorf>', transfers: 0 });
        expect(trainRowsHtml([route], NOW, hass, 'Pl.')).toContain(
            '<span class="train-name">Obernau &lt;Dorf&gt;</span>');
        // Not known for a row that starts later: the row keeps its own name
        const [second] = readTrainRoutes(hass, sensor('departure1'), NOW);
        expect(second.destination).toBe('');
        expect(trainRowsHtml([second], NOW, hass, 'Pl.')).toContain('<span class="train-name">Zürich HB Bern</span>');
    });

    it('draws a connection with no departures as a dash', () => {
        const hass = makeHass({ departure0: 'unknown' });
        const html = trainRowsHtml(readTrainRoutes(hass, sensor('departure0'), NOW), NOW, hass, 'Pl.');
        expect(html).toContain('<span class="train-due">--</span>');
        expect(html).not.toContain('train-later');
    });
});
