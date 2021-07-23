import React, { FC, ReactNode } from 'react'

import '../base/base.css'

import { Header } from '../organisms/site/Header/Header'
import { Footer } from '../organisms/site/Footer/Footer'
import { Hero, HeroProps } from '../molecules/Hero/Hero'

export type LayoutProps = HeroProps & {
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
}) => {
  let home = false

  if (location.pathname === '/') {
    home = true
  }

  return (
    <div>
      <Header isHome={home} logoUrl={logoUrl}>
        <Hero heading={heading}>{heroChildren}</Hero>
      </Header>
      {children}
      <Footer />
    </div>
  )
}
