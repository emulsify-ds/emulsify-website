import React, { FC } from 'react'
import classNames from 'classnames/bind'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
      {children}
    </div>
  )
}
