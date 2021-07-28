import React from 'react'
import { Story } from '@storybook/react'

import { PageMeta, PageMetaProps } from './PageMeta'

export default {
  title: 'Molecules/PageMeta',
  component: 'PageMeta',
  argTypes: {
    heading: {
      control: {
        type: 'text',
      },
      defaultValue: 'Why Developers Shouldn’t Fear a No-Code Interface',
    },
    text: {
      control: {
        type: 'text',
      },
      defaultValue:
        'For those of you who manage digital projects, your world centers upon change. From deploying new versions of website platforms to navigating all manner of software updates, the fast pace of the technology industry requires (and rewards) persistent upending of the status quo.',
    },
  },
}

export const pageMeta: Story<PageMetaProps> = ({ heading, text }) => (
  <PageMeta heading={heading} text={text}>
    TEST
  </PageMeta>
)
