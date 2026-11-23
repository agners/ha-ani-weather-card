// One needle across the page. While a hand moves a card through the hours
// (the weather card's slide, or the forecast card's), the card tells the page
// which time its needle is on, and the cards that share its sun or its
// weather follow: the sun tracker's sun goes to that time, the forecast
// card's days show the day it falls in, and a forecast card without hours
// takes its sky and its weather, and a weather card without the forecast goes
// to that hour as a whole. When the card comes home, it says so once, and
// they come back to now.
//
// A window event, because the bundles don't share a module scope, with plain
// names on it. Only a slide sends, and a card that follows has no slide
// moving, so nothing echoes.

import type { EngineAmounts } from './types';

export const HOUR_EVENT = 'animated-weather-card-hour';

export interface HourLink {
    /** The card whose needle moved */
    source: HTMLElement;
    /** Its weather entity and its sun entity */
    entity: string;
    sun: string;
    /** The time under the needle in ms, continuous under the finger; null once the card is home */
    at: number | null;
    /** The temperature under the needle (now's reading at home, between two hours' values between them); null when unknown */
    temperature: number | null;
    /** The sky the card shows, as its five --awc-sky-* colours (top, mid, bottom, glow, scrim); null on the theme palette and at home */
    sky: Record<string, string> | null;
    /**
     * The weather the card shows there, each layer's strength from 0 to 1 (rain, snow, sleet, clouds, fog, wind,
     * lightning); null at home, and from a card that moves no weather (reduced motion, animate: false, a forecast card
     * without weather_effects). A card that follows without a slide of its own takes it (the forecast card's days).
     */
    weather?: Record<string, number> | null;
    /** The weather's amounts there (auto mode: how much rain, cloud, fog and wind); null at home, in manual and from a still card */
    amounts?: EngineAmounts | null;
}

/** Where each weather's needle is, as last sent from this bundle; none once its card is home */
const needles = new Map<string, HourLink>();

export function sendHour(link: HourLink): void {
    if (link.at === null) needles.delete(link.entity); else needles.set(link.entity, link);
    window.dispatchEvent(new CustomEvent(HOUR_EVENT, { detail: link }));
}

/** The needle on this weather now, if a card is away: a card that starts following starts there, even once it has stopped */
export function needleOn(entity: string): HourLink | undefined {
    return needles.get(entity);
}

/** Listen to every card's needle; returns the way to stop */
export function onHour(fn: (link: HourLink) => void): () => void {
    const handler = (e: Event) => {
        const link = (e as CustomEvent<HourLink>).detail;
        if (link && link.source) fn(link);
    };
    window.addEventListener(HOUR_EVENT, handler);
    return () => window.removeEventListener(HOUR_EVENT, handler);
}
