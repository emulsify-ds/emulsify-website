/* eslint-disable */
// This file was converted to .tsx without actually implementing typescript
// @TODO: update this file to tsx and enable eslint
import React from 'react'
import { Link } from 'gatsby'

import { FullWidth } from '../components/templates/FullWidth'
import { SEO } from '../components/base/seo/seo'

class RootIndex extends React.Component {
  render() {
    return (
      <FullWidth location={this.props.location}>
        <SEO title="404 - Page Not Found" />
        <div style={{ background: '#fff' }}>
          <section className="wrapper">
            <p>Sorry, the page you are looking for is not found.</p>
            <br></br>
            <Link className="button" to="/">
              Return to the Homepage
            </Link>
          </section>
        </div>
      </FullWidth>
    )
  }
}

export default RootIndex
/* eslint-enable */
