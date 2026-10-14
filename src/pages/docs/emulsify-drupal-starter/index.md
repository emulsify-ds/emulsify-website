---
title: Emulsify Drupal Starter
pageTitle: Emulsify Drupal Starter
description: Learn more about the Emulsify Drupal Starter
---

Emulsify Drupal Starter is the Drupal theme scaffold installed by the Emulsify CLI. It lets teams create an installable Emulsify child theme in a separate Git repository and build it outside of a Drupal installation. It is aligned with the [Whisk starter](https://github.com/emulsify-ds/emulsify-drupal/tree/main/whisk) that ships with the Emulsify base theme, which you can also generate from inside a Drupal site with `drush emulsify my_theme`. Generated themes target Drupal `^11.3 || ^12`, use Emulsify Core 4, and run Storybook plus theme asset builds through Vite.

## Requirements

1. [Node.js `>=24.13.0`](https://nodejs.org/) (we recommend [NVM](https://github.com/nvm-sh/nvm); the theme's `.nvmrc` selects the Node 24 line)
2. [Emulsify CLI](/docs/supporting-projects/emulsify-cli): `npm install -g @emulsify/cli`

To use the theme in Drupal, the site needs Drupal `^11.3 || ^12` with the [Emulsify base theme](https://www.drupal.org/project/emulsify) and the [Emulsify Tools](https://www.drupal.org/project/emulsify_tools) module:

```bash
composer require 'drupal/emulsify:^7' 'drupal/emulsify_tools:^2' --with-all-dependencies
drush en emulsify_tools -y
```

## Installation

```bash
emulsify init "My Theme" ./web/themes/custom --platform drupal
```

The `[path]` argument is the parent directory; the CLI creates the theme folder from the machine name (`My Theme` becomes `my_theme`) and renames the theme files to match. Use `--machineName` to set the theme machine name exactly.

When run from the root of a Composer-managed Drupal project, the CLI defaults to `<web-root>/themes/custom` and reminds you to install the required Composer packages. To build the theme in its own repository instead, run the command outside a Drupal project with any parent directory.

Generated themes have Drupal Single Directory Components (SDC) output enabled in `project.emulsify.json`.

Optionally, install components from a component system (for example the [Emulsify UI Kit](/docs/systems/ui-kit)) from the theme directory:

```bash
cd ./web/themes/custom/my_theme
emulsify system install
```

## Local development

- `npm run develop` runs Vite in watch mode alongside Storybook (port 6006).
- `npm run build` builds the theme assets with Vite.
- `npm run storybook-build` builds static Storybook output.

## Repository

[https://github.com/emulsify-ds/emulsify-drupal-starter](https://github.com/emulsify-ds/emulsify-drupal-starter)
