---
title: 'Emulsify Drupal: Adding 3rd-party libraries'
pageTitle: 'Emulsify Drupal: Adding 3rd-party libraries'
description: How to add libraries like jQuery to your project.
---

Emulsify Core has changed how storybook is loaded into your project. At this time you will need to import your 3rd-party libraries on a per-story instance. 

`import 'jquery.js';`

<!-- ## Global Libraries \(e.g. jQuery\)

There are some instances in which a library should be available to all components, i.e. "global."

### jQuery

Use the following steps to make jQuery available to your component javascript files and to use additional libraries that require jQuery.

#### Add jQuery Library

```bash
npm install jquery
```

### Add jQuery to Storybook Config

Create a `/.storybook/jquery-global.js` file and add the following:

```javascript
import jquery from 'jquery'
global.jQuery = jquery
global.$ = jquery
```

Import this file in `./storybook/preview.js`:

```javascript
   ...
   import './_drupal.js';
+  import './jquery-global.js';
```

This ensures that jQuery is loaded before other libraries. [See this explanation for details](https://stackoverflow.com/a/39820703).

### Add jQuery as a Global in Webpack

Add the following to `/.storybook/webpack.config.js`:

```javascript
   loader: 'eslint-loader',
   options: {
     cache: true,
+      globals: [
+        'jQuery'
+      ],
   },
```

### Add jQuery as a Global to ESLint config

Add the following to `.eslintrc.yml`:

```text
    describe: true
    Drupal: true
+   jQuery: true
  parser: babel-eslint
```

### Example: Use jQuery in a Component

The following example will cause the error status message to blink.

#### Create JS file

Create `components/02-molecules/status/status.js` and add the following:

```javascript
;(($) => {
  Drupal.behaviors.status = {
    attach() {
      setInterval(() => {
        $('.status--error').fadeToggle()
      }, 500)
    },
  }
})(jQuery)
```

#### Update the Status Story

Add the new JS file to the `components/02-molecules/status/status.stories.js` and include the DrupalBehaviors effect:

```javascript
  import React from 'react';
+ import { useEffect } from '@storybook/client-api';

  import status from './status.twig';

  import statusData from './status.yml';

+ import './status';
+
  /**
   * Storybook Definition.
   */
  export default { title: 'Molecules/Status' };

- export const statusExamples = () => (
-   <div dangerouslySetInnerHTML={{ __html: status(statusData) }} />
- );
+ export const statusExamples = () => {
+   useEffect(() => Drupal.attachBehaviors(), []);
+   return <div dangerouslySetInnerHTML={{ __html: status(statusData) }} />;
+ };
```

Now if you run the storybook `npm run develop` you should see a blinking error message in the status molecule. -->

<!-- ## Libraries for Individual Components

There are a couple of strategies for loading individual libraries.

### Add with Yarn

Add an external library using yarn by adding it to your project `npm install LIBRARY` and then importing where needed.

### Load Library from an External URL

External libraries, for example from a CDN, can be loaded with [Storybook External Links](https://github.com/jhta/storybook-external-links). Install, `yarn add storybook-external-links` and add to the `/.storybook/config.js` or an individual story file:

```javascript
+ import withExternalLinks from 'storybook-external-links';
+ const url = '//[URL TO LIBRARY]';
+ const externalLinkDecorator = withExternalLinks(url);
+ addDecorator(externalLinkDecorator);
``` -->
