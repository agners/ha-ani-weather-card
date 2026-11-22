"use strict";(()=>{var E={windSpeed:2,rainCount:1,leafCount:1,snowCount:1,cloudBaseSize:1,cloudCount:3,splashBounce:80};var se=o=>`
        ${o} ha-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: var(--mdc-icon-size, 24px);
          height: var(--mdc-icon-size, 24px);
          vertical-align: middle;
        }
`;var ae=()=>`
${se(".card-config")}
        .card-config {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 4px 0;
          color: var(--primary-text-color);
        }

        /* \u2500\u2500 Sections (outlined expansion panels) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .section {
          border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
          border-radius: var(--ha-card-border-radius, 12px);
          overflow: hidden;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 14px;
          min-height: 48px;
          padding: 0 12px 0 16px;
          cursor: pointer;
          user-select: none;
          transition: background-color 0.15s ease;
        }
        .section-header:hover {
          background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        }
        .section-header:focus-visible {
          outline: 2px solid var(--primary-color);
          outline-offset: -2px;
        }
        .section-header ha-icon {
          --mdc-icon-size: 20px;
          color: var(--secondary-text-color);
          flex-shrink: 0;
        }
        .section-header h3 {
          flex: 1;
          margin: 0;
          font-size: 15px;
          font-weight: 500;
          line-height: 20px;
          color: var(--primary-text-color);
        }
        .section-header .expand-icon {
          transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .section.expanded .expand-icon {
          transform: rotate(180deg);
        }

        .section-content {
          display: none;
          padding: 4px 16px 16px;
        }
        .section.expanded .section-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .section-note {
          margin: 0 0 8px;
          font-size: 13px;
          line-height: 18px;
          color: var(--secondary-text-color);
        }

        .group-title {
          margin: 12px 0 2px;
          font-size: 12px;
          font-weight: 500;
          line-height: 16px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--secondary-text-color);
        }
        .group-title:first-child { margin-top: 4px; }

        /* \u2500\u2500 Options \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .option {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin: 4px 0;
        }

        /* Setting rows: label on the left, switch on the right */
        .switch-label {
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          min-height: 40px;
          cursor: pointer;
          user-select: none;
        }
        .switch-label span {
          font-size: 14px;
          line-height: 20px;
          color: var(--primary-text-color);
        }

        /* Dependent settings sit indented under their parent */
        .sub-option {
          margin-top: -4px;
          padding-left: 20px;
        }

        /* The four readings, two a line */
        /* The readings' table (readings-editor.ts): one bordered row per reading, its tools at its foot */
        .readings-table { display: grid; gap: 10px; margin-bottom: 12px; }
        .rd-list { display: grid; gap: 8px; }
        .rd-row {
          display: grid;
          gap: 8px;
          padding: 12px;
          border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
          border-radius: 12px;
        }
        .rd-fields { display: grid; gap: 8px; min-width: 0; }
        .rd-fields ha-select, .rd-fields ha-entity-picker, .rd-fields ha-input, .rd-fields ha-textfield { display: block; width: 100%; }
        .rd-tools { display: flex; align-items: center; gap: 6px; }

        .rd-btn {
          display: grid; place-items: center; width: 32px; height: 32px; padding: 0;
          border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3)); border-radius: 8px;
          background: none; color: var(--primary-text-color); font: inherit; font-size: 15px; cursor: pointer;
        }
        .rd-btn:disabled { opacity: 0.35; cursor: default; }
        .rd-add {
          justify-self: start; padding: 8px 14px;
          border: 1px dashed var(--divider-color, rgba(127, 127, 127, 0.4)); border-radius: 10px;
          background: none; color: var(--primary-color); font: inherit; font-weight: 500; cursor: pointer;
        }
        .rd-btn:focus-visible, .rd-add:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
        .rd-note, .rd-view-fixed { margin: 0; font-size: 12px; line-height: 16px; color: var(--secondary-text-color); }
        /* View only leads the tools; the moves and remove keep the row's end */
        .rd-tools .rd-view, .rd-tools .rd-view-fixed { margin-right: auto; }
        .rd-warn { margin: 0; font-size: 12px; line-height: 16px; color: var(--warning-color, #b26a00); }
        [data-levels-for][hidden] { display: none; }

        /* \u2500\u2500 Weather engine sliders \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .engine-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 16px 24px;
          margin: 4px 0 12px;
        }
        .engine-option {
          display: grid;
          grid-template-columns: 1fr auto;
          grid-template-areas:
            "label value"
            "range range";
          align-items: baseline;
          row-gap: 6px;
        }
        .engine-option label {
          grid-area: label;
          font-size: 14px;
          color: var(--primary-text-color);
        }
        .engine-option .value-display {
          grid-area: value;
          font-size: 13px;
          font-weight: 500;
          font-variant-numeric: tabular-nums;
          color: var(--secondary-text-color);
        }
        .engine-option input[type="range"] {
          grid-area: range;
          width: 100%;
          margin: 0;
          accent-color: var(--primary-color);
          cursor: pointer;
        }

        /* \u2500\u2500 Colors \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .color-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 8px 24px;
          margin: 4px 0 12px;
        }
        .color-option {
          display: grid;
          grid-template-columns: 32px 1fr auto;
          align-items: center;
          gap: 12px;
          min-height: 40px;
        }
        .color-option input[type="color"] {
          order: -1;
          width: 32px;
          height: 32px;
          padding: 0;
          border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
          border-radius: 8px;
          background: none;
          cursor: pointer;
        }
        .color-option input[type="color"]::-webkit-color-swatch-wrapper { padding: 0; }
        .color-option input[type="color"]::-webkit-color-swatch { border: none; border-radius: 7px; }
        .color-option input[type="color"]::-moz-color-swatch { border: none; border-radius: 7px; }
        .color-option label {
          font-size: 14px;
          color: var(--primary-text-color);
        }

        /* \u2500\u2500 Buttons: quiet text buttons, HA style \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .color-reset,
        .reset-engine-btn,
        .reset-colors-btn {
          align-self: flex-start;
          padding: 8px 12px;
          border: none;
          border-radius: 8px;
          background: none;
          font: inherit;
          font-size: 14px;
          font-weight: 500;
          color: var(--primary-color);
          cursor: pointer;
          transition: background-color 0.15s ease;
        }
        /* Text buttons align their label, not their hit area, with the content edge */
        .reset-engine-btn,
        .reset-colors-btn { margin-left: -12px; }
        .color-reset {
          padding: 6px 8px;
          margin-right: -8px;
          font-size: 13px;
        }
        .color-reset:hover,
        .reset-engine-btn:hover,
        .reset-colors-btn:hover {
          background: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
        }
        .color-reset:focus-visible,
        .reset-engine-btn:focus-visible,
        .reset-colors-btn:focus-visible {
          outline: 2px solid var(--primary-color);
          outline-offset: 1px;
        }
`;var ke={sunny:{top:[.445,.13,256],mid:[.495,.125,250],bottom:[.575,.11,238],glow:[.88,.08,218],glowAlpha:.45,overcast:0},"partly-cloudy":{top:[.445,.1,254],mid:[.495,.092,248],bottom:[.565,.08,240],glow:[.88,.07,220],glowAlpha:.36,overcast:.25},windy:{top:[.445,.115,244],mid:[.495,.105,236],bottom:[.565,.09,222],glow:[.95,.05,200],glowAlpha:.3,overcast:.1},cloudy:{top:[.43,.026,250],mid:[.475,.025,248],bottom:[.53,.024,244],glow:[.86,.016,250],glowAlpha:.28,overcast:.8},foggy:{top:[.44,.014,212],mid:[.48,.013,214],bottom:[.53,.012,218],glow:[.88,.01,210],glowAlpha:.3,overcast:.9},"light-rain":{top:[.42,.034,246],mid:[.48,.032,243],bottom:[.53,.03,238],glow:[.82,.02,246],glowAlpha:.22,overcast:.85},rainy:{top:[.37,.032,248],mid:[.43,.032,244],bottom:[.48,.03,240],glow:[.78,.02,246],glowAlpha:.18,overcast:.9},pouring:{top:[.3,.03,250],mid:[.36,.031,246],bottom:[.41,.03,242],glow:[.72,.02,248],glowAlpha:.14,overcast:1},stormy:{top:[.26,.032,280],mid:[.31,.034,272],bottom:[.36,.034,262],glow:[.7,.03,280],glowAlpha:.14,overcast:1},snowy:{top:[.45,.04,238],mid:[.495,.036,234],bottom:[.55,.03,228],glow:[.93,.02,230],glowAlpha:.32,overcast:.7},"snowy-rainy":{top:[.44,.036,240],mid:[.49,.033,236],bottom:[.54,.03,232],glow:[.86,.02,236],glowAlpha:.24,overcast:.85},sleety:{top:[.42,.042,258],mid:[.47,.04,252],bottom:[.52,.036,246],glow:[.84,.024,252],glowAlpha:.22,overcast:.85},"snowy-stormy":{top:[.3,.04,266],mid:[.35,.04,260],bottom:[.4,.038,252],glow:[.74,.026,260],glowAlpha:.14,overcast:1},"sleety-stormy":{top:[.28,.042,284],mid:[.33,.042,276],bottom:[.38,.04,266],glow:[.72,.03,280],glowAlpha:.14,overcast:1},"clear-night":{top:[.2,.045,272],mid:[.25,.052,266],bottom:[.31,.055,256],glow:[.86,.03,250],glowAlpha:.16,overcast:0}},le=(o,r,t)=>Math.min(r,Math.max(o,t)),$=(o,r,t)=>o+(r-o)*t;function xe(o,r,t){let i=(r-o+540)%360-180;return(o+i*t+360)%360}function L(o,r,t){let i=([d,h,v])=>[d,h*Math.cos(v*Math.PI/180),h*Math.sin(v*Math.PI/180)],[n,a,e]=i(o),[s,l,c]=i(r),u=$(n,s,t),p=$(a,l,t),x=$(e,c,t),y=Math.hypot(p,x),b=y<1e-6?o[2]:(Math.atan2(x,p)*180/Math.PI+360)%360;return[u,y,b]}function J([o,r,t]){let i=t*Math.PI/180,n=r*Math.cos(i),a=r*Math.sin(i),e=(o+.3963377774*n+.2158037573*a)**3,s=(o-.1055613458*n-.0638541728*a)**3,l=(o-.0894841775*n-1.291485548*a)**3;return[4.0767416621*e-3.3077115913*s+.2309699292*l,-1.2684380046*e+2.6097574011*s-.3413193965*l,-.0041960863*e-.7034186147*s+1.707614701*l]}var Se=o=>o<=.0031308?12.92*o:1.055*Math.pow(o,1/2.4)-.055;function T(o){let r=i=>i.every(n=>n>=-1e-4&&n<=1.0001),t=J(o);if(!r(t)){let i=0,n=o[1];for(let a=0;a<24;a++){let e=(i+n)/2;r(J([o[0],e,o[2]]))?i=e:n=e}t=J([o[0],i,o[2]])}return t.map(i=>Se(le(0,1,i)))}var ce=o=>Math.round(le(0,1,o)*255);function O(o){return"#"+o.map(r=>ce(r).toString(16).padStart(2,"0")).join("")}function re(o,r){return`rgba(${o.map(ce).join(", ")}, ${Number(r.toFixed(3))})`}function X(o,r){return[.15+(o[0]-.15)*.42,o[1]*$(.75,.5,r),xe(o[2],262,.45)]}function Ce(o,r){let t=ke[o],i=1-t.overcast*.7,n={top:t.top,mid:t.mid,bottom:t.bottom,glow:t.glow,glowAlpha:t.glowAlpha,scrimAlpha:$(.46,.28,t.overcast)};if(o==="clear-night"){if(r==="dawn"||r==="dusk"){let a=r==="dawn"?[.4,.09,20]:[.38,.1,40];return{...n,bottom:L(t.bottom,a,.45),glowAlpha:.2,scrimAlpha:.22}}return{...n,scrimAlpha:.2}}switch(r){case"night":return{top:X(t.top,t.overcast),mid:X(t.mid,t.overcast),bottom:X(t.bottom,t.overcast),glow:[.86,.03,250],glowAlpha:$(.14,.06,t.overcast),scrimAlpha:.2};case"dusk":return{top:L(t.top,[t.top[0]*.8,.075,292],.5*i),mid:L(t.mid,[t.mid[0]*.88,.065,350],.42*i),bottom:L(t.bottom,[t.bottom[0]*.92,.115,52],.72*i),glow:L(t.glow,[.82,.13,58],i),glowAlpha:$(t.glowAlpha,.6,i*.6),scrimAlpha:n.scrimAlpha+.04};case"dawn":return{top:L(t.top,[t.top[0]*.95,t.top[1]*.85,262],.4*i),mid:L(t.mid,[t.mid[0]*.95,.05,330],.3*i),bottom:L(t.bottom,[t.bottom[0]*.95,.085,32],.62*i),glow:L(t.glow,[.88,.09,40],i),glowAlpha:$(t.glowAlpha,.5,i*.5),scrimAlpha:n.scrimAlpha+.04};default:return n}}function Le(o){return[.16,Math.min(.04,o[1]*.6),o[2]]}function M(o,r){let t=Ce(o,r);return{top:O(T(t.top)),mid:O(T(t.mid)),bottom:O(T(t.bottom)),glow:re(T(t.glow),t.glowAlpha),scrim:re(T(Le(t.top)),t.scrimAlpha)}}var Q=[.985,.006,250];var Ae={"--awc-sky-top":"#3b5f8c","--awc-sky-mid":"#4a6d99","--awc-sky-bottom":"#5a7ba3","--awc-sky-glow":"rgba(0, 0, 0, 0)","--awc-sky-scrim":"rgba(0, 0, 0, 0)","--weather-sun-primary":"#ffd67a","--weather-sun-secondary":"#ffb547","--weather-sun-glow":"rgba(255, 214, 140, 0.55)","--weather-sun-halo":"rgba(255, 214, 140, 0.24)","--awc-cloud-far":"rgba(214, 226, 242, 0.85)","--awc-cloud-mid":"rgba(232, 239, 248, 0.92)","--awc-cloud-near":"rgba(248, 250, 253, 0.96)"},Te=Object.keys(Ae),Ge=Te.filter(o=>o.startsWith("--awc-sky-"));function g(o){return o==null?"":String(o).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function _(o){let r=customElements.get("ha-input")||!customElements.get("ha-textfield")?"ha-input":"ha-textfield",{id:t,label:i,value:n,placeholder:a,hint:e,type:s,min:l,max:c,step:u}=o,p=[`id="${g(t)}"`,`label="${g(i)}"`,`value="${g(n)}"`,a?`placeholder="${g(a)}"`:"",s?`type="${s}"`:"",l!==void 0?`min="${l}"`:"",c!==void 0?`max="${c}"`:"",u!==void 0?`step="${u}"`:"",e?r==="ha-input"?`hint="${g(e)}"`:`helper="${g(e)}" helperPersistent`:""].filter(Boolean);return`<${r} ${p.join(" ")}></${r}>`}function Z(o,r,t){if(o?.localize)try{let i=o.localize(r);if(i&&i!==r)return i}catch{}return t}var $e=["humidity","wind","pressure","sun","uv","rain"],Fe=["humidity","wind","pressure","sun"];function de(o){let r=o.metrics,t=Array.isArray(r)?r:typeof r=="string"?r.split(","):null;if(!t)return[...Fe];let i=[];for(let n of t){let a=String(n).trim().toLowerCase();$e.includes(a)&&!i.includes(a)&&i.push(a)}return i}var ee=["humidity","wind","pressure","sun","uv","rain","aqi","feels_like","dew_point","visibility","cloud_cover","gust","uv_max","rain_event","rain_week","rain_month","rain_year","sensor"],te={humidity:"humidity",wind:"wind_speed",pressure:"pressure",uv:"uv_index",feels_like:"apparent_temperature",dew_point:"dew_point",visibility:"visibility",cloud_cover:"cloud_coverage",gust:"wind_gust_speed"},F=["uv_max","rain_event","rain_week","rain_month","rain_year"],G=o=>o!=="sun"&&!Object.prototype.hasOwnProperty.call(te,o),ue=["humidity","wind","pressure","sun"],he=o=>typeof o=="string"&&ee.includes(o),B=o=>typeof o=="string"&&o.trim()?o.trim():void 0;function He(o){if(typeof o=="string"){let l=o.trim().toLowerCase();return he(l)?{type:l,view:F.includes(l)}:null}if(!o||typeof o!="object")return null;let r=o,t=typeof r.type=="string"?r.type.trim().toLowerCase():"";if(!he(t))return null;let i={type:t,view:r.view===!0||F.includes(t)},n=B(r.entity);n&&(i.entity=n);let a=B(r.direction_entity);t==="wind"&&a&&(i.direction_entity=a);let e=B(r.rate_entity);t==="rain"&&e&&(i.rate_entity=e);let s=B(r.name);return s&&(i.name=s),i}function pe(o){let r=o.readings;if(Array.isArray(r))return r.map(He).filter(a=>!!a);let t=[],i=a=>{let e=Object.fromEntries(Object.entries(a).filter(([,s])=>s!==void 0&&s!==""));t.push({...e,view:!!a.view||F.includes(a.type)})},n=de(o);for(let a of n){if(a==="sun"){o.show_sun!==!1&&i({type:"sun"});continue}a==="humidity"?i({type:"humidity",entity:o.humidity_sensor_entity}):a==="wind"?i({type:"wind",entity:o.wind_speed_sensor_entity,direction_entity:o.wind_direction_sensor_entity}):a==="pressure"?i({type:"pressure",entity:o.pressure_sensor_entity}):a==="uv"?i({type:"uv",entity:o.uv_entity}):a==="rain"&&i({type:"rain",entity:o.rain_entity,rate_entity:o.rain_rate_entity})}!n.includes("wind")&&(o.wind_speed_sensor_entity||o.wind_direction_sensor_entity)&&i({type:"wind",entity:o.wind_speed_sensor_entity,direction_entity:o.wind_direction_sensor_entity,view:!0}),!n.includes("uv")&&o.uv_entity&&i({type:"uv",entity:o.uv_entity,view:!0}),!n.includes("rain")&&(o.rain_entity||o.rain_rate_entity)&&i({type:"rain",entity:o.rain_entity,rate_entity:o.rain_rate_entity,view:!0}),o.uv_max_entity&&i({type:"uv_max",entity:o.uv_max_entity});for(let a of["rain_event","rain_week","rain_month","rain_year"]){let e=o[`${a}_entity`];e&&i({type:a,entity:e})}return t}var ge=["metrics","show_sun","humidity_sensor_entity","wind_speed_sensor_entity","wind_direction_sensor_entity","pressure_sensor_entity","uv_entity","uv_max_entity","rain_entity","rain_rate_entity","rain_event_entity","rain_week_entity","rain_month_entity","rain_year_entity"];function me(o){return o.map(r=>{let t=Object.entries(r).filter(([n,a])=>n!=="type"&&n!=="view"&&a!==void 0),i=r.view&&!F.includes(r.type);return!t.length&&!i?r.type:{type:r.type,...Object.fromEntries(t),...i?{view:!0}:{}}})}var fe=o=>o.length===ue.length&&o.every((r,t)=>r.type===ue[t]&&!r.view&&!r.entity&&!r.direction_entity&&!r.rate_entity&&!r.name);var Me={humidity:"Humidity",wind:"Wind",pressure:"Pressure",sun:"Next sunset or sunrise",uv:"UV index",rain:"Rain",aqi:"Air quality (US EPA)",feels_like:"Feels like",dew_point:"Dew point",visibility:"Visibility",cloud_cover:"Cloud cover",gust:"Gusts",uv_max:"Today's highest UV (view)",rain_event:"Rain this event (view)",rain_week:"Rain this week (view)",rain_month:"Rain this month (view)",rain_year:"Rain this year (view)",sensor:"Any sensor"};function ye(o,r,t){let i,n=pe(r()),a=()=>r().entity||"your weather entity",e=d=>Object.prototype.hasOwnProperty.call(te,d),s=d=>d.type==="sun"?"From the sun entity above":e(d.type)?`Empty: ${a()}'s own`:d.type==="aqi"?"A sensor on the US EPA scale; AQI levels below move the bands":d.type==="sensor"?"Any entity: its name and its value":"A sensor";function l(){let d={readings:fe(n)?void 0:me(n)};for(let h of ge)d[h]=void 0;t(d),b()}function c(d,h,v,A,H){return`<ha-entity-picker class="${d}" label="${g(h)}" value="${g(v??"")}"${H?` helper="${g(H)}"`:""} allow-custom-entity></ha-entity-picker>`}function u(d,h){let v=e(d.type)?["sensor","weather"]:["sensor"],A=F.includes(d.type);return`<div class="rd-row" data-i="${h}" data-type="${d.type}" role="listitem">
            <div class="rd-fields">
              <ha-select class="rd-type" label="Reading ${h+1}"></ha-select>
              ${d.type==="sun"?`<p class="rd-note">${g(s(d))}</p>`:c("rd-entity",G(d.type)?"Entity":"Entity (optional)",d.entity,v,s(d))}
              ${d.type==="wind"?c("rd-direction","Direction (optional)",d.direction_entity,["sensor"]):""}
              ${d.type==="rain"?c("rd-rate","Rain rate (optional)",d.rate_entity,["sensor"],"Shown instead of today's rain while it rains"):""}
              ${d.type==="sensor"?_({id:`rd-name-${h}`,label:"Name (optional)",value:d.name,hint:"Else the entity's own name"}):""}
              ${G(d.type)&&!d.entity?`<p class="rd-warn">Pick a sensor: without one, this reading isn't shown</p>`:""}
            </div>
            <div class="rd-tools">
              ${A?'<span class="rd-view-fixed">In the forecast view</span>':`<label class="switch-label rd-view"><ha-switch class="rd-view-switch"${d.view?" checked":""}></ha-switch><span>View only</span></label>`}
              <button type="button" class="rd-btn rd-up" aria-label="Move reading ${h+1} up"${h===0?" disabled":""}>\u2191</button>
              <button type="button" class="rd-btn rd-down" aria-label="Move reading ${h+1} down"${h===n.length-1?" disabled":""}>\u2193</button>
              <button type="button" class="rd-btn rd-remove" aria-label="Remove reading ${h+1}">\u2715</button>
            </div>
          </div>`}function p(){o.innerHTML=`<div class="rd-list" role="list">${n.map(u).join("")}</div>
            <button type="button" class="rd-add">+ Add a reading</button>`,o.querySelectorAll(".rd-row").forEach(d=>x(d,Number(d.dataset.i))),o.querySelector(".rd-add").addEventListener("click",()=>{let h=typeof(i?.states[r().entity??""]?.attributes??{}).uv_index=="number"&&!n.some(v=>v.type==="uv")?"uv":"rain";n=[...n,{type:h,view:!1}],l(),p(),o.querySelector(".rd-row:last-child .rd-type")?.focus()}),y()}function x(d,h){let v=d.querySelector(".rd-type");if(v){let k=()=>{v.options=ee.map(m=>({value:m,label:Me[m]})),v.value=n[h].type};customElements.get("ha-select")?k():customElements.whenDefined("ha-select").then(k),v.addEventListener("selected",(m=>{let w=m.detail?.value;if(!w||w===n[h].type)return;let S=n[h].entity&&(e(w)||!n[h].entity.startsWith("weather."))?n[h].entity:void 0;n=n.map((C,j)=>j===h?{type:w,view:F.includes(w)||C.view&&!F.includes(C.type),...S?{entity:S}:{}}:C),l(),p()})),v.addEventListener("closed",m=>m.stopPropagation())}let A=(k,m)=>{d.querySelector(k)?.addEventListener("value-changed",(w=>{let S=String(w.detail?.value??"").trim(),C=!!n[h].entity;n=n.map((j,Ee)=>{if(Ee!==h)return j;let K={...j};return S?K[m]=S:delete K[m],K}),l(),m==="entity"&&G(n[h].type)&&C!==!!S&&p()}))};A(".rd-entity","entity"),A(".rd-direction","direction_entity"),A(".rd-rate","rate_entity"),d.querySelector(`[id="rd-name-${h}"]`)?.addEventListener("change",k=>{let m=String(k.target.value??"").trim();n=n.map((w,S)=>{if(S!==h)return w;let C={...w};return m?C.name=m:delete C.name,C}),l()}),d.querySelector(".rd-view-switch")?.addEventListener("change",k=>{let m=!!k.target.checked;n=n.map((w,S)=>S===h?{...w,view:m}:w),l()});let H=k=>{let m=h+k;if(m<0||m>=n.length)return;let w=[...n];[w[h],w[m]]=[w[m],w[h]],n=w,l(),p(),o.querySelector(`.rd-row[data-i="${m}"] ${k<0?".rd-up":".rd-down"}`)?.focus()};d.querySelector(".rd-up")?.addEventListener("click",()=>H(-1)),d.querySelector(".rd-down")?.addEventListener("click",()=>H(1)),d.querySelector(".rd-remove")?.addEventListener("click",()=>{n=n.filter((k,m)=>m!==h),l(),p(),o.querySelector(".rd-add")?.focus()})}function y(){o.querySelectorAll(".rd-row").forEach(d=>{let h=n[Number(d.dataset.i)];if(!h)return;let v=(A,H,k)=>{let m=d.querySelector(A);m&&(i&&(m.hass=i),m.includeDomains=k,m.value=H??"")};v(".rd-entity",h.entity,h.type==="sensor"?void 0:e(h.type)?["sensor","weather"]:["sensor"]),v(".rd-direction",h.direction_entity,["sensor"]),v(".rd-rate",h.rate_entity,["sensor"])})}function b(){o.parentElement?.querySelectorAll("[data-levels-for]").forEach(h=>{h.hidden=!n.some(v=>v.type===h.dataset.levelsFor)})}return p(),b(),{hass(d){i=d,y()}}}var _e=o=>o==null?void 0:String(o);function I(o){return`<div class="place-fields">
        ${_({id:"latitude",label:"Latitude",type:"number",min:-90,max:90,step:"any",placeholder:"-33.87",value:_e(o.latitude)})}
        ${_({id:"longitude",label:"Longitude",type:"number",min:-180,max:180,step:"any",placeholder:"151.21",value:_e(o.longitude)})}
        ${_({id:"time_zone",label:"Time zone",placeholder:"Australia/Sydney",value:o.time_zone,hint:"For weather in another place: its coordinates give the card that place's sun, and its times are shown in its time zone"})}
    </div>`}function P(o,r){for(let t of["latitude","longitude"])o.querySelector(`#${t}`)?.addEventListener("change",i=>{let n=i.target.value.trim(),a=parseFloat(n);r({[t]:n&&isFinite(a)?a:void 0})});o.querySelector("#time_zone")?.addEventListener("change",t=>{r({time_zone:t.target.value.trim()||void 0})})}var q=`
    .place-fields { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 12px; }
    .place-fields > :last-child { grid-column: 1 / -1; }
`;function z(o){return o&&typeof o=="object"&&typeof o.action=="string"?o:void 0}function D(o,r){return{entity:r,tap_action:z(o?.tap_action),hold_action:z(o?.hold_action),double_tap_action:z(o?.double_tap_action)}}var W=["tap_action","hold_action","double_tap_action"],Re={tap_action:["ui.panel.lovelace.editor.card.generic.tap_action","Tap behavior"],hold_action:["ui.panel.lovelace.editor.card.generic.hold_action","Hold behavior"],double_tap_action:["ui.panel.lovelace.editor.card.generic.double_tap_action","Double tap behavior"]},ne=(o,r)=>Z(o,...Re[r]),Oe=W.map(o=>({name:o,selector:{ui_action:{default_action:o==="tap_action"?"more-info":"none"}},context:{entity_id:"entity"}}));function R(o,r,t,i,n={}){let a={...t},e=u=>{a={...a,...u},i(u)},s=u=>{let p=a[u]?.action;return p!==void 0&&Object.prototype.hasOwnProperty.call(n,p)?p:void 0},l=()=>W.filter(s).map(u=>{let p=document.createElement("div");return p.className="option card-action",p.innerHTML=`<span>${g(ne(r,u))}: <b>${g(n[s(u)]??"")}</b></span><button type="button" class="card-action-reset">${g(Z(r,"ui.common.reset","Reset"))}</button>`,p.querySelector("button").addEventListener("click",()=>{e({[u]:void 0}),R(o,r,a,i,n)}),p}),c=()=>{let u=document.createElement("ha-form");u.hass=r,u.data={...a},u.schema=Oe.filter(p=>!s(p.name)),u.computeLabel=p=>ne(r,p.name),u.addEventListener("value-changed",p=>{p.stopPropagation();let x=p.detail?.value??{},y={};for(let b of W){let d=z(x[b]);JSON.stringify(d)!==JSON.stringify(a[b])&&(y[b]=d)}u.data={...a,...y},Object.keys(y).length&&e(y)}),o.replaceChildren(...l(),u)};if(customElements.get("ha-form")){c();return}be(o,r,()=>a,e,n),customElements.whenDefined("ha-form").then(()=>{o.isConnected&&c()}),Ie()}function N(o,r){let t=o?.querySelector("ha-form");t&&r&&(t.hass=r)}async function Ie(){try{await(await(await window.loadCardHelpers?.())?.createCardElement({type:"tile",entity:"sun.sun"}))?.constructor?.getConfigElement?.()}catch{}}var Pe=[{value:"default",label:"Default"},{value:"more-info",label:"More info"},{value:"navigate",label:"Navigate"},{value:"url",label:"Open a URL"},{value:"none",label:"Nothing"}],ve={navigate:{key:"navigation_path",label:"Path",placeholder:"/lovelace/weather"},url:{key:"url_path",label:"URL",placeholder:"https://"}};function be(o,r,t,i,n={}){let a=[...Pe,...Object.entries(n).map(([e,s])=>({value:e,label:s}))];o.innerHTML=W.map(e=>{let s=t()[e],l=s?ve[s.action]:void 0;return`<div class="option"><ha-select data-action="${e}" label="${g(ne(r,e))}"></ha-select></div>`+(l?`<div class="option">${_({id:`${e}-${l.key}`,label:l.label,placeholder:l.placeholder,value:typeof s?.[l.key]=="string"?s[l.key]:""})}</div>`:"")}).join("");for(let e of W){let s=t()[e],l=o.querySelector(`[data-action="${e}"]`);if(!l)continue;let c=s&&!a.some(y=>y.value===s.action)?[...a,{value:s.action,label:`${s.action} (set in YAML)`}]:a,u=()=>{l.options=c,l.value=s?.action??"default"};customElements.get("ha-select")?u():customElements.whenDefined("ha-select").then(u),l.addEventListener("selected",(y=>{let b=y.detail?.value;!b||b===(t()[e]?.action??"default")||(i({[e]:b==="default"?void 0:{action:b}}),be(o,r,t,i,n))})),l.addEventListener("closed",y=>y.stopPropagation());let p=s?ve[s.action]:void 0;(p?o.querySelector(`#${e}-${p.key}`):null)?.addEventListener("input",y=>{let b=y.target.value.trim(),{[p.key]:d,...h}=t()[e]??{action:s.action};i({[e]:{...h,action:s.action,...b?{[p.key]:b}:{}}})})}}function we(o){return(Array.isArray(o)?o:typeof o=="string"?[o]:[]).map(String).filter(Boolean)}var ie=[{value:"line",label:"A line"},{value:"area",label:"A line with a soft fill"},{value:"bars",label:"Bars"},{value:"none",label:"No graph: the values alone"}],f=class f extends HTMLElement{constructor(){super(...arguments);this._initialized=!1}setConfig(t){let i=!this._config||Object.keys(t).length!==Object.keys(this._config).length||JSON.stringify(Object.keys(t).sort())!==JSON.stringify(Object.keys(this._config).sort());this._config={...t},this.isConnected&&i&&this.render()}async connectedCallback(){this._config=this._config||{},await this.ensureEntityPickerLoaded(),this.render(),this._initialized=!0,this._hass&&this.updateEntityPickers()}disconnectedCallback(){this._cleanupSuppressHandler(),this.innerHTML=""}_cleanupSuppressHandler(){this._suppressHandler&&(window.removeEventListener("unhandledrejection",this._suppressHandler),this._suppressHandler=void 0),this._suppressTimeout&&(clearTimeout(this._suppressTimeout),this._suppressTimeout=void 0)}async ensureEntityPickerLoaded(){if(!customElements.get("ha-entity-picker"))try{let i=await(await window.loadCardHelpers()).createCardElement({type:"entities",entities:[]});this._cleanupSuppressHandler(),this._suppressHandler=n=>{(n.reason?.message?.includes("localize")||n.reason?.message?.includes("hass"))&&n.preventDefault()},window.addEventListener("unhandledrejection",this._suppressHandler);try{await i.constructor.getConfigElement?.()}finally{this._suppressTimeout=setTimeout(()=>this._cleanupSuppressHandler(),2e3)}}catch{}}render(){this._config||(this._config={});let t=this._config.color_palette||"default",i=Object.fromEntries(Object.entries(this._config.engine_settings||{}).filter(([,a])=>typeof a=="number"&&isFinite(a))),n=this._config.custom_colors||{};this.innerHTML=`
      <div class="card-config">
        <!-- Entities \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <div class="section expanded">
          <div class="section-header" role="button" tabindex="0" data-section="entities">
            <ha-icon icon="mdi:link-variant"></ha-icon>
            <h3>Entities</h3>
            <ha-icon class="expand-icon" icon="mdi:chevron-down"></ha-icon>
          </div>
          <div class="section-content">
            <div class="option">
              <ha-entity-picker
                id="entity"
                label="Weather entity"
                value="${g(this._config.entity||"")}"
                helper="Required unless developer mode is on"
                allow-custom-entity
              ></ha-entity-picker>
            </div>
            <div class="option">
              ${_({id:"name",label:"Name",placeholder:"Weather",value:this._config.name})}
            </div>
            <div class="option">
              <ha-entity-picker
                id="outdoor_sensor_entity"
                label="Outdoor temperature sensor"
                value="${g(this._config.outdoor_sensor_entity||"")}"
                helper="Shown instead of the weather entity's temperature"
                allow-custom-entity
              ></ha-entity-picker>
            </div>
            <div class="option">
              <ha-entity-picker
                id="feels_like_entity"
                label="Feels-like sensor"
                value="${g(this._config.feels_like_entity||"")}"
                helper="Adds a 'Feels like' line under the temperature"
                allow-custom-entity
              ></ha-entity-picker>
            </div>
            <div class="option">
              <ha-entity-picker
                id="indoor_temperature_entity"
                label="Indoor temperature sensor"
                value="${g(this._config.indoor_temperature_entity||"")}"
                helper="Adds an indoor line under the condition"
                allow-custom-entity
              ></ha-entity-picker>
            </div>
            <div class="option">
              <ha-entity-picker
                id="indoor_humidity_entity"
                label="Indoor humidity sensor"
                value="${g(this._config.indoor_humidity_entity||"")}"
                allow-custom-entity
              ></ha-entity-picker>
            </div>
            <div class="option">
              <ha-entity-picker
                id="sun_entity"
                label="Sun entity"
                value="${g(this._config.sun_entity||"")}"
                helper="Usually sun.sun. Drives the sky's time of day and sunset time"
                allow-custom-entity
              ></ha-entity-picker>
            </div>
            <div class="option">
              <ha-entity-picker
                id="moon_entity"
                label="Moon phase sensor (optional)"
                value="${g(this._config.moon_entity||"")}"
                helper="The Moon integration's sensor.moon_phase. The night's moon shows its phase; without one, the card works it out from the date"
                allow-custom-entity
              ></ha-entity-picker>
            </div>
            <div class="option">
              <ha-entity-picker
                id="flights_entity"
                label="Flights sensor"
                value="${g(this._config.flights_entity||"")}"
                helper="Flightradar24 'Current in area' sensor. Each new flight crosses the card once"
                allow-custom-entity
              ></ha-entity-picker>
            </div>
          </div>
        </div>

        <!-- Display \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <div class="section">
          <div class="section-header" role="button" tabindex="0" data-section="display">
            <ha-icon icon="mdi:eye-outline"></ha-icon>
            <h3>Display</h3>
            <ha-icon class="expand-icon" icon="mdi:chevron-down"></ha-icon>
          </div>
          <div class="section-content">
            <div class="group-title">Appearance</div>
            <div class="option">
              <ha-select id="color_palette" label="Color palette"></ha-select>
            </div>
            <div class="option">
              <label class="switch-label">
                <ha-switch id="compact" ${this._config.compact?"checked":""}></ha-switch>
                <span>Compact: one line, the temperature and condition over the sky</span>
              </label>
            </div>
            <div class="option">
              <label class="switch-label">
                <ha-switch id="temperature_decimals" ${Number(this._config.temperature_decimals)===1?"checked":""}></ha-switch>
                <span>Temperatures to one decimal: 21.5\xB0 rather than 22\xB0</span>
              </label>
            </div>

            <div class="group-title">Show</div>
            <div class="option">
              <label class="switch-label">
                <ha-switch id="show_location" ${this._config.show_location!==!1?"checked":""}></ha-switch>
                <span>Location</span>
              </label>
            </div>
            <div class="option">
              <label class="switch-label">
                <ha-switch id="show_attributes" ${this._config.show_attributes!==!1?"checked":""}></ha-switch>
                <span>Readings</span>
              </label>
            </div>
            <div class="option sub-option" id="metrics-option" style="display: ${this._config.show_attributes!==!1?"block":"none"}">
              <div id="readings-table" class="readings-table"></div>
              <div data-levels-for="uv">${_({id:"uv_levels",label:"UV levels start at",placeholder:"3, 6, 8, 11",value:Array.isArray(this._config.uv_levels)?this._config.uv_levels.join(", "):this._config.uv_levels,hint:"Moderate, high, very high and extreme. The level's word follows the UV index, and its icon takes its colour"})}</div>
              <div data-levels-for="aqi">${_({id:"aqi_levels",label:"AQI levels start at",placeholder:"51, 101, 151, 201, 301",value:Array.isArray(this._config.aqi_levels)?this._config.aqi_levels.join(", "):this._config.aqi_levels,hint:"Moderate, unhealthy for some, unhealthy, very unhealthy and hazardous: the US EPA's unless your sensor uses another scale"})}</div>
            </div>
            <div class="option sub-option" id="attribute-labels-option" style="display: ${this._config.show_attributes!==!1?"block":"none"}">
              <label class="switch-label">
                <ha-switch id="show_attribute_labels" ${this._config.show_attribute_labels!==!1?"checked":""}></ha-switch>
                <span>Labels</span>
              </label>
            </div>
            <div class="option sub-option" id="attribute-icons-option" style="display: ${this._config.show_attributes!==!1?"block":"none"}">
              <label class="switch-label">
                <ha-switch id="show_attribute_icons" ${this._config.show_attribute_icons!==!1?"checked":""}></ha-switch>
                <span>Icons</span>
              </label>
            </div>
            <div class="option">
              <label class="switch-label">
                <ha-switch id="show_indoor" ${this._config.show_indoor!==!1?"checked":""}></ha-switch>
                <span>Indoor temperature and humidity</span>
              </label>
            </div>
            <div class="option">
              <ha-select id="indoor_style" label="Indoor reading starts with"></ha-select>
            </div>
            <div class="option">
              <label class="switch-label">
                <ha-switch id="show_flight_labels" ${this._config.show_flight_labels!==!1?"checked":""}></ha-switch>
                <span>Flight labels on planes</span>
              </label>
            </div>
            <div class="option">
              <ha-select id="flight_label" label="Plane labels show"></ha-select>
            </div>
            <div class="option">
              <ha-select id="plane_speed" label="Plane speed"></ha-select>
            </div>
            <div class="option">
              <label class="switch-label">
                <ha-switch id="planes_on_load" ${this._config.planes_on_load?"checked":""}></ha-switch>
                <span>Fly the planes already overhead when the dashboard opens</span>
              </label>
            </div>

            <div class="group-title">Motion</div>
            <div class="option">
              <label class="switch-label">
                <ha-switch id="animate" ${this._config.animate!==!1?"checked":""}></ha-switch>
                <span>Animate the weather</span>
              </label>
            </div>
            <div class="option">
              <label class="switch-label">
                <ha-switch id="spill_particles" ${this._config.spill_particles!==!1?"checked":""}></ha-switch>
                <span>Let rain, snow and leaves spill outside the card</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Forecast and clock \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <div class="section">
          <div class="section-header" role="button" tabindex="0" data-section="forecast">
            <ha-icon icon="mdi:clock-time-four-outline"></ha-icon>
            <h3>Forecast and clock</h3>
            <ha-icon class="expand-icon" icon="mdi:chevron-down"></ha-icon>
          </div>
          <div class="section-content">
            <div class="option card-only">
              <ha-select id="hero" label="The big value"></ha-select>
            </div>
            <div class="option card-only small-clock">
              <label class="switch-label">
                <ha-switch id="show_clock" ${this._config.show_clock?"checked":""}></ha-switch>
                <span>The time, leading the location line</span>
              </label>
            </div>
            <div class="option card-only">
              <label class="switch-label">
                <ha-switch id="show_date" ${this._config.show_date?"checked":""}></ha-switch>
                <span>The date, after the time</span>
              </label>
            </div>
            <div class="option">
              <label class="switch-label">
                <ha-switch id="show_forecast" ${this._config.show_forecast?"checked":""}></ha-switch>
                <span>The forecast: what turns, the hours ahead, and the slide through them</span>
              </label>
            </div>
            <p class="section-note">Drag the card sideways and its sky, weather and readings go to the hour you stop at. It stays there until you tap Now, or until nobody has touched it for half a minute. Asks for eight rows in a sections view (five without an hourly forecast), and with the days one more for every two; a shorter frame gives up the days from the end, then the chips, then the icons, then the row, before the temperature ever shrinks. A tap opens the whole forecast unless you choose something else under Interactions.</p>
            <div class="option forecast-only">
              <ha-select id="forecast_metric" label="The hours first show"></ha-select>
            </div>
            <div class="option forecast-only">
              <ha-select id="forecast_graph" label="The hours' graph"></ha-select>
            </div>
            <div class="option forecast-only">
              <label class="switch-label">
                <ha-switch id="show_days" ${this._config.show_days?"checked":""}></ha-switch>
                <span>The days, under the hours</span>
              </label>
            </div>
            <div class="option forecast-only days-only">
              <ha-select id="forecast_days" label="Days"></ha-select>
            </div>
            <div class="option">
              <ha-select id="layout" label="Layout"></ha-select>
            </div>
            <div class="option nightstand-only">
              <ha-entity-picker id="alarm_entity" label="Next alarm" value="${g(this._config.alarm_entity||"")}" helper="A timestamp sensor, like the Companion app's next alarm, or an input_datetime" allow-custom-entity></ha-entity-picker>
            </div>
            <div class="option nightstand-only">
              ${_({id:"wake_time",label:"Wake time",placeholder:"07:00",value:this._config.wake_time,hint:"When you get up without an alarm"})}
            </div>
            <div class="option nightstand-only">
              ${_({id:"bed_time",label:"Bed time",placeholder:"22:30",value:this._config.bed_time,hint:"When night begins without a light sensor: by default, 8 h 30 min before the alarm or wake time"})}
            </div>
            <div class="option nightstand-only">
              <ha-select id="night" label="Night"></ha-select>
            </div>
            <div class="option nightstand-only">
              <ha-entity-picker id="night_sensor" label="Light sensor" value="${g(this._config.night_sensor||"")}" helper="An illuminance sensor beside it: night when the room is dark" allow-custom-entity></ha-entity-picker>
            </div>
            <div class="option nightstand-only">
              <label class="switch-label">
                <ha-switch id="night_red" ${this._config.night_red!==!1?"checked":""}></ha-switch>
                <span>Red on black at night, as a bedside clock's night mode</span>
              </label>
            </div>
            <div class="option nightstand-only">
              ${_({id:"night_lux",label:"Dark below (lx)",type:"number",min:.1,step:"any",placeholder:"5",value:this._config.night_lux!==void 0?String(this._config.night_lux):"",hint:"Night when the light sensor reads less for a minute; day again at three times it"})}
            </div>
          </div>
        </div>

        <!-- Interactions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <div class="section">
          <div class="section-header" role="button" tabindex="0" data-section="interactions">
            <ha-icon icon="mdi:gesture-tap"></ha-icon>
            <h3>Interactions</h3>
            <ha-icon class="expand-icon" icon="mdi:chevron-down"></ha-icon>
          </div>
          <div class="section-content">
            <p class="section-note">What a tap, a hold and a double tap on the card do. By default a tap opens the weather's details, the forecast with the forecast on, and nothing on a nightstand.</p>
            <div id="actions-editor"></div>
          </div>
        </div>

        <!-- Weather note \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <div class="section">
          <div class="section-header" role="button" tabindex="0" data-section="note">
            <ha-icon icon="mdi:message-text-outline"></ha-icon>
            <h3>Weather note</h3>
            <ha-icon class="expand-icon" icon="mdi:chevron-down"></ha-icon>
          </div>
          <div class="section-content">
            <p class="section-note">A sentence under the conditions: a remark on the weather, what's coming and what to wear. Asks for five rows in a sections view; a shorter frame shows a one-line version, then none.</p>
            <div class="option">
              <label class="switch-label">
                <ha-switch id="show_note" ${this._config.show_note?"checked":""}></ha-switch>
                <span>Write it with your AI, from the forecast</span>
              </label>
            </div>
            <p class="section-note" id="note_status" hidden></p>
            <div class="option note-ai">
              <ha-select id="note_tone" label="Voice"></ha-select>
            </div>
            <div class="option note-ai">
              <ha-entity-picker
                id="note_ai_task_entity"
                label="AI Task"
                value="${g(this._config.note_ai_task_entity||"")}"
                helper="Empty: the default in Settings \u2192 System \u2192 AI"
                allow-custom-entity
              ></ha-entity-picker>
            </div>
            <div class="option note-ai">
              <ha-entity-picker
                id="note_calendar"
                label="Your calendar, for when you're out"
                value="${g(we(this._config.note_calendar)[0]||"")}"
                helper="Timed events count as time out; all-day and online ones don't. Only the times reach the AI"
                allow-custom-entity
              ></ha-entity-picker>
            </div>
            <p class="section-note">Or show a note from an entity of yours instead:</p>
            <div class="option">
              <ha-entity-picker
                id="note_entity"
                label="Note entity"
                value="${g(this._config.note_entity||"")}"
                helper="Its state is the one-line version. Used instead of the AI"
                allow-custom-entity
              ></ha-entity-picker>
            </div>
            <div class="option">
              ${_({id:"note_attribute",label:"Longer note attribute",placeholder:"note",value:this._config.note_attribute,hint:"Shown where there's room for two lines"})}
            </div>
            <div class="option">
              ${_({id:"note_max_age",label:"Hide after (minutes)",type:"number",min:0,value:this._config.note_max_age??180,hint:"Counted from when it was written (an entity's generated_at). 0 keeps it"})}
            </div>
          </div>
        </div>

        <!-- Day / Night \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <div class="section">
          <div class="section-header" role="button" tabindex="0" data-section="daynight">
            <ha-icon icon="mdi:weather-sunset"></ha-icon>
            <h3>Day and night</h3>
            <ha-icon class="expand-icon" icon="mdi:chevron-down"></ha-icon>
          </div>
          <div class="section-content">
            <div class="option">
              ${I(this._config)}
            </div>
            <div class="option">
              <label class="switch-label">
                <ha-switch id="enable_day_night_cycle" ${this._config.enable_day_night_cycle?"checked":""}></ha-switch>
                <span>Follow a fixed day and night schedule</span>
              </label>
            </div>
            <div class="option ${this._config.enable_day_night_cycle?"":"disabled"}" style="${this._config.enable_day_night_cycle?"":"opacity: 0.5; pointer-events: none;"}">
              ${_({id:"sunrise_hour",label:"Sunrise hour (0-23)",type:"number",min:0,max:23,value:this._config.sunrise_hour??6,hint:"When the day sky and animations begin"})}
            </div>
            <div class="option ${this._config.enable_day_night_cycle?"":"disabled"}" style="${this._config.enable_day_night_cycle?"":"opacity: 0.5; pointer-events: none;"}">
              ${_({id:"sunset_hour",label:"Sunset hour (0-23)",type:"number",min:0,max:23,value:this._config.sunset_hour??20,hint:"When the night sky and animations begin"})}
            </div>
          </div>
        </div>

        <!-- Advanced \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <div class="section">
          <div class="section-header" role="button" tabindex="0" data-section="advanced">
            <ha-icon icon="mdi:tune"></ha-icon>
            <h3>Advanced</h3>
            <ha-icon class="expand-icon" icon="mdi:chevron-down"></ha-icon>
          </div>
          <div class="section-content">
            <div class="option">
              <label class="switch-label">
                <ha-switch id="auto_pause" ${this._config.auto_pause?"checked":""}></ha-switch>
                <span>Also pause when the browser window is in the background</span>
              </label>
            </div>
            <div class="option">
              <label class="switch-label">
                <ha-switch id="disable_lightning_shake" ${this._config.disable_lightning_shake?"checked":""}></ha-switch>
                <span>Turn off the lightning jolt</span>
              </label>
            </div>
            <div class="option">
              <label class="switch-label">
                <ha-switch id="dev_mode" ${this._config.dev_mode?"checked":""}></ha-switch>
                <span>Developer mode: the dev card's simulated weather</span>
              </label>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-header" role="button" tabindex="0" data-section="engine">
            <ha-icon icon="mdi:weather-partly-cloudy"></ha-icon>
            <h3>Weather engine</h3>
            <ha-icon class="expand-icon" icon="mdi:chevron-down"></ha-icon>
          </div>
          <div class="section-content">
          <div class="engine-grid">
            <div class="engine-option">
              <label>Wind effect</label>
              <input type="range" id="windSpeed" min="0.5" max="5" step="0.1" value="${g(i.windSpeed||E.windSpeed)}" />
              <span class="value-display">${f.formatEngineValue("windSpeed",i.windSpeed||E.windSpeed)}</span>
            </div>
            <div class="engine-option">
              <label>Rain amount</label>
              <input type="range" id="rainCount" min="0.5" max="3" step="0.1" value="${g(i.rainCount||E.rainCount)}" />
              <span class="value-display">${f.formatEngineValue("rainCount",i.rainCount||E.rainCount)}</span>
            </div>
            <div class="engine-option">
              <label>Leaf amount</label>
              <input type="range" id="leafCount" min="0.5" max="3" step="0.1" value="${g(i.leafCount||E.leafCount)}" />
              <span class="value-display">${f.formatEngineValue("leafCount",i.leafCount||E.leafCount)}</span>
            </div>
            <div class="engine-option">
              <label>Snow amount</label>
              <input type="range" id="snowCount" min="0.5" max="3" step="0.1" value="${g(i.snowCount||E.snowCount)}" />
              <span class="value-display">${f.formatEngineValue("snowCount",i.snowCount||E.snowCount)}</span>
            </div>
            <div class="engine-option">
              <label>Cloud size</label>
              <input type="range" id="cloudBaseSize" min="0.5" max="2" step="0.1" value="${g(i.cloudBaseSize||E.cloudBaseSize)}" />
              <span class="value-display">${f.formatEngineValue("cloudBaseSize",i.cloudBaseSize||E.cloudBaseSize)}</span>
            </div>
            <div class="engine-option">
              <label>Cloud count</label>
              <input type="range" id="cloudCount" min="1" max="6" step="1" value="${g(i.cloudCount||E.cloudCount)}" />
              <span class="value-display">${f.formatEngineValue("cloudCount",i.cloudCount||E.cloudCount)}</span>
            </div>
            <div class="engine-option">
              <label>Splash bounce</label>
              <input type="range" id="splashBounce" min="40" max="120" step="5" value="${g(i.splashBounce||E.splashBounce)}" />
              <span class="value-display">${f.formatEngineValue("splashBounce",i.splashBounce||E.splashBounce)}</span>
            </div>
          </div>
          <button class="reset-engine-btn">Reset engine settings</button>
          </div>
        </div>

        <div class="section">
          <div class="section-header" role="button" tabindex="0" data-section="colors">
            <ha-icon icon="mdi:palette"></ha-icon>
            <h3>Colors</h3>
            <ha-icon class="expand-icon" icon="mdi:chevron-down"></ha-icon>
          </div>
          <div class="section-content">
          <p class="section-note" id="sky-note" style="display: ${t==="default"?"block":"none"}">Each sky color becomes the whole sky for that condition, and Fog colors the fog. These apply to the colorized palette only.</p>
          
          <div class="color-grid" id="color-grid" style="display: ${t==="default"?"grid":"none"}; opacity: ${t==="default"?"1":"0.5"}">
            <div class="color-option">
              <label>Sunny sky</label>
              <input type="color" id="sunny_bg" value="${g(n.sunny_bg||f.DEFAULT_COLORS.sunny_bg)}" />
              <button class="color-reset" data-target="sunny_bg" ${n.sunny_bg?"":"hidden"}>Reset</button>
            </div>
            <div class="color-option">
              <label>Rainy sky</label>
              <input type="color" id="rainy_bg" value="${g(n.rainy_bg||f.DEFAULT_COLORS.rainy_bg)}" />
              <button class="color-reset" data-target="rainy_bg" ${n.rainy_bg?"":"hidden"}>Reset</button>
            </div>
            <div class="color-option">
              <label>Snowy sky</label>
              <input type="color" id="snowy_bg" value="${g(n.snowy_bg||f.DEFAULT_COLORS.snowy_bg)}" />
              <button class="color-reset" data-target="snowy_bg" ${n.snowy_bg?"":"hidden"}>Reset</button>
            </div>
            <div class="color-option">
              <label>Stormy sky</label>
              <input type="color" id="stormy_bg" value="${g(n.stormy_bg||f.DEFAULT_COLORS.stormy_bg)}" />
              <button class="color-reset" data-target="stormy_bg" ${n.stormy_bg?"":"hidden"}>Reset</button>
            </div>
            <div class="color-option">
              <label>Windy sky</label>
              <input type="color" id="windy_bg" value="${g(n.windy_bg||f.DEFAULT_COLORS.windy_bg)}" />
              <button class="color-reset" data-target="windy_bg" ${n.windy_bg?"":"hidden"}>Reset</button>
            </div>
            <div class="color-option">
              <label>Cloudy sky</label>
              <input type="color" id="cloudy_bg" value="${g(n.cloudy_bg||f.DEFAULT_COLORS.cloudy_bg)}" />
              <button class="color-reset" data-target="cloudy_bg" ${n.cloudy_bg?"":"hidden"}>Reset</button>
            </div>
            <div class="color-option">
              <label>Fog</label>
              <input type="color" id="fog_color" value="${g(n.fog_color||f.DEFAULT_COLORS.fog_color)}" />
              <button class="color-reset" data-target="fog_color" ${n.fog_color?"":"hidden"}>Reset</button>
            </div>
          </div>
          <p class="section-note">These apply on either palette.</p>
          <div class="color-grid" id="ink-grid">
            <div class="color-option">
              <label>Temperature</label>
              <input type="color" id="temperature_color" value="${g(n.temperature_color||f.DEFAULT_COLORS.temperature_color)}" />
              <button class="color-reset" data-target="temperature_color" ${n.temperature_color?"":"hidden"}>Reset</button>
            </div>
            <div class="color-option">
              <label>Text</label>
              <input type="color" id="text_color" value="${g(n.text_color||f.DEFAULT_COLORS.text_color)}" />
              <button class="color-reset" data-target="text_color" ${n.text_color?"":"hidden"}>Reset</button>
            </div>
            <div class="color-option">
              <label>Sun</label>
              <input type="color" id="sun_color" value="${g(n.sun_color||f.DEFAULT_COLORS.sun_color)}" />
              <button class="color-reset" data-target="sun_color" ${n.sun_color?"":"hidden"}>Reset</button>
            </div>
            <div class="color-option">
              <label>Rain</label>
              <input type="color" id="rain_color" value="${g(n.rain_color||f.DEFAULT_COLORS.rain_color)}" />
              <button class="color-reset" data-target="rain_color" ${n.rain_color?"":"hidden"}>Reset</button>
            </div>
            <div class="color-option">
              <label>Snow</label>
              <input type="color" id="snow_color" value="${g(n.snow_color||f.DEFAULT_COLORS.snow_color)}" />
              <button class="color-reset" data-target="snow_color" ${n.snow_color?"":"hidden"}>Reset</button>
            </div>
          </div>
          <button class="reset-colors-btn" id="reset-colors-btn" ${Object.keys(n).length?"":"hidden"}>Reset all colors</button>
          </div>
        </div>
      </div>
      
      <style>
        ${ae()}${q}
      </style>
    `,this.attachEventListeners(),setTimeout(()=>{this.updateEntityPickers()},0)}attachEventListeners(){this.updateEntityPickers(),this.querySelector("#entity")?.addEventListener("value-changed",e=>{this._updateConfig("entity",e.target.value)}),this.querySelector("#outdoor_sensor_entity")?.addEventListener("value-changed",e=>{this._updateConfig("outdoor_sensor_entity",e.target.value)}),this.querySelector("#feels_like_entity")?.addEventListener("value-changed",e=>{this._updateConfig("feels_like_entity",e.target.value)}),this.querySelector("#name")?.addEventListener("input",e=>{this._updateConfig("name",e.target.value)}),this.querySelector("#indoor_temperature_entity")?.addEventListener("value-changed",e=>{this._updateConfig("indoor_temperature_entity",e.target.value)}),this.querySelector("#indoor_humidity_entity")?.addEventListener("value-changed",e=>{this._updateConfig("indoor_humidity_entity",e.target.value)}),this.querySelector("#sun_entity")?.addEventListener("value-changed",e=>{this._updateConfig("sun_entity",e.target.value)}),this.querySelector("#moon_entity")?.addEventListener("value-changed",e=>{this._updateConfig("moon_entity",e.target.value)}),this.querySelector("#flights_entity")?.addEventListener("value-changed",e=>{this._updateConfig("flights_entity",e.target.value)}),this.querySelector("#note_entity")?.addEventListener("value-changed",e=>{this._updateConfig("note_entity",e.target.value),this.syncNoteOptions()}),this.querySelector("#note_attribute")?.addEventListener("input",e=>{this._updateConfig("note_attribute",e.target.value.trim())}),this.querySelector("#note_max_age")?.addEventListener("change",e=>{let s=parseInt(e.target.value);s>=0&&this._updateConfig("note_max_age",s)}),this._bindSelect("hero",[{value:"temperature",label:"The temperature"},{value:"clock",label:"The time, with the temperature beside the condition"}],this._config?.hero==="clock"?"clock":"temperature",e=>{this._updateConfig("hero",e==="clock"?e:void 0),this.syncForecastOptions()}),this.querySelector("#show_clock")?.addEventListener("change",e=>{this._updateConfig("show_clock",e.target.checked||void 0)}),this.querySelector("#show_date")?.addEventListener("change",e=>{this._updateConfig("show_date",e.target.checked||void 0)}),this.querySelector("#show_forecast")?.addEventListener("change",e=>{this._updateConfig("show_forecast",e.target.checked||void 0),this.syncForecastOptions(),this.mountActions()}),this._bindSelect("forecast_metric",[{value:"temp",label:"Temperature"},{value:"feels",label:"Feels like"},{value:"chance",label:"Chance of rain"},{value:"amount",label:"Rain amount"}],this._config?.forecast_metric||"temp",e=>{this._updateConfig("forecast_metric",e==="temp"?void 0:e)}),this._bindSelect("forecast_graph",ie,this._config?.forecast_graph||"line",e=>{this._updateConfig("forecast_graph",e==="line"?void 0:e)}),this.querySelector("#show_days")?.addEventListener("change",e=>{this._updateConfig("show_days",e.target.checked||void 0),this.syncForecastOptions()}),this._bindSelect("forecast_days",Array.from({length:10},(e,s)=>({value:String(s+1),label:String(s+1)})),String(this._config?.forecast_days??7),e=>{this._updateConfig("forecast_days",e==="7"?void 0:Number(e))}),this._bindSelect("layout",[{value:"default",label:"The weather card"},{value:"nightstand",label:"Nightstand: the time as the hero"}],this._config?.layout||"default",e=>{this._updateConfig("layout",e==="default"?void 0:e),this.syncForecastOptions(),this.mountActions()}),this._bindSelect("night",[{value:"auto",label:"From the light sensor, else bed to wake time"},{value:"on",label:"Always"},{value:"off",label:"Never"}],this._config?.night===!0?"on":this._config?.night===!1?"off":this._config?.night||"auto",e=>{this._updateConfig("night",e==="auto"?void 0:e)}),this.querySelector("#alarm_entity")?.addEventListener("value-changed",e=>{this._updateConfig("alarm_entity",e.target.value||void 0)}),this.querySelector("#night_sensor")?.addEventListener("value-changed",e=>{this._updateConfig("night_sensor",e.target.value||void 0)}),this.querySelector("#night_red")?.addEventListener("change",e=>{this._updateConfig("night_red",e.target.checked?void 0:!1)}),this.querySelector("#night_lux")?.addEventListener("input",e=>{let s=Number((e.target.value||"").trim());this._updateConfig("night_lux",Number.isFinite(s)&&s>0?s:void 0)});for(let e of["wake_time","bed_time"])this.querySelector(`#${e}`)?.addEventListener("input",s=>{let l=(s.target.value||"").trim();this._updateConfig(e,/^\d{1,2}:\d{2}$/.test(l)?l:void 0)});this.syncForecastOptions(),this.querySelector("#show_note")?.addEventListener("change",e=>{this._updateConfig("show_note",e.target.checked||void 0),this.syncNoteOptions()}),this._bindSelect("flight_label",[{value:"flight",label:"Flight number and aircraft"},{value:"route",label:"Route (Lisbon \u2192 Paris)"},{value:"both",label:"Route and flight number"}],this._config?.flight_label||"flight",e=>{this._updateConfig("flight_label",e==="flight"?void 0:e)});let t=String(this._config?.plane_speed??1);this._bindSelect("plane_speed",[{value:"1",label:"Usual"},{value:"0.5",label:"Slower (half speed)"},{value:"0.25",label:"Slowest (a quarter)"},...["1","0.5","0.25"].includes(t)?[]:[{value:t,label:`${t}\xD7`}]],t,e=>{this._updateConfig("plane_speed",e==="1"?void 0:Number(e))}),this.querySelector("#planes_on_load")?.addEventListener("change",e=>{this._updateConfig("planes_on_load",e.target.checked||void 0)}),this._bindSelect("note_tone",[{value:"snarky",label:"Snarky"},{value:"calm",label:"Calm"},{value:"friendly",label:"Friendly"},{value:"dry",label:"Dry"}],this._config?.note_tone||"snarky",e=>{this._updateConfig("note_tone",e==="snarky"?void 0:e)}),this.querySelector("#note_ai_task_entity")?.addEventListener("value-changed",e=>{this._updateConfig("note_ai_task_entity",e.target.value),this.syncNoteOptions()}),this.querySelector("#note_calendar")?.addEventListener("value-changed",e=>{let s=[e.target.value,...we(this._config?.note_calendar).slice(1)].filter(Boolean);this._updateConfig("note_calendar",s.length>1?s:s[0]||void 0)}),this.syncNoteOptions(),this._bindSelect("color_palette",[{value:"default",label:"Colorized sky"},{value:"theme",label:"Blend with dashboard theme"}],this._config?.color_palette||"default",e=>{this._updateConfig("color_palette",e);let s=this.querySelector("#color-grid");s&&(s.style.display=e==="default"?"grid":"none",s.style.opacity=e==="default"?"1":"0.5");let l=this.querySelector("#sky-note");l&&(l.style.display=e==="default"?"block":"none"),this._syncColorResets()});let i=this.querySelector(".readings-table");this.readingsEditor=i?ye(i,()=>this._config??{},e=>this._patchConfig(e)):void 0,this.readingsEditor?.hass(this._hass),this.querySelector("#uv_levels")?.addEventListener("change",e=>{let s=e.target.value.trim(),l=s.split(",").map(u=>parseFloat(u)),c=l.length===4&&l.every((u,p)=>isFinite(u)&&(p===0||u>l[p-1]));this._updateConfig("uv_levels",s?c?l:s:void 0)}),this.querySelector("#aqi_levels")?.addEventListener("change",e=>{let s=e.target.value.trim(),l=s.split(",").map(u=>parseFloat(u)),c=l.length===5&&l.every((u,p)=>isFinite(u)&&(p===0||u>l[p-1]));this._updateConfig("aqi_levels",s?c?l:s:void 0)}),P(this,e=>{for(let[s,l]of Object.entries(e))this._updateConfig(s,l)}),this._bindSelect("indoor_style",[{value:"label",label:'The word "Indoors"'},{value:"icon",label:"A house icon"},{value:"both",label:"Icon and word"}],this._config?.indoor_style||"label",e=>{this._updateConfig("indoor_style",e==="label"?void 0:e)}),this.mountActions(),this.querySelector("#animate")?.addEventListener("change",e=>{this._updateConfig("animate",e.target.checked)}),this.querySelector("#show_attributes")?.addEventListener("change",e=>{let s=e.target.checked;this._updateConfig("show_attributes",s);for(let l of["#attribute-labels-option","#attribute-icons-option","#metrics-option"]){let c=this.querySelector(l);c&&(c.style.display=s?"block":"none")}}),this.querySelector("#show_attribute_labels")?.addEventListener("change",e=>{this._updateConfig("show_attribute_labels",e.target.checked)}),this.querySelector("#show_attribute_icons")?.addEventListener("change",e=>{this._updateConfig("show_attribute_icons",e.target.checked)}),this.querySelector("#compact")?.addEventListener("change",e=>{this._updateConfig("compact",e.target.checked||void 0)}),this.querySelector("#temperature_decimals")?.addEventListener("change",e=>{this._updateConfig("temperature_decimals",e.target.checked?1:void 0)}),this.querySelector("#show_location")?.addEventListener("change",e=>{this._updateConfig("show_location",e.target.checked)}),this.querySelector("#show_indoor")?.addEventListener("change",e=>{this._updateConfig("show_indoor",e.target.checked)}),this.querySelector("#show_flight_labels")?.addEventListener("change",e=>{this._updateConfig("show_flight_labels",e.target.checked)}),this.querySelector("#spill_particles")?.addEventListener("change",e=>{this._updateConfig("spill_particles",e.target.checked)}),this.querySelector("#auto_pause")?.addEventListener("change",e=>{this._updateConfig("auto_pause",e.target.checked)}),this.querySelector("#disable_lightning_shake")?.addEventListener("change",e=>{this._updateConfig("disable_lightning_shake",e.target.checked)}),this.querySelector("#dev_mode")?.addEventListener("change",e=>{this._updateConfig("dev_mode",e.target.checked)}),this.querySelector("#enable_day_night_cycle")?.addEventListener("change",e=>{let s=e.target.checked;this._updateConfig("enable_day_night_cycle",s);let l=this.querySelector("#sunrise_hour")?.closest(".option"),c=this.querySelector("#sunset_hour")?.closest(".option");if(l&&c){let u=s?"":"opacity: 0.5; pointer-events: none;";l.style.cssText=u,c.style.cssText=u}}),this.querySelector("#sunrise_hour")?.addEventListener("change",e=>{let s=parseInt(e.target.value);s>=0&&s<=23&&this._updateConfig("sunrise_hour",s)}),this.querySelector("#sunset_hour")?.addEventListener("change",e=>{let s=parseInt(e.target.value);s>=0&&s<=23&&this._updateConfig("sunset_hour",s)}),["windSpeed","rainCount","leafCount","snowCount","cloudBaseSize","cloudCount","splashBounce"].forEach(e=>{let s=this.querySelector(`#${e}`);s&&(s.addEventListener("input",l=>{let c=parseFloat(l.target.value),u=l.target.parentNode.querySelector(".value-display");u&&(u.textContent=f.formatEngineValue(e,c))}),s.addEventListener("change",l=>{let c=parseFloat(l.target.value);this._updateEngineConfig(e,c)}))}),this.querySelector(".reset-engine-btn")?.addEventListener("click",e=>{e.preventDefault(),this._resetEngineSettings()}),["sunny_bg","rainy_bg","snowy_bg","stormy_bg","windy_bg","cloudy_bg","fog_color","temperature_color","text_color","sun_color","rain_color","snow_color"].forEach(e=>{let s=this.querySelector(`#${e}`);s&&s.addEventListener("change",l=>{this._updateColorConfig(e,l.target.value)})}),this.querySelectorAll(".color-reset").forEach(e=>{e.addEventListener("click",s=>{s.preventDefault();let l=s.target.dataset.target;this._resetColorConfig(l)})}),this.querySelector(".reset-colors-btn")?.addEventListener("click",e=>{e.preventDefault(),this._resetAllColors()}),this.querySelectorAll(".section-header").forEach(e=>{let s=e.closest(".section"),l=()=>e.setAttribute("aria-expanded",String(!!s?.classList.contains("expanded"))),c=()=>{s?.classList.toggle("expanded"),l()};l(),e.addEventListener("click",c),e.addEventListener("keydown",u=>{let p=u.key;(p==="Enter"||p===" ")&&(u.preventDefault(),c())})})}_bindSelect(t,i,n,a){let e=this.querySelector(`#${t}`);if(!e)return;let s=()=>{e.options=i,e.value=n};customElements.get("ha-select")?s():customElements.whenDefined("ha-select").then(s),e.addEventListener("selected",(l=>{let c=l.detail?.value;c&&(e.value=c,a(c))})),e.addEventListener("closed",l=>l.stopPropagation())}tapDefault(){return this._config?.layout==="nightstand"?{action:"none"}:this._config?.show_forecast?{action:"forecast"}:void 0}mountActions(){let t=this.querySelector("#actions-editor");if(!t)return;let i=D(this._config,this._config?.entity),n=this.tapDefault();R(t,this._hass,i.tap_action||!n?i:{...i,tap_action:n},a=>{let e={...a};n&&"tap_action"in a&&(e.tap_action=a.tap_action===void 0?{action:"more-info"}:a.tap_action.action===n.action?void 0:a.tap_action);for(let[s,l]of Object.entries(e))this._updateConfig(s,l)},{forecast:"Forecast"})}syncForecastOptions(){let t=(i,n)=>this.querySelectorAll(i).forEach(a=>{a.style.cssText=n?"":"opacity: 0.5; pointer-events: none;"});t(".forecast-only",!!this._config?.show_forecast),t(".days-only",!!this._config?.show_forecast&&!!this._config?.show_days),t(".small-clock",this._config?.hero!=="clock"),this.querySelectorAll(".nightstand-only").forEach(i=>{i.hidden=this._config?.layout!=="nightstand"}),this.querySelectorAll(".card-only").forEach(i=>{i.hidden=this._config?.layout==="nightstand"})}syncNoteOptions(){let t=!!this._config?.show_note&&!this._config?.note_entity;this.querySelectorAll(".note-ai").forEach(i=>{i.style.cssText=t?"":"opacity: 0.5; pointer-events: none;"}),this.updateNoteStatus(t)}async updateNoteStatus(t){let i=this.querySelector("#note_status"),n=this._hass;if(!i)return;let a="";t&&n&&(n.config?.components?.includes("ai_task")?this._config?.note_ai_task_entity||(this.noteDefault??(this.noteDefault=n.callWS({type:"ai_task/preferences/get"}).then(e=>e?.gen_data_entity_id??null).catch(()=>null)),await this.noteDefault||(a="Pick an AI Task above, or set a default in Settings \u2192 System \u2192 AI.")):a="Needs Home Assistant 2025.8 or later, with an AI integration that provides an AI Task, such as OpenAI or Anthropic."),i.textContent=a,i.hidden=!a}_patchConfig(t){this._config||(this._config={});let i=this._config;for(let[n,a]of Object.entries(t))a===""||a===null||a===void 0?delete i[n]:i[n]=a;this._fireConfigChanged()}_updateConfig(t,i){this._config||(this._config={}),i===""||i===null||i===void 0?delete this._config[t]:this._config[t]=i,this._fireConfigChanged()}_updateEngineConfig(t,i){this._config.engine_settings||(this._config.engine_settings={}),this._config.engine_settings[t]=i,this._fireConfigChanged()}_resetEngineSettings(){this._config.engine_settings={},this.render(),this._fireConfigChanged()}static formatEngineValue(t,i){return t==="cloudCount"?String(Math.round(i)):t==="splashBounce"?`${Math.round(i)}%`:`${i.toFixed(1)}\xD7`}_updateColorConfig(t,i){this._config.custom_colors||(this._config.custom_colors={}),this._config.custom_colors[t]=i,this._syncColorResets(),this._fireConfigChanged()}_syncColorResets(){let t=this._config?.custom_colors||{};this.querySelectorAll(".color-reset").forEach(n=>{n.hidden=!t[n.dataset.target]});let i=this.querySelector("#reset-colors-btn");i&&(i.hidden=Object.keys(t).length===0)}_resetColorConfig(t){this._config.custom_colors&&(delete this._config.custom_colors[t],Object.keys(this._config.custom_colors).length===0&&delete this._config.custom_colors);let i=this.querySelector(`#${t}`);i&&(i.value=f.DEFAULT_COLORS[t]||i.value),this._syncColorResets(),this._fireConfigChanged()}_resetAllColors(){delete this._config.custom_colors;for(let[t,i]of Object.entries(f.DEFAULT_COLORS)){let n=this.querySelector(`#${t}`);n&&(n.value=i)}this._syncColorResets(),this._fireConfigChanged()}_fireConfigChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}set hass(t){this._hass=t,this._initialized&&this.isConnected&&this.updateEntityPickers()}updateEntityPickers(){if(!this._hass||!this.isConnected||!this._initialized)return;this.syncNoteOptions(),N(this.querySelector("#actions-editor"),this._hass),this.readingsEditor?.hass(this._hass),[{id:"#entity",domains:["weather"]},{id:"#outdoor_sensor_entity",domains:["sensor"]},{id:"#feels_like_entity",domains:["sensor"]},{id:"#indoor_temperature_entity",domains:["sensor"]},{id:"#indoor_humidity_entity",domains:["sensor"]},{id:"#sun_entity",domains:["sun"]},{id:"#moon_entity",domains:["sensor"]},{id:"#flights_entity",domains:["sensor"]},{id:"#note_entity",domains:["sensor","input_text"]},{id:"#note_ai_task_entity",domains:["ai_task"]},{id:"#note_calendar",domains:["calendar"]}].forEach(({id:i,domains:n})=>{let a=this.querySelector(i);a&&(a.hass=this._hass,a.includeDomains=n)})}};f.DEFAULT_COLORS={sunny_bg:M("sunny","day").mid,rainy_bg:M("rainy","day").mid,snowy_bg:M("snowy","day").mid,stormy_bg:M("stormy","day").mid,windy_bg:M("windy","day").mid,cloudy_bg:M("cloudy","day").mid,fog_color:"#e0e0e0",text_color:O(T(Q)),temperature_color:O(T(Q)),sun_color:"#ffd67a",rain_color:"#deeaff",snow_color:"#f7fbff"};var U=f;var qe=`
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
`,V=class extends HTMLElement{constructor(){super(...arguments);this._config={};this._initialized=!1}setConfig(t){let i=JSON.stringify(t)===JSON.stringify(this._config);this._config={...t},this._initialized&&!i&&this._render()}set hass(t){this._hass=t,this._initialized&&this.isConnected&&(this._updatePickers(),N(this.querySelector("#st-actions"),t))}async connectedCallback(){this._config=this._config||{},await this._ensureEntityPickerLoaded(),this._render(),this._initialized=!0,this._hass&&this._updatePickers()}disconnectedCallback(){this.innerHTML=""}async _ensureEntityPickerLoaded(){if(!customElements.get("ha-entity-picker"))try{let i=await(await window.loadCardHelpers()).createCardElement({type:"entities",entities:[]}),n=a=>{(a.reason?.message?.includes("localize")||a.reason?.message?.includes("hass"))&&a.preventDefault()};window.addEventListener("unhandledrejection",n);try{await i.constructor.getConfigElement()}catch{}setTimeout(()=>window.removeEventListener("unhandledrejection",n),2e3)}catch{}}_render(){let t=this._config,i=(n,a,e,s)=>`
                    <label class="st-switch" for="${n}">
                        <span>${a}<small>${e}</small></span>
                        <ha-switch id="${n}" ${s?"checked":""}></ha-switch>
                    </label>`;this.innerHTML=`
            <style>${qe}${q}</style>
            <div class="st-editor">
                <ha-entity-picker id="sun-picker" allow-custom-entity></ha-entity-picker>
                ${I(t)}
                <ha-entity-picker id="moon-picker" allow-custom-entity></ha-entity-picker>
                <ha-entity-picker id="weather-picker" allow-custom-entity></ha-entity-picker>
                ${_({id:"title",label:"Title (optional)",value:t.title})}
                <ha-select id="direction" label="Direction"></ha-select>
                <div class="st-switches">
                    ${i("compact","Compact","One line: the next sunrise or sunset beside the sun's path",!!t.compact)}
                    ${i("show_header","Next sunrise or sunset","The headline time and countdown",t.show_header!==!1)}
                    ${i("show_details","Details","First and last light, solar noon, daylight, moon",t.show_details!==!1)}
                    ${i("theme_palette","Blend with dashboard theme","Use theme colors instead of the sky",t.color_palette==="theme")}
                </div>
                <div class="st-actions-title">Interactions</div>
                <div id="st-actions"></div>
            </div>
        `,this._updatePickers(),this._attachListeners(),R(this.querySelector("#st-actions"),this._hass,D(this._config,this._config.sun_entity),n=>this._update(n))}_updatePickers(){let t=[{id:"#sun-picker",value:this._config.sun_entity||"",label:"Sun entity",domains:["sun"]},{id:"#moon-picker",value:this._config.moon_entity||"",label:"Moon phase entity (optional)",domains:["sensor"]},{id:"#weather-picker",value:this._config.weather_entity||"",label:"Share the sky of a weather entity (optional)",domains:["weather"],helper:"Without one, it shares the sky of the weather card on the same sun"}];for(let i of t){let n=this.querySelector(i.id);n&&(this._hass&&(n.hass=this._hass),n.value=i.value,n.label=i.label,n.includeDomains=i.domains,"helper"in i&&(n.helper=i.helper))}}_attachListeners(){this.querySelector("#sun-picker")?.addEventListener("value-changed",n=>{this._update({sun_entity:n.detail.value})}),P(this,n=>this._update(n)),this.querySelector("#moon-picker")?.addEventListener("value-changed",n=>{this._update({moon_entity:n.detail.value||void 0})}),this.querySelector("#weather-picker")?.addEventListener("value-changed",n=>{this._update({weather_entity:n.detail.value||void 0})}),this.querySelector("#title")?.addEventListener("input",n=>{this._update({title:n.target.value||void 0})});let t=(n,a)=>{this.querySelector(`#${n}`)?.addEventListener("change",e=>{this._update(a(e.target.checked))})};t("compact",n=>({compact:n||void 0})),t("show_header",n=>({show_header:n})),t("show_details",n=>({show_details:n})),t("theme_palette",n=>({color_palette:n?"theme":void 0}));let i=this.querySelector("#direction");if(i){let n=this._config.direction??"auto",a=()=>{i.options=[{value:"auto",label:"From your location: right to left south of the equator"},{value:"left_to_right",label:"Left to right"},{value:"right_to_left",label:"Right to left"}],i.value=n};customElements.get("ha-select")?a():customElements.whenDefined("ha-select").then(a),i.addEventListener("selected",(e=>{let s=e.detail?.value;!s||s===n||(n=s,this._update({direction:s==="auto"?void 0:s}))})),i.addEventListener("closed",e=>e.stopPropagation())}}_update(t){let i={...this._config,...t};for(let n of Object.keys(i))(i[n]===void 0||i[n]==="")&&delete i[n];this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}};var De=`
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
`,Ne=[{value:"temp",label:"Temperature"},{value:"feels",label:"Feels like"},{value:"chance",label:"Chance of rain"},{value:"amount",label:"Rain amount"}],oe=["0","3","5","7","10"].map(o=>({value:o,label:o==="0"?"No days":`${o} days`})),Y=class extends HTMLElement{constructor(){super(...arguments);this._config={};this._initialized=!1}setConfig(t){let i=JSON.stringify(t)===JSON.stringify(this._config);this._config={...t},this._initialized&&!i&&this._render()}set hass(t){this._hass=t,this._initialized&&this.isConnected&&(this._updatePickers(),N(this.querySelector("#fc-actions"),t))}async connectedCallback(){await this._ensureEntityPickerLoaded(),this._render(),this._initialized=!0,this._hass&&this._updatePickers()}disconnectedCallback(){this.innerHTML=""}async _ensureEntityPickerLoaded(){if(!customElements.get("ha-entity-picker"))try{let i=await(await window.loadCardHelpers()).createCardElement({type:"entities",entities:[]}),n=a=>{(a.reason?.message?.includes("localize")||a.reason?.message?.includes("hass"))&&a.preventDefault()};window.addEventListener("unhandledrejection",n);try{await i.constructor.getConfigElement?.()}catch{}setTimeout(()=>window.removeEventListener("unhandledrejection",n),2e3)}catch{}}_render(){let t=this._config,i=(c,u,p,x)=>`
                    <label class="fc-switch" for="${c}">
                        <span>${u}<small>${p}</small></span>
                        <ha-switch id="${c}" ${x?"checked":""}></ha-switch>
                    </label>`;this.innerHTML=`
            <style>${De}${q}</style>
            <div class="fc-editor">
                <ha-entity-picker id="weather-picker" allow-custom-entity></ha-entity-picker>
                <ha-entity-picker id="sun-picker" allow-custom-entity></ha-entity-picker>
                ${I(t)}
                <ha-select id="forecast_metric" label="The hours first show"></ha-select>
                <ha-select id="forecast_graph" label="The hours' graph"></ha-select>
                <ha-select id="forecast_days" label="Days"></ha-select>
                <div class="fc-switches">
                    ${i("show_hours","The hours","The hourly row and its chips: drag it, and the sky goes there",t.show_hours!==!1)}
                    ${i("weather_effects","Weather","Rain, snow, fog, wind and lightning move behind the forecast, and go to the hour you drag to",!!t.weather_effects)}
                    ${i("compact","Strip","The hours alone, to sit under the compact weather card",!!t.compact)}
                    ${i("theme_palette","Blend with dashboard theme","Use theme colors instead of the sky",t.color_palette==="theme")}
                </div>
                <div class="fc-title">Interactions</div>
                <div id="fc-actions"></div>
            </div>
        `,this._updatePickers();let n=(c,u,p,x)=>{let y=this.querySelector(`#${c}`);if(!y)return;let b=()=>{y.options=u,y.value=p};customElements.get("ha-select")?b():customElements.whenDefined("ha-select").then(b),y.addEventListener("selected",(d=>{let h=d.detail?.value;!h||h===p||(p=h,this._update(x(h)))})),y.addEventListener("closed",d=>d.stopPropagation())};n("forecast_metric",Ne,t.forecast_metric??"temp",c=>({forecast_metric:c==="temp"?void 0:c})),n("forecast_graph",ie,t.forecast_graph??"line",c=>({forecast_graph:c==="line"?void 0:c}));let a=String(t.forecast_days??7),e=oe.some(c=>c.value===a)||!Number.isFinite(Number(a))?oe:[...oe,{value:a,label:`${a} day${a==="1"?"":"s"}`}].sort((c,u)=>Number(c.value)-Number(u.value));n("forecast_days",e,a,c=>({forecast_days:c==="7"?void 0:Number(c)}));let s=(c,u)=>{this.querySelector(`#${c}`)?.addEventListener("change",p=>{this._update(u(p.target.checked))})};s("compact",c=>({compact:c||void 0})),s("show_hours",c=>({show_hours:c?void 0:!1})),s("weather_effects",c=>({weather_effects:c||void 0})),s("theme_palette",c=>({color_palette:c?"theme":void 0})),this.querySelector("#weather-picker")?.addEventListener("value-changed",c=>{this._update({entity:c.detail.value||void 0})}),this.querySelector("#sun-picker")?.addEventListener("value-changed",c=>{this._update({sun_entity:c.detail.value||void 0})}),P(this,c=>this._update(c));let l=D(this._config,this._config.entity);R(this.querySelector("#fc-actions"),this._hass,l.tap_action?l:{...l,tap_action:{action:"forecast"}},c=>this._update(c.tap_action===void 0&&"tap_action"in c?{...c,tap_action:{action:"more-info"}}:c.tap_action?.action==="forecast"?{...c,tap_action:void 0}:c),{forecast:"Forecast"})}_updatePickers(){let t=[{id:"#weather-picker",value:this._config.entity||"",label:"Weather entity",domains:["weather"]},{id:"#sun-picker",value:this._config.sun_entity||"",label:"Sun, for the sky's time of day (optional)",domains:["sun"]}];for(let i of t){let n=this.querySelector(i.id);n&&(this._hass&&(n.hass=this._hass),n.value=i.value,n.label=i.label,n.includeDomains=i.domains)}}_update(t){let i={...this._config,...t};for(let n of Object.keys(i))(i[n]===void 0||i[n]==="")&&delete i[n];this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}};customElements.get("animated-weather-card-editor")||customElements.define("animated-weather-card-editor",U);customElements.get("animated-sun-tracker-editor")||customElements.define("animated-sun-tracker-editor",V);customElements.get("animated-forecast-card-editor")||customElements.define("animated-forecast-card-editor",Y);})();
