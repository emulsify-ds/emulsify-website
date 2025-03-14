import Image from 'next/image'
import Head from 'next/head'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Markdoc from '@markdoc/markdoc'
import * as React from 'react'
import getBlogPosts from '../../utils/getContentful'
import eventFormatter from '../../utils/eventFormatter'
import { Prose } from '@/components/Prose'
import Callout from '../../markdoc/tags/callout'
import GithubGist from '../../markdoc/tags/gist'
import { callout } from '../../markdoc/tags/callout.markdoc'
import { gist } from '../../markdoc/tags/gist.markdoc'
import YouTube from '../../markdoc/tags/youtube'
import { youtube } from '../../markdoc/tags/youtube.markdoc'
import sharingImage from '../../images/sharing-image-blog.png'
/**
 * Markdoc configuration.
 * Add all .markdoc schemas.
 */
const config = {
  tags: {
    callout,
    gist,
    youtube,
  },
}

export default function BlogPost({ posts }) {
  const router = useRouter()
  const { slug } = router.query
  const [content, setContent] = useState(false)

  useEffect(() => {
    async function getBody() {
      const data = posts.filter((post) => post.fields.slug === slug)
      const ast = Markdoc.parse(data[0].fields.body)
      const processedContent = Markdoc.transform(ast, config)
      const body = Markdoc.renderers.react(processedContent, React, {
        components: {
          // Add markdoc components. Use the same string found in the render method.
          Callout,
          GithubGist,
          YouTube,
        },
      })
      setContent({ body, data: data[0] })
    }
    getBody()
  }, [posts, slug])

  return (
    <div>
      {content && (
        <Head>
          <title>{content.data.fields.title} • Emulsify Blog</title>
          <meta
            property="og:title"
            content={`${content.data.fields.title} • Emulsify Blog`}
            key="title"
          />
          <meta property="og:image" content={sharingImage.src} />
          <meta name="description" content={content.data.fields.description} />
        </Head>
      )}
      {content && (
        <>
          <div
            className={classNames(
              'md:p-9',
              'bg-emulsifyBlue-600/10 from-emulsifyBlue-800 to-emulsifyBlue-900  dark:bg-gradient-to-b',
            )}
          >
            <div className="mx-auto flex max-w-8xl flex-col gap-7 sm:px-2 md:grid md:grid-cols-2  md:gap-5  lg:px-8 xl:px-12">
              <div className="order-2 self-center px-9 pb-9 md:p-0">
                <h1 className="text-3xl font-bold leading-tight text-emulsifyBlue-900 dark:text-emulsifyBlue-200 lg:gap-8 lg:text-5xl">
                  {content.data.fields.title}
                </h1>
                <p
                  className={classNames(
                    'flex flex-row items-center gap-2 text-sm font-semibold uppercase leading-tight text-gray-600 dark:text-gray-100',
                    'md:flex-col md:items-start',
                    'lg:flex-row lg:items-center',
                    'mt-2 text-xs md:text-sm',
                  )}
                >
                  <span className="flex flex-row items-center gap-1 md:order-2 lg:order-1">
                    {content.data.fields.author.fields.photo.fields.file
                      .url && (
                      <Image
                        src={`https:${content.data.fields.author.fields.photo.fields.file.url}`}
                        alt={content.data.fields.author}
                        width="20"
                        height="20"
                        className="rounded-full"
                      />
                    )}
                    {content.data.fields.author.fields.name}
                  </span>{' '}
                  <span
                    className={classNames(
                      'text-gray-500 dark:text-gray-200',
                      'md:text-base lg:text-sm',
                      'lg:order-2',
                    )}
                  >
                    {eventFormatter(content.data.fields.publishDate)}
                  </span>
                </p>
              </div>
              <Image
                src={`https:${content.data.fields.heroImage.fields.file.url}`}
                alt=""
                width="700"
                height="400"
                className="order-1 md:order-2"
                priority
              />
            </div>
          </div>

          <Prose className="mx-auto mb-52 mt-10 !max-w-3xl px-5">
            {content.body}
          </Prose>
        </>
      )}
    </div>
  )
}

BlogPost.getInitialProps = async () => {
  const posts = await getBlogPosts()
  return { posts }
}
