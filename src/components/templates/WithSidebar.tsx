import React, { FC, ReactNode } from 'react'

import '../base/base.css'

import { Header } from '../organisms/site/Header/Header'
import { Footer } from '../organisms/site/Footer/Footer'
import { Hero, HeroProps } from '../molecules/Hero/Hero'
import { NavProps } from '../molecules/nav/navigation'

export type WithSidebarProps = HeroProps &
  NavProps & {
    location: Location
    heading?: string
    heroChildren?: ReactNode
    logoUrl: string
    sidebar?: ReactNode
  }

export const WithSidebar: FC<WithSidebarProps> = ({
  location,
  heading,
  heroChildren,
  children,
  logoUrl,
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
      <Header isHome={home} logoUrl={logoUrl} navItems={navItems}>
        {heroChildren && <Hero heading={heading}>{heroChildren}</Hero>}
      </Header>
      <main>{children}</main>
      {sidebar && <aside>{sidebar}</aside>}
      <Footer />
    </div>
  )
}
