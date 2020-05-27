import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/base/seo/seo'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Home" url={this.props.location.href} />
        <div style={{ background: '#fff' }}>
          <div className="wrapper wrapper-home">
            <h2>Homepage Coded Content</h2>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex
