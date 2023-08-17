import fs from 'fs'
import RSS from 'rss'
import getBlogPosts from './getContentful'
import eventFormatter from './eventFormatter'

export default async function generateRssFeed() {
  const siteUrl = 'localhost:3000'
  const posts = await getBlogPosts()

  const feedOptions = {
    title: 'Emulsify Blog RSS Feed',
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss.xml`,
    pubDate: new Date(),
  }

  const feed = new RSS(feedOptions)

  posts
    .filter((post) => post.fields.publishToBlog === true)
    // eslint-disable-next-line array-callback-return
    .map((post) => {
      feed.item({
        title: post.fields.title,
        description: post.fields.description,
        url: `https://emulsify.info/blog/${post.fields.slug}`,
        date: eventFormatter(post.fields.publishDate),
      })
    })

  fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }))

  const drupalFeedOptions = {
    title: 'Emulsify Blog RSS Feed for Planet Drupal',
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss.xml`,
    pubDate: new Date(),
  }

  const drupalFeed = new RSS(drupalFeedOptions)

  posts
    .filter((post) => post.fields.publishToBlog === true)
    .filter((post) => {
      if (post.fields.category) {
        return post.fields.category[0].fields.title === 'Drupal'
      }
      return null
    })
    .map((post) => {
      drupalFeed.item({
        title: post.fields.title,
        description: post.fields.description,
        url: `https://emulsify.info/blog/${post.fields.slug}`,
        date: eventFormatter(post.fields.publishDate),
      })
      return null
    })

  fs.writeFileSync(
    './public/rss-planet-drupal.xml',
    drupalFeed.xml({ indent: true })
  )

  return posts
}
