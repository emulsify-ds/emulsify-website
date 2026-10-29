---
title: Upgrading
pageTitle: Upgrading
description: Upgrading documentation for various version of Emulsify's Drupal theme.
---

Before choosing an upgrade path, check which release of the base theme is installed with `composer show drupal/emulsify`.

## Upgrading the Emulsify base theme from 6.x to 7.x

Emulsify 7.x is a **breaking** release. Plan it as a theme-platform change, not a patch update. The canonical, always-current guide is [UPGRADE.md](https://github.com/emulsify-ds/emulsify-drupal/blob/main/UPGRADE.md).

### Breaking changes

- Drupal 10 support is removed; Drupal **11.3+** is required (Drupal 12 compatibility is forward-looking).
- The `stable9` parent theme is removed; Emulsify now uses `base theme: false` and ships its own complete template layer.
- The `drupal/components` dependency is removed.
- `drupal/emulsify_tools:^2.2` is required.
- Generated child themes moved from Webpack to **Vite** and use **Emulsify Core 4**.
- `whisk` is a generation-only Starterkit source. Do not enable it directly.
- Favicons use a generated-package workflow (theme settings save or Emulsify Tools Drush commands, never on page requests).
- Hook implementations moved to Drupal 11.3+ `#[Hook]` attributes; legacy 6.x procedural hook includes are removed.

### Recommended upgrade path

1. Update the site to Drupal 11.3 or newer.
2. Update the parent theme and Emulsify Tools together:

   ```bash
   composer require 'drupal/emulsify:^7' 'drupal/emulsify_tools:^2' --with-all-dependencies
   drush updb -y
   drush cr
   ```

3. Regenerate or review custom child themes so they inherit from `emulsify` (not `stable9` or `whisk`). Existing child themes are **not** rewritten by the update; generate a new theme with a new machine name (`drush emulsify my_theme_7`) to compare against.
4. If a child theme has a copied `templates/layout/page.html.twig`, delete it so the theme inherits the parent's page template. To keep customizations, extend `@emulsify/templates/layout/page.html.twig` and override only the blocks you need (see the [template extension guide](https://github.com/emulsify-ds/emulsify-drupal/blob/main/docs/template-extension.md)).
5. Move frontend scripts and habits from Webpack to the Vite workflow (see Emulsify Core's [Migration to 4.x guide](https://github.com/emulsify-ds/emulsify-core/blob/main/docs/migration-4x.md)). Generated themes include `npm run audit` (and `npm run audit:twig-stories`) to report Webpack-era patterns, unresolved Twig includes and stories that should move to `renderTwig()`.
6. Favicons: `drush updb` (step 2) backfills the new favicon keys. Run `drush emulsify_tools:repair-favicon-config [theme]` to backfill child-theme `config/install` and `config/schema` files, then run `drush emulsify_tools:favicon-generate [theme]` after each config import. PNG and ICO generation need the PHP `gd` and `Imagick` extensions.

### Twig includes

For new work prefer Drupal SDC names, such as `{% include "my_theme:list" with { items: items } only %}`. Legacy namespace includes such as `{% include "@components/button/button.twig" %}` still work.

### Minor 7.x upgrades

- **7.2.1 → 7.3.0:** run the `composer require` command above, then:
  - **Required:** delete the child theme's copied `templates/layout/page.html.twig` to receive the parent's page fixes (see step 4 above), then run `drush cr`.
  - If generated favicons are enabled, run `drush emulsify_tools:favicon-generate [theme]` (or save the theme settings), then `drush config:export` and commit the updated `[theme].settings.yml`.
  - Optional: to adopt the latest Emulsify Core, run `npm install @emulsify/core@^4.5.0` in the child theme, then rebuild assets.
- **7.2.0 → 7.2.1:** requires Emulsify Tools 2.2+, which delegates theme generation to Drupal Starterkit. The `composer require` command above picks it up.
- **7.1.x → 7.2.0:** adds an optional component inspector. To use it in an existing theme, run `npm install @emulsify/core@^4.3.1` and add `"inspect:components": "emulsify-inspect-components"` to the `package.json` scripts.
- **7.0.0 → 7.1.0:** backward compatible. Clear caches, rebuild assets, and regenerate favicon packages after config import.

## Upgrading the Emulsify base theme from 5.x to 6.x

Run `composer require drupal/emulsify:^6.0` to install the 6.x base theme. Newly generated sub-themes use Emulsify Core 3. To upgrade an existing custom theme, see [Emulsify Core Upgrading](/docs/supporting-projects/emulsify-core/upgrading).

---

An older Emulsify theme that does not use Emulsify Core can be moved to a new Emulsify child theme by following one of these scenarios:

## Scenario: Existing Drupal Project/Theme

1. Install the base theme and its helper module: `composer require 'drupal/emulsify:^7' 'drupal/emulsify_tools:^2' --with-all-dependencies`
2. Enable the helper module: `drush en emulsify_tools -y`
3. Uninstall the existing theme: `drush theme:uninstall [theme_name]`
   - [OPTIONAL] To keep the existing theme's name, rename the old theme directory (e.g., `THEMENAME_old`) and its `.info.yml` file (e.g., `THEMENAME_old.info.yml`).
4. Generate an Emulsify child theme: `drush emulsify [theme_name]`
5. Move your components into the new theme following your component library's structure (new themes use Single Directory Components and declare this in `project.emulsify.json`).
6. Compare the old theme's `package.json` with the generated one. Generated themes depend only on `@emulsify/core`; keep only the additional packages your project actually uses.
7. Carry forward lint, Storybook, a11y and build customizations in `[new theme]/config/emulsify-core/` (`eslint.config.js`, `stylelintrc.config.json`, `prettierrc.config.json`, `a11y.config.js`, `storybook/`, `vite/`). Webpack customizations must be rewritten as Vite plugins (`config/emulsify-core/vite/plugins.*`).
8. Delete `node_modules/`, run `npm install`, then `npm run audit`, `npm run build` and `npm run storybook-build`.

## Scenario: Standalone Project

If your Emulsify project lives outside Drupal, upgrade it in place by following Emulsify Core's [Migration to 4.x guide](https://github.com/emulsify-ds/emulsify-core/blob/main/docs/migration-4x.md). In short:

1. Use Node.js `>=24.13.0` (set `.nvmrc` to `24`).
2. Replace your tooling dependencies with `"@emulsify/core": "^4.5.0"` (published on npm).
3. Copy the scripts block from the [Emulsify Starter `package.json`](https://github.com/emulsify-ds/emulsify-starter/blob/main/package.json) (the platform-agnostic starter) and re-apply your own scripts.
4. Move lint, Storybook and a11y customizations into `config/emulsify-core/` and Webpack customizations into Vite plugins under `config/emulsify-core/vite/`.
5. Delete `node_modules/`, run `npm install`, then `npm run audit`.

## Scenario: Upgrading from Pattern Lab

Early versions of Emulsify used Pattern Lab; Emulsify moved to Storybook in September 2020. There is no direct upgrade path from Pattern Lab to Emulsify 7.x. Instead:

1. Rename and disable the old theme (directory and `.info.yml`, e.g. `THEMENAME_old`).
2. Follow the [Drupal installation instructions](/docs/emulsify-drupal) to generate a new child theme with `drush emulsify THEME_NAME`.
3. Move your components from `components/_patterns` into the new theme following your component library's structure, and copy static assets into the theme.
4. Copy over Drupal files (`*.theme`, `*.breakpoints.yml`, `*.libraries.yml`) and merge them with the generated ones; fix paths as needed.
5. Uninstall `unified_twig_extensions` (and `emulsify_twig`, if present). [Emulsify Tools](https://www.drupal.org/project/emulsify_tools) now provides Emulsify's Twig helpers (`bem()`, `add_attributes()` and the `switch` tag).
6. Run `composer remove fourkitchens/emulsify`, enable the new theme, then `npm install && npm run develop`.
7. Move custom `<head>` markup from `_meta/_00-head.twig` / `_01-foot.twig` into `config/emulsify-core/storybook/preview-head.html`.
8. Write `*.stories.js` files for your components (see [Writing stories](/docs/supporting-projects/emulsify-core/basic-usage/writing-stories)). Global data in `/components/_data` is no longer loaded automatically.
