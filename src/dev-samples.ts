// The dev card's samples (the dev bundle), from the demo's world (demo/scene.mjs): readings that suit each weather,
// the notes a stand-in AI writes for it, and the traffic a fly-over picks from.

import type { DevReading, DevSky } from './dev-forecast';

/** Readings that suit each weather at the day's height, in °C, %, km/h, hPa */
export const SAMPLE_READINGS: Record<DevSky, DevReading> = {
    clear: { temp: 24, feels: 23, humidity: 46, wind: 11, bearing: 300, pressure: 1019 },
    partlycloudy: { temp: 21, feels: 20, humidity: 55, wind: 13, bearing: 290, pressure: 1016 },
    cloudy: { temp: 17, feels: 16, humidity: 68, wind: 15, bearing: 250, pressure: 1012 },
    fog: { temp: 11, feels: 10, humidity: 97, wind: 4, bearing: 180, pressure: 1015 },
    windy: { temp: 18, feels: 15, humidity: 52, wind: 46, bearing: 280, pressure: 1011 },
    'windy-variant': { temp: 15, feels: 12, humidity: 64, wind: 42, bearing: 270, pressure: 1008 },
    rainy: { temp: 14, feels: 13, humidity: 88, wind: 19, bearing: 220, pressure: 1006 },
    pouring: { temp: 13, feels: 11, humidity: 95, wind: 26, bearing: 210, pressure: 1001 },
    lightning: { temp: 22, feels: 23, humidity: 74, wind: 22, bearing: 240, pressure: 1003 },
    'lightning-rainy': { temp: 16, feels: 15, humidity: 90, wind: 32, bearing: 230, pressure: 998 },
    snowy: { temp: -2, feels: -6, humidity: 86, wind: 14, bearing: 20, pressure: 1010 },
    'snowy-rainy': { temp: 1, feels: -2, humidity: 92, wind: 16, bearing: 30, pressure: 1004 },
    hail: { temp: 5, feels: 2, humidity: 85, wind: 24, bearing: 260, pressure: 1003 },
    exceptional: { temp: 30, feels: 33, humidity: 40, wind: 38, bearing: 120, pressure: 996 },
};

type Pair = readonly [string, string];
type DayNight = { day: Pair; night: Pair };

/**
 * The note for each weather, by day and by night, in the card's default snarky voice: a short line and a longer note.
 * No numbers or times, so they hold whatever the readings say. Storms and hail are plain advice: serious weather gets
 * no jokes.
 */
