import React from 'react'
import { Story } from '@storybook/react'

import { AuthorInfo, AuthorInfoProps } from './AuthorInfo'

export default {
  title: 'Molecules/AuthorInfo',
  component: 'AuthorInfo',
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
      defaultValue: 'Who Deany',
    },
    date: {
      control: {
        type: 'text',
      },
      defaultValue: 'January 27, 2021',
    },
    withImage: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
  },
}

type AuthorInfoStoryProps = AuthorInfoProps & { withImage: boolean }

export const authorInfo: Story<AuthorInfoStoryProps> = ({
  name,
  date,
  withImage,
}) => {
  let image = ''
  if (withImage === true) {
    image = <img src="https://picsum.photos/90" alt="example image" />
  }
  return <AuthorInfo image={image} name={name} date={date} />
}
