// A small drawing of each preset's layout, for the editor's Start from tiles: the card's frame in the theme's accent,
// its words as bars in the text's colour (`ink` the hero, `q` the quiet tier), and the sun as a faint disc. Inline
// SVG in currentColor, so it follows the theme, light or dark; the bedside's frame is the night's black with its red.

import type { PresetId } from './presets';

const svg = (body: string) => `<svg class="pre-art" viewBox="0 0 72 48" aria-hidden="true" focusable="false">${body}</svg>`;
const rect = (cls: string, x: number, y: number, w: number, h: number, r = 1) =>
    `<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/>`;
const sun = (cx: number, cy: number, r = 4) => `<circle class="sun" cx="${cx}" cy="${cy}" r="${r}"/>`;
/** Four readings in a row: a label over each value */
const readings = (y: number) => [10, 24, 38, 52].map(x => rect('q', x, y, 8, 2) + rect('ink', x, y + 3.5, 9, 2.5)).join('');
/** The hours: a line through their figures, with the hour's labels over it */
const hours = (x: number, y: number, w: number) => {
    const step = w / 5;
    const ys = [0, -1.5, -2.5, -1, 1, 0.5];
    const points = ys.map((dy, i) => `${(x + i * step).toFixed(1)},${(y + dy).toFixed(1)}`).join(' ');
    return ys.map((_, i) => rect('q', x + i * step - 1.5, y - 7, 3, 1.6, 0.8)).join('')
        + `<polyline class="line" points="${points}"/>`;
};
/** The week: a row a day, its name and its range bar */
const days = (x: number, y: number, w: number, n: number, gap = 4) =>
    Array.from({ length: n }, (_, i) => rect('q', x, y + i * gap, 6, 1.8) + rect('bar', x + 9, y + i * gap, w - 9, 1.8, 0.9)).join('');

export const PRESET_ART: Readonly<Record<PresetId, string>> = {
    standard: svg(rect('card', 4, 6, 64, 36, 4) + rect('ink', 10, 11, 15, 9) + rect('q', 10, 23, 13, 2.5) + sun(58, 14) + readings(31)),
    simple: svg(rect('card', 4, 6, 64, 36, 4) + rect('ink', 10, 13, 17, 11) + rect('q', 10, 28, 15, 2.5) + sun(58, 14)),
    forecast: svg(rect('card', 4, 2, 64, 44, 4) + rect('ink', 10, 6, 14, 8) + rect('q', 10, 16, 12, 2) + sun(58, 9, 3.5)
        + readings(21) + hours(12, 40, 48)),
    full: svg(rect('card', 4, 1, 64, 46, 4) + rect('q', 10, 5, 13, 1.8) + rect('ink', 10, 8, 13, 7) + rect('q', 10, 17, 11, 1.8)
        + sun(58, 8, 3.5) + hours(12, 28, 48) + days(10, 32, 50, 4, 3.6)),
    strip: svg(rect('card', 4, 17, 64, 14, 3.5) + rect('ink', 9, 20.5, 9, 7) + rect('q', 21, 22, 15, 1.8) + rect('q', 21, 25.5, 10, 1.6) + sun(60, 22, 3)),
    bedside: svg(rect('night', 4, 6, 64, 36, 4) + rect('red', 12, 15, 22, 11, 1.5) + rect('red-q', 12, 30, 18, 1.8)),
    wall: svg(rect('card', 2, 5, 68, 38, 4) + rect('q', 7, 9, 10, 1.8) + rect('ink', 7, 12, 14, 9) + rect('q', 7, 23, 11, 1.8)
        + sun(62, 12, 3.5) + hours(9, 37, 30) + days(46, 28, 20, 4, 3.4)),
};
