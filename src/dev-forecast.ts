// The dev card's forecast (the dev bundle): how the world's weather goes on from now, ported from the demo's
// (demo/scene.mjs, sampleForecast). The temperature follows the sun around each day's mean, rain comes in bands whose
// chance builds and tails off, and everything else (feels like, wind, humidity, pressure, dew point, UV, cloud) moves
// with them. The days are read off the same hours, so the hours and the week agree. The sun is the real one where
// Home Assistant is (solar.ts), so the hours turn to night when your sky does. Metric throughout; the world converts.

import type { ForecastEntry } from './forecast-data';
import { solarElevation } from './solar';

const HOUR_MS = 3600_000;

/** The weather the dev card offers: Home Assistant's own conditions, a clear sky by day or night as one */
export const DEV_SKIES = ['clear', 'partlycloudy', 'cloudy', 'fog', 'windy', 'windy-variant', 'rainy', 'pouring', 'lightning', 'lightning-rainy', 'snowy', 'snowy-rainy', 'hail', 'exceptional'] as const;
export type DevSky = typeof DEV_SKIES[number];

/** What the card shows now, in °C, %, km/h, hPa */
export interface DevReading {
    temp: number;
    feels: number;
    humidity: number;
    wind: number;
    bearing: number;
    pressure: number;
}

type Step = readonly [number, string, number];

/**
 * How each weather goes on from now: from so many hours ahead, a weather and its chance of rain (%). Its last step
 * holds until tomorrow's own weather takes over (see DAY_HOURS).
 */
const STORIES: Record<string, readonly Step[]> = {
    clear: [[0, 'clear', 0], [5, 'partlycloudy', 5], [9, 'clear', 0]],
    partlycloudy: [[0, 'partlycloudy', 10], [2, 'cloudy', 25], [4, 'rainy', 70], [7, 'cloudy', 30], [8, 'partlycloudy', 15], [10, 'clear', 5]],
    cloudy: [[0, 'cloudy', 20], [6, 'partlycloudy', 10], [12, 'cloudy', 30]],
    fog: [[0, 'fog', 10], [3, 'cloudy', 10], [6, 'partlycloudy', 5]],
    rainy: [[0, 'rainy', 80], [2, 'pouring', 90], [4, 'rainy', 65], [6, 'cloudy', 35], [9, 'partlycloudy', 15]],
    pouring: [[0, 'pouring', 95], [2, 'rainy', 80], [4, 'rainy', 60], [6, 'cloudy', 35], [9, 'partlycloudy', 10]],
    lightning: [[0, 'lightning', 40], [2, 'lightning-rainy', 80], [3, 'rainy', 60], [5, 'cloudy', 30], [8, 'partlycloudy', 10]],
    'lightning-rainy': [[0, 'lightning-rainy', 90], [2, 'pouring', 85], [3, 'rainy', 65], [5, 'cloudy', 35], [8, 'partlycloudy', 10]],
    snowy: [[0, 'snowy', 80], [4, 'cloudy', 30], [9, 'snowy', 60], [12, 'cloudy', 25]],
    'snowy-rainy': [[0, 'snowy-rainy', 85], [3, 'rainy', 70], [5, 'cloudy', 30]],
    hail: [[0, 'hail', 70], [1, 'rainy', 60], [3, 'cloudy', 25], [6, 'partlycloudy', 10]],
    windy: [[0, 'windy', 10], [5, 'partlycloudy', 10], [9, 'clear', 0]],
    'windy-variant': [[0, 'windy-variant', 15], [5, 'cloudy', 15], [9, 'partlycloudy', 10]],
    exceptional: [[0, 'exceptional', 30], [3, 'cloudy', 30], [6, 'partlycloudy', 10]],
};

