// Train departures for the board under the metrics.
//
// Home Assistant's Swiss public transport integration (transport.opendata.ch)
// makes one device per connection, with sensors for the next three
// departures and for the first one's line, platform and delay. The card is
// given a departure sensor per connection and finds the others through the
// entity registry, so it asks the API for nothing itself: the integration
// already uses most of the API's daily allowance.
//
// Everything here is pure (no DOM), so it can be unit-tested.

import { HomeAssistant } from './types';
import { formatTime, LocaleSource } from './localize';
import { escapeHtml } from './utils';

const INTEGRATION = 'swiss_public_transport';
/** The integration's sensors, by their translation key */
// transfers, platform, delay and line are read by those names
const DEPARTURE_KEYS = ['departure0', 'departure1', 'departure2'];
/** A train is still listed this long after its departure: the sensors refresh every 90 s */
const DEPARTED_GRACE_MS = 30_000;
/** Departures further out than this show their time, not a countdown */
const COUNTDOWN_MAX_MIN = 59;

/** One connection's upcoming departures. */
export interface TrainRoute {
    /** The configured departure sensor, opened by a tap */
    entity: string;
    /** The connection, e.g. "Zürich HB Bern" */
    name: string;
    /** Upcoming departures as epoch ms, soonest first, the first one with its delay */
    departures: number[];
    /** The first departure's line, platform and delay; empty or 0 when unknown or it has left */
    line: string;
    platform: string;
    delayMin: number;
    /** Changes on the first departure's journey: its line is only the first leg's */
    transfers: number;
}

/** The connections the editor has pickers for; YAML can list more */
export const TRAIN_EDITOR_SLOTS = 4;

/**
 * The integration joins the API's category and number, so bus 14 arrives as
 * "B14" and tram 9 as "T9". Those read as a word and the number; a train's
 * line ("S5", "IC1") is already what the station shows.
 */
export function formatLine(line: string): string {
    const match = line.match(/^(B|BUS|NFB|T|TRAM|NFT)\s?(\d\w*)$/i);
    if (!match) return line;
    return `${/^(T|TRAM|NFT)$/i.test(match[1]) ? 'Tram' : 'Bus'} ${match[2]}`;
}

/** train_entities as a list: YAML takes one sensor or several */
export function trainEntityList(value: unknown): string[] {
    return (Array.isArray(value) ? value : typeof value === 'string' ? [value] : [])
        .filter((v): v is string => typeof v === 'string' && !!v);
}

type Siblings = Partial<Record<string, string>>;
// The registry object is replaced when it changes, so each lookup is made once per registry
const siblingCache = new WeakMap<object, Map<string, Siblings>>();

/** The connection's other sensors, keyed by translation key. */
function siblings(hass: HomeAssistant, entityId: string): Siblings {
    const registry = hass.entities;
    const deviceId = registry?.[entityId]?.device_id;
    if (!registry || !deviceId) return {};
    let cache = siblingCache.get(registry);
    if (!cache) siblingCache.set(registry, cache = new Map());
    let found = cache.get(entityId);
    if (!found) {
        found = {};
        for (const entry of Object.values(registry)) {
            if (entry.device_id === deviceId && entry.platform === INTEGRATION && entry.translation_key) {
                found[entry.translation_key] = entry.entity_id;
            }
        }
        cache.set(entityId, found);
    }
    return found;
}

const stateOf = (hass: HomeAssistant, entityId: string | undefined): string => {
    const state = entityId ? hass.states[entityId]?.state : undefined;
    return !state || state === 'unavailable' || state === 'unknown' ? '' : state;
};

const timeOf = (hass: HomeAssistant, entityId: string | undefined): number | null => {
    const time = Date.parse(stateOf(hass, entityId));
    return Number.isNaN(time) ? null : time;
};

