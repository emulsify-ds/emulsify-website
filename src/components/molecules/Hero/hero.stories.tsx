import React from 'react'
import { Story } from '@storybook/react'
import { Play } from '../../../img/play.inline'
import { Arrow } from '../../../img/arrow.inline'

import { Hero, HeroProps } from './Hero'
import { CtaGrid } from '../../organisms/CtaGrid/CtaGrid'

export default {
  title: 'Molecules/Hero',
  component: 'Hero',
  argTypes: {
    heading: {
      control: {
        type: 'text',
      },
      defaultValue:
        'Emulsify is an open-source tool for creating design systems with reusable components and clear guidelines for teams',
    },
  },
}

type HeroStoryProps = HeroProps

const ctas = [
  { linkText: 'Watch an Overview', linkUrl: '#', icon: <Play /> },
  { linkText: 'View the Latest Guide', linkUrl: '#', icon: <Arrow /> },
]

export const hero: Story<HeroStoryProps> = ({ heading }) => (
  <div style={{ background: 'var(--c-blue-dark)' }}>
    <Hero heading={heading}>
      <CtaGrid ctas={ctas} />
    </Hero>
  </div>
)
