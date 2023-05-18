export const navigation = [
  {
    title: 'Starters',
    links: [
      {
        title: 'Emulsify Drupal',
        href: '/docs/emulsify-drupal',
        children: [
          {
            title: 'Basic Usage',
            href: '/docs/emulsify-drupal/basic-usage',
            children: [
              {
                title: 'Commands',
                href: '/docs/emulsify-drupal/basic-usage/commands',
              },
              {
                title: 'Writing Stories',
                href: '/docs/emulsify-drupal/basic-usage/writing-stories',
              },
            ],
          },
          {
            title: 'Advanced Usage',
            href: '/docs/emulsify-drupal/advanced-usage',
            children: [
              {
                title: 'Accessibility Testing',
                href: '/docs/emulsify-drupal/advanced-usage/accessibility-testing',
              },
              {
                title: 'Adding 3rd-party Libraries',
                href: '/docs/emulsify-drupal/advanced-usage/3rd-party-libraries',
              },
              {
                title: 'Hot Reload Drupal',
                href: '/docs/emulsify-drupal/advanced-usage/hot-reload-drupal',
              },
              {
                title: 'Lando Environments',
                href: '/docs/emulsify-drupal/advanced-usage/lando-environments',
              },
            ],
          },
          {
            title: 'FAQ',
            href: '/docs/emulsify-drupal/faq',
            children: [
              {
                title: 'Upgrading',
                href: '/docs/emulsify-drupal/faq/upgrading',
              },
            ],
          },
          {
            title: 'Tutorials and Videos',
            href: '/docs/emulsify-drupal/faq/upgrading',
          },
        ],
      },
    ],
  },
  {
    title: 'Systems',
    links: [{ title: 'Compound', href: '/docs/systems/compound' }],
  },
  {
    title: 'Supporting Projects',
    links: [
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
