import React from 'react'
import { Story } from '@storybook/react'
import Navigation from './navigation'

export default {
  title: 'Organisms/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Primary: Story = () => (
  <div
    style={{
      background: 'var(--c-blue-dark)',
      padding: '3rem 1.6rem 4rem',
      display: 'flex',
      justifyContent: 'flex-end',
    }}
  >
    <Navigation light={false} />
  </div>
)
