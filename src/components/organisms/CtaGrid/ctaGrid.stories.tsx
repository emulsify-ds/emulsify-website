import React from 'react'
import { Story } from '@storybook/react'

import { CtaGrid } from './CtaGrid'

import { ctas } from '../../data/ctas'

export default {
  title: 'Organisms/CtaGrid',
  component: 'CtaGrid',
}

export const ctaGrid: Story = () => <CtaGrid ctas={ctas} />
