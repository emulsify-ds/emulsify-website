import React from 'react'
import { Story } from '@storybook/react'

import { FullWidth, FullWidthProps } from '../templates/FullWidth'
import { WithSidebar, WithSidebarProps } from './WithSidebar'
import { Band } from '../molecules/Band/Band'
import { navItems } from '../data/navigation'

export default {
  title: 'Templates',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    location: {
      control: {
        type: 'text',
      },
      defaultValue: '/blog/test',
    },
  },
}

export const fullWidth: Story<FullWidthProps> = ({ location }) => (
  <FullWidth logoUrl="#" location={location} navItems={navItems}>
    <Band>Content goes here, and it spans the full width of the page.</Band>
  </FullWidth>
)

export const withSidebar: Story<WithSidebarProps> = ({ location }) => (
  <WithSidebar
    logoUrl="#"
    location={location}
    navItems={navItems}
    sidebar={<Band>Sidebar content goes here.</Band>}
  >
    <Band>
      Content goes here, and it adapts based on whether there is a sidebar or
      not.
    </Band>
  </WithSidebar>
)
