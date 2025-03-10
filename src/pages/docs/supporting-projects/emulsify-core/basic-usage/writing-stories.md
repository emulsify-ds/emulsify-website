---
title: Writing Stories
pageTitle: Writing Stories
description: ''
---

## TLDR: Creating your own components
1. A component consists of 3 required files.
  - `.yml` to define your component and provide mock data for Storybook's development instance - See [Drupal's Single Directory Component documentation](https://www.drupal.org/node/3352951) on how to structure your YAML file.
  - `.twig` to create to markup for your component.
  - `.stories.js` for Storybook to display, categorize, provide controls, and interact with your component. See [Storybook's documentation](https://storybook.js.org/docs/writing-stories).
2. A component can have addition files that are optional.
  - `.scss` that is compiled into CSS and automatically loaded by Storybook.
  - `.js` file to provide interactivity.

## Example: Simple annotated example

(From `components/01-atoms/buttons/buttons.stories.js` with added comments)

```
// Import the Twig file.
import button from './button.twig';

// Import the data file.
import buttonData from './button.yml';

// This defines where the component will be shown in Storybook's navigation.
export default { title: 'Atoms/Button' };

// This will create a story called "Primary" under the above navigation
// using your button component and buttonData.
export const primary = () => button(buttonData);

```

### Example: Sharing Data Between Components

(From `components/02-molecules/card/cards.stories.js` with added comments)

```
import card from './card.twig';

// Import the data file shared by all cards.
import cardData from './card.yml';
// Import the data file specific to the 'bg' variation.
import cardBgData from './card-bg.yml';

export default { title: 'Molecules/Cards' };

// This creates a "Default" card story with the "common" data.
export const default = () => card(cardData);

// This creates a "Card With Background" story which includes the common data from
// `card.yml`, and then overrides and/or additional data provided by `card-bg.yml`.
export const cardWithBackground = () => card({ ...cardData, ...cardBgData });

```

### Example: Using JavaScript

(From `components/02-molecules/tabs/tabs.stories.js` with added comments)

```
import tabs from './tabs.twig';
import tabData from './tabs.yml';

// Importing JavaScript as you normally would in Node.js loads that js in Storybook.
// NOTE: This does not load the javascript in Drupal. You will still need to create
// a Drupal library and load it where appropriate using Drupal methods.
import './tabs';

export default { title: 'Molecules/Tabs' };

export const JSTabs = () => tabs(tabData);

```

### Example: Using Storybook "Controls"

Storybook [Controls](https://storybook.js.org/docs/react/essentials/controls) offers the ability to tweak stories via the Storybook UI for demoing different variations, etc. Here is a simple example below:

```
import React from 'react';

import button from './button.twig';

import buttonData from './button.yml';

export default {
  title: 'Atoms/Button',
  argTypes: {
    // This defines a "Variation" argument that can be used in components.
    variation: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
  },
};

// We pass "variation" as a destructured object into our component.
export const twig = ({ variation }) =>
  // Finally, we can pass the selected variation as a property of the component.
  button({ ...buttonData, button_modifiers: [variation] });

```
