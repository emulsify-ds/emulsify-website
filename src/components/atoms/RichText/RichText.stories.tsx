import React from 'react'
import { Story } from '@storybook/react'

import { RichText } from './RichText'

import { blogText } from '../../data/blog'

export default {
  component: 'RichText',
  title: 'Atoms/RichText',
}

export const richText: Story = () => <RichText>{blogText}</RichText>
