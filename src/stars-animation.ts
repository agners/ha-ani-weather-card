// StarsAnimation - Modular stars and moon animation for clear night sky

import { BaseAnimation, BaseAnimationConfig, AnimationLifecycleState } from './base-animation';
import { AnimatedWeatherCardConfig } from './types';
import { getWeatherSettings, devLog } from './utils';

/** Stars on a phone-wide card for each cloud of engine_settings.cloudCount (15 by default); a wider card has more, to this width */
const STARS_PER_CLOUD = 5;
const STAR_WIDTH = 353;
const STAR_WIDTH_MAX = 1440;
/** Half the stars twinkle: down to a quarter to under half of their light and back, over 2 to 4 s each way */
const STAR_TWINKLE_SHARE = 1 / 2;
const STAR_TWINKLE_LOW = 0.25;
const STAR_TWINKLE_SPREAD = 0.2;
const STAR_TWINKLE_S = 2;
const STAR_TWINKLE_SPREAD_S = 2;

/**
 * How many stars a card of this width shows: as many across a phone's width as the engine's clouds call for (at least
 * 15), and as many again for every phone's width more, up to 1440 px, so a wide card's sky is as full as a phone's
 */
export function starCount(cloudCount: number, width: number): number {
    const w = width > 0 ? Math.min(width, STAR_WIDTH_MAX) : STAR_WIDTH;
    return Math.max(15, Math.round(cloudCount * STARS_PER_CLOUD * Math.max(1, w / STAR_WIDTH)));
}

/**
 * Room around a word, px. A star nearer than this reads as part of it: on the line, as its punctuation ("Clear; night",
 * "Feels like 18° ."), so the room beside a word is wider than above and below it
 */
const WORD_ROOM_X = 20;
const WORD_ROOM_Y = 10;
/** Tries at a place clear of the words before a star is drawn veiled */
const STAR_TRIES = 12;

type Box = { left: number; top: number; right: number; bottom: number };
const near = (a: Box, b: Box) => a.right > b.left - WORD_ROOM_X && a.left < b.right + WORD_ROOM_X
    && a.bottom > b.top - WORD_ROOM_Y && a.top < b.bottom + WORD_ROOM_Y;

/**
 * The card's words as tight boxes: each line of each text, and each icon, outside the sky's own layers (the sun, the
 * moon, the stars, the planes' tags and the weather). A block's own box would cover the whole width of its line.
 */
export function wordBoxes(card: Element): Box[] {
    const boxes: Box[] = [];
    const range = document.createRange();
    if (typeof range.getClientRects !== 'function') return boxes;
    const sky = '.animation-layer, .animation-container, style, script';
    const walker = document.createTreeWalker(card, NodeFilter.SHOW_TEXT);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
        if (!n.nodeValue?.trim() || n.parentElement?.closest(sky)) continue;
        range.selectNodeContents(n);
        for (const r of Array.from(range.getClientRects())) if (r.width && r.height) boxes.push(r);
    }
    for (const icon of Array.from(card.querySelectorAll('svg, ha-icon'))) {
        if (icon.closest(sky)) continue;
        const r = icon.getBoundingClientRect();
        if (r.width && r.height) boxes.push(r);
    }
    return boxes;
}

/** A star that sits on a word steps out of sight (visibility, so its twinkle carries on unseen); the rest show */
export function veilStars(stars: Iterable<HTMLElement>, words: Box[]): void {
    for (const star of stars) {
        const r = star.getBoundingClientRect();
        star.classList.toggle('awc-veiled', !!r.width && words.some(w => near(r, w)));
    }
}

/** No star behind a word, after the card has been fitted and its words have moved */
export function clearStarsFromWords(card: Element): void {
    const stars = card.querySelectorAll<HTMLElement>('.stars-field .star-gsap');
    if (stars.length) veilStars(stars, wordBoxes(card));
}

/**
 * A clear night in the card's sky layer: a field of stars and the moon. Stars twinkle with CSS keyframes
 * (compositor-only, no per-star tween), each on its own period and phase. A still night (reduced motion, animate:
 * false) has the same stars and moon, and none of them twinkle. Each star is placed clear of the card's words where
 * it can be (words: wordBoxes), so the sky keeps its count; one that finds no room is drawn veiled.
 */
