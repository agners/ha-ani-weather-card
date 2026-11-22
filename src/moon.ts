// The night sky's moon in its real phase (issue #12).
//
// The phase is the moon's age in its synodic month, worked out from the date. With a moon entity (the Moon
// integration's sensor, as the sun tracker reads), the age is kept inside the phase it names, so the drawing never
// says another phase than the tracker beside it. The card draws the lit part through a mask, and the rest as a faint
// disc of earthshine, so a new moon is a faint disc rather than an empty corner of the sky.
//
// The card's CSS (styles/card.ts) draws it: .moon-gsap is the earthshine, its ::after the lit texture through
// --awc-moon-mask (without mask support, an older browser shows the moon full, as it always was), and its ::before
// the halo, --awc-moon-halo. The card sets both on the sky's layer (applyMoon).

import { lookup } from './utils';

const SYNODIC_MONTH = 29.530588853;
/** A new moon: 6 January 2000, 18:14 UTC */
const A_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14);

/**
 * The Moon integration's eight phases, as the days of its 28-day cycle each one covers (Home Assistant's moon sensor
 * names astral's phase, 0 to 28, this way)
 */
const ENTITY_DAYS: Record<string, readonly [number, number]> = {
    new_moon: [-0.5, 0.5], waxing_crescent: [0.5, 6.5], first_quarter: [6.5, 7.5], waxing_gibbous: [7.5, 13.5],
    full_moon: [13.5, 14.5], waning_gibbous: [14.5, 20.5], last_quarter: [20.5, 21.5], waning_crescent: [21.5, 27.5],
};

/**
 * Where the moon is in its month, 0 to 1: 0 new, 0.25 first quarter, 0.5 full, 0.75 last quarter. From the date, kept
 * within the phase a moon entity names when it names one of the eight (any other state leaves the date's)
 */
export function moonCycle(date: Date, entityState?: string): number {
    const days = (date.getTime() - A_NEW_MOON) / 86_400_000;
    const p = (((days / SYNODIC_MONTH) % 1) + 1) % 1;
    const range = entityState ? lookup(ENTITY_DAYS, entityState) : undefined;
    if (!range) return p;
    let d = p * 28;
    if (d >= 27.5) d -= 28;
    d = Math.min(range[1], Math.max(range[0], d));
    return ((d / 28) % 1 + 1) % 1;
}

/** The phase the Moon integration would name on a date, as the dev card's moon sensor reads */
export function moonPhaseName(date: Date): string {
    let d = moonCycle(date) * 28;
    if (d >= 27.5) d -= 28;
    return Object.keys(ENTITY_DAYS).find(name => d >= ENTITY_DAYS[name][0] && d < ENTITY_DAYS[name][1]) ?? 'new_moon';
}

/** How much of the disc is lit, 0 to 1 */
export const moonLit = (cycle: number): number => (1 - Math.cos(2 * Math.PI * cycle)) / 2;

export interface MoonLook {
    /** A CSS mask for the lit part, the disc's 100 × 100 box */
    mask: string;
    /** The halo's box-shadow: as bright as the moon is lit, never gone */
    halo: string;
}

/**
 * How the moon looks in a phase. North of the equator a waxing moon is lit on the right; south of it, on the left.
 * The terminator is half an ellipse from the top of the disc to its bottom, bulging towards the lit side for a
 * crescent and away from it for a gibbous moon, softened a little as the real one is. The lit part runs past the
 * disc's edge, which the disc's own rounding cuts, so only the terminator is soft.
 */
export function moonLook(cycle: number, southern = false): MoonLook {
    const c = Math.cos(2 * Math.PI * cycle);
    const lit = (1 - c) / 2;
    const right = (cycle < 0.5) !== southern;
    const crescent = lit < 0.5;
    const rx = (Math.abs(c) * 50).toFixed(1);
    const sweep = right === crescent ? 1 : 0;
    const far = right ? 130 : -30;
    const path = `M50 -30L50 0A${rx} 50 0 0 ${sweep} 50 100L50 130L${far} 130L${far} -30Z`;
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><filter id='s' x='-1' y='-1' width='3' height='3'><feGaussianBlur stdDeviation='2.5'/></filter><path filter='url(#s)' d='${path}'/></svg>`;
    const s = 0.3 + 0.7 * lit;
    return {
        mask: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
        halo: `0 0 16px 2px rgba(226, 232, 255, ${(0.28 * s).toFixed(3)}), 0 0 56px 12px rgba(190, 206, 255, ${(0.12 * s).toFixed(3)})`,
    };
}
