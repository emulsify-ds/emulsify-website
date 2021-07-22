import React from 'react'
import { Story } from '@storybook/react'

import { Band, BandProps } from '../../molecules/Band/Band'
import { Features } from './Features'

import { featuresData } from '../../data/features'

export default {
  title: 'Organisms/Features',
  component: 'Features',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    bgColor: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary', 'waves'],
      },
      defaultValue: 'primary',
    },
  },
}

type BandStoryProps = BandProps

export const features: Story<BandStoryProps> = ({ bgColor }) => (
  <Band bgColor={bgColor} size="medium">
    <Features features={featuresData} />
  </Band>
)
