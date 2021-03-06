import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/base/seo/seo'
import Share from '../components/molecules/share/share.js'

import styles from '../components/pages/blog.module.css'

class CaseStudyTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulCaseStudy')
    const siteUrl = get(this.props, 'data.site.siteMetadata.siteUrl')
    const currentUrl =  `${siteUrl}${this.props.location.pathname}`

    return (
      <Layout location={this.props.location}>
        <SEO title={post.title} url={this.props.location.href} />
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <div className={styles.meta}>
              {/* <span>by:&nbsp;</span><Link to={post.author.slug}>{post.author.name}</Link> */}
            </div>
            {post.heroImage &&
              <div className={styles.caseStudyImg}>
                <Img
                  alt={post.heroImage.title}
                  fluid={post.heroImage.fluid}
                />
              </div>
            }
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
            <Share
              page_url={currentUrl}
              title={post.title}
            />
            <br />
            <Link className="button" to="/case-studies">Back to Case Studies</Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default CaseStudyTemplate

export const pageQuery = graphql`
  query CaseStudyBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    contentfulCaseStudy(slug: { eq: $slug }) {
      title
      description {
        childMarkdownRemark {
          excerpt(format: PLAIN)
        }
      }
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_withWebp
        }
        title
      }
      publishDate(formatString: "MMMM Do, YYYY")
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
