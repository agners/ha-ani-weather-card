// The sun for a place from its coordinates (issues #34 and #35): NOAA's solar position algorithm, as the forecast's
// sun at any hour and the demo's real sun use it, and the sun as Home Assistant's sun.sun reports it, so a card for
// another place reads its own sun the way it reads yours. Good to a minute or so: sun.sun itself is computed.

import { cardDate } from './clock';

const RAD = Math.PI / 180;
const MINUTE = 60_000;
const DAY = 86_400_000;

/** The sun's declination (radians) and the equation of time (minutes) at a moment */
function solarTerms(ms: number): { declination: number; equationOfTime: number } {
    const t = (ms / DAY + 2440587.5 - 2451545) / 36525;
    const meanLong = (280.46646 + t * (36000.76983 + t * 0.0003032)) % 360;
    const meanAnomaly = 357.52911 + t * (35999.05029 - 0.0001537 * t);
    const eccentricity = 0.016708634 - t * (0.000042037 + 0.0000001267 * t);
    const centre = Math.sin(meanAnomaly * RAD) * (1.914602 - t * (0.004817 + 0.000014 * t))
        + Math.sin(2 * meanAnomaly * RAD) * (0.019993 - 0.000101 * t) + Math.sin(3 * meanAnomaly * RAD) * 0.000289;
    const omega = 125.04 - 1934.136 * t;
    const apparentLong = meanLong + centre - 0.00569 - 0.00478 * Math.sin(omega * RAD);
    const obliquity = 23 + (26 + (21.448 - t * (46.815 + t * (0.00059 - t * 0.001813))) / 60) / 60 + 0.00256 * Math.cos(omega * RAD);
    const declination = Math.asin(Math.sin(obliquity * RAD) * Math.sin(apparentLong * RAD));
    const y = Math.tan((obliquity / 2) * RAD) ** 2;
    const equationOfTime = (4 / RAD) * (y * Math.sin(2 * meanLong * RAD) - 2 * eccentricity * Math.sin(meanAnomaly * RAD)
        + 4 * eccentricity * y * Math.sin(meanAnomaly * RAD) * Math.cos(2 * meanLong * RAD)
        - 0.5 * y * y * Math.sin(4 * meanLong * RAD) - 1.25 * eccentricity * eccentricity * Math.sin(2 * meanAnomaly * RAD));
    return { declination, equationOfTime };
}

/** NOAA's solar elevation for a place, in degrees, with no refraction (sunrise and sunset are its -0.833°) */
export function solarElevation(date: Date, latitude: number, longitude: number): number {
    const { declination, equationOfTime } = solarTerms(date.getTime());
    const utcMinutes = date.getUTCHours() * 60 + date.getUTCMinutes() + date.getUTCSeconds() / 60 + date.getUTCMilliseconds() / 60_000;
    const hourAngle = ((((utcMinutes + equationOfTime + 4 * longitude) % 1440) + 1440) % 1440) / 4 - 180;
    const cosZenith = Math.sin(latitude * RAD) * Math.sin(declination) + Math.cos(latitude * RAD) * Math.cos(declination) * Math.cos(hourAngle * RAD);
    return 90 - Math.acos(Math.max(-1, Math.min(1, cosZenith))) / RAD;
}

/** A UTC day's solar noon at a longitude: 12:00 there, less the equation of time there and then; and the declination */
function solarNoon(day: number, longitude: number): { noon: number; declination: number } {
    const guess = day + (720 - 4 * longitude) * MINUTE;
    const { equationOfTime } = solarTerms(guess);
    const noon = day + (720 - 4 * longitude - equationOfTime) * MINUTE;
    return { noon, declination: solarTerms(noon).declination };
}

/** Where the sun's centre is when its top touches the horizon, refraction included */
const HORIZON = -0.833;

/**
 * Daylight on the day whose solar noon is nearest `at`, in minutes from sunrise to sunset: where solarElevation crosses
 * the horizon, found by halving the half day either side of noon, so it's as exact as solarElevation is, to the
 * second. `polar` when the sun neither rises nor sets that day: 0 through a polar night, 1440 through a polar day. A
 * day the sun only rises or only sets counts from or to the solar midnight beside it.
 */
