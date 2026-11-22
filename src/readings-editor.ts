// The readings as a list in the weather card's editor (the editor bundle): one line per reading, its type and where
// it comes from, which opens in place to its type, its entity, wind's direction and rain's rate where they have one, a
// name for any sensor, view only, and Move up, Move down and Remove; then Add a reading. One reading is open at a time.
// Its own DOM: the editor draws itself again only when the config's keys change, so the list rebuilds only on add,
// remove, a move or a new type, and an entity, a name or view only change in place, so a picker never loses focus
// mid-use. Only an edit here writes `readings`, and drops the options it replaces.

import type { AnimatedWeatherCardConfig, HomeAssistant } from './types';
import { READING_TYPES, REPLACED_OPTIONS, VIEW_ONLY_TYPES, WEATHER_ATTRIBUTE, isDefaultList, needsSensor, readingsOf, shortForm, type Reading, type ReadingType } from './readings';
import { escapeHtml, textField } from './utils';

/** The types as the list names them */
const TYPE_LABELS: Record<ReadingType, string> = {
    humidity: 'Humidity', wind: 'Wind', pressure: 'Pressure', sun: 'Next sunset or sunrise', uv: 'UV index', rain: 'Rain',
    aqi: 'Air quality (US EPA)', feels_like: 'Feels like', dew_point: 'Dew point', visibility: 'Visibility', cloud_cover: 'Cloud cover',
    gust: 'Gusts', uv_max: 'Today\'s highest UV', rain_event: 'Rain this event', rain_week: 'Rain this week',
    rain_month: 'Rain this month', rain_year: 'Rain this year', sensor: 'Any sensor',
};

/** A reading's name, as the list and the section's summary give it */
export const readingLabel = (r: Reading): string => (r.type === 'sensor' && r.name ? r.name : TYPE_LABELS[r.type]);

export interface ReadingsEditor {
    /** Home Assistant for the pickers */
    hass(hass: HomeAssistant | undefined): void;
    /** The config changed elsewhere (the forecast, the weather entity): each line's words again */
    sync(): void;
}

export interface ReadingsEditorOptions {
    /** The reading open when it's drawn, and where to keep it when it changes, so a redraw of the editor keeps it */
    open?: number;
    onOpen?: (i: number) => void;
}

type Picker = HTMLElement & { hass?: HomeAssistant; value?: string; includeDomains?: string[]; label?: string; helper?: string };
type Select = HTMLElement & { value: string; options: Array<{ value: string; label: string }> };

const CHEVRON = '<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.4 8.6 12 13.2l4.6-4.6L18 10l-6 6-6-6z"/></svg>';
const WARN = '<svg class="ico-warn" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 1 21h22L12 2zm0 4.3L19.5 19h-15L12 6.3zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/></svg>';

let lists = 0;

/**
 * Mount the list in `root`. `config()` is the editor's config now; `write(patch)` sets or (with undefined) removes
 * keys and tells Home Assistant once
 */
