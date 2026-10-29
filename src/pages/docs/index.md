---
title: Emulsify Design System
pageTitle: Emulsify Design System
description: 'Overview of the Emulsify Design System packages: base themes, starters, systems, and supporting tools.'
---

Emulsify is an open-source toolset for creating and implementing design systems on your website, with reusable components and clear guidelines for teams. Emulsify helps organizations scale their design while reducing cost, streamlining workflows, and improving accessibility.

Emulsify Design System contains multiple packages, which can be used individually to solve small problems or together to solve big ones. See below for some of the popular packages. New to Emulsify? Start with [Getting Started](/docs/getting-started).

## Base Themes

Base themes contain platform-specific runtime code and a child theme starter (Whisk) used to generate the theme your project owns.

### [Emulsify Drupal](/docs/emulsify-drupal)

Emulsify Drupal is the official [Drupal](https://www.drupal.org) parent theme for Emulsify. It provides [Storybook](https://storybook.js.org) integration, [Emulsify Core](/docs/supporting-projects/emulsify-core) tooling, and a [Vite](https://vite.dev)-based build workflow for Drupal 11.3+ with Drupal 12 forward compatibility. It requires the [Emulsify Tools](https://www.drupal.org/project/emulsify_tools) module to generate child themes.

### [Emulsify WordPress](https://github.com/emulsify-ds/emulsify-wordpress)

Emulsify WordPress is a Timber-first WordPress parent theme built with Emulsify Core, Vite, Storybook, and Twig. The parent theme provides the WordPress runtime; generated child themes hold your components, templates, and assets.

## Starters

Starters are the project scaffolds the Emulsify CLI installs.

### [Emulsify Starter](/docs/emulsify-starter)

A standalone, platform-agnostic design system scaffold that runs outside of a CMS. Uses Emulsify Core with Storybook and Vite.

### [Emulsify Drupal Starter](/docs/emulsify-drupal-starter)

A Drupal theme scaffold that lets teams create an installable Emulsify child theme in its own Git repository and build it outside of a Drupal installation. Targets Drupal 11.3+ and 12.

## Systems

Systems are used to define components and assets. Emulsify projects opt into using systems via the Emulsify CLI. Once a system has been selected for a project, the system mandates how components are organized and how required components/assets are installed. It also gives developers the ability to find and install non-required components.

### [UI Kit](https://github.com/emulsify-ds/emulsify-ui-kit/)

The Emulsify UI Kit is a tool for designers and front-end engineers to build high-quality user interfaces effectively and efficiently while maintaining WCAG 2.2 AA standards and project performance goals. It features tight integration with Figma via design tokens, and is the recommended system for new projects.

### [Compound](https://github.com/emulsify-ds/compound) (archived)

Compound was the original Emulsify system. Its repository is archived and no longer receives updates. New projects should use the UI Kit.

## Supporting Projects

### [Emulsify Cli](https://github.com/emulsify-ds/emulsify-cli)

This is a command line interface for Emulsify. With it, you can initialize a project, and identify a "system" (like the UI Kit) for your project. Once initialized you can install individual components from that system into your project as "boiler-plate" code.

### [Emulsify Tools](https://github.com/emulsify-ds/emulsify_tools)

The Emulsify Tools module defines a Drush command (`drush emulsify [theme_name]`) to generate sub-themes and includes two Twig functions "BEM" and "Add Attributes".

The BEM function provides a simple way to programmatically generate BEM classes on elements in your components.

The Add Attributes function provides a way to programmatically add any html attribute (including classes) to elements of your components.

### [Emulsify Twig Extensions](https://github.com/emulsify-ds/emulsify-twig-extensions)

This repo contains the JavaScript version of the BEM and Add Attributes extensions for Twig.js. Emulsify Core 4 includes its own implementations for Storybook, so you only need these packages when using Twig.js outside of Emulsify Core.
