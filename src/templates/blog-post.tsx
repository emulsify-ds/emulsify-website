/* eslint-disable */
// This file was converted to .tsx without actually implementing typescript
// @TODO: update this file to tsx and enable eslint
import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import { Layout } from '../components/templates/Layout'
import { SEO } from '../components/base/seo/seo'
import Share from '../components/molecules/share/share'

import styles from '../components/pages/blog.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlog')
    const siteUrl = get(this.props, 'data.site.siteMetadata.siteUrl')
    const currentUrl = `${siteUrl}${this.props.location.pathname}`

    return (
      <Layout location={this.props.location}>
        <SEO title={post.title} />
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <div className={styles.meta}>
              {/* <span>by:&nbsp;</span><Link to={post.author.slug}>{post.author.name}</Link> */}
              <p
                style={{
                  display: 'block',
                }}
              >
                {post.publishDate}
              </p>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
            <Share page_url={currentUrl} title={post.title} />
            <br />
            <Link className="button" to="/blog">
              Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    contentfulBlog(slug: { eq: $slug }) {
      title
      description {
        childMarkdownRemark {
          excerpt(format: PLAIN)
        }
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
/* eslint-enable */
