import { describe, it, expect, vi } from 'vitest';
import {
    SKY_CONDITIONS, SKY_PHASES, SKY_TEXT, SKY_TEXT_SECONDARY_ALPHA, SKY_GLOW, SKY_GLOW_WIDE, SKY_GLOW_COMPACT,
    sampleSky, sampleSkyAt, oklchToSrgb, composite, contrastRatio, skyColors, generateSkyCss, toHex,
    DISSOLVING_PROPERTIES, dissolveTransition, SKY_DISSOLVE_SEC, SKY_DISSOLVE_EASE, SKY_LIGHT_MAX_PX, glowOn,
    type GlowGeometry,
} from '../../src/sky';
import { getMainCardStyles, CLOUD_OVERHANG_PX, UV_TINTS, AQI_TINTS, DEV_MARKER, SUN_TOP } from '../../src/styles/card';
import { GLYPH_CONTRAST } from '../../src/fc-glyphs';

const text = oklchToSrgb(SKY_TEXT);

/** Text color as rendered: primary, or secondary (primary at reduced opacity) over the sky. */
function rendered(bg: [number, number, number], secondary: boolean): [number, number, number] {
    return secondary ? composite(bg, text, SKY_TEXT_SECONDARY_ALPHA) : text;
}

// Vertical bands where text sits: the hero block (location, temperature,
// condition, feels-like) and the metric row at the bottom.
const HERO_BAND = [0.08, 0.2, 0.32, 0.44];
const METRIC_BAND = [0.72, 0.82, 0.92, 1];

