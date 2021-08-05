import React, { FC, ReactNode } from 'react'
import { Link } from '../../utility/Link'

import styles from './card.module.css'

export type CardProps = {
  heading?: string
  text: string
  linkUrl: string
  image: ReactNode
}

export const Card: FC<CardProps> = ({ heading, text, linkUrl, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        {heading && (
          <Link to={linkUrl}>
            <h3 className={styles.cardHeading}>{heading}</h3>
          </Link>
        )}
        <p className={styles.cardText}>{text}</p>
      </div>
      {image && <div className={styles.cardImage}>{image}</div>}
    </div>
  )
}
