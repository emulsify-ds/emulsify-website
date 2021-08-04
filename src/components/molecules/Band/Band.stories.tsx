import React from 'react'
import { Story } from '@storybook/react'

import { Band, BandProps } from './Band'

export default {
  component: 'Band',
  title: 'Molecules/Band',
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
    testContent: {
      control: {
        type: 'text',
      },
      defaultValue:
        'This is some text to demonstrate how it changes color based on the background color',
    },
  },
}

type BandStoryProps = BandProps & {
  testContent: string
}

export const band: Story<BandStoryProps> = ({ bgColor, testContent }) => (
  <Band bgColor={bgColor}>{testContent}</Band>
)
