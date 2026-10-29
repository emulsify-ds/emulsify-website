---
title: Getting Started
pageTitle: Getting Started
description: Create an Emulsify Drupal theme with the Emulsify CLI in a few commands.
---

This quick start creates an Emulsify theme for an existing Composer-managed Drupal site, installs the Emulsify UI Kit, and starts Storybook and the build tooling.

## Requirements

1. [Node v24.13.0 or newer (we recommend NVM)](https://github.com/nvm-sh/nvm)
2. A Composer-managed Drupal 11.3+ site with Drush 13+

## 1. Install the Emulsify CLI

```bash
npm install -g @emulsify/cli
```

Run `emulsify --help` at any time to see the available commands.

## 2. Install the Drupal packages

From the Drupal project root:

```bash
composer require 'drupal/emulsify:^7' 'drupal/emulsify_tools:^2' --with-all-dependencies
drush en emulsify_tools -y
```

## 3. Create your theme

From the Drupal project root:

```bash
emulsify init "My Theme" ./web/themes/custom --platform drupal
cd web/themes/custom/my_theme
```

The second argument is the parent directory. The CLI creates the theme folder from the machine name (`My Theme` becomes `my_theme`) and installs its dependencies.

## 4. Install a component system

The Emulsify UI Kit is the recommended system for new projects:

```bash
emulsify system install emulsify-ui-kit
```

Run `emulsify system install` with no name to choose a system interactively.

## 5. Start developing

```bash
npm run develop
```

This starts Vite in watch mode alongside Storybook.

## Next steps

- [Emulsify CLI usage](/docs/supporting-projects/emulsify-cli/emulsify-cli-usage)
- [Emulsify (Drupal)](/docs/emulsify-drupal)
- [Emulsify UI Kit](/docs/systems/ui-kit)
- [Writing stories](/docs/supporting-projects/emulsify-core/basic-usage/writing-stories)
