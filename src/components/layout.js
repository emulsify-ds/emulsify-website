import React from 'react'

import './base/base.css'

import Header from './organisms/header/header'
import Footer from './organisms/footer/footer'

class Template extends React.Component {
  render() {
    const { location, children, heroImage } = this.props
    let home

    if (location.pathname === '/') {
      home = true;
    } 

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        <Header
          image={heroImage}
          isHome={home}
        />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Template
