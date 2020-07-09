import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/base/seo/seo'

import styles from './page.module.css'

class PageTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulPage')
    let page

    return (
      <Layout location={this.props.location} heroImage={post.heroImage}>
        <SEO title={post.title} url={this.props.location.href} />
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <div className={styles.content}>
              <div className={styles.rightContent}>
                <Img
                  alt={post.heroImage.title}
                  fluid={post.heroImage.fluid}
                />
              </div>
              <div className={styles.leftContent}>
                <h1 className={styles.pageTitle}>{post.title}</h1>
                <div
                  className="content-wrapper"
                  dangerouslySetInnerHTML={{
                    __html: post.body.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
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
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_withWebp
        }
        title
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
