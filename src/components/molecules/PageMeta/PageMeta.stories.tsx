import React from 'react'
import { Story } from '@storybook/react'

import { PageMeta, PageMetaProps } from './PageMeta'
import { AuthorInfo, AuthorInfoProps } from '../AuthorInfo/AuthorInfo'

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
    withAuthorImage: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    withHeroImage: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
  },
}

type PageMetaStoryProps = PageMetaProps &
  AuthorInfoProps & {
    withAuthorImage: boolean
    withHeroImage: boolean
  }

export const pageMeta: Story<PageMetaStoryProps> = ({
  heading,
  text,
  name,
  date,
  withAuthorImage,
  withHeroImage,
}) => {
  let image = null
  let heroImage = null
  if (withAuthorImage === true) {
    image = <img src="https://picsum.photos/90" alt="example image" />
  }
  if (withHeroImage === true) {
    heroImage = <img src="https://picsum.photos/1200/720" alt="example image" />
  }
  return (
    <PageMeta heading={heading} text={text} heroImage={heroImage}>
      <AuthorInfo image={image} name={name} date={date} />
    </PageMeta>
  )
}
