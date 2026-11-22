// The dev card's link to the cards (the main bundle; the dev bundle reads the same names). The dev card changes the
// world the cards see, never the cards: while its world is on, a card reads Home Assistant through it (lens), so its
// weather, the sun, the sensors it names, the forecast and the clock are the world's, and the card does what it would
// do in real life. Every name on window is plain, because the bundles don't share a module scope.

import type { HomeAssistant } from './types';
import type { DevClock } from './clock';
import { loadSiblingBundle } from './bundles';

/** The window event the world sends when it changes: every card reads Home Assistant again */
export const DEV_EVENT = 'animated-weather-card-dev';
/** The weather entity a dev_mode card without one of its own reads: the world's */
export const DEV_ENTITY = 'weather.awc_dev';

/** A card's options, as the world reads them: dev_mode, and the entities it names */
export type DevConfig = { readonly [key: string]: unknown; dev_mode?: boolean };

/** A card on the page, as the dev card sees it */
export interface DevCard extends HTMLElement {
    readonly devKind: 'weather' | 'forecast' | 'tracker';
    devConfig(): DevConfig | undefined;
    /** The weather and forecast cards: a plane over the card, and a manual pause */
    flyOver?(flights: import('./flight-tracker').FlightInfo[]): void;
    setAnimationsPaused?(paused: boolean): void;
    wasManuallyPaused?: boolean;
}

/** The world, set by the dev bundle while it's loaded */
export interface DevWorld extends DevClock {
    /** It's on for a card with these options: every card while a dev card drives them all, a dev_mode card always */
    wants(config: DevConfig): boolean;
    /** Home Assistant as the world shows it to a card with these options */
    lens(hass: HomeAssistant, config: DevConfig): HomeAssistant;
}

/** The dev card itself, the element Home Assistant makes: its options and Home Assistant as they arrive */
export interface DevCardShell extends HTMLElement {
    devCardConfig?: { readonly [key: string]: unknown };
    devCardHass?: HomeAssistant;
}

/** What the dev bundle draws in it */
export interface DevCardView {
    update(): void;
    connected(): void;
    disconnected(): void;
}

/** What the dev bundle sets when it loads */
export interface DevCards {
    attach(shell: DevCardShell): DevCardView;
}

/** Home Assistant as it came, under any lens (a lensed object carries its base, and so does a place's view of it) */
export function devBase(hass: HomeAssistant): HomeAssistant {
    return (hass as HomeAssistant & { awcDevBase?: HomeAssistant }).awcDevBase ?? hass;
}

/** Home Assistant as a card reads it: through the world when it's on for the card, else as it came */
export function devSee(hass: HomeAssistant, config: DevConfig | undefined): HomeAssistant {
    const base = devBase(hass);
    const world = window.AnimatedWeatherCardDev;
    if (!world || !config) return base;
    // Whatever goes wrong in the world, the card still reads Home Assistant
    try {
        return world.wants(config) ? world.lens(base, config) : base;
    } catch (err) {
        console.warn('Animated Weather Card: the dev card\'s world failed', err);
        return base;
    }
}

/** How far the dev card has moved the cards' clock: a card reads the time again when it changes */
export function devOffset(): number {
    return window.AnimatedWeatherCardDev?.offset ?? 0;
}

/** The cards on the page, for the dev card to count, pause and fly planes over */
export function devCards(): Set<DevCard> {
    return window.AnimatedWeatherCardsOnPage ??= new Set();
}

/** Load the world: a dev card, or a card in dev_mode, wants it */
export function loadDevWorld(): Promise<void> {
    if (window.AnimatedWeatherCardDevCards) return Promise.resolve();
    return loadSiblingBundle('animated-weather-card-dev', () => !!window.AnimatedWeatherCardDevCards);
}

/**
 * The dev card, as Home Assistant makes it: a shell that loads the dev bundle and hands itself over. It's not in the
 * card picker, whose live preview would take over the dashboard behind the dialog.
 */
export class AnimatedWeatherDevCard extends HTMLElement implements DevCardShell {
    devCardConfig?: { readonly [key: string]: unknown };
    devCardHass?: HomeAssistant;
    private view?: DevCardView;

    setConfig(config: { readonly [key: string]: unknown }): void {
        this.devCardConfig = { ...config };
        this.view?.update();
    }

    set hass(hass: HomeAssistant) {
        this.devCardHass = hass;
        this.view?.update();
    }

    connectedCallback(): void {
        if (this.view) { this.view.connected(); return; }
        loadDevWorld()
            .then(() => { if (this.isConnected && !this.view) this.view = window.AnimatedWeatherCardDevCards!.attach(this); })
            .catch((err: Error) => {
                console.warn(`Animated Weather Card: ${err.message}`);
                // A missing file, or one from an older build (the developer panel's), says so instead of drawing nothing
                if (!this.view) this.innerHTML = '<ha-card style="display:block;padding:16px;line-height:20px">The dev card needs animated-weather-card-dev.js from the same build, beside animated-weather-card.js. Copy it in, change the resource\'s ?v= and reload.</ha-card>';
            });
    }

    disconnectedCallback(): void {
        this.view?.disconnected();
    }

    getCardSize(): number {
        return 8;
    }

    getGridOptions() {
        return { columns: 12, rows: 'auto', min_columns: 6 };
    }
}
