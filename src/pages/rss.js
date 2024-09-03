import Head from 'next/head'
import generateRssFeed from '../utils/generateRSSFeed'

export async function getStaticProps() {
  const posts = await generateRssFeed()
  return { props: { posts } }
}

export default function RSS() {
  return (
    <>
      <Head>
        <title>Emulsify RSS</title>
        <meta property="og:title" content="Emulsify RSS" key="title" />
      </Head>
      <div>
        <h1>RSS placeholder</h1>
      </div>
    </>
  )
}
