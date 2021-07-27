import React, { FC } from 'react'
import classNames from 'classnames/bind'
import { Link } from '../../../utility/Link'

import { Band } from '../../../molecules/Band/Band'
import { Logo } from '../../../../img/logo'
import Navigation from '../../../molecules/nav/navigation'

import styles from './header.module.css'

const cx = classNames.bind(styles)

export type HeaderProps = {
  isHome: boolean
  logoUrl: string
}

export const Header: FC<HeaderProps> = ({
  children,
  isHome,
  logoUrl = '/',
}) => {
  const headerClasses = cx({ header: true, headerHome: isHome })
  const logoClasses = cx({ logo: true, logoHome: isHome })

  return (
    <Band bgColor="waves" size="large">
      <div className={headerClasses}>
        <div className={styles.headerInner}>
          <div className={styles.headerBranding}>
            <Link className={logoClasses} to={logoUrl}>
              <Logo /> <span className="visually-hidden">Home</span>
            </Link>
            <Navigation isHome={isHome} />
          </div>
          {children}
        </div>
      </div>
    </Band>
  )
}
