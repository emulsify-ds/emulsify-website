---
title: Twig Extensions
pageTitle: Twig Extensions
description: ''
---

Emulsify Design System uses a variety of plugins for Twig extensions:

1. [Emulsify Tools](https://www.drupal.org/project/emulsify_tools): Defines a Drush command (`drush emulsify [theme_name]) to generate sub-themes and custom Twig functions for BEM and Add Attributes.
2. [Emulsify Twig Extensions](https://github.com/emulsify-ds/emulsify-twig-extensions): Adds BEM and Add Attributes custom Twig extensions for Storybook (Twig.js)
3. [Twig Drupal Filters](https://www.npmjs.com/package/twig-drupal-filters): Adds Drupal Twig extensions for Storybook (Twig.js)
4. [Emulsify Twig](https://www.drupal.org/project/emulsify_twig): (deprecated: all future development moving to Emulsify Tools) Adds BEM and Add Attributes custom Twig extensions for Drupal (Drupal module)

_Note: The `attach_library` Twig extension was deprecated in the latest version as Storybook has a better method for handling JavaScript. That function won't throw errors in Storybook, but it will not add your JavaScript. See Compound's_ [_`tabs.stories.js`_](https://github.com/emulsify-ds/compound/blob/main/components/02-molecules/tabs/tabs.stories.js) _for an example of how to load component-specific javascript in Storybook._
