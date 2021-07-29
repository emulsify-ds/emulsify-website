import React from 'react'
import { Story } from '@storybook/react'

import { WithSidebar, WithSidebarProps } from '../templates/WithSidebar'
import { navItems } from '../data/navigation'
import { BackLink } from '../atoms/BackLink/BackLink'
import Signup from '../molecules/Signup/Signup'

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

type HomepageProps = WithSidebarProps & {
  pageTitle: string
}

export const IndividualBlog: Story<HomepageProps> = ({
  pageTitle,
  location,
}) => (
  <WithSidebar
    location={location}
    navItems={navItems}
    heading={pageTitle}
    sidebar={<Signup />}
  >
    <BackLink url="#" text="view all blog posts" />
  </WithSidebar>
)
