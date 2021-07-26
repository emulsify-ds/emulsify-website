import React from 'react'
import { Story } from '@storybook/react'

import { FullWidth, FullWidthProps } from '../templates/FullWidth'
import { Band } from '../molecules/Band/Band'
import { navItems } from '../data/navigation'
import { BackLink } from '../atoms/BackLink/BackLink'

export default {
  title: 'Pages/Blogs',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    pageTitle: {
      control: {
        type: 'text',
      },
      defaultValue: 'Why Developers Shouldn’t Fear a No-Code Interface',
    },
    location: {
      control: {
        type: 'text',
      },
      defaultValue: '/blog/test',
    },
  },
}

type HomepageProps = FullWidthProps & {
  pageTitle: string
}

export const IndividualBlog: Story<HomepageProps> = ({
  pageTitle,
  location,
}) => (
  <FullWidth
    logoUrl="#"
    location={location}
    navItems={navItems}
    heading={pageTitle}
  >
    <Band>
      <BackLink url="#" text="view all blog posts" />
    </Band>
  </FullWidth>
)
