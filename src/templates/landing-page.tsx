/* eslint-disable */
// This file was converted to .tsx without actually implementing typescript
// @TODO: update this file to tsx and enable eslint
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
// import Img from 'gatsby-image'

import { FullWidth } from '../components/templates/FullWidth'
import { SEO } from '../components/base/seo/seo'
import { PageMeta } from '../components/molecules/PageMeta/PageMeta'
import { Band } from '../components/molecules/Band/Band'

class PageTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulLandingPage')
    // let page

    return (
      <FullWidth location={this.props.location}>
        <SEO title={post.title} />
        <Band size="large">
          <PageMeta
            heading={post.title}
            heroImage={
              <img src={post.heroImage.file.url} alt={post.heroImage.title} />
            }
          />
          <div
            className="content-wrapper"
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
  query LandingPageBySlug($slug: String!) {
    contentfulLandingPage(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        file {
          url
        }
        title
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    logo: file(relativePath: { eq: "logo-dark.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    FourKlogo: file(relativePath: { eq: "four-kitchens-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
/* eslint-enable */
