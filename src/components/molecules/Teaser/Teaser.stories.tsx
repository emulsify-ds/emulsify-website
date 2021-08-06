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
  },
}

export const basic: Story<TeaserProps> = ({
  label,
  heading,
  text,
  linkUrl,
  linkText,
}) => (
  <Teaser
    label={label}
    heading={heading}
    text={text}
    linkUrl={linkUrl}
    linkText={linkText}
    image={blogHeroImage}
  />
)
