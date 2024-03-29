---
title: Emulsify Design System
pageTitle: Emulsify Design System
description: ''
---

Emulsify is an open-source tool for creating design systems with reusable components and clear guidelines for teams. Emulsify helps organizations scale their design while reducing cost, streamlining workflows, and improving accessibility.

Emulsify Design System contains multiple packages, which can be used individually to solve small problems or together to solve big ones. See below for some of the popular packages.

## Starters

Starters contain application-specific configuration and files. For example, the Drupal starter contains the `.info.yml` file that defines the Drupal theme's name and other metadata as well as other Drupal-specific files.

### [**Drupal**](https://github.com/emulsify-ds/emulsify-drupal)

Emulsify Drupal is a full prototyping development environment using [Storybook](https://storybook.js.org) as a component library and [Webpack](https://webpack.js.org) as a build engine. It is also a [Drupal](https://www.drupal.org) theme. It can be used as a standalone prototyping tool or inside a Drupal installation.

### [**Wordpress**](https://github.com/emulsify-ds/emulsify-wordpress-theme)

In progress. Not ready for active use.

## Systems

Systems are used to define components and assets. Emulsify projects opt into using systems via the Emulsify CLI. Once a system has been selected for a project, the system mandates how components are organized and how required components/assets are installed. It also gives developers the ability to find and install non-required components.

### [Compound](https://github.com/emulsify-ds/compound)

Compound is the default Emulsify system, and currently includes a variant for Drupal.

## Supporting Projects

### [Emulsify Cli](https://github.com/emulsify-ds/emulsify-cli)

This is a command line interface for Emulsify. With it, you can initialize a project, and identify a "system" (like Compound) for your project. Once initialized you can install individual components from that system into your project as "boiler-plate" code.

### Emulsify Twig

The Emulsify Twig repositories includes two functions "BEM" and "Add Attributes".

The BEM function provides a simple way to programmatically generate BEM classes on elements in your components.

The Add Attributes function provides a way to programmatically add any html attribute (including classes) to elements of your components.

#### [Emulsify Twig Extensions](https://github.com/emulsify-ds/emulsify-twig-extensions)

This repo contains the Javascript version of the BEM and Add Attributes extensions for compatibility with Twig.js (which makes the work in Storybook.)

#### [Emulsify Twig](https://github.com/emulsify-ds/emulsify_twig)

This repo is a Drupal module that contains the PHP version of the BEM and Add Attributes extensions for support in a Drupal project.

## **Example Websites/Repos**

The examples below were created to demonstrate how multiple properties under the same organization could create properties that implement varied languages (Twig and React, in this case) and share things that make sense.

We created a Twig repository for the Drupal sites, a React repository for the Gatsby/React site, and then a separate SCSS repository that is shared between all of them - this means the organizations styles are defined in one place, and each language just needs to ensure their markup meets the organizations expectations. No duplicating styles across languages!

The Western Arts site is also unique because it uses some of the components from the shared repository, but also contains custom components used only by that property! This demonstrates how individual properties can utilize the "organizational" components off-the-shelf, without any custom development, but expand their component library to fulfill unique business needs.

### Websites

#### [**Western University**](https://github.com/emulsify-ds/westernuni)

The Western University site is a Drupal site which implements the Western UP Twig and Western UP SCSS repos off-the-shelf.

#### [**Western Arts**](https://github.com/emulsify-ds/westernarts)

The Western Arts site is a Drupal site with implements some of the Western UP Twig/SCSS components off-the-shelf, but also contains custom components not a part of the Western U "organizational" components.

#### [**Western Law**](https://github.com/emulsify-ds/western-law)

The Western Law site is a Gatsby and React site which uses the Western UP React/SCSS repos for its components.

#### [**Western Identity**](https://github.com/emulsify-ds/western-identity)

The Western Identity site is a Gatsby powered "guidelines" site that contains information on branding, components, and other related documentation.

### **Component Repositories**

#### [**Western UP SCSS**](https://github.com/emulsify-ds/western-up-scss)

The Western UP SCSS repository contains all of the styles used by Western U properties. Since both the Twig and React repos below are configured to consume scss, we only write the styles once, and let each language focus on creating high-quality markup in their respective languages.

#### [**Western UP Twig**](https://github.com/emulsify-ds/western-up-twig)

The Western UP Twig repo contains the Twig components available to all Western U Twig-based properties.

#### [**Western UP React**](https://github.com/emulsify-ds/western-up-react)

The Western UP **React** repo contains the React components available to all Western U React-based properties.
