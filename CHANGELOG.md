# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- More chips under the hours: the UV index, wind, gusts, humidity, dew point, cloud cover and pressure, after Temp, Feels like and the rain's chance and amount, one for each value your integration's hourly forecast reports. The wind's figures carry an arrow showing where it blows, an hour of nothing (no UV at night) shows nothing, and the days show each day's own figure where the daily forecast gives one. Where the chips are more than fit, as on a phone, they scroll sideways on their short words, the edges fading where there are more; a swipe on them moves the chips, and the row above still moves through the hours. `forecast_metric` and both editors' Hours open on take the new ones. Air quality isn't part of Home Assistant's weather forecast, so it has no chip. The dev card's days carry a dew point, pressure and cloud cover too.
- The days on the weather card: with `show_forecast`, `show_days: true` puts the week under the hourly row and its chips, as the forecast card shows it, following the chips and the hour you drag to. `forecast_days` sets how many. They ask for a row more for every two days in a sections view, and in a shorter frame they give way first, from the end down to three, then all of them. The editor sets both as Days under the hours, in Forecast and clock.
- Ukrainian translations for the weather cards, the sun tracker and the forecast, selected from the Home Assistant profile language. Thanks to rodion981 ([#37](https://github.com/alexsto1an/ha-ani-weather-card/pull/37)).
- A clear night's moon is in its real phase, where it was always full: a crescent, a half or a gibbous moon, lit on the right side as it waxes and the left as it wanes (the other way round south of the equator), the rest of it a faint disc, as is a new moon. The card works the phase out from the date. With `moon_entity`, the Moon integration's sensor as the sun tracker reads it, it keeps to the phase the sensor names. Its glow is as bright as it's lit, and no star shows through it ([#12](https://github.com/alexsto1an/ha-ani-weather-card/issues/12)).
- The UV index as a reading. `metrics` picks the readings in the row under the temperature, and their order, from humidity, wind, pressure, the next sunset or sunrise and now `uv`; the editor sets four. The UV index comes from `uv_entity`, such as OpenUV's, or from the weather entity when it reports one, and reads as the number and its level, "6 High", on the WHO's scale. On the sky palette its icon takes the level's colour too, from green to violet, and `uv_levels` moves where the levels start. Dragged through the hours, it shows each hour's UV and level. The view that opens on tap shows the sensor's UV, its level, and today's highest from `uv_max_entity` ([#18](https://github.com/alexsto1an/ha-ani-weather-card/issues/18)).
- A weather station's rain as a reading: `rain` in `metrics` shows today's rain from `rain_entity`, such as an Ecowitt's daily rain, and while it rains, the rate from `rain_rate_entity`, each in its sensor's unit. The view that opens on tap shows both, and the station's totals for the rain event, the week, the month and the year (`rain_event_entity`, `rain_week_entity`, `rain_month_entity`, `rain_year_entity`) ([#33](https://github.com/alexsto1an/ha-ani-weather-card/issues/33)).
- Weather in another place, with that place's own sun. Give a weather card, a forecast card or a sun tracker a place's `latitude`, `longitude` and `time_zone`, and it works out that place's sun from the coordinates, as Home Assistant works out `sun.sun` for yours. Its sky turns to night when night falls there, its sunset reading, its moon and its sun tracker are that place's, a clear sky is sunny or a clear night by that place's sun (some weather entities decide it by yours), and every time it shows (the clock, the forecast's hours, the sunset) is in the place's time zone. Before, a card for another place showed that place's weather under your own sky and in your own time. A sun tracker needs no `sun_entity` with them, and pairs with the weather card on the same coordinates. The editors have the three fields. Sun2's sensors aren't a sun entity the card can follow, so the coordinates stand in for them ([#34](https://github.com/alexsto1an/ha-ani-weather-card/issues/34), [#35](https://github.com/alexsto1an/ha-ani-weather-card/issues/35)).

### Changed

- The weather card's editor, redesigned. It opens on the basics, six controls that get a card running: the weather entity, the place name, the layout (regular, compact or nightstand, one choice where compact and the nightstand were apart), the sky's colours or your theme's, the forecast, and the weather note (off, written by your AI, or from an entity). **Show all settings**, the advanced settings switch at the top, adds every other option: more rows in the same sections, and five sections after them that open when you tap them, each saying what's in it, Readings, Sky and motion, Custom colors, Planes and Interactions. The switch is kept in this browser and never written to the card's YAML, and with it off, any setting you've changed still shows, in its place. Options that depend on another appear under it when it's on, where they were greyed out and could still be changed from the keyboard, and the nightstand's settings no longer show on a regular card. Switches say what they turn on ("Shake on lightning", where "Turn off the lightning jolt" was), and the editor writes nothing for a default. Pairs of options are one choice each: the time and the date, how the readings show, the indoor line, the plane tags, the days under the hours; each writes the same YAML as before. The readings are a list of one line each, opened in place. Reset amounts and Reset all colors work in place, where Reset closed every section and left `engine_settings: {}` behind. A colour set in YAML by name, such as `white`, shows in its colour well, where it showed black. The coordinates for another place have no sample values in their fields, which read as if they were set. Motion follows your device's reduced motion setting. The forecast card's and the sun tracker's editors are laid out the same way, with the same switch, one for all three editors: the forecast card opens on the weather entity, Card or Strip, and the colors; the tracker on the sun entity, Regular or Compact, and the colors. What a strip or a compact tracker has no room for (the days, the title, the details) shows only on the full card, and both editors now offer Simulated weather (`dev_mode`), which the two cards already took in YAML.
- The readings are one list, `readings`, and a table in the editor. Each row is a type and, where it needs one or you'd rather, an entity: humidity, wind (with a direction sensor), pressure, the next sunset or sunrise, UV, rain (with its rate), and new: air quality, feels like, dew point, visibility, cloud cover, gusts, and any sensor at all, as Home Assistant words it under its own name or one you give. Types the weather entity reports read it unless the row names a sensor. Air quality reads as the number and its US EPA level, "42 Good", its icon coloured by the level on the sky palette (`aqi_levels` moves the bands). A row can be view only: it shows in the view that opens on tap and not in the card's row, which is where a station's rain totals and today's highest UV always go; the view also shows the card's air quality and sensors. In the editor, Readings is a list: a line per reading that opens to its type then its entity, moved, removed, or marked view only, and Add a reading. The old options (`metrics`, `show_sun`, the reading sensors, `uv_entity`, `uv_max_entity`, `rain_*`) still work without `readings`; the list replaces them the first time you change it. A reading whose sensor hasn't reported yet shows "--" until it does; a rain row with no sensor set is left out, where it showed "--". Dragged through the hours, every reading the forecast reports goes to the hour in the weather entity's units, where a sensor's reading took the hour's number with the sensor's unit.
- Under a mouse, a card you can drag through the hours (the weather card with its forecast, the forecast card, the wall) shows an open hand, closed while you drag, as does the dev card's time.
- The dev card replaces the developer panel. Add `type: custom:animated-weather-dev-card` to a dashboard and it drives every Animated Weather card on it: they read its simulated weather instead of yours and do what they would do with it, so the forecast, the slide, the view on tap, the wall, the nightstand, the note, the readings and another place can all be tried. Pick the condition; move the time of day and the date, and the sky, the sun, the moon, the clock, the forecast's hours, the tracker and the nightstand follow, on the real sun where your Home Assistant is; set the readings, which fill the weather entity and every sensor a card names, in your units; choose whether the weather offers hours and days, days or no forecast; and have notes written from samples or by your own AI Task, kept apart from the notes your other screens show. Live gives the cards your weather back, and Fly a plane and Pause all work on both. `cards: dev_mode` drives only cards with `dev_mode: true`, beside your others, without time travel, which moves every card's clock. Remove the dev card and the cards are back on your weather.
- `dev_mode: true` now means a card runs on the dev card's simulated weather, with no `entity` needed, and keeps everything a card does: the forecast, the clock, the note and its gestures, which the developer panel's sample data turned off. It says Simulated in its corner, as does every card the dev card drives while Simulated is picked, so none is taken for your weather. Without a dev card on the dashboard, it shows the weather the dev card was last set to in this browser, partly cloudy until then, at the real time.

### Fixed

- A nightstand with the note on (`show_note: true`) kept asking your AI for notes it never showed, since the nightstand draws its own lines. It no longer loads the note writer, and asks for its six rows without the note's. A nightstand also set to `compact: true` asked for the compact strip's two rows; the nightstand wins, as the editor's one Layout choice has it.
- `planes_on_load: true` flew nothing. The card took its first look at the flights as the dashboard opened, before the planes had loaded, and the planes already overhead were dropped. They now wait for the planes to load and for the card to be on screen, then the ones still up fly, as they report then ([#36](https://github.com/alexsto1an/ha-ani-weather-card/issues/36)).
- A weather card with the forecast on that was resized past 640 px wide, such as to 24 columns in a two-column section, showed the hours in the top right corner, the readings over the temperature and the temperature cut off: it kept the hours where a narrower card has them. The hours now move to the hero's column when the card grows past 640 px, and back under the readings when it shrinks ([#32](https://github.com/alexsto1an/ha-ani-weather-card/issues/32)).
- In the view that opens on tap, a reading's label too long for its column, such as "Couverture nuageuse" or "Luchtvochtigheid", and the gusts under the wind in some languages, were cut short with an ellipsis. They now wrap between words, a word too long for a line of its own hyphenates by its language's rules, and the readings in a row keep their values on one line. On a tablet, where the readings make the right column taller than the screen, as a weather station's can, that column now scrolls from the week down, where the week went over the top of the panel.
- The view that opens on tap kept the size it opened at when the window changed while it was open: turn a tablet, or resize a browser window, and it was cut off, or kept a tablet's two columns on a phone's screen. It now follows the window: its panel, its layout and the swipe down to close go with the new size, and closing shrinks it back onto the card where the card now is.

## [1.3.2] - 2026-11-15

### Changed

- A clear night has more going on. A wider card has more stars, so its sky is as full as a phone's: 15 on a phone, about 40 across a desktop's compact strip, up to about 60. Half of them twinkle, where a third did, and they dim further, to a quarter to under half of their light, so you can see it.
- No star sits behind the card's words, or just beside them where it read as punctuation ("Clear; night"). Stars are placed clear of the text and icons, and one the words move over when the card is resized steps out of sight until they move away.

### Fixed

- Dragging a forecast card through the hours moved a sun tracker on its sun but not a weather card on its weather, unless that card had `show_forecast` on. A weather card without it now follows the card you drag: its sky and weather, the temperature, the condition and the readings go to the hour, the hour shows on its location line, and it comes back to now with that card. It only follows: no row, no drag of its own, and its tap is unchanged. A dashboard where nothing is dragged loads nothing new.
- On the compact strip with the forecast on, the hour you dragged to was named on a line of its own under the temperature, squeezing the condition; it's now named in the quiet line under the condition.
- A weather card dragged through the hours came back to the readings from before the drag when Home Assistant sent new ones in the meantime, until the next update; it now shows the new ones as it comes home.
- With reduced motion on, or `animate: false`, a clear night was empty: the still sky kept the sun by day but drew no moon or stars at night. It now keeps them, still, with no twinkle.

## [1.3.1] - 2026-11-14

### Added

- The cards speak Norwegian (Bokmål), the forecast's words included, and Nynorsk shows the same words. Thanks to Henrik Hills ([#21](https://github.com/alexsto1an/ha-ani-weather-card/pull/21)).

### Changed

- The forecast card shows its sky alone by default: the condition's colour and light, going to the hour you drag to, with no rain, snow, fog, wind or lightning moving in it, so stacked under the weather card the weather falls once. `weather_effects: true`, also a switch in its editor, brings them back. The view that opens on tap keeps its weather.

### Fixed

- The forecast labelled rain in millimetres as inches. Any weather entity that reports its rain unit, mm included, read as inches: its amounts carried "in" with two decimals, and the amount's bars were scaled for inches, on the hourly row, the forecast card's days and strip, the view that opens on tap and the wall. The forecast now uses the entity's own unit, or without one the unit system's, and so do the view's readings and the weather note.
- A sun tracker with no `weather_entity` showed a clear sky until a weather card on its sun was dragged through the hours, then that card's sky, then the clear sky again. It now shares the sky of the first weather card on its sun from the start; `weather_entity` still names one.
- A forecast card without its hours, following a weather card dragged through the hours, took the hour's sky but kept its own weather: its rain kept falling at a dry hour. With its weather on, it now takes the hour's weather too, and gives it back when the card comes home.

## [1.3.0] - 2026-11-14

### Added

- A clock on the weather card: `show_clock` puts the time at the start of the location line, "13:10  Home". It changes only on the minute, and only the figures that change fade. It follows your profile's 12- or 24-hour setting and time zone, adds no rows, and on the compact strip leads the quiet line. For a large clock, `hero: clock` below makes the time the big value.
- The date and a big clock: `show_date` puts today's date after the time on the location line, "13:10  Fri 13 Nov  Home", dropping its month and then the place where the line runs short. `hero: clock` makes the time the big value in the temperature's place, with the temperature leading the condition's line, "21° Partly cloudy", on the weather card, in the view that opens on tap and on the wall. Dragged through the hours, the big time shows the hour under the needle; it's one size all day and keeps short of the sun's light. Both are in the editor's Forecast and clock section ([#14](https://github.com/alexsto1an/ha-ani-weather-card/issues/14)).
- The forecast on the weather card: `show_forecast` adds today's high and low beside the condition, a line on what turns under it ("Rain from 17:00 to 19:00", "Dry all day"), and the next hours in a row at the card's foot, under the readings and the divider, an hour to a column with an icon every hour and the value on one line: six hours on a phone, more on a wider card. With a note shown, the note tells what's coming and the line on what turns steps aside. Centred chips under the row switch it between the temperature, feels like, the chance of rain and the amount (`forecast_metric` picks the first), and a metric your integration doesn't report has no chip. The card asks the sections view for eight rows, five without an hourly forecast, and in a shorter frame the chips, the icons and the row give way before the temperature shrinks.
- The slide through the hours: drag the card sideways and its real sky, light, sun, clouds, fog, wind, rain, snow and lightning, the temperature, the condition and the readings go to the hour under the needle. It stays where you leave it, a flick carries on the way a list does, and the location line says which hour it is and how far ahead. It comes home when you tap Now, press Home or Escape, leave it for half a minute, scroll it away or hide the page, and when a new forecast arrives. A vertical drag still scrolls the dashboard. The hours are a slider for the keyboard and screen readers, and with reduced motion the sky steps with the hour instead of moving. The needle names the hour: "Now" lifts into a white capsule as you take hold, the hours slide under it, and it counts them back on the way home before settling into "Now" again.
- Icons for the forecast: one filled set, each condition in its own drawing. Each is lit by the light of its own hour: white by day, rose at dawn, peach at dusk and slate at night, each lightened until it holds 3.2:1 against the brightest sky it can sit over. On the theme palette they take Home Assistant's icon colour.
- The forecast card, `custom:animated-forecast-card`: the line on what turns, the hourly row with its chips, and up to ten days with their ranges on one scale for the week, each bar taking the width beside the low, on your weather entity's sky. Its row slides like the weather card's, and the card's real weather goes to the hour you leave it at. As a strip (`compact: true`) it sits under the compact weather card, its labels on the card's text edges. The card picker suggests it, as Forecast and Forecast strip, for a weather entity.
- The view that opens on tap: with the forecast on, a tap grows the card's sky into the screen, with the hours and chips, seven days, every reading the entity reports, and History and settings for Home Assistant's own dialog. It closes with ×, Escape, Back, a tap outside or a swipe down, and moves focus in and back like any dialog.
- A nightstand: `layout: nightstand` makes the weather card a bedside clock, with the time as the hero. At night it goes red on black, like a bedside clock's night mode, for the time, the next alarm (`alarm_entity`) and one line with the temperature, the condition and what's coming before you're up, the weather still moving behind them very faintly in the same red; `night_red: false` turns its sky down under a veil in two dim, warm colours instead. Night comes from a light sensor beside it (`night_sensor`, dark below `night_lux`, 5 lx unless you set it), or runs from `bed_time` to the alarm or `wake_time`, or is set with `night`. Beside the time, the weather always keeps room for its lines: on a wide card the time is sized to leave it.
- The wall: the weather card with the forecast, at 640 × 540 px or larger, lays itself out for reading across the room, every size following the panel's from a wall tablet to a TV: the time and the date over the temperature and today's line, open sky, and at the foot the line on what turns over two-hour columns, with five days set apart beside them, each on one of the hours' lines. A portrait tablet puts a week under the hours.
- A Forecast and clock section in the weather card's visual editor, with every new option, and a visual editor for the forecast card.
- The forecast's words, from "Rain until 19:00" to the chips and the days, in all nine of the card's languages.
- One needle across the dashboard: while you drag the weather card through the hours, the other cards follow. A forecast card on the same weather goes to that hour with it, its row, sky and days, and dragging the forecast card takes the weather card along; whichever you touch leads. A forecast card without hours shows the day and takes the hour's sky. A sun tracker on the same sun moves its sun to that time and takes the card's sky, with the same `weather_entity` or none of its own; only the sky's colour, never its weather. They come back to now together.
- The days follow the hours: on the forecast card, in the view that opens on tap and on the wall, the day the hour falls in stands out in bold, with a dot on its bar at that hour's temperature, the other days stepping back. On the forecast card and in the view, the chips change what the days show too: each day's feels-like range, its chance of rain or its amount, as bars from zero.
- Planes can say where they're going: `flight_label: route` tags each with its route from Flightradar24, "Lisbon → Paris", or the airport codes on a narrow card, and `both` puts the flight under it. A flight with no route keeps its number. The editor has it beside the flight labels ([#11](https://github.com/alexsto1an/ha-ani-weather-card/issues/11)).
- Planes can fly slower: `plane_speed: 0.5`, or as low as `0.25`, so you can follow one and read its tag, and `planes_on_load: true` also flies the planes already overhead when the dashboard opens. Both are in the editor ([#19](https://github.com/alexsto1an/ha-ani-weather-card/issues/19)).
- The temperature's own colour: `custom_colors.temperature_color`, on either palette. On the theme palette, where the temperature and the rain take your theme's accent colour, the editor's Colors now offers the temperature, text, sun, rain and snow too; only the skies are the colorized palette's ([#20](https://github.com/alexsto1an/ha-ani-weather-card/issues/20)).
- The sun tracker runs right to left south of the equator, where the sun crosses the sky from your right to your left as you face it. `direction` takes it from your Home Assistant location by default, or sets `left_to_right` or `right_to_left`, and the editor has it ([#13](https://github.com/alexsto1an/ha-ani-weather-card/issues/13)).
- The hours' graph, the same kind for every metric: `forecast_graph: line` (the default), `area` (the line over a soft fill), `bars`, or `none` (the values alone), on the weather card, the forecast card, the view on tap and the wall, and in both editors. The chance of rain and its amount used to switch to a fill and to bars of their own.
- The live demo has a forecast section: the weather card with the forecast, the clock and the date, where Big value makes the time its big value, the forecast card, and the compact card over its strip, on 48 hours and 10 days of sample forecast, or your own when you show the demo your weather. Its paint lab sets the temperature's colour too, and the README shows the forecast, the big clock, the forecast card, the nightstand and the wall. Its other screenshots and the share image are drawn again with the cards' new icons.

### Changed

- With `show_forecast` on, a tap on the weather card opens the forecast view instead of the entity's details. `tap_action` still sets it to anything else, and while the forecast is on, the view is an action of its own, `forecast`, for a tap, a hold or a double tap. On the nightstand, a tap does nothing unless `tap_action` sets it. The editor's Interactions show the tap the card really does.
- The weather card's icons for humidity, wind, pressure, sunrise and sunset, the indoor reading and a card with no data, and all of the sun tracker's, its eight moon phases included, are drawn from the forecast's set, inside the cards, instead of Material Design Icons, so the cards speak one set. The wind and pressure arrows are unchanged.
- On a partly cloudy day, the sun is behind the clouds: a cloud passing in front of it thickens and brightens, lit from behind, and hides the part of the sun it covers, and the sun's light dims as it's covered. On the theme palette, where clouds are faint flat shapes, each cloud over an opaque card rides over an unseen twin in the card's own colour that hides the sun behind it, so the clouds look exactly as before; over a see-through or image card background they stay as they were. The clouds were always in front, but they're see-through, so the sun's bright disc showing through made them look as if they passed behind it.
- The times on the cards follow your profile's time zone setting, the server's or the device's: the sun tracker's times and its sun's place on the path, the weather card's sunset or sunrise, and the new clock. They always followed the device's time zone before.
- The card ships as six files. The forecast, the clock, the forecast card, the nightstand and the view on tap are drawn by `animated-weather-card-forecast.js`, which loads only for cards that use one of them; a manual install copies it beside the others. `animated-weather-card.js` grows by about 7.8 KB gzipped, to about 84 KB, 2.3 KB of it the icons.
- The README, the setup guide and the live demo install the card from the Marketplace, which replaced HACS in Home Assistant 2026.11: their buttons open it there, and HACS stays in the install steps for older versions. A card installed with HACS moved to the Marketplace with the update and keeps updating. Nothing in the card changed: the Marketplace reads the same catalog and the same `hacs.json`.

### Fixed

- A temperature that rounds to zero reads "0°", never "-0°": at −0.5 °C the card showed "-0°", and so could feels like, indoors, the forecast's highs and lows and the hours. A negative that rounds away from zero, such as −0.6 °C, still reads "-1°" ([#22](https://github.com/alexsto1an/ha-ani-weather-card/issues/22)).
- On the sky palette, fog is the light haze the live demo shows, and `custom_colors.fog_color` colours it, on a card that doesn't set `color_palette`, which is most of them. Such a card painted its fog in the theme's secondary text colour and ignored `fog_color`, as if it were on the theme palette. The editor's Colors now offers the fog's colour too, with the skies.
- In Firefox, fog and clouds no longer bring up the dashboard's scrollbars as they drift past the card's edge, and wind's leaves no longer widen the page there: in Firefox they stay inside the card ([#16](https://github.com/alexsto1an/ha-ani-weather-card/issues/16)).
- A clear evening before 20:00 showed an empty night sky, with no moon and no stars, and stayed that way all night. That's every clear evening where the sun sets early, such as autumn and winter in Europe. The card decided between the sun and the moon by the clock instead of by Home Assistant's `clear-night`. Home Assistant's `clear-night` and `sunny` now decide at any hour, for the sun tracker's shared sky too. A condition from another integration that only says "clear" follows the sun. With `enable_day_night_cycle`, the hours still decide, as before.

## [1.2.0] - 2026-11-06

### Added

- Both cards are easier to add. In Home Assistant 2026.6 and later, picking your weather entity under **By entity** suggests the weather card, regular and compact, under **Community**, and picking `sun.sun` suggests the sun tracker. In the card list, both cards now show themselves moving, on your own weather and sun.
- Tap, hold and double-tap actions on both cards: `tap_action`, `hold_action` and `double_tap_action` take Home Assistant's card actions, such as navigating to another view or running a script. A tap still opens the entity's details by default, and on the sun tracker it now opens the sun's. Both editors have them, under Interactions.
- Temperatures to one decimal: `temperature_decimals: 1` shows the temperature, "feels like" and the indoor temperature as 21.5°, in your language's format. It's a switch in the editor's Display section.
- A bug report on GitHub starts from a form that asks for what it takes to fix it: the card and Home Assistant versions, the browser or app, the card's YAML and a screenshot. Ideas have a form of their own, and questions point to the setup guide's troubleshooting.

### Changed

- A weather card added from the card list starts on your weather entity and `sun.sun`, and takes its location from the entity's name. It used to start on `weather.forecast_home`, named "Weather", with every option written out. A sun tracker starts with your moon sensor, if you have one.
- The sun tracker's visual editor now comes with the weather card's, in `animated-weather-card-editor.js`, which loads the first time you open either card's settings. With it out of the main file, everything this release adds grows `animated-weather-card.js` by less than half a kilobyte gzipped.
- The README's HACS badge says Default instead of Custom, now that the card is in HACS's default store.

### Fixed

- On iPhones and iPads, a cloud could carry a thin dark line down its right side, in the sky palette. Safari's blur drew it into the cloud. Each part of a cloud is now blurred once, through a mask drawn on a canvas, and looks as it did. On a Mac, Safari's clouds come out a touch crisper, as they are in other browsers.
- A compact strip too narrow for the condition shrinks its temperature to keep the condition whole, instead of cutting it to a letter or two.
- "Feels like" from the weather entity now updates when it changes on its own, and so does a pressure in inHg that moves only after the decimal point. Both waited for another value to change.

## [1.1.1] - 2026-11-02

### Added

- A share image for the live demo and the setup guide: a link to either unfurls with the card on its partly cloudy day under the headline. Both pages carry the Open Graph and Twitter card tags for it.

### Changed

- The README and the setup guide lead with the HACS search, now that the card is in HACS's default store. The custom repository steps stay as a fallback.

### Fixed

- Weather no longer brings up the dashboard's scrollbars. Fog, clouds and leaves were hidden past the card's edge but still counted towards the page's size, which showed most in the last column and on phones. Spilled weather looks as it did.
- Rain, snow and sleet no longer leave particles frozen at the card's top edge after you switch tabs or the card scrolls away and back. Each pause could strand a particle that had just started to fall, and it stayed there until the weather changed.

## [1.1.0] - 2026-10-25

### Changed

- GSAP, the animation library, is bundled into `animated-weather-card.js` instead of loaded from cdnjs.cloudflare.com: the card fetches no code from anywhere else, and moves on screens without internet access. The main file grows to about 76 KB gzipped. The card always uses its own GSAP, and leaves alone any other card's on the same dashboard.
- The live demo's cards let their weather spill on phones too, as they do on a dashboard. Before, every card kept its weather inside on screens 640 px wide or less, even with the tuning section's Keep the weather inside switch off; now that switch is what keeps it in.

### Fixed

- Text from an entity or the config could break out of the HTML it was written into: a moon sensor whose state held a quote, any value in the visual editor, and a `rgb()` or `rgba()` colour with quotes or a semicolon in it. The sun tracker now builds a moon icon only from Home Assistant's eight phases, the editor escapes every value, and colours take only numbers inside `rgb()` and `rgba()`.
- The visual editor stopped drawing when an engine setting in YAML wasn't a number. It now shows the default the card falls back to.
- A fog colour set in YAML (`custom_colors.fog_color`) wasn't checked, and could add CSS of its own to the fog. It now has to be a colour, like the others.
- A moon sensor whose state matched a name every JavaScript object has, such as `constructor`, was taken for a phase. Only Home Assistant's eight phases count now, and the same goes for condition names.
- `custom_colors.sun_color` now colours the whole sun. Its rim kept the default orange, and on browsers without registered CSS properties the sun's disc wasn't drawn at all.

## [1.0.2] - 2026-10-25

### Changed

- The repository runs HACS's own validation on every change and daily, ahead of submitting the card to HACS's default store. Nothing in the cards changed.

## [1.0.1] - 2026-10-24

### Fixed

- Installing through HACS failed with "Could not download". `hacs.json` told HACS the release was a zip (`zip_release`) while naming the card's JavaScript file as the one to fetch, so HACS downloaded that file and tried to unzip it. HACS now installs the release's five files directly and registers `animated-weather-card.js` as the dashboard resource. Releases no longer carry a zip.

## [1.0.0] - 2026-10-24

The first public release: two cards for Home Assistant, the Animated Weather Card and the Animated Sun Tracker, in one download.

### The weather card

- **A sky for every condition.** Each condition has its own layered sky, and its light follows the real sun from `sun.sun` through dawn, day, dusk and night, dissolving from one to the next. The temperature leads, with the condition, "Feels like" and your indoor reading under it, and the metrics in one quiet row: humidity, wind, pressure and the next sunset or sunrise.
- **Weather that moves like weather.** Rain falls at a steady pace and splashes on the card's lower edge, snow drifts with the wind with the smaller flakes farther away, fog drifts in layers, leaves blow across on windy days, and lightning lights the sky from above with the card's jolt following like thunder. The live wind speed sets how fast it all moves. Rain, snow and leaves can fall out of the card onto the dashboard (`spill_particles`).
- **A note from your AI.** With `show_note`, Home Assistant's AI Task (2025.8 or later) writes a line and a longer note from the hours ahead: when rain starts and stops, the high and low, gusts, UV, and what to wear when you're out, from your calendar (`note_calendar`), which sends only its events' times. The card works out the facts and the AI only words them. Pick a voice (`note_tone`): snarky, calm, friendly or dry. Serious weather always gets plain advice. Every screen you're signed in on shares the one note, rewritten after an hour or when the forecast changes, and only while a screen shows the card. Or show a note from any text entity (`note_entity`).
- **Planes overhead.** With the Flightradar24 integration (`flights_entity`), each flight that enters your area crosses the card once, at its real heading, altitude and speed, labelled with its flight and type. It's drawn as its aircraft: an airliner, a wide-body, a 747, a rear-engine or business jet, a turboprop, a light aircraft or a helicopter. After dark, it's its lights: green or red at the near wingtip, white strobes and a red beacon.
- **Your own sensors.** Temperature, feels like, humidity, wind speed and direction, pressure, and an indoor reading, from your weather station. The sky still follows the forecast.
- **Fits any frame.** The metrics share a row when they fit and fold into a grid when they don't, measured against the labels in your language. Wide cards move the metrics beside a larger temperature, short sections rows step down to tighter layouts instead of clipping, and `compact: true` gives a single strip. The card sizes itself in the sections view.
- **Your colours.** The sky palette, or the theme palette (`color_palette: theme`), which drops the sky and draws the weather in your theme's colours, light or dark. Recolour any sky, the text, the sun, the rain and the snow (`custom_colors`), or define whole skies in your theme. Seven engine settings scale the weather (`engine_settings`).
- **Live, and calm about it.** New readings fade in without a re-render, and a new condition fades the old weather out as the new one arrives. Motion rests while the tab is hidden or the card is scrolled away, and with `auto_pause` while the window is in the background.

### The sun tracker

- The sun's path across your day, with the next sunrise or sunset as the headline, first and last light, solar noon, the length of the day, and the moon's phase from the Moon integration.
- Its sky follows the sun in the weather card's palette, and `weather_entity` gives it your weather's sky, so a compact tracker under the weather card reads as one piece.
- Regular, wide and compact layouts, and the theme palette.

### For everyone

- **Readable in every sky.** Every built-in sky is tested to meet WCAG AA contrast where the card's text sits. Screen readers hear temperature and condition changes, and decorative layers are hidden from them. With reduced motion, the sky stays still.
- **Speaks your language.** Conditions, the humidity, wind and pressure labels, and the moon phase come from Home Assistant's translations. The cards' own words, like "Feels like" and "Sunset", are in nine languages, and fall back to English in others. Times follow your profile's 12- or 24-hour setting.
- **Set up visually.** Every weather card option is in the visual editor, and YAML is there when you want it.
- **Light to load.** Five files: only `animated-weather-card.js` is a dashboard resource, about 49 KB gzipped, and it loads the editor, the note writer, the planes and the developer panel only when a card needs them. GSAP comes from a CDN; without it, the card shows the sky and every value, still.
- **Try it first.** A [live demo](https://alexsto1an.github.io/ha-ani-weather-card/) runs the real card in your browser, on sample data or your own weather, and a [setup guide](https://alexsto1an.github.io/ha-ani-weather-card/setup/) walks through every step.
- **Developer mode.** `dev_mode: true` shows sample weather with a panel for every condition, time of day and layer, and a Fly a plane button. Only a card in dev mode logs to the console.

[Unreleased]: https://github.com/alexsto1an/ha-ani-weather-card/compare/v1.3.2...HEAD
[1.3.2]: https://github.com/alexsto1an/ha-ani-weather-card/compare/v1.3.1...v1.3.2
[1.3.1]: https://github.com/alexsto1an/ha-ani-weather-card/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/alexsto1an/ha-ani-weather-card/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/alexsto1an/ha-ani-weather-card/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/alexsto1an/ha-ani-weather-card/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/alexsto1an/ha-ani-weather-card/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/alexsto1an/ha-ani-weather-card/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/alexsto1an/ha-ani-weather-card/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/alexsto1an/ha-ani-weather-card/releases/tag/v1.0.0
