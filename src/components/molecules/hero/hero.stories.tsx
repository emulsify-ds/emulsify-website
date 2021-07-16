import React from 'react'
import { Story } from '@storybook/react'

import { Hero, HeroProps } from './Hero'

export default {
  title: 'Molecule/Hero',
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

export const hero: Story<HeroStoryProps> = ({ heading }) => (
  <div style={{ background: 'var(--c-blue-dark)' }}>
    <Hero heading={heading} />
  </div>
)
