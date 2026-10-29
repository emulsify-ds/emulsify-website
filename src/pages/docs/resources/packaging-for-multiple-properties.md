---
title: Packaging For Multiple Properties
pageTitle: Packaging For Multiple Properties
description: How to use package management in Emulsify to share components and styles across multiple projects
---

## Sharing Across Multiple Projects

Emulsify allows you to use shared packages across multiple projects. If you are a large organization, this is an excellent way to provide consistency, reuse and save time/money across all properties. The first step is to make some decisions around how you want to organize your organization and projects. Emulsify is not opinionated on this, as organizations will operate in a multitude of ways. We will use one common way as an example to show how it can be set up.

One common way to package components and styles is to have one package for components (for a given language) and one package for shared styling. That way, you can share styling across multiple languages and components per language to any relevant project. So, here's an imaginary set of packages:

- Styles (Sass) `global-sass`
- Components (Twig) `global-twig`
- Drupal Project A (Organization)
- Drupal Project B (Property)

The organization's Drupal project (A) and one of the properties of the organization (B) can both share the components and styling across their projects. Once those packages have been set up, install them in each project's theme:

### Install Packages

```
npm i global-sass global-twig
```

Use npm for these projects, not pnpm or Yarn Plug'n'Play. Emulsify Core relies on npm's flat `node_modules` layout.

#### Styling

Emulsify Core compiles Sass with Vite, so importing styles from an installed package is a normal Sass import. Add it to the stylesheet where your project loads its global styles. In a project built on the [Emulsify UI Kit](/docs/systems/ui-kit), that is a file under `src/foundation/`; in a project without a design system, it can be any directory under `src/`, such as `src/global/`:

```scss
@use '../../node_modules/global-sass/style';
```

Adjust the relative path to match where your file lives. The UI Kit imports `normalize.css` the same way: `@use '../../../node_modules/normalize.css/normalize.css';`.

#### Twig/Markup - Storybook

Next, we need to tell Storybook and Drupal where to find the component Twig files. Emulsify Core builds its Twig namespaces from the structure roots in your theme's `project.emulsify.json`: each entry in `variant.structureImplementations` becomes a namespace. Projects built on the Emulsify UI Kit already list their roots there, so you can add the shared package as one more root:

```json
{
  "variant": {
    "structureImplementations": [
      { "name": "components", "directory": "./src/components/" },
      { "name": "foundation", "directory": "./src/foundation/" },
      { "name": "layout", "directory": "./src/layout/" },
      { "name": "tokens", "directory": "./src/tokens/" },
      {
        "name": "global",
        "directory": "./node_modules/global-twig/components/"
      }
    ]
  }
}
```

Restart `npm run develop` after changing `project.emulsify.json`. The shared package is treated like your own roots: its stories show up in Storybook, and its files are built into your theme's `dist/` directory.

Component styles inside the shared package are compiled to `dist/`, but Storybook doesn't load them, because their output path is under `node_modules`. To see them in Storybook, import the package's styles with `@use` from a stylesheet in one of your own roots, as shown in [Styling](#styling).

{% callout title="Projects without structureImplementations" %}
If your `project.emulsify.json` has no `variant.structureImplementations`, don't add it just to include a shared package. Once it is present, Emulsify Core uses only the roots you list: Drupal Single Directory Components are no longer mirrored to `./components`, and global styles and scripts under `src/` are no longer built. See [Project Structure](https://github.com/emulsify-ds/emulsify-core/blob/main/docs/project-structure.md) in Emulsify Core.
{% /callout %}

#### Organization vs. Property (Global vs. local)

On an organization (global) project, most of your components may come from the shared package. On a property, you will usually combine both: the shared package has its own root name (`global` in the example above), and your local components keep theirs (`components`). Templates can then include either one:

```twig
{{ include('@global/button/button.twig') }}
{{ include('@components/hero/hero.twig') }}
```

#### Organization Workflow

When you work on the organization (parent or global) project, you will want to edit the global components and styles within their respective packages while seeing the result in your theme. There are a number of approaches for this, but we have had great success with the simple usage of `npm link`. You will clone down your projects separately (`global-sass`, `global-twig`). In each, run:

```
npm link
```

Then link them in your Drupal project. Go to your theme, and run:

```
npm link global-sass
npm link global-twig
```

Now your project uses your local versions of those packages. For Storybook to resolve linked packages, add Node's `--preserve-symlinks` option to the `storybook` script in your theme's `package.json`:

```json
{
  "scripts": {
    "storybook": "NODE_OPTIONS=\"--no-deprecation --preserve-symlinks\" storybook dev -c node_modules/@emulsify/core/.storybook --ci -p 6006"
  }
}
```

Edits to your theme's own files still reload automatically, but edits inside a linked package do not: restart `npm run develop` to see them.

#### Drupal Twig

In Drupal, register the same namespaces in your theme's `.info.yml` file. [Emulsify Tools](https://github.com/emulsify-ds/emulsify_tools#twig-namespaces) supports the `components.namespaces` structure:

```yaml
components:
  namespaces:
    global:
      - node_modules/global-twig/components
```

Relative paths are resolved from the theme directory, and paths starting with `/` are resolved from the Drupal app root. Shared Twig components can also ship as a Composer package, registered with an app-root path such as `/../vendor/acme/components`.

For these paths to work, make sure your continuous integration process installs the packages, so the `node_modules` (or `vendor`) directory exists on the server.
