import React, { FC } from 'react'

import '../base/base.css'

import { Header } from '../organisms/site/Header/Header'
import Footer from '../organisms/footer/footer'

type LayoutProps = {
  location: Location
}

export const Layout: FC<LayoutProps> = ({ location, children }) => {
  let home = false

  if (location.pathname === '/') {
    home = true
  }

  return (
    <div>
      <Header isHome={home} />
      {children}
      <Footer />
    </div>
  )
}
