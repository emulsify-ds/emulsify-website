import React from 'react'
import { Link } from 'gatsby'

import styles from './teaserList.module.css'

export default ({ title, children, link, linkText }) => (
  <section className={styles.teaserList}>
    <h2 className={styles.listTitle}>{title}</h2>
    {children}
    <Link className="button button-center" to={link}>{linkText}</Link>
  </section>
)