/** The days after today: each one's weather, and how much warmer or cooler than today it runs (°C) */
const WEEK: readonly (readonly [string, number])[] = [
    ['rainy', -2], ['partlycloudy', 0], ['clear', 2], ['clear', 3], ['cloudy', 1],
    ['lightning-rainy', 2], ['partlycloudy', 0], ['clear', 1], ['rainy', -2],
];

/** A day's weather hour by hour, by its local hour: a weather and its chance (%) */
const DAY_HOURS: Record<string, (h: number) => readonly [string, number]> = {
    clear: () => ['clear', 0],
    partlycloudy: h => (h >= 10 && h < 18 ? ['partlycloudy', 10] : ['clear', 5]),
    cloudy: h => ['cloudy', h >= 11 && h < 19 ? 25 : 15],
    rainy: h => (h >= 13 && h < 18 ? ['rainy', 75] : h >= 10 && h < 21 ? ['cloudy', 30] : ['partlycloudy', 15]),
    'lightning-rainy': h => (h >= 15 && h < 17 ? ['lightning-rainy', 85] : h >= 17 && h < 19 ? ['rainy', 65]
        : h >= 11 && h < 21 ? ['cloudy', 30] : ['partlycloudy', 10]),
    snowy: h => (h >= 9 && h < 14 ? ['snowy', 70] : ['cloudy', 25]),
    'snowy-rainy': h => (h >= 10 && h < 15 ? ['snowy-rainy', 70] : ['cloudy', 25]),
};

/** A cold day's rain falls as snow, or as sleet when it's near freezing */
function wintry(weather: string, mean: number): string {
    if (mean <= 1) return ({ rainy: 'snowy', pouring: 'snowy', 'lightning-rainy': 'snowy' } as Record<string, string>)[weather] ?? weather;
    if (mean <= 4) return ({ rainy: 'snowy-rainy', 'lightning-rainy': 'snowy-rainy' } as Record<string, string>)[weather] ?? weather;
    return weather;
}

/** How far the temperature swings either side of the day's mean, by the day's weather (°C) */
const SWING: Record<string, number> = { clear: 6, partlycloudy: 5, windy: 4, 'windy-variant': 3.5, cloudy: 3, fog: 2.5, rainy: 3, pouring: 2, lightning: 4, 'lightning-rainy': 3.5, snowy: 2, 'snowy-rainy': 2, hail: 3, exceptional: 3 };
/** How much of the sky each weather covers (%), and how far you can see in it (km) */
export const CLOUD: Record<string, number> = { clear: 4, partlycloudy: 45, windy: 30, 'windy-variant': 75, cloudy: 90, fog: 100, rainy: 95, pouring: 100, lightning: 85, 'lightning-rainy': 100, snowy: 95, 'snowy-rainy': 95, hail: 95, exceptional: 80 };
export const VISIBILITY: Record<string, number> = { clear: 24, partlycloudy: 22, windy: 20, 'windy-variant': 18, cloudy: 16, fog: 0.4, rainy: 8, pouring: 3, lightning: 10, 'lightning-rainy': 4, snowy: 2, 'snowy-rainy': 4, hail: 5, exceptional: 6 };
/** Millimetres an hour at the height of each kind of wet weather: where the card's auto amounts give each its usual look */
export const RATE: Record<string, number> = { rainy: 1.4, pouring: 10, 'lightning-rainy': 4, snowy: 0.8, 'snowy-rainy': 1.2, hail: 1.2 };
/** The wet weather that names a day with several, most serious first */
const SEVERITY = ['lightning-rainy', 'hail', 'pouring', 'snowy-rainy', 'snowy', 'rainy'];

const round1 = (n: number) => Math.round(n * 10) / 10;
const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));
const smooth = (t: number) => (1 - Math.cos(Math.PI * t)) / 2;

/** The dew point for a temperature and relative humidity (Magnus) */
export function dewPoint(t: number, rh: number): number {
    const g = Math.log(clamp(rh, 1, 100) / 100) + (17.62 * t) / (243.12 + t);
    return (243.12 * g) / (17.62 - g);
}

