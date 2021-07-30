/* eslint-disable */
// TODO: update this file to pass linting
const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    // const pageLayout = path.resolve('./src/templates/page.tsx')
    // const landingPageLayout = path.resolve('./src/templates/landing-page.tsx')
    const blogPost = path.resolve('./src/templates/blog-post.tsx')
    // const caseStudy = path.resolve('./src/templates/case-study.tsx')
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
            allContentfulCaseStudy(limit: 1000) {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Pages
        // const pages = result.data.allContentfulPage.edges
        // pages.forEach((page) => {
        //   createPage({
        //     path: `/${page.node.slug}/`,
        //     component: pageLayout,
        //     context: {
        //       slug: page.node.slug,
        //     },
        //   })
        // })

        // Landing Page
        // const landingPages = result.data.allContentfulLandingPage.edges
        // landingPages.forEach((page) => {
        //   createPage({
        //     path: `/${page.node.slug}/`,
        //     component: landingPageLayout,
        //     context: {
        //       slug: page.node.slug,
        //     },
        //   })
        // })

        // Blogs
        const posts = result.data.allContentfulBlog.edges
        // Posts
        posts.forEach((post) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })

        // Blog Pagination Pages
        // const postsPerPage = 8
        // const numPages = Math.ceil(posts.length / postsPerPage)
        // Array.from({ length: numPages }).forEach((_, i) => {
        //   createPage({
        //     path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        //     component: path.resolve('./src/templates/blog.tsx'),
        //     context: {
        //       limit: postsPerPage,
        //       skip: i * postsPerPage,
        //       numPages,
        //       currentPage: i + 1,
        //     },
        //   })
        // })

        // Case Study
        // const caseStudies = result.data.allContentfulCaseStudy.edges
        // // Posts
        // caseStudies.forEach((post) => {
        //   createPage({
        //     path: `/case-studies/${post.node.slug}/`,
        //     component: caseStudy,
        //     context: {
        //       slug: post.node.slug,
        //     },
        //   })
        // })

        // Case Study Pagination Pages
        // Array.from({ length: numPages }).forEach((_, i) => {
        //   createPage({
        //     path: i === 0 ? `/case-studies` : `/case-studies/${i + 1}`,
        //     component: path.resolve('./src/templates/case-studies.tsx'),
        //     context: {
        //       limit: postsPerPage,
        //       skip: i * postsPerPage,
        //       numPages,
        //       currentPage: i + 1,
        //     },
        //   })
        // })
      })
    )
  })
}
/* eslint-enable */
