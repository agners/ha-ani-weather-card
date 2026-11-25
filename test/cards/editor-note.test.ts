import { describe, it, expect, afterEach, beforeEach } from 'vitest';
import '../../src/animated-weather-card-editor';

type Editor = HTMLElement & { setConfig(config: object): void; hass: unknown };

const flush = () => new Promise(resolve => setTimeout(resolve, 0));

function hass(components: string[], defaultEntity: string | null = 'ai_task.claude') {
    return {
        states: {},
        config: { components },
        callWS: async (message: { type: string }) =>
            message.type === 'ai_task/preferences/get' ? { gen_data_entity_id: defaultEntity } : null,
    };
}

describe('the editor\'s weather note', () => {
    let editor: Editor;

    async function mount(config: object, state: object): Promise<Editor> {
        editor = document.createElement('animated-weather-card-editor') as Editor;
        editor.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', ...config });
        document.body.appendChild(editor);
        await flush();
        editor.hass = state;
        await flush();
        await flush();
        return editor;
    }

    const status = () => editor.querySelector('#note_status') as HTMLElement;
    const shown = (id: string) => editor.querySelector(`[data-row="${id}"]`)!.hasAttribute('data-open');

    beforeEach(() => localStorage.removeItem('animated-weather-card:editor-all'));
    afterEach(() => editor?.remove());

    it('says the note needs Home Assistant 2025.8 when there is no AI Task', async () => {
        await mount({ show_note: true }, hass(['weather']));
        expect(status().hidden).toBe(false);
        expect(status().textContent).toContain('Home Assistant 2025.8 or later');
    });

    it('asks for an AI Task when there is no default', async () => {
        await mount({ show_note: true }, hass(['ai_task'], null));
        expect(status().textContent).toContain('Settings → System → AI');
    });

    it('says nothing when the default AI Task will write it, or one is picked', async () => {
        await mount({ show_note: true }, hass(['ai_task']));
        expect(status().hidden).toBe(true);
        editor.remove();
        await mount({ show_note: true, note_ai_task_entity: 'ai_task.openai' }, hass(['ai_task'], null));
        expect(status().hidden).toBe(true);
    });

    it('shows the AI\'s options only with the AI, and the entity\'s only with an entity, nothing dimmed', async () => {
        await mount({}, hass(['ai_task']));
        expect(shown('note')).toBe(true);
        for (const id of ['note_tone', 'note_ai_task_entity', 'note_calendar', 'note_entity', 'note_attribute', 'note_max_age']) expect(shown(id), id).toBe(false);
        expect(status().hidden).toBe(true);
        editor.remove();
        // The AI: its voice is one of the basics; the AI Task and the calendar wait for all settings while a default exists
        await mount({ show_note: true }, hass(['ai_task']));
        expect(shown('note_tone')).toBe(true);
        expect(shown('note_ai_task_entity')).toBe(false);
        expect(shown('note_entity')).toBe(false);
        (editor.querySelector('#all_settings') as HTMLInputElement).checked = true;
        editor.querySelector('#all_settings')!.dispatchEvent(new Event('change'));
        for (const id of ['note_tone', 'note_ai_task_entity', 'note_calendar', 'note_max_age']) expect(shown(id), id).toBe(true);
        expect(shown('note_entity')).toBe(false);
        editor.remove();
        // An entity wins over the AI, as the card has it
        await mount({ show_note: true, note_entity: 'input_text.note' }, hass(['ai_task']));
        expect(shown('note_entity')).toBe(true);
        expect(shown('note_tone')).toBe(false);
        expect(editor.querySelector('[style*="opacity"]')).toBeNull();
    });

    it('brings the AI Task picker into the basics when there\'s no default, as the status asks', async () => {
        await mount({ show_note: true }, hass(['ai_task'], null));
        expect(status().textContent).toContain('Pick one below');
        expect(shown('note_ai_task_entity')).toBe(true);
    });

    it('writes one choice of source: off, your AI, or an entity once one is picked', async () => {
        await mount({ show_note: true, note_tone: 'calm' }, hass(['ai_task']));
        let config: Record<string, unknown> | undefined;
        editor.addEventListener('config-changed', (e) => { config = (e as CustomEvent).detail.config; });
        const source = editor.querySelector('#note_source') as HTMLElement & { value: string };
        source.dispatchEvent(new CustomEvent('selected', { detail: { value: 'entity' } }));
        // Nothing written until there's an entity; its picker comes up
        expect(shown('note_entity')).toBe(true);
        const picker = editor.querySelector('#note_entity') as HTMLElement & { value: string };
        picker.value = 'sensor.summary';
        picker.dispatchEvent(new Event('value-changed'));
        expect(config).toMatchObject({ note_entity: 'sensor.summary', note_tone: 'calm' });
        expect(config).not.toHaveProperty('show_note');
        // Cleared, the entity goes and the choice stays, with its picker, for the next one
        picker.value = '';
        picker.dispatchEvent(new Event('value-changed'));
        expect(config).not.toHaveProperty('note_entity');
        expect(source.value).toBe('entity');
        expect(shown('note_entity')).toBe(true);
        picker.value = 'sensor.summary';
        picker.dispatchEvent(new Event('value-changed'));
        source.dispatchEvent(new CustomEvent('selected', { detail: { value: 'ai' } }));
        expect(config).toMatchObject({ show_note: true });
        expect(config).not.toHaveProperty('note_entity');
        source.dispatchEvent(new CustomEvent('selected', { detail: { value: 'off' } }));
        expect(config).not.toHaveProperty('show_note');
        // The entity set aside comes back when it's chosen again
        source.dispatchEvent(new CustomEvent('selected', { detail: { value: 'entity' } }));
        expect(config).toMatchObject({ note_entity: 'sensor.summary' });
    });

    it('takes the hours out from a calendar, keeping any others from YAML', async () => {
        await mount({ show_note: true, note_calendar: ['calendar.family', 'calendar.work'] }, hass(['ai_task']));
        const picker = editor.querySelector('#note_calendar') as HTMLElement & { value: string };
        expect(picker.closest('[data-row="note_calendar"]')?.hasAttribute('data-open')).toBe(true);
        expect(picker.getAttribute('value')).toBe('calendar.family');
        let config: Record<string, unknown> | undefined;
        editor.addEventListener('config-changed', (e) => { config = (e as CustomEvent).detail.config; });
        picker.value = 'calendar.home';
        picker.dispatchEvent(new Event('value-changed'));
        expect(config?.note_calendar).toEqual(['calendar.home', 'calendar.work']);
        editor.remove();
        await mount({ show_note: true, note_calendar: 'calendar.family' }, hass(['ai_task']));
        editor.addEventListener('config-changed', (e) => { config = (e as CustomEvent).detail.config; });
        const single = editor.querySelector('#note_calendar') as HTMLElement & { value: string };
        single.value = '';
        single.dispatchEvent(new Event('value-changed'));
        expect(config).not.toHaveProperty('note_calendar');
    });
});
