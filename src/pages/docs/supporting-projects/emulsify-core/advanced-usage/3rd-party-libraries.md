---
title: 'Emulsify Core: Adding 3rd-party libraries'
pageTitle: 'Emulsify Core: Adding 3rd-party libraries'
description: How to add npm packages and external scripts to components, Storybook and Drupal.
---

A 3rd-party library needs to load in two places: in Storybook, where Emulsify Core builds your components with Vite, and on your platform (for example, Drupal), which loads the built files from `dist/`.

## Using a library in one component

Install the package with npm and import it from your component's JavaScript file:

```bash
npm install dayjs
```

```js
// src/components/event-date/event-date.js
import dayjs from 'dayjs';

Drupal.behaviors.eventDate = {
  attach(context) {
    once('event-date', '[data-event-date]', context).forEach((element) => {
      element.textContent = dayjs(element.dateTime).format('MMMM D, YYYY');
    });
  },
};
```

Vite bundles the package into the component's built file. If several components import the same package, Vite moves it into a shared file under `dist/assets/`, and each built file loads it with an ES `import` (see [Loading libraries in Drupal](#loading-libraries-in-drupal)).

To run the component's JavaScript in Storybook, import it from the component's story:

```js
// src/components/event-date/event-date.stories.js
import './event-date.js';
```

In Drupal projects (`"platform": "drupal"` in `project.emulsify.json`), Emulsify Core provides `Drupal.behaviors` in Storybook and calls `Drupal.attachBehaviors()` after each story renders. It does not provide `once`, so load it as shown in [Loading a library from a CDN](#loading-a-library-from-a-cdn).

## Global libraries

To make a library available to every story, import it from `config/emulsify-core/storybook/preview.js` and assign it to `window`. This file is loaded by Vite, so use ES `import` statements, not `require()`.

## Loading a library from a CDN

To load a script from a CDN (Content Delivery Network) in Storybook, add it to `config/emulsify-core/storybook/preview-head.html`, which is added to the story preview's `<head>`. For example, to provide Drupal's `once`:

```html
<script src="https://cdn.jsdelivr.net/npm/@drupal/once@1.0.1/dist/once.min.js"></script>
```

Don't use `manager-head.html` for this. It only affects Storybook's own interface, not your stories.

## Loading libraries in Drupal

Emulsify Core does not generate `*.libraries.yml` files. Define the library in your theme, pointing to the component's built file, and list the Drupal libraries it depends on. With the UI Kit, the file is built to `dist/js/<component>/<component>.js`; check your build output for the exact path:

```yaml
# my_theme.libraries.yml
event-date:
  js:
    dist/js/event-date/event-date.js: {}
  dependencies:
    - core/drupal
    - core/once
```

If the built file loads a shared file with `import`, add `attributes: { type: module }` and `preprocess: false` to its entry, so it loads as a module and its relative imports keep working.

Then attach the library from the component's Twig template:

```twig
{{ attach_library('my_theme/event-date') }}
```

In Storybook, `attach_library()` does nothing.

## Vite plugins and Storybook addons

Build tools like Tailwind CSS are added as Vite plugins in `config/emulsify-core/vite/plugins.js`, and Storybook addons in `config/emulsify-core/storybook/main.js`. See [Extension Points](https://github.com/emulsify-ds/emulsify-core/blob/4.x/docs/extension-points.md) in the Emulsify Core docs.
