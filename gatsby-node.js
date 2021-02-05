const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pageLayout = path.resolve('./src/templates/page.js');
    const landingPageLayout = path.resolve('./src/templates/landing-page.js');
    const blogPost = path.resolve('./src/templates/blog-post.js');
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
            allContentfulBlog(limit: 1000) {
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

        // Blogs
        const posts = result.data.allContentfulBlog.edges
        // Posts
        posts.forEach((post) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })
        // Blog Pagination Pages
        const postsPerPage = 8
        const numPages = Math.ceil(posts.length / postsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve("./src/templates/blog.js"),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1
            },
          })
        })
      })
    )
  })
}
