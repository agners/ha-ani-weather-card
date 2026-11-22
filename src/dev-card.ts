// The dev card (the dev bundle): one control for every card on the page. It changes the world the cards see
// (dev-world.ts), never the cards. At its top, a window onto that world, painted with its own sky; under it, in your
// theme's colours, the weather, the time, the readings, the forecast's shape and who writes the notes; at its foot, a
// plane, a pause and what it all costs.
//
// It renders once and then changes only what differs, so a slider under a finger or a focused key survives every
// update Home Assistant sends.

import type { HomeAssistant } from './types';
import type { DevCardShell, DevCardView } from './dev-link';
import { DEV_SKIES, type DevSky } from './dev-forecast';
import { World, unitsOf, CONVERT, fromUnit, type DevNotes, type DevShape, type DevSource, type DevState } from './dev-world';
import { getDevCardStyles } from './styles/dev-card';
import { glyph, litTints } from './fc-glyphs';
import { skyColors, skyPhaseFromSun, oklchToSrgb, relativeLuminance, SKY_TEXT, type SkyCondition } from './sky';
import { getWeatherClass } from './utils';
import { clockParts, shortDate, hourOfDay } from './localize';
import { solarElevation } from './solar';
import { moonPhaseName } from './moon';
import { icon, type IconName } from './icons';
import { cardDate } from './clock';

const MINUTE = 60_000;

/** The keys' words: the dev card speaks English, as a developer's tool, and the window names the weather in yours */
const SKY_LABELS: Record<DevSky, string> = {
    clear: 'Clear', partlycloudy: 'Partly cloudy', cloudy: 'Cloudy', fog: 'Fog', windy: 'Windy', 'windy-variant': 'Windy, cloudy',
    rainy: 'Rain', pouring: 'Pouring', lightning: 'Lightning', 'lightning-rainy': 'Storm', snowy: 'Snow', 'snowy-rainy': 'Snow and rain',
    hail: 'Hail', exceptional: 'Exceptional',
};
const MOON_LABELS: Record<string, string> = {
    new_moon: 'New moon', waxing_crescent: 'Waxing crescent', first_quarter: 'First quarter', waxing_gibbous: 'Waxing gibbous',
    full_moon: 'Full moon', waning_gibbous: 'Waning gibbous', last_quarter: 'Last quarter', waning_crescent: 'Waning crescent',
};

type Reading = 'temp' | 'feels' | 'humidity' | 'wind' | 'bearing' | 'pressure' | 'uv' | 'rainToday' | 'rainRate';
interface ReadingSpec { label: string; kind?: 'temperature' | 'wind' | 'pressure' | 'precipitation'; unit?: string; step: (u: string) => number; auto?: boolean; lo: number; hi: number; wrap?: boolean }
/** The readings, each stepped in the unit you read it in, and kept to a sensible range (metric) */
const READINGS: Record<Reading, ReadingSpec> = {
    temp: { label: 'Temperature', kind: 'temperature', step: () => 1, auto: true, lo: -50, hi: 50 },
    feels: { label: 'Feels like', kind: 'temperature', step: () => 1, auto: true, lo: -60, hi: 60 },
    humidity: { label: 'Humidity', unit: '%', step: () => 5, lo: 0, hi: 100 },
    wind: { label: 'Wind', kind: 'wind', step: u => (u === 'm/s' ? 1 : 5), lo: 0, hi: 200 },
    bearing: { label: 'From', unit: '°', step: () => 45, lo: 0, hi: 360, wrap: true },
    pressure: { label: 'Pressure', kind: 'pressure', step: u => (u === 'inHg' ? 0.05 : u === 'kPa' ? 0.2 : 2), lo: 950, hi: 1060 },
    uv: { label: 'UV index', step: () => 1, auto: true, lo: 0, hi: 14 },
    rainToday: { label: 'Rain today', kind: 'precipitation', step: u => (u === 'in' ? 0.02 : 0.5), lo: 0, hi: 300 },
    rainRate: { label: 'Rain rate', kind: 'precipitation', step: u => (u === 'in' ? 0.02 : 0.5), lo: 0, hi: 100 },
};
const COMPASS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

