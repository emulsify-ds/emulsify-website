---
title: Emulsify Tools
pageTitle: Emulsify Tools
description: The Drupal module that powers Emulsify child-theme generation, Twig extensions, theme Twig namespaces and favicon deployment.
---

[Emulsify Tools](https://www.drupal.org/project/emulsify_tools) (`drupal/emulsify_tools`) is the companion Drupal module for the [Emulsify base theme](/docs/emulsify-drupal). It provides Twig extensions, theme Twig namespaces, child-theme generation, and favicon deployment commands. Emulsify Drupal 7.x declares `drupal:emulsify_tools (^2.2)` as a dependency, so the module must be installed and enabled.

Emulsify Tools replaces the older [Emulsify Twig](https://www.drupal.org/project/emulsify_twig) module and, for Emulsify themes, the Components module's Twig namespace support.

## Compatibility

| Emulsify Tools | Emulsify Drupal            | Drupal core      | PHP    | Drush | Child-theme generation                                       |
| -------------- | -------------------------- | ---------------- | ------ | ----- | ------------------------------------------------------------ |
| `2.2.x`        | `^7.0`                     | `^11.3` or `^12` | `^8.3` | 13+   | Drupal core Starterkit using Emulsify's Whisk Starterkit     |
| `2.2.x`        | `^6.0` (override required) | `^11.3`          | `^8.3` | 13+   | Deprecated legacy generator; removed in Emulsify Tools 3.0.0 |

Emulsify Drupal 6.x declares `drupal/emulsify_tools:^1.0`. Using Tools 2.2 with 6.x needs a temporary Composer override and is meant only as a transition step. Favicon deployment requires Emulsify Drupal 7.x. For older branches, see the [compatibility notes in the README](https://github.com/emulsify-ds/emulsify_tools#compatibility).

## Installation

```bash
composer config repositories.drupal composer https://packages.drupal.org/8
composer require 'drupal/emulsify:^7.2' 'drupal/emulsify_tools:^2.2' --with-all-dependencies
drush en emulsify_tools -y
```

## Generate a child theme

```bash
drush emulsify my_theme --name="My Theme" --description="Project theme"
```

`emulsify` and `emulsify_tools:generate-theme` are aliases of `emulsify_tools:bake`. The command creates `web/themes/custom/my_theme` from the Whisk Starterkit shipped with the Emulsify theme, with `emulsify` as its parent theme. A human-readable label also works: `drush emulsify "Crème Brûlée Theme"` resolves to `creme_brulee_theme`.

| Input             | Meaning                                                    | Default          |
| ----------------- | ---------------------------------------------------------- | ---------------- |
| Positional `name` | Machine name or label used to derive the machine name      | Required         |
| `--name`          | Human-readable `name` written to the generated `.info.yml` | Positional value |
| `--description`   | `description` written to the generated `.info.yml`         | Empty            |

`--name` does not change the machine name; that always comes from the positional value.

Drupal core's Starterkit command produces the same result:

```bash
php web/core/scripts/drupal generate-theme my_theme --name="My Theme" --description="Project theme" --starterkit=whisk --path=themes/custom --no-interaction
```

Generation will not overwrite an existing destination, so pick a new machine name.

### Troubleshooting

- **"The Emulsify base theme was not found"**: Drupal cannot discover the `emulsify` theme.
- **"The Emulsify Whisk Starterkit was not found"**: the installed theme has no `whisk` directory, or `whisk/whisk.starterkit.yml` is missing.

Fix either one with `composer require "drupal/emulsify:^7"` followed by `drush cr`.

## Twig namespaces

Themes can register Twig namespaces in their `.info.yml` using the same `components.namespaces` structure as the Components module:

```yaml
components:
  namespaces:
    atoms: components/01-atoms
    molecules:
      - components/02-molecules
      - src/components/molecules
    vendor_components: /../vendor/acme/components
```

Relative paths resolve from the theme directory. Paths starting with `/` resolve from the Drupal app root. Lookup order: active theme, then its base themes, then the default frontend theme. `@atoms/button/button.twig` works, and so does `@atoms/button.twig` when the basename is unique within the namespace.

For new components, prefer Single Directory Component includes such as `{% include "my_theme:button" %}`.

## Twig functions and tags

### `bem()`

`bem(base_class, modifiers = [], blockname = '', extra = [])`

| Template                                            | Output                                                          |
| --------------------------------------------------- | --------------------------------------------------------------- |
| `<h1 {{ bem('title') }}>`                           | `<h1 class="title">`                                            |
| `<h1 {{ bem('title', ['small', 'red']) }}>`         | `<h1 class="title title--small title--red">`                    |
| `<h1 {{ bem('title', ['small', 'red'], 'card') }}>` | `<h1 class="card__title card__title--small card__title--red">`  |
| `<h1 {{ bem('title', '', 'card') }}>`               | `<h1 class="card__title">`                                      |
| `<h1 {{ bem('title', '', '', ['js-click']) }}>`     | `<h1 class="title js-click">`                                   |

### `add_attributes()`

Merges extra attributes with Drupal's template attributes and keeps them from trickling into child includes:

```twig {% process=false %}
{% set additional_attributes = {
  "class": bem("foo", ["bar", "baz"], "foobar"),
} %}
<div {{ add_attributes(additional_attributes) }}></div>
```

### `switch`

```twig {% process=false %}
{% switch content.field_name.0 %}
  {% case "text" %}<p>Text</p>
  {% case "image" %}<p>Image</p>
  {% default %}<p>No match</p>
{% endswitch %}
```

`switch`, `case` and `endswitch` are required; `default` is optional.

## Favicon deployment

Emulsify Drupal 7.x owns the favicon settings UI. Emulsify Tools owns the Drush deployment commands. Page requests never generate favicon files.

1. Configure and save favicon settings in the theme settings form for `emulsify` or your child theme.
2. Export and import configuration as usual.
3. After config import, run `drush emulsify_tools:favicon-generate my_theme`.
4. Check the result with `drush emulsify_tools:favicon-status my_theme`.

| Command                                        | Purpose                                                                                                                    |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `emulsify_tools:favicon-generate [theme]`      | Generate or refresh the package from saved theme settings (`--all` for every Emulsify theme)                               |
| `emulsify_tools:favicon-status [theme]`        | Report generation state, package presence, GD/Imagick availability and SVG source (`--all`, `--format=json\|yaml\|table`) |
| `emulsify_tools:favicon-reset [theme]`         | Remove generated package metadata and assets and restore the theme's default favicon (`--all`)                             |
| `emulsify_tools:repair-favicon-config [theme]` | Backfill missing favicon keys in a child theme's `config/install` and `config/schema` files                                |

For the `favicon-*` commands, omit `[theme]` to target the default frontend theme. Without `[theme]`, `repair-favicon-config` scans every Emulsify-based child theme in the codebase. PNG and ICO generation require the PHP `gd` and `Imagick` extensions. The theme settings form also has an **Apply generated favicon package to the admin theme** option, which reuses the generated package on admin routes.

## Upgrading from Emulsify Drupal 6.x

After updating, run `drush updatedb`. A post-update hook backfills the new favicon keys in active `<theme>.settings` config. Then run `drush emulsify_tools:repair-favicon-config` and commit the child-theme file changes it makes. Remove any temporary Emulsify 6.x Composer override once the parent theme is on 7.x. Existing child themes are not regenerated. See [Upgrading Emulsify Drupal](/docs/emulsify-drupal/faq/upgrading).

## Links

- Install: [Drupal.org project](https://www.drupal.org/project/emulsify_tools)
- Source code and issues: [GitHub](https://github.com/emulsify-ds/emulsify_tools) · [Report an issue](https://github.com/emulsify-ds/emulsify_tools/issues) (the drupal.org issue queue is a mirror)
