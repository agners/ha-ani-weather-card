// What a tap, a hold and a double tap do: the controls both cards' editors share

import { HomeAssistant } from './types';
import { ActionConfig, ActionsConfig, readAction } from './actions';
import { cardLocalize, escapeHtml, textField } from './utils';

export type ActionKey = 'tap_action' | 'hold_action' | 'double_tap_action';
/** The card's own actions, by name, with what the editor calls them ({ forecast: 'Forecast' }) */
export type CardActions = Record<string, string>;
export type ActionsPatch = Partial<Record<ActionKey, ActionConfig | undefined>>;

const KEYS: readonly ActionKey[] = ['tap_action', 'hold_action', 'double_tap_action'];

/** Home Assistant's own labels for them, in the user's language */
const LABELS: Record<ActionKey, [string, string]> = {
    tap_action: ['ui.panel.lovelace.editor.card.generic.tap_action', 'Tap behavior'],
    hold_action: ['ui.panel.lovelace.editor.card.generic.hold_action', 'Hold behavior'],
    double_tap_action: ['ui.panel.lovelace.editor.card.generic.double_tap_action', 'Double tap behavior'],
};

let uid = 0;

const label = (hass: HomeAssistant | undefined, key: ActionKey) => cardLocalize(hass, ...LABELS[key]);

/**
 * Home Assistant's action picker, as its own cards' editors have it: a tap
 * opens more-info by default, a hold and a double tap do nothing. The
 * entity gives the picker its context (more-info, toggle).
 */
const SCHEMA = KEYS.map(name => ({
    name,
    selector: { ui_action: { default_action: name === 'tap_action' ? 'more-info' : 'none' } },
    context: { entity_id: 'entity' },
}));

type HaForm = HTMLElement & {
    hass?: HomeAssistant;
    data?: Record<string, unknown>;
    schema?: unknown;
    computeLabel?: (schema: { name: string }) => string;
};

/**
 * Fill a container with the three gestures' controls. Home Assistant's own
 * ha-form when it's defined; until then, and if it never is, a select per
 * gesture for the plain actions, with a field for a path or a URL. An action
 * set in YAML that the select doesn't offer is kept, and shown as such.
 * Changes go out as a patch: an action, or undefined for the default.
 */
export function mountActionsEditor(container: HTMLElement, hass: HomeAssistant | undefined, config: ActionsConfig,
                                   onChange: (patch: ActionsPatch) => void, cardActions: CardActions = {}): void {
    let current: ActionsConfig = { ...config };
    const change = (patch: ActionsPatch) => {
        current = { ...current, ...patch };
        onChange(patch);
    };
    // One of the card's own actions (the forecast pop-up) isn't one Home
    // Assistant's picker knows. For a tap, the gesture the cards give their
    // own action by default, a choice sits over the picker: the card's own
    // action, or another one, which shows the picker. So the card's action
    // can always be picked again. A hold or a double tap set to one in YAML
    // gets a line of its own, with a way back to Home Assistant's actions
    const own = (key: ActionKey) => {
        const action = current[key]?.action;
        return action !== undefined && Object.prototype.hasOwnProperty.call(cardActions, action) ? action : undefined;
    };
    const choice = (): HTMLElement[] => {
        const names = Object.entries(cardActions);
        if (!names.length) return [];
        const key = KEYS[0];
        const mine = own(key) ?? '';
        const group = `awc-action-${++uid}`;
        const el = document.createElement('fieldset');
        el.className = 'seg card-action-choice';
        el.innerHTML = `<legend class="seg-l">${escapeHtml(label(hass, key))}</legend><div class="seg-track">`
            + [...names, ['', 'Another action']].map(([value, name]) =>
                `<label><input type="radio" name="${group}" value="${escapeHtml(value)}"${value === mine ? ' checked' : ''}><span>${escapeHtml(name)}</span></label>`).join('')
            + '</div>';
        el.querySelectorAll<HTMLInputElement>('input').forEach(radio => radio.addEventListener('change', () => {
            if (!radio.checked) return;
            const value = radio.value;
            change({ [key]: value ? { action: value } : undefined });
            mountActionsEditor(container, hass, current, onChange, cardActions);
            // The choice is drawn again: the keyboard stays on what was picked
            container.querySelectorAll<HTMLInputElement>('.card-action-choice input').forEach(r => { if (r.value === value) r.focus(); });
        }));
        return [el];
    };
    const chosen = Object.keys(cardActions).length > 0;
    const ownRows = () => KEYS.filter(key => own(key) && !(chosen && key === KEYS[0])).map(key => {
        const row = document.createElement('div');
        row.className = 'option card-action';
        row.innerHTML = `<span>${escapeHtml(label(hass, key))}: <b>${escapeHtml(cardActions[own(key)!] ?? '')}</b></span>`
            + `<button type="button" class="card-action-reset">${escapeHtml(cardLocalize(hass, 'ui.common.reset', 'Reset'))}</button>`;
        row.querySelector('button')!.addEventListener('click', () => {
            change({ [key]: undefined });
            mountActionsEditor(container, hass, current, onChange, cardActions);
        });
        return row;
    });

    const form = () => {
        const el = document.createElement('ha-form') as HaForm;
        el.hass = hass;
        el.data = { ...current };
        el.schema = SCHEMA.filter(entry => !own(entry.name));
        el.computeLabel = schema => label(hass, schema.name as ActionKey);
        el.addEventListener('value-changed', (e: Event) => {
            // Home Assistant's editor dialog listens for config-changed, not this
            e.stopPropagation();
            const value = ((e as CustomEvent).detail?.value ?? {}) as Record<string, unknown>;
            const patch: ActionsPatch = {};
            for (const key of KEYS) {
                const next = readAction(value[key]);
                if (JSON.stringify(next) !== JSON.stringify(current[key])) patch[key] = next;
            }
            el.data = { ...current, ...patch };
            if (Object.keys(patch).length) change(patch);
        });
        container.replaceChildren(...choice(), ...ownRows(), el);
    };

    if (customElements.get('ha-form')) {
        form();
        return;
    }
    renderFallback(container, hass, () => current, change, cardActions);
    customElements.whenDefined('ha-form').then(() => {
        if (container.isConnected) form();
    });
    void loadHaForm();
}

