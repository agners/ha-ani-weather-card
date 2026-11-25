// The cards' clock (both bundles). Everything that asks what time it is in the cards' world asks here: the clock and
// the date, the forecast's hours and days, the tracker's now, the moon, a place's sun, the note's age. The dev card
// moves the cards through the day by setting an offset on window.AnimatedWeatherCardDev, a plain name because the
// bundles don't share a module scope, and never touches window.Date, which Home Assistant's frontend and GSAP read too.
// How long something took (a fade, a hold, a refresh interval) stays on Date.now().

/** What the clock reads from the dev card: how far it has moved the cards' time, a whole number of minutes in ms */
export interface DevClock {
    offset: number;
}

/** Now in the cards' world, in ms: the real time, moved by the dev card's offset */
export function cardNow(): number {
    return Date.now() + (typeof window === 'undefined' ? 0 : window.AnimatedWeatherCardDev?.offset ?? 0);
}

/** Now in the cards' world, as a Date */
export function cardDate(): Date {
    return new Date(cardNow());
}
