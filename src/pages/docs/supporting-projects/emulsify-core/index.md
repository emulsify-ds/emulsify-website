---
title: Emulsify Core
pageTitle: Emulsify Core
description: An NPM package that provides a Storybook instance, a Webpack development environment, and preset tooling/config meant to make project setup and ongoing development easier.
---

## Installation and usage
Installation and configuration is setup by the provided base theme project(s) or the various starters from an Emulsify CLI installation.

### Manual installation
- `npm install @emulsify/core` within your repository or project theme.
- Copy the provided `npm run` scripts from [Emulsify Starter's package.json](https://github.com/emulsify-ds/emulsify-starter/blob/main/package.json#L23)
- Copy the contents of `config/emulsify-core/` from [Emulsify Starter](https://github.com/emulsify-ds/emulsify-starter) into your project so `config/` exists at the root of your repository or project theme. The files within `config/` allow you to extend or overwrite configuration provided by Emulsify Core.
