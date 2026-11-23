// Strings and formats the cards draw themselves, in the dashboard's language.
//
// Home Assistant's frontend translations cover the weather attributes the
// metric row uses (humidity, wind speed, air pressure), but not "Feels
// like", sunrise / sunset or the sun tracker's labels, so the card carries
// those. A language that isn't listed falls back to English. Times follow
// the user's Home Assistant language and 12/24-hour setting.

import { escapeHtml } from './utils';

export type CardString =
    | 'feels_like' | 'indoors'
    | 'sunrise' | 'sunset' | 'solar_noon' | 'daylight'
    | 'first_light' | 'last_light' | 'moon'
    | 'in_duration'
    | 'daylight_day' | 'daylight_week' | 'daylight_month'
    | 'note_reading' | 'note_writing'
    | 'uv_index' | 'uv_low' | 'uv_moderate' | 'uv_high' | 'uv_very_high' | 'uv_extreme'
    | 'rain_today' | 'rain_now'
    | 'dew_point' | 'visibility' | 'cloud_cover' | 'gusts'
    | 'aqi' | 'aqi_good' | 'aqi_moderate' | 'aqi_sensitive' | 'aqi_unhealthy' | 'aqi_very_unhealthy' | 'aqi_hazardous';

/** Norwegian, Bokmål */
const NB: Partial<Record<CardString, string>> = {
    feels_like: 'Føles som', indoors: 'Inne',
    sunrise: 'Soloppgang', sunset: 'Solnedgang', solar_noon: 'Solens høydepunkt', daylight: 'Dagslengde',
    first_light: 'Morgengry', last_light: 'Kveldsskumring', moon: 'Måne',
    in_duration: 'om {duration}',
    daylight_day: '{delta} siden i går', daylight_week: '{delta} siden forrige uke', daylight_month: '{delta} siden forrige måned',
    note_reading: 'Leser værmeldingen', note_writing: 'Skriver notatet',
    uv_index: 'UV-indeks',
    uv_low: 'Lav', uv_moderate: 'Moderat', uv_high: 'Høy', uv_very_high: 'Svært høy', uv_extreme: 'Ekstrem',
    rain_today: 'Regn i dag', rain_now: 'Regn nå',
    dew_point: 'Duggpunkt', visibility: 'Sikt', cloud_cover: 'Skydekke', gusts: 'Vindkast',
    aqi: 'Luftkvalitet', aqi_good: 'God', aqi_moderate: 'Moderat', aqi_sensitive: 'Usunn for følsomme', aqi_unhealthy: 'Usunn', aqi_very_unhealthy: 'Svært usunn', aqi_hazardous: 'Farlig',
};

