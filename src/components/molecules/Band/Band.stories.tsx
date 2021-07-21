import React from 'react'
import { Story } from '@storybook/react'

import { Band, BandProps } from './Band'

export default {
  component: 'Band',
  title: 'Molecules/Band',
  argTypes: {
    bgColor: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary'],
      },
      defaultValue: 'primary',
    },
  },
}

type BandStoryProps = BandProps

export const band: Story<BandStoryProps> = ({ bgColor }) => (
  <Band bgColor={bgColor} />
)
