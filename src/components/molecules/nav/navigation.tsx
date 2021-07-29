import React, { FC, Component, ReactNode } from 'react'
import { Link } from '../../utility/Link'

import { Band } from '../Band/Band'

import styles from './navigation.module.css'

import { Menu } from '../../../img/menu'
import { Close } from '../../../img/close'

import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

type NavItemProps = {
  link: string
  text: string
}

const NavItem: FC<NavItemProps> = ({ link, text }) => (
  <li className={styles.navigationItem}>
    <Link
      className={styles.navlink}
      activeClassName={styles.navLinkActive}
      to={link}
    >
      {text}
    </Link>
  </li>
)

export type NavProps = {
  navItems?: NavItemProps[]
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
    const { navItems } = this.props

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
          <Band bgColor="primary" size="large">
            {/* Close Toggle */}
            <span className={styles.mobileNavClose} onClick={this.reveal}>
              <Close />
              <div className={'visually-hidden'}>Close</div>
            </span>
            <ul className={styles.navigation}>
              {navItems &&
                navItems.map((item, index) => (
                  <NavItem key={index} link={item.link} text={item.text} />
                ))}
            </ul>
          </Band>
        </div>
      </nav>
    )
  }
}
