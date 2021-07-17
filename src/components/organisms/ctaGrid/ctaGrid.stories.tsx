import React from 'react'
import { Story } from '@storybook/react'
import { Play } from '../../../img/play.inline'
import { Arrow } from '../../../img/arrow.inline'

import { CtaGrid } from './CtaGrid'

export default {
  title: 'Organisms/CtaGrid',
  component: 'CtaGrid',
}

const ctas = [
  { linkText: 'Watch an Overview', linkUrl: '#', icon: <Play /> },
  { linkText: 'View the Latest Guide', linkUrl: '#', icon: <Arrow /> },
]

export const ctaGrid: Story = () => <CtaGrid ctas={ctas} />
