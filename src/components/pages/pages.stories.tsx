import React from 'react'
import { Story } from '@storybook/react'
import { Play } from '../../img/play.inline'
import { Arrow } from '../../img/arrow.inline'

import { Layout } from '../templates/Layout'
import { CtaGrid } from '../organisms/ctaGrid/CtaGrid'

export default {
  title: 'Pages/Homepage',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    pageTitle: {
      control: {
        type: 'text',
      },
      defaultValue:
        'Emulsify is an open-source tool for creating design systems with reusable components and clear guidelines for teams',
    },
    location: {
      control: {
        type: 'text',
      },
      defaultValue: '/',
    },
  },
}

type HomepageProps = { pageTitle: string; location: Location }

const ctas = [
  { linkText: 'Watch an Overview', linkUrl: '#', icon: <Play /> },
  { linkText: 'View the Latest Guide', linkUrl: '#', icon: <Arrow /> },
]

export const Homepage: Story<HomepageProps> = ({ pageTitle, location }) => (
  <Layout
    location={location}
    heroHeading={pageTitle}
    heroChildren={<CtaGrid ctas={ctas} />}
  />
)
