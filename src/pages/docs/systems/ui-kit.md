---
title: Emulsify UI Kit
pageTitle: Emulsify UI kit
description: The Emulsify UI Kit is a tool for designers and front-end engineers to build high-quality user interfaces effectively and efficiently while maintaining WCAG 2.1 AA standards and project performance goals.
---

## Vision for the UI kit

The Emulsify UI Kit is a tool for designers and front-end engineers to build high-quality user interfaces effectively and efficiently while maintaining WCAG 2.1 AA standards and project performance goals.

The Emulsify UI Kit gives users access to a library of prebuilt tokens and components that follow accessibility best practices and are easy to customize. The components in the kit are fully responsive, carefully designed, and can be implemented for modification in every project.

## Goals of the Emulsify UI Kit

- Create efficiency in the user interface design process
- Establish consistency in user interface design
- Maintain high accessibility standards

The Emulsify UI Kit has two distinct building blocks: the Figma and the code repo. These two items are kept in alignment for a seamless experience.

## What the Emulsify UI Kit is not

- Handcuffs. If using the kit is a barrier to a successful project, do what you need to for your project to be successful and provide feedback on why the kit was a barrier.
- A "default" visual design. Your visual design work should be tailor-made for each of your clients.

## There are two parts of this UI Kit

- [Figma UI Kit](https://www.figma.com/community/file/1141071510618977331)
- [Storybook](https://emulsify-ds.github.io/emulsify-ui-kit/)

## Connecting components with Figma

First, get your own copy of the [Emulsify UI kit](https://www.figma.com/community/file/1141071510618977331) from the Figma community.

The strength of this UI kit leans on its connection with Figma via [Tokens Studio](https://tokens.studio/).

To connect the Figma file with your code, [see the instructions in the Tokens Studio documentation](https://docs.tokens.studio/sync/github).

## Creating a component

A complete component meets the following criteria:

1. Design tokens are defined as their own set in Figma, in the Token Studio plugin, and they use references to values defined in `semantic` as much as possible.
2. The component has an independent frame in Figma.
3. The component's CSS file uses the generated design tokens as much as possible. See button example below.
4. A component's story connects to the corresponding Figma frame, defined in `.storybook/configma.json`.
5. The component passes WCAG 2 AA.

## Example component

The [button component](https://emulsify-ds.github.io/emulsify-ui-kit/?path=/story/components-button--button) serves as an example of how variables are used to connect Figma with the code.

```css
.button {
  background-color: var(--button-color-bkg);
  padding: var(--button-padding-y) var(--button-padding-x);
  color: var(--button-color-label);
  border-radius: var(--button-radius);
  border: var(--button-border-width-border) solid var(--button-border-color);
  font-size: var(--font-size-small);
  font-weight: var(--button-font-weight-label);
  text-transform: var(--button-text-case);
  text-decoration: none;

  &:hover,
  &.button--hover {
    background-color: var(--button-color-bkg-hover);
    padding: var(--button-padding-y-hover) var(--button-padding-x-hover);
    border: var(--button-border-width-border-hover) solid var(
        --button-border-color-hover
      );
    color: var(--button-color-label-hover);
    text-decoration: underline;
    text-transform: var(--button-text-case);
  }

  &:focus,
  &.button--focus {
    padding: var(--button-padding-y-focus) var(--button-padding-x-focus);
    color: var(--button-color-label-focus);
    border: var(--button-border-width-border-focus) solid var(
        --button-border-color-focus
      );
    outline: var(--button-border-width-outline-focus) solid var(
        --button-color-outline-focus
      );
    text-transform: var(--button-text-case);
  }
}
```

### Naming tokens

See [this whiteboard](https://www.figma.com/file/l6MIPQCewbIJoKvZpxhAwr/Token-Naming?node-id=0%3A1&t=5IaZF2ZNEoruxEld-1) that outlines the preferred naming convention for design tokens.

### Connecting a component's story to the corresponding Figma frame

1. In Figma, select the frame to share and activate the Share button (in the upper right hand corner).
2. In the share modal make sure that "Link to selected frame" is checked and activate "Copy link".
3. Open `.storybook/configma.json` and confirm the following:
4. Using this example: `https://www.figma.com/file/[FIGMA_FILE_ID]/[FIGMA_FILE_NAME]?node-id=[NODE_ID]`
5. Confirm that `url` has the correct `FIGMA_FILE_ID` and `FIGMA_FILE_NAME`.
6. Add your component name to the file as a key with the `NODE_ID` being the value.
7. Import `configma.json` into your story.
8. In the parameters of your story, include `figma.$KEY` as shown below.

```js
Button.parameters = {
  design: {
    type: 'figma',
    url: figma.url + figma.button,
  },
};
```
