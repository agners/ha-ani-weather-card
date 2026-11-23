// FogAnimation - Modular fog animation with layered scrolling fog

import { BaseAnimation, BaseAnimationConfig, AnimationLifecycleState } from './base-animation';
import { AnimatedWeatherCardConfig, EngineAmounts, GSAPTimeline } from './types';
import { getWeatherSettings, devLog } from './utils';
import { createGSAPFogLayer, clearFogLayers } from './gsap-effects';
import { SKY_DISSOLVE_SEC } from './sky';

export interface FogAnimationConfig extends BaseAnimationConfig {
    layerCount: number;
}

export class FogAnimation extends BaseAnimation {
    public readonly animationType = 'fog';
    public readonly layerSelector = '.animation-layer';
    public readonly containerSelector = '.fog-container';

    protected fogConfig: FogAnimationConfig;
    protected fogTimelines: GSAPTimeline[] = [];

    constructor(
        element: HTMLElement,
        config: BaseAnimationConfig & Partial<FogAnimationConfig>,
        cardConfig: AnimatedWeatherCardConfig,
        realWindSpeed?: number
    ) {
        super(element, config, cardConfig);
        this.realWindSpeed = realWindSpeed;
        this.fogConfig = {
            layerCount: 3,
            ...config
        };
        devLog(this.config.devMode, 'FogAnimation created');
    }

    protected async onStart(): Promise<void> {
        if (!window.AnimatedWeatherCardGsap) {
            throw new Error('GSAP not loaded - cannot start fog animation');
        }

        const fogContainer = this.element.querySelector('.fog-container') || this.element.querySelector(this.layerSelector);
        if (!fogContainer) {
            throw new Error(`Fog container not found`);
        }

        const settings = getWeatherSettings(this.cardConfig, this.realWindSpeed);
        const card = this.element.querySelector('.animated-weather-card') as HTMLElement;

        // Clear existing fog layers
        clearFogLayers(card);

        // The layers in one wrapper, whose opacity is how thick the fog is (auto mode's amounts, by the visibility).
        // Nothing else writes it: the container's own opacity is the condition's fades and the slide's.
        const amount = document.createElement('div');
        amount.className = 'fog-amount';
        fogContainer.appendChild(amount);
        window.AnimatedWeatherCardGsap.set(amount, { opacity: this.amounts?.fog ?? 1 });

        // Create fog layers
        this.fogTimelines = [];
        for (let i = 0; i < this.fogConfig.layerCount; i++) {
            const fogLayerTimelines = createGSAPFogLayer(amount, settings, i, card, this.cardConfig);
            this.fogTimelines.push(fogLayerTimelines.movement);
            this.fogTimelines.push(fogLayerTimelines.opacity);
        }

        devLog(this.config.devMode, `Fog animation started with ${this.fogConfig.layerCount} layers`);
    }

    protected async onStop(): Promise<void> {
        // Kill all fog timelines
        this.fogTimelines.forEach(tl => {
            if (tl && typeof tl.kill === 'function') tl.kill();
        });
        this.fogTimelines = [];

        // Remove fog DOM elements
        const card = this.element.querySelector('.animated-weather-card') as HTMLElement;
        const fogLayers = card?.querySelectorAll('.fog-layer, .fog-amount');
        fogLayers?.forEach(layer => {
            if (window.AnimatedWeatherCardGsap) window.AnimatedWeatherCardGsap.killTweensOf(layer);
            if (layer.parentNode) layer.parentNode.removeChild(layer);
        });

        devLog(this.config.devMode, 'Fog animation stopped');
    }

    protected async onPause(): Promise<void> {
        this.fogTimelines.forEach(tl => {
            if (tl && typeof tl.pause === 'function') tl.pause();
        });
        devLog(this.config.devMode, 'Fog animation paused');
    }

    protected async onResume(): Promise<void> {
        this.fogTimelines.forEach(tl => {
            if (tl && typeof tl.resume === 'function') tl.resume();
        });
        devLog(this.config.devMode, 'Fog animation resumed');
    }

    /** New amounts: the fog thickens or thins over the sky's few seconds, or in a moment for the slide's hours */
    protected onAmountsChange(_previous: EngineAmounts | null, quick: boolean): void {
        const amount = this.element.querySelector('.fog-amount');
        if (!amount) return;
        window.AnimatedWeatherCardGsap?.to(amount, { opacity: this.amounts?.fog ?? 1, duration: quick ? 0.3 : SKY_DISSOLVE_SEC, ease: 'sine.inOut', overwrite: true });
    }
}