/** The world, one for the page: made when the dev bundle loads */
export function theWorld(): World {
    const w = window.AnimatedWeatherCardDev as World | undefined;
    if (w instanceof World) return w;
    const world = new World();
    window.AnimatedWeatherCardDev = world;
    return world;
}

const seg = <T extends string>(name: string, label: string, options: readonly (readonly [T, string])[]) =>
    `<div class="seg" role="radiogroup" aria-label="${label}" data-seg="${name}">${options.map(([v, t]) =>
        `<button type="button" role="radio" data-v="${v}" aria-checked="false">${t}</button>`).join('')}</div>`;

const path = (d: string) => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${d}"/></svg>`;
const ICONS = {
    prev: path('M14.6 6.4 9 12l5.6 5.6'),
    next: path('M9.4 6.4 15 12l-5.6 5.6'),
    plane: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 15.5v-1.8l-7.6-4.4V4.2a1.4 1.4 0 0 0-2.8 0v5.1L3 13.7v1.8l7.6-2.2v4.4l-2 1.4v1.4l3.4-.9 3.4.9v-1.4l-2-1.4v-4.4z" fill="currentColor"/></svg>',
    pause: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="7" y="5.5" width="3.2" height="13" rx="1" fill="currentColor"/><rect x="13.8" y="5.5" width="3.2" height="13" rx="1" fill="currentColor"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 5.8v12.4a.8.8 0 0 0 1.2.7l9.8-6.2a.8.8 0 0 0 0-1.4L9.2 5.1a.8.8 0 0 0-1.2.7z" fill="currentColor"/></svg>',
};

class DevPanel implements DevCardView {
    private root: ShadowRoot;
    private world = theWorld();
    private driver = { drivesAll: () => this.shell.devCardConfig?.cards !== 'dev_mode' };
    private unwatch?: () => void;
    private scrubbing = false;
    private scrubTimer?: ReturnType<typeof setTimeout>;
    private scrubAt = 0;
    private pathDay = '';
    private perf = { frames: 0, since: 0, fps: 0, raf: 0, timer: 0 as unknown as ReturnType<typeof setInterval> };
    private seen = false;
    private observer?: IntersectionObserver;

    constructor(private readonly shell: DevCardShell) {
        this.root = shell.shadowRoot ?? shell.attachShadow({ mode: 'open' });
        this.render();
        this.connected();
    }

    // ── DevCardView ──────────────────────────────────────────────────────────

    update(): void {
        this.world.recount();
        this.sync();
    }

    connected(): void {
        this.world.drive(this.driver);
        this.unwatch ??= this.world.watch(() => this.sync());
        if (!this.observer && typeof IntersectionObserver !== 'undefined') {
            this.observer = new IntersectionObserver(entries => { this.seen = entries[entries.length - 1].isIntersecting; this.measure(); });
            this.observer.observe(this.shell);
        } else if (typeof IntersectionObserver === 'undefined') this.seen = true;
        document.addEventListener('visibilitychange', this.measure);
        this.sync();
    }

    disconnected(): void {
        this.world.release(this.driver);
        this.unwatch?.();
        this.unwatch = undefined;
        this.observer?.disconnect();
        this.observer = undefined;
        document.removeEventListener('visibilitychange', this.measure);
        this.seen = false;
        this.measure();
    }

    // ── The markup, once ────────────────────────────────────────────────────

