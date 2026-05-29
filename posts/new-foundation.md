# A New Foundation for Emulsify

For years, Emulsify has helped teams build design systems that work where real projects happen: in component libraries, in CMS themes, in Storybook, and in the day-to-day handoff between design and development.

For many teams, that has meant Drupal. Emulsify has a long history in the Drupal ecosystem, and Drupal will continue to be a first-class part of the project. But with the upcoming Emulsify Core 4 release, we’re taking an important step toward something broader.

Emulsify Core 4 is a more modern, more flexible foundation for component-driven development. It moves Emulsify to Vite, brings Storybook into a React/Vite workflow, adds first-class support for Twig and React components side by side, and introduces a clearer platform model for projects that are not Drupal-specific.

In other words: Emulsify is still here to help teams build maintainable design systems. The foundation is simply ready to support more kinds of teams, more kinds of platforms, and more kinds of projects.

## Why this release matters

Frontend tooling has changed a lot since Emulsify first helped teams standardize their component workflows. Webpack served the project well, but modern frontend teams increasingly expect faster local builds, clearer configuration, and tools that are easier to adapt across different project types.

Emulsify Core 4 moves the build system to Vite. That change is important on its own, but the bigger story is what it unlocks.

With Core 4, Emulsify is no longer shaped around the assumption that every project is a Drupal theme. Drupal-specific behavior still exists where it should, but it now lives behind a Drupal platform adapter. Generic projects can stay generic. React projects can use React. Twig-based CMS projects can use Twig. Mixed systems can document both Twig-rendered and React-rendered components in the same Storybook instance.

That shift makes Emulsify Core easier to use as a shared frontend foundation, whether you are working in Drupal, building a standalone design system, modernizing an existing theme, or preparing for another platform integration in the future.

## Vite becomes the new compiler foundation

The most visible change in Core 4 is the move from Webpack to Vite.

This is not just a dependency swap. Vite gives Emulsify a modern build foundation for compiling project JavaScript, Sass/CSS, Twig templates, component metadata, and static component assets. It also gives existing projects a clearer path to use Emulsify Core as a modern compiler layer without needing to rethink the entire project structure at once.

That last point matters. A major release should move the project forward, but it should not make existing teams feel like they need to start over.

Core 4 continues to support the component structures Emulsify projects already use, including `src/components`, root-level `./components`, and configured `variant.structureImplementations`. So if your project already has an established component structure, the upgrade path is designed to respect that.

For new projects, `src/components` is the recommended default. For existing projects, keeping the current structure may be the right move.

```txt
src/
  components/
    button/
      button.twig
      button.stories.js
      button.scss
```

Existing root component structures also remain valid:

```txt
components/
  button/
    button.twig
    button.stories.js
    button.scss
```

This makes Core 4 useful in two directions. It gives new Emulsify projects a more modern starting point, and it gives existing projects a practical way to adopt Emulsify Core as a Vite-based compiler and Storybook layer.

## A platform model, not a platform assumption

One of the biggest architectural changes in Emulsify Core 4 is the new platform model.

Projects now use `project.emulsify.json` as the source of truth for platform and structure configuration. A generic project can define itself as generic:

```json
{
  "project": {
    "platform": "generic",
    "name": "example",
    "machineName": "example"
  }
}
```

A Drupal project can opt into Drupal behavior:

```json
{
  "project": {
    "platform": "drupal",
    "name": "whisk",
    "machineName": "whisk",
    "singleDirectoryComponents": true
  }
}
```

That difference is small in configuration, but important in practice.

Drupal projects can still get Drupal-specific behavior, including Drupal behavior attachment and Single Directory Component output handling. Generic projects do not inherit Drupal assumptions. That means a standalone Twig library, a React component library, a WordPress + Timber project, a Craft CMS project, or another non-Drupal implementation can use the Emulsify Core foundation without carrying Drupal-specific behavior it does not need.

Dedicated adapters for platforms like WordPress are future opportunities, but Core 4 gives us the structure to support that direction cleanly.

Drupal becomes one integration of the Emulsify approach, not the only shape the project can take.

## Twig and React, together in Storybook

Storybook is still central to the Emulsify workflow. What changes in Core 4 is how flexible that Storybook workspace can be.

Emulsify Core 4 moves Storybook to React/Vite. React components can render directly through Storybook’s React framework, while Twig templates render through Emulsify’s Twig story helper.

For Twig teams, the recommended story pattern uses `renderTwig()`:

```js
import buttonTwig from './button.twig';
import { renderTwig } from '@emulsify/core/storybook';

const context = (args) => ({
  text: args.text,
  url: args.url,
});

export default {
  title: 'Components/Button',
  render: renderTwig(buttonTwig, { context }),
  args: {
    text: 'Read more',
    url: '#',
  },
};

export const Default = {};
```

