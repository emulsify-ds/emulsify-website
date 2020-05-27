import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Navigation from '../../molecules/nav/navigation'
import Github from '../../../img/github.inline.svg';

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
            <Navigation light={isHome && true} />
            {isHome &&
              <div>
                <h1 className={styles.heading}>CREATE A DYNAMIC DESIGN SYSTEM FOR YOUR ENTIRE ORGANIZATION</h1>
                <a className="button" target="_blank" href="https://docs.emulsify.info/" rel="noopener">Get Started</a>
                <p>
                  <a target="_blank" href="https://github.com/emulsify-ds" rel="noopener">View on <Github />Github</a>
                </p>
              </div>
            }
          </div>
        </header>
      )}
    />
  )
}
