/* eslint-disable */
// TODO: update this file to pass linting
const path = require(`path`)

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com',
}

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Emulsify Design System powered by Storybook and Gatsby',
    author: `Four Kitchens`,
    description: ``,
    defaultImage: `/emulsify-sharing-image.png`,
    siteUrl: 'https://emulsify.info',
  },
  pathPrefix: '/emulsify-website',
  plugins: [
    `gatsby-plugin-sitemap`,
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `img`),
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-559851-17',
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlog } }) => {
              return allContentfulBlog.edges.map(edge => {
                return Object.assign({}, {
                  description: edge.node.description.description,
                  date: edge.node.publishDate,
                  url: `${site.siteMetadata.siteUrl}/blog/${edge.node.slug}`,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                  title: edge.node.title
                })
              })
            },
            query: `
              {
                allContentfulBlog(filter: {publishToBlog: {eq: true}}, sort: {fields: publishDate, order: DESC}) {
                  edges {
                    node {
                      id
                      publishDate
                      slug
                      title
                      moreLinkText
                      description {
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Emulsify Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PS3D7TV',

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },

        // Specify optional GTM environment details.
        //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        //dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        //routeChangeEventName: "Gatsby_Route_Change",
      },
    },
  ],
}
/* eslint-enable */