/** Home Assistant's condition: a clear sky is clear-night while the sun is down */
export const stateOf = (weather: string, day: boolean): string => weather === 'clear' ? (day ? 'sunny' : 'clear-night') : weather;

export interface DevForecastInput {
    sky: DevSky;
    /** The weather Home Assistant reports now */
    state: string;
    reading: DevReading;
    /** The sky's reading at the day's height, which puts today's mean where every time of day agrees on it */
    dayTemp: number;
    now: Date;
    latitude: number;
    longitude: number;
}

/**
 * The world's forecast from now, as weather/subscribe_forecast sends it: 48 hours from the one under way, and ten days
 * from today. The hour under way reads exactly what the card shows.
 */
export function devForecast({ sky, state, reading, dayTemp, now, latitude, longitude }: DevForecastInput): { hourly: ForecastEntry[]; daily: ForecastEntry[] } {
    const story = STORIES[sky] ?? STORIES.partlycloudy;
    const start = new Date(now.getTime());
    start.setMinutes(0, 0, 0);
    const midnight = new Date(start.getTime());
    midnight.setHours(0, 0, 0, 0);
    const dayOf = (t: number) => {
        const d = new Date(t);
        d.setHours(0, 0, 0, 0);
        return Math.round((d.getTime() - midnight.getTime()) / 86_400_000);
    };
    // The story holds until tomorrow's own weather takes over: at six in the morning, at least twelve hours on
    const six = new Date(midnight.getTime());
    six.setDate(six.getDate() + 1);
    six.setHours(6);
    const handover = Math.max(six.getTime(), start.getTime() + 12 * HOUR_MS);

    // Today's mean puts the day's reading (dayTemp) at 13:10, so the days read the same at every time of day. The
    // days after run warmer or cooler than today
    const clockOf = (t: number) => { const d = new Date(t); return d.getHours() + d.getMinutes() / 60; };
    const wave = (t: number) => Math.cos((2 * Math.PI * (clockOf(t) - 15)) / 24);
    const today = SWING[sky] ?? 4;
    const dayTime = new Date(midnight.getTime());
    dayTime.setHours(13, 10);
    const roughMean = dayTemp - today * wave(dayTime.getTime());
    const days = [{ weather: sky as string, mean: roughMean, swing: today }, ...WEEK.map(([weather, warmer]) => {
        const mean = roughMean + warmer;
        const kind = wintry(weather, mean);
        return { weather: kind, mean, swing: SWING[kind] ?? 4 };
    })];
    const across = (t: number, key: 'mean' | 'swing') => {
        const position = dayOf(t) + (clockOf(t) - 12) / 24;
        const a = clamp(Math.floor(position), 0, days.length - 1);
        const b = clamp(a + 1, 0, days.length - 1);
        return days[a][key] + (days[b][key] - days[a][key]) * smooth(position - Math.floor(position));
    };

    // Every hour from today's midnight for ten days: the weather and its chance first
    const times: number[] = [];
    for (let t = midnight.getTime(); dayOf(t) < days.length; t += HOUR_MS) times.push(t);
    const first = Math.max(0, times.findIndex(t => t + HOUR_MS > start.getTime()));
    const raw = times.map(t => {
        if (t < handover) {
            const ahead = Math.max(0, (t - start.getTime()) / HOUR_MS);
            let step = story[0];
            for (const s of story) if (ahead >= s[0]) step = s;
            return { weather: step[1], chance: step[2] };
        }
        const day = days[dayOf(t)] ?? days[days.length - 1];
        const [weather, chance] = (DAY_HOURS[day.weather] ?? DAY_HOURS.cloudy)(new Date(t).getHours());
        return { weather, chance };
    });
    const wet = raw.map(r => r.chance >= 50);
    // The chance builds over the two hours before a band and tails off over the two after; inside the band it's
    // lighter at the edges. The wet hours stay wet and the dry ones dry, so the turning line reads the band as written
    const chance = raw.map((r, i) => {
        const at = (k: number) => raw[i + k]?.chance ?? 0;
        if (wet[i]) {
            const before = !!wet[i - 1];
            const after = !!wet[i + 1];
            return clamp(r.chance + (before && after ? 5 : !before && after ? -10 : -5), 50, 100);
        }
        const near = Math.max(r.chance, 0.6 * at(1), 0.35 * at(2), 0.5 * at(-1), 0.25 * at(-2));
        return Math.min(45, Math.round(near / 5) * 5);
    });
    const amount = raw.map((r, i) => {
        if (!wet[i]) return chance[i] >= 35 ? 0.1 : 0;
        const before = !!wet[i - 1];
        const after = !!wet[i + 1];
        const shape = before && after ? 1 : !before && after ? 0.5 : before ? 0.6 : 0.7;
        return Math.max(0.1, round1((RATE[r.weather] ?? 1) * shape * (0.9 + 0.2 * Math.sin(i * 2.3))));
    });

    // The sun at the middle of each hour, where Home Assistant is
    const sunUp = times.map(t => solarElevation(new Date(t + HOUR_MS / 2), latitude, longitude));
    const isDay = (i: number) => sunUp[i] > -0.833;

    // The air: the temperature on its daily wave, a little cooler in the rain, and on the reading now: the difference
    // fades over the hours either side, so the curve stays the day's
    const wetness = (i: number) => (wet[i] ? 1 : wet[i - 1] || wet[i + 1] ? 0.4 : 0);
    const air = times.map((t, i) => across(t, 'mean') + across(t, 'swing') * wave(t) - 1.6 * wetness(i));
    const fade = (i: number, hours: number) => Math.exp(-Math.abs(i - first) / hours);
    const lift = reading.temp - air[first];
    const temperature = air.map((v, i) => v + lift * fade(i, 5));
    const storm = (i: number) => raw[i].weather.startsWith('lightning') || raw[i].weather === 'hail';
    const breeze = times.map((t, i) => 1 + 0.18 * Math.sin(i / 4.3) + 0.1 * Math.sin(i / 1.7) + 0.15 * wave(t)
        + (wet[i] ? 0.3 : 0) + (storm(i) ? 0.45 : 0) + (raw[i].weather.startsWith('windy') ? 0.3 : 0));
    const wind = breeze.map(b => Math.max(1, (reading.wind * b) / breeze[first]));
    const gust = wind.map((w, i) => w * 1.55 + (storm(i) ? 12 : wet[i] ? 5 : 0));
    const cloud = raw.map((r, i) => clamp(Math.round((CLOUD[r.weather] ?? 80) + 5 * Math.sin(i * 1.3)), 0, 100));
    const light = sunUp.map(e => Math.sin((Math.max(0, e) * Math.PI) / 180));
    const uv = times.map((_, i) => Math.round(8 * light[i] * (1 - (0.7 * cloud[i]) / 100)));
    // What it feels like moves on its own: warmer in the sun, cooler in the wind and the rain, and on the reading now
    const feelsBy = times.map((_, i) => (['clear', 'partlycloudy', 'windy'].includes(raw[i].weather) ? 1.6 * light[i] : 0)
        - (temperature[i] < 22 ? Math.max(0, (wind[i] - 8) / 6) : 0) - (wet[i] ? 0.8 : 0));
    const feelsLift = reading.feels - (reading.temp + feelsBy[first]);
    const feels = temperature.map((v, i) => v + feelsBy[i] + feelsLift * fade(i, 6));
    const moistBy = times.map((t, i) => -1.8 * (air[i] - across(t, 'mean')) + (wet[i] ? 14 : 0) + chance[i] / 6);
    const humidity = moistBy.map(v => clamp(Math.round(reading.humidity + v - moistBy[first]), 20, 100));
    // The pressure falls ahead of the rain and recovers after it
    const lowBy = chance.map((c, i) => -0.08 * (chance.slice(i + 1, i + 7).reduce((s, v) => s + v, 0) / 6) - 0.02 * c + 0.4 * Math.sin(i / 19));
    const pressure = lowBy.map(v => reading.pressure + v - lowBy[first]);
    const bearing = times.map((_, i) => Math.round((((reading.bearing ?? 270) + 28 * Math.sin(i / 11)) % 360 + 360) % 360));

    const hours: (ForecastEntry & { is_daytime: boolean })[] = times.map((t, i) => ({
        datetime: new Date(t).toISOString(),
        condition: stateOf(raw[i].weather, isDay(i)),
        temperature: round1(temperature[i]),
        apparent_temperature: round1(feels[i]),
        precipitation_probability: chance[i],
        precipitation: amount[i],
        wind_speed: round1(wind[i]),
        wind_gust_speed: round1(gust[i]),
        wind_bearing: bearing[i],
        humidity: humidity[i],
        dew_point: round1(dewPoint(temperature[i], humidity[i])),
        pressure: round1(pressure[i]),
        cloud_coverage: cloud[i],
        uv_index: isDay(i) ? Math.max(0, uv[i]) : 0,
        is_daytime: isDay(i),
    }));
    // The hour under way is now: exactly what the card shows
    hours[first] = {
        ...hours[first], condition: state, temperature: reading.temp, apparent_temperature: reading.feels,
        humidity: reading.humidity, wind_speed: reading.wind, pressure: reading.pressure,
    };

    // The days, read off their hours: the whole day's high and low, the chance at its highest, the rain added up, and
    // the weather that names it
    const daily: ForecastEntry[] = days.map((_, d) => {
        const own = hours.filter((_, i) => dayOf(times[i]) === d);
        const wetHours = own.filter(h => (h.precipitation_probability ?? 0) >= 50);
        const named = (list: typeof own) => {
            const counts = new Map<string, number>();
            for (const h of list) counts.set(h.condition ?? 'cloudy', (counts.get(h.condition ?? 'cloudy') ?? 0) + 1);
            return [...counts].sort((a, b) => b[1] - a[1])[0]?.[0];
        };
        const weather = wetHours.length
            ? SEVERITY.find(kind => wetHours.some(h => h.condition === kind)) ?? wetHours[0].condition
            : named(own.filter(h => h.is_daytime)) ?? named(own) ?? 'cloudy';
        const at = new Date(midnight.getTime());
        at.setDate(at.getDate() + d);
        const noon = own[12] ?? own[own.length - 1];
        const max = (k: keyof ForecastEntry) => Math.max(...own.map(h => Number(h[k] ?? 0)));
        const mean = (k: keyof ForecastEntry) => own.reduce((s, h) => s + Number(h[k] ?? 0), 0) / own.length;
        return {
            datetime: at.toISOString(),
            condition: weather === 'clear-night' ? 'sunny' : weather,
            temperature: round1(max('temperature')),
            templow: round1(Math.min(...own.map(h => Number(h.temperature)))),
            // Feels like as integrations report a day's: its highest
            apparent_temperature: round1(max('apparent_temperature')),
            precipitation_probability: max('precipitation_probability'),
            precipitation: round1(own.reduce((s, h) => s + Number(h.precipitation ?? 0), 0)),
            wind_speed: round1(max('wind_speed')),
            wind_gust_speed: round1(max('wind_gust_speed')),
            wind_bearing: noon.wind_bearing,
            uv_index: max('uv_index'),
            humidity: Math.round(mean('humidity')),
            // The day's means, as integrations that report them give them
            dew_point: round1(mean('dew_point')),
            pressure: round1(mean('pressure')),
            cloud_coverage: Math.round(mean('cloud_coverage')),
        };
    });
    return { hourly: hours.slice(first, first + 48), daily };
}