    private render(): void {
        const keys = DEV_SKIES.map(sky => `<button type="button" class="key" role="radio" aria-checked="false" data-sky="${sky}">
            <span class="key-glyph"></span><span class="key-label">${SKY_LABELS[sky]}</span></button>`).join('');
        const readings = (Object.keys(READINGS) as Reading[]).map(id => `<div class="reading" data-r="${id}">
            <span class="r-label" id="r-${id}">${READINGS[id].label}</span>
            <div class="stepper" role="group" aria-labelledby="r-${id}">
              <button type="button" class="step" data-d="-1" aria-label="Less">−</button>
              <output class="r-value" aria-live="polite"></output>
              <button type="button" class="step" data-d="1" aria-label="More">+</button>
            </div>
            ${READINGS[id].auto ? '<button type="button" class="r-auto">Auto</button>' : ''}
          </div>`).join('');
        this.root.innerHTML = `<style>${getDevCardStyles()}</style>
        <ha-card class="dc">
          <div class="window">
            <div class="w-cond"><span class="w-glyph"></span><div class="w-text"><div class="w-name"></div><div class="w-when"></div></div></div>
            <div class="w-temp"></div>
          </div>
          <div class="body">
            <div class="bar">
              ${seg<DevSource>('source', 'Weather', [['sim', 'Simulated'], ['live', 'Live']])}
              <span class="driving"></span>
            </div>
            <section class="sec" data-sim>
              <h3 id="dc-cond">Condition</h3>
              <div class="keys" role="radiogroup" aria-labelledby="dc-cond">${keys}</div>
            </section>
            <section class="sec time" data-sim>
              <div class="sec-head"><h3 id="dc-time">Time</h3><span class="t-value"></span><button type="button" class="link now">Now</button></div>
              <div class="scrub">
                <input type="range" min="0" max="1439" step="5" aria-labelledby="dc-time">
                <div class="track">
                  <svg class="sky-path" viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                    <line class="horizon" x1="0" x2="1000" y1="78" y2="78"/>
                    <path class="night-path"/><path class="day-path"/>
                    <line class="needle" y1="0" y2="120"/>
                  </svg>
                  <span class="sun-dot" aria-hidden="true"></span>
                </div>
              </div>
              <div class="ticks"><span class="t-rise"></span><span class="t-set"></span></div>
              <div class="day">
                <button type="button" class="icon-btn day-prev" aria-label="The day before">${ICONS.prev}</button>
                <span class="d-date"></span>
                <button type="button" class="icon-btn day-next" aria-label="The day after">${ICONS.next}</button>
                <span class="d-moon"><span class="d-moon-icon"></span><span class="d-moon-name"></span></span>
              </div>
              <p class="t-note" hidden>Time travel moves every card's clock, so it works while the dev card drives every card (cards: all).</p>
            </section>
            <details class="sec readings" data-sim>
              <summary><h3>Readings</h3><span class="r-hint">Fill the weather entity and the sensors each card names</span></summary>
              <div class="r-grid">${readings}</div>
            </details>
            <section class="sec pair" data-sim>
              <div><h3 id="dc-fc">Forecast</h3>${seg<DevShape>('shape', 'Forecast', [['full', 'Hours and days'], ['daily', 'Days'], ['none', 'None']])}</div>
              <div><h3 id="dc-notes">Notes</h3>${seg<DevNotes>('notes', 'Notes', [['samples', 'Samples'], ['ai', 'Your AI']])}</div>
            </section>
          </div>
          <footer class="foot">
            <button type="button" class="btn fly">${ICONS.plane}<span>Fly a plane</span></button>
            <button type="button" class="btn pause" aria-pressed="false"><span class="pause-icon"></span><span class="pause-label"></span></button>
            <span class="perf" aria-live="off"></span>
          </footer>
        </ha-card>`;
        this.bind();
    }

    private $<T extends Element = HTMLElement>(sel: string): T {
        return this.root.querySelector(sel) as T;
    }

