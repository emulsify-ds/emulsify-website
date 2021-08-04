import React, { FC, ReactNode } from 'react'

import '../base/base.css'

import { Header } from '../organisms/site/Header/Header'
import { Footer } from '../organisms/site/Footer/Footer'
import { Hero, HeroProps } from '../molecules/Hero/Hero'
import { NavProps } from '../molecules/nav/navigation'

import { navItems } from '../data/navigation'

export type FullWidthProps = HeroProps &
  NavProps & {
    location: Location
    heading?: string
    heroChildren?: ReactNode
  }

export const FullWidth: FC<FullWidthProps> = ({
  location,
  heading,
  heroChildren,
  children,
}) => {
  let home = false

  if (location.pathname === '/') {
    home = true
  }

  return (
    <div>
      <Header isHome={home} navItems={navItems}>
        {heroChildren && <Hero heading={heading}>{heroChildren}</Hero>}
      </Header>
      <main role="main">{children}</main>
      <Footer />
    </div>
  )
}
