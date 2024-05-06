---
title: Upgrading
pageTitle: Upgrading
description: Upgrading from the deprecated Emulsify Pattern Lab to Emulsify Drupal
---

An existing Emulsify starter theme (storybook) can be updated to a subtheme utilizing Emulsify Core by performing the following:

## Scenario: Existing Drupal Project/Theme

1. Install the base theme: `composer require drupal/emulsify`
2. Enable the base theme and it's helper module: `drush pm:enable emulsify_tools && drush theme:enable emulsify`
3. Uninstall the existing theme: `drush theme:uninstall [theme_name]`
   - [OPTIONAL] If you wish to keep the existing theme's name, then rename the old theme directory to something else (e.g., `THEMENAME_old`) and rename the old theme's info.yml file as well (e.g., `THEMENAME_old.info.yml`)
4. Generate an Emulsify subtheme: `drush emulsify [theme_name]`
5. Copy your `components/` directory from the old theme into the new theme directory.
6. Review the old theme's `package.json` for any customizations or additional packages/libraries. Compare this to [Emulsify Core's](https://github.com/emulsify-ds/emulsify-core/blob/main/package.json) `package.json` file to help determine packages/libraries not part of the base installation.
7. Review the following files within your old theme and compare them to [Emulsify Core's shipped configuration](https://github.com/emulsify-ds/emulsify-core/tree/main/config). If there are any customizations that need to carry forward you can extend/overwrite Emulsify Core's configuration by modifying your new theme's configuration within `[new theme]/config/emulsify-core`.
8. Verify the component structure defined in `project.emulsify.json` matches your `components/` directory.
9. Delete the `node_modules/` directory if it exists.
10. Run `npm install` and verify all the scripts still run without errors.

## Scenario: Standalone Project

If your instance of Emulsify lives outside of Drupal, you can do an in-place upgrade.

### Tooling and custom configuration

All tooling and configuration has been moved to Emulsify Core in an effort to simplify your component library and provide an easier update workflow. This means there is a lot of additional files that are no longer needed post-update. Perform the following steps to remove files/configuration that are no longer needed and refactor any configuration customizations.

1. Edit `.nvmrc` and change the version to `20`
2. From the root of your project create a `config/` directory that can extend/overwrite Emulsify Core configuration
`git clone -b main https://github.com/emulsify-ds/emulsify-drupal.git && cd emulsify-drupal && git sparse-checkout set --no-cone whisk && mv whisk/config .. && cd .. && rm -rf emulsify-drupal`
3. Review the existing files and compare them to their corresponding Emulsify Core implementation. Make note of any customization that need to carry forward:

- `.eslintrc.yml` compared to <https://github.com/emulsify-ds/emulsify-core/blob/main/config/eslintrc.config.json>
- `.prettierignore` compared to <https://github.com/emulsify-ds/emulsify-drupal/blob/main/whisk/config/emulsify-core/.prettierignore>
- `.prettierrc.json` compared to <https://github.com/emulsify-ds/emulsify-core/blob/main/config/.prettierrc.json>
- `.storybook/emulsifyTheme.js` compared to <https://github.com/emulsify-ds/emulsify-core/blob/main/.storybook/emulsifyTheme.js>
- `.stylelintrc.json` compared to <https://github.com/emulsify-ds/emulsify-core/blob/main/config/.stylelintrc.json>
- `a11y.config.js` compared to <https://github.com/emulsify-ds/emulsify-core/blob/main/config/a11y.config.js>
- `babel.config.js` compared to <https://github.com/emulsify-ds/emulsify-core/blob/main/config/babel.config.js>
- `jest.config.js` compared to <https://github.com/emulsify-ds/emulsify-core/blob/main/config/jest.config.js>
- `postcss.config.js` compared to <https://github.com/emulsify-ds/emulsify-core/blob/main/config/postcss.config.js>

4. If there are any customizations from step #2 that you want to carry forward you can now modify the corresponding files within `config/emulsify-core/`
5. Remove the following files from your project

- `.eslintignore`
- `.eslintrc.yml`
- `.prettierignore`
- `.storybook/`
- `.stylelintignore`
- `.stylelintrc`
- `a11y.config.js`
- `babel.config.js`
- `emulsify.php`
- `jest.config.js`
- `postcss.config.js`
- `util/`

### Moving assets

As of version `4.7.0` all theme icons, images, fonts, ...etc have been moved to the `assets/` directory. Verify this directory exists and houses the previously mentioned folders.

- `assets/icons`
- `assets/images`
- `assets/fonts`

### Update scripts and packages

The `package.json` will likely see the most changes to your project due to all project dependencies and their versions now being added via Emulsify Core.

1. Review the `package.json` file and make note of any custom `"scripts": {` added to your project. Compare this to <https://github.com/emulsify-ds/emulsify-drupal/blob/main/whisk/package.json#L15> to reference.
2. Copy all scripts from <https://github.com/emulsify-ds/emulsify-drupal/blob/main/whisk/package.json#L15> into your own `package.json` and add any customizations previously identified.
3. Review the `"dependencies": {` in your `package.json` and compare them to <https://github.com/emulsify-ds/emulsify-core/blob/main/package.json#L38>. Make note of any additional packages your project may have. The version numbers for matching packages can be ignored as Emulsify Core will install the ideal version.
4. Remove all dependencies (except addition packages identified in step 3) and replace with `"emulsify-core": "github:emulsify-ds/emulsify-core"`. For most projects `github:emulsify-ds/emulsify-core` will be the only listed dependency.
5. Review and verify all your `devDependencies` are still relevant and in use. Update them to a version that is compatible with Node 20. This may result in additional configuration changes required for your specific project.
6. Delete the `node_modules/` directory if it exists.
7. Run `npm install` and verify all the scripts still run without errors.

## Scenario: Upgrading from Pattern Lab

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

5. Move any static contents (e.g., `images` directory) into the new theme.\
6. Copy over Drupal files (you may need to fix paths later):

```
*.theme
*.breakpoints.yml
*.info.yml
*.libraries.yml
```

7. Disable/uninstall/remove the unified_twig_extensions module, and enable the new [emulsify_twig](https://www.drupal.org/project/emulsify_twig) module.\
8. Enable new theme in Drupal\
9. Run `composer remove fourkitchens/emulsify`\
10. Run `npm run develop`.

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

2. You may need to copy over new Emulsify styles, e.g. for [the colors](https://github.com/emulsify-ds/compound/blob/main/components/00-base/01-colors/_color-definitions.scss).

### Writing Stories

Storybook only loads the stories you tell it to, so you will need to create \*.stories.js files. We have multiple examples in the new starter including ones using complex Twig includes, sharing data across components and using JavaScript (see [usage](../basic-usage/writing-stories) details).

### Data

Data can still be handled via YML (preferred) or JSON files. However, you will need to handle any global data files differently (see [usage](../basic-usage/writing-stories) instructions) as the new setup pays no attention automatically to the old `/components/_data` directory.
