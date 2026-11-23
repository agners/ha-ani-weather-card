"use strict";(()=>{var I={windSpeed:2,rainCount:1,leafCount:1,snowCount:1,cloudBaseSize:1,cloudCount:3,splashBounce:80},lt={windSpeed:[.1,15],rainCount:[.1,10],leafCount:[.1,10],snowCount:[.1,10],cloudBaseSize:[.3,2.5],cloudCount:[1,20],splashBounce:[40,120]};var dt=t=>`
        ${t} ha-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: var(--mdc-icon-size, 24px);
          height: var(--mdc-icon-size, 24px);
          vertical-align: middle;
        }
`;var Z=()=>`
${dt(".card-config")}
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
          /* The one column never grows past the editor, whatever a row inside would like to be */
          grid-template-columns: minmax(0, 1fr);
          grid-template-rows: 0fr;
          visibility: hidden;
          transition: grid-template-rows 160ms var(--awc-drawer), visibility 0s linear 160ms;
        }
        .rv > .rv-in {
          min-height: 0;
          overflow: hidden;
          opacity: 0;
          /* Room either side for focus rings and an open header's tint, at no height */
          padding-inline: 8px;
          margin-inline: -8px;
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
        .top { padding: 4px 0 0; }
        .top .sw-l { font-weight: 500; }

        /* \u2500\u2500 Sections: a hairline where each starts, and a heading a step above its rows' labels, no box.
           The rule is the section's own, so a hidden section leaves none behind \u2500\u2500 */
        .grp-b {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
        }
        .grp-h {
          margin: 0 0 4px;
          font-size: 16px;
          line-height: 24px;
          font-weight: 500;
          color: var(--primary-text-color);
        }
        /* After the drawers, while they show, the last one's hairline is this section's */
        .drws[data-open] ~ [data-sec="dev"] .grp-b { margin-top: 0; padding-top: 8px; border-top: 0; }

        /* \u2500\u2500 Drawers: hairlines, a title and what's inside, a chevron \u2500\u2500\u2500\u2500\u2500\u2500 */
        /* A hairline above the drawers and under each, so a hidden one leaves none behind */
        .drws-b { margin-top: 20px; border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3)); }
        .drw-b { border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3)); }
        .drw-h { margin: 0; font: inherit; }
        .drw-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          box-sizing: border-box;
          isolation: isolate;
          width: calc(100% + 16px);
          min-height: 56px;
          margin: 4px -8px;
          padding: 8px;
          border: 0;
          border-radius: 8px;
          background: none;
          color: inherit;
          font: inherit;
          text-align: left;
          cursor: pointer;
        }
        .drw-tx { display: flex; flex-direction: column; flex: 1; min-width: 0; }
        .drw-t { font-size: 16px; line-height: 24px; font-weight: 500; }
        /* Open, a drawer's header is lit the way the editor lights whatever is chosen (a segment, a preset): the
           accent's tint behind it. It marks where the drawer starts and that it's open; its rows follow, and the
           hairline closes it. No box, and no fill behind the rows, which would dim their quiet text */
        .drw-btn::after, .rd-head::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: inherit;
          background: var(--primary-color);
          opacity: 0;
          pointer-events: none;
          transition: opacity 200ms var(--awc-press);
        }
        .drw-btn[aria-expanded="true"]::after { opacity: 0.14; }
        /* A reading opens inside an open drawer, so its tint is the quieter of the two */
        .rd-head[aria-expanded="true"]::after { opacity: 0.08; }
        /* On the tint the quiet line takes the text's colour, to keep its contrast */
        .drw-btn[aria-expanded="true"] .drw-s, .rd-head[aria-expanded="true"] .rd-s { color: var(--primary-text-color); }
        [aria-expanded="true"] > .chev { fill: var(--primary-text-color); }
        .drw-s {
          font-size: 13px;
          line-height: 18px;
          color: var(--secondary-text-color);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .drw-in { padding: 8px 0 24px; }
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

        /* \u2500\u2500 Start from: the presets, a small drawing of each layout \u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .pre { min-width: 0; margin: 0; padding: 0; border: 0; }
        /* Four across at most, so seven sit four over three; fewer where a tile would go under 76 px */
        .pre-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(max(76px, calc((100% - 18px) / 4)), 1fr)); gap: 6px; }
        .pre-t { position: relative; min-width: 0; cursor: pointer; }
        .pre-t input {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          margin: 0;
          opacity: 0;
          cursor: pointer;
        }
        .pre-c {
          position: relative;
          isolation: isolate;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 8px 4px 7px;
          border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
          border-radius: 10px;
          color: var(--secondary-text-color);
          pointer-events: none;
          transition: color 120ms var(--awc-press), border-color 120ms var(--awc-press);
        }
        .pre-c::before {
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
          .pre-t input:not(:checked):hover + .pre-c::before { opacity: 0.06; }
        }
        .pre-t input:checked + .pre-c { color: var(--primary-text-color); border-color: var(--primary-color); }
        .pre-t input:checked + .pre-c::before { opacity: 0.14; }
        .pre-t input:focus-visible + .pre-c { outline: 2px solid var(--primary-color); outline-offset: 1px; }
        .pre-n { font-size: 13px; line-height: 16px; font-weight: 500; text-align: center; }
        .pre-art { display: block; width: 100%; max-width: 64px; height: auto; }
        .pre-art .card { fill: var(--primary-color); fill-opacity: 0.18; }
        .pre-art .ink { fill: currentColor; fill-opacity: 0.85; }
        .pre-art .q { fill: currentColor; fill-opacity: 0.45; }
        .pre-art .bar { fill: currentColor; fill-opacity: 0.3; }
        .pre-art .sun { fill: currentColor; fill-opacity: 0.3; }
        .pre-art .line { fill: none; stroke: currentColor; stroke-opacity: 0.7; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }
        /* The nightstand's own night: black, and its red */
        .pre-art .night { fill: #0b0b0c; stroke: currentColor; stroke-opacity: 0.25; stroke-width: 1; }
        .pre-art .red { fill: #c21f17; }
        .pre-art .red-q { fill: #eb261c; fill-opacity: 0.7; }
        .pre .help { margin: 8px 0 0; }
        .pre .why { margin-top: 6px; }

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
          isolation: isolate;
          width: calc(100% + 16px);
          min-height: 48px;
          margin: 3px -8px;
          padding: 4px 8px;
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
        /* The open reading: its name a weight up, and room around its controls */
        .rd-head[aria-expanded="true"] .rd-t { font-weight: 500; }
        .rd-body .rd-fields { padding: 6px 0 12px; }
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
        .card-action-choice { margin-bottom: 8px; }
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
          .rv, .rv[data-open], .rv > .rv-in, .drw-btn::after, .rd-head::after, .drw-c, .drw-c[data-open], .drw-c > .rv-in, .chev, [aria-expanded="true"] > .chev { transition: none !important; }
          .rv[data-open] > .rv-in, .drw-c[data-open] > .rv-in, .drw[data-open] > .rv-in { transition: opacity 120ms linear !important; }
          .rd-row[data-moved] { animation-duration: 500ms; }
        }
`;var Dt={sunny:{top:[.445,.13,256],mid:[.495,.125,250],bottom:[.575,.11,238],glow:[.88,.08,218],glowAlpha:.45,overcast:0},"partly-cloudy":{top:[.445,.1,254],mid:[.495,.092,248],bottom:[.565,.08,240],glow:[.88,.07,220],glowAlpha:.36,overcast:.25},windy:{top:[.445,.115,244],mid:[.495,.105,236],bottom:[.565,.09,222],glow:[.95,.05,200],glowAlpha:.3,overcast:.1},cloudy:{top:[.43,.026,250],mid:[.475,.025,248],bottom:[.53,.024,244],glow:[.86,.016,250],glowAlpha:.28,overcast:.8},foggy:{top:[.44,.014,212],mid:[.48,.013,214],bottom:[.53,.012,218],glow:[.88,.01,210],glowAlpha:.3,overcast:.9},"light-rain":{top:[.42,.034,246],mid:[.48,.032,243],bottom:[.53,.03,238],glow:[.82,.02,246],glowAlpha:.22,overcast:.85},rainy:{top:[.37,.032,248],mid:[.43,.032,244],bottom:[.48,.03,240],glow:[.78,.02,246],glowAlpha:.18,overcast:.9},pouring:{top:[.3,.03,250],mid:[.36,.031,246],bottom:[.41,.03,242],glow:[.72,.02,248],glowAlpha:.14,overcast:1},stormy:{top:[.26,.032,280],mid:[.31,.034,272],bottom:[.36,.034,262],glow:[.7,.03,280],glowAlpha:.14,overcast:1},snowy:{top:[.45,.04,238],mid:[.495,.036,234],bottom:[.55,.03,228],glow:[.93,.02,230],glowAlpha:.32,overcast:.7},"snowy-rainy":{top:[.44,.036,240],mid:[.49,.033,236],bottom:[.54,.03,232],glow:[.86,.02,236],glowAlpha:.24,overcast:.85},sleety:{top:[.42,.042,258],mid:[.47,.04,252],bottom:[.52,.036,246],glow:[.84,.024,252],glowAlpha:.22,overcast:.85},"snowy-stormy":{top:[.3,.04,266],mid:[.35,.04,260],bottom:[.4,.038,252],glow:[.74,.026,260],glowAlpha:.14,overcast:1},"sleety-stormy":{top:[.28,.042,284],mid:[.33,.042,276],bottom:[.38,.04,266],glow:[.72,.03,280],glowAlpha:.14,overcast:1},"clear-night":{top:[.2,.045,272],mid:[.25,.052,266],bottom:[.31,.055,256],glow:[.86,.03,250],glowAlpha:.16,overcast:0}},ut=(t,o,e)=>Math.min(o,Math.max(t,e)),G=(t,o,e)=>t+(o-t)*e;function qt(t,o,e){let n=(o-t+540)%360-180;return(t+n*e+360)%360}function z(t,o,e){let n=([A,k,w])=>[A,k*Math.cos(w*Math.PI/180),k*Math.sin(w*Math.PI/180)],[r,i,l]=n(t),[a,u,y]=n(o),s=G(r,a,e),d=G(i,u,e),f=G(l,y,e),g=Math.hypot(d,f),p=g<1e-6?t[2]:(Math.atan2(f,d)*180/Math.PI+360)%360;return[s,g,p]}function Ie([t,o,e]){let n=e*Math.PI/180,r=o*Math.cos(n),i=o*Math.sin(n),l=(t+.3963377774*r+.2158037573*i)**3,a=(t-.1055613458*r-.0638541728*i)**3,u=(t-.0894841775*r-1.291485548*i)**3;return[4.0767416621*l-3.3077115913*a+.2309699292*u,-1.2684380046*l+2.6097574011*a-.3413193965*u,-.0041960863*l-.7034186147*a+1.707614701*u]}var zt=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055;function W(t){let o=n=>n.every(r=>r>=-1e-4&&r<=1.0001),e=Ie(t);if(!o(e)){let n=0,r=t[1];for(let i=0;i<24;i++){let l=(n+r)/2;o(Ie([t[0],l,t[2]]))?n=l:r=l}e=Ie([t[0],n,t[2]])}return e.map(n=>zt(ut(0,1,n)))}var ht=t=>Math.round(ut(0,1,t)*255);function ee(t){return"#"+t.map(o=>ht(o).toString(16).padStart(2,"0")).join("")}function ct(t,o){return`rgba(${t.map(ht).join(", ")}, ${Number(o.toFixed(3))})`}function Ne(t,o){return[.15+(t[0]-.15)*.42,t[1]*G(.75,.5,o),qt(t[2],262,.45)]}function jt(t,o){let e=Dt[t],n=1-e.overcast*.7,r={top:e.top,mid:e.mid,bottom:e.bottom,glow:e.glow,glowAlpha:e.glowAlpha,scrimAlpha:G(.46,.28,e.overcast)};if(t==="clear-night"){if(o==="dawn"||o==="dusk"){let i=o==="dawn"?[.4,.09,20]:[.38,.1,40];return{...r,bottom:z(e.bottom,i,.45),glowAlpha:.2,scrimAlpha:.22}}return{...r,scrimAlpha:.2}}switch(o){case"night":return{top:Ne(e.top,e.overcast),mid:Ne(e.mid,e.overcast),bottom:Ne(e.bottom,e.overcast),glow:[.86,.03,250],glowAlpha:G(.14,.06,e.overcast),scrimAlpha:.2};case"dusk":return{top:z(e.top,[e.top[0]*.8,.075,292],.5*n),mid:z(e.mid,[e.mid[0]*.88,.065,350],.42*n),bottom:z(e.bottom,[e.bottom[0]*.92,.115,52],.72*n),glow:z(e.glow,[.82,.13,58],n),glowAlpha:G(e.glowAlpha,.6,n*.6),scrimAlpha:r.scrimAlpha+.04};case"dawn":return{top:z(e.top,[e.top[0]*.95,e.top[1]*.85,262],.4*n),mid:z(e.mid,[e.mid[0]*.95,.05,330],.3*n),bottom:z(e.bottom,[e.bottom[0]*.95,.085,32],.62*n),glow:z(e.glow,[.88,.09,40],n),glowAlpha:G(e.glowAlpha,.5,n*.5),scrimAlpha:r.scrimAlpha+.04};default:return r}}function Wt(t){return[.16,Math.min(.04,t[1]*.6),t[2]]}function U(t,o){let e=jt(t,o);return{top:ee(W(e.top)),mid:ee(W(e.mid)),bottom:ee(W(e.bottom)),glow:ct(W(e.glow),e.glowAlpha),scrim:ct(W(Wt(e.top)),e.scrimAlpha)}}var De=[.985,.006,250];var Gt={"--awc-sky-top":"#3b5f8c","--awc-sky-mid":"#4a6d99","--awc-sky-bottom":"#5a7ba3","--awc-sky-glow":"rgba(0, 0, 0, 0)","--awc-sky-scrim":"rgba(0, 0, 0, 0)","--weather-sun-primary":"#ffd67a","--weather-sun-secondary":"#ffb547","--weather-sun-glow":"rgba(255, 214, 140, 0.55)","--weather-sun-halo":"rgba(255, 214, 140, 0.24)","--awc-cloud-far":"rgba(214, 226, 242, 0.85)","--awc-cloud-mid":"rgba(232, 239, 248, 0.92)","--awc-cloud-near":"rgba(248, 250, 253, 0.96)"},Bt=Object.keys(Gt),_n=Bt.filter(t=>t.startsWith("--awc-sky-"));function Kt(t,o=-1/0,e=1/0){return typeof t=="number"&&!isNaN(t)&&t>=o&&t<=e}function b(t){return t==null?"":String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function T(t){let o=customElements.get("ha-input")||!customElements.get("ha-textfield")?"ha-input":"ha-textfield",{id:e,label:n,value:r,placeholder:i,hint:l,type:a,min:u,max:y,step:s}=t,d=[`id="${b(e)}"`,`label="${b(n)}"`,`value="${b(r)}"`,i?`placeholder="${b(i)}"`:"",a?`type="${a}"`:"",u!==void 0?`min="${u}"`:"",y!==void 0?`max="${y}"`:"",s!==void 0?`step="${s}"`:"",l?o==="ha-input"?`hint="${b(l)}"`:`helper="${b(l)}" helperPersistent`:""].filter(Boolean);return`<${o} ${d.join(" ")}></${o}>`}function qe(t,o,e){if(t?.localize)try{let n=t.localize(o);if(n&&n!==o)return n}catch{}return e}function xe(t){let o=t?.engine_settings;return!o||typeof o!="object"?!1:Object.keys(I).some(e=>{let n=o[e],[r,i]=lt[e];return Kt(n,r,i)&&Math.abs(n-I[e])>1e-9})}function Y(t){let o=t?.engine_mode;return o==="auto"||o==="manual"?o:xe(t)?"manual":"auto"}var Ut=["humidity","wind","pressure","sun","uv","rain"],Yt=["humidity","wind","pressure","sun"];function pt(t){let o=t.metrics,e=Array.isArray(o)?o:typeof o=="string"?o.split(","):null;if(!e)return[...Yt];let n=[];for(let r of e){let i=String(r).trim().toLowerCase();Ut.includes(i)&&!n.includes(i)&&n.push(i)}return n}var ze=["humidity","wind","pressure","sun","uv","rain","aqi","feels_like","dew_point","visibility","cloud_cover","gust","uv_max","rain_event","rain_week","rain_month","rain_year","sensor"],je={humidity:"humidity",wind:"wind_speed",pressure:"pressure",uv:"uv_index",feels_like:"apparent_temperature",dew_point:"dew_point",visibility:"visibility",cloud_cover:"cloud_coverage",gust:"wind_gust_speed"},q=["uv_max","rain_event","rain_week","rain_month","rain_year"],fe=t=>t!=="sun"&&!Object.prototype.hasOwnProperty.call(je,t),mt=["humidity","wind","pressure","sun"],ft=t=>typeof t=="string"&&ze.includes(t),Ee=t=>typeof t=="string"&&t.trim()?t.trim():void 0;function Vt(t){if(typeof t=="string"){let u=t.trim().toLowerCase();return ft(u)?{type:u,view:q.includes(u)}:null}if(!t||typeof t!="object")return null;let o=t,e=typeof o.type=="string"?o.type.trim().toLowerCase():"";if(!ft(e))return null;let n={type:e,view:o.view===!0||q.includes(e)},r=Ee(o.entity);r&&(n.entity=r);let i=Ee(o.direction_entity);e==="wind"&&i&&(n.direction_entity=i);let l=Ee(o.rate_entity);e==="rain"&&l&&(n.rate_entity=l);let a=Ee(o.name);return a&&(n.name=a),n}function te(t){let o=t.readings;if(Array.isArray(o))return o.map(Vt).filter(i=>!!i);let e=[],n=i=>{let l=Object.fromEntries(Object.entries(i).filter(([,a])=>a!==void 0&&a!==""));e.push({...l,view:!!i.view||q.includes(i.type)})},r=pt(t);for(let i of r){if(i==="sun"){t.show_sun!==!1&&n({type:"sun"});continue}i==="humidity"?n({type:"humidity",entity:t.humidity_sensor_entity}):i==="wind"?n({type:"wind",entity:t.wind_speed_sensor_entity,direction_entity:t.wind_direction_sensor_entity}):i==="pressure"?n({type:"pressure",entity:t.pressure_sensor_entity}):i==="uv"?n({type:"uv",entity:t.uv_entity}):i==="rain"&&n({type:"rain",entity:t.rain_entity,rate_entity:t.rain_rate_entity})}!r.includes("wind")&&(t.wind_speed_sensor_entity||t.wind_direction_sensor_entity)&&n({type:"wind",entity:t.wind_speed_sensor_entity,direction_entity:t.wind_direction_sensor_entity,view:!0}),!r.includes("uv")&&t.uv_entity&&n({type:"uv",entity:t.uv_entity,view:!0}),!r.includes("rain")&&(t.rain_entity||t.rain_rate_entity)&&n({type:"rain",entity:t.rain_entity,rate_entity:t.rain_rate_entity,view:!0}),t.uv_max_entity&&n({type:"uv_max",entity:t.uv_max_entity});for(let i of["rain_event","rain_week","rain_month","rain_year"]){let l=t[`${i}_entity`];l&&n({type:i,entity:l})}return e}var Se=["metrics","show_sun","humidity_sensor_entity","wind_speed_sensor_entity","wind_direction_sensor_entity","pressure_sensor_entity","uv_entity","uv_max_entity","rain_entity","rain_rate_entity","rain_event_entity","rain_week_entity","rain_month_entity","rain_year_entity"];function gt(t){return t.map(o=>{let e=Object.entries(o).filter(([r,i])=>r!=="type"&&r!=="view"&&i!==void 0),n=o.view&&!q.includes(o.type);return!e.length&&!n?o.type:{type:o.type,...Object.fromEntries(e),...n?{view:!0}:{}}})}var Ae=t=>t.length===mt.length&&t.every((o,e)=>o.type===mt[e]&&!o.view&&!o.entity&&!o.direction_entity&&!o.rate_entity&&!o.name);function Jt(t,o){t.hasAttribute("data-open")!==o&&(t.toggleAttribute("data-open",o),o?setTimeout(()=>{t.hasAttribute("data-open")&&t.setAttribute("data-settled","")},300):t.removeAttribute("data-settled"))}var We={humidity:"Humidity",wind:"Wind",pressure:"Pressure",sun:"Next sunset or sunrise",uv:"UV index",rain:"Rain",aqi:"Air quality (US EPA)",feels_like:"Feels like",dew_point:"Dew point",visibility:"Visibility",cloud_cover:"Cloud cover",gust:"Gusts",uv_max:"Today's highest UV",rain_event:"Rain this event",rain_week:"Rain this week",rain_month:"Rain this month",rain_year:"Rain this year",sensor:"Any sensor"},ge=t=>t.type==="sensor"&&t.name?t.name:We[t.type],Xt='<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.4 8.6 12 13.2l4.6-4.6L18 10l-6 6-6-6z"/></svg>',yt='<svg class="ico-warn" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 1 21h22L12 2zm0 4.3L19.5 19h-15L12 6.3zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/></svg>',Qt=0;function _t(t,o,e,n={}){let r,i=te(o()),l=n.open??-1,a=++Qt,u=()=>o().entity||"the weather entity",y=h=>Object.prototype.hasOwnProperty.call(je,h),s=h=>q.includes(h.type)||h.view,d=h=>y(h.type)?`Leave empty to use ${u()}`:h.type==="aqi"?"A sensor on the US EPA scale; Air quality levels move the bands":h.type==="sensor"?"Any entity: its name and its value":"A sensor";function f(h){if(fe(h.type)&&!h.entity)return{text:"Pick a sensor",warn:!0};let m=h.type==="sun"?`From ${o().sun_entity||"sun.sun"}`:h.entity||`From ${u()}`;return s(h)?o().show_forecast?{text:`In the forecast view \xB7 ${m}`,warn:!1}:{text:"In the forecast view, which needs the forecast on",warn:!0}:{text:m,warn:!1}}function g(){let h={readings:Ae(i)?void 0:gt(i)};for(let m of Se)h[m]=void 0;e(h),at()}function p(h,m,x,S){return`<ha-entity-picker class="${h}" label="${b(m)}" value="${b(x??"")}"${S?` helper="${b(S)}"`:""} allow-custom-entity></ha-entity-picker>`}function A(h,m){let x=q.includes(h.type),S=b(ge(h)),P=f(h),R=`rd-b-${a}-${m}`;return`<div class="rd-row" data-i="${m}" data-type="${h.type}" role="listitem">
            <button type="button" class="rd-head" aria-expanded="${m===l}" aria-controls="${R}">
              <span class="rd-tx"><span class="rd-t">${S}</span><span class="rd-s${P.warn?" warn":""}" data-text="${b(P.text)}">${P.warn?yt:""}<span>${b(P.text)}</span></span></span>${Xt}
            </button>
            <div class="rv rd-body" id="${R}"${m===l?" data-open data-settled":""}><div class="rv-in"><div class="rd-fields">
              <ha-select class="rd-type" label="Type"></ha-select>
              ${h.type==="sun"?"":p("rd-entity",fe(h.type)?"Entity":"Entity (optional)",h.entity,d(h))}
              ${h.type==="wind"?p("rd-direction","Direction sensor (optional)",h.direction_entity):""}
              ${h.type==="rain"?p("rd-rate","Rain rate sensor (optional)",h.rate_entity,"Shown instead of today's rain while it rains"):""}
              ${h.type==="sensor"?T({id:`rd-name-${m}`,label:"Name (optional)",value:h.name,hint:"Else the entity's own name"}):""}
              ${fe(h.type)&&!h.entity?`<p class="rd-warn" role="status">Pick a sensor. Without one, this reading isn't shown.</p>`:""}
              ${x?'<p class="rd-note">Shown in the forecast view, when you tap the card.</p>':`<label class="sw rd-view"><span class="sw-t"><span class="sw-l">Only in the forecast view</span><span class="sw-h">Shown when you tap the card, not on it</span></span><ha-switch class="rd-view-switch"${h.view?" checked":""}></ha-switch></label>`}
              <div class="rd-foot">
                <button type="button" class="tb rd-btn rd-up" aria-label="Move ${S} up"${m===0?" disabled":""}>Move up</button>
                <button type="button" class="tb rd-btn rd-down" aria-label="Move ${S} down"${m===i.length-1?" disabled":""}>Move down</button>
                <button type="button" class="tb rd-btn rd-remove" aria-label="Remove ${S}">Remove</button>
              </div>
            </div></div></div>
          </div>`}function k(h){l=h,n.onOpen?.(h),t.querySelectorAll(".rd-row").forEach(m=>{let x=Number(m.dataset.i)===h;m.querySelector(".rd-head")?.setAttribute("aria-expanded",String(x));let S=m.querySelector(".rd-body");S&&Jt(S,x)})}function w(){l>=i.length&&(l=-1),t.innerHTML=`<div class="rd-list" role="list" aria-label="Readings">${i.map(A).join("")}</div>
            <button type="button" class="tb rd-add"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>Add a reading</button>`,t.querySelectorAll(".rd-row").forEach(h=>ve(h,Number(h.dataset.i))),t.querySelector(".rd-add").addEventListener("click",()=>{let m=typeof(r?.states[o().entity??""]?.attributes??{}).uv_index=="number"&&!i.some(x=>x.type==="uv")?"uv":"rain";i=[...i,{type:m,view:!1}],l=i.length-1,n.onOpen?.(l),g(),w(),t.querySelector(".rd-row:last-child .rd-type")?.focus()}),st()}function D(h,m){let x=f(m),S=h.querySelector(".rd-s"),P=h.querySelector(".rd-t");P&&P.textContent!==ge(m)&&(P.textContent=ge(m)),!(!S||S.dataset.text===x.text&&S.classList.contains("warn")===x.warn)&&(S.dataset.text=x.text,S.classList.toggle("warn",x.warn),S.innerHTML=`${x.warn?yt:""}<span></span>`,S.querySelector("span").textContent=x.text)}function ve(h,m){h.querySelector(".rd-head")?.addEventListener("click",()=>k(l===m?-1:m));let x=h.querySelector(".rd-type");if(x){let R=()=>{x.options=ze.map(_=>({value:_,label:q.includes(_)?`${We[_]}, in the forecast view`:We[_]})),x.value=i[m].type};customElements.get("ha-select")?R():customElements.whenDefined("ha-select").then(R),x.addEventListener("selected",(_=>{let C=_.detail?.value;if(!C||C===i[m].type)return;let F=i[m].entity&&(y(C)||!i[m].entity.startsWith("weather."))?i[m].entity:void 0;i=i.map((M,ke)=>ke===m?{type:C,view:q.includes(C)||M.view&&!q.includes(M.type),...F?{entity:F}:{}}:M),g(),w(),t.querySelector(`.rd-row[data-i="${m}"] .rd-type`)?.focus()})),x.addEventListener("closed",_=>_.stopPropagation())}let S=(R,_)=>{h.querySelector(R)?.addEventListener("value-changed",(C=>{let F=String(C.detail?.value??"").trim(),M=!!i[m].entity;i=i.map((ke,Nt)=>{if(Nt!==m)return ke;let Me={...ke};return F?Me[_]=F:delete Me[_],Me}),g(),_==="entity"&&fe(i[m].type)&&M!==!!F?w():D(h,i[m])}))};S(".rd-entity","entity"),S(".rd-direction","direction_entity"),S(".rd-rate","rate_entity"),h.querySelector(`[id="rd-name-${m}"]`)?.addEventListener("change",R=>{let _=String(R.target.value??"").trim();i=i.map((C,F)=>{if(F!==m)return C;let M={...C};return _?M.name=_:delete M.name,M}),g(),D(h,i[m])}),h.querySelector(".rd-view-switch")?.addEventListener("change",R=>{let _=!!R.target.checked;i=i.map((C,F)=>F===m?{...C,view:_}:C),g(),D(h,i[m])});let P=R=>{let _=m+R;if(_<0||_>=i.length)return;let C=[...i];[C[m],C[_]]=[C[_],C[m]],i=C,l=_,n.onOpen?.(_),g(),w();let F=t.querySelector(`.rd-row[data-i="${_}"]`);F?.setAttribute("data-moved","");let M=F?.querySelector(R<0?".rd-up":".rd-down");(M&&!M.disabled?M:F?.querySelector(R<0?".rd-down":".rd-up"))?.focus()};h.querySelector(".rd-up")?.addEventListener("click",()=>P(-1)),h.querySelector(".rd-down")?.addEventListener("click",()=>P(1)),h.querySelector(".rd-remove")?.addEventListener("click",()=>{i=i.filter((_,C)=>C!==m),l=-1,n.onOpen?.(-1),g(),w();let R=t.querySelectorAll(".rd-head");(R[Math.min(m,R.length-1)]??t.querySelector(".rd-add"))?.focus()})}function st(){t.querySelectorAll(".rd-row").forEach(h=>{let m=i[Number(h.dataset.i)];if(!m)return;let x=(S,P,R)=>{let _=h.querySelector(S);_&&(r&&(_.hass=r),_.includeDomains=R,_.value=P??"")};x(".rd-entity",m.entity,m.type==="sensor"?void 0:y(m.type)?["sensor","weather"]:["sensor"]),x(".rd-direction",m.direction_entity,["sensor"]),x(".rd-rate",m.rate_entity,["sensor"])})}function at(){t.parentElement?.querySelectorAll("[data-levels-for]").forEach(m=>{m.hidden=!i.some(x=>x.type===m.dataset.levelsFor)})}return w(),at(),{hass(h){r=h,st()},sync(){t.querySelectorAll(".rd-row").forEach(h=>{let m=i[Number(h.dataset.i)];m&&D(h,m)})}}}var wt=t=>t==null?void 0:String(t);function ne(t){return`<div class="place-fields">
        ${T({id:"latitude",label:"Latitude",type:"number",min:-90,max:90,step:"any",value:wt(t.latitude)})}
        ${T({id:"longitude",label:"Longitude",type:"number",min:-180,max:180,step:"any",value:wt(t.longitude)})}
        ${T({id:"time_zone",label:"Time zone",value:t.time_zone,hint:"For weather in another place, such as -33.87, 151.21 and Australia/Sydney: the coordinates give the card that place's sun, and its times are shown in its time zone"})}
    </div>`}function ie(t,o){for(let e of["latitude","longitude"])t.querySelector(`#${e}`)?.addEventListener("change",n=>{let r=n.target.value.trim(),i=parseFloat(r);o({[e]:r&&isFinite(i)?i:void 0})});t.querySelector("#time_zone")?.addEventListener("change",e=>{o({time_zone:e.target.value.trim()||void 0})})}var oe=`
    .place-fields { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 12px; }
    .place-fields > :last-child { grid-column: 1 / -1; }
`;function ye(t){return t&&typeof t=="object"&&typeof t.action=="string"?t:void 0}function re(t,o){return{entity:o,tap_action:ye(t?.tap_action),hold_action:ye(t?.hold_action),double_tap_action:ye(t?.double_tap_action)}}var V=["tap_action","hold_action","double_tap_action"],Zt={tap_action:["ui.panel.lovelace.editor.card.generic.tap_action","Tap behavior"],hold_action:["ui.panel.lovelace.editor.card.generic.hold_action","Hold behavior"],double_tap_action:["ui.panel.lovelace.editor.card.generic.double_tap_action","Double tap behavior"]},en=0,Ce=(t,o)=>qe(t,...Zt[o]),tn=V.map(t=>({name:t,selector:{ui_action:{default_action:t==="tap_action"?"more-info":"none"}},context:{entity_id:"entity"}}));function B(t,o,e,n,r={}){let i={...e},l=f=>{i={...i,...f},n(f)},a=f=>{let g=i[f]?.action;return g!==void 0&&Object.prototype.hasOwnProperty.call(r,g)?g:void 0},u=()=>{let f=Object.entries(r);if(!f.length)return[];let g=V[0],p=a(g)??"",A=`awc-action-${++en}`,k=document.createElement("fieldset");return k.className="seg card-action-choice",k.innerHTML=`<legend class="seg-l">${b(Ce(o,g))}</legend><div class="seg-track">`+[...f,["","Another action"]].map(([w,D])=>`<label><input type="radio" name="${A}" value="${b(w)}"${w===p?" checked":""}><span>${b(D)}</span></label>`).join("")+"</div>",k.querySelectorAll("input").forEach(w=>w.addEventListener("change",()=>{if(!w.checked)return;let D=w.value;l({[g]:D?{action:D}:void 0}),B(t,o,i,n,r),t.querySelectorAll(".card-action-choice input").forEach(ve=>{ve.value===D&&ve.focus()})})),[k]},y=Object.keys(r).length>0,s=()=>V.filter(f=>a(f)&&!(y&&f===V[0])).map(f=>{let g=document.createElement("div");return g.className="option card-action",g.innerHTML=`<span>${b(Ce(o,f))}: <b>${b(r[a(f)]??"")}</b></span><button type="button" class="card-action-reset">${b(qe(o,"ui.common.reset","Reset"))}</button>`,g.querySelector("button").addEventListener("click",()=>{l({[f]:void 0}),B(t,o,i,n,r)}),g}),d=()=>{let f=document.createElement("ha-form");f.hass=o,f.data={...i},f.schema=tn.filter(g=>!a(g.name)),f.computeLabel=g=>Ce(o,g.name),f.addEventListener("value-changed",g=>{g.stopPropagation();let p=g.detail?.value??{},A={};for(let k of V){let w=ye(p[k]);JSON.stringify(w)!==JSON.stringify(i[k])&&(A[k]=w)}f.data={...i,...A},Object.keys(A).length&&l(A)}),t.replaceChildren(...u(),...s(),f)};if(customElements.get("ha-form")){d();return}vt(t,o,()=>i,l,r),customElements.whenDefined("ha-form").then(()=>{t.isConnected&&d()}),nn()}function se(t,o){let e=t?.querySelector("ha-form");e&&o&&(e.hass=o)}async function nn(){try{await(await(await window.loadCardHelpers?.())?.createCardElement({type:"tile",entity:"sun.sun"}))?.constructor?.getConfigElement?.()}catch{}}var on=[{value:"default",label:"Default"},{value:"more-info",label:"More info"},{value:"navigate",label:"Navigate"},{value:"url",label:"Open a URL"},{value:"none",label:"Nothing"}],bt={navigate:{key:"navigation_path",label:"Path",placeholder:"/lovelace/weather"},url:{key:"url_path",label:"URL",placeholder:"https://"}};function vt(t,o,e,n,r={}){let i=[...on,...Object.entries(r).map(([l,a])=>({value:l,label:a}))];t.innerHTML=V.map(l=>{let a=e()[l],u=a?bt[a.action]:void 0;return`<div class="option"><ha-select data-action="${l}" label="${b(Ce(o,l))}"></ha-select></div>`+(u?`<div class="option">${T({id:`${l}-${u.key}`,label:u.label,placeholder:u.placeholder,value:typeof a?.[u.key]=="string"?a[u.key]:""})}</div>`:"")}).join("");for(let l of V){let a=e()[l],u=t.querySelector(`[data-action="${l}"]`);if(!u)continue;let y=a&&!i.some(g=>g.value===a.action)?[...i,{value:a.action,label:`${a.action} (set in YAML)`}]:i,s=()=>{u.options=y,u.value=a?.action??"default"};customElements.get("ha-select")?s():customElements.whenDefined("ha-select").then(s),u.addEventListener("selected",(g=>{let p=g.detail?.value;!p||p===(e()[l]?.action??"default")||(n({[l]:p==="default"?void 0:{action:p}}),vt(t,o,e,n,r))})),u.addEventListener("closed",g=>g.stopPropagation());let d=a?bt[a.action]:void 0;(d?t.querySelector(`#${l}-${d.key}`):null)?.addEventListener("input",g=>{let p=g.target.value.trim(),{[d.key]:A,...k}=e()[l]??{action:a.action};n({[l]:{...k,action:a.action,...p?{[d.key]:p}:{}}})})}}var At={show_location:!0,temperature_decimals:0,compact:!1,layout:"default",color_palette:"default",hero:"temperature",show_clock:!1,show_date:!1,show_forecast:!1,show_days:!1,forecast_days:7,forecast_metric:"temp",forecast_graph:"line",show_attributes:!0,show_attribute_labels:!0,show_attribute_icons:!0,show_indoor:!0,indoor_style:"label",show_flight_labels:!0,flight_label:"flight",plane_speed:1,planes_on_load:!1,animate:!0,spill_particles:!0,disable_lightning_shake:!1,auto_pause:!1,dev_mode:!1,enable_day_night_cycle:!1,sunrise_hour:6,sunset_hour:20,night:"auto",night_red:!0,night_lux:5,wake_time:"07:00",show_note:!1,note_tone:"snarky",note_attribute:"note",note_max_age:180,sun_entity:"sun.sun",engine_mode:"auto"},kt=t=>t==null||typeof t=="string"&&!t.trim()||Array.isArray(t)&&!t.length,Ct=t=>t===!0?"on":t===!1?"off":t;function J(t,o,e=At){let n=t;if(o.startsWith("engine_settings.")){let l=o.slice(16),a=n.engine_settings?.[l];return typeof a=="number"&&isFinite(a)&&a!==I[l]}if(o.startsWith("custom_colors."))return!kt(n.custom_colors?.[o.slice(14)]);let r=n[o];if(kt(r))return!1;if(!(o in e))return!0;let i=e[o];return o==="night"?Ct(r)!==i:o==="wake_time"?String(r).replace(/^(\d):/,"0$1:")!==i:typeof i=="number"?Number(r)!==i:r!==i}var Re=t=>t.layout==="nightstand"?"none":t.show_forecast?"forecast":"more-info",xt=t=>t&&typeof t=="object"&&typeof t.action=="string"?t.action:void 0;function Ke(t,o){let e=xt(t.tap_action),n=r=>{let i=xt(r);return i!==void 0&&i!=="none"};return e!==void 0&&e!==o||n(t.hold_action)||n(t.double_tap_action)}var Et=Object.keys(I).map(t=>`engine_settings.${t}`),rn=["sunny_bg","cloudy_bg","rainy_bg","stormy_bg","snowy_bg","windy_bg","fog_color"].map(t=>`custom_colors.${t}`),sn=["temperature_color","text_color","sun_color","rain_color","snow_color"].map(t=>`custom_colors.${t}`),H=t=>t.layout==="nightstand",Ge=(t,o)=>!!t.show_forecast&&(o.all||!H(t)),Te=t=>t.animate!==!1,Ue={preset:{tier:"basic",keys:[]},entity:{tier:"basic",keys:["entity"]},name:{tier:"basic",keys:["name"]},show_location:{tier:"all",keys:["show_location"]},outdoor_sensor_entity:{tier:"all",keys:["outdoor_sensor_entity"]},feels_like_entity:{tier:"all",keys:["feels_like_entity"]},another_place:{tier:"all",keys:["latitude","longitude","time_zone"]},place_fields:{tier:"all",keys:["latitude","longitude","time_zone"],when:(t,o)=>o.place},layout:{tier:"all",keys:["compact","layout"]},color_palette:{tier:"basic",keys:["color_palette"]},temperature_decimals:{tier:"all",keys:["temperature_decimals"]},why_nightstand_only:{tier:"basic",keys:[],reason:!0,when:t=>!H(t)},alarm_entity:{tier:"basic",keys:["alarm_entity"],when:H},wake_time:{tier:"basic",keys:["wake_time"],when:H},night:{tier:"all",keys:["night"],when:H},night_sensor:{tier:"all",keys:["night_sensor"],when:t=>H(t)&&Ct(t.night??"auto")==="auto"},night_lux:{tier:"all",keys:["night_lux"],when:t=>H(t)&&!!t.night_sensor},bed_time:{tier:"all",keys:["bed_time"],when:H},night_red:{tier:"all",keys:["night_red"],when:H},why_forecast_nightstand:{tier:"basic",keys:[],reason:!0,when:H},show_forecast:{tier:"basic",keys:["show_forecast"],when:(t,o)=>o.all||!H(t)},forecast_days:{tier:"all",keys:["show_days","forecast_days"],when:Ge},forecast_metric:{tier:"all",keys:["forecast_metric"],when:Ge},forecast_graph:{tier:"all",keys:["forecast_graph"],when:Ge},time_date:{tier:"all",keys:["show_clock","show_date"]},hero:{tier:"all",keys:["hero"]},note:{tier:"basic",keys:["show_note","note_entity"],when:(t,o)=>o.all||!H(t)},why_note_compact:{tier:"basic",keys:[],reason:!0,when:(t,o)=>!!t.compact&&!H(t)&&o.note!=="off"},why_note_nightstand:{tier:"basic",keys:[],reason:!0,when:H},note_tone:{tier:"basic",keys:["note_tone"],when:(t,o)=>o.note==="ai"},note_ai_task_entity:{tier:"all",keys:["note_ai_task_entity"],when:(t,o)=>o.note==="ai",promote:(t,o)=>o.noDefaultAi},note_calendar:{tier:"all",keys:["note_calendar"],when:(t,o)=>o.note==="ai"},note_entity:{tier:"basic",keys:["note_entity"],when:(t,o)=>o.note==="entity"},note_attribute:{tier:"all",keys:["note_attribute"],when:(t,o)=>o.note==="entity"},note_max_age:{tier:"all",keys:["note_max_age"],when:(t,o)=>o.note!=="off"},show_attributes:{tier:"all",keys:["show_attributes"]},readings:{tier:"all",keys:["readings","uv_levels","aqi_levels",...Se],when:t=>t.show_attributes!==!1,changed:t=>!Ae(te(t))||J(t,"uv_levels")||J(t,"aqi_levels")},reading_style:{tier:"all",keys:["show_attribute_labels","show_attribute_icons"],when:t=>t.show_attributes!==!1},indoor_temperature_entity:{tier:"all",keys:["indoor_temperature_entity"]},indoor_humidity_entity:{tier:"all",keys:["indoor_humidity_entity"]},indoor_line:{tier:"all",keys:["show_indoor","indoor_style"],when:t=>!!(t.indoor_temperature_entity||t.indoor_humidity_entity)},animate:{tier:"all",keys:["animate"]},spill_particles:{tier:"all",keys:["spill_particles"],when:Te},lightning:{tier:"all",keys:["disable_lightning_shake"],when:Te},auto_pause:{tier:"all",keys:["auto_pause"]},sky_follows:{tier:"all",keys:["enable_day_night_cycle"]},day_hours:{tier:"all",keys:["sunrise_hour","sunset_hour"],when:t=>!!t.enable_day_night_cycle},sun_entity:{tier:"all",keys:["sun_entity"]},moon_entity:{tier:"all",keys:["moon_entity"]},engine_mode:{tier:"all",keys:["engine_mode"],when:Te,changed:t=>Y(t)==="manual"},amounts:{tier:"all",keys:Et,when:t=>Te(t)&&Y(t)==="manual",changed:t=>Y(t)==="manual"&&Et.some(o=>J(t,o))},sky_colors:{tier:"all",keys:rn,when:t=>t.color_palette!=="theme"},why_sky_colors_theme:{tier:"all",keys:[],reason:!0,when:t=>t.color_palette==="theme"},ink_colors:{tier:"all",keys:sn},flights_entity:{tier:"all",keys:["flights_entity"]},plane_tags:{tier:"all",keys:["show_flight_labels","flight_label"],when:t=>!!t.flights_entity},plane_speed:{tier:"all",keys:["plane_speed"],when:t=>!!t.flights_entity},planes_on_load:{tier:"all",keys:["planes_on_load"],when:t=>!!t.flights_entity},actions:{tier:"all",keys:["tap_action","hold_action","double_tap_action"],changed:t=>Ke(t,Re(t))},dev_mode:{tier:"all",keys:["dev_mode"]}},an={start:["preset"],weather:["entity","name","show_location","outdoor_sensor_entity","feels_like_entity","another_place","place_fields"],look:["layout","color_palette","temperature_decimals"],nightstand:["why_nightstand_only","alarm_entity","wake_time","night","night_sensor","night_lux","bed_time","night_red"],forecast:["why_forecast_nightstand","show_forecast","forecast_days","forecast_metric","forecast_graph","time_date","hero"],note:["note","why_note_compact","why_note_nightstand","note_tone","note_ai_task_entity","note_calendar","note_entity","note_attribute","note_max_age"],readings:["show_attributes","readings","reading_style","indoor_temperature_entity","indoor_humidity_entity","indoor_line"],sky:["animate","spill_particles","lightning","auto_pause","sky_follows","day_hours","sun_entity","moon_entity","engine_mode","amounts"],colors:["sky_colors","why_sky_colors_theme","ink_colors"],planes:["flights_entity","plane_tags","plane_speed","planes_on_load"],interactions:["actions"],dev:["dev_mode"]},Ye=["readings","sky","colors","planes","interactions"],_e={rows:Ue,sections:an,drawers:Ye,defaults:At};function Tt(t,o,e=_e){let n=e.rows[t];return!n||n.reason?!1:n.changed?n.changed(o):n.keys.some(r=>J(o,r,e.defaults))}function Ve(t,o,e,n,r=_e){let i=r.rows[t];return i?n.has(t)?!0:i.when&&!i.when(o,e)?!1:i.tier==="basic"||e.all||!!i.promote?.(o,e):!1}function Lt(t,o,e,n,r=_e){return t.some(i=>!r.rows[i]?.reason&&Ve(i,o,e,n,r))}var ln={compact:!1,color_palette:"default",show_hours:!0,forecast_days:7,forecast_metric:"temp",forecast_graph:"line",weather_effects:!1,sun_entity:"sun.sun",dev_mode:!1},Be=t=>!!t.compact,St=t=>Be(t)||t.show_hours!==!1,Rt={rows:{entity:{tier:"basic",keys:["entity"]},layout:{tier:"basic",keys:["compact"]},color_palette:{tier:"basic",keys:["color_palette"]},show_hours:{tier:"all",keys:["show_hours"],when:t=>!Be(t)},forecast_days:{tier:"all",keys:["forecast_days"],when:t=>!Be(t)},forecast_metric:{tier:"all",keys:["forecast_metric"],when:St},forecast_graph:{tier:"all",keys:["forecast_graph"],when:St},weather_effects:{tier:"all",keys:["weather_effects"]},sun_entity:{tier:"all",keys:["sun_entity"]},another_place:{tier:"all",keys:["latitude","longitude","time_zone"]},place_fields:{tier:"all",keys:["latitude","longitude","time_zone"],when:(t,o)=>o.place},actions:{tier:"all",keys:["tap_action","hold_action","double_tap_action"],changed:t=>Ke(t,"forecast")},dev_mode:{tier:"all",keys:["dev_mode"]}},sections:{forecast:["entity","layout","color_palette"],shows:["show_hours","forecast_days","forecast_metric","forecast_graph","weather_effects"],sky:["sun_entity","another_place","place_fields"],interactions:["actions"],dev:["dev_mode"]},drawers:[],defaults:ln},dn={compact:!1,color_palette:"default",show_header:!0,show_details:!0,daylight_delta:"day",direction:"auto",dev_mode:!1},Le=t=>!t.compact,$t={rows:{sun_entity:{tier:"basic",keys:["sun_entity"]},layout:{tier:"basic",keys:["compact"]},color_palette:{tier:"basic",keys:["color_palette"]},title:{tier:"all",keys:["title"],when:Le},show_header:{tier:"all",keys:["show_header"]},show_details:{tier:"all",keys:["show_details"],when:Le},moon_entity:{tier:"all",keys:["moon_entity"],when:t=>Le(t)&&t.show_details!==!1},daylight_delta:{tier:"all",keys:["daylight_delta"],when:t=>t.show_header!==!1||Le(t)&&t.show_details!==!1},direction:{tier:"all",keys:["direction"]},weather_entity:{tier:"all",keys:["weather_entity"]},another_place:{tier:"all",keys:["latitude","longitude","time_zone"]},place_fields:{tier:"all",keys:["latitude","longitude","time_zone"],when:(t,o)=>o.place},actions:{tier:"all",keys:["tap_action","hold_action","double_tap_action"],changed:t=>Ke(t,"more-info")},dev_mode:{tier:"all",keys:["dev_mode"]}},sections:{sun:["sun_entity","layout","color_palette"],shows:["title","show_header","show_details","daylight_delta","moon_entity","direction"],sky:["weather_entity","another_place","place_fields"],interactions:["actions"],dev:["dev_mode"]},drawers:[],defaults:dn};var $e=["compact","layout","show_forecast","show_days","show_clock","show_date","hero","show_attributes","grid_options"],Je={width:640,height:540},Oe=[{id:"standard",label:"Standard",description:"The sky, the temperature and four readings",options:{}},{id:"simple",label:"Simple",description:"The sky, the temperature and the condition, nothing else",options:{show_attributes:!1}},{id:"forecast",label:"Forecast",description:"The next hours under the readings; drag through them",options:{show_forecast:!0}},{id:"full",label:"Full info",description:"The time and date, the hours and the week",options:{show_forecast:!0,show_days:!0,show_clock:!0,show_date:!0}},{id:"strip",label:"Strip",description:"One line, to sit under other cards",options:{compact:!0}},{id:"bedside",label:"Bedside",description:"A clock that goes red on black at night",options:{layout:"nightstand"}},{id:"wall",label:"Wall",description:"A panel to read across the room",options:{show_forecast:!0,show_clock:!0,show_date:!0,grid_options:{columns:"full",rows:10}}}],cn={compact:!1,layout:"default",show_forecast:!1,show_days:!1,show_clock:!1,show_date:!1,hero:"temperature",show_attributes:!0},Xe=t=>Oe.find(o=>o.id===t);function Qe(t){let o=t??{},e=(n,r)=>r[n]??cn[n];for(let n of Oe){let r=n.options,i=$e.filter(a=>a!=="grid_options").every(a=>e(a,o)===e(a,r)),l=n.id!=="wall"||o.grid_options?.columns==="full";if(i&&l)return n.id}return null}var X=t=>`<svg class="pre-art" viewBox="0 0 72 48" aria-hidden="true" focusable="false">${t}</svg>`,v=(t,o,e,n,r,i=1)=>`<rect class="${t}" x="${o}" y="${e}" width="${n}" height="${r}" rx="${i}"/>`,ae=(t,o,e=4)=>`<circle class="sun" cx="${t}" cy="${o}" r="${e}"/>`,Ot=t=>[10,24,38,52].map(o=>v("q",o,t,8,2)+v("ink",o,t+3.5,9,2.5)).join(""),Ze=(t,o,e)=>{let n=e/5,r=[0,-1.5,-2.5,-1,1,.5],i=r.map((l,a)=>`${(t+a*n).toFixed(1)},${(o+l).toFixed(1)}`).join(" ");return r.map((l,a)=>v("q",t+a*n-1.5,o-7,3,1.6,.8)).join("")+`<polyline class="line" points="${i}"/>`},Ft=(t,o,e,n,r=4)=>Array.from({length:n},(i,l)=>v("q",t,o+l*r,6,1.8)+v("bar",t+9,o+l*r,e-9,1.8,.9)).join(""),Ht={standard:X(v("card",4,6,64,36,4)+v("ink",10,11,15,9)+v("q",10,23,13,2.5)+ae(58,14)+Ot(31)),simple:X(v("card",4,6,64,36,4)+v("ink",10,13,17,11)+v("q",10,28,15,2.5)+ae(58,14)),forecast:X(v("card",4,2,64,44,4)+v("ink",10,6,14,8)+v("q",10,16,12,2)+ae(58,9,3.5)+Ot(21)+Ze(12,40,48)),full:X(v("card",4,1,64,46,4)+v("q",10,5,13,1.8)+v("ink",10,8,13,7)+v("q",10,17,11,1.8)+ae(58,8,3.5)+Ze(12,28,48)+Ft(10,32,50,4,3.6)),strip:X(v("card",4,17,64,14,3.5)+v("ink",9,20.5,9,7)+v("q",21,22,15,1.8)+v("q",21,25.5,10,1.6)+ae(60,22,3)),bedside:X(v("night",4,6,64,36,4)+v("red",12,15,22,11,1.5)+v("red-q",12,30,18,1.8)),wall:X(v("card",2,5,68,38,4)+v("q",7,9,10,1.8)+v("ink",7,12,14,9)+v("q",7,23,11,1.8)+ae(62,12,3.5)+Ze(9,37,30)+Ft(46,28,20,4,3.4))};var Pt="animated-weather-card:editor-all";function le(){try{return localStorage.getItem(Pt)==="1"}catch{return!1}}function de(t){try{localStorage.setItem(Pt,t?"1":"0")}catch{}}var j=t=>typeof requestAnimationFrame=="function"?requestAnimationFrame(t):setTimeout(t,16);function we(t,o,e=!1){t.hasAttribute("data-open")!==o&&(t.toggleAttribute("data-open",o),o?e?t.setAttribute("data-settled",""):setTimeout(()=>{t.hasAttribute("data-open")&&t.setAttribute("data-settled","")},300):t.removeAttribute("data-settled"))}var Mt='<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.4 8.6 12 13.2l4.6-4.6L18 10l-6 6-6-6z"/></svg>',be='<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/></svg>',c=(t,o)=>`<div class="rv" data-row="${t}"><div class="rv-in"><div class="row">${o}</div></div></div>`,E=(t,o,e,n="")=>`<label class="sw"><span class="sw-t"><span class="sw-l">${o}</span>${n?`<span class="sw-h">${n}</span>`:""}</span><ha-switch id="${t}"${e?" checked":""}></ha-switch></label>`,L=(t,o,e,n="")=>`<ha-entity-picker id="${t}" label="${b(o)}" value="${b(String(e??""))}"${n?` helper="${b(n)}"`:""} allow-custom-entity></ha-entity-picker>`,O=(t,o,e="")=>`<ha-select id="${t}" label="${b(o)}"></ha-select>${e?`<p class="help">${e}</p>`:""}`,ce=t=>`<p class="why">${be}<span>${t}</span></p>`,K=(t,o,e,n,r)=>`<fieldset class="seg" id="${t}"><legend class="seg-l">${o}</legend><div class="seg-track">${e.map(([i,l])=>`<label><input type="radio" name="awc-${t}-${r}" value="${i}"${i===n?" checked":""}><span>${l}</span></label>`).join("")}</div><p class="help" data-help="${t}"></p></fieldset>`,$=(t,o,e)=>`<section class="rv grp" data-sec="${t}"><div class="rv-in"><div class="grp-b">${o?`<h3 class="grp-h">${o}</h3>`:""}${e}</div></div></section>`,ue=t=>`<div class="top">
          ${E("all_settings","Show all settings",t,"Settings you've changed always show")}
          <span class="vh" aria-live="polite" data-live></span>
        </div>`,he=(t,o)=>t?`All settings shown.${o?" More sections at the end.":""}`:"Showing the basics, and the settings you've changed.";function pe(t,o,e,n,r,i){for(let u of Object.keys(o.rows))Tt(u,e,o)&&r.add(u);t.querySelectorAll("[data-row]").forEach(u=>we(u,Ve(u.dataset.row,e,n,r,o),i));let l=!1;for(let[u,y]of Object.entries(o.sections)){let s=Lt(y,e,n,r,o),d=t.querySelector(`[data-sec="${u}"]`);d&&we(d,s,i),s&&o.drawers.includes(u)&&(l=!0)}let a=t.querySelector("#all_settings");return a&&a.checked!==n.all&&(a.checked=n.all),l}function Q(t,o,e,n,r){let i=t.querySelector(`#${o}`);if(!i)return;let l=()=>{i.options=e,i.value=n};customElements.get("ha-select")?l():customElements.whenDefined("ha-select").then(l),i.addEventListener("selected",(a=>{let u=a.detail?.value;!u||u===n||(n=u,i.value=u,r(u))})),i.addEventListener("closed",a=>a.stopPropagation())}function me(t,o,e){t.querySelectorAll(`[id="${o}"] input[type="radio"]`).forEach(n=>n.addEventListener("change",()=>{n.checked&&e(n.value)}))}function It(t){return(Array.isArray(t)?t:typeof t=="string"?[t]:[]).map(String).filter(Boolean)}var it=[{value:"temp",label:"Temperature"},{value:"feels",label:"Feels like"},{value:"chance",label:"Chance of rain"},{value:"amount",label:"Rain amount"},{value:"uv",label:"UV index"},{value:"wind",label:"Wind"},{value:"gust",label:"Wind gusts"},{value:"humidity",label:"Humidity"},{value:"dew",label:"Dew point"},{value:"cloud",label:"Cloud cover"},{value:"pressure",label:"Pressure"}],ot=[{value:"line",label:"Line"},{value:"area",label:"Line with a soft fill"},{value:"bars",label:"Bars"},{value:"none",label:"No graph, the values alone"}],et=[["windSpeed","Wind's effect",'<input type="range" id="windSpeed" min="0.5" max="5" step="0.1"'],["rainCount","Rain",'<input type="range" id="rainCount" min="0.5" max="3" step="0.1"'],["snowCount","Snow",'<input type="range" id="snowCount" min="0.5" max="3" step="0.1"'],["leafCount","Leaves on windy days",'<input type="range" id="leafCount" min="0.5" max="3" step="0.1"'],["cloudCount","Clouds, and stars at night",'<input type="range" id="cloudCount" min="1" max="6" step="1"'],["cloudBaseSize","Cloud size",'<input type="range" id="cloudBaseSize" min="0.5" max="2" step="0.1"'],["splashBounce","Splash height",'<input type="range" id="splashBounce" min="40" max="120" step="5"']],tt=[["sunny_bg","Sunny sky"],["cloudy_bg","Cloudy sky"],["rainy_bg","Rainy sky"],["stormy_bg","Stormy sky"],["snowy_bg","Snowy sky"],["windy_bg","Windy sky"],["fog_color","Fog"]],nt=[["temperature_color","Temperature"],["text_color","Text"],["sun_color","Sun"],["rain_color","Rain"],["snow_color","Snow"]],un=0,N=class N extends HTMLElement{constructor(){super(...arguments);this._initialized=!1;this.uid=++un;this.all=le();this.pinned=new Set;this.openDrawers=new Set;this.readingOpen=-1;this.placeOn=!1;this.placeKept={};this.noDefaultAi=!1;this.refill={}}setConfig(e){let n=!this._config||Object.keys(e).length!==Object.keys(this._config).length||JSON.stringify(Object.keys(e).sort())!==JSON.stringify(Object.keys(this._config).sort());this._config={...e},this.isConnected&&n?this.render():this.isConnected&&this._initialized&&this.sync()}async connectedCallback(){this._config=this._config||{},await this.ensureEntityPickerLoaded(),this.render(),this._initialized=!0,this._hass&&this.updateEntityPickers()}disconnectedCallback(){this._cleanupSuppressHandler(),this.pinned.clear(),this.innerHTML=""}_cleanupSuppressHandler(){this._suppressHandler&&(window.removeEventListener("unhandledrejection",this._suppressHandler),this._suppressHandler=void 0),this._suppressTimeout&&(clearTimeout(this._suppressTimeout),this._suppressTimeout=void 0)}async ensureEntityPickerLoaded(){if(!customElements.get("ha-entity-picker"))try{let n=await(await window.loadCardHelpers()).createCardElement({type:"entities",entities:[]});this._cleanupSuppressHandler(),this._suppressHandler=r=>{(r.reason?.message?.includes("localize")||r.reason?.message?.includes("hass"))&&r.preventDefault()},window.addEventListener("unhandledrejection",this._suppressHandler);try{await n.constructor.getConfigElement?.()}finally{this._suppressTimeout=setTimeout(()=>this._cleanupSuppressHandler(),2e3)}}catch{}}ctx(){return{all:this.all,place:this.placeOn,note:this.noteSource(),noDefaultAi:this.noDefaultAi}}noteSource(){let e=this._config??{};return e.note_entity||this.noteChoice==="entity"?"entity":e.show_note?"ai":"off"}render(){let e=this._config??(this._config={}),n=this.uid,r=["latitude","longitude","time_zone"].some(p=>e[p]!==void 0&&e[p]!=="");this.placeOn=this.placeOn||r;let i=Object.fromEntries(Object.entries(e.engine_settings||{}).filter(([,p])=>typeof p=="number"&&isFinite(p))),l=e.custom_colors||{},a=e.layout==="nightstand"?"nightstand":e.compact?"compact":"default",u=(p,A,k,w)=>K(p,A,k,w,n),y=([p,A],k)=>`<div class="swc"><span class="chip${k?` ink ink-${p.replace("_color","")}`:""}"><input type="color" id="${p}" value="${b(l[p]||N.DEFAULT_COLORS[p])}"></span><label for="${p}">${A}</label><button type="button" class="tb color-reset" data-target="${p}" aria-label="Reset ${A}"${l[p]?"":" data-off"}>Reset</button></div>`,s=(p,A,k,w)=>`<section class="rv drw" data-sec="${p}" style="--i:${w}"><div class="rv-in"><div class="drw-b"><h3 class="drw-h"><button type="button" class="drw-btn" data-drawer="${p}" aria-expanded="false" aria-controls="awc-${p}-${n}"><span class="drw-tx"><span class="drw-t">${A}</span><span class="drw-s" data-summary="${p}"></span></span>${Mt}</button></h3><div class="rv drw-c" id="awc-${p}-${n}" role="region" aria-label="${A}"><div class="rv-in"><div class="drw-in">${k}</div></div></div></div></div></section>`,d=Qe(e),f=`<fieldset class="pre" id="preset"><legend class="vh">Start from a preset</legend><div class="pre-grid">${Oe.map(p=>`<label class="pre-t"><input type="radio" name="awc-preset-${n}" value="${p.id}"${p.id===d?" checked":""}><span class="pre-c">${Ht[p.id]}<span class="pre-n">${p.label}</span></span></label>`).join("")}</div><p class="help" data-help="preset"></p><p class="why" data-wall hidden>${be}<span>The wall needs the card at least ${Je.width} \xD7 ${Je.height} px: give its section Double width (the section's settings, Width), or put it in a panel view. Smaller, it's the forecast with the time and date.</span></p></fieldset>`;this.innerHTML=`
      <div class="card-config" data-instant>
        ${ue(this.all)}

        ${$("start","Start from",c("preset",f))}

        ${$("weather","Weather",[c("entity",`${L("entity","Weather entity",e.entity)}<p class="status" role="status" data-status="entity" hidden>${be}<span>Pick a weather entity to start.</span></p>`),c("name",T({id:"name",label:"Place name",placeholder:"Weather",value:e.name,hint:"Shown above the temperature"})),c("show_location",E("show_location","Show the place name",e.show_location!==!1)),c("outdoor_sensor_entity",L("outdoor_sensor_entity","Temperature from",e.outdoor_sensor_entity,"A sensor of yours, shown instead of the weather entity's")),c("feels_like_entity",L("feels_like_entity","Feels like from",e.feels_like_entity,"Without one, the weather entity's own, when it reports one")),c("another_place",E("another_place","Weather for another place",this.placeOn,"Its sun, and its times in its time zone")),c("place_fields",ne(e))].join(""))}

        ${$("look","Layout and colors",[c("layout",u("layout","Layout",[["default","Regular"],["compact","Compact"],["nightstand","Nightstand"]],a)),c("color_palette",u("color_palette","Colors",[["default","Sky"],["theme","Theme"]],e.color_palette==="theme"?"theme":"default")),c("temperature_decimals",E("temperature_decimals","One decimal",Number(e.temperature_decimals)===1,"21.5\xB0 rather than 22\xB0"))].join(""))}

        ${$("nightstand","Nightstand",[c("why_nightstand_only",ce("These apply with the Nightstand layout.")),c("alarm_entity",L("alarm_entity","Next alarm",e.alarm_entity,"Optional. Your phone's next alarm sensor, or a date and time helper")),c("wake_time",T({id:"wake_time",label:"Wake time",placeholder:"07:00",value:e.wake_time,hint:"When you get up without an alarm"})),c("night",O("night","Night mode","Automatic: when the room goes dark, or from bed time without a light sensor")),c("night_sensor",L("night_sensor","Light sensor",e.night_sensor,"An illuminance sensor near the screen")),c("night_lux",T({id:"night_lux",label:"Dark below (lx)",type:"number",min:.1,step:"any",placeholder:"5",value:e.night_lux!==void 0?String(e.night_lux):"",hint:"Raise it if the screen or a street light keeps the room brighter"})),c("bed_time",T({id:"bed_time",label:"Bed time",placeholder:"22:30",value:e.bed_time,hint:"By default, 8 h 30 min before the alarm or wake time"})),c("night_red",E("night_red","Red at night",e.night_red!==!1,"Red on black, like a bedside clock"))].join(""))}

        ${$("forecast","Forecast and clock",[c("why_forecast_nightstand",ce("The nightstand shows the time, the date and what's coming on its own.")),c("show_forecast",E("show_forecast","Forecast",!!e.show_forecast,"Today's high and low, the hours ahead, and the week on a tap")),c("forecast_days",O("forecast_days","Days under the hours")),c("forecast_metric",O("forecast_metric","Hours open on","Under the hours, a button for each value your forecast reports")),c("forecast_graph",O("forecast_graph","Graph")),c("time_date",O("time_date","Time and date","Before the place name, in your profile's 12- or 24-hour format")),c("hero",u("hero","Big number",[["temperature","Temperature"],["clock","Time"]],e.hero==="clock"?"clock":"temperature"))].join(""))}

        ${$("note","Weather note",[c("note",`${O("note_source","Note")}<p class="help" data-help="note"></p><p class="status" role="status" id="note_status" hidden></p>`),c("why_note_compact",ce("The compact card has no room for the note.")),c("why_note_nightstand",ce("The nightstand doesn't show the note.")),c("note_tone",O("note_tone","Voice","Serious weather always gets plain advice")),c("note_ai_task_entity",L("note_ai_task_entity","AI Task",e.note_ai_task_entity,"Leave empty for your default AI Task")),c("note_calendar",L("note_calendar","Calendar",It(e.note_calendar)[0],"For what to wear when you're out. Only the times reach your AI")),c("note_entity",L("note_entity","Note entity",e.note_entity,"A text helper or a sensor: its state is the short note")),c("note_attribute",T({id:"note_attribute",label:"Longer version",placeholder:"note",value:e.note_attribute,hint:"The attribute shown where there's room for two lines"})),c("note_max_age",T({id:"note_max_age",label:"Hide after (minutes)",type:"number",min:0,placeholder:"180",value:e.note_max_age!==void 0?String(e.note_max_age):"",hint:"Counted from when the note was written. 0 keeps it up"}))].join(""))}

        <div class="rv drws" data-drawers><div class="rv-in"><div class="drws-b">
          ${s("readings","Readings",[c("show_attributes",E("show_attributes","Show the readings",e.show_attributes!==!1)),c("readings",`<div class="readings-table"></div>
              <div data-levels-for="uv">${T({id:"uv_levels",label:"UV levels",placeholder:"3, 6, 8, 11",value:Array.isArray(e.uv_levels)?e.uv_levels.join(", "):e.uv_levels,hint:"Where moderate, high, very high and extreme start. The WHO's by default"})}</div>
              <div data-levels-for="aqi">${T({id:"aqi_levels",label:"Air quality levels",placeholder:"51, 101, 151, 201, 301",value:Array.isArray(e.aqi_levels)?e.aqi_levels.join(", "):e.aqi_levels,hint:"Where each US EPA level starts, unless your sensor uses another scale"})}</div>`),c("reading_style",O("reading_style","Each reading shows")),c("indoor_temperature_entity",L("indoor_temperature_entity","Indoor temperature",e.indoor_temperature_entity,"A line under the condition")),c("indoor_humidity_entity",L("indoor_humidity_entity","Indoor humidity",e.indoor_humidity_entity)),c("indoor_line",O("indoor_line","Indoor line starts with"))].join(""),0)}
          ${s("sky","Sky and motion",[c("animate",E("animate","Animate the weather",e.animate!==!1,"Off, a still sky in the weather's colors")),c("spill_particles",E("spill_particles","Let weather spill out",e.spill_particles!==!1,"Rain, snow and leaves fall past the card's edges")),c("lightning",E("lightning_shake","Shake on lightning",!e.disable_lightning_shake,"A small jolt when lightning strikes")),c("auto_pause",E("auto_pause","Pause in the background",!!e.auto_pause,"Also while this window isn't in front. The card always pauses off screen")),c("sky_follows",u("sky_follows","Sky follows",[["sun","The sun"],["hours","Set hours"]],e.enable_day_night_cycle?"hours":"sun")),c("day_hours",`<div class="pair">${T({id:"sunrise_hour",label:"Day begins at",type:"number",min:0,max:23,placeholder:"6",value:e.sunrise_hour!==void 0?String(e.sunrise_hour):""})}${T({id:"sunset_hour",label:"Night begins at",type:"number",min:0,max:23,placeholder:"20",value:e.sunset_hour!==void 0?String(e.sunset_hour):""})}</div>`),c("sun_entity",L("sun_entity","Sun",e.sun_entity,"Sets the sky's time of day and the sunset reading. Usually sun.sun")),c("moon_entity",L("moon_entity","Moon phase",e.moon_entity,"The Moon integration's sensor. Else, worked out from the date")),c("engine_mode",E("engine_auto","Amounts follow the weather",Y(e)==="auto","How hard it rains or snows, the cloud cover, how far you can see, and the wind and its gusts. Off, you set the amounts")),c("amounts",`<p class="sub-h">Amounts</p><div class="amt">${et.map(([p,A,k])=>{let w=i[p]??I[p];return`<div class="amt-o"><label for="${p}">${A}</label><output for="${p}" data-out="${p}">${N.formatEngineValue(p,w)}</output>${k} value="${b(w)}" /></div>`}).join("")}</div><button type="button" class="tb reset-engine-btn" data-off>Reset amounts</button>`)].join(""),1)}
          ${s("colors","Custom colors",[c("sky_colors",`<p class="sub-h">Skies</p><p class="help">Each color replaces that condition's whole sky</p><div class="color-grid" id="color-grid">${tt.map(p=>y(p,!1)).join("")}</div>`),c("why_sky_colors_theme",ce("Sky colors apply with Colors set to Sky.")),c("ink_colors",`<p class="sub-h">Text and weather</p><div class="color-grid" id="ink-grid">${nt.map(p=>y(p,!0)).join("")}</div><button type="button" class="tb reset-colors-btn" id="reset-colors-btn" data-off>Reset all colors</button>`)].join(""),2)}
          ${s("planes","Planes",[c("flights_entity",L("flights_entity","Flights sensor",e.flights_entity,"Flightradar24's Current in area sensor. Each new flight crosses the card once")),c("plane_tags",O("plane_tags","Plane tags","Tags show only in open sky, never over the temperature")),c("plane_speed",O("plane_speed","Speed")),c("planes_on_load",E("planes_on_load","Fly the planes already up",!!e.planes_on_load,"When the dashboard opens, not only new arrivals"))].join(""),3)}
          ${s("interactions","Interactions",c("actions",'<div id="actions-editor"></div>'),4)}
        </div></div></div>

        ${$("dev","",c("dev_mode",E("dev_mode","Simulated weather",!!e.dev_mode,"The dev card's weather, with no weather entity needed")))}
      </div>
      <style>${Z()}${oe}</style>
    `,this.attachEventListeners(),this.sync();for(let p of this.openDrawers)this.applyDrawer(p);this.syncColorInputs();let g=this.querySelector(".card-config");j(()=>j(()=>g?.removeAttribute("data-instant"))),setTimeout(()=>this.updateEntityPickers(),0)}attachEventListeners(){this.updateEntityPickers();let e=(s,d,f)=>this.querySelector(s)?.addEventListener(d,g=>f(g.target,g)),n=(s,d)=>this.querySelectorAll(`[id="${s}"] input[type="radio"]`).forEach(f=>f.addEventListener("change",()=>{f.checked&&d(f.value)}));e("#all_settings","change",s=>{this.all=!!s.checked,de(this.all),this.sync();let d=this.querySelector("[data-live]");d&&(d.textContent=he(this.all,!0))}),n("preset",s=>this.pickPreset(s)),e("#entity","value-changed",s=>this._set({entity:s.value})),e("#name","input",s=>this._set({name:s.value})),e("#show_location","change",s=>this._set({show_location:s.checked?void 0:!1}));for(let s of["outdoor_sensor_entity","feels_like_entity","alarm_entity","night_sensor","note_ai_task_entity","indoor_temperature_entity","indoor_humidity_entity","sun_entity","moon_entity","flights_entity"])e(`#${s}`,"value-changed",d=>{this._set({[s]:d.value||void 0}),s==="note_ai_task_entity"&&this.syncNoteStatus()});e("#another_place","change",s=>{if(this.placeOn=!!s.checked,this.placeOn){Object.keys(this.placeKept).length?this._set(this.placeKept):this.sync();return}let d=this._config??{};this.placeKept=Object.fromEntries(["latitude","longitude","time_zone"].filter(f=>d[f]!==void 0).map(f=>[f,d[f]])),this.pinned.delete("place_fields"),this._set({latitude:void 0,longitude:void 0,time_zone:void 0})}),ie(this,s=>this._set(s)),n("layout",s=>{this._set(s==="compact"?{compact:!0,layout:void 0}:s==="nightstand"?{layout:"nightstand",compact:void 0}:{compact:void 0,layout:void 0}),this.mountActions()}),n("color_palette",s=>{this._set({color_palette:s==="theme"?s:void 0}),this.syncColorInputs()}),e("#temperature_decimals","change",s=>this._set({temperature_decimals:s.checked?1:void 0}));for(let s of["wake_time","bed_time"])e(`#${s}`,"input",d=>{let f=(d.value||"").trim();this._set({[s]:/^\d{1,2}:\d{2}$/.test(f)?f:void 0})});this._bindSelect("night",[{value:"auto",label:"Automatic"},{value:"on",label:"Always"},{value:"off",label:"Never"}],this._config?.night===!0?"on":this._config?.night===!1?"off":String(this._config?.night||"auto"),s=>{this._set({night:s==="auto"?void 0:s})}),e("#night_lux","input",s=>{let d=Number((s.value||"").trim());this._set({night_lux:Number.isFinite(d)&&d>0&&d!==5?d:void 0})}),e("#night_red","change",s=>this._set({night_red:s.checked?void 0:!1})),e("#show_forecast","change",s=>{this._set({show_forecast:s.checked||void 0}),this.mountActions()});let r=this._config?.show_days?String(this._config?.forecast_days??7):"none";this._bindSelect("forecast_days",[{value:"none",label:"None"},...Array.from({length:10},(s,d)=>({value:String(d+1),label:d?`${d+1} days`:"1 day"}))],r,s=>{this._set(s==="none"?{show_days:void 0}:{show_days:!0,forecast_days:s==="7"?void 0:Number(s)})}),this._bindSelect("forecast_metric",it,this._config?.forecast_metric||"temp",s=>this._set({forecast_metric:s==="temp"?void 0:s})),this._bindSelect("forecast_graph",ot,this._config?.forecast_graph||"line",s=>this._set({forecast_graph:s==="line"?void 0:s})),this._bindSelect("time_date",this.timeDateOptions(),this.timeDateValue(),s=>{this._config?.hero==="clock"?this._set({show_date:s==="date"||void 0}):this._set({show_clock:s==="time"||s==="both"||void 0,show_date:s==="date"||s==="both"||void 0})}),n("hero",s=>{this._set({hero:s==="clock"?s:void 0}),this.refill.time_date?.(this.timeDateOptions(),this.timeDateValue())}),this._bindSelect("note_source",[{value:"off",label:"Off"},{value:"ai",label:"Written by your AI"},{value:"entity",label:"From an entity"}],this.noteSource(),s=>{let d=this._config??{};d.note_entity&&(this.noteEntityKept=d.note_entity),this.noteChoice=s==="entity"?"entity":void 0,s==="off"?this._set({show_note:void 0,note_entity:void 0}):s==="ai"?this._set({show_note:!0,note_entity:void 0}):this.noteEntityKept?this._set({note_entity:this.noteEntityKept,show_note:void 0}):(this.sync(),this.querySelector("#note_entity")?.focus()),this.syncNoteStatus()}),e("#note_entity","value-changed",s=>{let d=s.value||void 0;this.noteChoice=d?void 0:"entity",this._set(d?{note_entity:d,show_note:void 0}:{note_entity:void 0}),this.syncNoteStatus()}),this._bindSelect("note_tone",[{value:"snarky",label:"Snarky"},{value:"calm",label:"Calm"},{value:"friendly",label:"Friendly"},{value:"dry",label:"Dry"}],this._config?.note_tone||"snarky",s=>this._set({note_tone:s==="snarky"?void 0:s})),e("#note_calendar","value-changed",s=>{let d=[s.value,...It(this._config?.note_calendar).slice(1)].filter(Boolean);this._set({note_calendar:d.length>1?d:d[0]||void 0})}),e("#note_attribute","input",s=>this._set({note_attribute:s.value.trim()||void 0})),e("#note_max_age","change",s=>{let d=s.value.trim(),f=parseInt(d);d?f>=0&&this._set({note_max_age:f===180?void 0:f}):this._set({note_max_age:void 0})}),e("#show_attributes","change",s=>this._set({show_attributes:s.checked?void 0:!1}));let i=this.querySelector(".readings-table");this.readingsEditor=i?_t(i,()=>this._config??{},s=>this._set(s),{open:this.readingOpen,onOpen:s=>{this.readingOpen=s}}):void 0,this.readingsEditor?.hass(this._hass);let l=(s,d)=>e(`#${s}`,"change",f=>{let g=f.value.trim(),p=g.split(",").map(k=>parseFloat(k)),A=p.length===d&&p.every((k,w)=>isFinite(k)&&(w===0||k>p[w-1]));this._set({[s]:g?A?p:g:void 0})});l("uv_levels",4),l("aqi_levels",5);let a=this._config??{};this._bindSelect("reading_style",[{value:"both",label:"Icon and label"},{value:"label",label:"Label"},{value:"icon",label:"Icon"},{value:"value",label:"The value alone"}],a.show_attribute_labels===!1?a.show_attribute_icons===!1?"value":"icon":a.show_attribute_icons===!1?"label":"both",s=>{this._set({show_attribute_labels:s==="icon"||s==="value"?!1:void 0,show_attribute_icons:s==="label"||s==="value"?!1:void 0})}),this._bindSelect("indoor_line",[{value:"label",label:'The word "Indoors"'},{value:"icon",label:"A house icon"},{value:"both",label:"Icon and word"},{value:"hidden",label:"Hidden"}],a.show_indoor===!1?"hidden":a.indoor_style||"label",s=>{this._set(s==="hidden"?{show_indoor:!1}:{show_indoor:void 0,indoor_style:s==="label"?void 0:s})}),e("#animate","change",s=>this._set({animate:s.checked?void 0:!1})),e("#spill_particles","change",s=>this._set({spill_particles:s.checked?void 0:!1})),e("#lightning_shake","change",s=>this._set({disable_lightning_shake:s.checked?void 0:!0})),e("#engine_auto","change",s=>{let d=this._config??{};s.checked&&this.pinned.delete("amounts"),this._set({engine_mode:s.checked?xe(d)?"auto":void 0:"manual"})}),e("#auto_pause","change",s=>this._set({auto_pause:s.checked||void 0})),n("sky_follows",s=>this._set({enable_day_night_cycle:s==="hours"||void 0}));for(let[s,d]of[["sunrise_hour",6],["sunset_hour",20]])e(`#${s}`,"change",f=>{let g=f.value.trim(),p=parseInt(g);g?p>=0&&p<=23&&this._set({[s]:p===d?void 0:p}):this._set({[s]:void 0})});for(let[s]of et){let d=this.querySelector(`#${s}`);d&&(this.syncFill(d),d.addEventListener("input",()=>{let f=this.querySelector(`[data-out="${s}"]`);f&&(f.textContent=N.formatEngineValue(s,parseFloat(d.value))),this.syncFill(d)}),d.addEventListener("change",()=>this._updateEngineConfig(s,parseFloat(d.value))))}e(".reset-engine-btn","click",(s,d)=>{d.preventDefault(),this._resetEngineSettings()});for(let[s]of[...tt,...nt])e(`#${s}`,"input",d=>this.paintChip(d)),e(`#${s}`,"change",d=>this._updateColorConfig(s,d.value));this.querySelectorAll(".color-reset").forEach(s=>s.addEventListener("click",d=>{d.preventDefault(),this._resetColorConfig(s.dataset.target)})),e(".reset-colors-btn","click",(s,d)=>{d.preventDefault(),this._resetAllColors()});let u=this._config??{};this._bindSelect("plane_tags",[{value:"flight",label:"Flight number and aircraft"},{value:"route",label:"Route (Lisbon \u2192 Paris)"},{value:"both",label:"Route and flight number"},{value:"none",label:"None"}],u.show_flight_labels===!1?"none":u.flight_label||"flight",s=>{this._set(s==="none"?{show_flight_labels:!1}:{show_flight_labels:void 0,flight_label:s==="flight"?void 0:s})});let y=String(u.plane_speed??1);this._bindSelect("plane_speed",[{value:"1",label:"Usual"},{value:"0.5",label:"Half"},{value:"0.25",label:"A quarter"},...["1","0.5","0.25"].includes(y)?[]:[{value:y,label:`${y}\xD7 (set in YAML)`}]],y,s=>this._set({plane_speed:s==="1"?void 0:Number(s)})),e("#planes_on_load","change",s=>this._set({planes_on_load:s.checked||void 0})),this.mountActions(),e("#dev_mode","change",s=>this._set({dev_mode:s.checked||void 0})),this.querySelectorAll(".drw-btn").forEach(s=>s.addEventListener("click",()=>{let d=s.dataset.drawer;this.openDrawers.has(d)?this.openDrawers.delete(d):this.openDrawers.add(d),this.applyDrawer(d)})),this.syncNoteStatus()}applyDrawer(e){let n=this.openDrawers.has(e);this.querySelector(`[data-drawer="${e}"]`)?.setAttribute("aria-expanded",String(n));let r=this.querySelector(`[data-sec="${e}"] .drw-c`);r&&we(r,n,!!this.querySelector(".card-config[data-instant]"))}timeDateOptions(){return this._config?.hero==="clock"?[{value:"off",label:"Off"},{value:"date",label:"Date"}]:[{value:"off",label:"Off"},{value:"time",label:"Time"},{value:"date",label:"Date"},{value:"both",label:"Time and date"}]}timeDateValue(){let e=this._config??{};return e.hero==="clock"?e.show_date?"date":"off":e.show_clock&&e.show_date?"both":e.show_clock?"time":e.show_date?"date":"off"}sync(){let e=this.querySelector(".card-config");if(!e)return;let n=this._config??{},r=this.ctx(),i=e.hasAttribute("data-instant");e.toggleAttribute("data-all",r.all);let l=pe(e,_e,n,r,this.pinned,i),a=this.querySelector("[data-drawers]");a&&we(a,l,i);let u=(d,f)=>{let g=this.querySelector(d);g&&g.textContent!==f&&(g.textContent=f)},y=Qe(n);this.querySelectorAll('#preset input[type="radio"]').forEach(d=>{d.checked=d.value===y}),u('[data-help="preset"]',y?Xe(y).description:"Your own mix. Pick one to start again from it"),this.querySelector("[data-wall]")?.toggleAttribute("hidden",y!=="wall");let s=n.layout==="nightstand"?"nightstand":n.compact?"compact":"default";u('[data-help="layout"]',{default:"The sky, the temperature and your readings",compact:"One line, to sit under other cards",nightstand:"A bedside clock that goes dark at night"}[s]),u('[data-help="color_palette"]',n.color_palette==="theme"?"Your dashboard theme's colors, light or dark":"Colors from the weather and the time of day"),u('[data-help="hero"]',n.hero==="clock"?"The time leads, and the temperature starts the condition's line":"The temperature leads the card"),u('[data-help="sky_follows"]',n.enable_day_night_cycle?"Day and night change at the hours you set":"Dawn, day, dusk and night follow the sun"),u('[data-help="note"]',{off:"A line under the conditions: what's coming and what to wear",ai:"Your AI writes it from the forecast. The card grows a row to fit it",entity:"Text from a helper or a sensor of yours"}[r.note]);for(let d of Ye)u(`[data-summary="${d}"]`,this.summary(d));this.querySelector('[data-status="entity"]')?.toggleAttribute("hidden",!!n.entity||!!n.dev_mode),this.querySelector(".reset-engine-btn")?.toggleAttribute("data-off",!Object.keys(I).some(d=>J(n,`engine_settings.${d}`))),this.syncPlaceholder(),this.readingsEditor?.sync()}summary(e){let n=this._config??{};if(e==="readings"){let a=te(n),u=a.filter(y=>y.view).length;return[n.show_attributes===!1?"Off":a.filter(y=>!y.view).map(ge).join(", ")||"None",u?`${u} in the forecast view`:"",n.indoor_temperature_entity||n.indoor_humidity_entity?"Indoors":""].filter(Boolean).join(" \xB7 ")}if(e==="sky"){if(n.animate===!1)return"Still";let a=Object.keys(I).filter(y=>J(n,`engine_settings.${y}`)).length,u=Y(n)==="auto"?"amounts follow the weather":a?`${a} ${a===1?"amount":"amounts"} changed`:"amounts set by hand";return["Moving",n.spill_particles===!1?"inside the card":"",n.enable_day_night_cycle?"set hours":"",u].filter(Boolean).join(" \xB7 ")}if(e==="colors"){let a=Object.values(n.custom_colors||{}).filter(Boolean).length;return a?`${a} ${a===1?"color":"colors"} set`:"None set"}if(e==="planes")return n.flights_entity||"Needs a Flightradar24 sensor";let r=n.tap_action?.action??Re(n),i={forecast:"A tap opens the forecast","more-info":"A tap opens the weather's details",none:"A tap does nothing",navigate:"A tap goes to a view",url:"A tap opens a link",toggle:"A tap toggles",assist:"A tap opens Assist"},l=["hold_action","double_tap_action"].filter(a=>{let u=n[a]?.action;return u&&u!=="none"}).length;return(i[r]??"A tap runs an action")+(l?" \xB7 more gestures set":"")}syncPlaceholder(){let e=this.querySelector("#name"),n=this._config?.entity,r=n?this._hass?.states?.[n]?.attributes?.friendly_name:void 0;!e||typeof r!="string"||!r||e.getAttribute("placeholder")===r||(e.setAttribute("placeholder",r),e.placeholder=r)}_bindSelect(e,n,r,i){let l=this.querySelector(`#${e}`);if(!l)return;let a={options:n,current:r},u=()=>{l.options=a.options,l.value=a.current};this.refill[e]=(y,s)=>{a={options:y,current:s},customElements.get("ha-select")&&u()},customElements.get("ha-select")?u():customElements.whenDefined("ha-select").then(u),l.addEventListener("selected",(y=>{let s=y.detail?.value;!s||s===l.value&&s===a.current||(l.value=s,a={...a,current:s},i(s))})),l.addEventListener("closed",y=>y.stopPropagation())}mountActions(){let e=this.querySelector("#actions-editor");if(!e)return;let n=re(this._config,this._config?.entity),r=Re(this._config??{}),i=r==="more-info"?void 0:{action:r};B(e,this._hass,n.tap_action||!i?n:{...n,tap_action:i},l=>{let a={...l};i&&"tap_action"in l&&(a.tap_action=l.tap_action===void 0?{action:"more-info"}:l.tap_action.action===i.action?void 0:l.tap_action),this._set(a)},{forecast:"Forecast"})}syncNoteStatus(){this.updateNoteStatus()}async updateNoteStatus(){let e=this.querySelector("#note_status"),n=this._hass;if(!e)return;let r=this.noteSource()==="ai",i="",l=!1;r&&n&&(n.config?.components?.includes("ai_task")?this._config?.note_ai_task_entity||(this.noteDefault??(this.noteDefault=n.callWS({type:"ai_task/preferences/get"}).then(a=>a?.gen_data_entity_id??null).catch(()=>null)),await this.noteDefault||(i="You have no default AI Task. Pick one below, or set one in Settings \u2192 System \u2192 AI.",l=!0)):i="The note needs Home Assistant 2025.8 or later, with an AI integration that provides an AI Task, such as OpenAI or Anthropic."),e.dataset.text!==i&&(e.dataset.text=i,e.innerHTML=i?`${be}<span></span>`:"",i&&(e.querySelector("span").textContent=i),e.hidden=!i),l!==this.noDefaultAi&&(this.noDefaultAi=l,this.sync())}_set(e){this._patchConfig(e),this.sync()}_patchConfig(e){this._config||(this._config={});let n=this._config;for(let[r,i]of Object.entries(e))i===""||i===null||i===void 0?delete n[r]:n[r]=i;this._fireConfigChanged()}pickPreset(e){let n=Xe(e);if(n){for(let[r,i]of Object.entries(Ue))i.keys.some(l=>$e.includes(l))&&this.pinned.delete(r);this._patchConfig({...Object.fromEntries($e.map(r=>[r,void 0])),...n.options}),this.render(),this.querySelector(`#preset input[value="${e}"]`)?.focus()}}_updateConfig(e,n){this._set({[e]:n})}_updateEngineConfig(e,n){let i={...(this._config??(this._config={})).engine_settings||{}};n===I[e]?delete i[e]:i[e]=n,this._set({engine_settings:Object.keys(i).length?i:void 0,...this.staysManual(i)})}staysManual(e){let n=this._config??{};return n.engine_mode===void 0&&!xe({...n,engine_settings:e})?{engine_mode:"manual"}:{}}_resetEngineSettings(){for(let[e]of et){let n=this.querySelector(`#${e}`),r=I[e];n&&(n.value=String(r),this.syncFill(n));let i=this.querySelector(`[data-out="${e}"]`);i&&(i.textContent=N.formatEngineValue(e,r))}this._set({engine_settings:void 0,...this.staysManual({})}),this.querySelector("#windSpeed")?.focus()}syncFill(e){let n=Number(e.min),r=Number(e.max),i=Number(e.value);e.style.setProperty("--fill",`${Math.max(0,Math.min(100,(i-n)/(r-n)*100))}%`)}static formatEngineValue(e,n){return e==="cloudCount"?String(Math.round(n)):e==="splashBounce"?`${Math.round(n)}%`:`${n.toFixed(1)}\xD7`}static hex(e){if(e){if(/^#[0-9a-f]{6}$/i.test(e))return e.toLowerCase();if(/^#[0-9a-f]{3}$/i.test(e))return`#${[...e.slice(1)].map(n=>n+n).join("")}`.toLowerCase();try{let n=document.createElement("canvas").getContext("2d");if(!n)return;n.fillStyle="#000",n.fillStyle=e;let r=String(n.fillStyle);if(/^#[0-9a-f]{6}$/i.test(r))return r;let i=r.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);return i?`#${i.slice(1,4).map(l=>Number(l).toString(16).padStart(2,"0")).join("")}`:void 0}catch{return}}}syncColorInputs(){let e=this._config?.custom_colors||{},n=this._config?.color_palette==="theme"?"var(--card-background-color, #fff)":N.DEFAULT_COLORS.sunny_bg;for(let[r]of[...tt,...nt]){let i=this.querySelector(`#${r}`);i&&(i.value=N.hex(e[r])??N.DEFAULT_COLORS[r],i.parentElement.style.setProperty("--sky",n),this.paintChip(i))}this._syncColorResets()}paintChip(e){let n=N.hex(e.value);n&&e.parentElement.style.setProperty("--c",n)}_updateColorConfig(e,n){let r={...this._config?.custom_colors||{},[e]:n};this._set({custom_colors:r}),this._syncColorResets()}_syncColorResets(){let e=this._config?.custom_colors||{};this.querySelectorAll(".color-reset").forEach(n=>{n.toggleAttribute("data-off",!e[n.dataset.target])}),this.querySelector("#reset-colors-btn")?.toggleAttribute("data-off",!Object.values(e).some(Boolean))}_resetColorConfig(e){let n={...this._config?.custom_colors||{}};delete n[e],this._set({custom_colors:Object.keys(n).length?n:void 0});let r=this.querySelector(`#${e}`);r&&(r.value=N.DEFAULT_COLORS[e]||r.value,this.paintChip(r),r.focus()),this._syncColorResets()}_resetAllColors(){this._set({custom_colors:void 0}),this.syncColorInputs()}_fireConfigChanged(){let e=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(e)}set hass(e){this._hass=e,this._initialized&&this.isConnected&&this.updateEntityPickers()}updateEntityPickers(){if(!this._hass||!this.isConnected||!this._initialized)return;this.syncNoteStatus(),this.syncPlaceholder(),se(this.querySelector("#actions-editor"),this._hass),this.readingsEditor?.hass(this._hass),[{id:"#entity",domains:["weather"]},{id:"#outdoor_sensor_entity",domains:["sensor"]},{id:"#feels_like_entity",domains:["sensor"]},{id:"#indoor_temperature_entity",domains:["sensor"]},{id:"#indoor_humidity_entity",domains:["sensor"]},{id:"#sun_entity",domains:["sun"]},{id:"#moon_entity",domains:["sensor"]},{id:"#flights_entity",domains:["sensor"]},{id:"#alarm_entity",domains:["sensor","input_datetime"]},{id:"#night_sensor",domains:["sensor"]},{id:"#note_entity",domains:["sensor","input_text"]},{id:"#note_ai_task_entity",domains:["ai_task"]},{id:"#note_calendar",domains:["calendar"]}].forEach(({id:n,domains:r})=>{let i=this.querySelector(n);i&&(i.hass=this._hass,i.includeDomains=r)})}};N.DEFAULT_COLORS={sunny_bg:U("sunny","day").mid,rainy_bg:U("rainy","day").mid,snowy_bg:U("snowy","day").mid,stormy_bg:U("stormy","day").mid,windy_bg:U("windy","day").mid,cloudy_bg:U("cloudy","day").mid,fog_color:"#e0e0e0",text_color:ee(W(De)),temperature_color:ee(W(De)),sun_color:"#ffd67a",rain_color:"#deeaff",snow_color:"#f7fbff"};var Fe=N;var hn=0,He=class extends HTMLElement{constructor(){super(...arguments);this._config={};this._initialized=!1;this.uid=++hn;this.all=le();this.pinned=new Set;this.placeOn=!1;this.placeKept={}}setConfig(e){let n=JSON.stringify(e)===JSON.stringify(this._config);this._config={...e},this._initialized&&!n&&this._render()}set hass(e){this._hass=e,this._initialized&&this.isConnected&&(this._updatePickers(),se(this.querySelector("#st-actions"),e))}async connectedCallback(){this._config=this._config||{},await this._ensureEntityPickerLoaded(),this._render(),this._initialized=!0,this._hass&&this._updatePickers()}disconnectedCallback(){this.pinned.clear(),this.innerHTML=""}async _ensureEntityPickerLoaded(){if(!customElements.get("ha-entity-picker"))try{let n=await(await window.loadCardHelpers()).createCardElement({type:"entities",entities:[]}),r=i=>{(i.reason?.message?.includes("localize")||i.reason?.message?.includes("hass"))&&i.preventDefault()};window.addEventListener("unhandledrejection",r);try{await n.constructor.getConfigElement?.()}catch{}setTimeout(()=>window.removeEventListener("unhandledrejection",r),2e3)}catch{}}ctx(){return{all:this.all,place:this.placeOn,note:"off",noDefaultAi:!1}}_render(){let e=this._config;this.placeOn=this.placeOn||["latitude","longitude","time_zone"].some(r=>e[r]!==void 0&&e[r]!==""),this.innerHTML=`
            <div class="card-config" data-instant>
              ${ue(this.all)}
              ${$("sun","Sun",[c("sun_entity",L("sun-picker","Sun entity",e.sun_entity)),c("layout",K("layout","Layout",[["regular","Regular"],["compact","Compact"]],e.compact?"compact":"regular",this.uid)),c("color_palette",K("color_palette","Colors",[["default","Sky"],["theme","Theme"]],e.color_palette==="theme"?"theme":"default",this.uid))].join(""))}
              ${$("shows","What it shows",[c("title",T({id:"title",label:"Title (optional)",value:e.title,hint:"Above the next sunrise or sunset"})),c("show_header",E("show_header","Next sunrise or sunset",e.show_header!==!1,"The headline time and the countdown to it")),c("show_details",E("show_details","Details",e.show_details!==!1,"First and last light, solar noon, daylight and the moon")),c("daylight_delta",O("daylight_delta","Compare with","How much earlier or later the sunrise or sunset is, and how much longer or shorter the day")),c("moon_entity",L("moon-picker","Moon phase",e.moon_entity,"The Moon integration's sensor")),c("direction",O("direction","Direction","From your location, the sun runs right to left south of the equator"))].join(""))}
              ${$("sky","Sky and place",[c("weather_entity",L("weather-picker","Share the sky of",e.weather_entity,"Without one, the sky of the weather card on the same sun")),c("another_place",E("another_place","Another place",this.placeOn,"Its sun, from its coordinates, and its times in its time zone")),c("place_fields",ne(e))].join(""))}
              ${$("interactions","Interactions",c("actions",'<div id="st-actions"></div>'))}
              ${$("dev","",c("dev_mode",E("dev_mode","Simulated weather",!!e.dev_mode,"The dev card's sun and sky, with no sun entity needed")))}
            </div>
            <style>${Z()}${oe}</style>
        `,this._updatePickers(),this._attachListeners(),B(this.querySelector("#st-actions"),this._hass,re(this._config,this._config.sun_entity),r=>this._update(r)),this.sync();let n=this.querySelector(".card-config");j(()=>j(()=>n?.removeAttribute("data-instant")))}_updatePickers(){let e=[{id:"#sun-picker",domains:["sun"]},{id:"#moon-picker",domains:["sensor"]},{id:"#weather-picker",domains:["weather"]}];for(let n of e){let r=this.querySelector(n.id);r&&(this._hass&&(r.hass=this._hass),r.includeDomains=n.domains)}}_attachListeners(){this.querySelector("#all_settings")?.addEventListener("change",n=>{this.all=!!n.target.checked,de(this.all),this.sync();let r=this.querySelector("[data-live]");r&&(r.textContent=he(this.all,!1))}),this.querySelector("#sun-picker")?.addEventListener("value-changed",n=>{this._update({sun_entity:n.detail.value||void 0})}),this.querySelector("#moon-picker")?.addEventListener("value-changed",n=>{this._update({moon_entity:n.detail.value||void 0})}),this.querySelector("#weather-picker")?.addEventListener("value-changed",n=>{this._update({weather_entity:n.detail.value||void 0})}),this.querySelector("#title")?.addEventListener("input",n=>{this._update({title:n.target.value||void 0})}),me(this,"layout",n=>this._update({compact:n==="compact"||void 0})),me(this,"color_palette",n=>this._update({color_palette:n==="theme"?"theme":void 0}));let e=(n,r)=>{this.querySelector(`#${n}`)?.addEventListener("change",i=>this._update(r(i.target.checked)))};e("show_header",n=>({show_header:n?void 0:!1})),e("show_details",n=>({show_details:n?void 0:!1})),e("dev_mode",n=>({dev_mode:n||void 0})),Q(this,"daylight_delta",[{value:"day",label:"Yesterday"},{value:"week",label:"Last week"},{value:"month",label:"Last month"},{value:"none",label:"Nothing"}],this._config.daylight_delta??"day",n=>this._update({daylight_delta:n==="day"?void 0:n})),Q(this,"direction",[{value:"auto",label:"From your location"},{value:"left_to_right",label:"Left to right"},{value:"right_to_left",label:"Right to left"}],this._config.direction??"auto",n=>this._update({direction:n==="auto"?void 0:n})),this.querySelector("#another_place")?.addEventListener("change",n=>{if(this.placeOn=!!n.target.checked,this.placeOn){Object.keys(this.placeKept).length?this._update(this.placeKept):this.sync();return}let r=this._config;this.placeKept=Object.fromEntries(["latitude","longitude","time_zone"].filter(i=>r[i]!==void 0).map(i=>[i,r[i]])),this.pinned.delete("place_fields"),this._update({latitude:void 0,longitude:void 0,time_zone:void 0})}),ie(this,n=>this._update(n))}sync(){let e=this.querySelector(".card-config");if(!e)return;let n=this._config;pe(e,$t,n,this.ctx(),this.pinned,e.hasAttribute("data-instant"));let r=(i,l)=>{let a=this.querySelector(i);a&&a.textContent!==l&&(a.textContent=l)};r('[data-help="layout"]',n.compact?"One line: the next sunrise or sunset beside the sun's path":"The sun's path through the day, the next sunrise or sunset, and the day's details"),r('[data-help="color_palette"]',n.color_palette==="theme"?"Your dashboard theme's colors, light or dark":"The sky of the weather it shares, at the time of day")}_update(e){let n={...this._config,...e};for(let r of Object.keys(n))(n[r]===void 0||n[r]==="")&&delete n[r];this._config=n,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})),this.sync()}};var rt=["0","3","5","7","10"].map(t=>({value:t,label:t==="0"?"No days":`${t} days`})),pn=0,Pe=class extends HTMLElement{constructor(){super(...arguments);this._config={};this._initialized=!1;this.uid=++pn;this.all=le();this.pinned=new Set;this.placeOn=!1;this.placeKept={}}setConfig(e){let n=JSON.stringify(e)===JSON.stringify(this._config);this._config={...e},this._initialized&&!n&&this._render()}set hass(e){this._hass=e,this._initialized&&this.isConnected&&(this._updatePickers(),se(this.querySelector("#fc-actions"),e))}async connectedCallback(){await this._ensureEntityPickerLoaded(),this._render(),this._initialized=!0,this._hass&&this._updatePickers()}disconnectedCallback(){this.pinned.clear(),this.innerHTML=""}async _ensureEntityPickerLoaded(){if(!customElements.get("ha-entity-picker"))try{let n=await(await window.loadCardHelpers()).createCardElement({type:"entities",entities:[]}),r=i=>{(i.reason?.message?.includes("localize")||i.reason?.message?.includes("hass"))&&i.preventDefault()};window.addEventListener("unhandledrejection",r);try{await n.constructor.getConfigElement?.()}catch{}setTimeout(()=>window.removeEventListener("unhandledrejection",r),2e3)}catch{}}ctx(){return{all:this.all,place:this.placeOn,note:"off",noDefaultAi:!1}}_render(){let e=this._config;this.placeOn=this.placeOn||["latitude","longitude","time_zone"].some(r=>e[r]!==void 0&&e[r]!==""),this.innerHTML=`
            <div class="card-config" data-instant>
              ${ue(this.all)}
              ${$("forecast","Forecast",[c("entity",L("weather-picker","Weather entity",e.entity)),c("layout",K("layout","Layout",[["card","Card"],["strip","Strip"]],e.compact?"strip":"card",this.uid)),c("color_palette",K("color_palette","Colors",[["default","Sky"],["theme","Theme"]],e.color_palette==="theme"?"theme":"default",this.uid))].join(""))}
              ${$("shows","What it shows",[c("show_hours",E("show_hours","The hours",e.show_hours!==!1,"The hourly row and its chips: drag it, and the sky goes there")),c("forecast_days",O("forecast_days","Days")),c("forecast_metric",O("forecast_metric","Hours open on","Under the hours, a button for each value your forecast reports")),c("forecast_graph",O("forecast_graph","Graph")),c("weather_effects",E("weather_effects","Weather",!!e.weather_effects,"Rain, snow, fog, wind and lightning behind the forecast, going to the hour you drag to"))].join(""))}
              ${$("sky","Sun and place",[c("sun_entity",L("sun-picker","Sun",e.sun_entity,"Sets the sky's time of day and the icons' light. Usually sun.sun")),c("another_place",E("another_place","Weather for another place",this.placeOn,"Its sun, and its times in its time zone")),c("place_fields",ne(e))].join(""))}
              ${$("interactions","Interactions",c("actions",'<div id="fc-actions"></div>'))}
              ${$("dev","",c("dev_mode",E("dev_mode","Simulated weather",!!e.dev_mode,"The dev card's weather, with no weather entity needed")))}
            </div>
            <style>${Z()}${oe}</style>
        `,this._updatePickers(),this._bind(),this.sync();let n=this.querySelector(".card-config");j(()=>j(()=>n?.removeAttribute("data-instant")))}_bind(){let e=this._config;this.querySelector("#all_settings")?.addEventListener("change",a=>{this.all=!!a.target.checked,de(this.all),this.sync();let u=this.querySelector("[data-live]");u&&(u.textContent=he(this.all,!1))}),this.querySelector("#weather-picker")?.addEventListener("value-changed",a=>{this._update({entity:a.detail.value||void 0})}),this.querySelector("#sun-picker")?.addEventListener("value-changed",a=>{this._update({sun_entity:a.detail.value||void 0})}),me(this,"layout",a=>this._update({compact:a==="strip"||void 0})),me(this,"color_palette",a=>this._update({color_palette:a==="theme"?"theme":void 0}));let n=(a,u)=>{this.querySelector(`#${a}`)?.addEventListener("change",y=>this._update(u(y.target.checked)))};n("show_hours",a=>({show_hours:a?void 0:!1})),n("weather_effects",a=>({weather_effects:a||void 0})),n("dev_mode",a=>({dev_mode:a||void 0})),Q(this,"forecast_metric",it,e.forecast_metric??"temp",a=>this._update({forecast_metric:a==="temp"?void 0:a})),Q(this,"forecast_graph",ot,e.forecast_graph??"line",a=>this._update({forecast_graph:a==="line"?void 0:a}));let r=String(e.forecast_days??7),i=rt.some(a=>a.value===r)||!Number.isFinite(Number(r))?rt:[...rt,{value:r,label:`${r} day${r==="1"?"":"s"}`}].sort((a,u)=>Number(a.value)-Number(u.value));Q(this,"forecast_days",i,r,a=>this._update({forecast_days:a==="7"?void 0:Number(a)})),this.querySelector("#another_place")?.addEventListener("change",a=>{if(this.placeOn=!!a.target.checked,this.placeOn){Object.keys(this.placeKept).length?this._update(this.placeKept):this.sync();return}let u=this._config;this.placeKept=Object.fromEntries(["latitude","longitude","time_zone"].filter(y=>u[y]!==void 0).map(y=>[y,u[y]])),this.pinned.delete("place_fields"),this._update({latitude:void 0,longitude:void 0,time_zone:void 0})}),ie(this,a=>this._update(a));let l=re(this._config,this._config.entity);B(this.querySelector("#fc-actions"),this._hass,l.tap_action?l:{...l,tap_action:{action:"forecast"}},a=>this._update(a.tap_action===void 0&&"tap_action"in a?{...a,tap_action:{action:"more-info"}}:a.tap_action?.action==="forecast"?{...a,tap_action:void 0}:a),{forecast:"Forecast"})}sync(){let e=this.querySelector(".card-config");if(!e)return;let n=this._config;pe(e,Rt,n,this.ctx(),this.pinned,e.hasAttribute("data-instant"));let r=(i,l)=>{let a=this.querySelector(i);a&&a.textContent!==l&&(a.textContent=l)};r('[data-help="layout"]',n.compact?"The hours alone, to sit under the compact weather card":"The hours and the week ahead"),r('[data-help="color_palette"]',n.color_palette==="theme"?"Your dashboard theme's colors, light or dark":"Colors from the weather and the time of day")}_updatePickers(){let e=[{id:"#weather-picker",domains:["weather"]},{id:"#sun-picker",domains:["sun"]}];for(let n of e){let r=this.querySelector(n.id);r&&(this._hass&&(r.hass=this._hass),r.includeDomains=n.domains)}}_update(e){let n={...this._config,...e};for(let r of Object.keys(n))(n[r]===void 0||n[r]==="")&&delete n[r];this._config=n,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})),this.sync()}};customElements.get("animated-weather-card-editor")||customElements.define("animated-weather-card-editor",Fe);customElements.get("animated-sun-tracker-editor")||customElements.define("animated-sun-tracker-editor",He);customElements.get("animated-forecast-card-editor")||customElements.define("animated-forecast-card-editor",Pe);})();
