import { describe, it, expect } from 'vitest';
import { FORECAST_CSS } from '../../src/fc-css';
import { getDevCardStyles } from '../../src/styles/dev-card';

// Under a mouse, what can be dragged says so: an open hand over a card that slides through the hours, closed while it
// holds them. Never on touch, where there's no cursor, and never over the card's own controls, which keep theirs

describe('the cursor over what can be dragged', () => {
    it('is a hand over a sliding card, closed while it holds the hours, for a mouse only', () => {
        const media = FORECAST_CSS.slice(FORECAST_CSS.indexOf('@media (hover: hover) and (pointer: fine)'));
        expect(media).toMatch(/^@media \(hover: hover\) and \(pointer: fine\) \{\s*\.animated-weather-card\[data-slide\] \{ cursor: grab; \}\s*\.animated-weather-card\[data-slide\]\.awc-held \{ cursor: grabbing; \}/);
        // The chips keep their own pointer
        expect(FORECAST_CSS).toMatch(/\.fc-chip \{[^}]*cursor: pointer/);
    });

    it('is a hand over the dev card\'s time, closed while it\'s dragged', () => {
        const css = getDevCardStyles();
        expect(css).toMatch(/\.scrub input \{[^}]*cursor: grab;/);
        expect(css).toMatch(/\.scrub input:active \{ cursor: grabbing; \}/);
    });
});
