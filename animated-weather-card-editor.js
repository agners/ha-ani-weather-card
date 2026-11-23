"use strict";(()=>{var M={windSpeed:2,rainCount:1,leafCount:1,snowCount:1,cloudBaseSize:1,cloudCount:3,splashBounce:80},Ve={windSpeed:[.1,15],rainCount:[.1,10],leafCount:[.1,10],snowCount:[.1,10],cloudBaseSize:[.3,2.5],cloudCount:[1,20],splashBounce:[40,120]};var Je=t=>`
        ${t} ha-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: var(--mdc-icon-size, 24px);
          height: var(--mdc-icon-size, 24px);
          vertical-align: middle;
        }
`;var U=()=>`
${Je(".card-config")}
        .card-config {
          --awc-drawer: cubic-bezier(0.32, 0.72, 0, 1);
          --awc-in: cubic-bezier(0.25, 1, 0.5, 1);
          --awc-out: cubic-bezier(0.5, 0, 0.75, 0);
          --awc-press: cubic-bezier(0.23, 1, 0.32, 1);
          display: block;
          padding-bottom: 8px;
          color: var(--primary-text-color);
          font-size: 14px;
          line-height: 20px;
        }
        /* Whatever display a rule gives an element, hidden hides it */
        .card-config [hidden] { display: none !important; }
        /* A drawing never plays a reveal */
        .card-config[data-instant] *, .card-config[data-instant] *::before { transition: none !important; }
        .card-config .vh {
          position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden;
          clip: rect(0 0 0 0); white-space: nowrap; border: 0;
        }

        /* \u2500\u2500 Reveals: every row, section and drawer opens by its grid track \u2500\u2500 */
        .rv {
          display: grid;
          grid-template-rows: 0fr;
          visibility: hidden;
          transition: grid-template-rows 160ms var(--awc-drawer), visibility 0s linear 160ms;
        }
        .rv > .rv-in {
          min-height: 0;
          overflow: hidden;
          opacity: 0;
          /* Room either side for focus rings, at no height */
          padding-inline: 4px;
          margin-inline: -4px;
          transition: opacity 80ms var(--awc-out);
        }
        /* Open inherits, so a row inside a closed drawer stays out of reach */
        .rv[data-open] {
          grid-template-rows: 1fr;
          visibility: inherit;
          transition: grid-template-rows 220ms var(--awc-drawer), visibility 0s;
        }
        .rv[data-open] > .rv-in {
          opacity: 1;
          transition: opacity 160ms var(--awc-in) 30ms;
        }
        /* Opened and still: nothing's clipped, so a menu or a focus ring inside shows whole */
        .rv[data-open][data-settled] > .rv-in { overflow: visible; }
        /* Rows carry their own space, so a closed one takes none */
        .row { padding-top: 8px; }
        .row > ha-select, .row > ha-entity-picker, .row > ha-input, .row > ha-textfield { display: block; width: 100%; }

        /* \u2500\u2500 The switch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .top {
          padding: 4px 0 12px;
          border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
        }
        .top .sw-l { font-weight: 500; }

        /* \u2500\u2500 Sections: a quiet heading, no box \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .grp-b { padding-top: 20px; }
        .grp-h {
          margin: 0 0 2px;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          color: var(--secondary-text-color);
        }
        [data-sec="dev"] .grp-b { padding-top: 16px; }

        /* \u2500\u2500 Drawers: hairlines, a title and what's inside, a chevron \u2500\u2500\u2500\u2500\u2500\u2500 */
        /* A hairline above the drawers and under each, so a hidden one leaves none behind */
        .drws-b { margin-top: 24px; border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3)); }
        .drw-b { border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3)); }
        .drw-h { margin: 0; font: inherit; }
        .drw-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          box-sizing: border-box;
          width: calc(100% + 16px);
          min-height: 60px;
          margin: 0 -8px;
          padding: 10px 8px;
          border: 0;
          border-radius: 8px;
          background: none;
          color: inherit;
          font: inherit;
          text-align: left;
          cursor: pointer;
        }
        .drw-tx { display: flex; flex-direction: column; flex: 1; min-width: 0; }
        .drw-t { font-size: 15px; line-height: 20px; font-weight: 500; }
        .drw-s {
          font-size: 13px;
          line-height: 18px;
          color: var(--secondary-text-color);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .drw-in { padding-bottom: 16px; }
        .drw-in > .rv:first-child .row { padding-top: 0; }
        /* Drawers appearing with the switch fade in one after another */
        .drw[data-open] > .rv-in { transition-delay: calc(30ms + var(--i, 0) * 16ms); }
        /* A drawer's own content opens a touch slower: there's more of it */
        .drw-c { transition-duration: 200ms, 0s; transition-delay: 0s, 200ms; }
        .drw-c > .rv-in { transition-duration: 90ms; }
        .drw-c[data-open] { transition-duration: 260ms, 0s; transition-delay: 0s; }
        .drw-c[data-open] > .rv-in { transition: opacity 180ms var(--awc-in) 40ms; }

        .chev {
          flex: none;
          width: 20px;
          height: 20px;
          fill: var(--secondary-text-color);
          transition: transform 200ms var(--awc-in);
        }
        [aria-expanded="true"] > .chev { transform: rotate(180deg); transition-duration: 260ms; }

        /* Hover and press: a layer of the text's own colour, right in either theme */
        .drw-btn::before, .rd-head::before, .tb::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: currentColor;
          opacity: 0;
          pointer-events: none;
          transition: opacity 180ms var(--awc-press);
        }
        @media (hover: hover) {
          .drw-btn:hover::before, .rd-head:hover::before, .tb:not(:disabled):hover::before { opacity: 0.05; transition-duration: 110ms; }
        }
        .drw-btn:active::before, .rd-head:active::before, .tb:not(:disabled):active::before { opacity: 0.1; transition-duration: 60ms; }
        .drw-btn:focus-visible, .rd-head:focus-visible, .tb:focus-visible {
          outline: 2px solid var(--primary-color);
          outline-offset: -2px;
        }

        /* \u2500\u2500 Switch rows: a short name, one quiet line, the switch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .sw {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          min-height: 48px;
          cursor: pointer;
          user-select: none;
        }
        .sw-t { display: flex; flex-direction: column; min-width: 0; padding: 4px 0; }
        .sw-l { font-size: 14px; line-height: 20px; color: var(--primary-text-color); }
        .sw-h, .help {
          font-size: 12px;
          line-height: 16px;
          color: var(--secondary-text-color);
        }
        .help { margin: 6px 16px 0; }
        .seg .help { margin-left: 0; }
        .row > .help:first-child { margin: 0; }
        .sub-h {
          margin: 8px 0 4px;
          font-size: 13px;
          line-height: 18px;
          font-weight: 500;
          color: var(--secondary-text-color);
        }
        .drw-in > .rv:first-child .sub-h { margin-top: 0; }
        .sub-h + .help { margin: -2px 0 6px; }

        /* \u2500\u2500 A choice of two or three: segments \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .seg { min-width: 0; margin: 4px 0 0; padding: 0; border: 0; }
        .seg-l { padding: 0; margin: 0 0 6px; font-size: 14px; line-height: 20px; }
        .seg-track {
          display: flex;
          gap: 2px;
          padding: 3px;
          border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
          border-radius: 10px;
        }
        .seg-track label { position: relative; flex: 1 1 0; min-width: 0; cursor: pointer; }
        .seg-track input {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          margin: 0;
          opacity: 0;
          cursor: pointer;
        }
        .seg-track span {
          position: relative;
          isolation: isolate;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 34px;
          padding: 0 6px;
          border-radius: 7px;
          font-size: 13px;
          line-height: 16px;
          font-weight: 500;
          text-align: center;
          color: var(--secondary-text-color);
          pointer-events: none;
          transition: color 120ms var(--awc-press), box-shadow 120ms var(--awc-press);
        }
        .seg-track span::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: inherit;
          background: var(--primary-color);
          opacity: 0;
          transition: opacity 120ms var(--awc-press);
        }
        @media (hover: hover) {
          .seg-track input:not(:checked):hover + span::before { opacity: 0.06; }
        }
        .seg-track input:checked + span {
          color: var(--primary-text-color);
          box-shadow: inset 0 0 0 1px var(--primary-color);
        }
        .seg-track input:checked + span::before { opacity: 0.14; }
        .seg-track input:focus-visible + span { outline: 2px solid var(--primary-color); outline-offset: 1px; }

        /* \u2500\u2500 Why something doesn't apply, and what's missing \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .why, .status {
          display: flex;
          gap: 8px;
          margin: 0;
          font-size: 13px;
          line-height: 18px;
          color: var(--secondary-text-color);
        }
        .status { margin-top: 8px; color: var(--primary-text-color); }
        .ico, .ico-warn { flex: none; width: 18px; height: 18px; fill: currentColor; }
        .status .ico { fill: var(--warning-color, #b26a00); }

        /* \u2500\u2500 Text buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .tb {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          min-height: 36px;
          padding: 0 12px;
          border: 0;
          border-radius: 8px;
          background: none;
          color: var(--primary-color);
          font: inherit;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
        }
        .tb:disabled { color: var(--disabled-text-color, rgba(127, 127, 127, 0.6)); cursor: default; }
        .tb[data-off] { visibility: hidden; }
        .reset-engine-btn[data-off], .reset-colors-btn[data-off] { display: none; }
        .reset-engine-btn, .reset-colors-btn { margin: 8px 0 0 -12px; }
        .tb svg { width: 18px; height: 18px; fill: currentColor; }

        /* \u2500\u2500 Pairs of numbers side by side \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .pair { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 12px; }

        /* \u2500\u2500 The readings: one line each, opened in place \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .readings-table { display: grid; }
        .rd-list { border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3)); }
        .rd-row { border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3)); }
        .rd-head {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          box-sizing: border-box;
          width: calc(100% + 16px);
          min-height: 52px;
          margin: 0 -8px;
          padding: 6px 8px;
          border: 0;
          border-radius: 8px;
          background: none;
          color: inherit;
          font: inherit;
          text-align: left;
          cursor: pointer;
        }
        .rd-tx { display: flex; flex-direction: column; flex: 1; min-width: 0; }
        .rd-t { font-size: 14px; line-height: 20px; }
        .rd-s {
          display: flex;
          align-items: center;
          gap: 4px;
          min-width: 0;
          font-size: 12px;
          line-height: 16px;
          color: var(--secondary-text-color);
        }
        .rd-s span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .rd-s .ico-warn { width: 14px; height: 14px; fill: var(--warning-color, #b26a00); }
        .rd-fields { display: grid; gap: 8px; padding: 4px 0 8px; }
        .rd-fields ha-select, .rd-fields ha-entity-picker, .rd-fields ha-input, .rd-fields ha-textfield { display: block; width: 100%; }
        .rd-note, .rd-warn { margin: 0; font-size: 12px; line-height: 16px; color: var(--secondary-text-color); }
        .rd-warn { color: var(--primary-text-color); }
        .rd-foot { display: flex; flex-wrap: wrap; align-items: center; margin: 0 -12px; }
        .rd-foot .rd-remove { margin-left: auto; color: var(--error-color, #db4437); }
        .rd-add { margin: 4px 0 0 -12px; justify-self: start; }
        @keyframes awc-moved { from { background-color: var(--secondary-background-color, rgba(127, 127, 127, 0.15)); } to { background-color: transparent; } }
        .rd-row[data-moved] { animation: awc-moved 700ms cubic-bezier(0.37, 0, 0.63, 1); }
        [data-levels-for] { padding-top: 8px; }

        /* \u2500\u2500 Amounts: styled sliders, filled to their value \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .amt {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
          gap: 10px 24px;
        }
        .amt-o {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: baseline;
          column-gap: 8px;
        }
        .amt-o label { font-size: 14px; line-height: 20px; }
        .amt-o output {
          font-size: 13px;
          font-weight: 500;
          font-variant-numeric: tabular-nums;
          color: var(--secondary-text-color);
        }
        .amt-o input[type="range"] {
          grid-column: 1 / -1;
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 28px;
          margin: 0;
          background: transparent;
          cursor: pointer;
        }
        .amt-o input[type="range"]::-webkit-slider-runnable-track {
          height: 4px;
          border-radius: 2px;
          background: linear-gradient(to right, var(--primary-color) var(--fill, 50%), var(--divider-color, rgba(127, 127, 127, 0.3)) var(--fill, 50%));
        }
        .amt-o input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          margin-top: -8px;
          border: 2px solid var(--card-background-color, #fff);
          border-radius: 50%;
          background: var(--primary-color);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }
        .amt-o input[type="range"]::-moz-range-track { height: 4px; border-radius: 2px; background: var(--divider-color, rgba(127, 127, 127, 0.3)); }
        .amt-o input[type="range"]::-moz-range-progress { height: 4px; border-radius: 2px; background: var(--primary-color); }
        .amt-o input[type="range"]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border: 2px solid var(--card-background-color, #fff);
          border-radius: 50%;
          background: var(--primary-color);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }
        .amt-o input[type="range"]:focus-visible { outline: none; }
        .amt-o input[type="range"]:focus-visible::-webkit-slider-thumb { box-shadow: 0 0 0 2px var(--card-background-color, #fff), 0 0 0 4px var(--primary-color); }
        .amt-o input[type="range"]:focus-visible::-moz-range-thumb { box-shadow: 0 0 0 2px var(--card-background-color, #fff), 0 0 0 4px var(--primary-color); }

        /* \u2500\u2500 Colours: chips with a ring that holds on either theme \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .color-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
          gap: 2px 24px;
        }
        .swc {
          display: grid;
          grid-template-columns: 32px 1fr auto;
          align-items: center;
          gap: 12px;
          min-height: 44px;
        }
        .swc label { font-size: 14px; cursor: pointer; }
        .chip {
          position: relative;
          display: block;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: var(--c, transparent);
          box-shadow: inset 0 0 0 1px var(--divider-color, rgba(127, 127, 127, 0.3));
        }
        /* The text's and the weather's colours, shown on the sky they're seen over */
        .chip.ink { background: var(--sky, transparent); }
        .chip.ink::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 12px;
          height: 12px;
          margin: -6px 0 0 -6px;
          border-radius: 50%;
          background: var(--c, transparent);
        }
        .chip.ink-temperature::after, .chip.ink-text::after {
          content: "Aa";
          width: auto;
          height: auto;
          margin: 0;
          transform: translate(-50%, -50%);
          border-radius: 0;
          background: none;
          color: var(--c, currentColor);
          font-size: 13px;
          line-height: 1;
          font-weight: 600;
        }
        .chip input[type="color"] {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          border: 0;
          opacity: 0;
          cursor: pointer;
        }
        .chip:focus-within { outline: 2px solid var(--primary-color); outline-offset: 2px; }
        .color-reset { padding: 0 8px; margin-right: -8px; font-size: 13px; }

        /* \u2500\u2500 The card's own tap action, beside Home Assistant's picker \u2500\u2500\u2500\u2500\u2500 */
        .card-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          min-height: 48px;
        }
        .card-action-reset {
          position: relative;
          min-height: 36px;
          padding: 0 12px;
          margin-right: -12px;
          border: 0;
          border-radius: 8px;
          background: none;
          color: var(--primary-color);
          font: inherit;
          font-weight: 500;
          cursor: pointer;
        }

        /* \u2500\u2500 On a phone: a little more room for every control \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        @media (pointer: coarse) {
          .tb { min-height: 40px; }
        }

        /* \u2500\u2500 Reduced motion: nothing slides; opening dissolves, closing is instant \u2500\u2500 */
        @media (prefers-reduced-motion: reduce) {
          .rv, .rv[data-open], .rv > .rv-in, .drw-c, .drw-c[data-open], .drw-c > .rv-in, .chev, [aria-expanded="true"] > .chev { transition: none !important; }
          .rv[data-open] > .rv-in, .drw-c[data-open] > .rv-in, .drw[data-open] > .rv-in { transition: opacity 120ms linear !important; }
          .rd-row[data-moved] { animation-duration: 500ms; }
        }
`;var Et={sunny:{top:[.445,.13,256],mid:[.495,.125,250],bottom:[.575,.11,238],glow:[.88,.08,218],glowAlpha:.45,overcast:0},"partly-cloudy":{top:[.445,.1,254],mid:[.495,.092,248],bottom:[.565,.08,240],glow:[.88,.07,220],glowAlpha:.36,overcast:.25},windy:{top:[.445,.115,244],mid:[.495,.105,236],bottom:[.565,.09,222],glow:[.95,.05,200],glowAlpha:.3,overcast:.1},cloudy:{top:[.43,.026,250],mid:[.475,.025,248],bottom:[.53,.024,244],glow:[.86,.016,250],glowAlpha:.28,overcast:.8},foggy:{top:[.44,.014,212],mid:[.48,.013,214],bottom:[.53,.012,218],glow:[.88,.01,210],glowAlpha:.3,overcast:.9},"light-rain":{top:[.42,.034,246],mid:[.48,.032,243],bottom:[.53,.03,238],glow:[.82,.02,246],glowAlpha:.22,overcast:.85},rainy:{top:[.37,.032,248],mid:[.43,.032,244],bottom:[.48,.03,240],glow:[.78,.02,246],glowAlpha:.18,overcast:.9},pouring:{top:[.3,.03,250],mid:[.36,.031,246],bottom:[.41,.03,242],glow:[.72,.02,248],glowAlpha:.14,overcast:1},stormy:{top:[.26,.032,280],mid:[.31,.034,272],bottom:[.36,.034,262],glow:[.7,.03,280],glowAlpha:.14,overcast:1},snowy:{top:[.45,.04,238],mid:[.495,.036,234],bottom:[.55,.03,228],glow:[.93,.02,230],glowAlpha:.32,overcast:.7},"snowy-rainy":{top:[.44,.036,240],mid:[.49,.033,236],bottom:[.54,.03,232],glow:[.86,.02,236],glowAlpha:.24,overcast:.85},sleety:{top:[.42,.042,258],mid:[.47,.04,252],bottom:[.52,.036,246],glow:[.84,.024,252],glowAlpha:.22,overcast:.85},"snowy-stormy":{top:[.3,.04,266],mid:[.35,.04,260],bottom:[.4,.038,252],glow:[.74,.026,260],glowAlpha:.14,overcast:1},"sleety-stormy":{top:[.28,.042,284],mid:[.33,.042,276],bottom:[.38,.04,266],glow:[.72,.03,280],glowAlpha:.14,overcast:1},"clear-night":{top:[.2,.045,272],mid:[.25,.052,266],bottom:[.31,.055,256],glow:[.86,.03,250],glowAlpha:.16,overcast:0}},Qe=(t,s,e)=>Math.min(s,Math.max(t,e)),j=(t,s,e)=>t+(s-t)*e;function St(t,s,e){let n=(s-t+540)%360-180;return(t+n*e+360)%360}function D(t,s,e){let n=([L,N,H])=>[L,N*Math.cos(H*Math.PI/180),N*Math.sin(H*Math.PI/180)],[a,i,l]=n(t),[r,u,g]=n(s),o=j(a,r,e),d=j(i,u,e),h=j(l,g,e),f=Math.hypot(d,h),y=f<1e-6?t[2]:(Math.atan2(h,d)*180/Math.PI+360)%360;return[o,f,y]}function Te([t,s,e]){let n=e*Math.PI/180,a=s*Math.cos(n),i=s*Math.sin(n),l=(t+.3963377774*a+.2158037573*i)**3,r=(t-.1055613458*a-.0638541728*i)**3,u=(t-.0894841775*a-1.291485548*i)**3;return[4.0767416621*l-3.3077115913*r+.2309699292*u,-1.2684380046*l+2.6097574011*r-.3413193965*u,-.0041960863*l-.7034186147*r+1.707614701*u]}var At=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055;function z(t){let s=n=>n.every(a=>a>=-1e-4&&a<=1.0001),e=Te(t);if(!s(e)){let n=0,a=t[1];for(let i=0;i<24;i++){let l=(n+a)/2;s(Te([t[0],l,t[2]]))?n=l:a=l}e=Te([t[0],n,t[2]])}return e.map(n=>At(Qe(0,1,n)))}var Ze=t=>Math.round(Qe(0,1,t)*255);function Y(t){return"#"+t.map(s=>Ze(s).toString(16).padStart(2,"0")).join("")}function Xe(t,s){return`rgba(${t.map(Ze).join(", ")}, ${Number(s.toFixed(3))})`}function Le(t,s){return[.15+(t[0]-.15)*.42,t[1]*j(.75,.5,s),St(t[2],262,.45)]}function Ct(t,s){let e=Et[t],n=1-e.overcast*.7,a={top:e.top,mid:e.mid,bottom:e.bottom,glow:e.glow,glowAlpha:e.glowAlpha,scrimAlpha:j(.46,.28,e.overcast)};if(t==="clear-night"){if(s==="dawn"||s==="dusk"){let i=s==="dawn"?[.4,.09,20]:[.38,.1,40];return{...a,bottom:D(e.bottom,i,.45),glowAlpha:.2,scrimAlpha:.22}}return{...a,scrimAlpha:.2}}switch(s){case"night":return{top:Le(e.top,e.overcast),mid:Le(e.mid,e.overcast),bottom:Le(e.bottom,e.overcast),glow:[.86,.03,250],glowAlpha:j(.14,.06,e.overcast),scrimAlpha:.2};case"dusk":return{top:D(e.top,[e.top[0]*.8,.075,292],.5*n),mid:D(e.mid,[e.mid[0]*.88,.065,350],.42*n),bottom:D(e.bottom,[e.bottom[0]*.92,.115,52],.72*n),glow:D(e.glow,[.82,.13,58],n),glowAlpha:j(e.glowAlpha,.6,n*.6),scrimAlpha:a.scrimAlpha+.04};case"dawn":return{top:D(e.top,[e.top[0]*.95,e.top[1]*.85,262],.4*n),mid:D(e.mid,[e.mid[0]*.95,.05,330],.3*n),bottom:D(e.bottom,[e.bottom[0]*.95,.085,32],.62*n),glow:D(e.glow,[.88,.09,40],n),glowAlpha:j(e.glowAlpha,.5,n*.5),scrimAlpha:a.scrimAlpha+.04};default:return a}}function Tt(t){return[.16,Math.min(.04,t[1]*.6),t[2]]}function G(t,s){let e=Ct(t,s);return{top:Y(z(e.top)),mid:Y(z(e.mid)),bottom:Y(z(e.bottom)),glow:Xe(z(e.glow),e.glowAlpha),scrim:Xe(z(Tt(e.top)),e.scrimAlpha)}}var Re=[.985,.006,250];var Lt={"--awc-sky-top":"#3b5f8c","--awc-sky-mid":"#4a6d99","--awc-sky-bottom":"#5a7ba3","--awc-sky-glow":"rgba(0, 0, 0, 0)","--awc-sky-scrim":"rgba(0, 0, 0, 0)","--weather-sun-primary":"#ffd67a","--weather-sun-secondary":"#ffb547","--weather-sun-glow":"rgba(255, 214, 140, 0.55)","--weather-sun-halo":"rgba(255, 214, 140, 0.24)","--awc-cloud-far":"rgba(214, 226, 242, 0.85)","--awc-cloud-mid":"rgba(232, 239, 248, 0.92)","--awc-cloud-near":"rgba(248, 250, 253, 0.96)"},Rt=Object.keys(Lt),on=Rt.filter(t=>t.startsWith("--awc-sky-"));function $t(t,s=-1/0,e=1/0){return typeof t=="number"&&!isNaN(t)&&t>=s&&t<=e}function b(t){return t==null?"":String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function E(t){let s=customElements.get("ha-input")||!customElements.get("ha-textfield")?"ha-input":"ha-textfield",{id:e,label:n,value:a,placeholder:i,hint:l,type:r,min:u,max:g,step:o}=t,d=[`id="${b(e)}"`,`label="${b(n)}"`,`value="${b(a)}"`,i?`placeholder="${b(i)}"`:"",r?`type="${r}"`:"",u!==void 0?`min="${u}"`:"",g!==void 0?`max="${g}"`:"",o!==void 0?`step="${o}"`:"",l?s==="ha-input"?`hint="${b(l)}"`:`helper="${b(l)}" helperPersistent`:""].filter(Boolean);return`<${s} ${d.join(" ")}></${s}>`}function $e(t,s,e){if(t?.localize)try{let n=t.localize(s);if(n&&n!==s)return n}catch{}return e}function Ot(t){let s=t?.engine_settings;return!s||typeof s!="object"?!1:Object.keys(M).some(e=>{let n=s[e],[a,i]=Ve[e];return $t(n,a,i)&&Math.abs(n-M[e])>1e-9})}function et(t){let s=t?.engine_mode;return s==="auto"||s==="manual"?s:Ot(t)?"manual":"auto"}var Ft=["humidity","wind","pressure","sun","uv","rain"],Ht=["humidity","wind","pressure","sun"];function tt(t){let s=t.metrics,e=Array.isArray(s)?s:typeof s=="string"?s.split(","):null;if(!e)return[...Ht];let n=[];for(let a of e){let i=String(a).trim().toLowerCase();Ft.includes(i)&&!n.includes(i)&&n.push(i)}return n}var Oe=["humidity","wind","pressure","sun","uv","rain","aqi","feels_like","dew_point","visibility","cloud_cover","gust","uv_max","rain_event","rain_week","rain_month","rain_year","sensor"],Fe={humidity:"humidity",wind:"wind_speed",pressure:"pressure",uv:"uv_index",feels_like:"apparent_temperature",dew_point:"dew_point",visibility:"visibility",cloud_cover:"cloud_coverage",gust:"wind_gust_speed"},I=["uv_max","rain_event","rain_week","rain_month","rain_year"],de=t=>t!=="sun"&&!Object.prototype.hasOwnProperty.call(Fe,t),nt=["humidity","wind","pressure","sun"],it=t=>typeof t=="string"&&Oe.includes(t),ye=t=>typeof t=="string"&&t.trim()?t.trim():void 0;function Mt(t){if(typeof t=="string"){let u=t.trim().toLowerCase();return it(u)?{type:u,view:I.includes(u)}:null}if(!t||typeof t!="object")return null;let s=t,e=typeof s.type=="string"?s.type.trim().toLowerCase():"";if(!it(e))return null;let n={type:e,view:s.view===!0||I.includes(e)},a=ye(s.entity);a&&(n.entity=a);let i=ye(s.direction_entity);e==="wind"&&i&&(n.direction_entity=i);let l=ye(s.rate_entity);e==="rain"&&l&&(n.rate_entity=l);let r=ye(s.name);return r&&(n.name=r),n}function V(t){let s=t.readings;if(Array.isArray(s))return s.map(Mt).filter(i=>!!i);let e=[],n=i=>{let l=Object.fromEntries(Object.entries(i).filter(([,r])=>r!==void 0&&r!==""));e.push({...l,view:!!i.view||I.includes(i.type)})},a=tt(t);for(let i of a){if(i==="sun"){t.show_sun!==!1&&n({type:"sun"});continue}i==="humidity"?n({type:"humidity",entity:t.humidity_sensor_entity}):i==="wind"?n({type:"wind",entity:t.wind_speed_sensor_entity,direction_entity:t.wind_direction_sensor_entity}):i==="pressure"?n({type:"pressure",entity:t.pressure_sensor_entity}):i==="uv"?n({type:"uv",entity:t.uv_entity}):i==="rain"&&n({type:"rain",entity:t.rain_entity,rate_entity:t.rain_rate_entity})}!a.includes("wind")&&(t.wind_speed_sensor_entity||t.wind_direction_sensor_entity)&&n({type:"wind",entity:t.wind_speed_sensor_entity,direction_entity:t.wind_direction_sensor_entity,view:!0}),!a.includes("uv")&&t.uv_entity&&n({type:"uv",entity:t.uv_entity,view:!0}),!a.includes("rain")&&(t.rain_entity||t.rain_rate_entity)&&n({type:"rain",entity:t.rain_entity,rate_entity:t.rain_rate_entity,view:!0}),t.uv_max_entity&&n({type:"uv_max",entity:t.uv_max_entity});for(let i of["rain_event","rain_week","rain_month","rain_year"]){let l=t[`${i}_entity`];l&&n({type:i,entity:l})}return e}var _e=["metrics","show_sun","humidity_sensor_entity","wind_speed_sensor_entity","wind_direction_sensor_entity","pressure_sensor_entity","uv_entity","uv_max_entity","rain_entity","rain_rate_entity","rain_event_entity","rain_week_entity","rain_month_entity","rain_year_entity"];function ot(t){return t.map(s=>{let e=Object.entries(s).filter(([a,i])=>a!=="type"&&a!=="view"&&i!==void 0),n=s.view&&!I.includes(s.type);return!e.length&&!n?s.type:{type:s.type,...Object.fromEntries(e),...n?{view:!0}:{}}})}var we=t=>t.length===nt.length&&t.every((s,e)=>s.type===nt[e]&&!s.view&&!s.entity&&!s.direction_entity&&!s.rate_entity&&!s.name);function Pt(t,s){t.hasAttribute("data-open")!==s&&(t.toggleAttribute("data-open",s),s?setTimeout(()=>{t.hasAttribute("data-open")&&t.setAttribute("data-settled","")},300):t.removeAttribute("data-settled"))}var He={humidity:"Humidity",wind:"Wind",pressure:"Pressure",sun:"Next sunset or sunrise",uv:"UV index",rain:"Rain",aqi:"Air quality (US EPA)",feels_like:"Feels like",dew_point:"Dew point",visibility:"Visibility",cloud_cover:"Cloud cover",gust:"Gusts",uv_max:"Today's highest UV",rain_event:"Rain this event",rain_week:"Rain this week",rain_month:"Rain this month",rain_year:"Rain this year",sensor:"Any sensor"},ce=t=>t.type==="sensor"&&t.name?t.name:He[t.type],Nt='<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.4 8.6 12 13.2l4.6-4.6L18 10l-6 6-6-6z"/></svg>',st='<svg class="ico-warn" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 1 21h22L12 2zm0 4.3L19.5 19h-15L12 6.3zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/></svg>',It=0;function at(t,s,e,n={}){let a,i=V(s()),l=n.open??-1,r=++It,u=()=>s().entity||"the weather entity",g=p=>Object.prototype.hasOwnProperty.call(Fe,p),o=p=>I.includes(p.type)||p.view,d=p=>g(p.type)?`Leave empty to use ${u()}`:p.type==="aqi"?"A sensor on the US EPA scale; Air quality levels move the bands":p.type==="sensor"?"Any entity: its name and its value":"A sensor";function h(p){if(de(p.type)&&!p.entity)return{text:"Pick a sensor",warn:!0};let m=p.type==="sun"?`From ${s().sun_entity||"sun.sun"}`:p.entity||`From ${u()}`;return o(p)?s().show_forecast?{text:`In the forecast view \xB7 ${m}`,warn:!1}:{text:"In the forecast view, which needs the forecast on",warn:!0}:{text:m,warn:!1}}function f(){let p={readings:we(i)?void 0:ot(i)};for(let m of _e)p[m]=void 0;e(p),Ye()}function y(p,m,w,v){return`<ha-entity-picker class="${p}" label="${b(m)}" value="${b(w??"")}"${v?` helper="${b(v)}"`:""} allow-custom-entity></ha-entity-picker>`}function L(p,m){let w=I.includes(p.type),v=b(ce(p)),O=h(p),A=`rd-b-${r}-${m}`;return`<div class="rd-row" data-i="${m}" data-type="${p.type}" role="listitem">
            <button type="button" class="rd-head" aria-expanded="${m===l}" aria-controls="${A}">
              <span class="rd-tx"><span class="rd-t">${v}</span><span class="rd-s${O.warn?" warn":""}" data-text="${b(O.text)}">${O.warn?st:""}<span>${b(O.text)}</span></span></span>${Nt}
            </button>
            <div class="rv rd-body" id="${A}"${m===l?" data-open data-settled":""}><div class="rv-in"><div class="rd-fields">
              <ha-select class="rd-type" label="Type"></ha-select>
              ${p.type==="sun"?"":y("rd-entity",de(p.type)?"Entity":"Entity (optional)",p.entity,d(p))}
              ${p.type==="wind"?y("rd-direction","Direction sensor (optional)",p.direction_entity):""}
              ${p.type==="rain"?y("rd-rate","Rain rate sensor (optional)",p.rate_entity,"Shown instead of today's rain while it rains"):""}
              ${p.type==="sensor"?E({id:`rd-name-${m}`,label:"Name (optional)",value:p.name,hint:"Else the entity's own name"}):""}
              ${de(p.type)&&!p.entity?`<p class="rd-warn" role="status">Pick a sensor. Without one, this reading isn't shown.</p>`:""}
              ${w?'<p class="rd-note">Shown in the forecast view, when you tap the card.</p>':`<label class="sw rd-view"><span class="sw-t"><span class="sw-l">Only in the forecast view</span><span class="sw-h">Shown when you tap the card, not on it</span></span><ha-switch class="rd-view-switch"${p.view?" checked":""}></ha-switch></label>`}
              <div class="rd-foot">
                <button type="button" class="tb rd-btn rd-up" aria-label="Move ${v} up"${m===0?" disabled":""}>Move up</button>
                <button type="button" class="tb rd-btn rd-down" aria-label="Move ${v} down"${m===i.length-1?" disabled":""}>Move down</button>
                <button type="button" class="tb rd-btn rd-remove" aria-label="Remove ${v}">Remove</button>
              </div>
            </div></div></div>
          </div>`}function N(p){l=p,n.onOpen?.(p),t.querySelectorAll(".rd-row").forEach(m=>{let w=Number(m.dataset.i)===p;m.querySelector(".rd-head")?.setAttribute("aria-expanded",String(w));let v=m.querySelector(".rd-body");v&&Pt(v,w)})}function H(){l>=i.length&&(l=-1),t.innerHTML=`<div class="rd-list" role="list" aria-label="Readings">${i.map(L).join("")}</div>
            <button type="button" class="tb rd-add"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>Add a reading</button>`,t.querySelectorAll(".rd-row").forEach(p=>kt(p,Number(p.dataset.i))),t.querySelector(".rd-add").addEventListener("click",()=>{let m=typeof(a?.states[s().entity??""]?.attributes??{}).uv_index=="number"&&!i.some(w=>w.type==="uv")?"uv":"rain";i=[...i,{type:m,view:!1}],l=i.length-1,n.onOpen?.(l),f(),H(),t.querySelector(".rd-row:last-child .rd-type")?.focus()}),Ue()}function fe(p,m){let w=h(m),v=p.querySelector(".rd-s"),O=p.querySelector(".rd-t");O&&O.textContent!==ce(m)&&(O.textContent=ce(m)),!(!v||v.dataset.text===w.text&&v.classList.contains("warn")===w.warn)&&(v.dataset.text=w.text,v.classList.toggle("warn",w.warn),v.innerHTML=`${w.warn?st:""}<span></span>`,v.querySelector("span").textContent=w.text)}function kt(p,m){p.querySelector(".rd-head")?.addEventListener("click",()=>N(l===m?-1:m));let w=p.querySelector(".rd-type");if(w){let A=()=>{w.options=Oe.map(_=>({value:_,label:I.includes(_)?`${He[_]}, in the forecast view`:He[_]})),w.value=i[m].type};customElements.get("ha-select")?A():customElements.whenDefined("ha-select").then(A),w.addEventListener("selected",(_=>{let x=_.detail?.value;if(!x||x===i[m].type)return;let R=i[m].entity&&(g(x)||!i[m].entity.startsWith("weather."))?i[m].entity:void 0;i=i.map((F,ge)=>ge===m?{type:x,view:I.includes(x)||F.view&&!I.includes(F.type),...R?{entity:R}:{}}:F),f(),H(),t.querySelector(`.rd-row[data-i="${m}"] .rd-type`)?.focus()})),w.addEventListener("closed",_=>_.stopPropagation())}let v=(A,_)=>{p.querySelector(A)?.addEventListener("value-changed",(x=>{let R=String(x.detail?.value??"").trim(),F=!!i[m].entity;i=i.map((ge,xt)=>{if(xt!==m)return ge;let Ce={...ge};return R?Ce[_]=R:delete Ce[_],Ce}),f(),_==="entity"&&de(i[m].type)&&F!==!!R?H():fe(p,i[m])}))};v(".rd-entity","entity"),v(".rd-direction","direction_entity"),v(".rd-rate","rate_entity"),p.querySelector(`[id="rd-name-${m}"]`)?.addEventListener("change",A=>{let _=String(A.target.value??"").trim();i=i.map((x,R)=>{if(R!==m)return x;let F={...x};return _?F.name=_:delete F.name,F}),f(),fe(p,i[m])}),p.querySelector(".rd-view-switch")?.addEventListener("change",A=>{let _=!!A.target.checked;i=i.map((x,R)=>R===m?{...x,view:_}:x),f(),fe(p,i[m])});let O=A=>{let _=m+A;if(_<0||_>=i.length)return;let x=[...i];[x[m],x[_]]=[x[_],x[m]],i=x,l=_,n.onOpen?.(_),f(),H();let R=t.querySelector(`.rd-row[data-i="${_}"]`);R?.setAttribute("data-moved","");let F=R?.querySelector(A<0?".rd-up":".rd-down");(F&&!F.disabled?F:R?.querySelector(A<0?".rd-down":".rd-up"))?.focus()};p.querySelector(".rd-up")?.addEventListener("click",()=>O(-1)),p.querySelector(".rd-down")?.addEventListener("click",()=>O(1)),p.querySelector(".rd-remove")?.addEventListener("click",()=>{i=i.filter((_,x)=>x!==m),l=-1,n.onOpen?.(-1),f(),H();let A=t.querySelectorAll(".rd-head");(A[Math.min(m,A.length-1)]??t.querySelector(".rd-add"))?.focus()})}function Ue(){t.querySelectorAll(".rd-row").forEach(p=>{let m=i[Number(p.dataset.i)];if(!m)return;let w=(v,O,A)=>{let _=p.querySelector(v);_&&(a&&(_.hass=a),_.includeDomains=A,_.value=O??"")};w(".rd-entity",m.entity,m.type==="sensor"?void 0:g(m.type)?["sensor","weather"]:["sensor"]),w(".rd-direction",m.direction_entity,["sensor"]),w(".rd-rate",m.rate_entity,["sensor"])})}function Ye(){t.parentElement?.querySelectorAll("[data-levels-for]").forEach(m=>{m.hidden=!i.some(w=>w.type===m.dataset.levelsFor)})}return H(),Ye(),{hass(p){a=p,Ue()},sync(){t.querySelectorAll(".rd-row").forEach(p=>{let m=i[Number(p.dataset.i)];m&&fe(p,m)})}}}var rt=t=>t==null?void 0:String(t);function J(t){return`<div class="place-fields">
        ${E({id:"latitude",label:"Latitude",type:"number",min:-90,max:90,step:"any",value:rt(t.latitude)})}
        ${E({id:"longitude",label:"Longitude",type:"number",min:-180,max:180,step:"any",value:rt(t.longitude)})}
        ${E({id:"time_zone",label:"Time zone",value:t.time_zone,hint:"For weather in another place, such as -33.87, 151.21 and Australia/Sydney: the coordinates give the card that place's sun, and its times are shown in its time zone"})}
    </div>`}function X(t,s){for(let e of["latitude","longitude"])t.querySelector(`#${e}`)?.addEventListener("change",n=>{let a=n.target.value.trim(),i=parseFloat(a);s({[e]:a&&isFinite(i)?i:void 0})});t.querySelector("#time_zone")?.addEventListener("change",e=>{s({time_zone:e.target.value.trim()||void 0})})}var Q=`
    .place-fields { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 12px; }
    .place-fields > :last-child { grid-column: 1 / -1; }
`;function ue(t){return t&&typeof t=="object"&&typeof t.action=="string"?t:void 0}function Z(t,s){return{entity:s,tap_action:ue(t?.tap_action),hold_action:ue(t?.hold_action),double_tap_action:ue(t?.double_tap_action)}}var he=["tap_action","hold_action","double_tap_action"],Dt={tap_action:["ui.panel.lovelace.editor.card.generic.tap_action","Tap behavior"],hold_action:["ui.panel.lovelace.editor.card.generic.hold_action","Hold behavior"],double_tap_action:["ui.panel.lovelace.editor.card.generic.double_tap_action","Double tap behavior"]},Me=(t,s)=>$e(t,...Dt[s]),qt=he.map(t=>({name:t,selector:{ui_action:{default_action:t==="tap_action"?"more-info":"none"}},context:{entity_id:"entity"}}));function B(t,s,e,n,a={}){let i={...e},l=o=>{i={...i,...o},n(o)},r=o=>{let d=i[o]?.action;return d!==void 0&&Object.prototype.hasOwnProperty.call(a,d)?d:void 0},u=()=>he.filter(r).map(o=>{let d=document.createElement("div");return d.className="option card-action",d.innerHTML=`<span>${b(Me(s,o))}: <b>${b(a[r(o)]??"")}</b></span><button type="button" class="card-action-reset">${b($e(s,"ui.common.reset","Reset"))}</button>`,d.querySelector("button").addEventListener("click",()=>{l({[o]:void 0}),B(t,s,i,n,a)}),d}),g=()=>{let o=document.createElement("ha-form");o.hass=s,o.data={...i},o.schema=qt.filter(d=>!r(d.name)),o.computeLabel=d=>Me(s,d.name),o.addEventListener("value-changed",d=>{d.stopPropagation();let h=d.detail?.value??{},f={};for(let y of he){let L=ue(h[y]);JSON.stringify(L)!==JSON.stringify(i[y])&&(f[y]=L)}o.data={...i,...f},Object.keys(f).length&&l(f)}),t.replaceChildren(...u(),o)};if(customElements.get("ha-form")){g();return}dt(t,s,()=>i,l,a),customElements.whenDefined("ha-form").then(()=>{t.isConnected&&g()}),zt()}function ee(t,s){let e=t?.querySelector("ha-form");e&&s&&(e.hass=s)}async function zt(){try{await(await(await window.loadCardHelpers?.())?.createCardElement({type:"tile",entity:"sun.sun"}))?.constructor?.getConfigElement?.()}catch{}}var jt=[{value:"default",label:"Default"},{value:"more-info",label:"More info"},{value:"navigate",label:"Navigate"},{value:"url",label:"Open a URL"},{value:"none",label:"Nothing"}],lt={navigate:{key:"navigation_path",label:"Path",placeholder:"/lovelace/weather"},url:{key:"url_path",label:"URL",placeholder:"https://"}};function dt(t,s,e,n,a={}){let i=[...jt,...Object.entries(a).map(([l,r])=>({value:l,label:r}))];t.innerHTML=he.map(l=>{let r=e()[l],u=r?lt[r.action]:void 0;return`<div class="option"><ha-select data-action="${l}" label="${b(Me(s,l))}"></ha-select></div>`+(u?`<div class="option">${E({id:`${l}-${u.key}`,label:u.label,placeholder:u.placeholder,value:typeof r?.[u.key]=="string"?r[u.key]:""})}</div>`:"")}).join("");for(let l of he){let r=e()[l],u=t.querySelector(`[data-action="${l}"]`);if(!u)continue;let g=r&&!i.some(f=>f.value===r.action)?[...i,{value:r.action,label:`${r.action} (set in YAML)`}]:i,o=()=>{u.options=g,u.value=r?.action??"default"};customElements.get("ha-select")?o():customElements.whenDefined("ha-select").then(o),u.addEventListener("selected",(f=>{let y=f.detail?.value;!y||y===(e()[l]?.action??"default")||(n({[l]:y==="default"?void 0:{action:y}}),dt(t,s,e,n,a))})),u.addEventListener("closed",f=>f.stopPropagation());let d=r?lt[r.action]:void 0;(d?t.querySelector(`#${l}-${d.key}`):null)?.addEventListener("input",f=>{let y=f.target.value.trim(),{[d.key]:L,...N}=e()[l]??{action:r.action};n({[l]:{...N,action:r.action,...y?{[d.key]:y}:{}}})})}}var pt={show_location:!0,temperature_decimals:0,compact:!1,layout:"default",color_palette:"default",hero:"temperature",show_clock:!1,show_date:!1,show_forecast:!1,show_days:!1,forecast_days:7,forecast_metric:"temp",forecast_graph:"line",show_attributes:!0,show_attribute_labels:!0,show_attribute_icons:!0,show_indoor:!0,indoor_style:"label",show_flight_labels:!0,flight_label:"flight",plane_speed:1,planes_on_load:!1,animate:!0,spill_particles:!0,disable_lightning_shake:!1,auto_pause:!1,dev_mode:!1,enable_day_night_cycle:!1,sunrise_hour:6,sunset_hour:20,night:"auto",night_red:!0,night_lux:5,wake_time:"07:00",show_note:!1,note_tone:"snarky",note_attribute:"note",note_max_age:180,sun_entity:"sun.sun",engine_mode:"auto"},ct=t=>t==null||typeof t=="string"&&!t.trim()||Array.isArray(t)&&!t.length,mt=t=>t===!0?"on":t===!1?"off":t;function te(t,s,e=pt){let n=t;if(s.startsWith("engine_settings.")){let l=s.slice(16),r=n.engine_settings?.[l];return typeof r=="number"&&isFinite(r)&&r!==M[l]}if(s.startsWith("custom_colors."))return!ct(n.custom_colors?.[s.slice(14)]);let a=n[s];if(ct(a))return!1;if(!(s in e))return!0;let i=e[s];return s==="night"?mt(a)!==i:s==="wake_time"?String(a).replace(/^(\d):/,"0$1:")!==i:typeof i=="number"?Number(a)!==i:a!==i}var ke=t=>t.layout==="nightstand"?"none":t.show_forecast?"forecast":"more-info",ut=t=>t&&typeof t=="object"&&typeof t.action=="string"?t.action:void 0;function Ie(t,s){let e=ut(t.tap_action),n=a=>{let i=ut(a);return i!==void 0&&i!=="none"};return e!==void 0&&e!==s||n(t.hold_action)||n(t.double_tap_action)}var Wt=Object.keys(M).map(t=>`engine_settings.${t}`),Gt=["sunny_bg","cloudy_bg","rainy_bg","stormy_bg","snowy_bg","windy_bg","fog_color"].map(t=>`custom_colors.${t}`),Bt=["temperature_color","text_color","sun_color","rain_color","snow_color"].map(t=>`custom_colors.${t}`),$=t=>t.layout==="nightstand",Pe=(t,s)=>!!t.show_forecast&&(s.all||!$(t)),be=t=>t.animate!==!1,Kt={entity:{tier:"basic",keys:["entity"]},name:{tier:"basic",keys:["name"]},show_location:{tier:"all",keys:["show_location"]},outdoor_sensor_entity:{tier:"all",keys:["outdoor_sensor_entity"]},feels_like_entity:{tier:"all",keys:["feels_like_entity"]},another_place:{tier:"all",keys:["latitude","longitude","time_zone"]},place_fields:{tier:"all",keys:["latitude","longitude","time_zone"],when:(t,s)=>s.place},layout:{tier:"basic",keys:["compact","layout"]},color_palette:{tier:"basic",keys:["color_palette"]},temperature_decimals:{tier:"all",keys:["temperature_decimals"]},why_nightstand_only:{tier:"basic",keys:[],reason:!0,when:t=>!$(t)},alarm_entity:{tier:"basic",keys:["alarm_entity"],when:$},wake_time:{tier:"basic",keys:["wake_time"],when:$},night:{tier:"all",keys:["night"],when:$},night_sensor:{tier:"all",keys:["night_sensor"],when:t=>$(t)&&mt(t.night??"auto")==="auto"},night_lux:{tier:"all",keys:["night_lux"],when:t=>$(t)&&!!t.night_sensor},bed_time:{tier:"all",keys:["bed_time"],when:$},night_red:{tier:"all",keys:["night_red"],when:$},why_forecast_nightstand:{tier:"basic",keys:[],reason:!0,when:$},show_forecast:{tier:"basic",keys:["show_forecast"],when:(t,s)=>s.all||!$(t)},forecast_days:{tier:"all",keys:["show_days","forecast_days"],when:Pe},forecast_metric:{tier:"all",keys:["forecast_metric"],when:Pe},forecast_graph:{tier:"all",keys:["forecast_graph"],when:Pe},time_date:{tier:"all",keys:["show_clock","show_date"]},hero:{tier:"all",keys:["hero"]},note:{tier:"basic",keys:["show_note","note_entity"],when:(t,s)=>s.all||!$(t)},why_note_compact:{tier:"basic",keys:[],reason:!0,when:(t,s)=>!!t.compact&&!$(t)&&s.note!=="off"},why_note_nightstand:{tier:"basic",keys:[],reason:!0,when:$},note_tone:{tier:"basic",keys:["note_tone"],when:(t,s)=>s.note==="ai"},note_ai_task_entity:{tier:"all",keys:["note_ai_task_entity"],when:(t,s)=>s.note==="ai",promote:(t,s)=>s.noDefaultAi},note_calendar:{tier:"all",keys:["note_calendar"],when:(t,s)=>s.note==="ai"},note_entity:{tier:"basic",keys:["note_entity"],when:(t,s)=>s.note==="entity"},note_attribute:{tier:"all",keys:["note_attribute"],when:(t,s)=>s.note==="entity"},note_max_age:{tier:"all",keys:["note_max_age"],when:(t,s)=>s.note!=="off"},show_attributes:{tier:"all",keys:["show_attributes"]},readings:{tier:"all",keys:["readings","uv_levels","aqi_levels",..._e],when:t=>t.show_attributes!==!1,changed:t=>!we(V(t))||te(t,"uv_levels")||te(t,"aqi_levels")},reading_style:{tier:"all",keys:["show_attribute_labels","show_attribute_icons"],when:t=>t.show_attributes!==!1},indoor_temperature_entity:{tier:"all",keys:["indoor_temperature_entity"]},indoor_humidity_entity:{tier:"all",keys:["indoor_humidity_entity"]},indoor_line:{tier:"all",keys:["show_indoor","indoor_style"],when:t=>!!(t.indoor_temperature_entity||t.indoor_humidity_entity)},animate:{tier:"all",keys:["animate"]},spill_particles:{tier:"all",keys:["spill_particles"],when:be},lightning:{tier:"all",keys:["disable_lightning_shake"],when:be},auto_pause:{tier:"all",keys:["auto_pause"]},sky_follows:{tier:"all",keys:["enable_day_night_cycle"]},day_hours:{tier:"all",keys:["sunrise_hour","sunset_hour"],when:t=>!!t.enable_day_night_cycle},sun_entity:{tier:"all",keys:["sun_entity"]},moon_entity:{tier:"all",keys:["moon_entity"]},engine_mode:{tier:"all",keys:["engine_mode"],when:be,changed:t=>et(t)==="manual"},amounts:{tier:"all",keys:Wt,when:be},sky_colors:{tier:"all",keys:Gt,when:t=>t.color_palette!=="theme"},why_sky_colors_theme:{tier:"all",keys:[],reason:!0,when:t=>t.color_palette==="theme"},ink_colors:{tier:"all",keys:Bt},flights_entity:{tier:"all",keys:["flights_entity"]},plane_tags:{tier:"all",keys:["show_flight_labels","flight_label"],when:t=>!!t.flights_entity},plane_speed:{tier:"all",keys:["plane_speed"],when:t=>!!t.flights_entity},planes_on_load:{tier:"all",keys:["planes_on_load"],when:t=>!!t.flights_entity},actions:{tier:"all",keys:["tap_action","hold_action","double_tap_action"],changed:t=>Ie(t,ke(t))},dev_mode:{tier:"all",keys:["dev_mode"]}},Ut={weather:["entity","name","show_location","outdoor_sensor_entity","feels_like_entity","another_place","place_fields"],look:["layout","color_palette","temperature_decimals"],nightstand:["why_nightstand_only","alarm_entity","wake_time","night","night_sensor","night_lux","bed_time","night_red"],forecast:["why_forecast_nightstand","show_forecast","forecast_days","forecast_metric","forecast_graph","time_date","hero"],note:["note","why_note_compact","why_note_nightstand","note_tone","note_ai_task_entity","note_calendar","note_entity","note_attribute","note_max_age"],readings:["show_attributes","readings","reading_style","indoor_temperature_entity","indoor_humidity_entity","indoor_line"],sky:["animate","spill_particles","lightning","auto_pause","sky_follows","day_hours","sun_entity","moon_entity","engine_mode","amounts"],colors:["sky_colors","why_sky_colors_theme","ink_colors"],planes:["flights_entity","plane_tags","plane_speed","planes_on_load"],interactions:["actions"],dev:["dev_mode"]},De=["readings","sky","colors","planes","interactions"],pe={rows:Kt,sections:Ut,drawers:De,defaults:pt};function ft(t,s,e=pe){let n=e.rows[t];return!n||n.reason?!1:n.changed?n.changed(s):n.keys.some(a=>te(s,a,e.defaults))}function qe(t,s,e,n,a=pe){let i=a.rows[t];return i?n.has(t)?!0:i.when&&!i.when(s,e)?!1:i.tier==="basic"||e.all||!!i.promote?.(s,e):!1}function gt(t,s,e,n,a=pe){return t.some(i=>!a.rows[i]?.reason&&qe(i,s,e,n,a))}var Yt={compact:!1,color_palette:"default",show_hours:!0,forecast_days:7,forecast_metric:"temp",forecast_graph:"line",weather_effects:!1,sun_entity:"sun.sun",dev_mode:!1},Ne=t=>!!t.compact,ht=t=>Ne(t)||t.show_hours!==!1,yt={rows:{entity:{tier:"basic",keys:["entity"]},layout:{tier:"basic",keys:["compact"]},color_palette:{tier:"basic",keys:["color_palette"]},show_hours:{tier:"all",keys:["show_hours"],when:t=>!Ne(t)},forecast_days:{tier:"all",keys:["forecast_days"],when:t=>!Ne(t)},forecast_metric:{tier:"all",keys:["forecast_metric"],when:ht},forecast_graph:{tier:"all",keys:["forecast_graph"],when:ht},weather_effects:{tier:"all",keys:["weather_effects"]},sun_entity:{tier:"all",keys:["sun_entity"]},another_place:{tier:"all",keys:["latitude","longitude","time_zone"]},place_fields:{tier:"all",keys:["latitude","longitude","time_zone"],when:(t,s)=>s.place},actions:{tier:"all",keys:["tap_action","hold_action","double_tap_action"],changed:t=>Ie(t,"forecast")},dev_mode:{tier:"all",keys:["dev_mode"]}},sections:{forecast:["entity","layout","color_palette"],shows:["show_hours","forecast_days","forecast_metric","forecast_graph","weather_effects"],sky:["sun_entity","another_place","place_fields"],interactions:["actions"],dev:["dev_mode"]},drawers:[],defaults:Yt},Vt={compact:!1,color_palette:"default",show_header:!0,show_details:!0,daylight_delta:"day",direction:"auto",dev_mode:!1},ve=t=>!t.compact,_t={rows:{sun_entity:{tier:"basic",keys:["sun_entity"]},layout:{tier:"basic",keys:["compact"]},color_palette:{tier:"basic",keys:["color_palette"]},title:{tier:"all",keys:["title"],when:ve},show_header:{tier:"all",keys:["show_header"]},show_details:{tier:"all",keys:["show_details"],when:ve},moon_entity:{tier:"all",keys:["moon_entity"],when:t=>ve(t)&&t.show_details!==!1},daylight_delta:{tier:"all",keys:["daylight_delta"],when:t=>t.show_header!==!1||ve(t)&&t.show_details!==!1},direction:{tier:"all",keys:["direction"]},weather_entity:{tier:"all",keys:["weather_entity"]},another_place:{tier:"all",keys:["latitude","longitude","time_zone"]},place_fields:{tier:"all",keys:["latitude","longitude","time_zone"],when:(t,s)=>s.place},actions:{tier:"all",keys:["tap_action","hold_action","double_tap_action"],changed:t=>Ie(t,"more-info")},dev_mode:{tier:"all",keys:["dev_mode"]}},sections:{sun:["sun_entity","layout","color_palette"],shows:["title","show_header","show_details","daylight_delta","moon_entity","direction"],sky:["weather_entity","another_place","place_fields"],interactions:["actions"],dev:["dev_mode"]},drawers:[],defaults:Vt};var wt="animated-weather-card:editor-all";function ne(){try{return localStorage.getItem(wt)==="1"}catch{return!1}}function ie(t){try{localStorage.setItem(wt,t?"1":"0")}catch{}}var q=t=>typeof requestAnimationFrame=="function"?requestAnimationFrame(t):setTimeout(t,16);function me(t,s,e=!1){t.hasAttribute("data-open")!==s&&(t.toggleAttribute("data-open",s),s?e?t.setAttribute("data-settled",""):setTimeout(()=>{t.hasAttribute("data-open")&&t.setAttribute("data-settled","")},300):t.removeAttribute("data-settled"))}var bt='<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.4 8.6 12 13.2l4.6-4.6L18 10l-6 6-6-6z"/></svg>',xe='<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/></svg>',c=(t,s)=>`<div class="rv" data-row="${t}"><div class="rv-in"><div class="row">${s}</div></div></div>`,k=(t,s,e,n="")=>`<label class="sw"><span class="sw-t"><span class="sw-l">${s}</span>${n?`<span class="sw-h">${n}</span>`:""}</span><ha-switch id="${t}"${e?" checked":""}></ha-switch></label>`,S=(t,s,e,n="")=>`<ha-entity-picker id="${t}" label="${b(s)}" value="${b(String(e??""))}"${n?` helper="${b(n)}"`:""} allow-custom-entity></ha-entity-picker>`,C=(t,s,e="")=>`<ha-select id="${t}" label="${b(s)}"></ha-select>${e?`<p class="help">${e}</p>`:""}`,oe=t=>`<p class="why">${xe}<span>${t}</span></p>`,W=(t,s,e,n,a)=>`<fieldset class="seg" id="${t}"><legend class="seg-l">${s}</legend><div class="seg-track">${e.map(([i,l])=>`<label><input type="radio" name="awc-${t}-${a}" value="${i}"${i===n?" checked":""}><span>${l}</span></label>`).join("")}</div><p class="help" data-help="${t}"></p></fieldset>`,T=(t,s,e)=>`<section class="rv grp" data-sec="${t}"><div class="rv-in"><div class="grp-b">${s?`<h3 class="grp-h">${s}</h3>`:""}${e}</div></div></section>`,se=t=>`<div class="top">
          ${k("all_settings","Show all settings",t,"Settings you've changed always show")}
          <span class="vh" aria-live="polite" data-live></span>
        </div>`,ae=(t,s)=>t?`All settings shown.${s?" More sections at the end.":""}`:"Showing the basics, and the settings you've changed.";function re(t,s,e,n,a,i){for(let u of Object.keys(s.rows))ft(u,e,s)&&a.add(u);t.querySelectorAll("[data-row]").forEach(u=>me(u,qe(u.dataset.row,e,n,a,s),i));let l=!1;for(let[u,g]of Object.entries(s.sections)){let o=gt(g,e,n,a,s),d=t.querySelector(`[data-sec="${u}"]`);d&&me(d,o,i),o&&s.drawers.includes(u)&&(l=!0)}let r=t.querySelector("#all_settings");return r&&r.checked!==n.all&&(r.checked=n.all),l}function K(t,s,e,n,a){let i=t.querySelector(`#${s}`);if(!i)return;let l=()=>{i.options=e,i.value=n};customElements.get("ha-select")?l():customElements.whenDefined("ha-select").then(l),i.addEventListener("selected",(r=>{let u=r.detail?.value;!u||u===n||(n=u,i.value=u,a(u))})),i.addEventListener("closed",r=>r.stopPropagation())}function le(t,s,e){t.querySelectorAll(`[id="${s}"] input[type="radio"]`).forEach(n=>n.addEventListener("change",()=>{n.checked&&e(n.value)}))}function vt(t){return(Array.isArray(t)?t:typeof t=="string"?[t]:[]).map(String).filter(Boolean)}var Ge=[{value:"temp",label:"Temperature"},{value:"feels",label:"Feels like"},{value:"chance",label:"Chance of rain"},{value:"amount",label:"Rain amount"},{value:"uv",label:"UV index"},{value:"wind",label:"Wind"},{value:"gust",label:"Wind gusts"},{value:"humidity",label:"Humidity"},{value:"dew",label:"Dew point"},{value:"cloud",label:"Cloud cover"},{value:"pressure",label:"Pressure"}],Be=[{value:"line",label:"Line"},{value:"area",label:"Line with a soft fill"},{value:"bars",label:"Bars"},{value:"none",label:"No graph, the values alone"}],ze=[["windSpeed","Wind's effect",'<input type="range" id="windSpeed" min="0.5" max="5" step="0.1"'],["rainCount","Rain",'<input type="range" id="rainCount" min="0.5" max="3" step="0.1"'],["snowCount","Snow",'<input type="range" id="snowCount" min="0.5" max="3" step="0.1"'],["leafCount","Leaves on windy days",'<input type="range" id="leafCount" min="0.5" max="3" step="0.1"'],["cloudCount","Clouds, and stars at night",'<input type="range" id="cloudCount" min="1" max="6" step="1"'],["cloudBaseSize","Cloud size",'<input type="range" id="cloudBaseSize" min="0.5" max="2" step="0.1"'],["splashBounce","Splash height",'<input type="range" id="splashBounce" min="40" max="120" step="5"']],je=[["sunny_bg","Sunny sky"],["cloudy_bg","Cloudy sky"],["rainy_bg","Rainy sky"],["stormy_bg","Stormy sky"],["snowy_bg","Snowy sky"],["windy_bg","Windy sky"],["fog_color","Fog"]],We=[["temperature_color","Temperature"],["text_color","Text"],["sun_color","Sun"],["rain_color","Rain"],["snow_color","Snow"]],Jt=0,P=class P extends HTMLElement{constructor(){super(...arguments);this._initialized=!1;this.uid=++Jt;this.all=ne();this.pinned=new Set;this.openDrawers=new Set;this.readingOpen=-1;this.placeOn=!1;this.placeKept={};this.noDefaultAi=!1;this.refill={}}setConfig(e){let n=!this._config||Object.keys(e).length!==Object.keys(this._config).length||JSON.stringify(Object.keys(e).sort())!==JSON.stringify(Object.keys(this._config).sort());this._config={...e},this.isConnected&&n?this.render():this.isConnected&&this._initialized&&this.sync()}async connectedCallback(){this._config=this._config||{},await this.ensureEntityPickerLoaded(),this.render(),this._initialized=!0,this._hass&&this.updateEntityPickers()}disconnectedCallback(){this._cleanupSuppressHandler(),this.pinned.clear(),this.innerHTML=""}_cleanupSuppressHandler(){this._suppressHandler&&(window.removeEventListener("unhandledrejection",this._suppressHandler),this._suppressHandler=void 0),this._suppressTimeout&&(clearTimeout(this._suppressTimeout),this._suppressTimeout=void 0)}async ensureEntityPickerLoaded(){if(!customElements.get("ha-entity-picker"))try{let n=await(await window.loadCardHelpers()).createCardElement({type:"entities",entities:[]});this._cleanupSuppressHandler(),this._suppressHandler=a=>{(a.reason?.message?.includes("localize")||a.reason?.message?.includes("hass"))&&a.preventDefault()},window.addEventListener("unhandledrejection",this._suppressHandler);try{await n.constructor.getConfigElement?.()}finally{this._suppressTimeout=setTimeout(()=>this._cleanupSuppressHandler(),2e3)}}catch{}}ctx(){return{all:this.all,place:this.placeOn,note:this.noteSource(),noDefaultAi:this.noDefaultAi}}noteSource(){let e=this._config??{};return e.note_entity||this.noteChoice==="entity"?"entity":e.show_note?"ai":"off"}render(){let e=this._config??(this._config={}),n=this.uid,a=["latitude","longitude","time_zone"].some(h=>e[h]!==void 0&&e[h]!=="");this.placeOn=this.placeOn||a;let i=Object.fromEntries(Object.entries(e.engine_settings||{}).filter(([,h])=>typeof h=="number"&&isFinite(h))),l=e.custom_colors||{},r=e.layout==="nightstand"?"nightstand":e.compact?"compact":"default",u=(h,f,y,L)=>W(h,f,y,L,n),g=([h,f],y)=>`<div class="swc"><span class="chip${y?` ink ink-${h.replace("_color","")}`:""}"><input type="color" id="${h}" value="${b(l[h]||P.DEFAULT_COLORS[h])}"></span><label for="${h}">${f}</label><button type="button" class="tb color-reset" data-target="${h}" aria-label="Reset ${f}"${l[h]?"":" data-off"}>Reset</button></div>`,o=(h,f,y,L)=>`<section class="rv drw" data-sec="${h}" style="--i:${L}"><div class="rv-in"><div class="drw-b"><h3 class="drw-h"><button type="button" class="drw-btn" data-drawer="${h}" aria-expanded="false" aria-controls="awc-${h}-${n}"><span class="drw-tx"><span class="drw-t">${f}</span><span class="drw-s" data-summary="${h}"></span></span>${bt}</button></h3><div class="rv drw-c" id="awc-${h}-${n}" role="region" aria-label="${f}"><div class="rv-in"><div class="drw-in">${y}</div></div></div></div></div></section>`;this.innerHTML=`
      <div class="card-config" data-instant>
        ${se(this.all)}

        ${T("weather","Weather",[c("entity",`${S("entity","Weather entity",e.entity)}<p class="status" role="status" data-status="entity" hidden>${xe}<span>Pick a weather entity to start.</span></p>`),c("name",E({id:"name",label:"Place name",placeholder:"Weather",value:e.name,hint:"Shown above the temperature"})),c("show_location",k("show_location","Show the place name",e.show_location!==!1)),c("outdoor_sensor_entity",S("outdoor_sensor_entity","Temperature from",e.outdoor_sensor_entity,"A sensor of yours, shown instead of the weather entity's")),c("feels_like_entity",S("feels_like_entity","Feels like from",e.feels_like_entity,"Without one, the weather entity's own, when it reports one")),c("another_place",k("another_place","Weather for another place",this.placeOn,"Its sun, and its times in its time zone")),c("place_fields",J(e))].join(""))}

        ${T("look","Layout and colors",[c("layout",u("layout","Layout",[["default","Regular"],["compact","Compact"],["nightstand","Nightstand"]],r)),c("color_palette",u("color_palette","Colors",[["default","Sky"],["theme","Theme"]],e.color_palette==="theme"?"theme":"default")),c("temperature_decimals",k("temperature_decimals","One decimal",Number(e.temperature_decimals)===1,"21.5\xB0 rather than 22\xB0"))].join(""))}

        ${T("nightstand","Nightstand",[c("why_nightstand_only",oe("These apply with the Nightstand layout.")),c("alarm_entity",S("alarm_entity","Next alarm",e.alarm_entity,"Optional. Your phone's next alarm sensor, or a date and time helper")),c("wake_time",E({id:"wake_time",label:"Wake time",placeholder:"07:00",value:e.wake_time,hint:"When you get up without an alarm"})),c("night",C("night","Night mode","Automatic: when the room goes dark, or from bed time without a light sensor")),c("night_sensor",S("night_sensor","Light sensor",e.night_sensor,"An illuminance sensor near the screen")),c("night_lux",E({id:"night_lux",label:"Dark below (lx)",type:"number",min:.1,step:"any",placeholder:"5",value:e.night_lux!==void 0?String(e.night_lux):"",hint:"Raise it if the screen or a street light keeps the room brighter"})),c("bed_time",E({id:"bed_time",label:"Bed time",placeholder:"22:30",value:e.bed_time,hint:"By default, 8 h 30 min before the alarm or wake time"})),c("night_red",k("night_red","Red at night",e.night_red!==!1,"Red on black, like a bedside clock"))].join(""))}

        ${T("forecast","Forecast and clock",[c("why_forecast_nightstand",oe("The nightstand shows the time, the date and what's coming on its own.")),c("show_forecast",k("show_forecast","Forecast",!!e.show_forecast,"Today's high and low, the hours ahead, and the week on a tap")),c("forecast_days",C("forecast_days","Days under the hours")),c("forecast_metric",C("forecast_metric","Hours open on","Under the hours, a button for each value your forecast reports")),c("forecast_graph",C("forecast_graph","Graph")),c("time_date",C("time_date","Time and date","Before the place name, in your profile's 12- or 24-hour format")),c("hero",u("hero","Big number",[["temperature","Temperature"],["clock","Time"]],e.hero==="clock"?"clock":"temperature"))].join(""))}

        ${T("note","Weather note",[c("note",`${C("note_source","Note")}<p class="help" data-help="note"></p><p class="status" role="status" id="note_status" hidden></p>`),c("why_note_compact",oe("The compact card has no room for the note.")),c("why_note_nightstand",oe("The nightstand doesn't show the note.")),c("note_tone",C("note_tone","Voice","Serious weather always gets plain advice")),c("note_ai_task_entity",S("note_ai_task_entity","AI Task",e.note_ai_task_entity,"Leave empty for your default AI Task")),c("note_calendar",S("note_calendar","Calendar",vt(e.note_calendar)[0],"For what to wear when you're out. Only the times reach your AI")),c("note_entity",S("note_entity","Note entity",e.note_entity,"A text helper or a sensor: its state is the short note")),c("note_attribute",E({id:"note_attribute",label:"Longer version",placeholder:"note",value:e.note_attribute,hint:"The attribute shown where there's room for two lines"})),c("note_max_age",E({id:"note_max_age",label:"Hide after (minutes)",type:"number",min:0,placeholder:"180",value:e.note_max_age!==void 0?String(e.note_max_age):"",hint:"Counted from when the note was written. 0 keeps it up"}))].join(""))}

        <div class="rv drws" data-drawers><div class="rv-in"><div class="drws-b">
          ${o("readings","Readings",[c("show_attributes",k("show_attributes","Show the readings",e.show_attributes!==!1)),c("readings",`<div class="readings-table"></div>
              <div data-levels-for="uv">${E({id:"uv_levels",label:"UV levels",placeholder:"3, 6, 8, 11",value:Array.isArray(e.uv_levels)?e.uv_levels.join(", "):e.uv_levels,hint:"Where moderate, high, very high and extreme start. The WHO's by default"})}</div>
              <div data-levels-for="aqi">${E({id:"aqi_levels",label:"Air quality levels",placeholder:"51, 101, 151, 201, 301",value:Array.isArray(e.aqi_levels)?e.aqi_levels.join(", "):e.aqi_levels,hint:"Where each US EPA level starts, unless your sensor uses another scale"})}</div>`),c("reading_style",C("reading_style","Each reading shows")),c("indoor_temperature_entity",S("indoor_temperature_entity","Indoor temperature",e.indoor_temperature_entity,"A line under the condition")),c("indoor_humidity_entity",S("indoor_humidity_entity","Indoor humidity",e.indoor_humidity_entity)),c("indoor_line",C("indoor_line","Indoor line starts with"))].join(""),0)}
          ${o("sky","Sky and motion",[c("animate",k("animate","Animate the weather",e.animate!==!1,"Off, a still sky in the weather's colors")),c("spill_particles",k("spill_particles","Let weather spill out",e.spill_particles!==!1,"Rain, snow and leaves fall past the card's edges")),c("lightning",k("lightning_shake","Shake on lightning",!e.disable_lightning_shake,"A small jolt when lightning strikes")),c("auto_pause",k("auto_pause","Pause in the background",!!e.auto_pause,"Also while this window isn't in front. The card always pauses off screen")),c("sky_follows",u("sky_follows","Sky follows",[["sun","The sun"],["hours","Set hours"]],e.enable_day_night_cycle?"hours":"sun")),c("day_hours",`<div class="pair">${E({id:"sunrise_hour",label:"Day begins at",type:"number",min:0,max:23,placeholder:"6",value:e.sunrise_hour!==void 0?String(e.sunrise_hour):""})}${E({id:"sunset_hour",label:"Night begins at",type:"number",min:0,max:23,placeholder:"20",value:e.sunset_hour!==void 0?String(e.sunset_hour):""})}</div>`),c("sun_entity",S("sun_entity","Sun",e.sun_entity,"Sets the sky's time of day and the sunset reading. Usually sun.sun")),c("moon_entity",S("moon_entity","Moon phase",e.moon_entity,"The Moon integration's sensor. Else, worked out from the date")),c("amounts",`<p class="sub-h">Amounts</p><div class="amt">${ze.map(([h,f,y])=>{let L=i[h]??M[h];return`<div class="amt-o"><label for="${h}">${f}</label><output for="${h}" data-out="${h}">${P.formatEngineValue(h,L)}</output>${y} value="${b(L)}" /></div>`}).join("")}</div><button type="button" class="tb reset-engine-btn" data-off>Reset amounts</button>`)].join(""),1)}
          ${o("colors","Custom colors",[c("sky_colors",`<p class="sub-h">Skies</p><p class="help">Each color replaces that condition's whole sky</p><div class="color-grid" id="color-grid">${je.map(h=>g(h,!1)).join("")}</div>`),c("why_sky_colors_theme",oe("Sky colors apply with Colors set to Sky.")),c("ink_colors",`<p class="sub-h">Text and weather</p><div class="color-grid" id="ink-grid">${We.map(h=>g(h,!0)).join("")}</div><button type="button" class="tb reset-colors-btn" id="reset-colors-btn" data-off>Reset all colors</button>`)].join(""),2)}
          ${o("planes","Planes",[c("flights_entity",S("flights_entity","Flights sensor",e.flights_entity,"Flightradar24's Current in area sensor. Each new flight crosses the card once")),c("plane_tags",C("plane_tags","Plane tags","Tags show only in open sky, never over the temperature")),c("plane_speed",C("plane_speed","Speed")),c("planes_on_load",k("planes_on_load","Fly the planes already up",!!e.planes_on_load,"When the dashboard opens, not only new arrivals"))].join(""),3)}
          ${o("interactions","Interactions",c("actions",'<div id="actions-editor"></div>'),4)}
        </div></div></div>

        ${T("dev","",c("dev_mode",k("dev_mode","Simulated weather",!!e.dev_mode,"The dev card's weather, with no weather entity needed")))}
      </div>
      <style>${U()}${Q}</style>
    `,this.attachEventListeners(),this.sync();for(let h of this.openDrawers)this.applyDrawer(h);this.syncColorInputs();let d=this.querySelector(".card-config");q(()=>q(()=>d?.removeAttribute("data-instant"))),setTimeout(()=>this.updateEntityPickers(),0)}attachEventListeners(){this.updateEntityPickers();let e=(o,d,h)=>this.querySelector(o)?.addEventListener(d,f=>h(f.target,f)),n=(o,d)=>this.querySelectorAll(`[id="${o}"] input[type="radio"]`).forEach(h=>h.addEventListener("change",()=>{h.checked&&d(h.value)}));e("#all_settings","change",o=>{this.all=!!o.checked,ie(this.all),this.sync();let d=this.querySelector("[data-live]");d&&(d.textContent=ae(this.all,!0))}),e("#entity","value-changed",o=>this._set({entity:o.value})),e("#name","input",o=>this._set({name:o.value})),e("#show_location","change",o=>this._set({show_location:o.checked?void 0:!1}));for(let o of["outdoor_sensor_entity","feels_like_entity","alarm_entity","night_sensor","note_ai_task_entity","indoor_temperature_entity","indoor_humidity_entity","sun_entity","moon_entity","flights_entity"])e(`#${o}`,"value-changed",d=>{this._set({[o]:d.value||void 0}),o==="note_ai_task_entity"&&this.syncNoteStatus()});e("#another_place","change",o=>{if(this.placeOn=!!o.checked,this.placeOn){Object.keys(this.placeKept).length?this._set(this.placeKept):this.sync();return}let d=this._config??{};this.placeKept=Object.fromEntries(["latitude","longitude","time_zone"].filter(h=>d[h]!==void 0).map(h=>[h,d[h]])),this.pinned.delete("place_fields"),this._set({latitude:void 0,longitude:void 0,time_zone:void 0})}),X(this,o=>this._set(o)),n("layout",o=>{this._set(o==="compact"?{compact:!0,layout:void 0}:o==="nightstand"?{layout:"nightstand",compact:void 0}:{compact:void 0,layout:void 0}),this.mountActions()}),n("color_palette",o=>{this._set({color_palette:o==="theme"?o:void 0}),this.syncColorInputs()}),e("#temperature_decimals","change",o=>this._set({temperature_decimals:o.checked?1:void 0}));for(let o of["wake_time","bed_time"])e(`#${o}`,"input",d=>{let h=(d.value||"").trim();this._set({[o]:/^\d{1,2}:\d{2}$/.test(h)?h:void 0})});this._bindSelect("night",[{value:"auto",label:"Automatic"},{value:"on",label:"Always"},{value:"off",label:"Never"}],this._config?.night===!0?"on":this._config?.night===!1?"off":String(this._config?.night||"auto"),o=>{this._set({night:o==="auto"?void 0:o})}),e("#night_lux","input",o=>{let d=Number((o.value||"").trim());this._set({night_lux:Number.isFinite(d)&&d>0&&d!==5?d:void 0})}),e("#night_red","change",o=>this._set({night_red:o.checked?void 0:!1})),e("#show_forecast","change",o=>{this._set({show_forecast:o.checked||void 0}),this.mountActions()});let a=this._config?.show_days?String(this._config?.forecast_days??7):"none";this._bindSelect("forecast_days",[{value:"none",label:"None"},...Array.from({length:10},(o,d)=>({value:String(d+1),label:d?`${d+1} days`:"1 day"}))],a,o=>{this._set(o==="none"?{show_days:void 0}:{show_days:!0,forecast_days:o==="7"?void 0:Number(o)})}),this._bindSelect("forecast_metric",Ge,this._config?.forecast_metric||"temp",o=>this._set({forecast_metric:o==="temp"?void 0:o})),this._bindSelect("forecast_graph",Be,this._config?.forecast_graph||"line",o=>this._set({forecast_graph:o==="line"?void 0:o})),this._bindSelect("time_date",this.timeDateOptions(),this.timeDateValue(),o=>{this._config?.hero==="clock"?this._set({show_date:o==="date"||void 0}):this._set({show_clock:o==="time"||o==="both"||void 0,show_date:o==="date"||o==="both"||void 0})}),n("hero",o=>{this._set({hero:o==="clock"?o:void 0}),this.refill.time_date?.(this.timeDateOptions(),this.timeDateValue())}),this._bindSelect("note_source",[{value:"off",label:"Off"},{value:"ai",label:"Written by your AI"},{value:"entity",label:"From an entity"}],this.noteSource(),o=>{let d=this._config??{};d.note_entity&&(this.noteEntityKept=d.note_entity),this.noteChoice=o==="entity"?"entity":void 0,o==="off"?this._set({show_note:void 0,note_entity:void 0}):o==="ai"?this._set({show_note:!0,note_entity:void 0}):this.noteEntityKept?this._set({note_entity:this.noteEntityKept,show_note:void 0}):(this.sync(),this.querySelector("#note_entity")?.focus()),this.syncNoteStatus()}),e("#note_entity","value-changed",o=>{let d=o.value||void 0;this.noteChoice=d?void 0:"entity",this._set(d?{note_entity:d,show_note:void 0}:{note_entity:void 0}),this.syncNoteStatus()}),this._bindSelect("note_tone",[{value:"snarky",label:"Snarky"},{value:"calm",label:"Calm"},{value:"friendly",label:"Friendly"},{value:"dry",label:"Dry"}],this._config?.note_tone||"snarky",o=>this._set({note_tone:o==="snarky"?void 0:o})),e("#note_calendar","value-changed",o=>{let d=[o.value,...vt(this._config?.note_calendar).slice(1)].filter(Boolean);this._set({note_calendar:d.length>1?d:d[0]||void 0})}),e("#note_attribute","input",o=>this._set({note_attribute:o.value.trim()||void 0})),e("#note_max_age","change",o=>{let d=o.value.trim(),h=parseInt(d);d?h>=0&&this._set({note_max_age:h===180?void 0:h}):this._set({note_max_age:void 0})}),e("#show_attributes","change",o=>this._set({show_attributes:o.checked?void 0:!1}));let i=this.querySelector(".readings-table");this.readingsEditor=i?at(i,()=>this._config??{},o=>this._set(o),{open:this.readingOpen,onOpen:o=>{this.readingOpen=o}}):void 0,this.readingsEditor?.hass(this._hass);let l=(o,d)=>e(`#${o}`,"change",h=>{let f=h.value.trim(),y=f.split(",").map(N=>parseFloat(N)),L=y.length===d&&y.every((N,H)=>isFinite(N)&&(H===0||N>y[H-1]));this._set({[o]:f?L?y:f:void 0})});l("uv_levels",4),l("aqi_levels",5);let r=this._config??{};this._bindSelect("reading_style",[{value:"both",label:"Icon and label"},{value:"label",label:"Label"},{value:"icon",label:"Icon"},{value:"value",label:"The value alone"}],r.show_attribute_labels===!1?r.show_attribute_icons===!1?"value":"icon":r.show_attribute_icons===!1?"label":"both",o=>{this._set({show_attribute_labels:o==="icon"||o==="value"?!1:void 0,show_attribute_icons:o==="label"||o==="value"?!1:void 0})}),this._bindSelect("indoor_line",[{value:"label",label:'The word "Indoors"'},{value:"icon",label:"A house icon"},{value:"both",label:"Icon and word"},{value:"hidden",label:"Hidden"}],r.show_indoor===!1?"hidden":r.indoor_style||"label",o=>{this._set(o==="hidden"?{show_indoor:!1}:{show_indoor:void 0,indoor_style:o==="label"?void 0:o})}),e("#animate","change",o=>this._set({animate:o.checked?void 0:!1})),e("#spill_particles","change",o=>this._set({spill_particles:o.checked?void 0:!1})),e("#lightning_shake","change",o=>this._set({disable_lightning_shake:o.checked?void 0:!0})),e("#auto_pause","change",o=>this._set({auto_pause:o.checked||void 0})),n("sky_follows",o=>this._set({enable_day_night_cycle:o==="hours"||void 0}));for(let[o,d]of[["sunrise_hour",6],["sunset_hour",20]])e(`#${o}`,"change",h=>{let f=h.value.trim(),y=parseInt(f);f?y>=0&&y<=23&&this._set({[o]:y===d?void 0:y}):this._set({[o]:void 0})});for(let[o]of ze){let d=this.querySelector(`#${o}`);d&&(this.syncFill(d),d.addEventListener("input",()=>{let h=this.querySelector(`[data-out="${o}"]`);h&&(h.textContent=P.formatEngineValue(o,parseFloat(d.value))),this.syncFill(d)}),d.addEventListener("change",()=>this._updateEngineConfig(o,parseFloat(d.value))))}e(".reset-engine-btn","click",(o,d)=>{d.preventDefault(),this._resetEngineSettings()});for(let[o]of[...je,...We])e(`#${o}`,"input",d=>this.paintChip(d)),e(`#${o}`,"change",d=>this._updateColorConfig(o,d.value));this.querySelectorAll(".color-reset").forEach(o=>o.addEventListener("click",d=>{d.preventDefault(),this._resetColorConfig(o.dataset.target)})),e(".reset-colors-btn","click",(o,d)=>{d.preventDefault(),this._resetAllColors()});let u=this._config??{};this._bindSelect("plane_tags",[{value:"flight",label:"Flight number and aircraft"},{value:"route",label:"Route (Lisbon \u2192 Paris)"},{value:"both",label:"Route and flight number"},{value:"none",label:"None"}],u.show_flight_labels===!1?"none":u.flight_label||"flight",o=>{this._set(o==="none"?{show_flight_labels:!1}:{show_flight_labels:void 0,flight_label:o==="flight"?void 0:o})});let g=String(u.plane_speed??1);this._bindSelect("plane_speed",[{value:"1",label:"Usual"},{value:"0.5",label:"Half"},{value:"0.25",label:"A quarter"},...["1","0.5","0.25"].includes(g)?[]:[{value:g,label:`${g}\xD7 (set in YAML)`}]],g,o=>this._set({plane_speed:o==="1"?void 0:Number(o)})),e("#planes_on_load","change",o=>this._set({planes_on_load:o.checked||void 0})),this.mountActions(),e("#dev_mode","change",o=>this._set({dev_mode:o.checked||void 0})),this.querySelectorAll(".drw-btn").forEach(o=>o.addEventListener("click",()=>{let d=o.dataset.drawer;this.openDrawers.has(d)?this.openDrawers.delete(d):this.openDrawers.add(d),this.applyDrawer(d)})),this.syncNoteStatus()}applyDrawer(e){let n=this.openDrawers.has(e);this.querySelector(`[data-drawer="${e}"]`)?.setAttribute("aria-expanded",String(n));let a=this.querySelector(`[data-sec="${e}"] .drw-c`);a&&me(a,n,!!this.querySelector(".card-config[data-instant]"))}timeDateOptions(){return this._config?.hero==="clock"?[{value:"off",label:"Off"},{value:"date",label:"Date"}]:[{value:"off",label:"Off"},{value:"time",label:"Time"},{value:"date",label:"Date"},{value:"both",label:"Time and date"}]}timeDateValue(){let e=this._config??{};return e.hero==="clock"?e.show_date?"date":"off":e.show_clock&&e.show_date?"both":e.show_clock?"time":e.show_date?"date":"off"}sync(){let e=this.querySelector(".card-config");if(!e)return;let n=this._config??{},a=this.ctx(),i=e.hasAttribute("data-instant");e.toggleAttribute("data-all",a.all);let l=re(e,pe,n,a,this.pinned,i),r=this.querySelector("[data-drawers]");r&&me(r,l,i);let u=(o,d)=>{let h=this.querySelector(o);h&&h.textContent!==d&&(h.textContent=d)},g=n.layout==="nightstand"?"nightstand":n.compact?"compact":"default";u('[data-help="layout"]',{default:"The sky, the temperature and your readings",compact:"One line, to sit under other cards",nightstand:"A bedside clock that goes dark at night"}[g]),u('[data-help="color_palette"]',n.color_palette==="theme"?"Your dashboard theme's colors, light or dark":"Colors from the weather and the time of day"),u('[data-help="hero"]',n.hero==="clock"?"The time leads, and the temperature starts the condition's line":"The temperature leads the card"),u('[data-help="sky_follows"]',n.enable_day_night_cycle?"Day and night change at the hours you set":"Dawn, day, dusk and night follow the sun"),u('[data-help="note"]',{off:"A line under the conditions: what's coming and what to wear",ai:"Your AI writes it from the forecast. The card grows a row to fit it",entity:"Text from a helper or a sensor of yours"}[a.note]);for(let o of De)u(`[data-summary="${o}"]`,this.summary(o));this.querySelector('[data-status="entity"]')?.toggleAttribute("hidden",!!n.entity||!!n.dev_mode),this.querySelector(".reset-engine-btn")?.toggleAttribute("data-off",!Object.keys(M).some(o=>te(n,`engine_settings.${o}`))),this.syncPlaceholder(),this.readingsEditor?.sync()}summary(e){let n=this._config??{};if(e==="readings"){let r=V(n),u=r.filter(g=>g.view).length;return[n.show_attributes===!1?"Off":r.filter(g=>!g.view).map(ce).join(", ")||"None",u?`${u} in the forecast view`:"",n.indoor_temperature_entity||n.indoor_humidity_entity?"Indoors":""].filter(Boolean).join(" \xB7 ")}if(e==="sky"){if(n.animate===!1)return"Still";let r=Object.keys(M).filter(u=>te(n,`engine_settings.${u}`)).length;return["Moving",n.spill_particles===!1?"inside the card":"",n.enable_day_night_cycle?"set hours":"",r?`${r} ${r===1?"amount":"amounts"} changed`:""].filter(Boolean).join(" \xB7 ")}if(e==="colors"){let r=Object.values(n.custom_colors||{}).filter(Boolean).length;return r?`${r} ${r===1?"color":"colors"} set`:"None set"}if(e==="planes")return n.flights_entity||"Needs a Flightradar24 sensor";let a=n.tap_action?.action??ke(n),i={forecast:"A tap opens the forecast","more-info":"A tap opens the weather's details",none:"A tap does nothing",navigate:"A tap goes to a view",url:"A tap opens a link",toggle:"A tap toggles",assist:"A tap opens Assist"},l=["hold_action","double_tap_action"].filter(r=>{let u=n[r]?.action;return u&&u!=="none"}).length;return(i[a]??"A tap runs an action")+(l?" \xB7 more gestures set":"")}syncPlaceholder(){let e=this.querySelector("#name"),n=this._config?.entity,a=n?this._hass?.states?.[n]?.attributes?.friendly_name:void 0;!e||typeof a!="string"||!a||e.getAttribute("placeholder")===a||(e.setAttribute("placeholder",a),e.placeholder=a)}_bindSelect(e,n,a,i){let l=this.querySelector(`#${e}`);if(!l)return;let r={options:n,current:a},u=()=>{l.options=r.options,l.value=r.current};this.refill[e]=(g,o)=>{r={options:g,current:o},customElements.get("ha-select")&&u()},customElements.get("ha-select")?u():customElements.whenDefined("ha-select").then(u),l.addEventListener("selected",(g=>{let o=g.detail?.value;!o||o===l.value&&o===r.current||(l.value=o,r={...r,current:o},i(o))})),l.addEventListener("closed",g=>g.stopPropagation())}mountActions(){let e=this.querySelector("#actions-editor");if(!e)return;let n=Z(this._config,this._config?.entity),a=ke(this._config??{}),i=a==="more-info"?void 0:{action:a};B(e,this._hass,n.tap_action||!i?n:{...n,tap_action:i},l=>{let r={...l};i&&"tap_action"in l&&(r.tap_action=l.tap_action===void 0?{action:"more-info"}:l.tap_action.action===i.action?void 0:l.tap_action),this._set(r)},{forecast:"Forecast"})}syncNoteStatus(){this.updateNoteStatus()}async updateNoteStatus(){let e=this.querySelector("#note_status"),n=this._hass;if(!e)return;let a=this.noteSource()==="ai",i="",l=!1;a&&n&&(n.config?.components?.includes("ai_task")?this._config?.note_ai_task_entity||(this.noteDefault??(this.noteDefault=n.callWS({type:"ai_task/preferences/get"}).then(r=>r?.gen_data_entity_id??null).catch(()=>null)),await this.noteDefault||(i="You have no default AI Task. Pick one below, or set one in Settings \u2192 System \u2192 AI.",l=!0)):i="The note needs Home Assistant 2025.8 or later, with an AI integration that provides an AI Task, such as OpenAI or Anthropic."),e.dataset.text!==i&&(e.dataset.text=i,e.innerHTML=i?`${xe}<span></span>`:"",i&&(e.querySelector("span").textContent=i),e.hidden=!i),l!==this.noDefaultAi&&(this.noDefaultAi=l,this.sync())}_set(e){this._patchConfig(e),this.sync()}_patchConfig(e){this._config||(this._config={});let n=this._config;for(let[a,i]of Object.entries(e))i===""||i===null||i===void 0?delete n[a]:n[a]=i;this._fireConfigChanged()}_updateConfig(e,n){this._set({[e]:n})}_updateEngineConfig(e,n){let i={...(this._config??(this._config={})).engine_settings||{}};n===M[e]?delete i[e]:i[e]=n,this._set({engine_settings:Object.keys(i).length?i:void 0})}_resetEngineSettings(){for(let[e]of ze){let n=this.querySelector(`#${e}`),a=M[e];n&&(n.value=String(a),this.syncFill(n));let i=this.querySelector(`[data-out="${e}"]`);i&&(i.textContent=P.formatEngineValue(e,a))}this._set({engine_settings:void 0}),this.querySelector("#windSpeed")?.focus()}syncFill(e){let n=Number(e.min),a=Number(e.max),i=Number(e.value);e.style.setProperty("--fill",`${Math.max(0,Math.min(100,(i-n)/(a-n)*100))}%`)}static formatEngineValue(e,n){return e==="cloudCount"?String(Math.round(n)):e==="splashBounce"?`${Math.round(n)}%`:`${n.toFixed(1)}\xD7`}static hex(e){if(e){if(/^#[0-9a-f]{6}$/i.test(e))return e.toLowerCase();if(/^#[0-9a-f]{3}$/i.test(e))return`#${[...e.slice(1)].map(n=>n+n).join("")}`.toLowerCase();try{let n=document.createElement("canvas").getContext("2d");if(!n)return;n.fillStyle="#000",n.fillStyle=e;let a=String(n.fillStyle);if(/^#[0-9a-f]{6}$/i.test(a))return a;let i=a.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);return i?`#${i.slice(1,4).map(l=>Number(l).toString(16).padStart(2,"0")).join("")}`:void 0}catch{return}}}syncColorInputs(){let e=this._config?.custom_colors||{},n=this._config?.color_palette==="theme"?"var(--card-background-color, #fff)":P.DEFAULT_COLORS.sunny_bg;for(let[a]of[...je,...We]){let i=this.querySelector(`#${a}`);i&&(i.value=P.hex(e[a])??P.DEFAULT_COLORS[a],i.parentElement.style.setProperty("--sky",n),this.paintChip(i))}this._syncColorResets()}paintChip(e){let n=P.hex(e.value);n&&e.parentElement.style.setProperty("--c",n)}_updateColorConfig(e,n){let a={...this._config?.custom_colors||{},[e]:n};this._set({custom_colors:a}),this._syncColorResets()}_syncColorResets(){let e=this._config?.custom_colors||{};this.querySelectorAll(".color-reset").forEach(n=>{n.toggleAttribute("data-off",!e[n.dataset.target])}),this.querySelector("#reset-colors-btn")?.toggleAttribute("data-off",!Object.values(e).some(Boolean))}_resetColorConfig(e){let n={...this._config?.custom_colors||{}};delete n[e],this._set({custom_colors:Object.keys(n).length?n:void 0});let a=this.querySelector(`#${e}`);a&&(a.value=P.DEFAULT_COLORS[e]||a.value,this.paintChip(a),a.focus()),this._syncColorResets()}_resetAllColors(){this._set({custom_colors:void 0}),this.syncColorInputs()}_fireConfigChanged(){let e=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(e)}set hass(e){this._hass=e,this._initialized&&this.isConnected&&this.updateEntityPickers()}updateEntityPickers(){if(!this._hass||!this.isConnected||!this._initialized)return;this.syncNoteStatus(),this.syncPlaceholder(),ee(this.querySelector("#actions-editor"),this._hass),this.readingsEditor?.hass(this._hass),[{id:"#entity",domains:["weather"]},{id:"#outdoor_sensor_entity",domains:["sensor"]},{id:"#feels_like_entity",domains:["sensor"]},{id:"#indoor_temperature_entity",domains:["sensor"]},{id:"#indoor_humidity_entity",domains:["sensor"]},{id:"#sun_entity",domains:["sun"]},{id:"#moon_entity",domains:["sensor"]},{id:"#flights_entity",domains:["sensor"]},{id:"#alarm_entity",domains:["sensor","input_datetime"]},{id:"#night_sensor",domains:["sensor"]},{id:"#note_entity",domains:["sensor","input_text"]},{id:"#note_ai_task_entity",domains:["ai_task"]},{id:"#note_calendar",domains:["calendar"]}].forEach(({id:n,domains:a})=>{let i=this.querySelector(n);i&&(i.hass=this._hass,i.includeDomains=a)})}};P.DEFAULT_COLORS={sunny_bg:G("sunny","day").mid,rainy_bg:G("rainy","day").mid,snowy_bg:G("snowy","day").mid,stormy_bg:G("stormy","day").mid,windy_bg:G("windy","day").mid,cloudy_bg:G("cloudy","day").mid,fog_color:"#e0e0e0",text_color:Y(z(Re)),temperature_color:Y(z(Re)),sun_color:"#ffd67a",rain_color:"#deeaff",snow_color:"#f7fbff"};var Ee=P;var Xt=0,Se=class extends HTMLElement{constructor(){super(...arguments);this._config={};this._initialized=!1;this.uid=++Xt;this.all=ne();this.pinned=new Set;this.placeOn=!1;this.placeKept={}}setConfig(e){let n=JSON.stringify(e)===JSON.stringify(this._config);this._config={...e},this._initialized&&!n&&this._render()}set hass(e){this._hass=e,this._initialized&&this.isConnected&&(this._updatePickers(),ee(this.querySelector("#st-actions"),e))}async connectedCallback(){this._config=this._config||{},await this._ensureEntityPickerLoaded(),this._render(),this._initialized=!0,this._hass&&this._updatePickers()}disconnectedCallback(){this.pinned.clear(),this.innerHTML=""}async _ensureEntityPickerLoaded(){if(!customElements.get("ha-entity-picker"))try{let n=await(await window.loadCardHelpers()).createCardElement({type:"entities",entities:[]}),a=i=>{(i.reason?.message?.includes("localize")||i.reason?.message?.includes("hass"))&&i.preventDefault()};window.addEventListener("unhandledrejection",a);try{await n.constructor.getConfigElement?.()}catch{}setTimeout(()=>window.removeEventListener("unhandledrejection",a),2e3)}catch{}}ctx(){return{all:this.all,place:this.placeOn,note:"off",noDefaultAi:!1}}_render(){let e=this._config;this.placeOn=this.placeOn||["latitude","longitude","time_zone"].some(a=>e[a]!==void 0&&e[a]!==""),this.innerHTML=`
            <div class="card-config" data-instant>
              ${se(this.all)}
              ${T("sun","Sun",[c("sun_entity",S("sun-picker","Sun entity",e.sun_entity)),c("layout",W("layout","Layout",[["regular","Regular"],["compact","Compact"]],e.compact?"compact":"regular",this.uid)),c("color_palette",W("color_palette","Colors",[["default","Sky"],["theme","Theme"]],e.color_palette==="theme"?"theme":"default",this.uid))].join(""))}
              ${T("shows","What it shows",[c("title",E({id:"title",label:"Title (optional)",value:e.title,hint:"Above the next sunrise or sunset"})),c("show_header",k("show_header","Next sunrise or sunset",e.show_header!==!1,"The headline time and the countdown to it")),c("show_details",k("show_details","Details",e.show_details!==!1,"First and last light, solar noon, daylight and the moon")),c("daylight_delta",C("daylight_delta","Compare with","How much earlier or later the sunrise or sunset is, and how much longer or shorter the day")),c("moon_entity",S("moon-picker","Moon phase",e.moon_entity,"The Moon integration's sensor")),c("direction",C("direction","Direction","From your location, the sun runs right to left south of the equator"))].join(""))}
              ${T("sky","Sky and place",[c("weather_entity",S("weather-picker","Share the sky of",e.weather_entity,"Without one, the sky of the weather card on the same sun")),c("another_place",k("another_place","Another place",this.placeOn,"Its sun, from its coordinates, and its times in its time zone")),c("place_fields",J(e))].join(""))}
              ${T("interactions","Interactions",c("actions",'<div id="st-actions"></div>'))}
              ${T("dev","",c("dev_mode",k("dev_mode","Simulated weather",!!e.dev_mode,"The dev card's sun and sky, with no sun entity needed")))}
            </div>
            <style>${U()}${Q}</style>
        `,this._updatePickers(),this._attachListeners(),B(this.querySelector("#st-actions"),this._hass,Z(this._config,this._config.sun_entity),a=>this._update(a)),this.sync();let n=this.querySelector(".card-config");q(()=>q(()=>n?.removeAttribute("data-instant")))}_updatePickers(){let e=[{id:"#sun-picker",domains:["sun"]},{id:"#moon-picker",domains:["sensor"]},{id:"#weather-picker",domains:["weather"]}];for(let n of e){let a=this.querySelector(n.id);a&&(this._hass&&(a.hass=this._hass),a.includeDomains=n.domains)}}_attachListeners(){this.querySelector("#all_settings")?.addEventListener("change",n=>{this.all=!!n.target.checked,ie(this.all),this.sync();let a=this.querySelector("[data-live]");a&&(a.textContent=ae(this.all,!1))}),this.querySelector("#sun-picker")?.addEventListener("value-changed",n=>{this._update({sun_entity:n.detail.value||void 0})}),this.querySelector("#moon-picker")?.addEventListener("value-changed",n=>{this._update({moon_entity:n.detail.value||void 0})}),this.querySelector("#weather-picker")?.addEventListener("value-changed",n=>{this._update({weather_entity:n.detail.value||void 0})}),this.querySelector("#title")?.addEventListener("input",n=>{this._update({title:n.target.value||void 0})}),le(this,"layout",n=>this._update({compact:n==="compact"||void 0})),le(this,"color_palette",n=>this._update({color_palette:n==="theme"?"theme":void 0}));let e=(n,a)=>{this.querySelector(`#${n}`)?.addEventListener("change",i=>this._update(a(i.target.checked)))};e("show_header",n=>({show_header:n?void 0:!1})),e("show_details",n=>({show_details:n?void 0:!1})),e("dev_mode",n=>({dev_mode:n||void 0})),K(this,"daylight_delta",[{value:"day",label:"Yesterday"},{value:"week",label:"Last week"},{value:"month",label:"Last month"},{value:"none",label:"Nothing"}],this._config.daylight_delta??"day",n=>this._update({daylight_delta:n==="day"?void 0:n})),K(this,"direction",[{value:"auto",label:"From your location"},{value:"left_to_right",label:"Left to right"},{value:"right_to_left",label:"Right to left"}],this._config.direction??"auto",n=>this._update({direction:n==="auto"?void 0:n})),this.querySelector("#another_place")?.addEventListener("change",n=>{if(this.placeOn=!!n.target.checked,this.placeOn){Object.keys(this.placeKept).length?this._update(this.placeKept):this.sync();return}let a=this._config;this.placeKept=Object.fromEntries(["latitude","longitude","time_zone"].filter(i=>a[i]!==void 0).map(i=>[i,a[i]])),this.pinned.delete("place_fields"),this._update({latitude:void 0,longitude:void 0,time_zone:void 0})}),X(this,n=>this._update(n))}sync(){let e=this.querySelector(".card-config");if(!e)return;let n=this._config;re(e,_t,n,this.ctx(),this.pinned,e.hasAttribute("data-instant"));let a=(i,l)=>{let r=this.querySelector(i);r&&r.textContent!==l&&(r.textContent=l)};a('[data-help="layout"]',n.compact?"One line: the next sunrise or sunset beside the sun's path":"The sun's path through the day, the next sunrise or sunset, and the day's details"),a('[data-help="color_palette"]',n.color_palette==="theme"?"Your dashboard theme's colors, light or dark":"The sky of the weather it shares, at the time of day")}_update(e){let n={...this._config,...e};for(let a of Object.keys(n))(n[a]===void 0||n[a]==="")&&delete n[a];this._config=n,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})),this.sync()}};var Ke=["0","3","5","7","10"].map(t=>({value:t,label:t==="0"?"No days":`${t} days`})),Qt=0,Ae=class extends HTMLElement{constructor(){super(...arguments);this._config={};this._initialized=!1;this.uid=++Qt;this.all=ne();this.pinned=new Set;this.placeOn=!1;this.placeKept={}}setConfig(e){let n=JSON.stringify(e)===JSON.stringify(this._config);this._config={...e},this._initialized&&!n&&this._render()}set hass(e){this._hass=e,this._initialized&&this.isConnected&&(this._updatePickers(),ee(this.querySelector("#fc-actions"),e))}async connectedCallback(){await this._ensureEntityPickerLoaded(),this._render(),this._initialized=!0,this._hass&&this._updatePickers()}disconnectedCallback(){this.pinned.clear(),this.innerHTML=""}async _ensureEntityPickerLoaded(){if(!customElements.get("ha-entity-picker"))try{let n=await(await window.loadCardHelpers()).createCardElement({type:"entities",entities:[]}),a=i=>{(i.reason?.message?.includes("localize")||i.reason?.message?.includes("hass"))&&i.preventDefault()};window.addEventListener("unhandledrejection",a);try{await n.constructor.getConfigElement?.()}catch{}setTimeout(()=>window.removeEventListener("unhandledrejection",a),2e3)}catch{}}ctx(){return{all:this.all,place:this.placeOn,note:"off",noDefaultAi:!1}}_render(){let e=this._config;this.placeOn=this.placeOn||["latitude","longitude","time_zone"].some(a=>e[a]!==void 0&&e[a]!==""),this.innerHTML=`
            <div class="card-config" data-instant>
              ${se(this.all)}
              ${T("forecast","Forecast",[c("entity",S("weather-picker","Weather entity",e.entity)),c("layout",W("layout","Layout",[["card","Card"],["strip","Strip"]],e.compact?"strip":"card",this.uid)),c("color_palette",W("color_palette","Colors",[["default","Sky"],["theme","Theme"]],e.color_palette==="theme"?"theme":"default",this.uid))].join(""))}
              ${T("shows","What it shows",[c("show_hours",k("show_hours","The hours",e.show_hours!==!1,"The hourly row and its chips: drag it, and the sky goes there")),c("forecast_days",C("forecast_days","Days")),c("forecast_metric",C("forecast_metric","Hours open on","Under the hours, a button for each value your forecast reports")),c("forecast_graph",C("forecast_graph","Graph")),c("weather_effects",k("weather_effects","Weather",!!e.weather_effects,"Rain, snow, fog, wind and lightning behind the forecast, going to the hour you drag to"))].join(""))}
              ${T("sky","Sun and place",[c("sun_entity",S("sun-picker","Sun",e.sun_entity,"Sets the sky's time of day and the icons' light. Usually sun.sun")),c("another_place",k("another_place","Weather for another place",this.placeOn,"Its sun, and its times in its time zone")),c("place_fields",J(e))].join(""))}
              ${T("interactions","Interactions",c("actions",'<div id="fc-actions"></div>'))}
              ${T("dev","",c("dev_mode",k("dev_mode","Simulated weather",!!e.dev_mode,"The dev card's weather, with no weather entity needed")))}
            </div>
            <style>${U()}${Q}</style>
        `,this._updatePickers(),this._bind(),this.sync();let n=this.querySelector(".card-config");q(()=>q(()=>n?.removeAttribute("data-instant")))}_bind(){let e=this._config;this.querySelector("#all_settings")?.addEventListener("change",r=>{this.all=!!r.target.checked,ie(this.all),this.sync();let u=this.querySelector("[data-live]");u&&(u.textContent=ae(this.all,!1))}),this.querySelector("#weather-picker")?.addEventListener("value-changed",r=>{this._update({entity:r.detail.value||void 0})}),this.querySelector("#sun-picker")?.addEventListener("value-changed",r=>{this._update({sun_entity:r.detail.value||void 0})}),le(this,"layout",r=>this._update({compact:r==="strip"||void 0})),le(this,"color_palette",r=>this._update({color_palette:r==="theme"?"theme":void 0}));let n=(r,u)=>{this.querySelector(`#${r}`)?.addEventListener("change",g=>this._update(u(g.target.checked)))};n("show_hours",r=>({show_hours:r?void 0:!1})),n("weather_effects",r=>({weather_effects:r||void 0})),n("dev_mode",r=>({dev_mode:r||void 0})),K(this,"forecast_metric",Ge,e.forecast_metric??"temp",r=>this._update({forecast_metric:r==="temp"?void 0:r})),K(this,"forecast_graph",Be,e.forecast_graph??"line",r=>this._update({forecast_graph:r==="line"?void 0:r}));let a=String(e.forecast_days??7),i=Ke.some(r=>r.value===a)||!Number.isFinite(Number(a))?Ke:[...Ke,{value:a,label:`${a} day${a==="1"?"":"s"}`}].sort((r,u)=>Number(r.value)-Number(u.value));K(this,"forecast_days",i,a,r=>this._update({forecast_days:r==="7"?void 0:Number(r)})),this.querySelector("#another_place")?.addEventListener("change",r=>{if(this.placeOn=!!r.target.checked,this.placeOn){Object.keys(this.placeKept).length?this._update(this.placeKept):this.sync();return}let u=this._config;this.placeKept=Object.fromEntries(["latitude","longitude","time_zone"].filter(g=>u[g]!==void 0).map(g=>[g,u[g]])),this.pinned.delete("place_fields"),this._update({latitude:void 0,longitude:void 0,time_zone:void 0})}),X(this,r=>this._update(r));let l=Z(this._config,this._config.entity);B(this.querySelector("#fc-actions"),this._hass,l.tap_action?l:{...l,tap_action:{action:"forecast"}},r=>this._update(r.tap_action===void 0&&"tap_action"in r?{...r,tap_action:{action:"more-info"}}:r.tap_action?.action==="forecast"?{...r,tap_action:void 0}:r),{forecast:"Forecast"})}sync(){let e=this.querySelector(".card-config");if(!e)return;let n=this._config;re(e,yt,n,this.ctx(),this.pinned,e.hasAttribute("data-instant"));let a=(i,l)=>{let r=this.querySelector(i);r&&r.textContent!==l&&(r.textContent=l)};a('[data-help="layout"]',n.compact?"The hours alone, to sit under the compact weather card":"The hours and the week ahead"),a('[data-help="color_palette"]',n.color_palette==="theme"?"Your dashboard theme's colors, light or dark":"Colors from the weather and the time of day")}_updatePickers(){let e=[{id:"#weather-picker",domains:["weather"]},{id:"#sun-picker",domains:["sun"]}];for(let n of e){let a=this.querySelector(n.id);a&&(this._hass&&(a.hass=this._hass),a.includeDomains=n.domains)}}_update(e){let n={...this._config,...e};for(let a of Object.keys(n))(n[a]===void 0||n[a]==="")&&delete n[a];this._config=n,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})),this.sync()}};customElements.get("animated-weather-card-editor")||customElements.define("animated-weather-card-editor",Ee);customElements.get("animated-sun-tracker-editor")||customElements.define("animated-sun-tracker-editor",Se);customElements.get("animated-forecast-card-editor")||customElements.define("animated-forecast-card-editor",Ae);})();
