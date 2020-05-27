import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './card.module.css'

export default ({ title, text, link, image }) => (
  <article className={styles.card}>
    <div className={styles.image}>
      <Img alt="" fluid={image.fluid} />
    </div>
    <div className={styles.copy}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <h3 className={styles.cardText}>{text}</h3>
      <Link className={styles.cardLink} to={link}>Read More</Link>
    </div>
  </article>
)
