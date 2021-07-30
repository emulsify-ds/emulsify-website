/* tslint:disable */
/* eslint-disable */
// This file was converted to .tsx without actually implementing typescript
// @TODO: update this file to tsx and enable eslint/tslint
import React, { ReactNode } from 'react'
import { graphql, PageProps } from 'gatsby'
// import Img from 'gatsby-image'
import get from 'lodash/get'

import { WithSidebar } from '../components/templates/WithSidebar'
import { SEO } from '../components/base/seo/seo'
// import Share from '../components/molecules/share/share'
import { Signup } from '../components/molecules/Signup/Signup'
import { BackLink } from '../components/atoms/BackLink/BackLink'
import { PageMeta } from '../components/molecules/PageMeta/PageMeta'
import { AuthorInfo } from '../components/molecules/AuthorInfo/AuthorInfo'

class BlogPostTemplate extends React.Component<PageProps> {
  render(): ReactNode {
    const post = get(this.props, 'data.contentfulBlog')
    // const siteUrl = get(this.props, 'data.site.siteMetadata.siteUrl')
    // const currentUrl = `${siteUrl}${this.props.location.pathname}`
    const pageMetaText = (
      <div
        dangerouslySetInnerHTML={{
          __html: post.description.childMarkdownRemark.html,
        }}
      />
    )

    return (
      <WithSidebar location={this.props.location} sidebar={<Signup />}>
        <SEO title={post.title} />
        <BackLink url="/blog" text="view all blog posts" />
        <PageMeta heading={post.title} text={pageMetaText}>
          <AuthorInfo
            image={
              <img src={post.author.photo.file.url} alt={post.author.name} />
            }
            name={post.author.name}
            date={post.publishDate}
          />
        </PageMeta>
        <div
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html,
          }}
        />
        {/* <div style={{ background: '#fff' }}>
        <div className="wrapper"> */
        /* <div className={styles.meta}> */}
        {/* <span>by:&nbsp;</span><Link to={post.author.slug}>{post.author.name}</Link> */}
        {/* <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
          </div>

          <Share page_url={currentUrl} title={post.title} />
          <br />
          <Link className="button" to="/blog">
            Back to Blog
          </Link>
        </div>
      </div> */}
      </WithSidebar>
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
      author {
        name
        photo {
          file {
            url
          }
        }
      }
      description {
        childMarkdownRemark {
          html
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
/* tslint:enable */
