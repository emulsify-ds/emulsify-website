---
title: Emulsify (Drupal)
pageTitle: Emulsify (Drupal)
description: Installing Emulsify
---

## Installation

### Requirements

1. [Node v20 (we recommend NVM)](https://github.com/nvm-sh/nvm)
2. [Emulsify CLI](/docs/supporting-projects/emulsify-cli) (required if you want to install components from an external library. Not required if you are creating components from scratch.)

### Version

- **5.x** - Drupal 10.x || 11.x compatible

## Inside a Composer-Based Drupal Instance

1. Add the Emulsify base theme (and its dependencies) via composer. `composer require 'drupal/emulsify:^5.3'`
2. Install the Emulsify base theme and Emulsify Tools module `drush pm:install emulsify_tools && drush pm:install components && drush theme:install emulsify`
3. Initialize a sub-theme using drush. `drush emulsify [theme_name]` - This will generate a new theme within `themes/custom/` directory.
4. Install your new theme and set it as the default frontend theme. `drush theme:enable [theme_name] && drush config:set system.theme default [theme_name]`
5. Install theme dependencies from your theme's directory. `nvm use && npm install`

## Standalone (for prototyping outside of a CMS install)

1. Use the Emulsify CLI to install a starter at your preferred location. You can use an optional platform flag if you would like to eventually add your standalone theme to a Drupal installation. Otherwise, omitting the platform flag will install a platform agnostic starter. `emulsify init "My Awesome Theme" --platform drupal .` (The preceding snippet uses `.` to indicate "the current location")
2. Install the standalone's dependencies from your project's directory. `nvm use && npm install`

## Start installing/building your components

At this point you will have an empty custom theme that is ready for component development. You can either install components from the [Emulsify UI Kit](/docs/systems/ui-kit), [Compound](/docs/systems/compound), or build your own [components from scratch](/docs/resources/cdd).

### Installing components

1. Any given Drupal installation can have multiple instances of a custom Emulsify-based theme. To install a specific component library first go to your theme's directory.
2. Refer to the Emulsify CLI documentation on how to [install a system and components](/docs/supporting-projects/emulsify-cli/emulsify-cli-usage).
3. Once you have components installed you can build your theme, run storybook, and watch for active file changes by running `npm run develop`
