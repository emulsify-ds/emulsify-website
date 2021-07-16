import React from 'react'
import { Story } from '@storybook/react'

import { Banner } from './banner'

export default {
  title: 'Molecule/Banner',
  component: 'Banner',
}

export const banner: Story = () => (
  <Banner>
    Not sure where to start? Four Kitchens can help you{' '}
    <a href="http://fourkitchens.com">build design systems with Emulsify</a>.
  </Banner>
)
