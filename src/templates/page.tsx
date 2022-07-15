/* eslint-disable */
// This file was converted to .tsx without actually implementing typescript
// @TODO: update this file to tsx and enable eslint
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
// import Img from 'gatsby-image'

import { FullWidth } from '../components/templates/FullWidth'
import { SEO } from '../components/base/seo/seo'
import { Band } from '../components/molecules/Band/Band'
import { PageMeta } from '../components/molecules/PageMeta/PageMeta'

class PageTemplate extends React.Component {
  render() {
    const post = get(this, 'props.data.contentfulPage')

    return (
      <FullWidth location={this.props.location} heading={post.title}>
        <SEO title={post.title} />
        <Band>
          <PageMeta
            heading={post.title}
            heroImage={
              post.heroImage?.file.url && (
                <img src={post.heroImage.file.url} alt={post.heroImage.title} />
              )
            }
          />
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </Band>
      </FullWidth>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        title
        file {
          url
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
/* eslint-enable */
