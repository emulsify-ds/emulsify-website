/* tslint:disable */
/* eslint-disable */
// This file was converted to .tsx without actually implementing typescript
// @TODO: update this file to tsx and enable eslint
import React, { Component, ReactNode } from 'react'
import { graphql, PageProps } from 'gatsby'
import get from 'lodash/get'

import { FullWidth } from '../components/templates/FullWidth'
import { SEO } from '../components/base/seo/seo'
import { Band } from '../components/molecules/Band/Band'
import { Video } from '../components/molecules/video/video'

class VideoEmbedTemplate extends Component<PageProps> {
  render(): ReactNode {
    const post = get(this.props, 'data.contentfulVideoEmbed')

    return (
      <FullWidth location={this.props.location}>
        <SEO title={post.title} />
        <Band>
          <Video id={post.videoId} heading={post.videoHeading} />
        </Band>
      </FullWidth>
    )
  }
}

export default VideoEmbedTemplate

export const pageQuery = graphql`
  query VideoEmbedBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    contentfulVideoEmbed(slug: { eq: $slug }) {
      title
      slug
      videoId
      videoHeading
    }
  }
`
/* eslint-enable */
/* tslint:enable */
