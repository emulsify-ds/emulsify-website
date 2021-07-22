/* eslint-disable */
// This file was converted to .tsx without actually implementing typescript
// @TODO: update this file to tsx and enable eslint
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Layout } from '../components/templates/Layout'
// import SEO from '../components/base/seo/seo'

// import Card from '../components/molecules/card/card'
import { CtaGrid } from '../components/organisms/CtaGrid/CtaGrid'
import { Play } from '../img/play.inline'
import { Arrow } from '../img/arrow.inline'
import { Band } from '../components/molecules/Band/Band'
import { Callout } from '../components/molecules/Callout/Callout'
import { Features } from '../components/organisms/Features/Features'
import { Hr } from '../components/atoms/Hr/Hr'
import Signup from '../components/molecules/Signup/Signup'

// import styles from './home.module.css'

const ctas = [
  {
    linkText: 'Watch an Overview',
    linkUrl: 'https://modulesunraveled.wistia.com/medias/nnkn75an3f',
    icon: <Play />,
  },
  {
    linkText: 'View Installation Guide',
    linkUrl: 'https://docs.emulsify.info/',
    icon: <Arrow />,
  },
]

const featuresData = [
  {
    heading: 'Technology & Design Leaders',
    children: (
      <>
        <p>
          Reduce development, maintenance time, and errors by reusing components
          and via automated testing
        </p>
        <p>
          Create a consistent look and feel by reusing brand-standard colors,
          typography, and more
        </p>
      </>
    ),
  },
  {
    heading: 'Designers and Marketers',
    children: (
      <>
        <p>Document brand and design guidelines for everyone to use</p>
        <p>Make changes in one place and have them update everywhere</p>
        <p>Automate accessibility testing for an accessible user experience</p>
      </>
    ),
  },
  {
    heading: 'Developers',
    children: (
      <>
        <p>
          Automate testing to simplify prototyping and reduce development time
        </p>
        <p>
          Encourage reuse across all properties to reduce errors, development
          and maintenance efforts
        </p>
        <p>
          Maintain flexibility with support for multiple development languages
          and component customization
        </p>
      </>
    ),
  },
]

class RootIndex extends React.Component {
  render() {
    return (
      <Layout
        location={this.props.location}
        heroHeading="Emulsify is an open-source tool for creating design systems with reusable components and clear guidelines for teams."
        heroChildren={<CtaGrid ctas={ctas} />}
      >
        <Band>
          <Callout
            heading="Unify your websites and teams with a design system."
            text="Complex organizations need a design system that simplifies development, encourages consistency, reduces maintenance effort, and scales quickly and affordably — without hampering flexibility for individual developers or departments."
            image={<Img fluid={this.props.data.unify.childImageSharp.fluid} />}
          />
          <Callout
            layout="media-end"
            heading="Give your developer and designers powerful tools all in one place."
            text="Emulsify doesn’t just conveniently join your component library and style guide, but includes all of the workflow tools necessary for prototyping, testing, checking accessibility, and documenting."
            image={
              <Img fluid={this.props.data.devTools.childImageSharp.fluid} />
            }
          />
        </Band>
        <Band bgColor="primary" size="medium">
          <Features features={featuresData} />
          <Hr />
          <Signup />
        </Band>
        {/* <SEO title="Home" url={this.props.location.href} /> */}
        {/*
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
        </div> */}
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
