---
title: Emulsify CLI
pageTitle: Emulsify CLI
description: Command line interface for Emulsify.
---

## Installation

Emulsify CLI requires Node.js `>=24.13.0`. Install it globally from [npm](https://www.npmjs.com/package/@emulsify/cli):

```bash
npm install -g @emulsify/cli
```

Run `emulsify --help` at any time to see the current commands. More details are in [the CLI's GitHub repo](https://github.com/emulsify-ds/emulsify-cli).

How to use the CLI in a typical workflow is documented in [the Usage section](/docs/supporting-projects/emulsify-cli/emulsify-cli-usage) of these docs.

## Video Walkthrough: Legacy (Emulsify 1.x / Drupal 8)

[This video](https://modulesunraveled.wistia.com/medias/7cdtb3k40h) shows an earlier version of the CLI. Commands and output have changed since, so follow the [Usage section](/docs/supporting-projects/emulsify-cli/emulsify-cli-usage) for the current workflow.

## Basic Usage

- `emulsify init` allows developers to easily create an Emulsify project. It attempts to detect the platform being used, and implements the appropriate starter (such as [emulsify-drupal-starter](https://github.com/emulsify-ds/emulsify-drupal-starter)).
- `emulsify system install` installs a component system, such as the [Emulsify UI Kit](/docs/systems/ui-kit), in the project.
- `emulsify component list` will return a list of components available within the system selected for the project.
- `emulsify component install` will fetch a specific component into the project.

Details on the commands above, and other features/options, are documented in [the Usage section](/docs/supporting-projects/emulsify-cli/emulsify-cli-usage) and in `emulsify --help`.
