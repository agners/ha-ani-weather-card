"use strict";(()=>{var M={windSpeed:2,rainCount:1,leafCount:1,snowCount:1,cloudBaseSize:1,cloudCount:3,splashBounce:80};var Oe=t=>`
        ${t} ha-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: var(--mdc-icon-size, 24px);
          height: var(--mdc-icon-size, 24px);
          vertical-align: middle;
        }
`;var He=()=>`
${Oe(".card-config")}
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
`;var st={sunny:{top:[.445,.13,256],mid:[.495,.125,250],bottom:[.575,.11,238],glow:[.88,.08,218],glowAlpha:.45,overcast:0},"partly-cloudy":{top:[.445,.1,254],mid:[.495,.092,248],bottom:[.565,.08,240],glow:[.88,.07,220],glowAlpha:.36,overcast:.25},windy:{top:[.445,.115,244],mid:[.495,.105,236],bottom:[.565,.09,222],glow:[.95,.05,200],glowAlpha:.3,overcast:.1},cloudy:{top:[.43,.026,250],mid:[.475,.025,248],bottom:[.53,.024,244],glow:[.86,.016,250],glowAlpha:.28,overcast:.8},foggy:{top:[.44,.014,212],mid:[.48,.013,214],bottom:[.53,.012,218],glow:[.88,.01,210],glowAlpha:.3,overcast:.9},"light-rain":{top:[.42,.034,246],mid:[.48,.032,243],bottom:[.53,.03,238],glow:[.82,.02,246],glowAlpha:.22,overcast:.85},rainy:{top:[.37,.032,248],mid:[.43,.032,244],bottom:[.48,.03,240],glow:[.78,.02,246],glowAlpha:.18,overcast:.9},pouring:{top:[.3,.03,250],mid:[.36,.031,246],bottom:[.41,.03,242],glow:[.72,.02,248],glowAlpha:.14,overcast:1},stormy:{top:[.26,.032,280],mid:[.31,.034,272],bottom:[.36,.034,262],glow:[.7,.03,280],glowAlpha:.14,overcast:1},snowy:{top:[.45,.04,238],mid:[.495,.036,234],bottom:[.55,.03,228],glow:[.93,.02,230],glowAlpha:.32,overcast:.7},"snowy-rainy":{top:[.44,.036,240],mid:[.49,.033,236],bottom:[.54,.03,232],glow:[.86,.02,236],glowAlpha:.24,overcast:.85},sleety:{top:[.42,.042,258],mid:[.47,.04,252],bottom:[.52,.036,246],glow:[.84,.024,252],glowAlpha:.22,overcast:.85},"snowy-stormy":{top:[.3,.04,266],mid:[.35,.04,260],bottom:[.4,.038,252],glow:[.74,.026,260],glowAlpha:.14,overcast:1},"sleety-stormy":{top:[.28,.042,284],mid:[.33,.042,276],bottom:[.38,.04,266],glow:[.72,.03,280],glowAlpha:.14,overcast:1},"clear-night":{top:[.2,.045,272],mid:[.25,.052,266],bottom:[.31,.055,256],glow:[.86,.03,250],glowAlpha:.16,overcast:0}},Pe=(t,r,e)=>Math.min(r,Math.max(t,e)),q=(t,r,e)=>t+(r-t)*e;function rt(t,r,e){let n=(r-t+540)%360-180;return(t+n*e+360)%360}function D(t,r,e){let n=([v,x,C])=>[v,x*Math.cos(C*Math.PI/180),x*Math.sin(C*Math.PI/180)],[o,s,l]=n(t),[d,f,c]=n(r),i=q(o,d,e),a=q(s,f,e),y=q(l,c,e),u=Math.hypot(a,y),g=u<1e-6?t[2]:(Math.atan2(y,a)*180/Math.PI+360)%360;return[i,u,g]}function pe([t,r,e]){let n=e*Math.PI/180,o=r*Math.cos(n),s=r*Math.sin(n),l=(t+.3963377774*o+.2158037573*s)**3,d=(t-.1055613458*o-.0638541728*s)**3,f=(t-.0894841775*o-1.291485548*s)**3;return[4.0767416621*l-3.3077115913*d+.2309699292*f,-1.2684380046*l+2.6097574011*d-.3413193965*f,-.0041960863*l-.7034186147*d+1.707614701*f]}var at=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055;function I(t){let r=n=>n.every(o=>o>=-1e-4&&o<=1.0001),e=pe(t);if(!r(e)){let n=0,o=t[1];for(let s=0;s<24;s++){let l=(n+o)/2;r(pe([t[0],l,t[2]]))?n=l:o=l}e=pe([t[0],n,t[2]])}return e.map(n=>at(Pe(0,1,n)))}var De=t=>Math.round(Pe(0,1,t)*255);function G(t){return"#"+t.map(r=>De(r).toString(16).padStart(2,"0")).join("")}function Me(t,r){return`rgba(${t.map(De).join(", ")}, ${Number(r.toFixed(3))})`}function me(t,r){return[.15+(t[0]-.15)*.42,t[1]*q(.75,.5,r),rt(t[2],262,.45)]}function lt(t,r){let e=st[t],n=1-e.overcast*.7,o={top:e.top,mid:e.mid,bottom:e.bottom,glow:e.glow,glowAlpha:e.glowAlpha,scrimAlpha:q(.46,.28,e.overcast)};if(t==="clear-night"){if(r==="dawn"||r==="dusk"){let s=r==="dawn"?[.4,.09,20]:[.38,.1,40];return{...o,bottom:D(e.bottom,s,.45),glowAlpha:.2,scrimAlpha:.22}}return{...o,scrimAlpha:.2}}switch(r){case"night":return{top:me(e.top,e.overcast),mid:me(e.mid,e.overcast),bottom:me(e.bottom,e.overcast),glow:[.86,.03,250],glowAlpha:q(.14,.06,e.overcast),scrimAlpha:.2};case"dusk":return{top:D(e.top,[e.top[0]*.8,.075,292],.5*n),mid:D(e.mid,[e.mid[0]*.88,.065,350],.42*n),bottom:D(e.bottom,[e.bottom[0]*.92,.115,52],.72*n),glow:D(e.glow,[.82,.13,58],n),glowAlpha:q(e.glowAlpha,.6,n*.6),scrimAlpha:o.scrimAlpha+.04};case"dawn":return{top:D(e.top,[e.top[0]*.95,e.top[1]*.85,262],.4*n),mid:D(e.mid,[e.mid[0]*.95,.05,330],.3*n),bottom:D(e.bottom,[e.bottom[0]*.95,.085,32],.62*n),glow:D(e.glow,[.88,.09,40],n),glowAlpha:q(e.glowAlpha,.5,n*.5),scrimAlpha:o.scrimAlpha+.04};default:return o}}function dt(t){return[.16,Math.min(.04,t[1]*.6),t[2]]}function z(t,r){let e=lt(t,r);return{top:G(I(e.top)),mid:G(I(e.mid)),bottom:G(I(e.bottom)),glow:Me(I(e.glow),e.glowAlpha),scrim:Me(I(dt(e.top)),e.scrimAlpha)}}var fe=[.985,.006,250];var ct={"--awc-sky-top":"#3b5f8c","--awc-sky-mid":"#4a6d99","--awc-sky-bottom":"#5a7ba3","--awc-sky-glow":"rgba(0, 0, 0, 0)","--awc-sky-scrim":"rgba(0, 0, 0, 0)","--weather-sun-primary":"#ffd67a","--weather-sun-secondary":"#ffb547","--weather-sun-glow":"rgba(255, 214, 140, 0.55)","--weather-sun-halo":"rgba(255, 214, 140, 0.24)","--awc-cloud-far":"rgba(214, 226, 242, 0.85)","--awc-cloud-mid":"rgba(232, 239, 248, 0.92)","--awc-cloud-near":"rgba(248, 250, 253, 0.96)"},ut=Object.keys(ct),Mt=ut.filter(t=>t.startsWith("--awc-sky-"));function w(t){return t==null?"":String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function E(t){let r=customElements.get("ha-input")||!customElements.get("ha-textfield")?"ha-input":"ha-textfield",{id:e,label:n,value:o,placeholder:s,hint:l,type:d,min:f,max:c,step:i}=t,a=[`id="${w(e)}"`,`label="${w(n)}"`,`value="${w(o)}"`,s?`placeholder="${w(s)}"`:"",d?`type="${d}"`:"",f!==void 0?`min="${f}"`:"",c!==void 0?`max="${c}"`:"",i!==void 0?`step="${i}"`:"",l?r==="ha-input"?`hint="${w(l)}"`:`helper="${w(l)}" helperPersistent`:""].filter(Boolean);return`<${r} ${a.join(" ")}></${r}>`}function ge(t,r,e){if(t?.localize)try{let n=t.localize(r);if(n&&n!==r)return n}catch{}return e}var ht=["humidity","wind","pressure","sun","uv","rain"],pt=["humidity","wind","pressure","sun"];function Ne(t){let r=t.metrics,e=Array.isArray(r)?r:typeof r=="string"?r.split(","):null;if(!e)return[...pt];let n=[];for(let o of e){let s=String(o).trim().toLowerCase();ht.includes(s)&&!n.includes(s)&&n.push(s)}return n}var ye=["humidity","wind","pressure","sun","uv","rain","aqi","feels_like","dew_point","visibility","cloud_cover","gust","uv_max","rain_event","rain_week","rain_month","rain_year","sensor"],_e={humidity:"humidity",wind:"wind_speed",pressure:"pressure",uv:"uv_index",feels_like:"apparent_temperature",dew_point:"dew_point",visibility:"visibility",cloud_cover:"cloud_coverage",gust:"wind_gust_speed"},P=["uv_max","rain_event","rain_week","rain_month","rain_year"],Q=t=>t!=="sun"&&!Object.prototype.hasOwnProperty.call(_e,t),Ie=["humidity","wind","pressure","sun"],qe=t=>typeof t=="string"&&ye.includes(t),oe=t=>typeof t=="string"&&t.trim()?t.trim():void 0;function mt(t){if(typeof t=="string"){let f=t.trim().toLowerCase();return qe(f)?{type:f,view:P.includes(f)}:null}if(!t||typeof t!="object")return null;let r=t,e=typeof r.type=="string"?r.type.trim().toLowerCase():"";if(!qe(e))return null;let n={type:e,view:r.view===!0||P.includes(e)},o=oe(r.entity);o&&(n.entity=o);let s=oe(r.direction_entity);e==="wind"&&s&&(n.direction_entity=s);let l=oe(r.rate_entity);e==="rain"&&l&&(n.rate_entity=l);let d=oe(r.name);return d&&(n.name=d),n}function B(t){let r=t.readings;if(Array.isArray(r))return r.map(mt).filter(s=>!!s);let e=[],n=s=>{let l=Object.fromEntries(Object.entries(s).filter(([,d])=>d!==void 0&&d!==""));e.push({...l,view:!!s.view||P.includes(s.type)})},o=Ne(t);for(let s of o){if(s==="sun"){t.show_sun!==!1&&n({type:"sun"});continue}s==="humidity"?n({type:"humidity",entity:t.humidity_sensor_entity}):s==="wind"?n({type:"wind",entity:t.wind_speed_sensor_entity,direction_entity:t.wind_direction_sensor_entity}):s==="pressure"?n({type:"pressure",entity:t.pressure_sensor_entity}):s==="uv"?n({type:"uv",entity:t.uv_entity}):s==="rain"&&n({type:"rain",entity:t.rain_entity,rate_entity:t.rain_rate_entity})}!o.includes("wind")&&(t.wind_speed_sensor_entity||t.wind_direction_sensor_entity)&&n({type:"wind",entity:t.wind_speed_sensor_entity,direction_entity:t.wind_direction_sensor_entity,view:!0}),!o.includes("uv")&&t.uv_entity&&n({type:"uv",entity:t.uv_entity,view:!0}),!o.includes("rain")&&(t.rain_entity||t.rain_rate_entity)&&n({type:"rain",entity:t.rain_entity,rate_entity:t.rain_rate_entity,view:!0}),t.uv_max_entity&&n({type:"uv_max",entity:t.uv_max_entity});for(let s of["rain_event","rain_week","rain_month","rain_year"]){let l=t[`${s}_entity`];l&&n({type:s,entity:l})}return e}var se=["metrics","show_sun","humidity_sensor_entity","wind_speed_sensor_entity","wind_direction_sensor_entity","pressure_sensor_entity","uv_entity","uv_max_entity","rain_entity","rain_rate_entity","rain_event_entity","rain_week_entity","rain_month_entity","rain_year_entity"];function ze(t){return t.map(r=>{let e=Object.entries(r).filter(([o,s])=>o!=="type"&&o!=="view"&&s!==void 0),n=r.view&&!P.includes(r.type);return!e.length&&!n?r.type:{type:r.type,...Object.fromEntries(e),...n?{view:!0}:{}}})}var re=t=>t.length===Ie.length&&t.every((r,e)=>r.type===Ie[e]&&!r.view&&!r.entity&&!r.direction_entity&&!r.rate_entity&&!r.name);var be={humidity:"Humidity",wind:"Wind",pressure:"Pressure",sun:"Next sunset or sunrise",uv:"UV index",rain:"Rain",aqi:"Air quality (US EPA)",feels_like:"Feels like",dew_point:"Dew point",visibility:"Visibility",cloud_cover:"Cloud cover",gust:"Gusts",uv_max:"Today's highest UV",rain_event:"Rain this event",rain_week:"Rain this week",rain_month:"Rain this month",rain_year:"Rain this year",sensor:"Any sensor"},ae=t=>t.type==="sensor"&&t.name?t.name:be[t.type],ft='<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.4 8.6 12 13.2l4.6-4.6L18 10l-6 6-6-6z"/></svg>',je='<svg class="ico-warn" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 1 21h22L12 2zm0 4.3L19.5 19h-15L12 6.3zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/></svg>',gt=0;function We(t,r,e,n={}){let o,s=B(r()),l=n.open??-1,d=++gt,f=()=>r().entity||"the weather entity",c=h=>Object.prototype.hasOwnProperty.call(_e,h),i=h=>P.includes(h.type)||h.view,a=h=>c(h.type)?`Leave empty to use ${f()}`:h.type==="aqi"?"A sensor on the US EPA scale; Air quality levels move the bands":h.type==="sensor"?"Any entity: its name and its value":"A sensor";function y(h){if(Q(h.type)&&!h.entity)return{text:"Pick a sensor",warn:!0};let p=h.type==="sun"?`From ${r().sun_entity||"sun.sun"}`:h.entity||`From ${f()}`;return i(h)?r().show_forecast?{text:`In the forecast view \xB7 ${p}`,warn:!1}:{text:"In the forecast view, which needs the forecast on",warn:!0}:{text:p,warn:!1}}function u(){let h={readings:re(s)?void 0:ze(s)};for(let p of se)h[p]=void 0;e(h),Fe()}function g(h,p,b,A){return`<ha-entity-picker class="${h}" label="${w(p)}" value="${w(b??"")}"${A?` helper="${w(A)}"`:""} allow-custom-entity></ha-entity-picker>`}function v(h,p){let b=P.includes(h.type),A=w(ae(h)),N=y(h),S=`rd-b-${d}-${p}`;return`<div class="rd-row" data-i="${p}" data-type="${h.type}" role="listitem">
            <button type="button" class="rd-head" aria-expanded="${p===l}" aria-controls="${S}">
              <span class="rd-tx"><span class="rd-t">${A}</span><span class="rd-s${N.warn?" warn":""}">${N.warn?je:""}<span>${w(N.text)}</span></span></span>${ft}
            </button>
            <div class="rv rd-body" id="${S}"${p===l?" data-open":""}><div class="rv-in"><div class="rd-fields">
              <ha-select class="rd-type" label="Type"></ha-select>
              ${h.type==="sun"?"":g("rd-entity",Q(h.type)?"Entity":"Entity (optional)",h.entity,a(h))}
              ${h.type==="wind"?g("rd-direction","Direction sensor (optional)",h.direction_entity):""}
              ${h.type==="rain"?g("rd-rate","Rain rate sensor (optional)",h.rate_entity,"Shown instead of today's rain while it rains"):""}
              ${h.type==="sensor"?E({id:`rd-name-${p}`,label:"Name (optional)",value:h.name,hint:"Else the entity's own name"}):""}
              ${Q(h.type)&&!h.entity?`<p class="rd-warn" role="status">Pick a sensor. Without one, this reading isn't shown.</p>`:""}
              ${b?'<p class="rd-note">Shown in the forecast view, when you tap the card.</p>':`<label class="sw rd-view"><span class="sw-t"><span class="sw-l">Only in the forecast view</span><span class="sw-h">Shown when you tap the card, not on it</span></span><ha-switch class="rd-view-switch"${h.view?" checked":""}></ha-switch></label>`}
              <div class="rd-foot">
                <button type="button" class="tb rd-btn rd-up" aria-label="Move ${A} up"${p===0?" disabled":""}>Move up</button>
                <button type="button" class="tb rd-btn rd-down" aria-label="Move ${A} down"${p===s.length-1?" disabled":""}>Move down</button>
                <button type="button" class="tb rd-btn rd-remove" aria-label="Remove ${A}">Remove</button>
              </div>
            </div></div></div>
          </div>`}function x(h){l=h,n.onOpen?.(h),t.querySelectorAll(".rd-row").forEach(p=>{let b=Number(p.dataset.i)===h;p.querySelector(".rd-head")?.setAttribute("aria-expanded",String(b)),p.querySelector(".rd-body")?.toggleAttribute("data-open",b)})}function C(){l>=s.length&&(l=-1),t.innerHTML=`<div class="rd-list" role="list" aria-label="Readings">${s.map(v).join("")}</div>
            <button type="button" class="tb rd-add"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>Add a reading</button>`,t.querySelectorAll(".rd-row").forEach(h=>it(h,Number(h.dataset.i))),t.querySelector(".rd-add").addEventListener("click",()=>{let p=typeof(o?.states[r().entity??""]?.attributes??{}).uv_index=="number"&&!s.some(b=>b.type==="uv")?"uv":"rain";s=[...s,{type:p,view:!1}],l=s.length-1,n.onOpen?.(l),u(),C(),t.querySelector(".rd-row:last-child .rd-type")?.focus()}),Re()}function W(h,p){let b=y(p),A=h.querySelector(".rd-s");A&&(A.classList.toggle("warn",b.warn),A.innerHTML=`${b.warn?je:""}<span></span>`,A.querySelector("span").textContent=b.text,h.querySelector(".rd-t").textContent=ae(p))}function it(h,p){h.querySelector(".rd-head")?.addEventListener("click",()=>x(l===p?-1:p));let b=h.querySelector(".rd-type");if(b){let S=()=>{b.options=ye.map(_=>({value:_,label:P.includes(_)?`${be[_]}, in the forecast view`:be[_]})),b.value=s[p].type};customElements.get("ha-select")?S():customElements.whenDefined("ha-select").then(S),b.addEventListener("selected",(_=>{let k=_.detail?.value;if(!k||k===s[p].type)return;let T=s[p].entity&&(c(k)||!s[p].entity.startsWith("weather."))?s[p].entity:void 0;s=s.map(($,ie)=>ie===p?{type:k,view:P.includes(k)||$.view&&!P.includes($.type),...T?{entity:T}:{}}:$),u(),C(),t.querySelector(`.rd-row[data-i="${p}"] .rd-type`)?.focus()})),b.addEventListener("closed",_=>_.stopPropagation())}let A=(S,_)=>{h.querySelector(S)?.addEventListener("value-changed",(k=>{let T=String(k.detail?.value??"").trim(),$=!!s[p].entity;s=s.map((ie,ot)=>{if(ot!==p)return ie;let he={...ie};return T?he[_]=T:delete he[_],he}),u(),_==="entity"&&Q(s[p].type)&&$!==!!T?C():W(h,s[p])}))};A(".rd-entity","entity"),A(".rd-direction","direction_entity"),A(".rd-rate","rate_entity"),h.querySelector(`[id="rd-name-${p}"]`)?.addEventListener("change",S=>{let _=String(S.target.value??"").trim();s=s.map((k,T)=>{if(T!==p)return k;let $={...k};return _?$.name=_:delete $.name,$}),u(),W(h,s[p])}),h.querySelector(".rd-view-switch")?.addEventListener("change",S=>{let _=!!S.target.checked;s=s.map((k,T)=>T===p?{...k,view:_}:k),u(),W(h,s[p])});let N=S=>{let _=p+S;if(_<0||_>=s.length)return;let k=[...s];[k[p],k[_]]=[k[_],k[p]],s=k,l=_,n.onOpen?.(_),u(),C();let T=t.querySelector(`.rd-row[data-i="${_}"]`);T?.setAttribute("data-moved","");let $=T?.querySelector(S<0?".rd-up":".rd-down");($&&!$.disabled?$:T?.querySelector(S<0?".rd-down":".rd-up"))?.focus()};h.querySelector(".rd-up")?.addEventListener("click",()=>N(-1)),h.querySelector(".rd-down")?.addEventListener("click",()=>N(1)),h.querySelector(".rd-remove")?.addEventListener("click",()=>{s=s.filter((_,k)=>k!==p),l=-1,n.onOpen?.(-1),u(),C();let S=t.querySelectorAll(".rd-head");(S[Math.min(p,S.length-1)]??t.querySelector(".rd-add"))?.focus()})}function Re(){t.querySelectorAll(".rd-row").forEach(h=>{let p=s[Number(h.dataset.i)];if(!p)return;let b=(A,N,S)=>{let _=h.querySelector(A);_&&(o&&(_.hass=o),_.includeDomains=S,_.value=N??"")};b(".rd-entity",p.entity,p.type==="sensor"?void 0:c(p.type)?["sensor","weather"]:["sensor"]),b(".rd-direction",p.direction_entity,["sensor"]),b(".rd-rate",p.rate_entity,["sensor"])})}function Fe(){t.parentElement?.querySelectorAll("[data-levels-for]").forEach(p=>{p.hidden=!s.some(b=>b.type===p.dataset.levelsFor)})}return C(),Fe(),{hass(h){o=h,Re()},sync(){t.querySelectorAll(".rd-row").forEach(h=>{let p=s[Number(h.dataset.i)];p&&W(h,p)})}}}var Ge=t=>t==null?void 0:String(t);function K(t){return`<div class="place-fields">
        ${E({id:"latitude",label:"Latitude",type:"number",min:-90,max:90,step:"any",value:Ge(t.latitude)})}
        ${E({id:"longitude",label:"Longitude",type:"number",min:-180,max:180,step:"any",value:Ge(t.longitude)})}
        ${E({id:"time_zone",label:"Time zone",value:t.time_zone,hint:"For weather in another place, such as -33.87, 151.21 and Australia/Sydney: the coordinates give the card that place's sun, and its times are shown in its time zone"})}
    </div>`}function Y(t,r){for(let e of["latitude","longitude"])t.querySelector(`#${e}`)?.addEventListener("change",n=>{let o=n.target.value.trim(),s=parseFloat(o);r({[e]:o&&isFinite(s)?s:void 0})});t.querySelector("#time_zone")?.addEventListener("change",e=>{r({time_zone:e.target.value.trim()||void 0})})}var U=`
    .place-fields { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 12px; }
    .place-fields > :last-child { grid-column: 1 / -1; }
`;function Z(t){return t&&typeof t=="object"&&typeof t.action=="string"?t:void 0}function V(t,r){return{entity:r,tap_action:Z(t?.tap_action),hold_action:Z(t?.hold_action),double_tap_action:Z(t?.double_tap_action)}}var ee=["tap_action","hold_action","double_tap_action"],yt={tap_action:["ui.panel.lovelace.editor.card.generic.tap_action","Tap behavior"],hold_action:["ui.panel.lovelace.editor.card.generic.hold_action","Hold behavior"],double_tap_action:["ui.panel.lovelace.editor.card.generic.double_tap_action","Double tap behavior"]},we=(t,r)=>ge(t,...yt[r]),_t=ee.map(t=>({name:t,selector:{ui_action:{default_action:t==="tap_action"?"more-info":"none"}},context:{entity_id:"entity"}}));function j(t,r,e,n,o={}){let s={...e},l=i=>{s={...s,...i},n(i)},d=i=>{let a=s[i]?.action;return a!==void 0&&Object.prototype.hasOwnProperty.call(o,a)?a:void 0},f=()=>ee.filter(d).map(i=>{let a=document.createElement("div");return a.className="option card-action",a.innerHTML=`<span>${w(we(r,i))}: <b>${w(o[d(i)]??"")}</b></span><button type="button" class="card-action-reset">${w(ge(r,"ui.common.reset","Reset"))}</button>`,a.querySelector("button").addEventListener("click",()=>{l({[i]:void 0}),j(t,r,s,n,o)}),a}),c=()=>{let i=document.createElement("ha-form");i.hass=r,i.data={...s},i.schema=_t.filter(a=>!d(a.name)),i.computeLabel=a=>we(r,a.name),i.addEventListener("value-changed",a=>{a.stopPropagation();let y=a.detail?.value??{},u={};for(let g of ee){let v=Z(y[g]);JSON.stringify(v)!==JSON.stringify(s[g])&&(u[g]=v)}i.data={...s,...u},Object.keys(u).length&&l(u)}),t.replaceChildren(...f(),i)};if(customElements.get("ha-form")){c();return}Ke(t,r,()=>s,l,o),customElements.whenDefined("ha-form").then(()=>{t.isConnected&&c()}),bt()}function J(t,r){let e=t?.querySelector("ha-form");e&&r&&(e.hass=r)}async function bt(){try{await(await(await window.loadCardHelpers?.())?.createCardElement({type:"tile",entity:"sun.sun"}))?.constructor?.getConfigElement?.()}catch{}}var wt=[{value:"default",label:"Default"},{value:"more-info",label:"More info"},{value:"navigate",label:"Navigate"},{value:"url",label:"Open a URL"},{value:"none",label:"Nothing"}],Be={navigate:{key:"navigation_path",label:"Path",placeholder:"/lovelace/weather"},url:{key:"url_path",label:"URL",placeholder:"https://"}};function Ke(t,r,e,n,o={}){let s=[...wt,...Object.entries(o).map(([l,d])=>({value:l,label:d}))];t.innerHTML=ee.map(l=>{let d=e()[l],f=d?Be[d.action]:void 0;return`<div class="option"><ha-select data-action="${l}" label="${w(we(r,l))}"></ha-select></div>`+(f?`<div class="option">${E({id:`${l}-${f.key}`,label:f.label,placeholder:f.placeholder,value:typeof d?.[f.key]=="string"?d[f.key]:""})}</div>`:"")}).join("");for(let l of ee){let d=e()[l],f=t.querySelector(`[data-action="${l}"]`);if(!f)continue;let c=d&&!s.some(u=>u.value===d.action)?[...s,{value:d.action,label:`${d.action} (set in YAML)`}]:s,i=()=>{f.options=c,f.value=d?.action??"default"};customElements.get("ha-select")?i():customElements.whenDefined("ha-select").then(i),f.addEventListener("selected",(u=>{let g=u.detail?.value;!g||g===(e()[l]?.action??"default")||(n({[l]:g==="default"?void 0:{action:g}}),Ke(t,r,e,n,o))})),f.addEventListener("closed",u=>u.stopPropagation());let a=d?Be[d.action]:void 0;(a?t.querySelector(`#${l}-${a.key}`):null)?.addEventListener("input",u=>{let g=u.target.value.trim(),{[a.key]:v,...x}=e()[l]??{action:d.action};n({[l]:{...x,action:d.action,...g?{[a.key]:g}:{}}})})}}var Ye={show_location:!0,temperature_decimals:0,compact:!1,layout:"default",color_palette:"default",hero:"temperature",show_clock:!1,show_date:!1,show_forecast:!1,show_days:!1,forecast_days:7,forecast_metric:"temp",forecast_graph:"line",show_attributes:!0,show_attribute_labels:!0,show_attribute_icons:!0,show_indoor:!0,indoor_style:"label",show_flight_labels:!0,flight_label:"flight",plane_speed:1,planes_on_load:!1,animate:!0,spill_particles:!0,disable_lightning_shake:!1,auto_pause:!1,dev_mode:!1,enable_day_night_cycle:!1,sunrise_hour:6,sunset_hour:20,night:"auto",night_red:!0,night_lux:5,wake_time:"07:00",show_note:!1,note_tone:"snarky",note_attribute:"note",note_max_age:180,sun_entity:"sun.sun"},Ue=t=>t==null||typeof t=="string"&&!t.trim()||Array.isArray(t)&&!t.length,Je=t=>t===!0?"on":t===!1?"off":t;function X(t,r){let e=t;if(r.startsWith("engine_settings.")){let s=r.slice(16),l=e.engine_settings?.[s];return typeof l=="number"&&isFinite(l)&&l!==M[s]}if(r.startsWith("custom_colors."))return!Ue(e.custom_colors?.[r.slice(14)]);let n=e[r];if(Ue(n))return!1;if(!(r in Ye))return!0;let o=Ye[r];return r==="night"?Je(n)!==o:r==="wake_time"?String(n).replace(/^(\d):/,"0$1:")!==o:typeof o=="number"?Number(n)!==o:n!==o}var le=t=>t.layout==="nightstand"?"none":t.show_forecast?"forecast":"more-info",Ve=t=>t&&typeof t=="object"&&typeof t.action=="string"?t.action:void 0,vt=Object.keys(M).map(t=>`engine_settings.${t}`),xt=["sunny_bg","cloudy_bg","rainy_bg","stormy_bg","snowy_bg","windy_bg","fog_color"].map(t=>`custom_colors.${t}`),kt=["temperature_color","text_color","sun_color","rain_color","snow_color"].map(t=>`custom_colors.${t}`),L=t=>t.layout==="nightstand",ve=(t,r)=>!!t.show_forecast&&(r.all||!L(t)),xe=t=>t.animate!==!1,te={entity:{tier:"basic",keys:["entity"]},name:{tier:"basic",keys:["name"]},show_location:{tier:"all",keys:["show_location"]},outdoor_sensor_entity:{tier:"all",keys:["outdoor_sensor_entity"]},feels_like_entity:{tier:"all",keys:["feels_like_entity"]},another_place:{tier:"all",keys:["latitude","longitude","time_zone"]},place_fields:{tier:"all",keys:["latitude","longitude","time_zone"],when:(t,r)=>r.place},layout:{tier:"basic",keys:["compact","layout"]},color_palette:{tier:"basic",keys:["color_palette"]},temperature_decimals:{tier:"all",keys:["temperature_decimals"]},why_nightstand_only:{tier:"basic",keys:[],reason:!0,when:t=>!L(t)},alarm_entity:{tier:"basic",keys:["alarm_entity"],when:L},wake_time:{tier:"basic",keys:["wake_time"],when:L},night:{tier:"all",keys:["night"],when:L},night_sensor:{tier:"all",keys:["night_sensor"],when:t=>L(t)&&Je(t.night??"auto")==="auto"},night_lux:{tier:"all",keys:["night_lux"],when:t=>L(t)&&!!t.night_sensor},bed_time:{tier:"all",keys:["bed_time"],when:L},night_red:{tier:"all",keys:["night_red"],when:L},why_forecast_nightstand:{tier:"basic",keys:[],reason:!0,when:L},show_forecast:{tier:"basic",keys:["show_forecast"],when:(t,r)=>r.all||!L(t)},forecast_days:{tier:"all",keys:["show_days","forecast_days"],when:ve},forecast_metric:{tier:"all",keys:["forecast_metric"],when:ve},forecast_graph:{tier:"all",keys:["forecast_graph"],when:ve},time_date:{tier:"all",keys:["show_clock","show_date"]},hero:{tier:"all",keys:["hero"]},note:{tier:"basic",keys:["show_note","note_entity"],when:(t,r)=>r.all||!L(t)},why_note_compact:{tier:"basic",keys:[],reason:!0,when:(t,r)=>!!t.compact&&!L(t)&&r.note!=="off"},why_note_nightstand:{tier:"basic",keys:[],reason:!0,when:L},note_tone:{tier:"basic",keys:["note_tone"],when:(t,r)=>r.note==="ai"},note_ai_task_entity:{tier:"all",keys:["note_ai_task_entity"],when:(t,r)=>r.note==="ai",promote:(t,r)=>r.noDefaultAi},note_calendar:{tier:"all",keys:["note_calendar"],when:(t,r)=>r.note==="ai"},note_entity:{tier:"basic",keys:["note_entity"],when:(t,r)=>r.note==="entity"},note_attribute:{tier:"all",keys:["note_attribute"],when:(t,r)=>r.note==="entity"},note_max_age:{tier:"all",keys:["note_max_age"],when:(t,r)=>r.note!=="off"},show_attributes:{tier:"all",keys:["show_attributes"]},readings:{tier:"all",keys:["readings","uv_levels","aqi_levels",...se],when:t=>t.show_attributes!==!1,changed:t=>!re(B(t))||X(t,"uv_levels")||X(t,"aqi_levels")},reading_style:{tier:"all",keys:["show_attribute_labels","show_attribute_icons"],when:t=>t.show_attributes!==!1},indoor_temperature_entity:{tier:"all",keys:["indoor_temperature_entity"]},indoor_humidity_entity:{tier:"all",keys:["indoor_humidity_entity"]},indoor_line:{tier:"all",keys:["show_indoor","indoor_style"],when:t=>!!(t.indoor_temperature_entity||t.indoor_humidity_entity)},animate:{tier:"all",keys:["animate"]},spill_particles:{tier:"all",keys:["spill_particles"],when:xe},lightning:{tier:"all",keys:["disable_lightning_shake"],when:xe},auto_pause:{tier:"all",keys:["auto_pause"]},sky_follows:{tier:"all",keys:["enable_day_night_cycle"]},day_hours:{tier:"all",keys:["sunrise_hour","sunset_hour"],when:t=>!!t.enable_day_night_cycle},sun_entity:{tier:"all",keys:["sun_entity"]},moon_entity:{tier:"all",keys:["moon_entity"]},amounts:{tier:"all",keys:vt,when:xe},sky_colors:{tier:"all",keys:xt,when:t=>t.color_palette!=="theme"},why_sky_colors_theme:{tier:"all",keys:[],reason:!0,when:t=>t.color_palette==="theme"},ink_colors:{tier:"all",keys:kt},flights_entity:{tier:"all",keys:["flights_entity"]},plane_tags:{tier:"all",keys:["show_flight_labels","flight_label"],when:t=>!!t.flights_entity},plane_speed:{tier:"all",keys:["plane_speed"],when:t=>!!t.flights_entity},planes_on_load:{tier:"all",keys:["planes_on_load"],when:t=>!!t.flights_entity},actions:{tier:"all",keys:["tap_action","hold_action","double_tap_action"],changed:t=>{let r=Ve(t.tap_action),e=n=>{let o=Ve(n);return o!==void 0&&o!=="none"};return r!==void 0&&r!==le(t)||e(t.hold_action)||e(t.double_tap_action)}},dev_mode:{tier:"all",keys:["dev_mode"]}},Xe={weather:["entity","name","show_location","outdoor_sensor_entity","feels_like_entity","another_place","place_fields"],look:["layout","color_palette","temperature_decimals"],nightstand:["why_nightstand_only","alarm_entity","wake_time","night","night_sensor","night_lux","bed_time","night_red"],forecast:["why_forecast_nightstand","show_forecast","forecast_days","forecast_metric","forecast_graph","time_date","hero"],note:["note","why_note_compact","why_note_nightstand","note_tone","note_ai_task_entity","note_calendar","note_entity","note_attribute","note_max_age"],readings:["show_attributes","readings","reading_style","indoor_temperature_entity","indoor_humidity_entity","indoor_line"],sky:["animate","spill_particles","lightning","auto_pause","sky_follows","day_hours","sun_entity","moon_entity","amounts"],colors:["sky_colors","why_sky_colors_theme","ink_colors"],planes:["flights_entity","plane_tags","plane_speed","planes_on_load"],interactions:["actions"],dev:["dev_mode"]},ke=["readings","sky","colors","planes","interactions"];function Qe(t,r){let e=te[t];return!e||e.reason?!1:e.changed?e.changed(r):e.keys.some(n=>X(r,n))}function Ee(t,r,e,n){let o=te[t];return o?n.has(t)?!0:o.when&&!o.when(r,e)?!1:o.tier==="basic"||e.all||!!o.promote?.(r,e):!1}function Ze(t,r,e,n){return t.some(o=>!te[o]?.reason&&Ee(o,r,e,n))}function et(t){return(Array.isArray(t)?t:typeof t=="string"?[t]:[]).map(String).filter(Boolean)}var Le=[{value:"line",label:"Line"},{value:"area",label:"Line with a soft fill"},{value:"bars",label:"Bars"},{value:"none",label:"No graph, the values alone"}],nt="animated-weather-card:editor-all";function Et(){try{return localStorage.getItem(nt)==="1"}catch{return!1}}function St(t){try{localStorage.setItem(nt,t?"1":"0")}catch{}}var tt=t=>typeof requestAnimationFrame=="function"?requestAnimationFrame(t):setTimeout(t,16),At='<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.4 8.6 12 13.2l4.6-4.6L18 10l-6 6-6-6z"/></svg>',Te='<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/></svg>',Se=[["windSpeed","Wind's effect",'<input type="range" id="windSpeed" min="0.5" max="5" step="0.1"'],["rainCount","Rain",'<input type="range" id="rainCount" min="0.5" max="3" step="0.1"'],["snowCount","Snow",'<input type="range" id="snowCount" min="0.5" max="3" step="0.1"'],["leafCount","Leaves on windy days",'<input type="range" id="leafCount" min="0.5" max="3" step="0.1"'],["cloudCount","Clouds, and stars at night",'<input type="range" id="cloudCount" min="1" max="6" step="1"'],["cloudBaseSize","Cloud size",'<input type="range" id="cloudBaseSize" min="0.5" max="2" step="0.1"'],["splashBounce","Splash height",'<input type="range" id="splashBounce" min="40" max="120" step="5"']],Ae=[["sunny_bg","Sunny sky"],["cloudy_bg","Cloudy sky"],["rainy_bg","Rainy sky"],["stormy_bg","Stormy sky"],["snowy_bg","Snowy sky"],["windy_bg","Windy sky"],["fog_color","Fog"]],Ce=[["temperature_color","Temperature"],["text_color","Text"],["sun_color","Sun"],["rain_color","Rain"],["snow_color","Snow"]],Ct=0,m=(t,r)=>`<div class="rv" data-row="${t}"><div class="rv-in"><div class="row">${r}</div></div></div>`,R=(t,r,e,n="")=>`<label class="sw"><span class="sw-t"><span class="sw-l">${r}</span>${n?`<span class="sw-h">${n}</span>`:""}</span><ha-switch id="${t}"${e?" checked":""}></ha-switch></label>`,F=(t,r,e,n="")=>`<ha-entity-picker id="${t}" label="${w(r)}" value="${w(String(e??""))}"${n?` helper="${w(n)}"`:""} allow-custom-entity></ha-entity-picker>`,H=(t,r,e="")=>`<ha-select id="${t}" label="${w(r)}"></ha-select>${e?`<p class="help">${e}</p>`:""}`,ne=t=>`<p class="why">${Te}<span>${t}</span></p>`,O=class O extends HTMLElement{constructor(){super(...arguments);this._initialized=!1;this.uid=++Ct;this.all=Et();this.pinned=new Set;this.openDrawers=new Set;this.readingOpen=-1;this.placeOn=!1;this.placeKept={};this.noDefaultAi=!1;this.refill={}}setConfig(e){let n=!this._config||Object.keys(e).length!==Object.keys(this._config).length||JSON.stringify(Object.keys(e).sort())!==JSON.stringify(Object.keys(this._config).sort());this._config={...e},this.isConnected&&n?this.render():this.isConnected&&this._initialized&&this.sync()}async connectedCallback(){this._config=this._config||{},await this.ensureEntityPickerLoaded(),this.render(),this._initialized=!0,this._hass&&this.updateEntityPickers()}disconnectedCallback(){this._cleanupSuppressHandler(),this.pinned.clear(),this.innerHTML=""}_cleanupSuppressHandler(){this._suppressHandler&&(window.removeEventListener("unhandledrejection",this._suppressHandler),this._suppressHandler=void 0),this._suppressTimeout&&(clearTimeout(this._suppressTimeout),this._suppressTimeout=void 0)}async ensureEntityPickerLoaded(){if(!customElements.get("ha-entity-picker"))try{let n=await(await window.loadCardHelpers()).createCardElement({type:"entities",entities:[]});this._cleanupSuppressHandler(),this._suppressHandler=o=>{(o.reason?.message?.includes("localize")||o.reason?.message?.includes("hass"))&&o.preventDefault()},window.addEventListener("unhandledrejection",this._suppressHandler);try{await n.constructor.getConfigElement?.()}finally{this._suppressTimeout=setTimeout(()=>this._cleanupSuppressHandler(),2e3)}}catch{}}ctx(){return{all:this.all,place:this.placeOn,note:this.noteSource(),noDefaultAi:this.noDefaultAi}}noteSource(){let e=this._config??{};return e.note_entity||this.noteChoice==="entity"?"entity":e.show_note?"ai":"off"}render(){let e=this._config??(this._config={}),n=this.uid,o=["latitude","longitude","time_zone"].some(u=>e[u]!==void 0&&e[u]!=="");this.placeOn=this.placeOn||o;let s=Object.fromEntries(Object.entries(e.engine_settings||{}).filter(([,u])=>typeof u=="number"&&isFinite(u))),l=e.custom_colors||{},d=e.layout==="nightstand"?"nightstand":e.compact?"compact":"default",f=(u,g,v,x)=>`<fieldset class="seg" id="${u}"><legend class="seg-l">${g}</legend><div class="seg-track">${v.map(([C,W])=>`<label><input type="radio" name="awc-${u}-${n}" value="${C}"${C===x?" checked":""}><span>${W}</span></label>`).join("")}</div><p class="help" data-help="${u}"></p></fieldset>`,c=([u,g],v)=>`<div class="swc"><span class="chip${v?` ink ink-${u.replace("_color","")}`:""}"><input type="color" id="${u}" value="${w(l[u]||O.DEFAULT_COLORS[u])}"></span><label for="${u}">${g}</label><button type="button" class="tb color-reset" data-target="${u}" aria-label="Reset ${g}"${l[u]?"":" data-off"}>Reset</button></div>`,i=(u,g,v)=>`<section class="rv grp" data-sec="${u}"><div class="rv-in"><div class="grp-b">${g?`<h3 class="grp-h">${g}</h3>`:""}${v}</div></div></section>`,a=(u,g,v,x)=>`<section class="rv drw" data-sec="${u}" style="--i:${x}"><div class="rv-in"><div class="drw-b"><h3 class="drw-h"><button type="button" class="drw-btn" data-drawer="${u}" aria-expanded="false" aria-controls="awc-${u}-${n}"><span class="drw-tx"><span class="drw-t">${g}</span><span class="drw-s" data-summary="${u}"></span></span>${At}</button></h3><div class="rv drw-c" id="awc-${u}-${n}" role="region" aria-label="${g}"><div class="rv-in"><div class="drw-in">${v}</div></div></div></div></div></section>`;this.innerHTML=`
      <div class="card-config" data-instant>
        <div class="top">
          ${R("all_settings","Show all settings",this.all,"Settings you've changed always show")}
          <span class="vh" aria-live="polite" data-live></span>
        </div>

        ${i("weather","Weather",[m("entity",`${F("entity","Weather entity",e.entity)}<p class="status" role="status" data-status="entity" hidden>${Te}<span>Pick a weather entity to start.</span></p>`),m("name",E({id:"name",label:"Place name",placeholder:"Weather",value:e.name,hint:"Shown above the temperature"})),m("show_location",R("show_location","Show the place name",e.show_location!==!1)),m("outdoor_sensor_entity",F("outdoor_sensor_entity","Temperature from",e.outdoor_sensor_entity,"A sensor of yours, shown instead of the weather entity's")),m("feels_like_entity",F("feels_like_entity","Feels like from",e.feels_like_entity,"Without one, the weather entity's own, when it reports one")),m("another_place",R("another_place","Weather for another place",this.placeOn,"Its sun, and its times in its time zone")),m("place_fields",K(e))].join(""))}

        ${i("look","Layout and colors",[m("layout",f("layout","Layout",[["default","Regular"],["compact","Compact"],["nightstand","Nightstand"]],d)),m("color_palette",f("color_palette","Colors",[["default","Sky"],["theme","Theme"]],e.color_palette==="theme"?"theme":"default")),m("temperature_decimals",R("temperature_decimals","One decimal",Number(e.temperature_decimals)===1,"21.5\xB0 rather than 22\xB0"))].join(""))}

        ${i("nightstand","Nightstand",[m("why_nightstand_only",ne("These apply with the Nightstand layout.")),m("alarm_entity",F("alarm_entity","Next alarm",e.alarm_entity,"Optional. Your phone's next alarm sensor, or a date and time helper")),m("wake_time",E({id:"wake_time",label:"Wake time",placeholder:"07:00",value:e.wake_time,hint:"When you get up without an alarm"})),m("night",H("night","Night mode","Automatic: when the room goes dark, or from bed time without a light sensor")),m("night_sensor",F("night_sensor","Light sensor",e.night_sensor,"An illuminance sensor near the screen")),m("night_lux",E({id:"night_lux",label:"Dark below (lx)",type:"number",min:.1,step:"any",placeholder:"5",value:e.night_lux!==void 0?String(e.night_lux):"",hint:"Raise it if the screen or a street light keeps the room brighter"})),m("bed_time",E({id:"bed_time",label:"Bed time",placeholder:"22:30",value:e.bed_time,hint:"By default, 8 h 30 min before the alarm or wake time"})),m("night_red",R("night_red","Red at night",e.night_red!==!1,"Red on black, like a bedside clock"))].join(""))}

        ${i("forecast","Forecast and clock",[m("why_forecast_nightstand",ne("The nightstand shows the time, the date and what's coming on its own.")),m("show_forecast",R("show_forecast","Forecast",!!e.show_forecast,"Today's high and low, the hours ahead, and the week on a tap")),m("forecast_days",H("forecast_days","Days under the hours")),m("forecast_metric",H("forecast_metric","Hours open on","The buttons under the hours switch between them")),m("forecast_graph",H("forecast_graph","Graph")),m("time_date",H("time_date","Time and date","Before the place name, in your profile's 12- or 24-hour format")),m("hero",f("hero","Big number",[["temperature","Temperature"],["clock","Time"]],e.hero==="clock"?"clock":"temperature"))].join(""))}

        ${i("note","Weather note",[m("note",`${H("note_source","Note")}<p class="help" data-help="note"></p><p class="status" role="status" id="note_status" hidden></p>`),m("why_note_compact",ne("The compact card has no room for the note.")),m("why_note_nightstand",ne("The nightstand doesn't show the note.")),m("note_tone",H("note_tone","Voice","Serious weather always gets plain advice")),m("note_ai_task_entity",F("note_ai_task_entity","AI Task",e.note_ai_task_entity,"Leave empty for your default AI Task")),m("note_calendar",F("note_calendar","Calendar",et(e.note_calendar)[0],"For what to wear when you're out. Only the times reach your AI")),m("note_entity",F("note_entity","Note entity",e.note_entity,"A text helper or a sensor: its state is the short note")),m("note_attribute",E({id:"note_attribute",label:"Longer version",placeholder:"note",value:e.note_attribute,hint:"The attribute shown where there's room for two lines"})),m("note_max_age",E({id:"note_max_age",label:"Hide after (minutes)",type:"number",min:0,placeholder:"180",value:e.note_max_age!==void 0?String(e.note_max_age):"",hint:"Counted from when the note was written. 0 keeps it up"}))].join(""))}

        <div class="rv drws" data-drawers><div class="rv-in"><div class="drws-b">
          ${a("readings","Readings",[m("show_attributes",R("show_attributes","Show the readings",e.show_attributes!==!1)),m("readings",`<div class="readings-table"></div>
              <div data-levels-for="uv">${E({id:"uv_levels",label:"UV levels",placeholder:"3, 6, 8, 11",value:Array.isArray(e.uv_levels)?e.uv_levels.join(", "):e.uv_levels,hint:"Where moderate, high, very high and extreme start. The WHO's by default"})}</div>
              <div data-levels-for="aqi">${E({id:"aqi_levels",label:"Air quality levels",placeholder:"51, 101, 151, 201, 301",value:Array.isArray(e.aqi_levels)?e.aqi_levels.join(", "):e.aqi_levels,hint:"Where each US EPA level starts, unless your sensor uses another scale"})}</div>`),m("reading_style",H("reading_style","Each reading shows")),m("indoor_temperature_entity",F("indoor_temperature_entity","Indoor temperature",e.indoor_temperature_entity,"A line under the condition")),m("indoor_humidity_entity",F("indoor_humidity_entity","Indoor humidity",e.indoor_humidity_entity)),m("indoor_line",H("indoor_line","Indoor line starts with"))].join(""),0)}
          ${a("sky","Sky and motion",[m("animate",R("animate","Animate the weather",e.animate!==!1,"Off, a still sky in the weather's colors")),m("spill_particles",R("spill_particles","Let weather spill out",e.spill_particles!==!1,"Rain, snow and leaves fall past the card's edges")),m("lightning",R("lightning_shake","Shake on lightning",!e.disable_lightning_shake,"A small jolt when lightning strikes")),m("auto_pause",R("auto_pause","Pause in the background",!!e.auto_pause,"Also while this window isn't in front. The card always pauses off screen")),m("sky_follows",f("sky_follows","Sky follows",[["sun","The sun"],["hours","Set hours"]],e.enable_day_night_cycle?"hours":"sun")),m("day_hours",`<div class="pair">${E({id:"sunrise_hour",label:"Day begins at",type:"number",min:0,max:23,placeholder:"6",value:e.sunrise_hour!==void 0?String(e.sunrise_hour):""})}${E({id:"sunset_hour",label:"Night begins at",type:"number",min:0,max:23,placeholder:"20",value:e.sunset_hour!==void 0?String(e.sunset_hour):""})}</div>`),m("sun_entity",F("sun_entity","Sun",e.sun_entity,"Sets the sky's time of day and the sunset reading. Usually sun.sun")),m("moon_entity",F("moon_entity","Moon phase",e.moon_entity,"The Moon integration's sensor. Else, worked out from the date")),m("amounts",`<p class="sub-h">Amounts</p><div class="amt">${Se.map(([u,g,v])=>{let x=s[u]??M[u];return`<div class="amt-o"><label for="${u}">${g}</label><output for="${u}" data-out="${u}">${O.formatEngineValue(u,x)}</output>${v} value="${w(x)}" /></div>`}).join("")}</div><button type="button" class="tb reset-engine-btn" data-off>Reset amounts</button>`)].join(""),1)}
          ${a("colors","Custom colors",[m("sky_colors",`<p class="sub-h">Skies</p><p class="help">Each color replaces that condition's whole sky</p><div class="color-grid" id="color-grid">${Ae.map(u=>c(u,!1)).join("")}</div>`),m("why_sky_colors_theme",ne("Sky colors apply with Colors set to Sky.")),m("ink_colors",`<p class="sub-h">Text and weather</p><div class="color-grid" id="ink-grid">${Ce.map(u=>c(u,!0)).join("")}</div><button type="button" class="tb reset-colors-btn" id="reset-colors-btn" data-off>Reset all colors</button>`)].join(""),2)}
          ${a("planes","Planes",[m("flights_entity",F("flights_entity","Flights sensor",e.flights_entity,"Flightradar24's Current in area sensor. Each new flight crosses the card once")),m("plane_tags",H("plane_tags","Plane tags","Tags show only in open sky, never over the temperature")),m("plane_speed",H("plane_speed","Speed")),m("planes_on_load",R("planes_on_load","Fly the planes already up",!!e.planes_on_load,"When the dashboard opens, not only new arrivals"))].join(""),3)}
          ${a("interactions","Interactions",m("actions",'<div id="actions-editor"></div>'),4)}
        </div></div></div>

        ${i("dev","",m("dev_mode",R("dev_mode","Simulated weather",!!e.dev_mode,"The dev card's weather, with no weather entity needed")))}
      </div>
      <style>${He()}${U}</style>
    `,this.attachEventListeners(),this.sync();for(let u of this.openDrawers)this.applyDrawer(u);this.syncColorInputs();let y=this.querySelector(".card-config");tt(()=>tt(()=>y?.removeAttribute("data-instant"))),setTimeout(()=>this.updateEntityPickers(),0)}attachEventListeners(){this.updateEntityPickers();let e=(i,a,y)=>this.querySelector(i)?.addEventListener(a,u=>y(u.target,u)),n=(i,a)=>this.querySelectorAll(`[id="${i}"] input[type="radio"]`).forEach(y=>y.addEventListener("change",()=>{y.checked&&a(y.value)}));e("#all_settings","change",i=>{this.all=!!i.checked,St(this.all),this.sync();let a=this.querySelector("[data-live]");a&&(a.textContent=this.all?"All settings shown. More sections at the end.":"Showing the basics, and the settings you've changed.")}),e("#entity","value-changed",i=>this._set({entity:i.value})),e("#name","input",i=>this._set({name:i.value})),e("#show_location","change",i=>this._set({show_location:i.checked?void 0:!1}));for(let i of["outdoor_sensor_entity","feels_like_entity","alarm_entity","night_sensor","note_ai_task_entity","indoor_temperature_entity","indoor_humidity_entity","sun_entity","moon_entity","flights_entity"])e(`#${i}`,"value-changed",a=>{this._set({[i]:a.value||void 0}),i==="note_ai_task_entity"&&this.syncNoteStatus()});e("#another_place","change",i=>{if(this.placeOn=!!i.checked,this.placeOn){Object.keys(this.placeKept).length?this._set(this.placeKept):this.sync();return}let a=this._config??{};this.placeKept=Object.fromEntries(["latitude","longitude","time_zone"].filter(y=>a[y]!==void 0).map(y=>[y,a[y]])),this.pinned.delete("place_fields"),this._set({latitude:void 0,longitude:void 0,time_zone:void 0})}),Y(this,i=>this._set(i)),n("layout",i=>{this._set(i==="compact"?{compact:!0,layout:void 0}:i==="nightstand"?{layout:"nightstand",compact:void 0}:{compact:void 0,layout:void 0}),this.mountActions()}),n("color_palette",i=>{this._set({color_palette:i==="theme"?i:void 0}),this.syncColorInputs()}),e("#temperature_decimals","change",i=>this._set({temperature_decimals:i.checked?1:void 0}));for(let i of["wake_time","bed_time"])e(`#${i}`,"input",a=>{let y=(a.value||"").trim();this._set({[i]:/^\d{1,2}:\d{2}$/.test(y)?y:void 0})});this._bindSelect("night",[{value:"auto",label:"Automatic"},{value:"on",label:"Always"},{value:"off",label:"Never"}],this._config?.night===!0?"on":this._config?.night===!1?"off":String(this._config?.night||"auto"),i=>{this._set({night:i==="auto"?void 0:i})}),e("#night_lux","input",i=>{let a=Number((i.value||"").trim());this._set({night_lux:Number.isFinite(a)&&a>0&&a!==5?a:void 0})}),e("#night_red","change",i=>this._set({night_red:i.checked?void 0:!1})),e("#show_forecast","change",i=>{this._set({show_forecast:i.checked||void 0}),this.mountActions()});let o=this._config?.show_days?String(this._config?.forecast_days??7):"none";this._bindSelect("forecast_days",[{value:"none",label:"None"},...Array.from({length:10},(i,a)=>({value:String(a+1),label:a?`${a+1} days`:"1 day"}))],o,i=>{this._set(i==="none"?{show_days:void 0}:{show_days:!0,forecast_days:i==="7"?void 0:Number(i)})}),this._bindSelect("forecast_metric",[{value:"temp",label:"Temperature"},{value:"feels",label:"Feels like"},{value:"chance",label:"Chance of rain"},{value:"amount",label:"Rain amount"}],this._config?.forecast_metric||"temp",i=>this._set({forecast_metric:i==="temp"?void 0:i})),this._bindSelect("forecast_graph",Le,this._config?.forecast_graph||"line",i=>this._set({forecast_graph:i==="line"?void 0:i})),this._bindSelect("time_date",this.timeDateOptions(),this.timeDateValue(),i=>{this._config?.hero==="clock"?this._set({show_date:i==="date"||void 0}):this._set({show_clock:i==="time"||i==="both"||void 0,show_date:i==="date"||i==="both"||void 0})}),n("hero",i=>{this._set({hero:i==="clock"?i:void 0}),this.refill.time_date?.(this.timeDateOptions(),this.timeDateValue())}),this._bindSelect("note_source",[{value:"off",label:"Off"},{value:"ai",label:"Written by your AI"},{value:"entity",label:"From an entity"}],this.noteSource(),i=>{let a=this._config??{};a.note_entity&&(this.noteEntityKept=a.note_entity),this.noteChoice=i==="entity"?"entity":void 0,i==="off"?this._set({show_note:void 0,note_entity:void 0}):i==="ai"?this._set({show_note:!0,note_entity:void 0}):this.noteEntityKept?this._set({note_entity:this.noteEntityKept,show_note:void 0}):(this.sync(),this.querySelector("#note_entity")?.focus()),this.syncNoteStatus()}),e("#note_entity","value-changed",i=>{let a=i.value||void 0;a&&(this.noteChoice=void 0),this._set(a?{note_entity:a,show_note:void 0}:{note_entity:void 0}),this.syncNoteStatus()}),this._bindSelect("note_tone",[{value:"snarky",label:"Snarky"},{value:"calm",label:"Calm"},{value:"friendly",label:"Friendly"},{value:"dry",label:"Dry"}],this._config?.note_tone||"snarky",i=>this._set({note_tone:i==="snarky"?void 0:i})),e("#note_calendar","value-changed",i=>{let a=[i.value,...et(this._config?.note_calendar).slice(1)].filter(Boolean);this._set({note_calendar:a.length>1?a:a[0]||void 0})}),e("#note_attribute","input",i=>this._set({note_attribute:i.value.trim()||void 0})),e("#note_max_age","change",i=>{let a=i.value.trim(),y=parseInt(a);a?y>=0&&this._set({note_max_age:y===180?void 0:y}):this._set({note_max_age:void 0})}),e("#show_attributes","change",i=>this._set({show_attributes:i.checked?void 0:!1}));let s=this.querySelector(".readings-table");this.readingsEditor=s?We(s,()=>this._config??{},i=>this._set(i),{open:this.readingOpen,onOpen:i=>{this.readingOpen=i}}):void 0,this.readingsEditor?.hass(this._hass);let l=(i,a)=>e(`#${i}`,"change",y=>{let u=y.value.trim(),g=u.split(",").map(x=>parseFloat(x)),v=g.length===a&&g.every((x,C)=>isFinite(x)&&(C===0||x>g[C-1]));this._set({[i]:u?v?g:u:void 0})});l("uv_levels",4),l("aqi_levels",5);let d=this._config??{};this._bindSelect("reading_style",[{value:"both",label:"Icon and label"},{value:"label",label:"Label"},{value:"icon",label:"Icon"},{value:"value",label:"The value alone"}],d.show_attribute_labels===!1?d.show_attribute_icons===!1?"value":"icon":d.show_attribute_icons===!1?"label":"both",i=>{this._set({show_attribute_labels:i==="icon"||i==="value"?!1:void 0,show_attribute_icons:i==="label"||i==="value"?!1:void 0})}),this._bindSelect("indoor_line",[{value:"label",label:'The word "Indoors"'},{value:"icon",label:"A house icon"},{value:"both",label:"Icon and word"},{value:"hidden",label:"Hidden"}],d.show_indoor===!1?"hidden":d.indoor_style||"label",i=>{this._set(i==="hidden"?{show_indoor:!1}:{show_indoor:void 0,indoor_style:i==="label"?void 0:i})}),e("#animate","change",i=>this._set({animate:i.checked?void 0:!1})),e("#spill_particles","change",i=>this._set({spill_particles:i.checked?void 0:!1})),e("#lightning_shake","change",i=>this._set({disable_lightning_shake:i.checked?void 0:!0})),e("#auto_pause","change",i=>this._set({auto_pause:i.checked||void 0})),n("sky_follows",i=>this._set({enable_day_night_cycle:i==="hours"||void 0}));for(let[i,a]of[["sunrise_hour",6],["sunset_hour",20]])e(`#${i}`,"change",y=>{let u=y.value.trim(),g=parseInt(u);u?g>=0&&g<=23&&this._set({[i]:g===a?void 0:g}):this._set({[i]:void 0})});for(let[i]of Se){let a=this.querySelector(`#${i}`);a&&(this.syncFill(a),a.addEventListener("input",()=>{let y=this.querySelector(`[data-out="${i}"]`);y&&(y.textContent=O.formatEngineValue(i,parseFloat(a.value))),this.syncFill(a)}),a.addEventListener("change",()=>this._updateEngineConfig(i,parseFloat(a.value))))}e(".reset-engine-btn","click",(i,a)=>{a.preventDefault(),this._resetEngineSettings()});for(let[i]of[...Ae,...Ce])e(`#${i}`,"input",a=>this.paintChip(a)),e(`#${i}`,"change",a=>this._updateColorConfig(i,a.value));this.querySelectorAll(".color-reset").forEach(i=>i.addEventListener("click",a=>{a.preventDefault(),this._resetColorConfig(i.dataset.target)})),e(".reset-colors-btn","click",(i,a)=>{a.preventDefault(),this._resetAllColors()});let f=this._config??{};this._bindSelect("plane_tags",[{value:"flight",label:"Flight number and aircraft"},{value:"route",label:"Route (Lisbon \u2192 Paris)"},{value:"both",label:"Route and flight number"},{value:"none",label:"None"}],f.show_flight_labels===!1?"none":f.flight_label||"flight",i=>{this._set(i==="none"?{show_flight_labels:!1}:{show_flight_labels:void 0,flight_label:i==="flight"?void 0:i})});let c=String(f.plane_speed??1);this._bindSelect("plane_speed",[{value:"1",label:"Usual"},{value:"0.5",label:"Half"},{value:"0.25",label:"A quarter"},...["1","0.5","0.25"].includes(c)?[]:[{value:c,label:`${c}\xD7 (set in YAML)`}]],c,i=>this._set({plane_speed:i==="1"?void 0:Number(i)})),e("#planes_on_load","change",i=>this._set({planes_on_load:i.checked||void 0})),this.mountActions(),e("#dev_mode","change",i=>this._set({dev_mode:i.checked||void 0})),this.querySelectorAll(".drw-btn").forEach(i=>i.addEventListener("click",()=>{let a=i.dataset.drawer;this.openDrawers.has(a)?this.openDrawers.delete(a):this.openDrawers.add(a),this.applyDrawer(a)})),this.syncNoteStatus()}applyDrawer(e){let n=this.openDrawers.has(e);this.querySelector(`[data-drawer="${e}"]`)?.setAttribute("aria-expanded",String(n)),this.querySelector(`[data-sec="${e}"] .drw-c`)?.toggleAttribute("data-open",n)}timeDateOptions(){return this._config?.hero==="clock"?[{value:"off",label:"Off"},{value:"date",label:"Date"}]:[{value:"off",label:"Off"},{value:"time",label:"Time"},{value:"date",label:"Date"},{value:"both",label:"Time and date"}]}timeDateValue(){let e=this._config??{};return e.hero==="clock"?e.show_date?"date":"off":e.show_clock&&e.show_date?"both":e.show_clock?"time":e.show_date?"date":"off"}sync(){let e=this.querySelector(".card-config");if(!e)return;let n=this._config??{},o=this.ctx();for(let c of Object.keys(te))Qe(c,n)&&this.pinned.add(c);e.toggleAttribute("data-all",o.all),this.querySelectorAll("[data-row]").forEach(c=>c.toggleAttribute("data-open",Ee(c.dataset.row,n,o,this.pinned)));let s=!1;for(let[c,i]of Object.entries(Xe)){let a=Ze(i,n,o,this.pinned);this.querySelector(`[data-sec="${c}"]`)?.toggleAttribute("data-open",a),a&&ke.includes(c)&&(s=!0)}this.querySelector("[data-drawers]")?.toggleAttribute("data-open",s);let l=this.querySelector("#all_settings");l&&l.checked!==o.all&&(l.checked=o.all);let d=(c,i)=>{let a=this.querySelector(c);a&&a.textContent!==i&&(a.textContent=i)},f=n.layout==="nightstand"?"nightstand":n.compact?"compact":"default";d('[data-help="layout"]',{default:"The sky, the temperature and your readings",compact:"One line, to sit under other cards",nightstand:"A bedside clock that goes dark at night"}[f]),d('[data-help="color_palette"]',n.color_palette==="theme"?"Your dashboard theme's colors, light or dark":"Colors from the weather and the time of day"),d('[data-help="hero"]',n.hero==="clock"?"The time leads, and the temperature starts the condition's line":"The temperature leads the card"),d('[data-help="sky_follows"]',n.enable_day_night_cycle?"Day and night change at the hours you set":"Dawn, day, dusk and night follow the sun"),d('[data-help="note"]',{off:"A line under the conditions: what's coming and what to wear",ai:"Your AI writes it from the forecast. The card grows a row to fit it",entity:"Text from a helper or a sensor of yours"}[o.note]);for(let c of ke)d(`[data-summary="${c}"]`,this.summary(c));this.querySelector('[data-status="entity"]')?.toggleAttribute("hidden",!!n.entity||!!n.dev_mode),this.querySelector(".reset-engine-btn")?.toggleAttribute("data-off",!Object.keys(M).some(c=>X(n,`engine_settings.${c}`))),this.syncPlaceholder(),this.readingsEditor?.sync()}summary(e){let n=this._config??{};if(e==="readings"){let d=B(n),f=d.filter(c=>c.view).length;return[n.show_attributes===!1?"Off":d.filter(c=>!c.view).map(ae).join(", ")||"None",f?`${f} in the forecast view`:"",n.indoor_temperature_entity||n.indoor_humidity_entity?"Indoors":""].filter(Boolean).join(" \xB7 ")}if(e==="sky"){if(n.animate===!1)return"Still";let d=Object.keys(M).filter(f=>X(n,`engine_settings.${f}`)).length;return["Moving",n.spill_particles===!1?"inside the card":"",n.enable_day_night_cycle?"set hours":"",d?`${d} ${d===1?"amount":"amounts"} changed`:""].filter(Boolean).join(" \xB7 ")}if(e==="colors"){let d=Object.values(n.custom_colors||{}).filter(Boolean).length;return d?`${d} ${d===1?"color":"colors"} set`:"None set"}if(e==="planes")return n.flights_entity||"Needs a Flightradar24 sensor";let o=n.tap_action?.action??le(n),s={forecast:"A tap opens the forecast","more-info":"A tap opens the weather's details",none:"A tap does nothing",navigate:"A tap goes to a view",url:"A tap opens a link",toggle:"A tap toggles",assist:"A tap opens Assist"},l=["hold_action","double_tap_action"].filter(d=>{let f=n[d]?.action;return f&&f!=="none"}).length;return(s[o]??"A tap runs an action")+(l?" \xB7 more gestures set":"")}syncPlaceholder(){let e=this.querySelector("#name"),n=this._config?.entity,o=n?this._hass?.states?.[n]?.attributes?.friendly_name:void 0;!e||typeof o!="string"||!o||e.getAttribute("placeholder")===o||(e.setAttribute("placeholder",o),e.placeholder=o)}_bindSelect(e,n,o,s){let l=this.querySelector(`#${e}`);if(!l)return;let d={options:n,current:o},f=()=>{l.options=d.options,l.value=d.current};this.refill[e]=(c,i)=>{d={options:c,current:i},customElements.get("ha-select")&&f()},customElements.get("ha-select")?f():customElements.whenDefined("ha-select").then(f),l.addEventListener("selected",(c=>{let i=c.detail?.value;!i||i===l.value&&i===d.current||(l.value=i,d={...d,current:i},s(i))})),l.addEventListener("closed",c=>c.stopPropagation())}mountActions(){let e=this.querySelector("#actions-editor");if(!e)return;let n=V(this._config,this._config?.entity),o=le(this._config??{}),s=o==="more-info"?void 0:{action:o};j(e,this._hass,n.tap_action||!s?n:{...n,tap_action:s},l=>{let d={...l};s&&"tap_action"in l&&(d.tap_action=l.tap_action===void 0?{action:"more-info"}:l.tap_action.action===s.action?void 0:l.tap_action),this._set(d)},{forecast:"Forecast"})}syncNoteStatus(){this.updateNoteStatus()}async updateNoteStatus(){let e=this.querySelector("#note_status"),n=this._hass;if(!e)return;let o=this.noteSource()==="ai",s="",l=!1;o&&n&&(n.config?.components?.includes("ai_task")?this._config?.note_ai_task_entity||(this.noteDefault??(this.noteDefault=n.callWS({type:"ai_task/preferences/get"}).then(d=>d?.gen_data_entity_id??null).catch(()=>null)),await this.noteDefault||(s="You have no default AI Task. Pick one below, or set one in Settings \u2192 System \u2192 AI.",l=!0)):s="The note needs Home Assistant 2025.8 or later, with an AI integration that provides an AI Task, such as OpenAI or Anthropic."),e.innerHTML=s?`${Te}<span></span>`:"",s&&(e.querySelector("span").textContent=s),e.hidden=!s,l!==this.noDefaultAi&&(this.noDefaultAi=l,this.sync())}_set(e){this._patchConfig(e),this.sync()}_patchConfig(e){this._config||(this._config={});let n=this._config;for(let[o,s]of Object.entries(e))s===""||s===null||s===void 0?delete n[o]:n[o]=s;this._fireConfigChanged()}_updateConfig(e,n){this._set({[e]:n})}_updateEngineConfig(e,n){let s={...(this._config??(this._config={})).engine_settings||{}};n===M[e]?delete s[e]:s[e]=n,this._set({engine_settings:Object.keys(s).length?s:void 0})}_resetEngineSettings(){for(let[e]of Se){let n=this.querySelector(`#${e}`),o=M[e];n&&(n.value=String(o),this.syncFill(n));let s=this.querySelector(`[data-out="${e}"]`);s&&(s.textContent=O.formatEngineValue(e,o))}this._set({engine_settings:void 0}),this.querySelector("#windSpeed")?.focus()}syncFill(e){let n=Number(e.min),o=Number(e.max),s=Number(e.value);e.style.setProperty("--fill",`${Math.max(0,Math.min(100,(s-n)/(o-n)*100))}%`)}static formatEngineValue(e,n){return e==="cloudCount"?String(Math.round(n)):e==="splashBounce"?`${Math.round(n)}%`:`${n.toFixed(1)}\xD7`}static hex(e){if(e){if(/^#[0-9a-f]{6}$/i.test(e))return e.toLowerCase();if(/^#[0-9a-f]{3}$/i.test(e))return`#${[...e.slice(1)].map(n=>n+n).join("")}`.toLowerCase();try{let n=document.createElement("canvas").getContext("2d");if(!n)return;n.fillStyle="#000",n.fillStyle=e;let o=String(n.fillStyle);if(/^#[0-9a-f]{6}$/i.test(o))return o;let s=o.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);return s?`#${s.slice(1,4).map(l=>Number(l).toString(16).padStart(2,"0")).join("")}`:void 0}catch{return}}}syncColorInputs(){let e=this._config?.custom_colors||{},n=this._config?.color_palette==="theme"?"var(--card-background-color, #fff)":O.DEFAULT_COLORS.sunny_bg;for(let[o]of[...Ae,...Ce]){let s=this.querySelector(`#${o}`);s&&(s.value=O.hex(e[o])??O.DEFAULT_COLORS[o],s.parentElement.style.setProperty("--sky",n),this.paintChip(s))}this._syncColorResets()}paintChip(e){let n=O.hex(e.value);n&&e.parentElement.style.setProperty("--c",n)}_updateColorConfig(e,n){let o={...this._config?.custom_colors||{},[e]:n};this._set({custom_colors:o}),this._syncColorResets()}_syncColorResets(){let e=this._config?.custom_colors||{};this.querySelectorAll(".color-reset").forEach(n=>{n.toggleAttribute("data-off",!e[n.dataset.target])}),this.querySelector("#reset-colors-btn")?.toggleAttribute("data-off",!Object.values(e).some(Boolean))}_resetColorConfig(e){let n={...this._config?.custom_colors||{}};delete n[e],this._set({custom_colors:Object.keys(n).length?n:void 0});let o=this.querySelector(`#${e}`);o&&(o.value=O.DEFAULT_COLORS[e]||o.value,this.paintChip(o),o.focus()),this._syncColorResets()}_resetAllColors(){this._set({custom_colors:void 0}),this.syncColorInputs()}_fireConfigChanged(){let e=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(e)}set hass(e){this._hass=e,this._initialized&&this.isConnected&&this.updateEntityPickers()}updateEntityPickers(){if(!this._hass||!this.isConnected||!this._initialized)return;this.syncNoteStatus(),this.syncPlaceholder(),J(this.querySelector("#actions-editor"),this._hass),this.readingsEditor?.hass(this._hass),[{id:"#entity",domains:["weather"]},{id:"#outdoor_sensor_entity",domains:["sensor"]},{id:"#feels_like_entity",domains:["sensor"]},{id:"#indoor_temperature_entity",domains:["sensor"]},{id:"#indoor_humidity_entity",domains:["sensor"]},{id:"#sun_entity",domains:["sun"]},{id:"#moon_entity",domains:["sensor"]},{id:"#flights_entity",domains:["sensor"]},{id:"#alarm_entity",domains:["sensor","input_datetime"]},{id:"#night_sensor",domains:["sensor"]},{id:"#note_entity",domains:["sensor","input_text"]},{id:"#note_ai_task_entity",domains:["ai_task"]},{id:"#note_calendar",domains:["calendar"]}].forEach(({id:n,domains:o})=>{let s=this.querySelector(n);s&&(s.hass=this._hass,s.includeDomains=o)})}};O.DEFAULT_COLORS={sunny_bg:z("sunny","day").mid,rainy_bg:z("rainy","day").mid,snowy_bg:z("snowy","day").mid,stormy_bg:z("stormy","day").mid,windy_bg:z("windy","day").mid,cloudy_bg:z("cloudy","day").mid,fog_color:"#e0e0e0",text_color:G(I(fe)),temperature_color:G(I(fe)),sun_color:"#ffd67a",rain_color:"#deeaff",snow_color:"#f7fbff"};var de=O;var Tt=`
    .st-editor {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 4px 0;
    }
    .st-editor .st-switches {
        display: flex;
        flex-direction: column;
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        padding-top: 4px;
    }
    .st-editor .st-switch {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        min-height: 48px;
        font-size: 14px;
        color: var(--primary-text-color);
        cursor: pointer;
    }
    .st-editor .st-switch small {
        display: block;
        margin-top: 2px;
        font-size: 12px;
        color: var(--secondary-text-color);
    }
    .st-editor .st-actions-title {
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        padding-top: 16px;
        font-size: 14px;
        font-weight: 500;
        color: var(--primary-text-color);
    }
    .st-editor #st-actions {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`,ce=class extends HTMLElement{constructor(){super(...arguments);this._config={};this._initialized=!1}setConfig(e){let n=JSON.stringify(e)===JSON.stringify(this._config);this._config={...e},this._initialized&&!n&&this._render()}set hass(e){this._hass=e,this._initialized&&this.isConnected&&(this._updatePickers(),J(this.querySelector("#st-actions"),e))}async connectedCallback(){this._config=this._config||{},await this._ensureEntityPickerLoaded(),this._render(),this._initialized=!0,this._hass&&this._updatePickers()}disconnectedCallback(){this.innerHTML=""}async _ensureEntityPickerLoaded(){if(!customElements.get("ha-entity-picker"))try{let n=await(await window.loadCardHelpers()).createCardElement({type:"entities",entities:[]}),o=s=>{(s.reason?.message?.includes("localize")||s.reason?.message?.includes("hass"))&&s.preventDefault()};window.addEventListener("unhandledrejection",o);try{await n.constructor.getConfigElement()}catch{}setTimeout(()=>window.removeEventListener("unhandledrejection",o),2e3)}catch{}}_render(){let e=this._config,n=(o,s,l,d)=>`
                    <label class="st-switch" for="${o}">
                        <span>${s}<small>${l}</small></span>
                        <ha-switch id="${o}" ${d?"checked":""}></ha-switch>
                    </label>`;this.innerHTML=`
            <style>${Tt}${U}</style>
            <div class="st-editor">
                <ha-entity-picker id="sun-picker" allow-custom-entity></ha-entity-picker>
                ${K(e)}
                <ha-entity-picker id="moon-picker" allow-custom-entity></ha-entity-picker>
                <ha-entity-picker id="weather-picker" allow-custom-entity></ha-entity-picker>
                ${E({id:"title",label:"Title (optional)",value:e.title})}
                <ha-select id="direction" label="Direction"></ha-select>
                <div class="st-switches">
                    ${n("compact","Compact","One line: the next sunrise or sunset beside the sun's path",!!e.compact)}
                    ${n("show_header","Next sunrise or sunset","The headline time and countdown",e.show_header!==!1)}
                    ${n("show_details","Details","First and last light, solar noon, daylight, moon",e.show_details!==!1)}
                    ${n("theme_palette","Blend with dashboard theme","Use theme colors instead of the sky",e.color_palette==="theme")}
                </div>
                <div class="st-actions-title">Interactions</div>
                <div id="st-actions"></div>
            </div>
        `,this._updatePickers(),this._attachListeners(),j(this.querySelector("#st-actions"),this._hass,V(this._config,this._config.sun_entity),o=>this._update(o))}_updatePickers(){let e=[{id:"#sun-picker",value:this._config.sun_entity||"",label:"Sun entity",domains:["sun"]},{id:"#moon-picker",value:this._config.moon_entity||"",label:"Moon phase entity (optional)",domains:["sensor"]},{id:"#weather-picker",value:this._config.weather_entity||"",label:"Share the sky of a weather entity (optional)",domains:["weather"],helper:"Without one, it shares the sky of the weather card on the same sun"}];for(let n of e){let o=this.querySelector(n.id);o&&(this._hass&&(o.hass=this._hass),o.value=n.value,o.label=n.label,o.includeDomains=n.domains,"helper"in n&&(o.helper=n.helper))}}_attachListeners(){this.querySelector("#sun-picker")?.addEventListener("value-changed",o=>{this._update({sun_entity:o.detail.value})}),Y(this,o=>this._update(o)),this.querySelector("#moon-picker")?.addEventListener("value-changed",o=>{this._update({moon_entity:o.detail.value||void 0})}),this.querySelector("#weather-picker")?.addEventListener("value-changed",o=>{this._update({weather_entity:o.detail.value||void 0})}),this.querySelector("#title")?.addEventListener("input",o=>{this._update({title:o.target.value||void 0})});let e=(o,s)=>{this.querySelector(`#${o}`)?.addEventListener("change",l=>{this._update(s(l.target.checked))})};e("compact",o=>({compact:o||void 0})),e("show_header",o=>({show_header:o})),e("show_details",o=>({show_details:o})),e("theme_palette",o=>({color_palette:o?"theme":void 0}));let n=this.querySelector("#direction");if(n){let o=this._config.direction??"auto",s=()=>{n.options=[{value:"auto",label:"From your location: right to left south of the equator"},{value:"left_to_right",label:"Left to right"},{value:"right_to_left",label:"Right to left"}],n.value=o};customElements.get("ha-select")?s():customElements.whenDefined("ha-select").then(s),n.addEventListener("selected",(l=>{let d=l.detail?.value;!d||d===o||(o=d,this._update({direction:d==="auto"?void 0:d}))})),n.addEventListener("closed",l=>l.stopPropagation())}}_update(e){let n={...this._config,...e};for(let o of Object.keys(n))(n[o]===void 0||n[o]==="")&&delete n[o];this._config=n,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}};var Lt=`
    .fc-editor {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 4px 0;
    }
    .fc-editor .fc-switches {
        display: flex;
        flex-direction: column;
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        padding-top: 4px;
    }
    .fc-editor .fc-switch {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        min-height: 48px;
        font-size: 14px;
        color: var(--primary-text-color);
        cursor: pointer;
    }
    .fc-editor .fc-switch small {
        display: block;
        margin-top: 2px;
        font-size: 12px;
        color: var(--secondary-text-color);
    }
    .fc-editor .fc-title {
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        padding-top: 16px;
        font-size: 14px;
        font-weight: 500;
        color: var(--primary-text-color);
    }
    .fc-editor #fc-actions {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .fc-editor .card-action {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        min-height: 40px;
        font-size: 14px;
        color: var(--primary-text-color);
    }
    .fc-editor .card-action-reset {
        font: inherit;
        color: var(--primary-color);
        background: none;
        border: 0;
        padding: 8px;
        cursor: pointer;
    }
`,$t=[{value:"temp",label:"Temperature"},{value:"feels",label:"Feels like"},{value:"chance",label:"Chance of rain"},{value:"amount",label:"Rain amount"}],$e=["0","3","5","7","10"].map(t=>({value:t,label:t==="0"?"No days":`${t} days`})),ue=class extends HTMLElement{constructor(){super(...arguments);this._config={};this._initialized=!1}setConfig(e){let n=JSON.stringify(e)===JSON.stringify(this._config);this._config={...e},this._initialized&&!n&&this._render()}set hass(e){this._hass=e,this._initialized&&this.isConnected&&(this._updatePickers(),J(this.querySelector("#fc-actions"),e))}async connectedCallback(){await this._ensureEntityPickerLoaded(),this._render(),this._initialized=!0,this._hass&&this._updatePickers()}disconnectedCallback(){this.innerHTML=""}async _ensureEntityPickerLoaded(){if(!customElements.get("ha-entity-picker"))try{let n=await(await window.loadCardHelpers()).createCardElement({type:"entities",entities:[]}),o=s=>{(s.reason?.message?.includes("localize")||s.reason?.message?.includes("hass"))&&s.preventDefault()};window.addEventListener("unhandledrejection",o);try{await n.constructor.getConfigElement?.()}catch{}setTimeout(()=>window.removeEventListener("unhandledrejection",o),2e3)}catch{}}_render(){let e=this._config,n=(c,i,a,y)=>`
                    <label class="fc-switch" for="${c}">
                        <span>${i}<small>${a}</small></span>
                        <ha-switch id="${c}" ${y?"checked":""}></ha-switch>
                    </label>`;this.innerHTML=`
            <style>${Lt}${U}</style>
            <div class="fc-editor">
                <ha-entity-picker id="weather-picker" allow-custom-entity></ha-entity-picker>
                <ha-entity-picker id="sun-picker" allow-custom-entity></ha-entity-picker>
                ${K(e)}
                <ha-select id="forecast_metric" label="The hours first show"></ha-select>
                <ha-select id="forecast_graph" label="The hours' graph"></ha-select>
                <ha-select id="forecast_days" label="Days"></ha-select>
                <div class="fc-switches">
                    ${n("show_hours","The hours","The hourly row and its chips: drag it, and the sky goes there",e.show_hours!==!1)}
                    ${n("weather_effects","Weather","Rain, snow, fog, wind and lightning move behind the forecast, and go to the hour you drag to",!!e.weather_effects)}
                    ${n("compact","Strip","The hours alone, to sit under the compact weather card",!!e.compact)}
                    ${n("theme_palette","Blend with dashboard theme","Use theme colors instead of the sky",e.color_palette==="theme")}
                </div>
                <div class="fc-title">Interactions</div>
                <div id="fc-actions"></div>
            </div>
        `,this._updatePickers();let o=(c,i,a,y)=>{let u=this.querySelector(`#${c}`);if(!u)return;let g=()=>{u.options=i,u.value=a};customElements.get("ha-select")?g():customElements.whenDefined("ha-select").then(g),u.addEventListener("selected",(v=>{let x=v.detail?.value;!x||x===a||(a=x,this._update(y(x)))})),u.addEventListener("closed",v=>v.stopPropagation())};o("forecast_metric",$t,e.forecast_metric??"temp",c=>({forecast_metric:c==="temp"?void 0:c})),o("forecast_graph",Le,e.forecast_graph??"line",c=>({forecast_graph:c==="line"?void 0:c}));let s=String(e.forecast_days??7),l=$e.some(c=>c.value===s)||!Number.isFinite(Number(s))?$e:[...$e,{value:s,label:`${s} day${s==="1"?"":"s"}`}].sort((c,i)=>Number(c.value)-Number(i.value));o("forecast_days",l,s,c=>({forecast_days:c==="7"?void 0:Number(c)}));let d=(c,i)=>{this.querySelector(`#${c}`)?.addEventListener("change",a=>{this._update(i(a.target.checked))})};d("compact",c=>({compact:c||void 0})),d("show_hours",c=>({show_hours:c?void 0:!1})),d("weather_effects",c=>({weather_effects:c||void 0})),d("theme_palette",c=>({color_palette:c?"theme":void 0})),this.querySelector("#weather-picker")?.addEventListener("value-changed",c=>{this._update({entity:c.detail.value||void 0})}),this.querySelector("#sun-picker")?.addEventListener("value-changed",c=>{this._update({sun_entity:c.detail.value||void 0})}),Y(this,c=>this._update(c));let f=V(this._config,this._config.entity);j(this.querySelector("#fc-actions"),this._hass,f.tap_action?f:{...f,tap_action:{action:"forecast"}},c=>this._update(c.tap_action===void 0&&"tap_action"in c?{...c,tap_action:{action:"more-info"}}:c.tap_action?.action==="forecast"?{...c,tap_action:void 0}:c),{forecast:"Forecast"})}_updatePickers(){let e=[{id:"#weather-picker",value:this._config.entity||"",label:"Weather entity",domains:["weather"]},{id:"#sun-picker",value:this._config.sun_entity||"",label:"Sun, for the sky's time of day (optional)",domains:["sun"]}];for(let n of e){let o=this.querySelector(n.id);o&&(this._hass&&(o.hass=this._hass),o.value=n.value,o.label=n.label,o.includeDomains=n.domains)}}_update(e){let n={...this._config,...e};for(let o of Object.keys(n))(n[o]===void 0||n[o]==="")&&delete n[o];this._config=n,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}};customElements.get("animated-weather-card-editor")||customElements.define("animated-weather-card-editor",de);customElements.get("animated-sun-tracker-editor")||customElements.define("animated-sun-tracker-editor",ce);customElements.get("animated-forecast-card-editor")||customElements.define("animated-forecast-card-editor",ue);})();
