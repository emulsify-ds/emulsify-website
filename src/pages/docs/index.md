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

### [Emulsify UI Kit](/docs/systems/ui-kit)

The Emulsify UI Kit is a tool for designers and front-end engineers to build high-quality user interfaces effectively and efficiently while maintaining WCAG 2.2 AA standards and project performance goals. It features tight integration with Figma via design tokens, and is the recommended system for new projects.

### [Compound](/docs/systems/compound) (archived)

Compound was the original Emulsify component system. Its repository is archived and no longer receives updates; it remains installable through the Emulsify CLI for existing projects. New projects should start with the Emulsify UI Kit.

## Supporting Projects

### [Emulsify Core](/docs/supporting-projects/emulsify-core)

Emulsify Core is an npm package (`@emulsify/core`) that provides shared Vite build configuration and a Storybook workspace for component-driven development with Twig, React, and custom elements. Every Emulsify base theme and starter uses it.

### [Emulsify CLI](/docs/supporting-projects/emulsify-cli)

The command line interface for Emulsify. Use it to create a project for Drupal, WordPress, or a standalone front end; install a component system (such as the Emulsify UI Kit); and install or scaffold individual components. Requires Node.js `>=24.13.0`.

### [Emulsify Tools](https://www.drupal.org/project/emulsify_tools)

The Emulsify Tools Drupal module provides the `drush emulsify [theme_name]` command (an alias of `drush emulsify_tools:bake`) to generate child themes, theme Twig namespaces, favicon deployment commands, and two Twig functions, `bem()` and `add_attributes()`:

- `bem()` generates BEM classes on elements in your components.
- `add_attributes()` adds any HTML attribute (including classes) to elements of your components.

Source code and issues: [GitHub](https://github.com/emulsify-ds/emulsify_tools).

### [Emulsify Twig Extensions](/docs/supporting-projects/twig-extensions)

JavaScript (Twig.js) versions of the `bem()` and `add_attributes()` functions, published as the `bem-twig-extension` and `add-attributes-twig-extension` npm packages. Emulsify Core 4 includes its own native implementations for Storybook, so you only need these packages when using Twig.js outside Emulsify Core.