const NOTES: Record<string, DayNight> = {
    clear: {
        day: ['The sun is showing off again.', 'Not one cloud brave enough to interrupt. Sunglasses on, and act unimpressed.'],
        night: ['Clear skies. The warmth clocked off.', 'No clouds to keep the warmth in tonight. Stars for them, a jumper for you.'],
    },
    partlycloudy: {
        day: ['Sun with commitment issues.', 'The sun keeps ducking behind the clouds. A light jacket covers its mood swings.'],
        night: ['Clouds loitering. Harmless, probably.', 'A few clouds loitering like they missed the last bus. Nothing to plan around.'],
    },
    cloudy: {
        day: ['The sky forgot to load.', 'A ceiling of cloud with no plans to move. Bright colours are your only defence.'],
        night: ['The stars took the night off.', 'Thick cloud overhead, hoarding the stars. Upside: it hoards the warmth too.'],
    },
    fog: {
        day: ['Visibility: theoretical.', 'The world has been temporarily deleted. Drive slowly and trust your headlights.'],
        night: ['Fog. Very atmospheric. Very slow.', 'Fog and darkness together. Headlights low, speed lower, patience high.'],
    },
    rainy: {
        day: ['The clouds finally followed through.', 'Steady rain and no sign of letting up. Umbrella, waterproof shoes, low expectations.'],
        night: ['The rain has booked the night.', 'Rain drumming on the roof like it pays rent. Stay in, or bring a hood.'],
    },
    pouring: {
        day: ['Pouring. Umbrellas are a formality.', 'Rain with something to prove. Boots and a real coat, or stay in.'],
        night: ['Pouring. Listen, don\'t go.', 'Heavy rain hammering down all night. The only winning move is staying in.'],
    },
    'lightning-rainy': {
        day: ['Thunderstorm. Stay indoors.', 'Thunder and heavy rain. Stay inside, away from windows, until it passes.'],
        night: ['Thunderstorm overhead. Stay in.', 'Lightning and heavy rain through the night. Keep indoors until it moves on.'],
    },
    snowy: {
        day: ['Snow, and it means business.', 'Snow settling in like it signed a lease. Boots with grip, warm hat, extra time.'],
        night: ['Snow falling, quietly smug.', 'Snow through the dark. Tomorrow will be pretty and slippery in equal measure.'],
    },
    'snowy-rainy': {
        day: ['Sleet: snow that gave up halfway.', 'Wet snow and rain together, the worst of both. Waterproof everything.'],
        night: ['Sleet. Nobody asked for this.', 'Rain trying to be snow all night. Roads will be slick, so give yourself time.'],
    },
    hail: {
        day: ['Hail. Stay under cover.', 'Hail coming down hard. Stay under cover, and get the car out of the open.'],
        night: ['Hail. Stay under cover.', 'Hail coming down hard. Stay under cover, and get the car out of the open.'],
    },
    windy: {
        day: ['The wind is rearranging things.', 'Strong gusts all round. Hats will travel, umbrellas will invert. Dress snug.'],
        night: ['The bins are planning an escape.', 'Gusty wind through the dark. Tie down anything that likes to fly.'],
    },
};

/** The same weathers in the other voices, to each voice's rules (VOICES, note-generator.ts); snarky is NOTES */
const VOICE_NOTES: Record<string, Record<string, DayNight>> = {
    calm: {
        clear: {
            day: ['Clear skies, staying dry.', 'Clear and settled for the hours ahead. Sunglasses recommended.'],
            night: ['Clear and cooling overnight.', 'Clear through the night, cooling steadily. A warm layer recommended later.'],
        },
        cloudy: {
            day: ['Cloudy, with no rain expected.', 'Overcast for the hours ahead, with no rain expected. A light layer is enough.'],
            night: ['Cloudy and mild overnight.', 'Cloud stays overhead tonight, keeping temperatures mild. No rain expected.'],
        },
        rainy: {
            day: ['Rain for the next few hours.', 'Steady rain for the hours ahead. An umbrella and waterproof shoes recommended.'],
            night: ['Rain through the night.', 'Rain continues overnight, leaving roads wet. Allow extra time for journeys.'],
        },
    },
    friendly: {
        clear: {
            day: ['A lovely one, get outside!', 'Sunshine and clear skies. Grab your sunglasses and get out there if you can.'],
            night: ['Starry tonight, bring a layer.', 'Clear skies tonight mean it\'ll cool off fast. A cosy layer will keep you comfy.'],
        },
        cloudy: {
            day: ['Grey but dry, you\'re all set.', 'Cloudy, but no rain on the way. A light jacket and you\'re good to go.'],
            night: ['Cosy cloud cover tonight.', 'The clouds are keeping things mild tonight. No umbrella needed if you head out.'],
        },
        rainy: {
            day: ['Rainy one, keep your umbrella close.', 'Rain for a while yet, so waterproof shoes will make your day a lot comfier.'],
            night: ['Rainy night, perfect for staying in.', 'Rain all night long. If you do head out, take a hood and an umbrella.'],
        },
    },
    dry: {
        clear: {
            day: ['Sunny. Nothing to report.', 'Clear skies and nothing else. Sunglasses, if you insist on going out.'],
            night: ['Clear, and colder later.', 'A clear night, which means a cold one. A jumper would not go amiss.'],
        },
        cloudy: {
            day: ['Grey. As forecast.', 'Cloud and no rain, which is about as exciting as it gets.'],
            night: ['Overcast. No stars tonight.', 'Cloud all night, so no stars. Mild, at least. Small mercies.'],
        },
        rainy: {
            day: ['Rain. It will continue.', 'Steady rain for a while yet. An umbrella is advised, as is patience.'],
            night: ['Rain all night. Naturally.', 'Rain until morning. Staying in is an option, and a good one.'],
        },
    },
};

