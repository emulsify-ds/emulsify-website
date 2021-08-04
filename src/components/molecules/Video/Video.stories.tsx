import React from 'react'
import { Story } from '@storybook/react'

import { Video, VideoProps } from './Video'

export default {
  title: 'Molecules/Video',
  component: 'Video',
  argTypes: {
    id: {
      control: {
        type: 'text',
      },
      defaultValue: 'nnkn75an3f',
    },
    heading: {
      control: {
        type: 'text',
      },
      defaultValue: 'Watch Our Emulsify Overview',
    },
  },
}

export const video: Story<VideoProps> = ({ id, heading }) => (
  <Video id={id} heading={heading} />
)
