---
title: Upgrading
pageTitle: Upgrading
description: Upgrading from the deprecated Emulsify Pattern Lab to Emulsify Drupal
---

An existing Emulsify starter theme (storybook) can be updated to a subtheme featuring Emulsify Core by performing the following:

## Existing Drupal Project/Theme

1. Install the base theme: `composer require drupal/emulsify`
2. Enable the base theme and it's helper module: `drush pm:enable emulsify_tools && drush theme:enable emulsify`
3. Uninstall the theme existing theme: `drush theme:uninstall [theme_name]`
   - [OPTIONAL] If you wish to keep the existing theme's name for rename the old theme directory to something else (e.g., `THEMENAME_old`) and rename the old theme's info.yml file as well (e.g., `THEMENAME_old.info.yml`) 
4. Generate an Emulsify subtheme: `drush emulsify [theme_name]`
5. Copy your `components/` directory from the old theme into the new theme directory.
6. Review the old theme's `package.json` for any customizations or additional packages/libraries. Compare this to [Emulsify Core's](https://github.com/emulsify-ds/emulsify-core/blob/main/package.json) `package.json` file to help determine packages/libraries not part of the base installation.
7. Review the following files within your old theme and compare them to [Emulsify Core's shipped configuration](https://github.com/emulsify-ds/emulsify-core/tree/main/config). If there are any customizations that need to carry forward you can extend/overwrite Emulsify Core's configuration by modifying your new theme's configuration within `[new theme]/config/emulsify-core`.
8. Verify the component structure defined in `project.emulsify.json` matches your `components/` directory.

## Standalone Project

### Tooling and custom configuration

All project tooling 

### Parent theme assets


### Update packages


## Upgrading from Pattern Lab

Early versions of Emulsify used Pattern Lab to organize and build components. Since September of 2020 Emulsify has moved to Storybook. Follow the steps below to refactor your old project and upgrade to the latest version of Emulsify.

### Required Steps

1. Disable old theme
2. Rename old theme directory to something else (e.g., `THEMENAME_old`) and rename the old theme's info.yml file as well (e.g., `THEMENAME_old.info.yml`)
3. Follow [Drupal installation instructions](/docs/emulsify-drupal) (be sure and use your old name and machine name in the php script, e.g., `php emulsify.php "THEME NAME" --machine-name THEME_NAME`
4. Replace contents of the new theme's `components` directory with your old theme's `components/_patterns` contents (if you don't want to have a lot of path changes you can keep them in the `_patterns` subdirectory). Be sure and change any library paths in style.scss, like so:

```
// Old
@import "normalize";
@import "breakpoint-sass/stylesheets/breakpoint"

// New
@import "~normalize.css/normalize";
@import "~breakpoint-sass/stylesheets/breakpoint";
```

&#x20; 4\. Move any static contents (e.g., `images` directory) into the new theme.\
&#x20; 5\. Copy over Drupal files (you may need to fix paths later):

```
*.theme
*.breakpoints.yml
*.info.yml
*.libraries.yml
```

&#x20; 6\. Disable/uninstall/remove the unified_twig_extensions module, and enable the new [emulsify_twig](https://www.drupal.org/project/emulsify_twig) module.\
&#x20; 7\. Enable new theme in Drupal\
&#x20; 8\. Run `composer remove fourkitchens/emulsify`\
&#x20; 9\. Run `npm run develop`.

### Optional Steps (depending on your installation)

1. Move any custom references inside `custom/old_theme/components/_meta/_00-head|_01-foot.twig` into `.storybook/preview-head.html` (see [Storybook docs](https://storybook.js.org/docs/configurations/add-custom-head-tags/) for details) and fix any reference paths. An example of this might be as follows:

```
<!-- Old _00-head.twig -->
<link rel="stylesheet" href="../../js/slick/slick.css?{{ cacheBuster }}" media="all" />
<script src="../../js/slick/slick.min.js"></script>

<!-- New preview-head.html -->
<link rel="stylesheet" href="../js/slick/slick.css?{{ cacheBuster }}" media="all" />
<script src="../js/slick/slick.min.js"></script>
```

To complete the step above, you would add this `js` directory to the Storybook command in package.json like:

```
"storybook": "start-storybook -s ./dist, ./images, ./js -p 6006",
"build-storybook": "build-storybook -s ./dist, ./images, ./js -o .out",
```

&#x20; 2\. You may need to copy over new Emulsify styles, e.g. for [the colors](https://github.com/emulsify-ds/compound/blob/main/components/00-base/01-colors/_colors-vars.scss).

### Writing Stories

Storybook only loads the stories you tell it to, so you will need to create \*.stories.js files. We have multiple examples in the new starter including ones using complex Twig includes, sharing data across components and using JavaScript (see [usage](../basic-usage/writing-stories) details).

### Data

Data can still be handled via YML (preferred) or JSON files. However, you will need to handle any global data files differently (see [usage](../basic-usage/writing-stories) instructions) as the new setup pays no attention automatically to the old `/components/_data` directory.
