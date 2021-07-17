import React from 'react'
import { Story } from '@storybook/react'
import { Play } from '../../img/play.inline'
import { Arrow } from '../../img/arrow.inline'

import Navigation from '../molecules/nav/navigation'
import { Hero } from '../molecules/hero/Hero'
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
  },
}

type HomepageProps = { pageTitle: string }

const ctas = [
  { linkText: 'Watch an Overview', linkUrl: '#', icon: <Play /> },
  { linkText: 'View the Latest Guide', linkUrl: '#', icon: <Arrow /> },
]

export const Homepage: Story<HomepageProps> = ({ pageTitle }) => (
  <>
    <div style={{ background: 'var(--c-blue-dark)' }}>
      <Navigation light={true} />
      <Hero heading={pageTitle}>
        <CtaGrid ctas={ctas} />
      </Hero>
    </div>
  </>
)
