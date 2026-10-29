---
title: Emulsify (Drupal)
pageTitle: Emulsify (Drupal)
description: Installing Emulsify
---

## Installation

### Requirements

1. [Node v24.13.0 or newer (we recommend NVM)](https://github.com/nvm-sh/nvm)
2. An existing Composer-managed Drupal 11.3+ site with Drush 13+.
3. PHP 8.3+ (follow [Drupal's PHP requirements](https://www.drupal.org/docs/getting-started/system-requirements/php-requirements) for your core release).
4. [Emulsify CLI](/docs/supporting-projects/emulsify-cli) (required if you want to install components from an external library. Not required if you are creating components from scratch.)

### Version

- **7.x** (current) - Drupal 11.3+ || 12.x compatible
- **6.x** - Drupal 10.3+ || 11.x compatible
- **5.x** - Drupal 10.x || 11.x compatible

## Inside a Composer-Based Drupal Instance

Run these commands from the root of your Drupal project.

1. Add the Emulsify base theme and the Emulsify Tools module via Composer:

   ```bash
   composer require 'drupal/emulsify:^7' 'drupal/emulsify_tools:^2' --with-all-dependencies
   ```

2. Enable the Emulsify Tools module: `drush en emulsify_tools -y`
3. Generate a child theme: `drush emulsify my_theme`. This creates `web/themes/custom/my_theme` with `emulsify` as its parent theme. Do not enable the `whisk` theme directly; it is only the source used to generate child themes.
4. Enable your new theme and set it as the default frontend theme:

   ```bash
   drush theme:enable my_theme -y
   drush config:set system.theme default my_theme -y
   drush cr -y
   ```

5. Install the theme's dependencies from its directory:

   ```bash
   cd web/themes/custom/my_theme
   nvm install && nvm use
   npm install
   ```

## Standalone (for prototyping outside of a CMS install)

1. Use the Emulsify CLI to install a starter at your preferred location. You can use an optional platform flag if you would like to eventually add your standalone theme to a Drupal installation. If you omit the platform flag, the CLI tries to detect the platform and prompts you when it can't; use `--platform none` for a platform agnostic starter. `emulsify init "My Awesome Theme" --platform drupal .` (The preceding snippet uses `.` to indicate "the current location")
2. Install the standalone's dependencies from your project's directory. `nvm use && npm install`

## Start installing/building your components

At this point you will have an empty custom theme that is ready for component development. The generated theme includes the Emulsify Core 4 tooling (Vite and Storybook) but no components, and its Drupal library file only contains commented CSS and JavaScript examples. You can either install components from the [Emulsify UI Kit](/docs/systems/ui-kit) or build your own [components from scratch](/docs/resources/cdd), then update those library examples to point at your build output.

### Installing components

1. Any given Drupal installation can have multiple instances of a custom Emulsify-based theme. To install a specific component library first go to your theme's directory.
2. Refer to the Emulsify CLI documentation on how to [install a system and components](/docs/supporting-projects/emulsify-cli/emulsify-cli-usage).
3. Once you have components installed you can build your theme, run storybook, and watch for active file changes by running `npm run develop`
