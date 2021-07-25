/* eslint-disable */
// This file was converted to .tsx without actually implementing typescript
// @TODO: update this file to tsx and enable eslint
import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import { FullWidth } from '../components/templates/FullWidth'
import { SEO } from '../components/base/seo/seo'
import ArticlePreview from '../components/molecules/teasers/article'

import styles from '../components/pages/blogs.module.css'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlog.edges')
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? 'blog/' : `blog/${(currentPage - 1).toString()}`
    const nextPage = `/blog/${(currentPage + 1).toString()}`

    return (
      <FullWidth location={this.props.location}>
        <SEO title="Blog" />
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <h1>Blog</h1>
            <ul className="list-reset">
              {posts.map(({ node }) => {
                return (
                  <ArticlePreview
                    article={node}
                    key={node.slug}
                    wrapperTag="li"
                  />
                )
              })}
            </ul>
            <div className={styles.prevNext}>
              {!isFirst && (
                <Link to={prevPage} rel="prev">
                  ← Previous Page
                </Link>
              )}
              {!isLast && (
                <Link to={nextPage} rel="next" className={styles.nextBlog}>
                  Next Page →
                </Link>
              )}
            </div>
          </div>
        </div>
      </FullWidth>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery($skip: Int!, $limit: Int!) {
    allContentfulBlog(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
/* eslint-enable */
