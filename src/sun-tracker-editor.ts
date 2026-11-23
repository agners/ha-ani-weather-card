// The sun tracker's visual editor (the editor bundle), laid out as the weather card's: the basics that get a tracker
// running (the sun, regular or compact, the sky's colours or the theme's), and "Show all settings" for the rest, which
// open in place under them. Any option the config has changed from its default shows either way. Which row shows when
// is TRACKER_TABLE (editor-rows.ts); the switch, the rows and the CSS are the weather card's editor's.

import type { HomeAssistant } from './types';
import { textField } from './utils';
import { bindPlaceFields, placeFieldsHtml, PLACE_FIELDS_CSS } from './place-editor';
import { readActions } from './actions';
import { mountActionsEditor, updateActionsEditor } from './action-editor';
import type { SunTrackerConfig } from './sun-tracker-card';
import { getConfigEditorStyles } from './styles/editor';
import { TRACKER_TABLE, type RowContext } from './editor-rows';
import { allSaid, allSwitch, bindSeg, bindSelect, picker, raf, row, section, select, seg, storeAll, storedAll, sw, syncRows } from './editor-kit';

let editors = 0;

export class AnimatedSunTrackerEditor extends HTMLElement {
    private _config: SunTrackerConfig = {};
    private _hass?: HomeAssistant;
    private _initialized = false;
    private readonly uid = ++editors;
    /** Show all settings, shared with the other two editors */
    private all = storedAll();
    /** The rows the config has changed this session: they stay shown */
    private pinned = new Set<string>();
    /** Another place, switched on before anything's typed; and what was typed, kept when it's switched off */
    private placeOn = false;
    private placeKept: Record<string, unknown> = {};

    setConfig(config: SunTrackerConfig): void {
        // The config this editor just sent comes straight back: drawing it
        // again would take the focus from whatever is being typed
        const unchanged = JSON.stringify(config) === JSON.stringify(this._config);
        this._config = { ...config };
        if (this._initialized && !unchanged) this._render();
    }

    set hass(hass: HomeAssistant) {
        this._hass = hass;
        if (this._initialized && this.isConnected) {
            this._updatePickers();
            updateActionsEditor(this.querySelector('#st-actions'), hass);
        }
    }

    async connectedCallback() {
        this._config = this._config || {};
        await this._ensureEntityPickerLoaded();
        this._render();
        this._initialized = true;
        if (this._hass) this._updatePickers();
    }

    disconnectedCallback() {
        this.pinned.clear();
        this.innerHTML = '';
    }

    /** Force HA to lazy-load the ha-entity-picker component */
    private async _ensureEntityPickerLoaded(): Promise<void> {
        if (customElements.get('ha-entity-picker')) return;
        try {
            const helpers = await window.loadCardHelpers!();
            const tmp = await helpers.createCardElement({ type: 'entities', entities: [] });
            // Suppress harmless hass-undefined errors during module load
            const suppress = (e: PromiseRejectionEvent) => {
                if (e.reason?.message?.includes('localize') || e.reason?.message?.includes('hass')) e.preventDefault();
            };
            window.addEventListener('unhandledrejection', suppress);
            try { await (tmp.constructor as { getConfigElement?: () => Promise<HTMLElement> }).getConfigElement?.(); } catch (_) { /* ignore */ }
            setTimeout(() => window.removeEventListener('unhandledrejection', suppress), 2000);
        } catch (_) { /* silently ignore */ }
    }

    private ctx(): RowContext {
        return { all: this.all, place: this.placeOn, note: 'off', noDefaultAi: false };
    }