    private bind(): void {
        const w = this.world;
        this.root.querySelectorAll<HTMLElement>('.seg').forEach(group => {
            group.addEventListener('click', e => {
                const b = (e.target as HTMLElement).closest('button');
                if (!b) return;
                w.set({ [group.dataset.seg!]: b.dataset.v } as Partial<DevState>);
            });
            group.addEventListener('keydown', e => this.roveRadio(e, group, 'button'));
        });
        const keys = this.$('.keys');
        keys.addEventListener('click', e => {
            const b = (e.target as HTMLElement).closest<HTMLElement>('.key');
            if (b) w.set({ sky: b.dataset.sky as DevSky });
        });
        keys.addEventListener('keydown', e => this.roveRadio(e, keys, '.key'));

        const range = this.$<HTMLInputElement>('.scrub input');
        range.addEventListener('input', () => {
            this.scrubbing = true;
            this.scrubAt = Number(range.value);
            this.placeSun(this.scrubAt);
            // The cards follow at most ten times a second while the time is dragged, and settle on the change
            if (!this.scrubTimer) this.scrubTimer = setTimeout(() => { this.scrubTimer = undefined; this.timeTo(this.scrubAt); }, 100);
        });
        range.addEventListener('change', () => {
            clearTimeout(this.scrubTimer);
            this.scrubTimer = undefined;
            this.scrubbing = false;
            this.timeTo(Number(range.value));
        });
        this.$('.now').addEventListener('click', () => w.set({ offset: 0 }));
        this.$('.day-prev').addEventListener('click', () => w.set({ offset: w.state.offset - 1440 }));
        this.$('.day-next').addEventListener('click', () => w.set({ offset: w.state.offset + 1440 }));

        this.$('.r-grid').addEventListener('click', e => {
            const t = e.target as HTMLElement;
            const row = t.closest<HTMLElement>('.reading');
            if (!row) return;
            const id = row.dataset.r as Reading;
            if (t.closest('.r-auto')) { w.set({ [id]: null } as Partial<DevState>); return; }
            const step = t.closest<HTMLElement>('.step');
            if (step) this.stepReading(id, Number(step.dataset.d));
        });
        this.$('.fly').addEventListener('click', () => w.fly());
        this.$('.pause').addEventListener('click', () => { w.pause(!w.paused()); this.sync(); });
    }

    /** Arrows move through a radio group and pick, as a native one does */
    private roveRadio(e: KeyboardEvent, group: HTMLElement, sel: string): void {
        const d = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        const items = [...group.querySelectorAll<HTMLElement>(sel)].filter(b => !(b as HTMLButtonElement).disabled);
        const at = items.indexOf(this.root.activeElement as HTMLElement);
        const next = items[(at + d + items.length) % items.length];
        next?.focus();
        next?.click();
    }

    // ── Time ─────────────────────────────────────────────────────────────────

    private hass(): HomeAssistant | undefined {
        return this.shell.devCardHass;
    }

    /** The cards' minute of the day, in the zone they show times in */
    private minuteNow(): number {
        return Math.floor(hourOfDay(cardDate(), this.hass()) * 60);
    }

    /** Move the cards' clock to a minute of today, by whole minutes from where it is */
    private timeTo(minute: number): void {
        const delta = Math.round(minute) - this.minuteNow();
        if (delta) this.world.set({ offset: this.world.state.offset + delta });
    }

    private where(): { latitude: number; longitude: number } {
        const lat = Number(this.hass()?.config?.latitude), lon = Number(this.hass()?.config?.longitude);
        return isFinite(lat) && isFinite(lon) && (lat || lon) ? { latitude: lat, longitude: lon } : { latitude: 51.48, longitude: 0 };
    }

    /** Today's sun, every ten minutes, from the real one where Home Assistant is: the path, and when it rises and sets */
    private drawPath(): void {
        const { latitude, longitude } = this.where();
        const now = cardDate();
        const start = now.getTime() - Math.floor(hourOfDay(now, this.hass()) * 60) * MINUTE;
        const key = `${Math.round(start / MINUTE)}|${latitude}|${longitude}`;
        if (key === this.pathDay) return;
        this.pathDay = key;
        const samples: number[] = [];
        for (let m = 0; m <= 1440; m += 10) samples.push(solarElevation(new Date(start + m * MINUTE), latitude, longitude));
        const peak = Math.max(10, ...samples), depth = Math.max(10, ...samples.map(e => -e));
        const y = (e: number) => e >= 0 ? 78 - (e / peak) * 64 : 78 + (-e / depth) * 34;
        const pts = samples.map((e, i) => `${(i / 144) * 1000},${y(e).toFixed(1)}`);
        this.$('.night-path').setAttribute('d', `M${pts.join('L')}`);
        // The day: the path above the horizon, drawn over the night's
        const runs: string[][] = [];
        samples.forEach((e, i) => {
            if (e <= 0) { if (runs.length && runs[runs.length - 1].length) runs.push([]); return; }
            if (!runs.length) runs.push([]);
            runs[runs.length - 1].push(pts[i]);
        });
        this.$('.day-path').setAttribute('d', runs.filter(r => r.length).map(r => `M${r.join('L')}`).join(''));
        this.yOf = y;
        this.samples = samples;
        // Sunrise and sunset, where the path crosses the sun's rim under the horizon
        const cross = (up: boolean) => {
            for (let i = 1; i < samples.length; i++) {
                const a = samples[i - 1] + 0.833, b = samples[i] + 0.833;
                if (up ? a < 0 && b >= 0 : a >= 0 && b < 0) return new Date(start + (i - 1 + a / (a - b)) * 10 * MINUTE);
            }
            return null;
        };
        const fmt = (d: Date | null) => d ? this.clock(d) : '–';
        this.$('.t-rise').textContent = `Sunrise ${fmt(cross(true))}`;
        this.$('.t-set').textContent = `Sunset ${fmt(cross(false))}`;
    }
    private yOf: (e: number) => number = () => 78;
    private samples: number[] = [];

