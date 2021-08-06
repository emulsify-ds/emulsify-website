/* eslint-disable */
// This file was converted to .tsx without actually implementing typescript
// @TODO: update this file to tsx and enable eslint
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import { FullWidth } from '../components/templates/FullWidth'
import { SEO } from '../components/base/seo/seo'
import { Band } from '../components/molecules/Band/Band'
import { TeaserList } from '../components/organisms/TeaserList/TeaserList'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlog.edges')
    // const { currentPage, numPages } = this.props.pageContext
    // const isFirst = currentPage === 1
    // const isLast = currentPage === numPages
    // const prevPage =
    //   currentPage - 1 === 1 ? 'blog/' : `blog/${(currentPage - 1).toString()}`
    // const nextPage = `/blog/${(currentPage + 1).toString()}`
    // Create a new object from the post data to fit what the Teaser component expects
    const blogs = posts.map((post) => ({
      label: 'From the Blog',
      heading: post.node.title,
      text: post.node.description.childMarkdownRemark.html,
      linkUrl: `${post.node.sys.contentType.sys.id}/${post.node.slug}`,
      linkText: post.node.moreLinkText,
      image: (
        <img
          src={post.node.heroImage.file.url}
          alt={post.node.heroImage.title}
        />
      ),
    }))

    return (
      <FullWidth location={this.props.location}>
        <SEO title="Blog" />
        <Band size="medium">
          <TeaserList heading="Recent Blogs" teasers={blogs} />
        </Band>
        {/* <div className={styles.prevNext}>
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
            </div> */}
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
          heroImage {
            id
            file {
              url
            }
          }
          moreLinkText
          sys {
            contentType {
              sys {
                id
              }
            }
          }
        }
      }
    }
  }
`
/* eslint-enable */
