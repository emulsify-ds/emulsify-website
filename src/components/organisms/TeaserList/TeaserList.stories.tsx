import React from 'react'
import { Story } from '@storybook/react'

import { TeaserList, TeaserListProps } from './TeaserList'

import { teasers } from '../../data/teasers'

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