export function daylight(latitude: number, longitude: number, at: number): { minutes: number; polar: boolean } {
    const day = Math.floor(at / DAY) * DAY;
    let noon = NaN;
    for (let d = -1; d <= 1; d++) {
        const n = solarNoon(day + d * DAY, longitude).noon;
        if (!(Math.abs(n - at) >= Math.abs(noon - at))) noon = n;
    }
    const up = (ms: number) => solarElevation(new Date(ms), latitude, longitude) > HORIZON;
    const start = noon - DAY / 2, end = noon + DAY / 2;
    const upAtStart = up(start), upAtEnd = up(end);
    if (!up(noon)) return { minutes: 0, polar: true };
    if (upAtStart && upAtEnd) return { minutes: 1440, polar: true };
    // Up at one end of the half day and down at the other: 24 halvings of 12 hours come to under 3 ms
    const cross = (down: number, upAt: number) => {
        for (let i = 0; i < 24; i++) {
            const mid = (down + upAt) / 2;
            if (up(mid)) upAt = mid; else down = mid;
        }
        return (down + upAt) / 2;
    };
    const rise = upAtStart ? start : cross(start, noon);
    const set = upAtEnd ? end : cross(end, noon);
    return { minutes: (set - rise) / MINUTE, polar: false };
}

/**
 * How much longer today's daylight is than `back` days before it, in whole seconds (shorter is negative): today being
 * the day whose solar noon is nearest `noon`, best the place's local noon, so the figure holds all day. Nothing for a
 * polar day or night; a day before it that was one counts as 0 or 24 hours.
 */
export function daylightChange(latitude: number, longitude: number, noon: number, back: number): number | null {
    const today = daylight(latitude, longitude, noon);
    if (today.polar) return null;
    return Math.round((today.minutes - daylight(latitude, longitude, noon - back * DAY).minutes) * 60);
}

/** What sun.sun's attributes hold, for a place: the next of each event (ISO), where the sun is and which way it's going */
export interface SolarState {
    state: 'above_horizon' | 'below_horizon';
    attributes: {
        next_dawn: string | null;
        next_dusk: string | null;
        next_midnight: string | null;
        next_noon: string | null;
        next_rising: string | null;
        next_setting: string | null;
        elevation: number;
        rising: boolean;
    };
}

/**
 * The sun at a place now, as sun.sun reports it. Each day's solar noon, from the place's longitude and the equation
 * of time; sunrise and sunset where the sun is 0.833° under the horizon, first and last light at 6° (civil
 * twilight), each the hour angle either side of noon. The next of each, from the days around now. Where the sun
 * never sets or never rises those days (a polar day or night), there's no next sunrise or sunset; its place over
 * the horizon still says which.
 */
export function solarState(latitude: number, longitude: number, now = cardDate()): SolarState {
    const t = now.getTime();
    const today = Math.floor(t / DAY) * DAY;
    const events: Record<'noon' | 'midnight' | 'rising' | 'setting' | 'dawn' | 'dusk', number[]> = { noon: [], midnight: [], rising: [], setting: [], dawn: [], dusk: [] };
    const phi = latitude * RAD;
    for (let d = -1; d <= 2; d++) {
        const { noon, declination } = solarNoon(today + d * DAY, longitude);
        events.noon.push(noon);
        events.midnight.push(noon + DAY / 2);
        for (const [angle, up, down] of [[-0.833, 'rising', 'setting'], [-6, 'dawn', 'dusk']] as const) {
            const cosH = (Math.sin(angle * RAD) - Math.sin(phi) * Math.sin(declination)) / (Math.cos(phi) * Math.cos(declination));
            if (!(Math.abs(cosH) <= 1)) continue;
            const minutes = (Math.acos(cosH) / RAD) * 4;
            events[up].push(noon - minutes * MINUTE);
            events[down].push(noon + minutes * MINUTE);
        }
    }
    const next = (list: number[]): number | null => list.filter(e => e > t).sort((a, b) => a - b)[0] ?? null;
    const iso = (ms: number | null) => (ms === null ? null : new Date(ms).toISOString());
    const elevation = solarElevation(now, latitude, longitude);
    const rise = next(events.rising), set = next(events.setting);
    const noon = next(events.noon), midnight = next(events.midnight);
    // Above the horizon when its next crossing is a sunset; with neither, by its height
    const above = set !== null && rise !== null ? set < rise : set !== null ? true : rise !== null ? false : elevation > -0.833;
    return {
        state: above ? 'above_horizon' : 'below_horizon',
        attributes: {
            next_dawn: iso(next(events.dawn)), next_dusk: iso(next(events.dusk)),
            next_midnight: iso(midnight), next_noon: iso(noon),
            next_rising: iso(rise), next_setting: iso(set),
            elevation: Math.round(elevation * 100) / 100,
            // On its way up between solar midnight and noon, as sun.sun's rising
            rising: noon !== null && midnight !== null ? noon < midnight : false,
        },
    };
}