/** Read each configured connection. One whose sensor is missing is left out. */
export function readTrainRoutes(hass: HomeAssistant | undefined, value: unknown, now: number): TrainRoute[] {
    if (!hass) return [];
    const routes: TrainRoute[] = [];
    for (const entity of trainEntityList(value)) {
        const state = hass.states[entity];
        if (!state) continue;
        const others = siblings(hass, entity);
        const device = hass.devices?.[hass.entities?.[entity]?.device_id || ''];

        // The row starts at the sensor it was given: the second departure's
        // sensor leaves the first train out, for a stop a few minutes' walk away
        const start = Math.max(0, DEPARTURE_KEYS.findIndex(key => others[key] === entity));

        // Line, platform and delay describe the first connection only
        const first = start === 0 ? timeOf(hass, others.departure0 || entity) : null;
        const delay = Number(stateOf(hass, others.delay));
        const delayMin = first !== null && Number.isFinite(delay) && delay > 0 ? Math.round(delay) : 0;
        const firstLive = first !== null && first + delayMin * 60_000 >= now - DEPARTED_GRACE_MS;
        const transfers = Number(stateOf(hass, others.transfers));

        const later = (others.departure0 ? DEPARTURE_KEYS.slice(Math.max(1, start)) : [])
            .map(key => timeOf(hass, others[key]))
            .filter((time): time is number => time !== null && time >= now - DEPARTED_GRACE_MS);
        const departures = [...(firstLive ? [first + delayMin * 60_000] : []), ...later].sort((a, b) => a - b);

        routes.push({
            entity,
            name: device?.name_by_user || device?.name || String(state.attributes?.friendly_name || entity),
            departures,
            line: firstLive ? formatLine(stateOf(hass, others.line)) : '',
            platform: firstLive ? stateOf(hass, others.platform) : '',
            delayMin: firstLive ? delayMin : 0,
            transfers: firstLive && Number.isFinite(transfers) && transfers > 0 ? Math.round(transfers) : 0,
        });
    }
    return routes;
}

/** "4 min" for a departure within the hour, "<1 min" as it leaves, else its time. */
export function formatDue(departure: number, now: number, hass?: LocaleSource): string {
    const minutes = Math.floor((departure - now) / 60_000);
    if (minutes < 1) return '<1 min';
    return minutes > COUNTDOWN_MAX_MIN ? formatTime(new Date(departure).toISOString(), hass) : `${minutes} min`;
}

/** The board's rows. platformLabel is the short word before a platform ("Pl."); transfersLabel names the "+1" after a line. */
export function trainRowsHtml(routes: TrainRoute[], now: number, hass: LocaleSource | undefined, platformLabel: string, transfersLabel = 'Transfers'): string {
    return routes.map(route => {
        const [next, ...later] = route.departures;
        const due = next === undefined ? '--' : formatDue(next, now, hass);
        const clock = (time: number) => formatTime(new Date(time).toISOString(), hass);
        // The next departure's time, beside its countdown; one over an hour away already shows it
        const nextTime = next !== undefined && clock(next) !== due ? clock(next) : '';
        const laterTimes = later.map(clock).join(' · ');
        return `<div class="train-row" data-entity="${escapeHtml(route.entity)}" role="button" tabindex="0">`
            + `<span class="train-due">${escapeHtml(due)}</span>`
            + (route.line ? `<span class="train-line">${escapeHtml(route.line)}</span>` : '')
            + (route.line && route.transfers ? `<span class="train-transfers" aria-label="${escapeHtml(transfersLabel)}: ${route.transfers}">+${route.transfers}</span>` : '')
            + `<span class="train-name">${escapeHtml(route.name)}</span>`
            + (route.delayMin ? `<span class="train-delay">+${route.delayMin}′</span>` : '')
            + (route.platform ? `<span class="train-platform">${escapeHtml(platformLabel)} ${escapeHtml(route.platform)}</span>` : '')
            + (nextTime ? `<span class="train-time">${escapeHtml(nextTime)}</span>` : '')
            + (laterTimes ? `<span class="train-later">${escapeHtml(laterTimes)}</span>` : '')
            + '</div>';
    }).join('');
}
