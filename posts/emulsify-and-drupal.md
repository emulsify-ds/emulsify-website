# Bringing the New Emulsify Foundation to Drupal

In the last post, we looked at Emulsify Core 4 as a new foundation for the project: more modern, more flexible, and more intentionally platform agnostic.

That platform-agnostic direction matters. Emulsify is not just a Drupal theme, and Emulsify Core is not limited to Drupal projects. With Vite, Storybook, Twig, React, and platform adapters working together, Core 4 gives us a better foundation for many different kinds of component-driven projects.

But Drupal is still a major part of the Emulsify story.

Emulsify has deep roots in the Drupal community, and many teams rely on Emulsify to connect their design systems to real Drupal implementation work. The upcoming Emulsify Drupal 7 and Emulsify Tools 2 releases bring the new Core 4 foundation into that Drupal workflow.

These releases are Drupal-centric, but they are best understood as integration releases. Emulsify Core provides the broader frontend foundation. Emulsify Drupal and Emulsify Tools provide the Drupal-specific layer that helps teams use that foundation inside modern Drupal projects.

The result is a cleaner base theme, a more modern generated theme workflow, better Twig support, and a practical upgrade path for existing Emulsify teams.

## Drupal as a first-class integration

One of the most important ideas behind this release cycle is separation.

Drupal-specific behavior should exist where Drupal needs it. But it should not define the entire shape of Emulsify Core.

That is where the new Emulsify architecture becomes important. Core 4 introduces a platform model that allows Drupal behavior to live behind a Drupal adapter while generic projects stay generic. Emulsify Drupal 7 builds on that model by acting as the Drupal integration point for the new foundation.

For Drupal teams, this means the familiar Emulsify workflow is still there: component-driven development, Storybook, Twig templates, generated child themes, and practical tooling for theme work.

The difference is that those pieces now sit on top of a more modern and portable foundation.

That gives Drupal projects the benefits of Core 4 without making Drupal the default assumption for every Emulsify project.

## Built for modern Drupal

Emulsify Drupal 7 is a major release. It moves the Drupal integration stack forward for modern Drupal projects and establishes a new compatibility baseline.

This release prepares Emulsify Drupal for Drupal `^11.3 || ^12` support and removes Drupal 10 support. That is an important compatibility change, and it should be treated as part of the upgrade planning for any existing project.

It also removes the Stable9 base theme dependency.

That change is more than a dependency cleanup. Emulsify now owns its Drupal template layer directly instead of inheriting it from Stable9 at runtime. Parent-owned template coverage helps preserve Drupal core template behavior while giving Emulsify more control over the theme foundation.

For teams maintaining long-lived Drupal projects, this makes the base theme relationship clearer:

- `emulsify` is the runtime parent theme.
- `whisk` is the generation-only starter source.
- Generated child themes inherit from `emulsify`.
- Drupal-specific behavior is handled by the Drupal integration layer.

That is a cleaner model for existing teams and a better starting point for new Drupal projects.

## Generated themes now use the Core 4 foundation

Generated child themes are one of the main places where Drupal teams will feel the impact of this release.

Whisk remains part of the workflow, but its role is more specific. It is now a hidden, generation-only starter source. It should not be enabled directly. Instead, it provides the starter source used to generate a child theme, and that generated child theme uses `emulsify` as its runtime parent theme.

That keeps Whisk focused on generation and keeps Emulsify focused on runtime behavior.

Generated themes also move to Emulsify Core 4 and the new Vite-based build workflow. That means new generated themes start from the same modern foundation described in the Core 4 post.

A typical generated theme workflow still feels familiar:

```bash
drush emulsify my_theme
cd web/themes/custom/my_theme
npm install
npm run develop
```

The details behind that workflow are changing, but the goal is not to make teams relearn Emulsify. The goal is to modernize what powers the workflow while keeping the day-to-day experience approachable.

For teams that prefer Drupal core’s Starterkit command, the generated theme path can follow that route as well:

```bash
php web/core/scripts/drupal generate-theme my_theme --starterkit whisk --path themes/custom
```

Both paths are designed around the same architecture: generate from Whisk, run on Emulsify, and build with Core 4.

## A more practical upgrade path

Major releases always come with some planning. Emulsify Drupal 7 is no different.

Drupal 10 support has been removed. Drupal 11.3 or newer is required. The generated child theme frontend workflow moves from Webpack to Vite. Whisk should no longer be enabled directly. Existing child themes should be reviewed to make sure they inherit from `emulsify`.

Those are real changes, but they are also changes with a clear direction.

The upgrade is not intended to be a reset. Existing Emulsify projects should not need to throw away their component architecture or start from scratch. Core 4 continues to support existing component structures, and the Drupal integration keeps the Drupal-specific behavior where Drupal projects need it.

Generated themes also include audit tooling to help teams identify common upgrade items, including older Twig story patterns, Webpack-era assumptions, unresolved Twig references, and platform assumptions that may need review.

```bash
npm run audit
```

For teams that want to focus specifically on Twig story migration, there is also a narrower audit command:

```bash
npm run audit:twig-stories
```

That kind of tooling matters because upgrades are easier when teams can see what actually needs attention. Instead of guessing where a project may rely on older patterns, teams can review the audit output and make targeted updates.