React stories can live beside those Twig stories:

```jsx
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    text: 'Read more',
  },
};

export const Default = {};
```

That opens up a lot of possibilities.

A Drupal team can keep using Twig components. A React team can use Emulsify for a standalone component library. A team with both CMS-rendered components and application-rendered components can document them together in one Storybook instance.

That is a meaningful shift for design systems. Instead of forcing every project into one rendering model, Emulsify can now support the way a design system actually gets used across an organization.

## Better Twig support where teams already work

Twig remains an important part of Emulsify. Core 4 improves the Twig experience by adding native Twig.js support for familiar Emulsify helpers like `bem()` and `add_attributes()`, along with `switch`, `case`, `default`, and `endswitch` tags.

That means Twig components can continue using patterns that Emulsify teams already know:

```twig
{% set button_attributes = {
  class: bem('button', ['primary'])
} %}

<a href="{{ url }}" {{ add_attributes(button_attributes) }}>
  {{ text }}
</a>
```

The new switch/case support also makes component templates easier to read when markup changes by variant:

```twig
{% switch variant %}
  {% case 'primary' or 'secondary' %}
    <span class="badge badge--strong">{{ label }}</span>
  {% default %}
    <span class="badge">{{ label }}</span>
{% endswitch %}
```

These are small authoring improvements, but they add up. The goal is not to make teams relearn how to write components. The goal is to make the existing Emulsify authoring experience work better in a modern Storybook and Vite environment.

## A practical upgrade path

Major releases can sound intimidating. This one brings significant changes, but it is designed to avoid unnecessary churn.

Existing component roots do not need to move just to upgrade. Existing Twig component authoring remains supported. Older Twig stories that return HTML strings are wrapped for compatibility, while actively maintained stories can move toward the clearer `renderTwig()` pattern over time.

There are still real upgrade considerations. Teams will need to use Node.js 24 or later, move custom Webpack configuration to Vite extension points, and review any project code that assumed Drupal behavior was always present in Storybook.

But the intended upgrade story is straightforward: keep what still works, modernize what needs to move, and adopt the new patterns where they provide value.

Core 4 also introduces audit tooling to help identify upgrade-readiness items, including legacy Twig story patterns, unresolved Twig references, Webpack-era assumptions, and Drupal assumptions in non-Drupal projects.

This is especially useful for existing Emulsify projects. Instead of treating migration as a manual guessing game, teams can use the audit output to see where their project needs attention.

## Emulsify Core in existing projects

One of the most exciting parts of this release is that Emulsify Core becomes easier to think about outside of a traditional Emulsify starter path.

If you already have a project with component-like source files, but the build tooling is aging or overly custom, Core 4 can be considered as a modern Vite-based compiler and Storybook foundation. That could mean an existing Drupal theme, a Twig-based CMS project, a standalone component library, or a React-focused frontend that needs a more consistent design system workspace.

Not every project will be a drop-in migration. Existing build customizations still need to be reviewed, and each platform will have its own integration needs. But Core 4 makes the path easier to evaluate because the responsibilities are clearer:

Emulsify Core provides the shared build and Storybook foundation.

Platform adapters provide platform-specific behavior.

Projects keep ownership over their implementation details.

That separation gives teams more room to adopt Emulsify incrementally.

## Drupal is still first-class

This broader direction does not mean Drupal is becoming less important to Emulsify.

The upcoming Emulsify Drupal 7 and Emulsify Tools 2 releases bring this new Core 4 foundation into the Drupal ecosystem. Those releases modernize the Drupal base theme, move generated themes to the Vite-based workflow, update compatibility for modern Drupal versions, and improve Drupal-specific developer workflows.

But it is important to frame those releases correctly: they are integration projects built on top of the new Emulsify Core foundation.

That is the model we want going forward. Core provides the platform-agnostic foundation. Drupal provides a first-class integration. Future platforms can follow that same pattern when the time is right.

## What comes next

Emulsify Core 4 is a major technical shift, but the goal is familiar: help teams build design systems that are easier to start, easier to maintain, and easier to bring into real projects.

The difference is that the foundation is now broader.

Twig and React can live together. Drupal behavior can stay in Drupal projects. Generic projects can stay generic. Existing projects have a practical upgrade path. Future integrations have a clearer place to start.

In the next post, we’ll look at what this means for Drupal specifically, including Emulsify Drupal 7, Emulsify Tools 2, the new generated theme workflow, and the improvements coming for modern Drupal projects.

For now, Emulsify Core 4 gives us the foundation for the next chapter of the project: still component-driven, still practical, and ready for more than one platform.