import React from 'react'
import { Story } from '@storybook/react'

import { FullWidth, FullWidthProps } from '../templates/FullWidth'
import { WithSidebar, WithSidebarProps } from '../templates/WithSidebar'
import { navItems } from '../data/navigation'
import { BackLink } from '../atoms/BackLink/BackLink'
import { PageMeta, PageMetaProps } from '../molecules/PageMeta/PageMeta'
import { AuthorInfo, AuthorInfoProps } from '../molecules/AuthorInfo/AuthorInfo'
import { Signup } from '../molecules/Signup/Signup'
import { RichText } from '../atoms/RichText/RichText'
import { ContentCta } from '../molecules/Ctas/ContentCta/ContentCta'
import { TeaserList, TeaserListProps } from '../organisms/TeaserList/TeaserList'
import { Band } from '../molecules/Band/Band'

import { Video } from '../../img/video'

import { blogHeading, blogTeaser, blogHeroImage, blogText } from '../data/blog'
import { ActonForm } from '../data/actonForm'
import { teasers } from '../data/teasers'

export default {
  title: 'Pages/Blogs',
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
    pageTitle: {
      control: {
        type: 'text',
      },
      defaultValue: blogHeading,
    },
    pageSubtitle: {
      control: {
        type: 'text',
      },
      defaultValue: blogTeaser,
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
    contentCtaHeading: {
      control: {
        type: 'text',
      },
      defaultValue:
        "Emulsify is an open-source project that's free for everyone.",
    },
    contentCtaLinkText: {
      control: {
        type: 'text',
      },
      defaultValue: 'Watch an Overview',
    },
  },
}

type BlogPostProps = WithSidebarProps &
  PageMetaProps &
  AuthorInfoProps & {
    pageTitle: string
    pageSubtitle: string
    withAuthorImage: boolean
    withHeroImage: boolean
    contentCtaHeading: string
    contentCtaLinkText: string
  }

type BlogListProps = FullWidthProps &
  TeaserListProps & {
    pageTitle: string
  }

export const IndividualBlog: Story<BlogPostProps> = ({
  pageTitle,
  pageSubtitle,
  location,
  withAuthorImage,
  withHeroImage,
  name,
  date,
  contentCtaHeading,
  contentCtaLinkText,
}) => {
  let image = null
  let heroImage = null
  if (withAuthorImage === true) {
    image = <img src="https://picsum.photos/90" alt="example image" />
  }
  if (withHeroImage === true) {
    heroImage = blogHeroImage
  }
  return (
    <WithSidebar
      location={location}
      navItems={navItems}
      sidebar={
        <Signup variation="sidebar">
          <ActonForm />
        </Signup>
      }
    >
      <BackLink url="#" text="view all blog posts" />
      <PageMeta heading={pageTitle} text={pageSubtitle} heroImage={heroImage}>
        <AuthorInfo image={image} name={name} date={date} />
      </PageMeta>
      <RichText>{blogText}</RichText>
      <ContentCta
        heading={contentCtaHeading}
        linkText={contentCtaLinkText}
        to="#"
        icon={<Video />}
      />
    </WithSidebar>
  )
}

export const BlogListingPage: Story<BlogListProps> = ({ location }) => (
  <FullWidth location={location} navItems={navItems}>
    <Band size="medium">
      <TeaserList heading="Recent Blogs" teasers={teasers} />
    </Band>
  </FullWidth>
)
