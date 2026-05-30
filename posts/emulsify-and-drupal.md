# Bringing the New Emulsify Foundation to Drupal

In the last post, we looked at [Emulsify Core 4.x](https://www.npmjs.com/package/@emulsify/core), or **EC4.x** for short, as a new foundation for the project: more modern, more flexible, and easier to extend across different implementation paths.

That direction matters because Emulsify has never been just a CMS theme. With Vite, Storybook, Twig, React, and platform adapters working together, **EC4.x makes Emulsify’s flexible architecture clearer and gives teams more room to build on it.**

The Drupal ecosystem is still a major part of that story.

Emulsify has deep roots in that community, and many teams rely on it to connect their design systems to real CMS implementation work. The upcoming [Emulsify (base theme) 7.x](https://www.drupal.org/project/emulsify) and [Emulsify Tools 2.x](https://www.drupal.org/project/emulsify_tools) releases bring the new EC4.x foundation into that workflow.

These releases are platform-specific, but they are best understood as integration releases. **EC4.x provides the broader frontend foundation.** Emulsify (base theme) 7.x and Emulsify Tools 2.x provide the CMS-specific layer that helps teams use that foundation inside modern Drupal projects.

The result is a cleaner base theme, a more modern generated theme workflow, better Twig support, and a practical upgrade path for existing Emulsify teams.

## A first-class integration, not the whole architecture

One of the most important ideas behind this release cycle is separation.

Platform-specific behavior should exist where the platform needs it. But it should not define the entire shape of EC4.x.

That idea has always been part of Emulsify’s direction. EC4.x simply makes the separation more visible in the architecture, configuration, and adapter boundaries. Emulsify (base theme) 7.x builds on that model by acting as the Drupal integration point for the new foundation.

For teams that support Drupal projects, the familiar Emulsify workflow is still there: component-driven development, Storybook, Twig templates, generated child themes, and practical tooling for theme work.

**The difference is that those pieces now sit on top of a more modern and easier-to-extend foundation.**

Those projects get the benefits of EC4.x while the core package remains easier to adapt for other platforms and project types.

## Built for modern Drupal projects

Emulsify (base theme) 7.x is a major release. It moves the integration stack forward for modern projects and establishes a new compatibility baseline.

This release prepares Emulsify (base theme) 7.x for Drupal `^11.3 || ^12` support and removes Drupal 10 support. That is an important compatibility change, and it should be part of upgrade planning for any existing project.

It also removes the Stable9 base theme dependency.

Stable9 did its job. It gave Emulsify a stable template foundation from core when that was the right tradeoff. But Emulsify has grown into more than a styling layer on top of another parent theme. It has its own component structure, template expectations, generated child theme workflow, and Storybook integration.

Keeping that large template surface inherited from another base theme makes ownership harder to explain. Template behavior can come from core, Stable9, Emulsify, or a generated child theme. That layering works, but it also makes the base theme harder to audit, document, and evolve.

With Emulsify (base theme) 7.x, Emulsify owns its template layer directly instead of inheriting it from Stable9 at runtime. Parent-owned template coverage helps preserve core template behavior while giving Emulsify more control over the theme foundation.

**That clearer ownership model is the real benefit.** Teams have one less layer to trace, generated child themes have a cleaner inheritance path, and future changes can be documented against the actual base theme behavior rather than a chain of overlapping responsibilities.

For teams maintaining long-lived projects, this makes the relationship easier to understand:

- **`emulsify` is the runtime parent theme.**
- **`whisk` is the generation-only starter source.**
- **Generated child themes inherit from `emulsify`.**
- **Platform-specific behavior is handled by the integration layer.**

The result is a cleaner model for existing teams and a better starting point for new projects.

## Generated themes now use the EC4.x foundation

Generated child themes are one of the main places where teams that support Drupal projects will feel the impact of this release.

Whisk remains part of the workflow, but its role is more specific. It is now a hidden, generation-only starter source. It should not be enabled directly. Instead, it provides the starter source used to generate a child theme, and that generated child theme uses `emulsify` as its runtime parent theme.

Whisk stays focused on generation, and Emulsify stays focused on runtime behavior.

Generated themes also move to EC4.x and the new Vite-based build workflow. New generated themes now start from the same modern foundation described in the EC4.x post.

A typical generated theme workflow still feels familiar:

```bash
drush emulsify my_theme
cd web/themes/custom/my_theme
npm install
npm run develop
```

The details behind that workflow are changing, but the goal is not to make teams relearn Emulsify. **The goal is to modernize what powers the workflow while keeping the day-to-day experience approachable.**

For teams that prefer the core Starterkit command, the generated theme path can follow that route as well:

```bash
php web/core/scripts/drupal generate-theme my_theme --starterkit whisk --path themes/custom
```

Both paths are designed around the same architecture: **generate from Whisk, run on Emulsify, and build with EC4.x.** Simple enough. :)

## A more practical upgrade path

Major releases always come with some planning. Emulsify (base theme) 7.x is no different.

Drupal 10 support has been removed. Drupal 11.3 or newer is required. The generated child theme frontend workflow moves from Webpack to Vite. Whisk should no longer be enabled directly. Existing child themes should be reviewed to make sure they inherit from `emulsify`.

Those are real changes, but they are also changes with a clear direction.

The upgrade is not intended to be a reset. Existing Emulsify projects should not need to throw away their component architecture or start from scratch. **EC4.x continues to support existing component structures**, and the base theme integration keeps platform-specific behavior where those projects need it.

Generated themes also include audit tooling to help teams identify common upgrade items, including older Twig story patterns, Webpack-era assumptions, unresolved Twig references, and platform assumptions that may need review.

```bash
npm run audit
```

For teams that want to focus specifically on Twig story migration, there is also a narrower audit command:

```bash
npm run audit:twig-stories
```

That kind of tooling matters because upgrades are easier when teams can see what actually needs attention. Instead of guessing where a project may rely on older patterns, teams can review the audit output and make targeted updates.

[See our upgrading to Emulsify Core 4.x guide.](#)

## Emulsify Tools 2.x supports the integration workflow

[Emulsify Tools 2.x](https://www.drupal.org/project/emulsify_tools) is the companion release that supports this new integration.

It updates the compatibility baseline for modern projects, including Drupal 11.3, PHP 8.4, and Drush 13. It also modernizes the child theme generation command while preserving the familiar `drush emulsify` alias.

That matters for continuity. **The underlying implementation is changing, but the command developers already know can remain part of the workflow.**

```bash
drush emulsify my_theme
```

Emulsify Tools 2.x also adds support for theme-defined Twig namespaces through `components.namespaces` in a theme’s `.info.yml` file. That gives projects a clean way to define component namespaces from the theme itself.

For example:

```yaml
components:
  namespaces:
    atoms: components/01-atoms
    molecules:
      - components/02-molecules
      - src/components/molecules
```

Those namespaces can then be used in Twig with familiar namespace syntax:

```twig
{% include '@atoms/button/button.twig' with {
  text: 'Read more',
  url: '#'
} %}
```

This helps templates stay readable and keeps component references aligned with the structure of the design system.

## Better Twig support where implementation teams need it

Twig is still central to Emulsify’s base theme workflow. Emulsify Tools 2.x improves that experience with better helper support and new syntax options.

The release adds `switch`, `case`, `default`, and `endswitch` tags, giving teams a cleaner way to handle variant-based template logic.

```twig
{% switch content.field_card_type.0 %}
  {% case 'feature' %}
    {% include '@molecules/card/card.twig' with {
      variant: 'feature',
      title: title
    } %}
  {% case 'callout' %}
    {% include '@molecules/card/card.twig' with {
      variant: 'callout',
      title: title
    } %}
  {% default %}
    {% include '@molecules/card/card.twig' with {
      variant: 'default',
      title: title
    } %}
{% endswitch %}
```

Emulsify Tools 2.x also refactors `bem()` and `add_attributes()` around a shared attribute manager. For developers, the benefit is straightforward: familiar Emulsify Twig helpers continue to work in a more consistent way.

```twig
{% set card_attributes = {
  class: bem('card', [variant|default('default')])
} %}

<article {{ add_attributes(card_attributes) }}>
  {% if title %}
    <h2 class="card__title">{{ title }}</h2>
  {% endif %}

  {% if body %}
    <div class="card__body">
      {{ body }}
    </div>
  {% endif %}
</article>
```

These are not changes that ask teams to abandon the way they write templates. **They are changes that make the existing Emulsify authoring experience more reliable and more expressive.**

## A better favicon workflow

One of the most visible user-facing improvements in Emulsify (base theme) 7.x is the new generated favicon package workflow.

Historically, favicon handling can become a small but persistent source of inconsistency across environments. A site may have one file configured locally, another in production, and a slightly different set of generated assets depending on who set it up and when.

Emulsify (base theme) 7.x takes a more structured approach.

The new workflow is built around one SVG source configured in the theme settings form. From there, Emulsify can generate a favicon package that includes browser, iOS, Android, manifest, and metadata assets. The settings UI can store the portable SVG source and generated package metadata so the favicon package can be recreated consistently across environments.

That gives teams a clearer lifecycle:

1. **Configure the favicon in theme settings.**
2. **Export and deploy configuration as usual.**
3. **Regenerate the environment-local favicon package after config import or deploy.**
4. **Use status tooling to confirm the package exists where it is needed.**

Emulsify Tools 2.x provides the deployment-oriented Drush commands for this workflow:

```bash
drush emulsify_tools:favicon-generate my_theme
drush emulsify_tools:favicon-status my_theme
drush emulsify_tools:favicon-reset my_theme
```

This separation keeps theme settings responsible for configuration and keeps Emulsify Tools responsible for deployment operations.

It also avoids generating missing favicon files during normal page requests. That is a better fit for predictable deployments: **configuration describes the desired favicon package, and deployment commands make sure the package exists in each environment.**

For existing projects, Emulsify Tools 2.x also includes repair tooling for older child themes that may be missing the new favicon config and schema entries.

```bash
drush emulsify_tools:repair-favicon-config
```

Or, for a specific child theme:

```bash
drush emulsify_tools:repair-favicon-config my_child_theme
```

The repair process is designed to fill in missing favicon entries without overwriting existing values.

## What to know before upgrading

Because Emulsify (base theme) 7.x and Emulsify Tools 2.x are major releases, there are a few important things to review before upgrading.

Drupal 10 support has been removed. Projects should be on Drupal 11.3 or newer before moving to Emulsify (base theme) 7.x. Drupal 12 compatibility is included as forward compatibility, but teams should still follow Drupal’s release status and test carefully as Drupal 12 stabilizes.

Emulsify Tools 2.x requires PHP 8.4 and Drush 13 or newer.

The old `drupal/components` dependency is removed from the Emulsify (base theme) 7.x stack. Theme-defined namespaces now come through Emulsify Tools 2.x.

Whisk should not be enabled directly. It is a starter source for generating child themes, not a runtime parent theme.

Generated child theme frontend workflows should move from Webpack terminology and assumptions to the Vite-based workflow provided by EC4.x.

Favicon generation requires the PHP extensions needed to rasterize SVG assets, including GD and Imagick. If those extensions are not available, the SVG source can still be stored in configuration, but PNG and ICO package generation will not complete until the extensions are installed.

These details are worth calling out, but they should not make the release feel out of reach. **The upgrade path is designed to be practical:** update the platform baseline, move to the new Emulsify stack, review generated child themes, run the audit tooling, and address project-specific items as needed.

[See our upgrading to Emulsify Core 4.x guide.](#)

## A strong integration today, more platforms ahead

Emulsify (base theme) 7.x and Emulsify Tools 2.x are important releases for teams that support Drupal projects. They modernize the build workflow, clean up the base theme architecture, improve generated child themes, add better Twig support, and introduce a more reliable favicon lifecycle.

But they also represent something bigger for Emulsify as a project.

**These are the first major integration releases built around the new EC4.x foundation.** Drupal remains a first-class part of the Emulsify ecosystem, and the clearer architecture now makes room for more integrations to follow the same pattern.

That is the future we are building toward.

EC4.x provides the foundation and extension points. Emulsify (base theme) 7.x brings that foundation into a real CMS integration. Future platforms can follow the same pattern when the time is right.

For teams that support Drupal projects, this release cycle provides a cleaner, more modern path forward. For Emulsify, it marks another step toward a design system toolset that can meet teams wherever their components need to live.
