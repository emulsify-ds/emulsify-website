/* eslint-disable */
// This file was converted to .tsx without actually implementing typescript
// @TODO: update this file to tsx and enable eslint
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/base/seo/seo'

import Card from '../components/molecules/card/card'
import Features from '../components/organisms/features/features'
import Signup from '../components/organisms/signup/signup'

import styles from './home.module.css'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Home" url={this.props.location.href} />
        <div style={{ background: '#fff' }}>
          <div className="wrapper wrapper-home">
            <Card
              imageFluid={this.props.data.unify.childImageSharp.fluid}
              title="Unify your websites and teams with a design system"
              text="Complex organizations need a design system that simplifies development, encourages consistency, reduces maintenance effort, and scales quickly and affordably — without hampering flexibility for individual developers or departments."
            />
            <Card
              imageFluid={this.props.data.devTools.childImageSharp.fluid}
              title="Give your developer and designers powerful tools all in one place"
              text="Emulsify doesn’t just conveniently join your component library and style guide, but includes all of the workflow tools necessary for prototyping, testing, checking accessibility, and documenting."
            />
          </div>
        </div>
        <Features />
        <Signup />
        <div className={styles.os}>
          <div className="wrapper">
            <Card
              imageFluid={this.props.data.connector.childImageSharp.fluid}
              specialTitle="Emulsify is"
              specialSubTitle="Open Source"
              text="Emulsify is an open source project that’s free for everyone. Check out the project on GitHub and visit our support page for help."
            />
          </div>
        </div>
        <div className={styles.demo}>
          <Card
            imageClass="demoImage"
            imageFluid={this.props.data.westernu.childImageSharp.fluid}
            title="Explore the Demo"
            text="Western University of Pennsylvania is a fictional university to show how Emulsify can be used to manage the design system for a school and all of its departments."
            linkUrl="/demo"
            buttonText="University Demo"
          />
        </div>
        <div className={styles.tech}>
          <div className="wrapper">
            <h2 className={styles.techHeading}>
              Built Using Well-supported Technologies Developers Love
            </h2>
            <div className={styles.techItems}>
              <div className={styles.techItem}>
                <Img
                  className={styles.techItemImage}
                  fluid={this.props.data.storybook.childImageSharp.fluid}
                />
                <p>Develop UI components with support for React and Twig</p>
              </div>
              <div className={styles.techItem}>
                <Img
                  className={styles.techItemImage}
                  fluid={this.props.data.gatsby.childImageSharp.fluid}
                />
                <p>
                  Deploy your style guide documentation as a blazing fast static
                  site
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const query = graphql`
  query HomePageQuery {
    unify: file(relativePath: { eq: "unify.png" }) {
      childImageSharp {
        fluid(maxWidth: 580) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    devTools: file(relativePath: { eq: "devTools.png" }) {
      childImageSharp {
        fluid(maxWidth: 580) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    connector: file(relativePath: { eq: "connector.png" }) {
      childImageSharp {
        fluid(maxWidth: 580) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    westernu: file(relativePath: { eq: "western-u.png" }) {
      childImageSharp {
        fluid(maxWidth: 580) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    storybook: file(relativePath: { eq: "storybook.png" }) {
      childImageSharp {
        fluid(maxWidth: 580) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gatsby: file(relativePath: { eq: "gatsby.png" }) {
      childImageSharp {
        fluid(maxWidth: 580) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
/* eslint-enable */