describe('sky palettes', () => {
    for (const condition of SKY_CONDITIONS) {
        for (const phase of SKY_PHASES) {
            it(`${condition} / ${phase}: secondary text meets WCAG AA (4.5:1) wherever text sits`, () => {
                for (const y of [...HERO_BAND, ...METRIC_BAND]) {
                    const bg = sampleSky(condition, phase, y);
                    const ratio = contrastRatio(rendered(bg, true), bg);
                    expect(ratio, `${condition}/${phase} at y=${y}`).toBeGreaterThanOrEqual(4.5);
                }
            });
        }
    }

    // Text on the right-hand side sits inside the glow: the metric grid's
    // right column on narrow cards, the whole metric block on wide ones.
    const grid = (xs: number[], ys: number[]) => xs.flatMap(x => ys.map(y => [x, y] as const));
    const NARROW_RIGHT = grid([0.5, 0.6, 0.7, 0.8, 0.85], [0.6, 0.7, 0.8, 0.9, 0.95]);
    const WIDE_METRICS = grid([0.55, 0.65, 0.75, 0.85, 0.9], [0.5, 0.6, 0.7, 0.85]);
    // Compact strip: the temperature, condition and second line across the
    // left and middle at mid-height, with the sun's light on the right
    const COMPACT_TEXT = grid([0.05, 0.2, 0.35, 0.5, 0.6], [0.3, 0.4, 0.5, 0.6, 0.7]);

    for (const condition of SKY_CONDITIONS) {
        for (const phase of SKY_PHASES) {
            it(`${condition} / ${phase}: secondary text stays AA inside the glow (narrow, wide and compact layouts)`, () => {
                for (const [zone, points, glow] of [['narrow', NARROW_RIGHT, SKY_GLOW], ['wide', WIDE_METRICS, SKY_GLOW_WIDE], ['compact', COMPACT_TEXT, SKY_GLOW_COMPACT]] as const) {
                    for (const [x, y] of points) {
                        const bg = sampleSkyAt(condition, phase, x, y, glow);
                        const ratio = contrastRatio(rendered(bg, true), bg);
                        expect(ratio, `${condition}/${phase} ${zone} at x=${x}, y=${y}`).toBeGreaterThanOrEqual(4.5);
                    }
                }
            });
        }
    }

    // The note, measured in Chrome: under the hero on narrow cards, two lines
    // reaching almost across (0.44–0.62 of the height in 5- and 6-row frames
    // and masonry), into the glow; at the foot of the hero column on wide
    // ones. It's full-strength text: the secondary tint fails in the glow.
    const NARROW_NOTE = grid([0.05, 0.25, 0.45, 0.65, 0.85], [0.44, 0.5, 0.56, 0.62]);
    const WIDE_NOTE = grid([0.05, 0.2, 0.35, 0.5], [0.72, 0.8, 0.88]);

    for (const condition of SKY_CONDITIONS) {
        for (const phase of SKY_PHASES) {
            it(`${condition} / ${phase}: the note stays AA where it sits (narrow and wide layouts)`, () => {
                for (const [zone, points, glow] of [['narrow', NARROW_NOTE, SKY_GLOW], ['wide', WIDE_NOTE, SKY_GLOW_WIDE]] as const) {
                    for (const [x, y] of points) {
                        const bg = sampleSkyAt(condition, phase, x, y, glow);
                        const ratio = contrastRatio(rendered(bg, false), bg);
                        expect(ratio, `${condition}/${phase} ${zone} note at x=${x}, y=${y}`).toBeGreaterThanOrEqual(4.5);
                    }
                }
            });
        }
    }

    // The UV reading's icon in its level's colour, through the label's quiet tint, wherever the readings' icons sit, as
    // measured in Chrome: a narrow card's grid of two columns, from 0.40 of its height with the forecast on (over the
    // hourly row) to its foot; a row of four on a card 460 to 639 px wide, from 0.55; a wide card's two columns, from
    // 0.45 in a short frame; a wide card's row over the forecast. An icon: 3.2:1, as the forecast's are; the level's
    // word says it in the text's own colour
    const range = (from: number, to: number, step: number) => Array.from({ length: Math.round((to - from) / step) + 1 }, (_, i) => +(from + i * step).toFixed(3));
    const UV_ZONES = [
        ['narrow grid', grid(range(0.04, 0.58, 0.02), range(0.40, 0.95, 0.03)), SKY_GLOW],
        ['narrow row', grid(range(0.04, 0.88, 0.02), range(0.55, 0.95, 0.03)), SKY_GLOW],
        ['wide', grid(range(0.58, 0.85, 0.025), range(0.45, 0.9, 0.03)), SKY_GLOW_WIDE],
        ['wide over the forecast', grid(range(0.02, 0.9, 0.02), range(0.55, 0.65, 0.02)), SKY_GLOW_WIDE],
    ] as const;
    for (const [level, tint] of [...Object.entries(UV_TINTS).map(([l, t]) => [`UV ${l}`, t] as const), ...Object.entries(AQI_TINTS).map(([l, t]) => [`air quality ${l}`, t] as const)]) {
        it(`the icon at ${level} holds ${GLYPH_CONTRAST}:1 in every sky, wherever the readings sit`, () => {
            const rgb = [1, 3, 5].map(i => parseInt(tint.slice(i, i + 2), 16) / 255) as [number, number, number];
            let worst = Infinity, where = '';
            for (const condition of SKY_CONDITIONS) for (const phase of SKY_PHASES) {
                for (const [zone, points, glow] of UV_ZONES) {
                    for (const [x, y] of points) {
                        const bg = sampleSkyAt(condition, phase, x, y, glow);
                        const ratio = contrastRatio(composite(bg, rgb, SKY_TEXT_SECONDARY_ALPHA), bg);
                        if (ratio < worst) { worst = ratio; where = `${condition}/${phase} ${zone} at x=${x}, y=${y}`; }
                    }
                }
            }
            expect(worst, `worst at ${where}`).toBeGreaterThanOrEqual(GLYPH_CONTRAST);
        });
    }

    it('emits valid hex and rgba colors, never oklch()', () => {
        const c = skyColors('sunny', 'day');
        for (const hex of [c.top, c.mid, c.bottom]) expect(hex).toMatch(/^#[0-9a-f]{6}$/);
        for (const rgba of [c.glow, c.scrim]) expect(rgba).toMatch(/^rgba\(\d+, \d+, \d+, [\d.]+\)$/);
        expect(generateSkyCss()).not.toContain('oklch');
    });

    it('gives every condition a day rule and dawn / dusk / night overrides', () => {
        const css = generateSkyCss();
        for (const condition of SKY_CONDITIONS) {
            expect(css).toContain(`.animated-weather-card.${condition} {`);
            for (const phase of ['dawn', 'dusk', 'night']) {
                expect(css).toContain(`.animated-weather-card.${condition}[data-phase="${phase}"]`);
            }
        }
    });

    it('makes night skies darker than day skies', () => {
        for (const condition of SKY_CONDITIONS) {
            if (condition === 'clear-night') continue;
            const day = sampleSky(condition, 'day', 0.3);
            const night = sampleSky(condition, 'night', 0.3);
            expect(night.reduce((a, b) => a + b), condition).toBeLessThan(day.reduce((a, b) => a + b));
        }
    });

    it('converts OKLCH to sRGB correctly at the extremes', () => {
        expect(toHex(oklchToSrgb([1, 0, 0]))).toBe('#ffffff');
        expect(toHex(oklchToSrgb([0, 0, 0]))).toBe('#000000');
        // Out-of-gamut chroma is reduced, not clipped per channel.
        const vivid = oklchToSrgb([0.7, 0.4, 145]);
        for (const v of vivid) {
            expect(v).toBeGreaterThanOrEqual(0);
            expect(v).toBeLessThanOrEqual(1);
        }
    });
});

describe('time-of-day dissolve', () => {
    it('cross-fades the sun and cloud colors with the sky, on one symmetric curve', () => {
        for (const name of ['--awc-sky-top', '--weather-sun-primary', '--weather-sun-glow', '--awc-cloud-near']) {
            expect(DISSOLVING_PROPERTIES).toContain(name);
        }
        const transition = dissolveTransition();
        for (const name of DISSOLVING_PROPERTIES) {
            expect(transition).toContain(`${name} ${SKY_DISSOLVE_SEC}s ${SKY_DISSOLVE_EASE}`);
        }
        // Sine in-out: the curve's control points mirror each other
        const [x1, y1, x2, y2] = SKY_DISSOLVE_EASE.match(/[\d.]+/g)!.map(Number);
        expect(x1 + x2).toBeCloseTo(1);
        expect(y1 + y2).toBeCloseTo(1);
    });

    it('registers every dissolving color as a <color>', async () => {
        vi.resetModules();
        const registerProperty = vi.fn();
        (globalThis as { CSS?: unknown }).CSS = { registerProperty };
        const sky = await import('../../src/sky');
        sky.registerSkyProperties();
        const names = registerProperty.mock.calls.map(([def]) => def.name);
        expect(names).toEqual(sky.DISSOLVING_PROPERTIES);
        for (const [def] of registerProperty.mock.calls) expect(def.syntax).toBe('<color>');
        delete (globalThis as { CSS?: unknown }).CSS;
    });

    it('moves the sun down at dusk and below the horizon at night', () => {
        const css = getMainCardStyles();
        const lift = (phase: string) => Number(css.match(new RegExp(`\\[data-phase="${phase}"\\] \\.sun-track[^{]*\\{ transform: translateY\\(([\\d.]+)%\\)`))?.[1]);
        expect(lift('night')).toBeGreaterThan(lift('dusk'));
        expect(css).toMatch(/\[data-phase="dawn"\] \.sun-track/);
        expect(css).toMatch(/\.sun-track \{[^}]*transition: transform/);
    });

    it('keeps the sun and the moon where a five-row card has them on a taller card, unless the card places its own', () => {
        const css = getMainCardStyles();
        const top = `${SUN_TOP * 100}%`;
        // The sun, its setting and the slide's drop are shares of a track no taller than a five-row card
        expect(SKY_LIGHT_MAX_PX).toBe(5 * 56 + 4 * 8);  // a sections view's row is 56 px, its gap 8
        expect(css).toMatch(new RegExp(`\\.sun \\{[^}]*top: ${top};`));
        expect(css).toMatch(new RegExp(`\\.sun-track \\{[^}]*height: 100%;[^}]*max-height: ${SKY_LIGHT_MAX_PX}px;`));
        // The moon, which isn't on the track, no lower; where min() isn't known, a fifth of the card as before
        expect(css).toMatch(new RegExp(`\\.moon-gsap \\{[^}]*top: ${top};\\s*top: min\\(${top}, ${+(SUN_TOP * SKY_LIGHT_MAX_PX).toFixed(1)}px\\);`));
        // The compact strip, the wall and the view place them on the whole card
        expect(css).toMatch(/\[data-variant="compact"\] \.sun-track,\s*\.animated-weather-card\[data-wall-frame\] \.sun-track,\s*\.animated-weather-card\[data-fw\] \.sun-track,\s*\.animated-weather-card\[data-fc-view\] \.sun-track \{ max-height: none; \}/);
        expect(css).toMatch(new RegExp(`\\[data-wall-frame\\] \\.moon-gsap,\\s*\\.animated-weather-card\\[data-fw\\] \\.moon-gsap \\{ top: ${top}; \\}`));
    });

    it('gives a card taller than five rows a five-row card\'s glow, and no more light below its centre than the suites test', () => {
        const css = getMainCardStyles();
        // The light is painted in a box no taller than a five-row card, from the top, behind an @supports for min()
        // there; the compact strip, the wall, the view and the forecast card light the whole card
        expect(css).toContain('var(--awc-sky-glow-layer) 0 0 / var(--awc-sky-glow-box, 100% 100%) no-repeat,');
        expect(css).toMatch(new RegExp(`@supports \\(background-size: 100% min\\(100%, 1px\\)\\) \\{\\s*\\.sky \\{ --awc-sky-glow-box: 100% min\\(100%, ${SKY_LIGHT_MAX_PX}px\\); \\}`));
        expect(css).toMatch(/\[data-variant="compact"\] \.sky,\s*\.animated-weather-card\[data-wall-frame\] \.sky,\s*\.animated-weather-card\[data-fw\] \.sky,\s*\.animated-weather-card\[data-fc-view\] \.sky,\s*\.animated-weather-card\[data-fc-card\] \.sky \{ --awc-sky-glow-box: 100% 100%; \}/);
        // It fades out inside the box, so the box's foot never shows as an edge
        for (const g of [SKY_GLOW, SKY_GLOW_WIDE]) expect(g.cy + g.fade * g.ry).toBeLessThan(1);
        // Up to five rows, the glow is the one the suites read; taller, it's the five-row card's in px
        const dist = (g: GlowGeometry, x: number, y: number) => Math.hypot((x - g.cx) / g.rx, (y - g.cy) / g.ry);
        const steps = Array.from({ length: 51 }, (_, i) => i / 50);
        for (const g of [SKY_GLOW, SKY_GLOW_WIDE]) {
            expect(glowOn(g, 248)).toEqual(g);
            expect(glowOn(g, SKY_LIGHT_MAX_PX)).toEqual(g);
            for (const h of [313, 504, 760, 1000, 1400]) {
                const t = glowOn(g, h);
                expect(t.ry * h).toBeCloseTo(g.ry * SKY_LIGHT_MAX_PX, 6);
                expect(t.cy * h).toBeCloseTo(g.cy * SKY_LIGHT_MAX_PX, 6);
                // Below the light's centre as the suites place it, every point is further out of the drawn light, so
                // every zone they hold there holds on a tall card too; above it, forecast-contrast checks tall cards in px
                for (const x of steps) for (const y of steps) if (y >= g.cy) expect(dist(t, x, y)).toBeGreaterThanOrEqual(dist(g, x, y) - 1e-9);
            }
        }
    });
});

describe('spilled weather', () => {
    it('paints past the card without widening the page', () => {
        // Not paint containment, which would clip the spill to the card
        const rule = getMainCardStyles().match(/\.animated-weather-card\[data-spill\] \{([^}]*)\}/)![1];
        expect(rule).toContain('overflow: visible');
        expect(rule).toMatch(/contain: layout;/);
    });

    it('keeps fog, clouds and, in Firefox, leaves out of the page\'s size (issue #16: Firefox counts them despite the containment)', () => {
        const css = getMainCardStyles();
        // Fog and clouds never spill sideways: they clip their overflow, not only their paint
        expect(css).toMatch(/\.animation-container\.fog-container \{[^}]*clip-path: inset\(0 round[^}]*overflow: hidden;\s*overflow: clip;/);
        expect(css).toMatch(/\.clouds-container \{[^}]*overflow: hidden;\s*overflow: clip;/);
        // The clouds' overhang lives inside their container's box, so the clip leaves it showing
        expect(css).toMatch(/\[data-spill\] \.clouds-container \{[^}]*top: calc\(-1 \* var\(--awc-cloud-overhang\)\)/);
        // Leaves still blow out to the right, except in Firefox, where they'd widen the dashboard
        expect(css).toMatch(/\[data-spill\] \.wind-container \{\s*clip-path: inset\(0 -500px -200px 0\);/);
        expect(css).toMatch(/@supports \(-moz-appearance: none\) \{\s*\.animated-weather-card\[data-spill\] \.wind-container \{ overflow: clip; \}/);
    });
});

describe('the temperature\'s colour', () => {
    it('is custom_colors.temperature_color on either palette, else the text\'s, or the theme\'s accent on the theme palette', () => {
        const css = getMainCardStyles();
        expect(css).toMatch(/\.temperature \{[^}]*color: var\(--awc-hero-color, inherit\);/);
        expect(css).toMatch(/--awc-hero-color: var\(--primary-color, var\(--primary-text-color\)\);/);
        expect(css).toMatch(/\.animated-weather-card\.theme-colors \.temperature \{\s*color: var\(--awc-hero-color\);/);
    });
});

describe('clouds over the top edge', () => {
    const css = getMainCardStyles();

    it('stay in the rounded frame by default', () => {
        expect(css).toMatch(/\.clouds-container \{[^}]*clip-path: inset\(0 round var\(--ha-card-border-radius/);
    });

    it('rise past the top edge with spill, solid for the first half, and stay closed at the sides', () => {
        const rule = css.match(/\[data-spill\] \.clouds-container \{([^}]*)\}/)![1];
        expect(rule).toContain(`--awc-cloud-overhang: ${CLOUD_OVERHANG_PX}px`);
        expect(rule).toMatch(/top: calc\(-1 \* var\(--awc-cloud-overhang\)\)/);
        // Clipped flush at the sides and bottom (rounded bottom corners)
        expect(rule).toMatch(/clip-path: inset\(0 round 0 0 /);
        expect(rule).toMatch(/mask-image: linear-gradient\(to bottom, transparent 0, #000 calc\(var\(--awc-cloud-overhang\) \/ 2\)\)/);
    });

    it('on the theme palette, ride over twins in the card\'s fill, clipped to the card, shown only over an opaque fill', () => {
        // The twins' layer is the card's box, rounded as the card is, so no twin shows past its edge or corners
        expect(css).toMatch(/\.clouds-occluders \{[^}]*top: var\(--awc-cloud-overhang\);[^}]*clip-path: inset\(0 round calc\(var\(--ha-card-border-radius, 12px\) - var\(--ha-card-border-width, 1px\)\)\)/);
        expect(css).toMatch(/\.animated-weather-card:not\(\[data-occlude\]\) \.clouds-occluders \{ display: none; \}/);
        // They fade out with their clouds when the condition changes
        expect(css).toMatch(/\.condition-out \.cloud-occluder,/);
    });

    it('keep their positions relative to the card', () => {
        expect(css).toMatch(/\.clouds-layer \{[^}]*top: var\(--awc-cloud-overhang\)/);
    });
});

describe('the dev card\'s window', () => {
    // A band of the world's sky, zenith to the middle and no glow, with every word at full strength
    const hex = (h: string): [number, number, number] => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16) / 255) as [number, number, number];
    for (const condition of SKY_CONDITIONS) {
        for (const phase of SKY_PHASES) {
            it(`${condition} / ${phase}: its text holds 4.5:1 from the zenith to the middle`, () => {
                const { top, mid } = skyColors(condition, phase);
                for (const t of [0, 0.25, 0.5, 0.75, 1]) {
                    const bg = composite(hex(top), hex(mid), t);
                    expect(contrastRatio(text, bg), `${condition}/${phase} at ${t}`).toBeGreaterThanOrEqual(4.5);
                }
            });
        }
    }
});

describe('the dev_mode marker', () => {
    // Light text on a dark pill, over whatever is behind it: the brightest sky's glow, a light theme's white
    const hex = (h: string): [number, number, number] => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16) / 255) as [number, number, number];
    const ink = DEV_MARKER.ink.map(v => v / 255) as [number, number, number];
    it('holds 4.5:1 on white, and in every sky where it sits', () => {
        const behind: [number, number, number][] = [[1, 1, 1]];
        for (const condition of SKY_CONDITIONS) for (const phase of SKY_PHASES) behind.push(sampleSkyAt(condition, phase, 0.96, 0.05));
        for (const bg of behind) expect(contrastRatio(hex(DEV_MARKER.text), composite(bg, ink, DEV_MARKER.alpha))).toBeGreaterThanOrEqual(4.5);
        expect(DEV_MARKER.fill).toBe(`rgba(${DEV_MARKER.ink.join(', ')}, ${DEV_MARKER.alpha})`);
    });
});
