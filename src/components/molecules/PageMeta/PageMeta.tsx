import React, { FC, ReactNode } from 'react'

import styles from './pageMeta.module.css'

export type PageMetaProps = {
  heading?: string
  text?: ReactNode
  heroImage?: ReactNode
}

export const PageMeta: FC<PageMetaProps> = ({
  heading,
  children,
  text,
  heroImage,
}) => (
  <div className={styles.pageMeta}>
    {heading && <h1 className={styles.pageMetaHeading}>{heading}</h1>}
    {children && <div className={styles.pageMetaContent}>{children}</div>}
    {text && <div className={styles.pageMetaText}>{text}</div>}
    {heroImage && <div className={styles.pageMetaHeroImage}>{heroImage}</div>}
  </div>
)