    private _render(): void {
        const c = this._config;
        this.placeOn = this.placeOn || ['latitude', 'longitude', 'time_zone'].some(k => (c as Record<string, unknown>)[k] !== undefined && (c as Record<string, unknown>)[k] !== '');
        this.innerHTML = `
            <div class="card-config" data-instant>
              ${allSwitch(this.all)}
              ${section('sun', 'Sun', [
                  row('sun_entity', picker('sun-picker', 'Sun entity', c.sun_entity)),
                  row('layout', seg('layout', 'Layout', [['regular', 'Regular'], ['compact', 'Compact']], c.compact ? 'compact' : 'regular', this.uid)),
                  row('color_palette', seg('color_palette', 'Colors', [['default', 'Sky'], ['theme', 'Theme']], c.color_palette === 'theme' ? 'theme' : 'default', this.uid)),
              ].join(''))}
              ${section('shows', 'What it shows', [
                  row('title', textField({ id: 'title', label: 'Title (optional)', value: c.title, hint: 'Above the next sunrise or sunset' })),
                  row('show_header', sw('show_header', 'Next sunrise or sunset', c.show_header !== false, 'The headline time and the countdown to it')),
                  row('show_details', sw('show_details', 'Details', c.show_details !== false, 'First and last light, solar noon, daylight and the moon')),
                  row('daylight_delta', select('daylight_delta', 'Compare with', 'How much earlier or later the sunrise or sunset is, and how much longer or shorter the day')),
                  row('moon_entity', picker('moon-picker', 'Moon phase', c.moon_entity, 'The Moon integration\'s sensor')),
                  row('direction', select('direction', 'Direction', 'From your location, the sun runs right to left south of the equator')),
              ].join(''))}
              ${section('sky', 'Sky and place', [
                  row('weather_entity', picker('weather-picker', 'Share the sky of', c.weather_entity, 'Without one, the sky of the weather card on the same sun')),
                  row('another_place', sw('another_place', 'Another place', this.placeOn, 'Its sun, from its coordinates, and its times in its time zone')),
                  row('place_fields', placeFieldsHtml(c)),
              ].join(''))}
              ${section('interactions', 'Interactions', row('actions', '<div id="st-actions"></div>'))}
              ${section('dev', '', row('dev_mode', sw('dev_mode', 'Simulated weather', !!c.dev_mode, 'The dev card\'s sun and sky, with no sun entity needed')))}
            </div>
            <style>${getConfigEditorStyles()}${PLACE_FIELDS_CSS}</style>
        `;
        this._updatePickers();
        this._attachListeners();
        mountActionsEditor(this.querySelector('#st-actions') as HTMLElement, this._hass,
            readActions(this._config as Record<string, unknown>, this._config.sun_entity), patch => this._update(patch));
        this.sync();
        const root = this.querySelector('.card-config');
        raf(() => raf(() => root?.removeAttribute('data-instant')));
    }

    private _updatePickers(): void {
        const pickers = [
            { id: '#sun-picker', domains: ['sun'] },
            { id: '#moon-picker', domains: ['sensor'] },
            { id: '#weather-picker', domains: ['weather'] },
        ];
        for (const p of pickers) {
            const el = this.querySelector(p.id) as (HTMLElement & { hass?: HomeAssistant; includeDomains?: string[] }) | null;
            if (!el) continue;
            if (this._hass) el.hass = this._hass;
            el.includeDomains = p.domains;
        }
    }

