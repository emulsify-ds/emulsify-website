import React from 'react'
import { Story } from '@storybook/react'

import { Band, BandProps } from '../../molecules/Band/Band'
import { Features } from './Features'

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

const featuresData = [
  {
    heading: 'Technology & Design Leaders',
    children: (
      <>
        <p>
          Reduce development, maintenance time, and errors by reusing components
          and via automated testing
        </p>
        <p>
          Create a consistent look and feel by reusing brand-standard colors,
          typography, and more
        </p>
      </>
    ),
  },
  {
    heading: 'Designers and Marketers',
    children: (
      <>
        <p>Document brand and design guidelines for everyone to use</p>
        <p>Make changes in one place and have them update everywhere</p>
        <p>Automate accessibility testing for an accessible user experience</p>
      </>
    ),
  },
  {
    heading: 'Developers',
    children: (
      <>
        <p>
          Automate testing to simplify prototyping and reduce development time
        </p>
        <p>
          Encourage reuse across all properties to reduce errors, development
          and maintenance efforts
        </p>
        <p>
          Maintain flexibility with support for multiple development languages
          and component customization
        </p>
      </>
    ),
  },
]

export const features: Story<BandStoryProps> = ({ bgColor }) => (
  <Band bgColor={bgColor} size="medium">
    <Features features={featuresData} />
  </Band>
)
