import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import SEO from '../components/base/seo/seo'
import CaseStudyPreview from '../components/molecules/teasers/case-study'

import styles from '../components/pages/blogs.module.css'

class CaseStudyIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulCaseStudy.edges')
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "case-studies/" : `case-studies/${(currentPage - 1).toString()}`
    const nextPage = `/case-studies/${(currentPage + 1).toString()}`

    return (
      <Layout location={this.props.location}>
        <SEO title="Case Studies" url={this.props.location.href} />
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <h1>Case Studies</h1>
            <ul className="list-reset">
              {posts.map(({ node }) => {
                return (
                  <CaseStudyPreview article={node} key={node.slug} wrapperTag="li" />
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
      </Layout>
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
