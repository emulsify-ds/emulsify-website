---
title: Component-Driven Design
pageTitle: Component-Driven Design
description: Helpful information for those new to component-driven design
---

Component-driven design is a way to systematize and share designs as functional prototypes. Emulsify has traditionally used the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) system for organization. However, Emulsify Core supports any organization you prefer.

## Choose your own component organization
Your Emulsify installation has one project dependency called [Emulsify Core](https://github.com/emulsify-ds/emulsify-core) (`@emulsify/core`) that contains all the development tooling and configuration you'll need, including the shared Vite build and Storybook. It also lets you define your own component structure in your project's `project.emulsify.json` file.

The following are examples of how to organize your components.
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) - If you are a long time Emulsify user then you know we've traditionally preferred this approach. 
- Flat Component Structure - all components regardless of complexity and reliance exist at the same level.
- Component Type Grouping - Components are organized by their type or function, such as UI components, form elements, layout components, etc.
- Design System-Based Structure - Follows a design system approach where components are based on standardized design tokens and patterns. Components are usually divided into categories such as primitives (buttons, inputs) and complex components (modals, tables).

...or create your own structure that fits best for you and your project. We chose our own organization for the [Emulsify UI Kit](https://github.com/emulsify-ds/emulsify-ui-kit/tree/main/src).

### Define your own structure
To define a custom structure, add `variant.structureImplementations` to your `project.emulsify.json`. Each entry becomes a structure root and a Twig namespace (for example `@components` or `@foundation`). The Emulsify UI Kit uses this configuration:

```json
{
  "variant": {
    "structureImplementations": [
      { "name": "components", "directory": "./src/components/" },
      { "name": "foundation", "directory": "./src/foundation/" },
      { "name": "layout", "directory": "./src/layout/" },
      { "name": "tokens", "directory": "./src/tokens/" }
    ]
  }
}
```

When you create a component with the [Emulsify CLI](/docs/supporting-projects/emulsify-cli), `emulsify component create <name> --directory <structure>` places it in one of these named structures. See [Project Structure And Output](https://github.com/emulsify-ds/emulsify-core/blob/main/docs/project-structure.md) for every option.

### Compiled files vs Source files
For new projects, it is highly recommended you use a `src/` directory at the root of your Emulsify project. If your project doesn't have a defined platform in your `project.emulsify.json` file then all files meant for public viewing will be compiled to a `dist/` directory. 

If your project's platform is Drupal and `singleDirectoryComponents` is enabled (the default for themes generated from Emulsify Drupal), then components in your `src/components` directory will be compiled to `dist/components/` and mirrored to `components/`, and any foundational/utility/global files will be compiled to `dist/global/`. This approach is specifically implemented in order to support Drupal's [Single Directory Component](https://www.drupal.org/docs/develop/theming-drupal/using-single-directory-components) feature.
