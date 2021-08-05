/* eslint-disable */
// This file was converted to .tsx without actually implementing typescript
// @TODO: update this file to tsx and enable eslint
import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'

import { FullWidth } from '../components/templates/FullWidth'
import { SEO } from '../components/base/seo/seo'

import { CtaGrid } from '../components/organisms/CtaGrid/CtaGrid'
import { Video } from '../img/video'
import { Screwdriver } from '../img/screwdriver'
import { Band } from '../components/molecules/Band/Band'
import { Callout } from '../components/molecules/Callout/Callout'
import { Features } from '../components/organisms/Features/Features'
import { Hr } from '../components/atoms/Hr/Hr'
import { Signup } from '../components/molecules/Signup/Signup'
import { CardGrid } from '../components/organisms/CardGrid/CardGrid'

class RootIndex extends React.Component<PageProps> {
  render() {
    const ctas = [
      {
        linkText: 'Watch an Overview',
        to: '/video/emulsify-overview',
        icon: <Video />,
      },
      {
        linkText: 'View Installation Guide',
        to: 'https://docs.emulsify.info/',
        icon: <Screwdriver />,
      },
    ]

    const featuresData = [
      {
        heading: 'Technology and Design Leaders',
        children: (
          <>
            <p>
              Reduce development, maintenance time, and errors by reusing
              components and via automated testing
            </p>
            <p>
              Create a consistent look and feel by reusing brand-standard
              colors, typography, and more
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
            <p>
              Automate accessibility testing for an accessible user experience
            </p>
          </>
        ),
      },
      {
        heading: 'Developers',
        children: (
          <>
            <p>
              Automate testing to simplify prototyping and reduce development
              time
            </p>
            <p>
              Encourage reuse across all properties to reduce errors and
              maintenance efforts
            </p>
            <p>
              Maintain flexibility with support for multiple development
              languages and component customization
            </p>
          </>
        ),
      },
    ]

    const cards = [
      {
        heading: 'Storybook',
        text: 'Develop UI components with support for React and Twig',
        linkUrl: 'https://storybook.js.org',
        image: (
          <Img
            fixed={this.props.data.storybook.childImageSharp.fixed}
            imgStyle={{ objectFit: 'contain', objectPosition: 'left' }}
            alt="Storybook Logo"
          />
        ),
      },
      {
        heading: 'Gatsby',
        text: 'Deploy your style guide documentation as a blazing fast static site',
        linkUrl: 'https://www.gatsbyjs.com',
        image: (
          <Img
            fixed={this.props.data.gatsby.childImageSharp.fixed}
            imgStyle={{ objectFit: 'contain', objectPosition: 'left' }}
            alt="Gatsby Logo"
          />
        ),
      },
    ]

    return (
      <FullWidth
        location={this.props.location}
        heading="Emulsify is an open-source tool for creating design systems with reusable components and clear guidelines for teams."
        heroChildren={<CtaGrid ctas={ctas} />}
      >
        <SEO title="Home" />
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
        <Band size="medium">
          <Callout
            heading="Emulsify is open source, built using well-supported technologies developers love."
            text={
              <p>
                Emulsify is an open-source project that's free for everyone.
                Check out the project on{' '}
                <a href="https://github.com/emulsify-ds">GitHub</a> and join us
                on <a href="https://launchpass.com/emulsify">Slack</a> for help.
              </p>
            }
          />
          <CardGrid cards={cards} />
        </Band>
      </FullWidth>
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
    storybook: file(relativePath: { eq: "storybook.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    gatsby: file(relativePath: { eq: "gatsby.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
/* eslint-enable */
