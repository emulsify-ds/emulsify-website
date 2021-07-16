import React, { Component, ReactNode } from 'react'
import { Link } from 'gatsby'

import styles from './navigation.module.css'

import { Menu } from '../../../img/menu.inline'
import { Close } from '../../../img/close.inline'

import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

type NavProps = {
  light: boolean
  navlink?: boolean
}

type State = {
  revealed: boolean
  nextShown: boolean
}

export default class Nav extends Component<NavProps, State> {
  readonly state = {
    revealed: false,
    nextShown: false,
  }

  reveal: React.MouseEventHandler<HTMLSpanElement> = () => {
    this.setState((prevState) => ({
      revealed: !prevState.revealed,
    }))
  }

  render(): ReactNode {
    const { light } = this.props
    const navLinkClasses = cx({
      navlink: true,
      navlinkHome: light,
    })

    const toggleOpenClasses = classNames(
      { [styles.toggleOpen]: true },
      { [styles.open]: this.state.revealed === true }
    )

    const mainNavClasses = cx({
      mainNav: true,
      mainNavOpen: this.state.revealed === true,
    })

    return (
      <nav role="navigation" className={styles.nav}>
        {/* Menu Toggle */}
        <button className={styles.toggle}>
          <span className={toggleOpenClasses} onClick={this.reveal}>
            <Menu />
            <div className={'visually-hidden'}>Menu</div>
          </span>
        </button>
        {/* Main Menu */}
        <div className={mainNavClasses}>
          {/* Close Toggle */}
          <span className={styles.mobileNavClose} onClick={this.reveal}>
            <Close />
            <div className={'visually-hidden'}>Close</div>
          </span>
          <ul className={styles.navigation}>
            {!light && (
              <li className={styles.navigationItem}>
                <Link className={navLinkClasses} to="/">
                  Home
                </Link>
              </li>
            )}
            <li className={styles.navigationItem}>
              <Link className={navLinkClasses} to="/demo/">
                Demo
              </Link>
            </li>
            <li className={styles.navigationItem}>
              <Link className={navLinkClasses} to="/blog/">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
