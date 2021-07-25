import React, { FC, ReactNode } from 'react'

import '../base/base.css'

import { Header } from '../organisms/site/Header/Header'
import { Footer } from '../organisms/site/Footer/Footer'
import { Hero, HeroProps } from '../molecules/Hero/Hero'
import { NavProps } from '../molecules/nav/navigation'

export type FullWidthProps = HeroProps &
  NavProps & {
    location: Location
    heading?: string
    heroChildren?: ReactNode
    logoUrl: string
  }

export const FullWidth: FC<FullWidthProps> = ({
  location,
  heading,
  heroChildren,
  children,
  logoUrl,
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
      {children}
      <Footer />
    </div>
  )
}
