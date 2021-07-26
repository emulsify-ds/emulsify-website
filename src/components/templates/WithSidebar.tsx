import React, { FC, ReactNode } from 'react'

import '../base/base.css'
import styles from './withSidebar.module.css'

import { Header } from '../organisms/site/Header/Header'
import { Footer } from '../organisms/site/Footer/Footer'
import { Hero, HeroProps } from '../molecules/Hero/Hero'
import { NavProps } from '../molecules/nav/navigation'

export type WithSidebarProps = HeroProps &
  NavProps & {
    location: Location
    heading?: string
    heroChildren?: ReactNode
    sidebar?: ReactNode
  }

export const WithSidebar: FC<WithSidebarProps> = ({
  location,
  heading,
  heroChildren,
  children,
  sidebar,
}) => {
  let home = false

  if (location.pathname === '/') {
    home = true
  }

  const navItems = [
    { link: '/', text: 'Home' },
    // { link: '/demo', text: 'Demo' },
    { link: '/blog', text: 'Blog' },
  ]

  return (
    <div>
      <Header isHome={home} navItems={navItems}>
        {heroChildren && <Hero heading={heading}>{heroChildren}</Hero>}
      </Header>
      <div className={styles.mainContent}>
        <main className={styles.contentPrimary}>{children}</main>
        {sidebar && (
          <aside className={styles.contentSecondary}>{sidebar}</aside>
        )}
      </div>
      <Footer />
    </div>
  )
}
