// The dev bundle (animated-weather-card-dev.js): the dev card and its world, loaded only by a dev card on the page or
// a card in dev_mode (dev-link.ts). The world starts as the bundle loads, and every card reads Home Assistant again
// through it.

import { attach, theWorld } from './dev-card';
import { DEV_EVENT } from './dev-link';

theWorld();
window.AnimatedWeatherCardDevCards = { attach };
window.dispatchEvent(new CustomEvent(DEV_EVENT));
