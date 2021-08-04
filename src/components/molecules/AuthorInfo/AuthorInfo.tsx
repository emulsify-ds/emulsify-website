import React, { FC, ReactNode } from 'react'

import styles from './authorInfo.module.css'

export type AuthorInfoProps = {
  image?: ReactNode
  name: string
  date: string
}

export const AuthorInfo: FC<AuthorInfoProps> = ({ image, name, date }) => (
  <div className={styles.authorInfo}>
    {image && <div className={styles.authorInfoImage}>{image}</div>}
    <div className={styles.authorInfoContent}>
      <span className={styles.authorInfoName}>{name}</span>
      <span className={styles.authorInfoDate}>{date}</span>
    </div>
  </div>
)
