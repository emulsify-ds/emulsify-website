import React from 'react'
import { Story } from '@storybook/react'

import { Footer } from './Footer'

export default {
  component: 'Footer',
  title: 'Organisms/Site/Footer',
  parameters: {
    layout: 'fullscreen',
  },
}

export const footer: Story = () => <Footer />
