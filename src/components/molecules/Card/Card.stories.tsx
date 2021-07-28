import React from 'react'
import { Story } from '@storybook/react'

import { Card, CardProps } from './Card'

import { cards } from '../../data/cards'

export default {
  component: 'Card',
  title: 'Molecules/Card',
  argTypes: {
    heading: {
      control: {
        type: 'text',
      },
      defaultValue: cards[0].heading,
    },
    text: {
      control: {
        type: 'text',
      },
      defaultValue: cards[0].text,
    },
    linkUrl: {
      control: {
        type: 'text',
      },
      defaultValue: cards[0].linkUrl,
    },
  },
}

type CardStoryProps = CardProps

export const basic: Story<CardStoryProps> = ({ heading, text, linkUrl }) => (
  <Card
    heading={heading}
    text={text}
    linkUrl={linkUrl}
    image={<img src="four-kitchens-logo-dark-text.png" alt="example image" />}
  />
)