    private placeSun(minute: number): void {
        const i = Math.min(this.samples.length - 1, Math.max(0, minute / 10));
        const a = this.samples[Math.floor(i)] ?? 0, b = this.samples[Math.ceil(i)] ?? a;
        const e = a + (b - a) * (i - Math.floor(i));
        const x = (minute / 1440) * 100;
        const dot = this.$('.sun-dot');
        dot.style.left = `${x}%`;
        dot.style.top = `${(this.yOf(e) / 120) * 100}%`;
        dot.toggleAttribute('data-down', e < -0.833);
        this.$('.needle').setAttribute('x1', String(x * 10));
        this.$('.needle').setAttribute('x2', String(x * 10));
        text(this.$('.t-value'), this.clock(new Date(cardDate().getTime() + (minute - this.minuteNow()) * MINUTE)));
    }

    private clock(d: Date): string {
        const { time, period } = clockParts(d, this.hass());
        return period ? `${time} ${period}` : time;
    }

    // ── Everything that changes ─────────────────────────────────────────────

    private sync(): void {
        const w = this.world;
        const s = w.state;
        const hass = this.hass();
        const sim = s.source === 'sim';
        const clock = w.clockMoves();

        // The window: the world, or your Home Assistant when live
        this.paintWindow(hass);

        this.setSeg('source', s.source);
        this.setSeg('shape', s.shape);
        this.setSeg('notes', s.notes);
        const driven = w.driving().length;
        const mode = this.shell.devCardConfig?.cards === 'dev_mode' ? ' in dev mode' : '';
        text(this.$('.driving'), sim ? `Driving ${driven} card${driven === 1 ? '' : 's'}${mode}` : `${driven ? `${driven} on the dev card's weather, the rest` : 'Every card'} on yours`);
        this.root.querySelectorAll<HTMLElement>('[data-sim]').forEach(el => el.toggleAttribute('data-off', !sim));
        this.root.querySelectorAll<HTMLButtonElement>('[data-sim] button, [data-sim] input').forEach(el => { el.disabled = !sim; });

        const now = w.now(hass);
        this.root.querySelectorAll<HTMLElement>('.key').forEach(k => {
            const sky = k.dataset.sky as DevSky;
            k.setAttribute('aria-checked', String(sky === s.sky));
            k.tabIndex = sky === s.sky ? 0 : -1;
            const state = sky === 'clear' ? (now.day ? 'sunny' : 'clear-night') : sky;
            const g = k.querySelector('.key-glyph')!;
            if (g.getAttribute('data-for') !== state) { g.innerHTML = glyph(state, now.day, 22, null, 'kg'); g.setAttribute('data-for', state); }
        });

        // Time: only while the dev card drives every card, since it moves every card's clock
        this.$('.t-note').hidden = !sim || clock;
        this.root.querySelectorAll<HTMLButtonElement>('.time button, .time input').forEach(el => { el.disabled = !sim || !clock; });
        this.$('.time').toggleAttribute('data-off', !sim || !clock);
        this.drawPath();
        const minute = this.minuteNow();
        if (!this.scrubbing) {
            this.$<HTMLInputElement>('.scrub input').value = String(minute);
            this.$<HTMLInputElement>('.scrub input').setAttribute('aria-valuetext', this.clock(cardDate()));
            this.placeSun(minute);
        }
        this.$('.now').hidden = s.offset === 0;
        const today = cardDate();
        const date = shortDate(today, hass, true);
        // Today is the real one, in the zone the cards show times in
        text(this.$('.d-date'), date === shortDate(new Date(), hass, true) ? `Today, ${date}` : date);
        const moon = moonPhaseName(today);
        const moonIcon = this.$('.d-moon-icon');
        if (moonIcon.dataset.for !== moon) { moonIcon.innerHTML = icon(`moon-${moon.replace('_moon', '').replace(/_/g, '-')}` as IconName, 'moon-ic'); moonIcon.dataset.for = moon; }
        text(this.$('.d-moon-name'), MOON_LABELS[moon] ?? moon);

        // Readings, in the units you read them in
        const units = hass ? unitsOf(hass) : null;
        (Object.keys(READINGS) as Reading[]).forEach(id => {
            const spec = READINGS[id];
            const row = this.$(`.reading[data-r="${id}"]`);
            const auto = spec.auto && s[id] === null;
            const value = id === 'temp' ? now.reading.temp : id === 'feels' ? now.reading.feels : id === 'uv' ? now.uv : s[id] as number;
            text(row.querySelector('.r-value')!, this.show(id, value, units));
            row.toggleAttribute('data-auto', !!auto);
            const a = row.querySelector<HTMLButtonElement>('.r-auto');
            if (a) a.hidden = !!auto;
        });

        // The foot
        const paused = w.paused();
        const p = this.$('.pause');
        p.setAttribute('aria-pressed', String(paused));
        const pauseIcon = this.$('.pause-icon');
        if (pauseIcon.dataset.paused !== String(paused)) { pauseIcon.innerHTML = paused ? ICONS.play : ICONS.pause; pauseIcon.dataset.paused = String(paused); }
        text(this.$('.pause-label'), paused ? 'Resume all' : 'Pause all');
    }

    private setSeg(name: string, value: string): void {
        this.root.querySelectorAll<HTMLElement>(`.seg[data-seg="${name}"] button`).forEach(b => {
            const on = b.dataset.v === value;
            b.setAttribute('aria-checked', String(on));
            b.tabIndex = on ? 0 : -1;
        });
    }

    private show(id: Reading, value: number, units: ReturnType<typeof unitsOf> | null): string {
        const spec = READINGS[id];
        if (id === 'bearing') return `${COMPASS[Math.round(value / 45) % 8]} ${Math.round(value)}°`;
        if (!spec.kind || !units) return `${id === 'uv' ? Math.round(value) : Math.round(value)}${spec.unit === '%' ? '%' : ''}`;
        const u = units[spec.kind];
        const v = CONVERT[spec.kind](value, u);
        const unit = spec.kind === 'temperature' ? '°' : ` ${u}${id === 'rainRate' ? '/h' : ''}`;
        const digits = spec.kind === 'temperature' ? 0 : spec.kind === 'pressure' && u === 'inHg' ? 2 : spec.kind === 'precipitation' ? (u === 'in' ? 2 : 1) : 0;
        return `${(spec.kind === 'temperature' ? Math.round(v) : v).toFixed(digits).replace(/^-/, '−')}${unit}`;
    }

    /** A reading one step up or down, in your units, kept to its range */
    private stepReading(id: Reading, d: number): void {
        const w = this.world;
        const spec = READINGS[id];
        const now = w.now(this.hass());
        const current = id === 'temp' ? now.reading.temp : id === 'feels' ? now.reading.feels : id === 'uv' ? now.uv : w.state[id] as number;
        let next: number;
        if (spec.kind && this.hass()) {
            const u = unitsOf(this.hass()!)[spec.kind];
            const shown = CONVERT[spec.kind](current, u);
            const step = spec.step(u);
            next = fromUnit(spec.kind, Math.round((shown + d * step) / step) * step, u);
        } else next = current + d * spec.step('');
        if (spec.wrap) next = ((next % 360) + 360) % 360;
        else next = Math.min(spec.hi, Math.max(spec.lo, next));
        w.set({ [id]: Math.round(next * 100) / 100 } as Partial<DevState>);
    }

    private paintWindow(hass: HomeAssistant | undefined): void {
        const w = this.world;
        let state: string, elevation: number, rising: boolean, temp: string;
        if (w.state.source === 'sim') {
            const n = w.now(hass);
            state = n.state; elevation = n.elevation; rising = n.rising;
            const u = hass ? unitsOf(hass).temperature : '°C';
            temp = `${Math.round(CONVERT.temperature(n.reading.temp, u))}°`.replace(/^-/, '−');
        } else {
            // Live: your first weather entity, under your sun
            const id = Object.keys(hass?.states ?? {}).find(k => k.startsWith('weather.'));
            const e = id ? hass!.states[id] : undefined;
            const sun = hass?.states['sun.sun'];
            state = e?.state ?? 'cloudy';
            elevation = Number(sun?.attributes?.elevation ?? 30);
            rising = !!sun?.attributes?.rising;
            const t = Number(e?.attributes?.temperature);
            temp = isFinite(t) ? `${Math.round(t)}°`.replace(/^-/, '−') : '';
        }
        const day = elevation > -0.833;
        const phase = skyPhaseFromSun(elevation, rising, day);
        const cls = getWeatherClass(state, undefined, undefined, undefined, { night: phase === 'night' }) as SkyCondition;
        const sky = skyColors(cls, phase);
        const win = this.$('.window');
        win.style.setProperty('--awc-sky-top', sky.top);
        win.style.setProperty('--awc-sky-mid', sky.mid);
        win.dataset.phase = phase;
        const lum = Math.max(relativeLuminance(hexRgb(sky.top)), relativeLuminance(hexRgb(sky.mid)));
        const g = this.$('.w-glyph');
        const gKey = `${state}|${phase}|${cls}`;
        if (g.dataset.for !== gKey) { g.innerHTML = glyph(state, day, 30, litTints(elevation, rising, lum), 'wg'); g.dataset.for = gKey; }
        const name = hass?.formatEntityState?.({ entity_id: 'weather.awc_dev', state, attributes: {}, last_changed: '', last_updated: '' } as never) ?? state;
        text(this.$('.w-name'), name && name !== state ? name : (SKY_LABELS[state as DevSky] ?? state));
        const at = cardDate();
        text(this.$('.w-when'), `${this.clock(at)} · ${shortDate(at, hass, true)}`);
        text(this.$('.w-temp'), temp);
        win.style.color = toCss(SKY_TEXT);
    }

    // ── What it costs ────────────────────────────────────────────────────────

    /** Frames counted while the dev card is on screen and the tab is visible, and the particles on the cards it drives */
    private measure = (): void => {
        const on = this.seen && !document.hidden;
        if (on && !this.perf.raf) {
            this.perf.frames = 0;
            this.perf.since = performance.now();
            const tick = () => { this.perf.frames++; this.perf.raf = requestAnimationFrame(tick); };
            this.perf.raf = requestAnimationFrame(tick);
            this.perf.timer = setInterval(() => this.report(), 1000);
        } else if (!on && this.perf.raf) {
            cancelAnimationFrame(this.perf.raf);
            clearInterval(this.perf.timer);
            this.perf.raf = 0;
        }
    };

    private report(): void {
        const t = performance.now();
        const fps = Math.round((this.perf.frames * 1000) / Math.max(1, t - this.perf.since));
        this.perf.frames = 0;
        this.perf.since = t;
        let particles = 0;
        for (const card of this.world.driving()) particles += card.querySelectorAll('.raindrop, .snowflake, .sleet-particle, .wind-leaf, .wind-swoosh, .star-gsap, .cloud-gsap, .fog-layer, .plane').length;
        this.$('.perf').textContent = `${fps} fps · ${particles} particles`;
        // The clock moves on its own: the time and the window follow it
        if (!this.scrubbing) this.sync();
    }
}

/** Text written only when it changes, so nothing is announced or laid out again for the same words */
function text(el: Element, value: string): void {
    if (el.textContent !== value) el.textContent = value;
}

function hexRgb(hex: string): [number, number, number] {
    const m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i.exec(hex);
    return m ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255] : [0.5, 0.5, 0.5];
}

function toCss(oklch: [number, number, number]): string {
    const [r, g, b] = oklchToSrgb(oklch);
    return `rgb(${Math.round(r * 255)} ${Math.round(g * 255)} ${Math.round(b * 255)})`;
}

export function attach(shell: DevCardShell): DevCardView {
    return new DevPanel(shell);
}
