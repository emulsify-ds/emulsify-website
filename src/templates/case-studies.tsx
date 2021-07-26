/* eslint-disable */
// This file was converted to .tsx without actually implementing typescript
// @TODO: update this file to tsx and enable eslint
import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import { FullWidth } from '../components/templates/FullWidth'
import { SEO } from '../components/base/seo/seo'
import CaseStudyPreview from '../components/molecules/teasers/case-study'

class CaseStudyIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulCaseStudy.edges')
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1
        ? 'case-studies/'
        : `case-studies/${(currentPage - 1).toString()}`
    const nextPage = `/case-studies/${(currentPage + 1).toString()}`

    return (
      <FullWidth location={this.props.location}>
        <SEO title="Case Studies" />
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <h1>Case Studies</h1>
            <ul className="list-reset">
              {posts.map(({ node }) => {
                return (
                  <CaseStudyPreview
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

export default CaseStudyIndex

export const pageQuery = graphql`
  query CaseStudyIndexQuery($skip: Int!, $limit: Int!) {
    allContentfulCaseStudy(
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