// One object literal, with no statement after it, so a bundle that never asks for a card string leaves the table out
const STRINGS: Record<string, Partial<Record<CardString, string>>> = {
    en: {
        feels_like: 'Feels like', indoors: 'Indoors',
        sunrise: 'Sunrise', sunset: 'Sunset', solar_noon: 'Solar noon', daylight: 'Daylight',
        first_light: 'First light', last_light: 'Last light', moon: 'Moon',
        in_duration: 'in {duration}',
        daylight_day: '{delta} since yesterday', daylight_week: '{delta} since last week', daylight_month: '{delta} since last month',
        note_reading: 'Reading the forecast', note_writing: 'Writing the note',
        uv_index: 'UV index',
        uv_low: 'Low', uv_moderate: 'Moderate', uv_high: 'High', uv_very_high: 'Very high', uv_extreme: 'Extreme',
        rain_today: 'Rain today', rain_now: 'Rain now',
        dew_point: 'Dew point', visibility: 'Visibility', cloud_cover: 'Cloud cover', gusts: 'Gusts',
        aqi: 'Air quality', aqi_good: 'Good', aqi_moderate: 'Moderate', aqi_sensitive: 'Unhealthy for some', aqi_unhealthy: 'Unhealthy', aqi_very_unhealthy: 'Very unhealthy', aqi_hazardous: 'Hazardous',
    },
    de: {
        feels_like: 'Gefühlt', indoors: 'Innen',
        sunrise: 'Sonnenaufgang', sunset: 'Sonnenuntergang', solar_noon: 'Sonnenhöchststand', daylight: 'Tageslänge',
        first_light: 'Morgendämmerung', last_light: 'Abenddämmerung', moon: 'Mond',
        in_duration: 'in {duration}',
        daylight_day: '{delta} seit gestern', daylight_week: '{delta} seit letzter Woche', daylight_month: '{delta} seit letztem Monat',
        note_reading: 'Vorhersage wird gelesen', note_writing: 'Notiz wird geschrieben',
        uv_index: 'UV-Index',
        uv_low: 'Niedrig', uv_moderate: 'Mäßig', uv_high: 'Hoch', uv_very_high: 'Sehr hoch', uv_extreme: 'Extrem',
        rain_today: 'Regen heute', rain_now: 'Regen jetzt',
        dew_point: 'Taupunkt', visibility: 'Sichtweite', cloud_cover: 'Bewölkung', gusts: 'Böen',
        aqi: 'Luftqualität', aqi_good: 'Gut', aqi_moderate: 'Mäßig', aqi_sensitive: 'Ungesund für Empfindliche', aqi_unhealthy: 'Ungesund', aqi_very_unhealthy: 'Sehr ungesund', aqi_hazardous: 'Gefährlich',
    },
    es: {
        feels_like: 'Sensación térmica', indoors: 'Interior',
        sunrise: 'Salida del sol', sunset: 'Puesta del sol', solar_noon: 'Mediodía solar', daylight: 'Duración del día',
        first_light: 'Alba', last_light: 'Anochecer', moon: 'Luna',
        in_duration: 'en {duration}',
        daylight_day: '{delta} desde ayer', daylight_week: '{delta} desde la semana pasada', daylight_month: '{delta} desde el mes pasado',
        note_reading: 'Leyendo el pronóstico', note_writing: 'Escribiendo la nota',
        uv_index: 'Índice UV',
        uv_low: 'Bajo', uv_moderate: 'Moderado', uv_high: 'Alto', uv_very_high: 'Muy alto', uv_extreme: 'Extremo',
        rain_today: 'Lluvia hoy', rain_now: 'Lluvia ahora',
        dew_point: 'Punto de rocío', visibility: 'Visibilidad', cloud_cover: 'Nubosidad', gusts: 'Ráfagas',
        aqi: 'Calidad del aire', aqi_good: 'Buena', aqi_moderate: 'Moderada', aqi_sensitive: 'Dañina para sensibles', aqi_unhealthy: 'Dañina', aqi_very_unhealthy: 'Muy dañina', aqi_hazardous: 'Peligrosa',
    },
    fr: {
        feels_like: 'Ressenti', indoors: 'Intérieur',
        sunrise: 'Lever du soleil', sunset: 'Coucher du soleil', solar_noon: 'Midi solaire', daylight: 'Durée du jour',
        first_light: 'Aube', last_light: 'Crépuscule', moon: 'Lune',
        in_duration: 'dans {duration}',
        daylight_day: '{delta} depuis hier', daylight_week: '{delta} depuis la semaine dernière', daylight_month: '{delta} depuis le mois dernier',
        note_reading: 'Lecture des prévisions', note_writing: 'Rédaction de la note',
        uv_index: 'Indice UV',
        uv_low: 'Faible', uv_moderate: 'Modéré', uv_high: 'Élevé', uv_very_high: 'Très élevé', uv_extreme: 'Extrême',
        rain_today: 'Pluie aujourd’hui', rain_now: 'Pluie en cours',
        dew_point: 'Point de rosée', visibility: 'Visibilité', cloud_cover: 'Couverture nuageuse', gusts: 'Rafales',
        aqi: 'Qualité de l\'air', aqi_good: 'Bonne', aqi_moderate: 'Modérée', aqi_sensitive: 'Mauvaise pour les sensibles', aqi_unhealthy: 'Mauvaise', aqi_very_unhealthy: 'Très mauvaise', aqi_hazardous: 'Dangereuse',
    },
    it: {
        feels_like: 'Percepita', indoors: 'Interno',
        sunrise: 'Alba', sunset: 'Tramonto', solar_noon: 'Mezzogiorno solare', daylight: 'Durata del giorno',
        first_light: 'Prima luce', last_light: 'Ultima luce', moon: 'Luna',
        in_duration: 'tra {duration}',
        daylight_day: '{delta} da ieri', daylight_week: '{delta} dalla settimana scorsa', daylight_month: '{delta} dal mese scorso',
        note_reading: 'Lettura delle previsioni', note_writing: 'Scrittura della nota',
        uv_index: 'Indice UV',
        uv_low: 'Basso', uv_moderate: 'Moderato', uv_high: 'Alto', uv_very_high: 'Molto alto', uv_extreme: 'Estremo',
        rain_today: 'Pioggia oggi', rain_now: 'Pioggia ora',
        dew_point: 'Punto di rugiada', visibility: 'Visibilità', cloud_cover: 'Copertura nuvolosa', gusts: 'Raffiche',
        aqi: 'Qualità dell\'aria', aqi_good: 'Buona', aqi_moderate: 'Moderata', aqi_sensitive: 'Nociva per i sensibili', aqi_unhealthy: 'Nociva', aqi_very_unhealthy: 'Molto nociva', aqi_hazardous: 'Pericolosa',
    },
    nl: {
        feels_like: 'Voelt als', indoors: 'Binnen',
        sunrise: 'Zonsopkomst', sunset: 'Zonsondergang', solar_noon: 'Zonnemiddag', daylight: 'Daglengte',
        first_light: 'Ochtendschemering', last_light: 'Avondschemering', moon: 'Maan',
        in_duration: 'over {duration}',
        daylight_day: '{delta} sinds gisteren', daylight_week: '{delta} sinds vorige week', daylight_month: '{delta} sinds vorige maand',
        note_reading: 'Verwachting lezen', note_writing: 'Notitie schrijven',
        uv_index: 'UV-index',
        uv_low: 'Laag', uv_moderate: 'Matig', uv_high: 'Hoog', uv_very_high: 'Zeer hoog', uv_extreme: 'Extreem',
        rain_today: 'Regen vandaag', rain_now: 'Regen nu',
        dew_point: 'Dauwpunt', visibility: 'Zicht', cloud_cover: 'Bewolking', gusts: 'Windstoten',
        aqi: 'Luchtkwaliteit', aqi_good: 'Goed', aqi_moderate: 'Matig', aqi_sensitive: 'Ongezond voor gevoeligen', aqi_unhealthy: 'Ongezond', aqi_very_unhealthy: 'Zeer ongezond', aqi_hazardous: 'Gevaarlijk',
    },
    pl: {
        feels_like: 'Odczuwalna', indoors: 'Wewnątrz',
        sunrise: 'Wschód słońca', sunset: 'Zachód słońca', solar_noon: 'Południe słoneczne', daylight: 'Długość dnia',
        first_light: 'Świt', last_light: 'Zmierzch', moon: 'Księżyc',
        in_duration: 'za {duration}',
        daylight_day: '{delta} od wczoraj', daylight_week: '{delta} od zeszłego tygodnia', daylight_month: '{delta} od zeszłego miesiąca',
        note_reading: 'Czytanie prognozy', note_writing: 'Pisanie notatki',
        uv_index: 'Indeks UV',
        uv_low: 'Niski', uv_moderate: 'Umiarkowany', uv_high: 'Wysoki', uv_very_high: 'Bardzo wysoki', uv_extreme: 'Ekstremalny',
        rain_today: 'Deszcz dziś', rain_now: 'Deszcz teraz',
        dew_point: 'Punkt rosy', visibility: 'Widoczność', cloud_cover: 'Zachmurzenie', gusts: 'Porywy',
        aqi: 'Jakość powietrza', aqi_good: 'Dobra', aqi_moderate: 'Umiarkowana', aqi_sensitive: 'Szkodliwa dla wrażliwych', aqi_unhealthy: 'Szkodliwa', aqi_very_unhealthy: 'Bardzo szkodliwa', aqi_hazardous: 'Niebezpieczna',
    },
    pt: {
        feels_like: 'Sensação térmica', indoors: 'Interior',
        sunrise: 'Nascer do sol', sunset: 'Pôr do sol', solar_noon: 'Meio-dia solar', daylight: 'Duração do dia',
        first_light: 'Aurora', last_light: 'Crepúsculo', moon: 'Lua',
        in_duration: 'em {duration}',
        daylight_day: '{delta} desde ontem', daylight_week: '{delta} desde a semana passada', daylight_month: '{delta} desde o mês passado',
        note_reading: 'Leitura da previsão', note_writing: 'Escrita da nota',
        uv_index: 'Índice UV',
        uv_low: 'Baixo', uv_moderate: 'Moderado', uv_high: 'Alto', uv_very_high: 'Muito alto', uv_extreme: 'Extremo',
        rain_today: 'Chuva hoje', rain_now: 'Chuva agora',
        dew_point: 'Ponto de orvalho', visibility: 'Visibilidade', cloud_cover: 'Nebulosidade', gusts: 'Rajadas',
        aqi: 'Qualidade do ar', aqi_good: 'Boa', aqi_moderate: 'Moderada', aqi_sensitive: 'Má para sensíveis', aqi_unhealthy: 'Má', aqi_very_unhealthy: 'Muito má', aqi_hazardous: 'Perigosa',
    },
    ro: {
        feels_like: 'Resimțită', indoors: 'Interior',
        sunrise: 'Răsărit', sunset: 'Apus', solar_noon: 'Amiaza solară', daylight: 'Durata zilei',
        first_light: 'Zori', last_light: 'Amurg', moon: 'Lună',
        in_duration: 'în {duration}',
        daylight_day: '{delta} față de ieri', daylight_week: '{delta} față de săptămâna trecută', daylight_month: '{delta} față de luna trecută',
        note_reading: 'Citesc prognoza', note_writing: 'Scriu nota',
        uv_index: 'Indice UV',
        uv_low: 'Scăzut', uv_moderate: 'Moderat', uv_high: 'Ridicat', uv_very_high: 'Foarte ridicat', uv_extreme: 'Extrem',
        rain_today: 'Ploaie azi', rain_now: 'Ploaie acum',
        dew_point: 'Punct de rouă', visibility: 'Vizibilitate', cloud_cover: 'Nebulozitate', gusts: 'Rafale',
        aqi: 'Calitatea aerului', aqi_good: 'Bună', aqi_moderate: 'Moderată', aqi_sensitive: 'Nocivă pentru sensibili', aqi_unhealthy: 'Nocivă', aqi_very_unhealthy: 'Foarte nocivă', aqi_hazardous: 'Periculoasă',
    },
    nb: NB,
    // Home Assistant's Norwegian is Bokmål (`nb`); `no` and Nynorsk (`nn`) get the same words
    no: NB,
    nn: NB,
    uk: {
        feels_like: 'Відчувається як', indoors: 'У приміщенні',
        sunrise: 'Схід сонця', sunset: 'Захід сонця', solar_noon: 'Сонячний полудень', daylight: 'Тривалість дня',
        first_light: 'Світанок', last_light: 'Вечірні сутінки', moon: 'Місяць',
        in_duration: 'через {duration}',
        daylight_day: '{delta} з учорашнього дня', daylight_week: '{delta} з минулого тижня', daylight_month: '{delta} з минулого місяця',
        note_reading: 'Аналіз прогнозу', note_writing: 'Підготовка нотатки',
        uv_index: 'УФ-індекс',
        uv_low: 'Низький', uv_moderate: 'Помірний', uv_high: 'Високий', uv_very_high: 'Дуже високий', uv_extreme: 'Екстремальний',
        rain_today: 'Дощ сьогодні', rain_now: 'Дощ зараз',
        dew_point: 'Точка роси', visibility: 'Видимість', cloud_cover: 'Хмарність', gusts: 'Пориви',
        aqi: 'Якість повітря', aqi_good: 'Добра', aqi_moderate: 'Помірна', aqi_sensitive: 'Шкідлива для чутливих', aqi_unhealthy: 'Шкідлива', aqi_very_unhealthy: 'Дуже шкідлива', aqi_hazardous: 'Небезпечна',
    },
};

