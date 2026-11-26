// What the three cards' editors share (the editor bundle): the "Show all settings" switch, kept per browser and the
// same in all three; the reveal that shows and hides a row by its grid track; the markup of a row, a switch, a picker,
// a choice of two or three and a section; and the pass that shows each row the table (editor-rows.ts) says should.
// They share the weather card's editor's CSS (styles/editor.ts) too, so the three look and move alike.

import {
    mdiAirplane, mdiTrain, mdiBedOutline, mdiClockOutline, mdiEyeOutline, mdiEyedropperVariant, mdiGauge, mdiGestureTap, mdiMapMarkerOutline,
    mdiMessageTextOutline, mdiPaletteOutline, mdiShapeOutline, mdiWeatherPartlyCloudy, mdiWeatherWindy, mdiWhiteBalanceSunny,
} from '@mdi/js';
import { escapeHtml } from './utils';
import { rowChanged, rowShown, sectionShown, type RowContext, type RowTable } from './editor-rows';

/** Where the switch is kept, per browser, for all three editors */
const STORE = 'animated-weather-card:editor-all';
export function storedAll(): boolean {
    try { return localStorage.getItem(STORE) === '1'; } catch { return false; }
}
export function storeAll(on: boolean): void {
    try { localStorage.setItem(STORE, on ? '1' : '0'); } catch { /* the switch still works for this visit */ }
}

export const raf = (f: () => void) => (typeof requestAnimationFrame === 'function' ? requestAnimationFrame(f) : setTimeout(f, 16));

/**
 * Open or close a reveal. It clips its content only while it moves: once open (after its 260 ms at most, or at once
 * when nothing animates) it's `data-settled`, so a menu or a focus ring inside isn't cut off; closing clips again first
 */
export function reveal(el: Element, open: boolean, instant = false): void {
    if (el.hasAttribute('data-open') === open) return;
    el.toggleAttribute('data-open', open);
    if (!open) el.removeAttribute('data-settled');
    else if (instant) el.setAttribute('data-settled', '');
    else setTimeout(() => { if (el.hasAttribute('data-open')) el.setAttribute('data-settled', ''); }, 300);
}

export const CHEVRON = '<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.4 8.6 12 13.2l4.6-4.6L18 10l-6 6-6-6z"/></svg>';
export const INFO = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/></svg>';

/**
 * An icon per section and drawer, Material Design's as Home Assistant's own are, drawn inline: they're there with the
 * first paint, where an ha-icon arrives a moment after its row
 */
const SECTION_ICONS = {
    start: mdiShapeOutline, weather: mdiWeatherPartlyCloudy, look: mdiPaletteOutline, nightstand: mdiBedOutline,
    clock: mdiClockOutline, note: mdiMessageTextOutline, readings: mdiGauge, motion: mdiWeatherWindy,
    colors: mdiEyedropperVariant, planes: mdiAirplane, trains: mdiTrain, interactions: mdiGestureTap, shows: mdiEyeOutline,
    place: mdiMapMarkerOutline, sun: mdiWhiteBalanceSunny,
};
export type SectionIcon = keyof typeof SECTION_ICONS;
export const sectionIcon = (name: SectionIcon) => `<svg class="sec-i" viewBox="0 0 24 24" aria-hidden="true"><path d="${SECTION_ICONS[name]}"/></svg>`;

// The rows' markup. Labels are the editor's own text; anything from the config goes through escapeHtml

/** A row: the reveal that shows and hides it, around its content */
export const row = (id: string, inner: string) => `<div class="rv" data-row="${id}"><div class="rv-in"><div class="row">${inner}</div></div></div>`;
export const sw = (id: string, label: string, checked: boolean, help = '') =>
    `<label class="sw"><span class="sw-t"><span class="sw-l">${label}</span>${help ? `<span class="sw-h">${help}</span>` : ''}</span><ha-switch id="${id}"${checked ? ' checked' : ''}></ha-switch></label>`;
export const picker = (id: string, label: string, value: unknown, helper = '') =>
    `<ha-entity-picker id="${id}" label="${escapeHtml(label)}" value="${escapeHtml(String(value ?? ''))}"${helper ? ` helper="${escapeHtml(helper)}"` : ''} allow-custom-entity></ha-entity-picker>`;
