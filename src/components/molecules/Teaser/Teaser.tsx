import React, { FC, ReactNode } from 'react'
import { Link } from '../../utility/Link'

import styles from './teaser.module.css'

export type TeaserProps = {
  label: string
  heading: string
  text: string
  linkUrl: string
  linkText?: string
  image: ReactNode
  variation?: 'grid' | 'list'
}

export const Teaser: FC<TeaserProps> = ({
  label,
  heading,
  text,
  linkUrl,
  linkText,
  image,
  variation = 'grid',
}) => {
  const randomInt = Math.floor(Math.random() * 1000)
  const titleId = heading.replace(/\s+/g, '-').toLowerCase()
  const linkId = `${titleId}-${randomInt}`
  return (
    <div className={styles.teaser} data-teaser-variation={variation}>
      <div className={styles.teaserLabel}>{label}</div>
      <div className={styles.teaserContent}>
        {heading && (
          <Link
            className={styles.teaserHeadingLink}
            to={linkUrl}
            tabIndex={-1}
            aria-hidden={true}
          >
            <h3 className={styles.teaserHeading} id={linkId}>
              {heading}
            </h3>
          </Link>
        )}
        <div
          className={styles.teaserText}
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
        {linkText && (
          <Link
            className={styles.teaserLinkText}
            to={linkUrl}
            ariaLabelledby={linkId}
          >
            {linkText}
          </Link>
        )}
      </div>
      {image && (
        <Link
          className={styles.teaserImage}
          to={linkUrl}
          tabIndex={-1}
          aria-hidden={true}
        >
          {image}
        </Link>
      )}
    </div>
  )
}