/** The parts of `hass` these helpers read. */
export interface LocaleSource {
    language?: string;
    locale?: { language?: string; time_format?: string; time_zone?: string };
    config?: { time_zone?: string };
}

/** The dashboard's language: the user's HA profile setting, then HA's. */
export function cardLanguage(hass: LocaleSource | undefined): string {
    return hass?.locale?.language || hass?.language || 'en';
}

/** Changes when the user's language, clock format or time zone does, so labels can be rebuilt. */
export function localeKey(hass: LocaleSource | undefined): string {
    return `${cardLanguage(hass)}|${hass?.locale?.time_format ?? ''}|${cardTimeZone(hass) ?? ''}`;
}

/**
 * The time zone times are shown in, as the user's profile says: the
 * server's (Home Assistant's own) or, by default, the device's. Undefined
 * means the device's.
 */
export function cardTimeZone(hass: LocaleSource | undefined): string | undefined {
    if (hass?.locale?.time_zone !== 'server') return undefined;
    const zone = hass.config?.time_zone;
    if (!zone) return undefined;
    try {
        new Intl.DateTimeFormat('en', { timeZone: zone });
        return zone;
    } catch {
        return undefined;
    }
}

/** A card string in the dashboard's language ("pt-BR" → "pt" → English). */
export function localizeString(hass: LocaleSource | undefined, key: CardString, vars: Record<string, string> = {}): string {
    return fromTable(STRINGS, hass, key, vars);
}

