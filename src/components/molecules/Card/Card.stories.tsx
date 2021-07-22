import React from 'react'
import { Story } from '@storybook/react'

import { Card, CardProps } from './Card'

export default {
  component: 'Card',
  title: 'Molecules/Card',
  argTypes: {
    heading: {
      control: {
        type: 'text',
      },
      defaultValue: 'Four Kitchens',
    },
    text: {
      control: {
        type: 'text',
      },
      defaultValue: 'Creator and Emulsify Project Maintainer',
    },
    linkUrl: {
      control: {
        type: 'text',
      },
      defaultValue: '#',
    },
  },
}

type CardStoryProps = CardProps

export const card: Story<CardStoryProps> = ({ heading, text, linkUrl }) => (
  <Card
    heading={heading}
    text={text}
    linkUrl={linkUrl}
    image={<img src="four-kitchens-logo-dark-text.png" alt="example image" />}
  />
)