## Emulsify Tools 2 supports the Drupal workflow

Emulsify Tools 2 is the companion release that supports this new Drupal integration.

It updates the compatibility baseline for modern Drupal projects, including Drupal 11.3, PHP 8.4, and Drush 13. It also modernizes the child theme generation command while preserving the familiar `drush emulsify` alias.

That matters for continuity. The underlying implementation is changing, but the command developers already know can remain part of the workflow.

```bash
drush emulsify my_theme
```

Emulsify Tools 2 also adds support for theme-defined Twig namespaces through `components.namespaces` in a theme’s `.info.yml` file. That gives Drupal projects a clean way to define component namespaces from the theme itself.

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

This helps Drupal templates stay readable and keeps component references aligned with the structure of the design system.

## Better Twig support where Drupal teams need it

Twig is still central to Emulsify’s Drupal workflow. Emulsify Tools 2 improves that experience with better helper support and new Twig syntax options.

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

Emulsify Tools 2 also refactors `bem()` and `add_attributes()` around a shared attribute manager. For developers, the benefit is straightforward: familiar Emulsify Twig helpers continue to work in a more consistent way.

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

These are not changes that ask teams to abandon the way they write Drupal templates. They are changes that make the existing Emulsify authoring experience more reliable and more expressive.

## A better favicon workflow

One of the most visible user-facing improvements in Emulsify Drupal 7 is the new generated favicon package workflow.

Historically, favicon handling can become a small but persistent source of inconsistency across environments. A site may have one file configured locally, another in production, and a slightly different set of generated assets depending on who set it up and when.

Emulsify Drupal 7 takes a more structured approach.

The new workflow is built around one SVG source configured in the Drupal theme settings form. From there, Emulsify can generate a favicon package that includes browser, iOS, Android, manifest, and metadata assets. The theme settings UI can store the portable SVG source and generated package metadata so the favicon package can be recreated consistently across environments.

That gives teams a clearer lifecycle:

1. Configure the favicon in theme settings.
2. Export and deploy configuration as usual.
3. Regenerate the environment-local favicon package after config import or deploy.
4. Use status tooling to confirm the package exists where it is needed.

Emulsify Tools 2 provides the deployment-oriented Drush commands for this workflow:

```bash
drush emulsify_tools:favicon-generate my_theme
drush emulsify_tools:favicon-status my_theme
drush emulsify_tools:favicon-reset my_theme
```

This separation keeps Drupal theme settings responsible for configuration and keeps Emulsify Tools responsible for deployment operations.

It also avoids generating missing favicon files during normal page requests. That is a better fit for predictable deployments: configuration describes the desired favicon package, and deployment commands make sure the package exists in each environment.

For existing projects, Emulsify Tools 2 also includes repair tooling for older child themes that may be missing the new favicon config and schema entries.

```bash
drush emulsify_tools:repair-favicon-config
```

Or, for a specific child theme:

```bash
drush emulsify_tools:repair-favicon-config my_child_theme
```

The repair process is designed to fill in missing favicon entries without overwriting existing values.

## What to know before upgrading

Because Emulsify Drupal 7 and Emulsify Tools 2 are major releases, there are a few important things to review before upgrading.

Drupal 10 support has been removed. Projects should be on Drupal 11.3 or newer before moving to Emulsify Drupal 7. Drupal 12 compatibility is included as forward compatibility, but teams should still follow Drupal’s release status and test carefully as Drupal 12 stabilizes.

Emulsify Tools 2 requires PHP 8.4 and Drush 13 or newer.

The old `drupal/components` dependency is removed from the Emulsify Drupal 7 stack. Theme-defined namespaces now come through Emulsify Tools.

Whisk should not be enabled directly. It is a starter source for generating child themes, not a runtime parent theme.

Generated child theme frontend workflows should move from Webpack terminology and assumptions to the Vite-based workflow provided by Emulsify Core 4.

Favicon generation requires the PHP extensions needed to rasterize SVG assets, including GD and Imagick. If those extensions are not available, the SVG source can still be stored in configuration, but PNG and ICO package generation will not complete until the extensions are installed.

These details are worth calling out, but they should not make the release feel out of reach. The upgrade path is designed to be practical: update the Drupal baseline, move to the new Emulsify stack, review generated child themes, run the audit tooling, and address project-specific items as needed.

## Drupal today, more integrations ahead

Emulsify Drupal 7 and Emulsify Tools 2 are important releases for Drupal teams. They modernize the build workflow, clean up the base theme architecture, improve generated child themes, add better Twig support, and introduce a more reliable favicon lifecycle.

But they also represent something bigger for Emulsify as a project.

These are the first major integration releases built around the new Emulsify Core 4 foundation. Drupal remains a first-class part of the Emulsify ecosystem, but it is now more clearly one integration of a broader platform-agnostic approach.

That is the future we are building toward.

Emulsify Core provides the foundation. Emulsify Drupal brings that foundation into Drupal. Future integrations can follow the same pattern when the time is right.

For Drupal teams, this release cycle provides a cleaner, more modern path forward. For Emulsify, it marks another step toward a design system toolset that can meet teams wherever their components need to live.