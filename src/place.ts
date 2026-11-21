// A card for another place (issues #34 and #35): its own sun and its own time zone.
//
// latitude and longitude give the card that place's sun, computed as Home Assistant's sun.sun would be there
// (solar.ts), and time_zone shows every time in that place's. The card reads all of it through one Home Assistant
// as seen from the place (`locate`): Home Assistant's own, with that sun among its states under a key made from the
// coordinates (so a tracker on the same place pairs with the weather card, as on the same sun entity), and the place's
// coordinates and time zone in its config, the profile set to the server's time. So the sky's phase, the sunset
// reading, the moon's hemisphere, the forecast's sun at any hour, the clock, the forecast's times and the tracker all
// follow without each reading its own option. A clear sky is named by the place's sun too: a weather entity for
// another place can say sunny or clear night by Home Assistant's own sun, which is home's, so the card's weather reads
// `clear-night` once the place's sun has set and `sunny` once it's up, as Home Assistant's own do at home.

import type { HomeAssistant, HassEntity } from './types';
import { solarState } from './solar';

/** A place's options, as a card's config has them */
export interface PlaceConfig {
    latitude?: number | string;
    longitude?: number | string;
    time_zone?: string;
}

export interface Place {
    latitude?: number;
    longitude?: number;
    timeZone?: string;
    /** The computed sun's key among the states, with coordinates */
    sunId?: string;
    /** Changes when the place does */
    key: string;
}

const number = (v: unknown): number => (typeof v === 'number' ? v : typeof v === 'string' && v.trim() ? Number(v) : NaN);

/**
 * The place a config names, or null for Home Assistant's own. Coordinates come together and in range, and the time
 * zone is one the browser knows (an IANA name, such as Europe/Rome); anything else throws, as a card config error
 */
export function placeOf(config: PlaceConfig): Place | null {
    const hasLat = config.latitude !== undefined && config.latitude !== null && config.latitude !== '';
    const hasLon = config.longitude !== undefined && config.longitude !== null && config.longitude !== '';
    const zone = typeof config.time_zone === 'string' && config.time_zone.trim() ? config.time_zone.trim() : undefined;
    if (!hasLat && !hasLon && !zone) return null;
    let latitude: number | undefined, longitude: number | undefined;
    if (hasLat || hasLon) {
        latitude = number(config.latitude);
        longitude = number(config.longitude);
        if (!hasLat || !hasLon) throw new Error('latitude and longitude go together: set both, or neither');
        if (!(latitude >= -90 && latitude <= 90)) throw new Error(`latitude must be a number between -90 and 90 (got ${config.latitude})`);
        if (!(longitude >= -180 && longitude <= 180)) throw new Error(`longitude must be a number between -180 and 180 (got ${config.longitude})`);
    }
    if (zone) {
        try { new Intl.DateTimeFormat('en', { timeZone: zone }); } catch { throw new Error(`time_zone must be a time zone name, such as Europe/Rome (got ${zone})`); }
    }
    const coord = (v: number) => String(Math.round(v * 1e4)).replace('-', 'm');
    const sunId = latitude !== undefined && longitude !== undefined ? `sun.awc_${coord(latitude)}_${coord(longitude)}` : undefined;
    return { latitude, longitude, timeZone: zone, sunId, key: `${sunId ?? ''}|${zone ?? ''}` };
}

/** Home Assistant as seen from a place, as `locate` makes it */
type Located = HomeAssistant & { awcPlace?: string; awcHome?: HomeAssistant };

/**
 * Home Assistant as seen from the place: its own, under the place's coordinates, time zone and computed sun. Reading
 * through it is reading Home Assistant (its states, services and connection are its own); only those differ. The
 * sun is the one passed (`sun`), so a card can keep one object for a minute. The weather entities named (`weather`,
 * the card's own) say `sunny` or `clear-night` by that sun, whatever their own says. Already seen from this place, it
 * stays
 */
export function locate(hass: HomeAssistant, place: Place, sun?: HassEntity, weather: readonly (string | undefined)[] = []): HomeAssistant {
    const seen = hass as Located;
    if (seen.awcPlace === place.key) return hass;
    const home = seen.awcHome ?? hass;
    const out = Object.create(home) as Located;
    if (place.sunId && sun) {
        const states = Object.create(home.states) as HomeAssistant['states'];
        states[place.sunId] = sun;
        const clear = sun.state === 'above_horizon' ? 'sunny' : 'clear-night';
        for (const id of weather) {
            const e = id ? home.states[id] : undefined;
            if (id && e && (e.state === 'sunny' || e.state === 'clear-night') && e.state !== clear) states[id] = { ...e, state: clear };
        }
        out.states = states;
    }
    out.config = {
        ...home.config,
        ...(place.latitude !== undefined ? { latitude: place.latitude, longitude: place.longitude } : {}),
        ...(place.timeZone ? { time_zone: place.timeZone } : {}),
    } as HomeAssistant['config'];
    // The card shows times in the server's zone when the profile says so: the place's is now that zone
    if (place.timeZone) out.locale = { ...(home.locale ?? {}), time_zone: 'server' } as HomeAssistant['locale'];
    out.awcPlace = place.key;
    out.awcHome = home;
    return out;
}

/** The place's sun now, as an entity like sun.sun */
export function placeSun(place: Place, now = new Date()): HassEntity | undefined {
    if (!place.sunId || place.latitude === undefined || place.longitude === undefined) return undefined;
    const s = solarState(place.latitude, place.longitude, now);
    const at = now.toISOString();
    return { entity_id: place.sunId, state: s.state, attributes: { ...s.attributes, friendly_name: 'Sun' }, last_changed: at, last_updated: at, context: { id: '', parent_id: null, user_id: null } } as unknown as HassEntity;
}

/**
 * One card's place: Home Assistant seen from it, with the computed sun kept for a minute (so an update within it
 * reads the same sun), and a tick each minute while the card is shown, since nothing pushes a computed sun
 */
export class PlaceView {
    place: Place | null = null;
    private sun?: { minute: number; entity: HassEntity };
    private timer = 0;

    /** `weather`: the card's weather entities, whose clear sky the place's sun names */
    constructor(private readonly weather: () => readonly (string | undefined)[] = () => []) {}

    /** Read the config's place (throws on a bad one); true when it changed */
    set(config: PlaceConfig): boolean {
        const place = placeOf(config);
        const changed = (place?.key ?? '') !== (this.place?.key ?? '');
        this.place = place;
        if (changed) this.sun = undefined;
        return changed;
    }

    /** Home Assistant as the card reads it: its own, or seen from the card's place */
    see(hass: HomeAssistant): HomeAssistant {
        if (!this.place) return hass;
        const minute = Math.floor(Date.now() / 60_000);
        if (this.place.sunId && this.sun?.minute !== minute) {
            const entity = placeSun(this.place);
            this.sun = entity ? { minute, entity } : undefined;
        }
        return locate(hass, this.place, this.sun?.entity, this.weather());
    }

    /** Each minute while there's a computed sun, `run` (the card reads Home Assistant again) */
    tick(run: () => void): void {
        this.stop();
        if (this.place?.sunId) this.timer = window.setInterval(run, 60_000);
    }

    stop(): void {
        if (this.timer) window.clearInterval(this.timer);
        this.timer = 0;
    }
}
