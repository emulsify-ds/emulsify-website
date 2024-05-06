---
title: Emulsify Design System
pageTitle: Emulsify Design System
description: ''
---

Emulsify is an open-source tool for creating design systems with reusable components and clear guidelines for teams. Emulsify helps organizations scale their design while reducing cost, streamlining workflows, and improving accessibility.

Emulsify Design System contains multiple packages, which can be used individually to solve small problems or together to solve big ones. See below for some of the popular packages.

## Base Theme

Base themes contain application-specific configuration and a sub theme template (whisk) used for generation.

### [**Drupal**](https://github.com/emulsify-ds/emulsify-drupal)

Emulsify Drupal is a full prototyping development environment using [Storybook](https://storybook.js.org) as a component library and [Webpack](https://webpack.js.org) as a build engine. It is also a [Drupal](https://www.drupal.org) theme. It can be used as a standalone prototyping tool or inside a Drupal installation.

## Systems

Systems are used to define components and assets. Emulsify projects opt into using systems via the Emulsify CLI. Once a system has been selected for a project, the system mandates how components are organized and how required components/assets are installed. It also gives developers the ability to find and install non-required components.

### [UI Kit](https://github.com/emulsify-ds/emulsify-ui-kit/)

The Emulsify UI Kit is a tool for designers and front-end engineers to build high-quality user interfaces effectively and efficiently while maintaining WCAG 2.1 AA standards and project performance goals. It features tight integration with Figma via design tokens.

### [Compound](https://github.com/emulsify-ds/compound)

Compound is the default Emulsify system, and currently includes a variant for Drupal.

## Supporting Projects

### [Emulsify Cli](https://github.com/emulsify-ds/emulsify-cli)

This is a command line interface for Emulsify. With it, you can initialize a project, and identify a "system" (like Compound) for your project. Once initialized you can install individual components from that system into your project as "boiler-plate" code.

### [Emulsify Tools](https://github.com/emulsify-ds/emulsify_tools)

The Emulsify Tools module defines a Drush command (`drush emulsify [theme_name]) to generate sub-themes and includes two Twig functions "BEM" and "Add Attributes".

The BEM function provides a simple way to programmatically generate BEM classes on elements in your components.

The Add Attributes function provides a way to programmatically add any html attribute (including classes) to elements of your components.

### [Emulsify Twig Extensions](https://github.com/emulsify-ds/emulsify-twig-extensions)

This repo contains the Javascript version of the BEM and Add Attributes extensions for compatibility with Twig.js (which makes the work in Storybook.)
