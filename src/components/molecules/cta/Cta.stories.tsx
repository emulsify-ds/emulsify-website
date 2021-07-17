import React from 'react'
import { Story } from '@storybook/react'

import { Cta, CtaProps } from './Cta'
import { Play } from '../../../img/play.inline'

export default {
  title: 'Molecule/Cta',
  component: 'Cta',
  argTypes: {
    linkText: {
      control: {
        type: 'text',
      },
      defaultValue: 'Watch an Overview',
    },
    linkUrl: {
      control: {
        type: 'text',
      },
      defaultValue: '#',
    },
  },
}

type CtaStoryProps = CtaProps

export const cta: Story<CtaStoryProps> = ({ linkText, linkUrl }) => (
  <Cta icon={<Play />} linkText={linkText} linkUrl={linkUrl} />
)
