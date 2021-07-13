/* eslint-disable */
// This file was converted to .tsx without actually implementing typescript
// @TODO: update this file to tsx and enable eslint
import React from 'react'
import Img from 'gatsby-image'

import styles from './cta.module.css'

import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

export default ({ bg, title, image, children }) => {
  const bgClasses = cx({
    cta: true,
    ctaBg: bg,
  })
  return (
    <div className={bgClasses}>
      <h2 className={styles.title}>{title}</h2>
      {image && <Img className={styles.image} fluid={image} />}
      <div className={styles.copy}>{children}</div>
    </div>
  )
}
/* eslint-enable */
