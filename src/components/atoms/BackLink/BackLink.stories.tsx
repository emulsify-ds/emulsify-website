import React from 'react'
import { Story } from '@storybook/react'

import { BackLink, BackLinkProps } from './BackLink'

export default {
  component: 'BackLink',
  title: 'Atoms/BackLink',
  argTypes: {
    url: {
      control: {
        type: 'text',
      },
      defaultValue: '#',
    },
    text: {
      control: {
        type: 'text',
      },
      defaultValue: 'view all blog posts',
    },
  },
}

export const backLink: Story<BackLinkProps> = ({ url, text }) => (
  <BackLink url={url} text={text} />
)