/** A string from a table of them by language: the dashboard's, its base language, else English */
export function fromTable<K extends string>(table: Record<string, Partial<Record<K, string>>>, hass: LocaleSource | undefined, key: K, vars: Record<string, string> = {}): string {
    const language = cardLanguage(hass).toLowerCase();
    const text = table[language]?.[key] ?? table[language.split('-')[0]]?.[key] ?? table.en[key]!;
    return text.replace(/\{(\w+)\}/g, (_, name: string) => vars[name] ?? '');
}

/** The strings by language, for tests and docs. */
export const CARD_STRINGS: Readonly<typeof STRINGS> = STRINGS;

/**
 * Whether times use AM/PM, the way Home Assistant decides it: the user's
 * 12/24-hour setting, or what their language (or browser) does by default.
 * Undefined when HA doesn't say, so the browser's default applies.
 */
export function useAmPm(hass: LocaleSource | undefined): boolean | undefined {
    const locale = hass?.locale;
    if (!locale?.time_format) return undefined;
    if (locale.time_format === '12') return true;
    if (locale.time_format === '24') return false;
    const language = locale.time_format === 'language' ? cardLanguage(hass) : undefined;
    try {
        return new Date('January 1, 2023 22:00:00').toLocaleString(language).includes('10');
    } catch {
        return undefined;
    }
}

/** A time of day ("7:12 PM", "19:12") in the dashboard's language and format. */
export function formatTime(iso: string | null | undefined, hass?: LocaleSource): string {
    if (!iso) return '--';
    const date = new Date(iso);
    if (isNaN(date.getTime())) return '--';
    try {
        return timeFormat(hass, { hour: 'numeric', minute: '2-digit' }).format(date);
    } catch {
        return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    }
}

/** A formatter for times of day in the dashboard's language, 12/24-hour setting and time zone. */
function timeFormat(hass: LocaleSource | undefined, options: Intl.DateTimeFormatOptions): Intl.DateTimeFormat {
    const amPm = useAmPm(hass);
    const full: Intl.DateTimeFormatOptions = { ...options, timeZone: cardTimeZone(hass) };
    if (amPm !== undefined) full.hourCycle = amPm ? 'h12' : 'h23';
    return new Intl.DateTimeFormat(hass ? cardLanguage(hass) : undefined, full);
}

/**
 * The clock's reading: the hours and minutes ("7:12", "19:12") and, on a
 * 12-hour clock, the day period ("PM") apart, so it can be set smaller.
 */
export function clockParts(date: Date, hass?: LocaleSource): { time: string; period: string } {
    try {
        const parts = timeFormat(hass, { hour: 'numeric', minute: '2-digit' }).formatToParts(date);
        const period = parts.filter(p => p.type === 'dayPeriod').map(p => p.value).join('');
        const time = parts.filter(p => p.type !== 'dayPeriod').map(p => p.value).join('').trim();
        return { time, period };
    } catch {
        return { time: date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }), period: '' };
    }
}

/**
 * An hour on its own for a forecast ("14", "2 PM"), in the same format and
 * time zone. Built from the hour and the day period alone: Intl's own hour
 * says "15 Uhr" in German and "15 h" in French, too long for a column.
 */
export function formatHour(date: Date, hass?: LocaleSource): string {
    try {
        const parts = timeFormat(hass, { hour: 'numeric' }).formatToParts(date);
        const hour = parts.find(p => p.type === 'hour')?.value ?? String(date.getHours());
        const period = parts.find(p => p.type === 'dayPeriod')?.value;
        return period ? `${hour} ${period}` : hour;
    } catch {
        return String(date.getHours());
    }
}

/** A day's name ("Mon", "Montag"), in the dashboard's language and time zone */
export function formatWeekday(date: Date, hass?: LocaleSource, width: 'short' | 'long' = 'short'): string {
    try {
        return new Intl.DateTimeFormat(hass ? cardLanguage(hass) : undefined, { weekday: width, timeZone: cardTimeZone(hass) }).format(date);
    } catch {
        return '';
    }
}

/** Today's date for the clock ("Monday 9 November", "Montag, 9. November") */
export function formatDate(date: Date, hass?: LocaleSource, options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' }): string {
    try {
        return new Intl.DateTimeFormat(hass ? cardLanguage(hass) : undefined, { ...options, timeZone: cardTimeZone(hass) }).format(date);
    } catch {
        return date.toDateString();
    }
}

/**
 * Today's date, short, for the clock: the weekday and the day ("Tue 10",
 * "Di., 10."), with the month too ("Tue, Nov 10"). English puts the
 * weekday first, which Intl's American order doesn't.
 */
export function shortDate(date: Date, hass?: LocaleSource, withMonth = false): string {
    const language = hass ? cardLanguage(hass) : undefined;
    const options: Intl.DateTimeFormatOptions = withMonth
        ? { weekday: 'short', day: 'numeric', month: 'short', timeZone: cardTimeZone(hass) }
        : { weekday: 'short', day: 'numeric', timeZone: cardTimeZone(hass) };
    try {
        const format = new Intl.DateTimeFormat(language, options);
        if (!withMonth && (language ?? 'en').toLowerCase().startsWith('en')) {
            const parts = format.formatToParts(date);
            const weekday = parts.find(p => p.type === 'weekday')?.value ?? '';
            const day = parts.find(p => p.type === 'day')?.value ?? '';
            return `${weekday} ${day}`.trim();
        }
        return format.format(date);
    } catch {
        return date.toDateString();
    }
}

/** The time of day in hours (14.5 is 2:30 PM), in the card's time zone: where a time sits on a 24-hour drawing */
export function hourOfDay(date: Date, hass?: LocaleSource): number {
    try {
        const parts = new Intl.DateTimeFormat('en-GB', { hour: 'numeric', minute: 'numeric', second: 'numeric', hourCycle: 'h23', timeZone: cardTimeZone(hass) }).formatToParts(date);
        const part = (type: string) => Number(parts.find(p => p.type === type)?.value ?? 0);
        return part('hour') + part('minute') / 60 + part('second') / 3600;
    } catch {
        return date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600;
    }
}

/** A day number for comparing dates in the card's time zone: two times on the same calendar day get the same number */
export function dayKey(date: Date, hass?: LocaleSource): string {
    try {
        return new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: cardTimeZone(hass) }).format(date);
    } catch {
        return date.toDateString();
    }
}

