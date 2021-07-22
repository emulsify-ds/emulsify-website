import React from 'react'
import { Story } from '@storybook/react'

import { Band } from '../../molecules/Band/Band'
import { Hero, HeroProps } from './Hero'
import { CtaGrid } from '../../organisms/CtaGrid/CtaGrid'

import { ctas } from '../../data/ctas'

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

export const hero: Story<HeroStoryProps> = ({ heading }) => (
  <Band bgColor="primary" size="large">
    <Hero heading={heading}>
      <CtaGrid ctas={ctas} />
    </Hero>
  </Band>
)
