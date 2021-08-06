import React from 'react'
import { Story } from '@storybook/react'

import { Teaser, TeaserProps } from './Teaser'

import {
  blogLabel,
  blogHeading,
  blogTeaser,
  blogHeroImage,
  blogReadMoreText,
} from '../../data/blog'

export default {
  component: 'Teaser',
  title: 'Molecules/Teaser',
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: blogLabel,
    },
    heading: {
      control: {
        type: 'text',
      },
      defaultValue: blogHeading,
    },
    text: {
      control: {
        type: 'text',
      },
      defaultValue: blogTeaser,
    },
    linkUrl: {
      control: {
        type: 'text',
      },
      defaultValue: '#',
    },
    linkText: {
      control: {
        type: 'text',
      },
      defaultValue: blogReadMoreText,
    },
    variation: {
      control: {
        type: 'select',
        options: ['grid', 'list'],
      },
      defaultValue: 'grid',
    },
  },
}

export const teaser: Story<TeaserProps> = ({
  label,
  heading,
  text,
  linkUrl,
  linkText,
  variation,
}) => (
  <Teaser
    id="1"
    variation={variation}
    label={label}
    heading={heading}
    text={text}
    linkUrl={linkUrl}
    linkText={linkText}
    image={blogHeroImage}
  />
)
