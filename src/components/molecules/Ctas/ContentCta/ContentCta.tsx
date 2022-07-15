import React, { FC, ReactNode } from 'react'
import { Link, LinkProps } from '../../../utility/Link'

import styles from './contentCta.module.css'

export type ContentCtaProps = LinkProps & {
  icon?: ReactNode
  heading: string
  linkText: string
}

export const ContentCta: FC<ContentCtaProps> = ({
  icon,
  heading,
  linkText,
  to,
}) => {
  return (
    <div className={styles.contentCta}>
      <div className={styles.contentCtaHeading}>{heading}</div>
      <Link className={styles.contentCtaLink} to={to}>
        {linkText} {icon}
      </Link>
    </div>
  )
}
