import React, { FC, ReactNode } from 'react'

import '../base/base.css'

import { Header } from '../organisms/site/Header/Header'
import { Footer } from '../organisms/site/Footer/Footer'
import { Hero } from '../molecules/Hero/Hero'

type LayoutProps = {
  location: Location
  heroHeading: string
  heroChildren: ReactNode
}

export const Layout: FC<LayoutProps> = ({
  location,
  heroHeading,
  heroChildren,
  children,
}) => {
  let home = false

  if (location.pathname === '/') {
    home = true
  }

  return (
    <div>
      <Header isHome={home}>
        <Hero heading={heroHeading}>{heroChildren}</Hero>
      </Header>
      {children}
      <Footer />
    </div>
  )
}