export const select = (id: string, label: string, help = '') => `<ha-select id="${id}" label="${escapeHtml(label)}"></ha-select>${help ? `<p class="help">${help}</p>` : ''}`;
export const why = (text: string) => `<p class="why">${INFO}<span>${text}</span></p>`;

/** A choice of two or three, as segments: radios under one name per editor (`uid`), the help under it set by `sync` */
export const seg = (key: string, legend: string, options: Array<[string, string]>, current: string, uid: number) =>
    `<fieldset class="seg" id="${key}"><legend class="seg-l">${legend}</legend><div class="seg-track">${options.map(([value, label]) =>
        `<label><input type="radio" name="awc-${key}-${uid}" value="${value}"${value === current ? ' checked' : ''}><span>${label}</span></label>`).join('')}</div><p class="help" data-help="${key}"></p></fieldset>`;

/** A section: its heading, with its icon when it names one, over its rows, shown while one of them is */
export const section = (key: string, title: string | [SectionIcon, string], body: string) => {
    const [icon, text] = typeof title === 'string' ? [undefined, title] : title;
    return `<section class="rv grp" data-sec="${key}"><div class="rv-in"><div class="grp-b">${text ? `<h3 class="grp-h">${icon ? sectionIcon(icon) : ''}<span>${text}</span></h3>` : ''}${body}</div></div></section>`;
};

/** The switch at the top, and the line a screen reader hears when it's flipped */
export const allSwitch = (on: boolean) => `<div class="top">
          ${sw('all_settings', 'Show all settings', on, 'Settings you\'ve changed always show')}
          <span class="vh" aria-live="polite" data-live></span>
        </div>`;

/** What the switch says to a screen reader */
export const allSaid = (on: boolean, drawers: boolean) => (on
    ? `All settings shown.${drawers ? ' More sections at the end.' : ''}`
    : 'Showing the basics, and the settings you\'ve changed.');

/**
 * Show each row, and each section with a row showing, as the table says: the basics, everything with the switch on,
 * and any option the config has changed (pinned, so a value cleared under the finger keeps its field). Returns whether
 * any drawer shows
 */
export function syncRows<C>(root: ParentNode, table: RowTable<C>, config: C, x: RowContext, pinned: Set<string>, instant: boolean): boolean {
    for (const id of Object.keys(table.rows)) if (rowChanged(id, config, table)) pinned.add(id);
    root.querySelectorAll<HTMLElement>('[data-row]').forEach(el => reveal(el, rowShown(el.dataset.row!, config, x, pinned, table), instant));
    let drawers = false;
    for (const [key, ids] of Object.entries(table.sections)) {
        const shown = sectionShown(ids, config, x, pinned, table);
        const sec = root.querySelector(`[data-sec="${key}"]`);
        if (sec) reveal(sec, shown, instant);
        if (shown && table.drawers.includes(key)) drawers = true;
    }
    const all = root.querySelector('#all_settings') as HTMLInputElement | null;
    if (all && all.checked !== x.all) all.checked = x.all;
    return drawers;
}

/** Fill an ha-select once it's upgraded and report a new choice; its closing never closes Home Assistant's dialog */
export function bindSelect(root: ParentNode, id: string, options: Array<{ value: string; label: string }>, current: string, onChange: (value: string) => void): void {
    const el = root.querySelector(`#${id}`) as (HTMLElement & { options: typeof options; value: string }) | null;
    if (!el) return;
    const init = () => { el.options = options; el.value = current; };
    if (customElements.get('ha-select')) init();
    else customElements.whenDefined('ha-select').then(init);
    el.addEventListener('selected', ((e: CustomEvent) => {
        const value = e.detail?.value as string | undefined;
        if (!value || value === current) return;
        current = value;
        el.value = value;
        onChange(value);
    }) as EventListener);
    el.addEventListener('closed', (e: Event) => e.stopPropagation());
}

/** The radios of a choice made with `seg` */
export function bindSeg(root: ParentNode, key: string, onChange: (value: string) => void): void {
    root.querySelectorAll<HTMLInputElement>(`[id="${key}"] input[type="radio"]`).forEach(r => r.addEventListener('change', () => { if (r.checked) onChange(r.value); }));
}
