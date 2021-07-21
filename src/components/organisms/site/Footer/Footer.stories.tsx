import React from 'react'
import { Story } from '@storybook/react'

import { Footer } from './Footer'

export default {
  component: 'Footer',
  title: 'Organisms/Site/Footer',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    // isHome: {
    //   control: {
    //     type: 'boolean',
    //   },
    //   defaultValue: false,
    // },
    // heading: {
    //   control: {
    //     type: 'text',
    //   },
    //   defaultValue:
    //     'Emulsify is an open-source tool for creating design systems with reusable components and clear guidelines for teams',
    // },
  },
}

export const footer: Story = () => <Footer />
