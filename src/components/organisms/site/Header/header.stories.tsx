import React from 'react'
import { Story } from '@storybook/react'
import { Play } from '../../../../img/play.inline'
import { Arrow } from '../../../../img/arrow.inline'

import { Header } from './Header'
import { Hero } from '../../../molecules/Hero/Hero'
import { CtaGrid } from '../../CtaGrid/CtaGrid'

export default {
  component: 'Header',
  title: 'Organisms/Site/Header',
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
    heading: {
      control: {
        type: 'text',
      },
      defaultValue:
        'Emulsify is an open-source tool for creating design systems with reusable components and clear guidelines for teams',
    },
  },
}

const ctas = [
  { linkText: 'Watch an Overview', linkUrl: '#', icon: <Play /> },
  { linkText: 'View the Latest Guide', linkUrl: '#', icon: <Arrow /> },
]

type HeaderStoryProps = {
  isHome: boolean
  heading: string
}

export const header: Story<HeaderStoryProps> = ({ isHome, heading }) => (
  <Header isHome={isHome}>
    <Hero heading={heading}>
      <CtaGrid ctas={ctas} />
    </Hero>
  </Header>
)