    private _attachListeners(): void {
        this.querySelector('#all_settings')?.addEventListener('change', (e: Event) => {
            this.all = !!(e.target as HTMLInputElement).checked;
            storeAll(this.all);
            this.sync();
            const live = this.querySelector('[data-live]');
            if (live) live.textContent = allSaid(this.all, false);
        });
        this.querySelector('#sun-picker')?.addEventListener('value-changed', (e: Event) => {
            this._update({ sun_entity: (e as CustomEvent).detail.value || undefined });
        });
        this.querySelector('#moon-picker')?.addEventListener('value-changed', (e: Event) => {
            this._update({ moon_entity: (e as CustomEvent).detail.value || undefined });
        });
        this.querySelector('#weather-picker')?.addEventListener('value-changed', (e: Event) => {
            this._update({ weather_entity: (e as CustomEvent).detail.value || undefined });
        });
        this.querySelector('#title')?.addEventListener('input', (e: Event) => {
            this._update({ title: (e.target as HTMLInputElement).value || undefined });
        });
        bindSeg(this, 'layout', v => this._update({ compact: v === 'compact' || undefined }));
        bindSeg(this, 'color_palette', v => this._update({ color_palette: v === 'theme' ? 'theme' : undefined }));
        const onSwitch = (id: string, apply: (checked: boolean) => Partial<SunTrackerConfig>) => {
            this.querySelector(`#${id}`)?.addEventListener('change', (e: Event) => this._update(apply((e.target as HTMLInputElement).checked)));
        };
        // On is the default: only off is written
        onSwitch('show_header', checked => ({ show_header: checked ? undefined : false }));
        onSwitch('show_details', checked => ({ show_details: checked ? undefined : false }));
        onSwitch('dev_mode', checked => ({ dev_mode: checked || undefined }));
        // What the sunrise or sunset and the daylight are compared with: yesterday unless set
        bindSelect(this, 'daylight_delta', [
            { value: 'day', label: 'Yesterday' },
            { value: 'week', label: 'Last week' },
            { value: 'month', label: 'Last month' },
            { value: 'none', label: 'Nothing' },
        ], this._config.daylight_delta ?? 'day', v => this._update({ daylight_delta: v === 'day' ? undefined : v as SunTrackerConfig['daylight_delta'] }));
        // Which way the sun crosses: by Home Assistant's latitude unless set
        bindSelect(this, 'direction', [
            { value: 'auto', label: 'From your location' },
            { value: 'left_to_right', label: 'Left to right' },
            { value: 'right_to_left', label: 'Right to left' },
        ], this._config.direction ?? 'auto', v => this._update({ direction: v === 'auto' ? undefined : v as SunTrackerConfig['direction'] }));
        this.querySelector('#another_place')?.addEventListener('change', (e: Event) => {
            this.placeOn = !!(e.target as HTMLInputElement).checked;
            if (this.placeOn) {
                // Back on: what was typed before comes back
                if (Object.keys(this.placeKept).length) this._update(this.placeKept as Partial<SunTrackerConfig>);
                else this.sync();
                return;
            }
            const now = this._config as Record<string, unknown>;
            this.placeKept = Object.fromEntries(['latitude', 'longitude', 'time_zone'].filter(k => now[k] !== undefined).map(k => [k, now[k]]));
            // Switched off on purpose: the fields go, though they were set; the switch stays to bring them back
            this.pinned.delete('place_fields');
            this._update({ latitude: undefined, longitude: undefined, time_zone: undefined } as Partial<SunTrackerConfig>);
        });
        bindPlaceFields(this, patch => this._update(patch as Partial<SunTrackerConfig>));
    }

    /** Every row shown or hidden as TRACKER_TABLE says, and the help under each choice */
    sync(): void {
        const root = this.querySelector<HTMLElement>('.card-config');
        if (!root) return;
        const c = this._config;
        syncRows(root, TRACKER_TABLE, c, this.ctx(), this.pinned, root.hasAttribute('data-instant'));
        const set = (selector: string, text: string) => { const el = this.querySelector(selector); if (el && el.textContent !== text) el.textContent = text; };
        set('[data-help="layout"]', c.compact ? 'One line: the next sunrise or sunset beside the sun\'s path' : 'The sun\'s path through the day, the next sunrise or sunset, and the day\'s details');
        set('[data-help="color_palette"]', c.color_palette === 'theme' ? 'Your dashboard theme\'s colors, light or dark' : 'The sky of the weather it shares, at the time of day');
    }

    private _update(patch: Partial<SunTrackerConfig>): void {
        const next: Record<string, unknown> = { ...this._config, ...patch };
        for (const key of Object.keys(next)) {
            if (next[key] === undefined || next[key] === '') delete next[key];
        }
        this._config = next as SunTrackerConfig;
        this.dispatchEvent(new CustomEvent('config-changed', {
            detail: { config: this._config },
            bubbles: true,
            composed: true
        }));
        this.sync();
    }
}
