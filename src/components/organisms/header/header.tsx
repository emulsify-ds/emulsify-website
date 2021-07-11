/* eslint-disable */
// This file was converted to .tsx without actually implementing typescript
// @TODO: update this file to tsx and enable eslint
import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// import Navigation from '../../molecules/nav/navigation'
import Video from '../../molecules/video/video'

import Arrow from '../../../img/arrow.inline.svg'

import styles from './header.module.css'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

export default function Header({ image, isHome }) {
  const headerClasses = cx({
    header: true,
    headerImage: !image,
    headerHome: isHome,
  })

  const headerWrapperClasses = cx({
    headerWrapper: true,
    wrapper: true,
    headerHomeWrapper: isHome,
  })

  const logoClasses = cx({
    logo: true,
    logoHome: isHome,
  })

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
      render={(data) => (
        <header className={headerClasses}>
          <div className={styles.heroImage}>
            <Img alt="" fluid={data.file.childImageSharp.fluid} />
          </div>
          <div className={headerWrapperClasses}>
            <Link className={logoClasses} to="/">
              Home
            </Link>
            {/* <Navigation light={isHome && true} /> */}
            {isHome && (
              <>
                <div className={styles.content}>
                  <h1 className={styles.heading}>
                    Emulsify is an open-source tool for creating design systems
                    with reusable components and clear guidelines for teams.
                  </h1>
                  <h2 className={styles.headingSmall}>Ready to get started?</h2>
                  <a
                    className="button button--dark"
                    target="_blank"
                    href="https://docs.emulsify.info/"
                    rel="noopener"
                  >
                    <span>Check out the installation guide</span>
                    <Arrow className="button-icon" />
                  </a>
                </div>
                <Video />
              </>
            )}
          </div>
        </header>
      )}
    />
  )
}
/* eslint-enable */
