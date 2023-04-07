export const navigation = [
  {
    title: 'Starters',
    links: [
      {
        title: 'Emulsify Drupal',
        href: '/emulsify-drupal',
        children: [
          {
            title: 'Basic Usage',
            href: '/emulsify-drupal/basic-usage',
            children: [
              {
                title: 'Commands',
                href: '/emulsify-drupal/basic-usage/commands',
              },
              {
                title: 'Writing Stories',
                href: '/emulsify-drupal/basic-usage/writing-stories',
              },
            ],
          },
          {
            title: 'Advanced Usage',
            href: '/emulsify-drupal/advanced-usage',
            children: [
              {
                title: 'Accessibility Testing',
                href: '/emulsify-drupal/advanced-usage/accessibility-testing',
              },
              {
                title: 'Adding 3rd-party Libraries',
                href: '/emulsify-drupal/advanced-usage/3rd-party-libraries',
              },
              {
                title: 'Hot Reload Drupal',
                href: '/emulsify-drupal/advanced-usage/hot-reload-drupal',
              },
              {
                title: 'Lando Environments',
                href: '/emulsify-drupal/advanced-usage/lando-environments',
              },
            ],
          },
          { title: 'FAQ', href: '/emulsify-drupal/faq' },
        ],
      },
    ],
  },
  {
    title: 'Systems',
    links: [{ title: 'Compound', href: '/docs/understanding-caching' }],
  },
  {
    title: 'Supporting Projects',
    links: [
      { title: 'Emulsify CLI', href: '/docs/writing-plugins' },
      { title: 'Twig Extensions', href: '/docs/neuralink-integration' },
      { title: 'Webpack and Babel', href: '/docs/temporal-paradoxes' },
    ],
  },
  {
    title: 'Style Guide',
    links: [
      { title: 'Gatsby Theme Emulsify', href: '/docs/cacheadvance-predict' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Help and Support', href: '/docs/how-to-contribute' },
      { title: 'Component-Driven Design', href: '/docs/architecture-guide' },
      {
        title: 'Packaging for Multiple Properties',
        href: '/docs/design-principles',
      },
    ],
  },
]
