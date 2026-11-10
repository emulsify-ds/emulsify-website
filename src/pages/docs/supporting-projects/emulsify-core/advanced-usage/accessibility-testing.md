---
title: Accessibility Testing
pageTitle: Accessibility Testing
description: Test Emulsify components with the Storybook a11y addon and the Pa11y-based npm run a11y command.
---

Emulsify Core provides two ways to test accessibility: the Storybook a11y addon, for testing while you work, and a Pa11y-based command-line check that can fail a CI build.

## Storybook a11y addon

Emulsify Core enables Storybook's [Accessibility addon](https://storybook.js.org/docs/writing-tests/accessibility-testing) (`@storybook/addon-a11y`) by default. Open the **Accessibility** panel in Storybook's addons pane to see the violations, passes and inconclusive checks for the current story.

![Storybook Accessibility panel showing violations for a button story.](/images/accessibility-testing.webp)

By default, the addon runs axe-core rules tagged `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa` and `best-practice`, with detailed reports enabled.

To change the addon parameters, export them from `config/emulsify-core/storybook/preview.js`. Emulsify Core merges your overrides into its defaults, so a partial `a11y` object keeps the other defaults:

```js
// config/emulsify-core/storybook/preview.js
export const parameters = {
  a11y: {
    config: {
      detailedReport: false,
    },
  },
};
```

## Accessibility tests (CLI)

The Storybook panel is great for testing while you work. For checks that can fail a CI build, run the command-line check from your theme directory:

```bash
npm run a11y
```

This builds your assets and a static Storybook (`npm run storybook-build`, output in `.out`), then runs Emulsify Core's Pa11y script (axe runner) against your stories. It needs an environment that can launch a headless Chrome browser. On Linux hosts and containers, see Emulsify Core's [Linux browser dependencies](https://github.com/emulsify-ds/emulsify-core/blob/main/docs/accessibility.md#linux-browser-dependencies).

The command exits with status 1 if any story has reportable findings or if a check fails to run, so you can use it as a CI gate. `npm run test` runs your project's Jest tests and does **not** run the accessibility check.

### Configuring the CLI check

Your theme's `config/emulsify-core/a11y.config.js` configures the check. Values you set replace Emulsify Core's [defaults](https://github.com/emulsify-ds/emulsify-core/blob/main/config/a11y.config.js), and the `pa11y` object is merged with Core's Pa11y options.

```js
// config/emulsify-core/a11y.config.js
export default {
  // Ignore specific findings by axe rule ID or description.
  ignore: {
    // Example: codes: ['bypass'],
    codes: [],
    descriptions: [],
  },
  // Extra Storybook story IDs to scan, in addition to stories
  // discovered from the built Storybook's index.json.
  // Keep this array, even when empty. Without it, Core scans its own
  // example story IDs, which don't exist in your theme.
  components: [],
  // Set to false to scan only the IDs listed in `components`.
  discoverStories: true,
  // Maximum number of Pa11y checks (browsers) run at once. Default: 2.
  concurrency: 2,
  // Extra Pa11y options, merged over Core's defaults
  // (axe runner; notices and warnings excluded).
  pa11y: {},
};
```

Stories render on their own, without the rest of the page, so the check can report page-level rules such as `bypass`. If a rule does not apply to your components, add its axe rule ID to `ignore.codes`.

If the built Storybook `index.json` is missing or malformed, the script prints a warning and falls back to the IDs in `components`. If that list is empty, nothing is scanned and the command still exits with status 0.

In Docker containers, Chrome often can't use its sandbox and fails to launch (`No usable sandbox!` or `Running as root without --no-sandbox`). If you see one of these errors in CI, pass `--no-sandbox` through the Pa11y options. Only use it in CI, where you trust the stories being scanned:

```js
// config/emulsify-core/a11y.config.js
export default {
  // ...your existing settings
  pa11y: {
    chromeLaunchConfig: { args: ['--no-sandbox'] },
  },
};
```

### Optional WCAG 2.2 checks

The Storybook panel already runs the `wcag22aa` rules. The CLI check uses Pa11y's axe runner, which selects only WCAG 2.0 and 2.1 rules by default. Emulsify Core 4.5 and later include an optional preset that adds the WCAG 2.2 rules supported by the axe runner (currently `target-size`):

```js
// config/emulsify-core/a11y.config.js
import wcag22 from '@emulsify/core/a11y/wcag22';

export default {
  // ...your existing settings
  pa11y: {
    ...wcag22.pa11y,
  },
};
```

`pa11y.rules` arrays replace rather than concatenate. If you already set `rules`, include your existing rule IDs alongside `...wcag22.pa11y.rules`. If you override `pa11y.runners`, keep `axe` in the list.

Automated checks don't establish full WCAG conformance. Manual testing, including keyboard access, focus behavior and assistive technology, is still required.
