import React from 'react'
import { Story } from '@storybook/react'
import { Play } from '../../img/play.inline'
import { Arrow } from '../../img/arrow.inline'

import { Header } from '../organisms/site/Header/Header'
import { Hero } from '../molecules/hero/Hero'
import { CtaGrid } from '../organisms/ctaGrid/CtaGrid'

export default {
  title: 'Pages/Homepage',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    isHome: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    pageTitle: {
      control: {
        type: 'text',
      },
      defaultValue:
        'Emulsify is an open-source tool for creating design systems with reusable components and clear guidelines for teams',
    },
  },
}

type HomepageProps = { pageTitle: string; isHome: boolean }

const ctas = [
  { linkText: 'Watch an Overview', linkUrl: '#', icon: <Play /> },
  { linkText: 'View the Latest Guide', linkUrl: '#', icon: <Arrow /> },
]

export const Homepage: Story<HomepageProps> = ({ pageTitle, isHome }) => (
  <>
    <Header isHome={isHome}>
      <Hero heading={pageTitle}>
        <CtaGrid ctas={ctas} />
      </Hero>
    </Header>
  </>
)