export function mountReadingsEditor(root: HTMLElement, config: () => AnimatedWeatherCardConfig, write: (patch: Record<string, unknown>) => void,
                                    options: ReadingsEditorOptions = {}): ReadingsEditor {
    let hass: HomeAssistant | undefined;
    let list: Reading[] = readingsOf(config());
    let open = options.open ?? -1;
    const uid = ++lists;

    const weatherId = () => config().entity || 'the weather entity';
    const reports = (type: ReadingType) => Object.prototype.hasOwnProperty.call(WEATHER_ATTRIBUTE, type);
    const viewOnly = (r: Reading) => VIEW_ONLY_TYPES.includes(r.type) || r.view;
    const helper = (r: Reading): string => {
        if (reports(r.type)) return `Leave empty to use ${weatherId()}`;
        if (r.type === 'aqi') return 'A sensor on the US EPA scale; Air quality levels move the bands';
        if (r.type === 'sensor') return 'Any entity: its name and its value';
        return 'A sensor';
    };

    /** The line under a reading's name: where it comes from, or what it's missing */
    function sub(r: Reading): { text: string; warn: boolean } {
        if (needsSensor(r.type) && !r.entity) return { text: 'Pick a sensor', warn: true };
        const from = r.type === 'sun' ? `From ${config().sun_entity || 'sun.sun'}` : r.entity || `From ${weatherId()}`;
        if (!viewOnly(r)) return { text: from, warn: false };
        return config().show_forecast ? { text: `In the forecast view · ${from}`, warn: false } : { text: 'In the forecast view, which needs the forecast on', warn: true };
    }

    /** Write the list: the short form, or nothing for the defaults; the options it replaces go */
    function save(): void {
        const patch: Record<string, unknown> = { readings: isDefaultList(list) ? undefined : shortForm(list) };
        for (const k of REPLACED_OPTIONS) patch[k] = undefined;
        write(patch);
        syncLevels();
    }

    function picker(cls: string, label: string, value: string | undefined, helperText?: string): string {
        return `<ha-entity-picker class="${cls}" label="${escapeHtml(label)}" value="${escapeHtml(value ?? '')}"${helperText ? ` helper="${escapeHtml(helperText)}"` : ''} allow-custom-entity></ha-entity-picker>`;
    }

    function rowHtml(r: Reading, i: number): string {
        const fixedView = VIEW_ONLY_TYPES.includes(r.type);
        const label = escapeHtml(readingLabel(r));
        const s = sub(r);
        const body = `rd-b-${uid}-${i}`;
        return `<div class="rd-row" data-i="${i}" data-type="${r.type}" role="listitem">
            <button type="button" class="rd-head" aria-expanded="${i === open}" aria-controls="${body}">
              <span class="rd-tx"><span class="rd-t">${label}</span><span class="rd-s${s.warn ? ' warn' : ''}">${s.warn ? WARN : ''}<span>${escapeHtml(s.text)}</span></span></span>${CHEVRON}
            </button>
            <div class="rv rd-body" id="${body}"${i === open ? ' data-open' : ''}><div class="rv-in"><div class="rd-fields">
              <ha-select class="rd-type" label="Type"></ha-select>
              ${r.type === 'sun' ? '' : picker('rd-entity', needsSensor(r.type) ? 'Entity' : 'Entity (optional)', r.entity, helper(r))}
              ${r.type === 'wind' ? picker('rd-direction', 'Direction sensor (optional)', r.direction_entity) : ''}
              ${r.type === 'rain' ? picker('rd-rate', 'Rain rate sensor (optional)', r.rate_entity, 'Shown instead of today\'s rain while it rains') : ''}
              ${r.type === 'sensor' ? textField({ id: `rd-name-${i}`, label: 'Name (optional)', value: r.name, hint: 'Else the entity\'s own name' }) : ''}
              ${needsSensor(r.type) && !r.entity ? '<p class="rd-warn" role="status">Pick a sensor. Without one, this reading isn\'t shown.</p>' : ''}
              ${fixedView ? '<p class="rd-note">Shown in the forecast view, when you tap the card.</p>'
                : `<label class="sw rd-view"><span class="sw-t"><span class="sw-l">Only in the forecast view</span><span class="sw-h">Shown when you tap the card, not on it</span></span><ha-switch class="rd-view-switch"${r.view ? ' checked' : ''}></ha-switch></label>`}
              <div class="rd-foot">
                <button type="button" class="tb rd-btn rd-up" aria-label="Move ${label} up"${i === 0 ? ' disabled' : ''}>Move up</button>
                <button type="button" class="tb rd-btn rd-down" aria-label="Move ${label} down"${i === list.length - 1 ? ' disabled' : ''}>Move down</button>
                <button type="button" class="tb rd-btn rd-remove" aria-label="Remove ${label}">Remove</button>
              </div>
            </div></div></div>
          </div>`;
    }

    function setOpen(i: number): void {
        open = i;
        options.onOpen?.(i);
        root.querySelectorAll<HTMLElement>('.rd-row').forEach(row => {
            const on = Number(row.dataset.i) === i;
            row.querySelector('.rd-head')?.setAttribute('aria-expanded', String(on));
            row.querySelector('.rd-body')?.toggleAttribute('data-open', on);
        });
    }

    function build(): void {
        if (open >= list.length) open = -1;
        root.innerHTML = `<div class="rd-list" role="list" aria-label="Readings">${list.map(rowHtml).join('')}</div>
            <button type="button" class="tb rd-add"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>Add a reading</button>`;
        root.querySelectorAll<HTMLElement>('.rd-row').forEach(row => bindRow(row, Number(row.dataset.i)));
        root.querySelector('.rd-add')!.addEventListener('click', () => {
            // A new reading: UV when the weather entity reports one, else rain; its entity next
            const w = hass?.states[config().entity ?? '']?.attributes ?? {};
            const type: ReadingType = typeof w.uv_index === 'number' && !list.some(r => r.type === 'uv') ? 'uv' : 'rain';
            list = [...list, { type, view: false }];
            open = list.length - 1;
            options.onOpen?.(open);
            save();
            build();
            (root.querySelector('.rd-row:last-child .rd-type') as HTMLElement | null)?.focus();
        });
        pickers();
    }

    /** One reading's line again, in place: its name and where it comes from */
    function syncHead(row: HTMLElement, r: Reading): void {
        const s = sub(r);
        const el = row.querySelector('.rd-s');
        if (!el) return;
        el.classList.toggle('warn', s.warn);
        el.innerHTML = `${s.warn ? WARN : ''}<span></span>`;
        el.querySelector('span')!.textContent = s.text;
        row.querySelector('.rd-t')!.textContent = readingLabel(r);
    }

    function bindRow(row: HTMLElement, i: number): void {
        row.querySelector('.rd-head')?.addEventListener('click', () => setOpen(open === i ? -1 : i));
        const select = row.querySelector('.rd-type') as Select | null;
        if (select) {
            const init = () => {
                select.options = READING_TYPES.map(t => ({ value: t, label: VIEW_ONLY_TYPES.includes(t) ? `${TYPE_LABELS[t]}, in the forecast view` : TYPE_LABELS[t] }));
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
                (root.querySelector(`.rd-row[data-i="${i}"] .rd-type`) as HTMLElement | null)?.focus();
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
                // The warning for a missing sensor comes and goes with it; else the line changes in place
                if (key === 'entity' && needsSensor(list[i].type) && had !== !!value) build();
                else syncHead(row, list[i]);
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
            syncHead(row, list[i]);
        });
        row.querySelector('.rd-view-switch')?.addEventListener('change', (e: Event) => {
            const on = !!(e.target as HTMLInputElement).checked;
            list = list.map((r, k) => (k === i ? { ...r, view: on } : r));
            save();
            syncHead(row, list[i]);
        });
        const move = (d: number) => {
            const j = i + d;
            if (j < 0 || j >= list.length) return;
            const next = [...list];
            [next[i], next[j]] = [next[j], next[i]];
            list = next;
            open = j;
            options.onOpen?.(j);
            save();
            build();
            const moved = root.querySelector<HTMLElement>(`.rd-row[data-i="${j}"]`);
            moved?.setAttribute('data-moved', '');
            // Focus stays on the button pressed, unless the row reached the end it was moving to
            const same = moved?.querySelector<HTMLButtonElement>(d < 0 ? '.rd-up' : '.rd-down');
            (same && !same.disabled ? same : moved?.querySelector<HTMLButtonElement>(d < 0 ? '.rd-down' : '.rd-up'))?.focus();
        };
        row.querySelector('.rd-up')?.addEventListener('click', () => move(-1));
        row.querySelector('.rd-down')?.addEventListener('click', () => move(1));
        row.querySelector('.rd-remove')?.addEventListener('click', () => {
            list = list.filter((_, k) => k !== i);
            open = -1;
            options.onOpen?.(-1);
            save();
            build();
            // Focus goes to the reading that took its place, else the one before, else Add
            const heads = root.querySelectorAll<HTMLElement>('.rd-head');
            (heads[Math.min(i, heads.length - 1)] ?? root.querySelector<HTMLElement>('.rd-add'))?.focus();
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
        sync() {
            root.querySelectorAll<HTMLElement>('.rd-row').forEach(row => {
                const r = list[Number(row.dataset.i)];
                if (r) syncHead(row, r);
            });
        },
    };
}
