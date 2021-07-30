import React, { ReactNode, FC } from 'react'
import { Link, LinkProps } from '../../utility/Link'

import styles from './cta.module.css'

import { Arrow } from '../../../img/arrow'

export type CtaProps = LinkProps & {
  icon?: ReactNode
  linkText: string
}

export const Cta: FC<CtaProps> = ({ icon, linkText, to }) => {
  return (
    <div className={styles.cta}>
      {icon && (
        <Link
          className={styles.ctaIcon}
          to={to}
          tabIndex={-1}
          ariaHidden={true}
        >
          {icon}
        </Link>
      )}
      <Link className={styles.ctaText} to={to}>
        {linkText} <Arrow />
      </Link>
    </div>
  )
}
