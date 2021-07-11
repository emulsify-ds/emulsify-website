/* eslint-disable */
// This file was converted to .tsx without actually implementing typescript
// @TODO: update this file to tsx and enable eslint
import React from 'react'
import { Link } from 'gatsby'

import styles from './teaserList.module.css'

export default ({ title, children, link, linkText }) => (
  <section className={styles.teaserList}>
    <h2 className={styles.listTitle}>{title}</h2>
    {children}
    <Link className="button button-center" to={link}>
      {linkText}
    </Link>
  </section>
)
/* eslint-enable */
