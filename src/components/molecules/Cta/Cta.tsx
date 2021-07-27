import React, { ReactNode, FC } from 'react'
import { Link } from '../../utility/Link'

import styles from './cta.module.css'

import { Arrow } from '../../../img/arrow'

export type CtaProps = {
  icon?: ReactNode
  linkText: string
  linkUrl: string
}

export const Cta: FC<CtaProps> = ({ icon, linkText, linkUrl }) => {
  return (
    <div className={styles.cta}>
      {icon && (
        <Link
          className={styles.ctaIcon}
          to={linkUrl}
          tabIndex={-1}
          aria-hidden="true"
        >
          {icon}
        </Link>
      )}
      <Link className={styles.ctaText} to={linkUrl}>
        {linkText} <Arrow />
      </Link>
    </div>
  )
}
