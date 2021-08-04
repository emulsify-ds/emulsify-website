import React from 'react'
import { Story } from '@storybook/react'

import { Cta, CtaProps } from './Cta'
import { Play } from '../../../img/play.inline'

export default {
  title: 'Molecules/Cta',
  component: 'Cta',
  argTypes: {
    linkText: {
      control: {
        type: 'text',
      },
      defaultValue: 'Watch an Overview',
    },
    to: {
      control: {
        type: 'text',
      },
      defaultValue: '#',
    },
  },
}

type CtaStoryProps = CtaProps

export const cta: Story<CtaStoryProps> = ({ linkText, to }) => (
  <Cta icon={<Play />} linkText={linkText} to={to} />
)
