---
title: Component-Driven Design
pageTitle: Component-Driven Design
description: Helpful information for those new to component-driven design
---

Component-driven design is a way to systematize and share designs as functional prototypes. Emulsify has traditionally used the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) system for organization. However, with the release of Emulsify Core 2.x we now support any organization you prefer.

## Choose your own component organization
Your Emulsify installation has one project dependency called [Emulsify Core](https://github.com/emulsify-ds/emulsify-core) that contains all the development tooling and configuration you'll need. The recent 2.x release added a host of new features including the ability to define your own component structure.

The following are examples of how to organize your components.
- [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) - If you are a long time Emulsify user then you know we've traditionally preferred this approach. 
- Flat Component Structure - all components regardless of complexity and reliance exist at the same level.
- Component Type Grouping - Components are organized by their type or function, such as UI components, form elements, layout components, etc.
- Design System-Based Structure - Follows a design system approach where components are based on standardized design tokens and patterns. Components are usually divided into categories such as primitives (buttons, inputs) and complex components (modals, tables).

...or create your own structure that fits best for you and your project. We chose our own organization for the [Emulsify UI Kit](https://github.com/emulsify-ds/emulsify-ui-kit/tree/main/src).

### Compiled files vs Source files
With the release of Emulsify Core 2.x it is highly recommended you use a `src/` directory at the root of your Emulsify project. If your project doesn't have a defined platform in your `project.emulisfy.json` file then all files meant for public viewing will be compiled to a `dist/` directory. 

If your project's platform is Drupal then components in your `src/components` directory will be compiled to `components/` and any foundational/utiliy/global files will be compiled to a `dist/` directory. This approach is specifically implemented in order to support Drupal's [Single Directory Component](https://www.drupal.org/docs/develop/theming-drupal/using-single-directory-components) feature.

## Creating your own components
1. A component consists of 3 required files.
  - YAML file to define your component and provide mock data for Storybook's development instance - See [Drupal's Single Directory Component documentation](https://www.drupal.org/node/3352951) on how to structure your YAML file.
  - Twig file to create to markup for your component.
  - Stories file for Storybook to display, categorize, provide controls, and interact with your component. See [Storybook's documentation](https://storybook.js.org/docs/writing-stories).
2. A component can have addition files that are optional.
  - SCSS file that is compiled into CSS and automatically loaded by Storybook.
  - JS file to provide interactivity.
