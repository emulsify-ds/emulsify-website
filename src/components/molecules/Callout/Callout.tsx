import React, { FC, ReactNode } from 'react'

import styles from './callout.module.css'

export type CalloutProps = {
  heading: string
  text: ReactNode
  image?: ReactNode
  layout?: 'media-start' | 'media-end'
}

export const Callout: FC<CalloutProps> = ({
  heading,
  text,
  image,
  layout = 'media-start',
}) => {
  return (
    <div className={styles.callout} data-callout-layout={layout}>
      <div className={styles.calloutContent}>
        <div className={styles.calloutHeading}>{heading}</div>
        <div className={styles.calloutText}>{text}</div>
      </div>
      {image && <div className={styles.calloutImage}>{image}</div>}
    </div>
  )
}
