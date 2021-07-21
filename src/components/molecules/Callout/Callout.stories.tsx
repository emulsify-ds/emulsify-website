import React from 'react'
import { Story } from '@storybook/react'

import { Callout, CalloutProps } from './Callout'

export default {
  component: 'Callout',
  title: 'Molecules/Callout',
  argTypes: {
    heading: {
      control: {
        type: 'text',
      },
      defaultValue: 'Unify your websites and teams with a design system.',
    },
    text: {
      control: {
        type: 'text',
      },
      defaultValue:
        'Complex organizations need a design system that simplifies development, encourages consistency, reduces maintenance effort, and scales quickly and affordably — without hampering flexibility for individual developers or departments.',
    },
    layout: {
      options: ['media-start', 'media-end'],
      control: {
        type: 'select',
      },
      defaultValue: 'media-start',
    },
  },
}

type CalloutStoryProps = CalloutProps

export const callout: Story<CalloutStoryProps> = ({
  heading,
  text,
  layout,
}) => (
  <Callout
    layout={layout}
    heading={heading}
    text={text}
    image={<img src="https://picsum.photos/580" alt="example image" />}
  />
)
