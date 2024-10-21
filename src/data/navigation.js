export const navigation = [
  {
    title: 'Base Theme',
    links: [
      {
        title: 'Emulsify (Drupal)',
        href: '/docs/emulsify-drupal',
        children: [
          {
            title: 'Upgrading Emulsify Drupal',
            href: '/docs/emulsify-drupal/faq/upgrading',
          },
          {
            title: 'FAQ',
            href: '/docs/emulsify-drupal/faq',
          },
        ],
      },
    ],
  },
  {
    title: 'Starters',
    links: [
      {
        title: 'Emulsify Starter',
        href: '/docs/emulsify-starter',
      },
      {
        title: 'Emulsify Drupal Starter',
        href: '/docs/emulsify-drupal-starter',
      },
    ],
  },
  {
    title: 'Systems',
    links: [
      {
        title: 'Emulsify UI Kit',
        href: '/docs/systems/ui-kit',
        children: [
          {
            title: 'Connecting Figma to a Github repository',
            href: '/docs/systems/ui-kit/connecting-figma-to-github',
          },
        ],
      },
      { title: 'Compound', href: '/docs/systems/compound' },
    ],
  },
  {
    title: 'Supporting Projects',
    links: [
      {
        title: 'Emulsify Core',
        href: '/docs/supporting-projects/emulsify-core',
        children: [
          {
            title: 'Basic Usage',
            href: '/docs/supporting-projects/emulsify-core/basic-usage',
            children: [
              {
                title: 'Writing Stories',
                href: '/docs/supporting-projects/emulsify-core/basic-usage/writing-stories',
              },
            ],
          },
          {
            title: 'Advanced Usage',
            href: '/docs/supporting-projects/emulsify-core/advanced-usage',
            children: [
              {
                title: 'Accessibility Testing',
                href: '/docs/supporting-projects/emulsify-core/advanced-usage/accessibility-testing',
              },
              {
                title: 'Adding 3rd-party Libraries',
                href: '/docs/supporting-projects/emulsify-core/advanced-usage/3rd-party-libraries',
              },
              {
                title: 'Hot Reload Drupal',
                href: '/docs/supporting-projects/emulsify-core/advanced-usage/hot-reload-drupal',
              },
              {
                title: 'Lando Environments',
                href: '/docs/supporting-projects/emulsify-core/advanced-usage/lando-environments',
              },
            ],
          },          
        ],
      },
      {
        title: 'Emulsify CLI',
        href: '/docs/supporting-projects/emulsify-cli',
        children: [
          {
            title: 'Emulsify CLI Usage',
            href: '/docs/supporting-projects/emulsify-cli/emulsify-cli-usage',
          },
          {
            title: 'Defining a Custom System',
            href: '/docs/supporting-projects/emulsify-cli/defining-a-custom-system',
          },
        ],
      },
      {
        title: 'Twig Extensions',
        href: '/docs/supporting-projects/twig-extensions',
        children: [
          {
            title: 'Add a Custom Twig Extension',
            href: '/docs/supporting-projects/twig-extensions/add-a-custom-twig-extension',
          },
        ],
      },
      {
        title: 'Webpack and Babel',
        href: '/docs/supporting-projects/webpack-and-build',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        title: 'Help and Support',
        href: '/docs/resources/help-and-support',
        children: [
          {
            title: 'FAQ',
            href: '/docs/resources/help-and-support/faq',
          },
          {
            title: 'Tutorials and Videos',
            href: '/docs/resources/help-and-support/tutorials-videos',
          },
        ],
      },
      { title: 'Component-Driven Design', href: '/docs/resources/cdd' },
      {
        title: 'Packaging for Multiple Properties',
        href: '/docs/resources/packaging-for-multiple-properties',
      },
    ],
  },
]
