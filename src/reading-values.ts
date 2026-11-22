// What each reading in the list says (readings.ts), in the card's words: its label, its icon, its value, and for the
// UV index and air quality, the level that colours the icon. Each reads its row's own entity: a sensor's state in its
// unit, a weather entity's attribute in that entity's units, or with none, the card's weather entity.

import type { AnimatedWeatherCardConfig, HomeAssistant, HassEntity } from './types';
import type { Reading, ReadingType } from './readings';
import { WEATHER_ATTRIBUTE, aqiLevel, aqiLevels, AqiLevel } from './readings';
import type { IconName } from './icons';
import { cardLocalize, escapeHtml, formatLocalizedNumber, lookup } from './utils';
import { CardString, formatTime, localizeString, timeHtml } from './localize';
import { formatRain, rainLabel, rainSensor, temperatureDecimals, uvReading, windBearingOf } from './weather-data';

export interface ReadingView {
    label: string;
    icon: IconName;
    /** The value as markup: escaped text, or the sun's time with its period */
    html: string;
    /** The value as text, and for UV and air quality its figure and its level's word apart (the view's tiles) */
    text: string;
    value?: string;
    word?: string;
    /** UV and air quality: the level its icon is coloured by */
    level?: string | null;
    /** wind: the bearing its arrow points from */
    bearing?: number | null;
    /** pressure: the number its trend is measured against */
    pressure?: number | null;
}

const num = (raw: unknown): number | null => {
    if (raw === null || raw === undefined || raw === '') return null;
    const n = typeof raw === 'number' ? raw : parseFloat(String(raw));
    return isFinite(n) ? n : null;
};

/** The weather entity a row reads its attribute from: its own entity when that's a weather entity, else the card's */
const weatherOf = (hass: HomeAssistant | undefined, config: AnimatedWeatherCardConfig, r: Reading): HassEntity | undefined => {
    const id = r.entity?.startsWith('weather.') ? r.entity : config.entity;
    return id ? hass?.states[id] : undefined;
};
/** The row's sensor, when it names one */
const sensorOf = (hass: HomeAssistant | undefined, r: Reading): HassEntity | undefined =>
    r.entity && !r.entity.startsWith('weather.') ? hass?.states[r.entity] : undefined;

/** A number and its unit: from the sensor (its unit_of_measurement) when it has a number, else the weather's attribute */
function source(hass: HomeAssistant | undefined, config: AnimatedWeatherCardConfig, r: Reading, unitAttr?: string, fallbackUnit = ''): { value: number | null; unit: string } {
    const s = sensorOf(hass, r);
    const sv = num(s?.state);
    if (sv !== null) return { value: sv, unit: typeof s?.attributes?.unit_of_measurement === 'string' ? s.attributes.unit_of_measurement : fallbackUnit };
    // A sensor named but not reporting yet shows "--", not the weather's own value under the sensor's name
    if (r.entity && !r.entity.startsWith('weather.')) return { value: null, unit: '' };
    const w = weatherOf(hass, config, r);
    const attr = lookup(WEATHER_ATTRIBUTE as Record<string, string>, r.type);
    const unit = unitAttr ? w?.attributes?.[unitAttr] : undefined;
    return { value: num(attr ? w?.attributes?.[attr] : undefined), unit: typeof unit === 'string' ? unit : fallbackUnit };
}

const withUnit = (text: string, unit: string) => (unit ? `${text} ${unit}` : text);
const dash = '--';

/** A Home Assistant label where its frontend has one, else the card's own */
const haLabel = (hass: HomeAssistant | undefined, key: string, own: CardString) => cardLocalize(hass, `ui.card.weather.attributes.${key}`, localizeString(hass, own));

/** A sensor's icon by its device class; a plain dial for anything else */
const DEVICE_ICONS: Record<string, IconName> = {
    temperature: 'thermometer', apparent_temperature: 'thermometer', humidity: 'humidity', moisture: 'humidity',
    pressure: 'pressure', atmospheric_pressure: 'pressure', wind_speed: 'wind', precipitation: 'rain', precipitation_intensity: 'rain',
    illuminance: 'noon', irradiance: 'noon', aqi: 'aqi', pm25: 'aqi', pm10: 'aqi', pm1: 'aqi', carbon_dioxide: 'aqi', carbon_monoxide: 'aqi',
    nitrogen_dioxide: 'aqi', ozone: 'aqi', sulphur_dioxide: 'aqi', volatile_organic_compounds: 'aqi', volatile_organic_compounds_parts: 'aqi', distance: 'eye',
};

/** A level's word in the card's language ("Good", "Moderate") */
export const aqiWord = (hass: HomeAssistant | undefined, level: AqiLevel): string => localizeString(hass, `aqi_${level}` as CardString);

/** The sun's row: the next sunset by day, the next sunrise by night, from sun_entity */
function sunView(hass: HomeAssistant | undefined, config: AnimatedWeatherCardConfig): ReadingView {
    const sun = config.sun_entity ? hass?.states[config.sun_entity] : undefined;
    const day = sun?.state === 'above_horizon';
    const t = sun ? formatTime(day ? sun.attributes?.next_setting : sun.attributes?.next_rising, hass) : dash;
    return { label: localizeString(hass, day ? 'sunset' : 'sunrise'), icon: day ? 'sunset' : 'sunrise', html: timeHtml(t, 'awc-ampm'), text: t };
}

