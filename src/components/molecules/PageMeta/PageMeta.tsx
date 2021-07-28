import React, { FC } from 'react'

import styles from './pageMeta.module.css'

export type PageMetaProps = {
  heading?: string
  text?: string
}

export const PageMeta: FC<PageMetaProps> = ({ heading, text, children }) => (
  <div className={styles.pageMeta}>
    {heading && <h2 className={styles.pageMetaHeading}>{heading}</h2>}
    {children && <div className={styles.pageMetaContent}>children</div>}
    {text && <h2 className={styles.pageMetaText}>{text}</h2>}
  </div>
)
