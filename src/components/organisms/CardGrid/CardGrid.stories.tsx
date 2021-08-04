import React from 'react'
import { Story } from '@storybook/react'

import { CardGrid } from './CardGrid'

import { cards } from '../../data/cards'

export default {
  component: 'CardGrid',
  title: 'Organisms/CardGrid',
}

export const card: Story = () => <CardGrid cards={cards} />
