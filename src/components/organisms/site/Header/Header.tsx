import React, { FC } from 'react'
import classNames from 'classnames/bind'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Logo } from '../../../../img/logo'
import Navigation from '../../../molecules/nav/navigation'

import styles from './header.module.css'

const cx = classNames.bind(styles)

export type HeaderProps = {
  isHome: boolean
}

interface HeaderData {
  file: {
    childImageSharp: {
      fluid: []
    }
  }
}

export const Header: FC<HeaderProps> = ({ children, isHome }) => {
  const headerClasses = cx({ header: true, headerHome: isHome })
  const logoClasses = cx({ logo: true, logoHome: isHome })
  const headerWrapperClasses = cx({
    headerWrapper: true,
    wrapper: true,
    headerHomeWrapper: isHome,
  })

  const data: HeaderData = useStaticQuery(graphql`
    query HeadingQuery {
      file(relativePath: { eq: "wavebkg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1180) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={headerClasses}>
      <div className={styles.headerImage}>
        <Img alt="" fluid={data.file.childImageSharp.fluid} />
      </div>
      <div className={headerWrapperClasses}>
        <Link className={logoClasses} to="/">
          <Logo /> <span className="visually-hidden">Home</span>
        </Link>
        <Navigation isHome={isHome} />
      </div>
      {children}
    </div>
  )
}
