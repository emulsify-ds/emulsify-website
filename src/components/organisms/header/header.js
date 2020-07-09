import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Navigation from '../../molecules/nav/navigation'

import styles from './header.module.css'
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

export default function Header ({ image, isHome }) {
  let headerClasses = cx({
    header: true,
    headerImage: !image,
    headerHome: isHome,
  });

  let headerWrapperClasses = cx({
    headerWrapper: true,
    wrapper: true,
    headerHomeWrapper: isHome,
  });

  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          file(relativePath: { eq: "wavebkg.png" }) {
            childImageSharp {
              fluid(maxWidth: 1180) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <header className={headerClasses}>
          {!image && 
            <div className={styles.heroImage}>
              <Img
                alt=""
                fluid={data.file.childImageSharp.fluid}
              />
            </div>
          }
          {image &&
            <div className={styles.heroImage}> 
              <Img
                alt=""
                fluid={image.fluid}
              />
            </div>
          }
          <div className={headerWrapperClasses}>
            <Link className={styles.logo} to="/">Home</Link>
            {/* <Navigation light={isHome && true} /> */}
            {isHome &&
              <div className={styles.content}>
                <h1 className={styles.heading}>Emulsify is an open-source tool for creating design systems with reusable components and clear guidelines for teams.</h1>
                <h2 className={styles.headingSmall}>Ready to get started?</h2>
                <a className="button button--dark" target="_blank" href="https://docs.emulsify.info/" rel="noopener">Check out the installation guide</a>
              </div>
            }
          </div>
        </header>
      )}
    />
  )
}
