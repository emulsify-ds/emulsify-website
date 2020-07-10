const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pageLayout = path.resolve('./src/templates/page.js');
    const landingPageLayout = path.resolve('./src/templates/landing-page.js');
    resolve(
      graphql(
        `
          {
            allContentfulPage {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulLandingPage {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Pages
        const pages = result.data.allContentfulPage.edges
        pages.forEach((page) => {
          createPage({
            path: `/${page.node.slug}/`,
            component: pageLayout,
            context: {
              slug: page.node.slug
            },
          })
        })

        // Landing Page
        const landingPages = result.data.allContentfulLandingPage.edges
        landingPages.forEach((page) => {
          createPage({
            path: `/${page.node.slug}/`,
            component: landingPageLayout,
            context: {
              slug: page.node.slug
            },
          })
        })
      })
    )
  })
}