/**
 * A duration in hours as "8h 43m", in the dashboard's language where the
 * browser can format durations (Intl.DurationFormat), with a compact fallback.
 */
export function formatDuration(hours: number, hass?: LocaleSource): string {
    const total = Math.round(Math.abs(hours) * 60);
    const h = Math.floor(total / 60);
    const m = total % 60;
    const language = cardLanguage(hass);
    const DurationFormat = (Intl as unknown as {
        DurationFormat?: new (locale?: string, options?: { style: string }) => { format(d: object): string };
    }).DurationFormat;
    if (DurationFormat && hass) {
        try {
            return new DurationFormat(language, { style: 'narrow' })
                .format(h > 0 ? { hours: h, minutes: m } : { minutes: m });
        } catch { /* fall through */ }
    }
    if (language.toLowerCase().split('-')[0] === 'uk') {
        return h > 0 ? `${h}\u00a0год ${m}\u00a0хв` : `${m}\u00a0хв`;
    }
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

/**
 * A change in daylight, signed in text: "+2m 14s", "−8s", "+1h 12m" (no seconds past an hour), "±0s". The sign follows
 * the rounding, so a change that rounds to nothing is never "−0s".
 */
export function formatDaylightChange(seconds: number, hass?: LocaleSource): string {
    const total = Math.round(Math.abs(seconds));
    const sign = total === 0 ? '±' : seconds > 0 ? '+' : '\u2212';
    const h = Math.floor(total / 3600), m = Math.floor((total % 3600) / 60), s = total % 60;
    const parts: Record<string, number> = h ? { hours: h, minutes: m } : m ? { minutes: m, seconds: s } : { seconds: s };
    // No zero after a figure: "2m", never "2m 0s"
    for (const unit of Object.keys(parts).slice(1)) if (!parts[unit]) delete parts[unit];
    const language = cardLanguage(hass);
    const DurationFormat = (Intl as unknown as {
        DurationFormat?: new (locale?: string, options?: { style: string; secondsDisplay?: string }) => { format(d: object): string };
    }).DurationFormat;
    if (DurationFormat && hass) {
        // A duration of nothing formats as nothing unless its seconds are asked for
        try {
            const text = new DurationFormat(language, total ? { style: 'narrow' } : { style: 'narrow', secondsDisplay: 'always' }).format(parts);
            if (text) return sign + text;
        } catch { /* fall through */ }
    }
    const uk = language.toLowerCase().split('-')[0] === 'uk';
    const unit: Record<string, string> = uk ? { hours: '\u00a0год', minutes: '\u00a0хв', seconds: '\u00a0с' } : { hours: 'h', minutes: 'm', seconds: 's' };
    return sign + Object.entries(parts).map(([k, v]) => `${v}${unit[k]}`).join(' ');
}

/** The days back to the same date last month in the card's time zone, the last of a shorter month standing in (31 Mar → 28 Feb) */
export function daysToLastMonth(date: Date, hass?: LocaleSource): number {
    let y = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate();
    try {
        const parts = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: cardTimeZone(hass) }).formatToParts(date);
        const part = (type: string) => Number(parts.find(p => p.type === type)?.value);
        if ([part('year'), part('month'), part('day')].every(Number.isFinite)) [y, m, d] = [part('year'), part('month'), part('day')];
    } catch { /* the device's own date */ }
    const lastMonthDays = new Date(Date.UTC(y, m - 1, 0)).getUTCDate();
    return Math.round((Date.UTC(y, m - 1, d) - Date.UTC(y, m - 2, Math.min(d, lastMonthDays))) / 86_400_000);
}

/** "7:12 PM" → "7:12" + a smaller "PM", so the numerals carry the weight. */
export function timeHtml(formatted: string, ampmClass: string): string {
    const match = formatted.match(/^(.*?)\s?([AaPp]\.?\s?[Mm]\.?)$/);
    if (!match) return escapeHtml(formatted);
    return `${escapeHtml(match[1])}<span class="${ampmClass}">${escapeHtml(match[2])}</span>`;
}
