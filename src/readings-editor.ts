// The readings as a table in the weather card's editor (the editor bundle): one row per reading, its type and its
// entity, wind's direction and rain's rate where they have one, a name for any sensor, view only, up, down and remove,
// and Add a reading. Its own DOM: the editor draws itself again only when the config's keys change, so the table
// rebuilds only on add, remove, a move or a new type, and an entity, a name or view only change in place, so a picker
// never loses focus mid-use. Only an edit here writes `readings`, and drops the options it replaces.

import type { AnimatedWeatherCardConfig, HomeAssistant } from './types';
import { READING_TYPES, REPLACED_OPTIONS, VIEW_ONLY_TYPES, WEATHER_ATTRIBUTE, isDefaultList, needsSensor, readingsOf, shortForm, type Reading, type ReadingType } from './readings';
import { escapeHtml, textField } from './utils';

/** The types as the table offers them */
const TYPE_LABELS: Record<ReadingType, string> = {
    humidity: 'Humidity', wind: 'Wind', pressure: 'Pressure', sun: 'Next sunset or sunrise', uv: 'UV index', rain: 'Rain',
    aqi: 'Air quality (US EPA)', feels_like: 'Feels like', dew_point: 'Dew point', visibility: 'Visibility', cloud_cover: 'Cloud cover',
    gust: 'Gusts', uv_max: 'Today\'s highest UV (view)', rain_event: 'Rain this event (view)', rain_week: 'Rain this week (view)',
    rain_month: 'Rain this month (view)', rain_year: 'Rain this year (view)', sensor: 'Any sensor',
};

export interface ReadingsEditor {
    /** Home Assistant for the pickers */
    hass(hass: HomeAssistant | undefined): void;
}

type Picker = HTMLElement & { hass?: HomeAssistant; value?: string; includeDomains?: string[]; label?: string; helper?: string };
type Select = HTMLElement & { value: string; options: Array<{ value: string; label: string }> };

/**
 * Mount the table in `root`. `config()` is the editor's config now; `write(patch)` sets or (with undefined) removes
 * keys and tells Home Assistant once
 */