export function drawNight(layer: Element, count: number, { moon, still = false, words = [] }: { moon: boolean; still?: boolean; words?: Box[] }): HTMLElement[] {
    const field = document.createElement('div');
    field.className = 'stars-field';
    const sky = (layer as HTMLElement).getBoundingClientRect();
    const placeable = words.length > 0 && sky.width > 0 && sky.height > 0;
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star-gsap';
        const size = 1 + Math.random() * 3;
        const opacity = 0.3 + Math.random() * 0.5;
        let left = 0, top = 0, clear = false;
        for (let t = 0; t < (placeable ? STAR_TRIES : 1) && !clear; t++) {
            left = Math.random() * 100;
            top = Math.random() * 70;
            const x = sky.left + (left / 100) * sky.width, y = sky.top + (top / 100) * sky.height;
            clear = !placeable || !words.some(w => near({ left: x, top: y, right: x + size, bottom: y + size }, w));
        }
        if (!clear) star.classList.add('awc-veiled');
        star.style.cssText = `
            width: ${size.toFixed(2)}px;
            height: ${size.toFixed(2)}px;
            left: ${left.toFixed(2)}%;
            top: ${top.toFixed(2)}%;
            opacity: ${opacity.toFixed(2)};
        `;
        if (!still && Math.random() < STAR_TWINKLE_SHARE) {
            const period = STAR_TWINKLE_S + Math.random() * STAR_TWINKLE_SPREAD_S;
            star.classList.add('twinkle');
            star.style.setProperty('--star-o', opacity.toFixed(2));
            star.style.setProperty('--star-dim', (opacity * (STAR_TWINKLE_LOW + Math.random() * STAR_TWINKLE_SPREAD)).toFixed(2));
            star.style.animationDuration = `${period.toFixed(2)}s`;
            star.style.animationDelay = `${(-Math.random() * period).toFixed(2)}s`;
        }
        field.appendChild(star);
    }
    layer.appendChild(field);
    const drawn = [field];
    // The moon takes the sun's place in the top-right, clear of the temperature. Its disc stays steady; only its halo
    // breathes (CSS), and a still night's rests
    if (moon) {
        const disc = document.createElement('div');
        disc.className = 'moon-gsap';
        layer.appendChild(disc);
        drawn.push(disc);
    }
    return drawn;
}

export interface StarsAnimationConfig extends BaseAnimationConfig {
    starCount: number;
    showMoon: boolean;
}

export class StarsAnimation extends BaseAnimation {
    public readonly animationType = 'stars';
    public readonly layerSelector = '.animation-layer';
    public readonly containerSelector = '.stars-container';

    protected starsConfig: StarsAnimationConfig;

    constructor(
        element: HTMLElement,
        config: BaseAnimationConfig & Partial<StarsAnimationConfig>,
        cardConfig: AnimatedWeatherCardConfig,
        realWindSpeed?: number
    ) {
        super(element, config, cardConfig);
        this.realWindSpeed = realWindSpeed;
        this.starsConfig = {
            starCount: 30,
            showMoon: true,
            ...config
        };
        devLog(this.config.devMode, 'StarsAnimation created');
    }

    protected async onStart(): Promise<void> {
        if (!window.AnimatedWeatherCardGsap) {
            throw new Error('GSAP not loaded - cannot start stars animation');
        }

        const animationLayer = this.element.querySelector(this.layerSelector);
        if (!animationLayer) {
            throw new Error(`Animation layer not found: ${this.layerSelector}`);
        }

        const settings = getWeatherSettings(this.cardConfig, this.realWindSpeed);
        const card = this.element.querySelector('.animated-weather-card') as HTMLElement;

        // Clear existing stars
        card?.querySelectorAll('.stars-field, .star-gsap, .moon-gsap').forEach(s => {
            if (window.AnimatedWeatherCardGsap) window.AnimatedWeatherCardGsap.killTweensOf(s);
            s.remove();
        });

        const count = starCount(settings.cloudCount, (animationLayer as HTMLElement).clientWidth || card?.clientWidth || 0);
        // The field and the moon fade in as one, rather than star by star
        for (const el of drawNight(animationLayer, count, { moon: this.starsConfig.showMoon, words: card ? wordBoxes(card) : [] })) {
            this.addParticle(el);
            window.AnimatedWeatherCardGsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power1.out' });
        }

        devLog(this.config.devMode, `Stars animation started with ${count} stars`);
    }

    protected async onStop(): Promise<void> {
        const animationLayer = this.element.querySelector(this.layerSelector);
        if (animationLayer) {
            const elements = animationLayer.querySelectorAll('.stars-field, .star-gsap, .moon-gsap');
            elements.forEach(el => {
                if (window.AnimatedWeatherCardGsap) window.AnimatedWeatherCardGsap.killTweensOf(el);
                if (el.parentNode) el.parentNode.removeChild(el);
            });
        }

        devLog(this.config.devMode, 'Stars animation stopped');
    }

    /** Twinkles and the moon's halo are CSS animations; pause them in place. */
    private setPaused(paused: boolean): void {
        this.element.querySelectorAll(`${this.layerSelector} .stars-field, ${this.layerSelector} .moon-gsap`)
            .forEach(el => el.classList.toggle('paused', paused));
    }

    protected async onPause(): Promise<void> {
        this.setPaused(true);
        devLog(this.config.devMode, 'Stars animation paused');
    }

    protected async onResume(): Promise<void> {
        this.setPaused(false);
        devLog(this.config.devMode, 'Stars animation resumed');
    }
}
