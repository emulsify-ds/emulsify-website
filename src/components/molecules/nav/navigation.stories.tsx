import React from 'react'
import { Story } from '@storybook/react'
import Navigation, { NavProps } from './navigation'

export default {
  title: 'Organisms/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    isHome: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
}

export const Primary: Story<NavProps> = ({ isHome }) => (
  <div
    style={{
      background: 'var(--c-blue-dark)',
      padding: '3rem 1.6rem 4rem',
      display: 'flex',
      justifyContent: 'flex-end',
    }}
  >
    <Navigation isHome={isHome} />
  </div>
)
