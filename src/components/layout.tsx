/* eslint-disable */
// This file was converted to .tsx without actually implementing typescript
// @TODO: update this file to tsx and enable eslint
import React from 'react'

import './base/base.css'

import { Banner } from './molecules/banner/banner'
import Header from './organisms/header/header'
import Footer from './organisms/footer/footer'

class Template extends React.Component {
  render() {
    const { location, children, heroImage } = this.props
    let home

    if (location.pathname === '/') {
      home = true
    }

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        <Banner>
          Not sure where to start? Four Kitchens can help you{' '}
          <a href="http://fourkitchens.com">
            build design systems with Emulsify
          </a>
          .
        </Banner>
        <Header image={heroImage} isHome={home} />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Template
/* eslint-enable */
