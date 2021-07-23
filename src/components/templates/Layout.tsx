import React, { FC, ReactNode } from 'react'

import '../base/base.css'

import { Header } from '../organisms/site/Header/Header'
import { Footer } from '../organisms/site/Footer/Footer'
import { Hero, HeroProps } from '../molecules/Hero/Hero'
import { NavProps } from '../molecules/nav/navigation'

export type LayoutProps = HeroProps &
  NavProps & {
    location: Location
    heading: string
    heroChildren: ReactNode
    logoUrl: string
  }

export const Layout: FC<LayoutProps> = ({
  location,
  heading,
  heroChildren,
  children,
  logoUrl,
  navItems,
}) => {
  let home = false

  if (location.pathname === '/') {
    home = true
  }

  return (
    <div>
      <Header isHome={home} logoUrl={logoUrl} navItems={navItems}>
        <Hero heading={heading}>{heroChildren}</Hero>
      </Header>
      {children}
      <Footer />
    </div>
  )
}
