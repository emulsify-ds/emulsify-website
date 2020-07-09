import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/base/seo/seo'

import Card from '../components/molecules/card/card'
import Features from '../components/organisms/features/features'
import Signup from '../components/organisms/signup/signup'

import Unify from '../img/unify.inline.svg';
import DevTools from '../img/devTools.inline.svg';
import Connector from '../img/connector.inline.svg';

import styles from './home.module.css';

class RootIndex extends React.Component {
  render() {
    console.log(this.props)
    return (
      <Layout location={this.props.location}>
        <SEO title="Home" url={this.props.location.href} />
        <div style={{ background: '#fff' }}>
          <div className="wrapper wrapper-home">
            <Card
              image={Unify()}
              title="Unify your websites and teams with a design system"
              text="Complex organizations need a design system that simplifies development, encourages consistency, reduces maintenance effort, and scales quickly and affordably — without hampering flexibility for individual developers or departments."
            />
            <Card
            image={DevTools()}
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
              image={Connector()}
              specialTitle="Emulsify is"
              specialSubTitle="Open Source"
              text="Emulsify is an open source project that’s free for everyone. Check out the project on GitHub and visit our support page for help."
            />
          </div>
        </div>
        <div className={styles.demo}>
          <Card
            imageClass="demoImage"
            imageFluid={this.props.data.file.childImageSharp.fluid}
            title="Explore the Demo"
            text="Western University of Pennsylvania is a fictional university to show how Emulsify can be used to manage the design system for a school and all of its departments."
            buttonUrl="#"
            buttonText="University Demo"
          />
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const query = graphql`
  query HomePageQuery {
    file(relativePath: { eq: "western-u.png" }) {
      childImageSharp {
        fluid(maxWidth: 580) {
          ...GatsbyImageSharpFluid
        }
      }
    }
 }
`
