import React from 'react'
import { Story } from '@storybook/react'

import { Hero } from './Hero'

export default {
  title: 'Molecule/Hero',
  component: 'Hero',
}

export const hero: Story = () => (
  <Hero heading="This is a test of the hero heading" />
)