export function mountReadingsEditor(root: HTMLElement, config: () => AnimatedWeatherCardConfig, write: (patch: Record<string, unknown>) => void): ReadingsEditor {
    let hass: HomeAssistant | undefined;
    let list: Reading[] = readingsOf(config());

    const weatherId = () => config().entity || 'your weather entity';
    const reports = (type: ReadingType) => Object.prototype.hasOwnProperty.call(WEATHER_ATTRIBUTE, type);
    const helper = (r: Reading): string => {
        if (r.type === 'sun') return 'From the sun entity above';
        if (reports(r.type)) return `Empty: ${weatherId()}'s own`;
        if (r.type === 'aqi') return 'A sensor on the US EPA scale; AQI levels below move the bands';
        if (r.type === 'sensor') return 'Any entity: its name and its value';
        return 'A sensor';
    };

    /** Write the list: the short form, or nothing for the defaults; the options it replaces go */
    function save(): void {
        const patch: Record<string, unknown> = { readings: isDefaultList(list) ? undefined : shortForm(list) };
        for (const k of REPLACED_OPTIONS) patch[k] = undefined;
        write(patch);
        syncLevels();
    }

    function picker(cls: string, label: string, value: string | undefined, domains: string[], helperText?: string): string {
        return `<ha-entity-picker class="${cls}" label="${escapeHtml(label)}" value="${escapeHtml(value ?? '')}"${helperText ? ` helper="${escapeHtml(helperText)}"` : ''} allow-custom-entity></ha-entity-picker>`;
    }

    function rowHtml(r: Reading, i: number): string {
        const domains = reports(r.type) ? ['sensor', 'weather'] : ['sensor'];
        const viewOnly = VIEW_ONLY_TYPES.includes(r.type);
        return `<div class="rd-row" data-i="${i}" data-type="${r.type}" role="listitem">
            <div class="rd-fields">
              <ha-select class="rd-type" label="Reading ${i + 1}"></ha-select>
              ${r.type === 'sun' ? `<p class="rd-note">${escapeHtml(helper(r))}</p>` : picker('rd-entity', needsSensor(r.type) ? 'Entity' : 'Entity (optional)', r.entity, domains, helper(r))}
              ${r.type === 'wind' ? picker('rd-direction', 'Direction (optional)', r.direction_entity, ['sensor']) : ''}
              ${r.type === 'rain' ? picker('rd-rate', 'Rain rate (optional)', r.rate_entity, ['sensor'], 'Shown instead of today\'s rain while it rains') : ''}
              ${r.type === 'sensor' ? textField({ id: `rd-name-${i}`, label: 'Name (optional)', value: r.name, hint: 'Else the entity\'s own name' }) : ''}
              ${needsSensor(r.type) && !r.entity ? '<p class="rd-warn">Pick a sensor: without one, this reading isn\'t shown</p>' : ''}
            </div>
            <div class="rd-tools">
              ${viewOnly ? '<span class="rd-view-fixed">In the forecast view</span>' : `<label class="switch-label rd-view"><ha-switch class="rd-view-switch"${r.view ? ' checked' : ''}></ha-switch><span>View only</span></label>`}
              <button type="button" class="rd-btn rd-up" aria-label="Move reading ${i + 1} up"${i === 0 ? ' disabled' : ''}>↑</button>
              <button type="button" class="rd-btn rd-down" aria-label="Move reading ${i + 1} down"${i === list.length - 1 ? ' disabled' : ''}>↓</button>
              <button type="button" class="rd-btn rd-remove" aria-label="Remove reading ${i + 1}">✕</button>
            </div>
          </div>`;
    }

    function build(): void {
        root.innerHTML = `<div class="rd-list" role="list">${list.map(rowHtml).join('')}</div>
            <button type="button" class="rd-add">+ Add a reading</button>`;
        root.querySelectorAll<HTMLElement>('.rd-row').forEach(row => bindRow(row, Number(row.dataset.i)));
        root.querySelector('.rd-add')!.addEventListener('click', () => {
            // A new reading: UV when the weather entity reports one, else rain; its entity next
            const w = hass?.states[config().entity ?? '']?.attributes ?? {};
            const type: ReadingType = typeof w.uv_index === 'number' && !list.some(r => r.type === 'uv') ? 'uv' : 'rain';
            list = [...list, { type, view: false }];
            save();
            build();
            (root.querySelector('.rd-row:last-child .rd-type') as HTMLElement | null)?.focus();
        });
        pickers();
    }

    function bindRow(row: HTMLElement, i: number): void {
        const select = row.querySelector('.rd-type') as Select | null;
        if (select) {
            const init = () => {
                select.options = READING_TYPES.map(t => ({ value: t, label: TYPE_LABELS[t] }));
                select.value = list[i].type;
            };
            if (customElements.get('ha-select')) init(); else customElements.whenDefined('ha-select').then(init);
            select.addEventListener('selected', ((e: Event) => {
                const value = (e as CustomEvent).detail?.value as ReadingType | undefined;
                if (!value || value === list[i].type) return;
                // A new type keeps the entity only where it can read it
                const keep = list[i].entity && (reports(value) || !list[i].entity!.startsWith('weather.')) ? list[i].entity : undefined;
                list = list.map((r, k) => (k === i ? { type: value, view: VIEW_ONLY_TYPES.includes(value) || (r.view && !VIEW_ONLY_TYPES.includes(r.type)), ...(keep ? { entity: keep } : {}) } : r));
                save();
                build();
            }) as EventListener);
            select.addEventListener('closed', (e: Event) => e.stopPropagation());
        }
        const onPick = (cls: string, key: 'entity' | 'direction_entity' | 'rate_entity') => {
            row.querySelector(cls)?.addEventListener('value-changed', ((e: Event) => {
                const value = String((e as CustomEvent).detail?.value ?? '').trim();
                const had = !!list[i].entity;
                list = list.map((r, k) => {
                    if (k !== i) return r;
                    const next = { ...r };
                    if (value) next[key] = value; else delete next[key];
                    return next;
                });
                save();
                // The warning for a missing sensor comes and goes with it
                if (key === 'entity' && needsSensor(list[i].type) && had !== !!value) build();
            }) as EventListener);
        };
        onPick('.rd-entity', 'entity');
        onPick('.rd-direction', 'direction_entity');
        onPick('.rd-rate', 'rate_entity');
        row.querySelector(`[id="rd-name-${i}"]`)?.addEventListener('change', (e: Event) => {
            const value = String((e.target as HTMLInputElement).value ?? '').trim();
            list = list.map((r, k) => {
                if (k !== i) return r;
                const next = { ...r };
                if (value) next.name = value; else delete next.name;
                return next;
            });
            save();
        });
        row.querySelector('.rd-view-switch')?.addEventListener('change', (e: Event) => {
            const on = !!(e.target as HTMLInputElement).checked;
            list = list.map((r, k) => (k === i ? { ...r, view: on } : r));
            save();
        });
        const move = (d: number) => {
            const j = i + d;
            if (j < 0 || j >= list.length) return;
            const next = [...list];
            [next[i], next[j]] = [next[j], next[i]];
            list = next;
            save();
            build();
            (root.querySelector(`.rd-row[data-i="${j}"] ${d < 0 ? '.rd-up' : '.rd-down'}`) as HTMLButtonElement | null)?.focus();
        };
        row.querySelector('.rd-up')?.addEventListener('click', () => move(-1));
        row.querySelector('.rd-down')?.addEventListener('click', () => move(1));
        row.querySelector('.rd-remove')?.addEventListener('click', () => {
            list = list.filter((_, k) => k !== i);
            save();
            build();
            (root.querySelector('.rd-add') as HTMLButtonElement | null)?.focus();
        });
    }

    /** Every picker: Home Assistant, its domains and its value */
    function pickers(): void {
        root.querySelectorAll<HTMLElement>('.rd-row').forEach(row => {
            const r = list[Number(row.dataset.i)];
            if (!r) return;
            const set = (cls: string, value: string | undefined, domains: string[] | undefined) => {
                const p = row.querySelector(cls) as Picker | null;
                if (!p) return;
                if (hass) p.hass = hass;
                p.includeDomains = domains;
                p.value = value ?? '';
            };
            // Any sensor takes any entity
            set('.rd-entity', r.entity, r.type === 'sensor' ? undefined : reports(r.type) ? ['sensor', 'weather'] : ['sensor']);
            set('.rd-direction', r.direction_entity, ['sensor']);
            set('.rd-rate', r.rate_entity, ['sensor']);
        });
    }

    /** UV and AQI levels show only with a row of theirs */
    function syncLevels(): void {
        const host = root.parentElement;
        host?.querySelectorAll<HTMLElement>('[data-levels-for]').forEach(el => {
            el.hidden = !list.some(r => r.type === el.dataset.levelsFor);
        });
    }

    build();
    syncLevels();
    return {
        hass(h) {
            hass = h;
            pickers();
        },
    };
}