/** Give the form Home Assistant's latest state */
export function updateActionsEditor(container: HTMLElement | null, hass: HomeAssistant | undefined): void {
    const form = container?.querySelector('ha-form') as HaForm | null;
    if (form && hass) form.hass = hass;
}

/**
 * Home Assistant defines ha-form when one of its own editors loads. The tile
 * card's editor uses it, with the action picker, so load that.
 */
async function loadHaForm(): Promise<void> {
    try {
        const helpers = await window.loadCardHelpers?.();
        const tile = await helpers?.createCardElement({ type: 'tile', entity: 'sun.sun' });
        await (tile?.constructor as { getConfigElement?: () => Promise<HTMLElement> | HTMLElement } | undefined)?.getConfigElement?.();
    } catch (_) {
        // The fallback stays
    }
}

const PLAIN_ACTIONS = [
    { value: 'default', label: 'Default' },
    { value: 'more-info', label: 'More info' },
    { value: 'navigate', label: 'Navigate' },
    { value: 'url', label: 'Open a URL' },
    { value: 'none', label: 'Nothing' },
];

/** The field an action needs: where it goes */
const ACTION_FIELDS: Record<string, { key: string; label: string; placeholder: string }> = {
    navigate: { key: 'navigation_path', label: 'Path', placeholder: '/lovelace/weather' },
    url: { key: 'url_path', label: 'URL', placeholder: 'https://' },
};

function renderFallback(container: HTMLElement, hass: HomeAssistant | undefined, current: () => ActionsConfig,
                        change: (patch: ActionsPatch) => void, cardActions: CardActions = {}): void {
    const plain = [...PLAIN_ACTIONS, ...Object.entries(cardActions).map(([value, label]) => ({ value, label }))];
    container.innerHTML = KEYS.map(key => {
        const action = current()[key];
        const field = action ? ACTION_FIELDS[action.action] : undefined;
        return `<div class="option"><ha-select data-action="${key}" label="${escapeHtml(label(hass, key))}"></ha-select></div>`
            + (field ? `<div class="option">${textField({
                id: `${key}-${field.key}`, label: field.label, placeholder: field.placeholder,
                value: typeof action?.[field.key] === 'string' ? action[field.key] as string : '',
            })}</div>` : '');
    }).join('');

    for (const key of KEYS) {
        const action = current()[key];
        const select = container.querySelector(`[data-action="${key}"]`) as HTMLElement & { value: string; options: typeof plain } | null;
        if (!select) continue;
        // An action set in YAML (perform-action, toggle, assist) stays as it is
        const options = action && !plain.some(o => o.value === action.action)
            ? [...plain, { value: action.action, label: `${action.action} (set in YAML)` }]
            : plain;
        const init = () => {
            select.options = options;
            select.value = action?.action ?? 'default';
        };
        if (customElements.get('ha-select')) init();
        else customElements.whenDefined('ha-select').then(init);
        select.addEventListener('selected', ((e: CustomEvent) => {
            const value = e.detail?.value as string | undefined;
            if (!value || value === (current()[key]?.action ?? 'default')) return;
            change({ [key]: value === 'default' ? undefined : { action: value } });
            renderFallback(container, hass, current, change, cardActions);
        }) as EventListener);
        select.addEventListener('closed', (e: Event) => e.stopPropagation());

        const field = action ? ACTION_FIELDS[action.action] : undefined;
        const input = field ? container.querySelector(`#${key}-${field.key}`) : null;
        input?.addEventListener('input', (e: Event) => {
            const value = (e.target as HTMLInputElement).value.trim();
            const { [field!.key]: _, ...rest } = current()[key] ?? { action: action!.action };
            change({ [key]: { ...rest, action: action!.action, ...(value ? { [field!.key]: value } : {}) } });
        });
    }
}
