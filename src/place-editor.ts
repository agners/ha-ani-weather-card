// The three editors' fields for another place (issues #34 and #35): its latitude and longitude, which give the card
// that place's sun, and its time zone, which its times are shown in. No placeholders: a sample place in the fields
// read as if it were set, so the example is in the help.

import { textField } from './utils';

interface PlaceFields {
    latitude?: number | string;
    longitude?: number | string;
    time_zone?: string;
}

const shown = (v: unknown) => (v === undefined || v === null ? undefined : String(v));

/** The fields, filled from the config */
export function placeFieldsHtml(config: PlaceFields): string {
    return `<div class="place-fields">
        ${textField({ id: 'latitude', label: 'Latitude', type: 'number', min: -90, max: 90, step: 'any', value: shown(config.latitude) })}
        ${textField({ id: 'longitude', label: 'Longitude', type: 'number', min: -180, max: 180, step: 'any', value: shown(config.longitude) })}
        ${textField({ id: 'time_zone', label: 'Time zone', value: config.time_zone, hint: 'For weather in another place, such as -33.87, 151.21 and Australia/Sydney: the coordinates give the card that place\'s sun, and its times are shown in its time zone' })}
    </div>`;
}

/** Each field writes its option when it changes: a number, or the zone's name; nothing when it's empty */
export function bindPlaceFields(root: ParentNode, update: (patch: Record<string, unknown>) => void): void {
    for (const id of ['latitude', 'longitude']) {
        root.querySelector(`#${id}`)?.addEventListener('change', (e) => {
            const raw = (e.target as HTMLInputElement).value.trim();
            const n = parseFloat(raw);
            update({ [id]: raw && isFinite(n) ? n : undefined });
        });
    }
    root.querySelector('#time_zone')?.addEventListener('change', (e) => {
        update({ time_zone: (e.target as HTMLInputElement).value.trim() || undefined });
    });
}

/** Their layout: the coordinates side by side, the time zone under them */
export const PLACE_FIELDS_CSS = `
    .place-fields { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 12px; }
    .place-fields > :last-child { grid-column: 1 / -1; }
`;
