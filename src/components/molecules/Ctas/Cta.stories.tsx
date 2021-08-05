import React from 'react'
import { Story } from '@storybook/react'

import { Cta, CtaProps } from './Cta/Cta'
import { ContentCta, ContentCtaProps } from './ContentCta/ContentCta'
import { Play } from '../../../img/play.inline'
import { Video } from '../../../img/video'

export default {
  title: 'Molecules/Ctas',
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

export const contentCta: Story<ContentCtaProps> = ({
  heading,
  linkText,
  to,
}) => (
  <ContentCta icon={<Video />} heading={heading} linkText={linkText} to={to} />
)
contentCta.argTypes = {
  heading: {
    control: {
      type: 'text',
    },
    defaultValue:
      'Emulsify is an open-source project that’s free for everyone.',
  },
}