/** The notes' weather for each sky the dev card offers */
const NOTE_SKY: Partial<Record<DevSky, string>> = { 'windy-variant': 'windy', lightning: 'lightning-rainy', exceptional: 'lightning-rainy' };

/**
 * The note for this weather, by day or night, in the card's voice (note_tone). Storms and hail are plain advice in
 * every voice, and a weather a voice has no note for gets the default's.
 */
export function sampleNote(sky: DevSky, day: boolean, tone = 'snarky'): Pair {
    const id = NOTE_SKY[sky] ?? sky;
    const serious = id === 'lightning-rainy' || id === 'hail';
    const notes = (!serious && VOICE_NOTES[tone]?.[id]) || NOTES[id] || NOTES.partlycloudy;
    return day ? notes.day : notes.night;
}

/**
 * The traffic over a city, each kind at the height and speed it flies, so every family the card draws comes by: an
 * A320neo descending to land, a 787 and a 747 freighter at cruise, a turboprop climbing out, a regional jet, a
 * helicopter, a business jet up high and a Cessna low down, in Flightradar24's terms
 */
const FLIGHTS = [
    { flight_number: 'TP1352', airport_origin_city: 'Lisbon', airport_origin_code_iata: 'LIS', airport_destination_city: 'Paris', airport_destination_code_iata: 'ORY', aircraft_code: 'A20N', heading: 78, altitude: 12000, ground_speed: 300, vertical_speed: -600 },
    { flight_number: 'EK191', airport_origin_city: 'Dubai', airport_origin_code_iata: 'DXB', airport_destination_city: 'Lisbon', airport_destination_code_iata: 'LIS', aircraft_code: 'B789', heading: 255, altitude: 34000, ground_speed: 480, vertical_speed: 0 },
    { flight_number: 'TP1104', airport_origin_city: 'Lisbon', airport_origin_code_iata: 'LIS', airport_destination_city: 'Porto', airport_destination_code_iata: 'OPO', aircraft_code: 'AT76', heading: 62, altitude: 7000, ground_speed: 240, vertical_speed: 600 },
    { flight_number: 'CV7341', airport_origin_city: 'Luxembourg', airport_origin_code_iata: 'LUX', airport_destination_city: 'Lisbon', airport_destination_code_iata: 'LIS', aircraft_code: 'B748', heading: 242, altitude: 36000, ground_speed: 500, vertical_speed: 0 },
    { flight_number: 'IB8742', airport_origin_city: 'Madrid', airport_origin_code_iata: 'MAD', airport_destination_city: 'Lisbon', airport_destination_code_iata: 'LIS', aircraft_code: 'CRJ9', heading: 110, altitude: 17000, ground_speed: 340, vertical_speed: -1200 },
    { flight_number: '', callsign: 'CSHGE', aircraft_code: 'EC35', heading: 290, altitude: 1500, ground_speed: 120, vertical_speed: 0 },
    { flight_number: 'NJE731', airport_origin_city: 'Lisbon', airport_origin_code_iata: 'LIS', airport_destination_city: 'London', airport_destination_code_iata: 'LTN', aircraft_code: 'C68A', heading: 40, altitude: 41000, ground_speed: 450, vertical_speed: 0 },
    { flight_number: '', callsign: 'CSAZT', aircraft_code: 'C172', heading: 200, altitude: 2500, ground_speed: 105, vertical_speed: 0 },
];

/** A new flight entering the area, as a Flightradar24 sensor lists it: a fresh id each time, so a card flies it */
export function nextFlight(count: number): Record<string, unknown> {
    const flight = FLIGHTS[count % FLIGHTS.length];
    return { id: `dev-${count + 1}`, ...flight, callsign: flight.callsign ?? flight.flight_number, on_ground: 0 };
}
