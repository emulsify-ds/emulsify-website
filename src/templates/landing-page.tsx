/* eslint-disable */
// This file was converted to .tsx without actually implementing typescript
// @TODO: update this file to tsx and enable eslint
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'

import { Layout } from '../components/templates/Layout'
import { SEO } from '../components/base/seo/seo'

import { Cta } from '../components/molecules/Cta/Cta'

import Arrow from '../img/arrow.inline.svg'

import styles from './page.module.css'

class PageTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulLandingPage')
    let page

    return (
      <Layout location={this.props.location} heroImage={post.heroImage}>
        <SEO title={post.title} />
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <div className={styles.content}>
              {post.heroImage && (
                <div className={styles.rightContent}>
                  <Img
                    alt={post.heroImage.title}
                    fluid={post.heroImage.fluid}
                  />
                </div>
              )}
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
        <div className={styles.ctaWrapper}>
          <Cta
            title="Benefits of the"
            image={this.props.data.logo.childImageSharp.fluid}
          >
            <p>
              The new Emulsify Design System contains the following tools that
              help higher education institutions develop a consistent and
              easy-to-maintain online presence:
            </p>
            <ul>
              <li>
                <strong>Prototyping tools</strong> to quickly build/iterate new
                user interfaces leveraging Storybook
              </li>
              <li>
                <strong>Starterkit themes for Drupal, Wordpress, React</strong>{' '}
                and more to quickly bring prototypes to life as projects
              </li>
              <li>
                <strong>Fully customizable style guide</strong> leveraging
                Gatsby to unify all teams around your organization’s new design
                system
              </li>
              <li>
                <strong>Tools and best practices</strong> to connect
                organization and property projects together to reuse components
                and best practices, saving time and money.
              </li>
            </ul>
          </Cta>
          <Cta
            bg
            title="Need help creating a design system for your university website?"
            image={this.props.data.FourKlogo.childImageSharp.fluid}
          >
            <p>
              Four Kitchens, creators of Emulsify, creates digital experiences
              that delight, scale, and deliver measurable results. If you need a
              design system for your university or educational organization, the
              Web Chefs have you covered.
            </p>
            <a className="button" href="https://fourkitchens.com">
              Get in Touch
              <Arrow className="button-icon" />
            </a>
          </Cta>
        </div>
      </Layout>
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
