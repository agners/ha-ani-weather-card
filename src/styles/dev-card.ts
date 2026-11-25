// The dev card's CSS (the dev bundle). A window onto the world, painted with its own sky, over your theme's own
// colours: the sky is the only colour on the card, the sun's gold marks only the sun, and what's picked is the
// theme's ink. Motion is state: a press, a pick, the window's sky dissolving to the next.

export function getDevCardStyles(): string {
    return `
:host { display: block; }
.dc {
  --dc-ink: var(--primary-text-color, #1d1f22);
  --dc-quiet: var(--secondary-text-color, #6f7378);
  --dc-line: var(--divider-color, rgba(30, 32, 36, 0.12));
  --dc-well: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
  --dc-surface: var(--ha-card-background, var(--card-background-color, #fbfbfa));
  --dc-focus: var(--primary-color, #3b82c4);
  --dc-sun: #ffc65c;
  --dc-ease: cubic-bezier(0.23, 1, 0.32, 1);
  display: block;
  overflow: hidden;
  color: var(--dc-ink);
  font-family: inherit;
  -webkit-font-smoothing: antialiased;
}
button, input { font: inherit; color: inherit; }
button { -webkit-tap-highlight-color: transparent; }
button:focus-visible, summary:focus-visible { outline: 2px solid var(--dc-focus); outline-offset: 2px; }
button:disabled { cursor: default; }

/* The window: the world's sky, zenith to the middle, with the text at full strength */
.window {
  display: flex; align-items: flex-end; justify-content: space-between; gap: 12px;
  min-height: 92px; padding: 16px 18px 14px; box-sizing: border-box;
  background: linear-gradient(180deg, var(--awc-sky-top, #3e78c6), var(--awc-sky-mid, #6aa0dd));
  transition: --awc-sky-top 600ms var(--dc-ease), --awc-sky-mid 600ms var(--dc-ease);
}
.w-cond { display: flex; align-items: center; gap: 10px; min-width: 0; }
.w-glyph { flex: none; width: 30px; height: 30px; }
.w-glyph svg { display: block; overflow: visible; }
.w-text { min-width: 0; }
.w-name { font-size: 15px; line-height: 20px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.w-when { font-size: 13px; line-height: 18px; font-variant-numeric: tabular-nums; }
.w-temp { font-size: 40px; line-height: 1; font-weight: 300; letter-spacing: -0.02em; font-variant-numeric: tabular-nums; }

.body { display: grid; grid-template-columns: minmax(0, 1fr); gap: 18px; padding: 14px 16px 2px; }
.bar { display: flex; align-items: center; justify-content: space-between; gap: 8px 12px; flex-wrap: wrap; }
.driving { font-size: 12px; line-height: 16px; color: var(--dc-quiet); font-variant-numeric: tabular-nums; }

h3 { margin: 0 0 8px; font-size: 12px; line-height: 16px; font-weight: 600; color: var(--dc-quiet); letter-spacing: 0.01em; }
[data-off] { opacity: 0.45; }
[data-off] [data-off] { opacity: 1; }

/* A segmented switch: the picked option in the theme's ink */
.seg { display: inline-flex; gap: 2px; padding: 2px; border-radius: 9px; background: var(--dc-well); }
.seg button {
  border: 0; border-radius: 7px; padding: 6px 12px; background: transparent; cursor: pointer;
  font-size: 13px; line-height: 18px; font-weight: 500; white-space: nowrap;
  transition: background-color 150ms ease, color 150ms ease, transform 160ms var(--dc-ease);
}
.seg button[aria-checked="true"] { background: var(--dc-ink); color: var(--dc-surface); }

/* The weather */
.keys { display: grid; grid-template-columns: repeat(auto-fill, minmax(72px, 1fr)); gap: 4px; }
.key {
  display: grid; justify-items: center; align-content: start; gap: 5px; padding: 9px 4px 8px;
  border: 0; border-radius: 10px; background: transparent; cursor: pointer;
  font-size: 11.5px; line-height: 14px; font-weight: 500; text-align: center;
  transition: background-color 150ms ease, color 150ms ease, transform 160ms var(--dc-ease);
}
.key-glyph { width: 22px; height: 22px; }
.key-glyph svg { display: block; overflow: visible; }
.key[aria-checked="true"] { background: var(--dc-ink); color: var(--dc-surface); }
@media (hover: hover) and (pointer: fine) {
  .key:not([aria-checked="true"]):not(:disabled):hover, .icon-btn:not(:disabled):hover { background: var(--dc-well); }
  .seg button:not([aria-checked="true"]):not(:disabled):hover { color: var(--dc-ink); background: color-mix(in srgb, var(--dc-ink) 6%, transparent); }
}
.key:active, .seg button:active, .btn:active, .step:active, .icon-btn:active, .link:active { transform: scale(0.97); }
.key:disabled:active, .seg button:disabled:active, .btn:disabled:active, .step:disabled:active, .icon-btn:disabled:active { transform: none; }

/* Time: the scrubber over today's real sun */
.sec-head { display: flex; align-items: baseline; gap: 8px; margin-bottom: 8px; }
.sec-head h3 { margin: 0; }
.t-value { font-size: 13px; line-height: 16px; font-variant-numeric: tabular-nums; }
.link {
  margin-left: auto; border: 0; border-radius: 7px; padding: 3px 9px; background: var(--dc-well); cursor: pointer;
  font-size: 12px; line-height: 18px; font-weight: 600; transition: transform 160ms var(--dc-ease);
}
.link[hidden] { display: none; }
.scrub { position: relative; height: 76px; border-radius: 10px; background: var(--dc-well); }
.scrub input { position: absolute; inset: 0; width: 100%; height: 100%; margin: 0; opacity: 0; cursor: grab; z-index: 2; touch-action: pan-y; }
.scrub input:active { cursor: grabbing; }
.scrub input:disabled { cursor: default; }
.track { position: absolute; inset: 6px 0; pointer-events: none; }
.sky-path { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.sky-path * { vector-effect: non-scaling-stroke; fill: none; }
.horizon { stroke: var(--dc-line); stroke-width: 1; }
.night-path { stroke: var(--dc-quiet); stroke-opacity: 0.5; stroke-width: 1.25; }
.day-path { stroke: var(--dc-ink); stroke-width: 2; stroke-linejoin: round; stroke-linecap: round; }
.needle { stroke: var(--dc-ink); stroke-opacity: 0.22; stroke-width: 1; }
.sun-dot {
  position: absolute; width: 14px; height: 14px; margin: -7px 0 0 -7px; border-radius: 50%; pointer-events: none; box-sizing: border-box;
  background: var(--dc-sun); box-shadow: 0 0 0 2px var(--dc-surface), 0 0 14px 2px rgba(255, 198, 92, 0.5);
}
.sun-dot[data-down] { background: var(--dc-surface); border: 1.5px solid var(--dc-quiet); box-shadow: 0 0 0 2px var(--dc-surface); }
.scrub input:focus-visible ~ .track .sun-dot { box-shadow: 0 0 0 2px var(--dc-surface), 0 0 0 4px var(--dc-focus); }
.ticks { display: flex; justify-content: space-between; margin-top: 6px; font-size: 11.5px; line-height: 16px; color: var(--dc-quiet); font-variant-numeric: tabular-nums; }
.day { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 2px; margin-top: 10px; }
.icon-btn {
  display: grid; place-items: center; width: 30px; height: 30px; border: 0; border-radius: 8px; background: transparent; cursor: pointer;
  transition: background-color 150ms ease, transform 160ms var(--dc-ease);
}
.icon-btn svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.d-date { padding: 0 6px; font-size: 13px; line-height: 18px; font-weight: 500; font-variant-numeric: tabular-nums; white-space: nowrap; }
.d-moon { margin-left: auto; display: inline-flex; align-items: center; gap: 6px; font-size: 12px; line-height: 16px; color: var(--dc-quiet); white-space: nowrap; }
.moon-ic { width: 16px; height: 16px; fill: currentColor; }
.t-note { margin: 8px 0 0; font-size: 12px; line-height: 16px; color: var(--dc-quiet); }

/* Readings */
.readings summary { display: flex; align-items: baseline; gap: 8px; list-style: none; cursor: pointer; border-radius: 6px; }
.readings summary::-webkit-details-marker { display: none; }
.readings summary h3 { margin: 0; }
.readings summary::after {
  content: ''; margin-left: auto; align-self: center; width: 6px; height: 6px;
  border-right: 1.5px solid var(--dc-quiet); border-bottom: 1.5px solid var(--dc-quiet);
  transform: translateY(-2px) rotate(45deg); transition: transform 150ms var(--dc-ease);
}
.readings[open] summary::after { transform: translateY(1px) rotate(-135deg); }
.r-hint { flex: 1; width: 0; font-size: 12px; line-height: 16px; color: var(--dc-quiet); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.r-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(196px, 1fr)); gap: 6px 18px; margin-top: 10px; }
.reading { display: flex; align-items: center; gap: 6px; min-height: 32px; }
.r-label { flex: 1; font-size: 13px; line-height: 18px; min-width: 0; }
.stepper { display: inline-flex; align-items: center; border-radius: 8px; background: var(--dc-well); }
.step {
  width: 28px; height: 28px; border: 0; border-radius: 7px; background: transparent; cursor: pointer;
  font-size: 16px; line-height: 1; transition: transform 160ms var(--dc-ease);
}
.r-value { min-width: 72px; text-align: center; font-size: 13px; line-height: 18px; font-variant-numeric: tabular-nums; }
.reading[data-auto] .r-value { color: var(--dc-quiet); }
.r-auto { border: 0; padding: 2px 4px; background: none; cursor: pointer; font-size: 11.5px; font-weight: 600; color: var(--dc-focus); }
.r-auto[hidden] { display: none; }

.pair { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 16px; }

/* The foot: a plane, a pause, and what it costs */
.foot { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 16px; padding: 12px 16px 14px; border-top: 1px solid var(--dc-line); }
.btn {
  display: inline-flex; align-items: center; gap: 6px; height: 32px; padding: 0 12px 0 9px; border: 0; border-radius: 9px;
  background: var(--dc-well); cursor: pointer; font-size: 13px; line-height: 18px; font-weight: 500;
  transition: background-color 150ms ease, color 150ms ease, transform 160ms var(--dc-ease);
}
.btn svg { width: 18px; height: 18px; display: block; }
.pause-icon { display: inline-flex; }
.btn[aria-pressed="true"] { background: var(--dc-ink); color: var(--dc-surface); }
.perf { margin-left: auto; font-size: 12px; line-height: 16px; color: var(--dc-quiet); font-variant-numeric: tabular-nums; }

@media (prefers-reduced-motion: reduce) {
  .window, .key, .seg button, .btn, .step, .icon-btn, .link, .readings summary::after { transition: none; }
  .key:active, .seg button:active, .btn:active, .step:active, .icon-btn:active, .link:active { transform: none; }
}
`;
}
