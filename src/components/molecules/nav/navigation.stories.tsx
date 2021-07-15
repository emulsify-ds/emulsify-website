import React from 'react'
import { Story } from '@storybook/react'
import Navigation from './navigation'

export default {
  title: 'Organization/Navigation',
  component: Navigation,
}

export const Primary: Story = () => (
  <div style={{ background: 'var(--c-blue-dark)' }}>
    <Navigation light={false} />
  </div>
)
