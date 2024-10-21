---
title: Basic Usage
pageTitle: Basic Usage
description: Common interactions you'll have with Emulsify Drupal
---

Most of your day-to-day interaction will involve building and running Storybook via commands (npm scripts), and writing new stories. Those tasks are documented here.

## Commands

### Storybook

Develop: `npm run develop`

This combines 2 tasks, which can be run separately as needed:

1. `npm run webpack` (Sass/CSS compiling/minifying/linting, SVG Spriting)
2. `npm run storybook` (Storybook dev watch task)

**Deploy Storybook**

`npm run storybook-deploy`

[Here is a demo](https://emulsify-ds.github.io/compound/) of the default Storybook Github deployment

#### Linting JavaScript/Styles

`npm run lint`

#### Testing Accessibility

`npm run a11y`

Will test the components specified in your a11y config file ([default](https://github.com/emulsify-ds/emulsify-drupal/blob/2.x/a11y.config.js#L17)). Note: this will also be run on commit via husky

#### Build

`npm run build`

This runs the production webpack script and is intended for Drupal builds (e.g., in a CI environment.)

#### Storybook Build

`npm run storybook-build`: Creates a static instance of your project that is ideal for deployments to remote environments.

## Writing Stories

Writing components in Emulsify follows standard practices. You create your component Twig, .scss and/or .js files in component-specific directories. [See our overview and example](/docs/supporting-projects/emulsify-core/basic-usage/writing-stories).