/** What a row says now */
export function readingView(hass: HomeAssistant | undefined, config: AnimatedWeatherCardConfig, r: Reading): ReadingView {
    const f = (n: number, d = 0) => formatLocalizedNumber(d ? n : Math.round(n), hass, d);
    const temp = (n: number) => `${formatLocalizedNumber(temperatureDecimals(config) ? n : Math.round(n), hass, temperatureDecimals(config))}°`;
    const plain = (label: string, icon: IconName, text: string): ReadingView => ({ label, icon, html: escapeHtml(text), text });
    switch (r.type as ReadingType) {
        case 'humidity': {
            const { value } = source(hass, config, r);
            return plain(cardLocalize(hass, 'ui.card.weather.attributes.humidity', 'Humidity'), 'humidity', value === null ? dash : `${f(value)}%`);
        }
        case 'wind': {
            const { value, unit } = source(hass, config, r, 'wind_speed_unit', 'km/h');
            const dir = r.direction_entity ? hass?.states[r.direction_entity]?.state : undefined;
            const bearing = windBearingOf(dir) ?? windBearingOf(weatherOf(hass, config, r)?.attributes?.wind_bearing);
            return { ...plain(cardLocalize(hass, 'ui.card.weather.attributes.wind_speed', 'Wind'), 'wind', value === null ? dash : withUnit(f(value), unit || 'km/h')), bearing };
        }
        case 'pressure': {
            const { value, unit } = source(hass, config, r, 'pressure_unit', 'hPa');
            const u = unit || 'hPa';
            return { ...plain(cardLocalize(hass, 'ui.card.weather.attributes.air_pressure', 'Pressure'), 'pressure', value === null ? dash : withUnit(f(value, u.toLowerCase() === 'inhg' ? 2 : 0), u)), pressure: value };
        }
        case 'sun':
            return sunView(hass, config);
        case 'uv': {
            const { value } = source(hass, config, r);
            const u = uvReading(hass, config, value);
            return { label: localizeString(hass, 'uv_index'), icon: 'noon', html: escapeHtml(u.text), text: u.text, level: u.level };
        }
        case 'rain': {
            const rate = rainSensor(hass, r.rate_entity, 'mm/h');
            const today = rainSensor(hass, r.entity, 'mm');
            const now = !!rate && rate.value > 0;
            const v = now ? rate : today;
            return plain(rainLabel(hass, now), 'rain', v ? formatRain(v.value, v.unit, hass) : dash);
        }
        case 'aqi': {
            const { value } = source(hass, config, r);
            if (value === null) return { label: localizeString(hass, 'aqi'), icon: 'aqi', html: dash, text: dash, level: null };
            const level = aqiLevel(value, aqiLevels(config));
            const figure = f(Math.max(0, value)), word = aqiWord(hass, level);
            return { label: localizeString(hass, 'aqi'), icon: 'aqi', html: escapeHtml(`${figure} ${word}`), text: `${figure} ${word}`, value: figure, word, level };
        }
        case 'feels_like': {
            const { value } = source(hass, config, r);
            return plain(localizeString(hass, 'feels_like'), 'thermometer', value === null ? dash : temp(value));
        }
        case 'dew_point': {
            const { value } = source(hass, config, r);
            return plain(haLabel(hass, 'dew_point', 'dew_point'), 'thermometer', value === null ? dash : temp(value));
        }
        case 'visibility': {
            const { value, unit } = source(hass, config, r, 'visibility_unit', 'km');
            return plain(haLabel(hass, 'visibility', 'visibility'), 'eye', value === null ? dash : withUnit(f(value, value < 10 ? 1 : 0), unit));
        }
        case 'cloud_cover': {
            const { value } = source(hass, config, r);
            return plain(haLabel(hass, 'cloud_coverage', 'cloud_cover'), 'cloud', value === null ? dash : `${f(value)}%`);
        }
        case 'gust': {
            const { value, unit } = source(hass, config, r, 'wind_speed_unit', 'km/h');
            return plain(haLabel(hass, 'wind_gust_speed', 'gusts'), 'wind', value === null ? dash : withUnit(f(value), unit || 'km/h'));
        }
        case 'sensor': {
            const e = r.entity ? hass?.states[r.entity] : undefined;
            const label = r.name || (typeof e?.attributes?.friendly_name === 'string' ? e.attributes.friendly_name : r.entity ?? '');
            const icon = lookup(DEVICE_ICONS, String(e?.attributes?.device_class ?? '')) ?? 'pressure';
            if (!e || e.state === 'unavailable' || e.state === 'unknown') return plain(label, icon, dash);
            let text: string | undefined;
            try { text = hass?.formatEntityState?.(e); } catch { /* older Home Assistant */ }
            if (!text || text === e.state) {
                const n = num(e.state);
                const unit = typeof e.attributes?.unit_of_measurement === 'string' ? e.attributes.unit_of_measurement : '';
                text = n === null ? e.state : withUnit(formatLocalizedNumber(n, hass, Math.min(2, (String(e.state).split('.')[1] ?? '').length)), unit);
            }
            return plain(label, icon, text);
        }
        default: {
            // The view's own rows (uv_max, the rain totals): a number in its sensor's unit
            const s = rainSensor(hass, r.entity, r.type === 'uv_max' ? '' : 'mm');
            return plain(r.type, r.type === 'uv_max' ? 'noon' : 'rain', s ? (r.type === 'uv_max' ? f(s.value) : formatRain(s.value, s.unit, hass)) : dash);
        }
    }
}
