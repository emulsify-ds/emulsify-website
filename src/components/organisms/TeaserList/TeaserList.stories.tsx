import React from 'react'
import { Story } from '@storybook/react'

import { TeaserList, TeaserListProps } from './TeaserList'

import {
  blogLabel,
  blogHeading,
  blogTeaser,
  blogHeroImage,
  blogReadMoreText,
} from '../../data/blog'

const teasers = [
  {
    label: blogLabel,
    heading: blogHeading,
    text: blogTeaser,
    linkUrl: '#',
    linkText: blogReadMoreText,
    image: blogHeroImage,
  },
  {
    label: blogLabel,
    heading: blogHeading,
    text: blogTeaser,
    linkUrl: '#',
    linkText: blogReadMoreText,
    image: blogHeroImage,
  },
  {
    label: blogLabel,
    heading: blogHeading,
    text: blogTeaser,
    linkUrl: '#',
    linkText: blogReadMoreText,
    image: blogHeroImage,
  },
]

export default {
  title: 'Organisms/TeaserList',
  component: 'TeaserList',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    heading: {
      control: {
        type: 'text',
      },
      defaultValue: 'Blogs',
    },
  },
}

export const teaserList: Story<TeaserListProps> = ({ heading }) => (
  <TeaserList heading={heading} teasers={teasers} />
)
