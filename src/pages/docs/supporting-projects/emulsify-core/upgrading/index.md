---
title: Upgrading
pageTitle: Upgrading
description: Upgrading from the deprecated Emulsify Pattern Lab to Emulsify Drupal
---

## Upgrading existing Emulsify Core themes from 2.x to 3.x

Emulsify 3.x implemented various refactoring of webpack and storybook's configuration. While most changes were consistent with the 2.x version there are some changes that will need to be manually made to your theme as webpack and storybook now expect certain files to be present. The steps below outline what you'll need to do to upgrade Emulsify Core and convert your existing theme. You can also view all the changes made to the `whisk/` directory in the following [pull-request](https://github.com/emulsify-ds/emulsify-drupal/pull/337/files#diff-d44751c287e40b13b98855460d9d1c5e16b4c4e1f5cf68c576bfb32e7158eeb3) for a more detailed view of the changes needed.

1. Edit the package.json and change your `@emulsify/core` dependency to `"@emulsify/core": "^3.0.3",`
2. Edit the `.nvm` file and change the version to `24`
3. Rename and convert the `/config/emulsify-core/eslintrc.config.json` config file to `/config/emulsify-core/eslintrc.config.js`. Eslint 9.x was a large shift with how the package implements and consumes configuration. You will need to use a module export of `defineConfig` that includes any customization you had from your json file. If there are no customizations from your existing project just copy the following file. See the [file diff](https://github.com/emulsify-ds/emulsify-drupal/pull/337/files#diff-d44751c287e40b13b98855460d9d1c5e16b4c4e1f5cf68c576bfb32e7158eeb3) for details.
4. Rename `/config/emulsify-core/storybook/example.theme.js` to `/config/emulsify-core/storybook/theme.js`. If you'd like to use the default storybook emulsify theme then export an empty const `const storybookTheme = {};` and comment/remove the sample theme overrides.
5. Convert `/config/emulsify-core/storybook/main.js` to a type module script. See [file diff](https://github.com/emulsify-ds/emulsify-drupal/pull/337/files#diff-f25561df6d704fc5a48fbf79af94486bc4bfcd1d78e96c2c5956a660b9d7eaa8).
6. Convert `/config/emulsify-core/storybook/preview.js` to a type module script. See [file diff](https://github.com/emulsify-ds/emulsify-drupal/pull/337/files#diff-56697122bd73a4c583e38bfc6b36e8e0c65338ee4e4d2df5792f7ee02d7a6789).
7. Include empty `/config/emulsify-core/storybook/manager-head.html` and `/config/emulsify-core/storybook/preview-head.html` files. These files can be modified to include `<script>` or `<link>` tags for globally loaded JS/CSS files.
8. Rename `/config/emulsify-core/webpack/example.babel.config.js` to `/config/emulsify-core/webpack/example.babel.config.cjs`
