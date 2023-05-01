import Image from 'next/image'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/sharp-solid-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import getBlogPosts from '../../utils/getContentful'
import eventFormatter from '../../utils/eventFormatter'
import { Prose } from '@/components/Prose'

export default function BlogPost({ posts }) {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div>
      {posts
        .filter((post) => post.fields.slug === slug)
        .map((post, i) => (
          <>
            <div
              className={classNames(
                // 'absolute top-0 right-0 left-0',
                'p-9',
                'bg-emulsifyBlue-600/10 dark:bg-emulsifyBlue-900/10'
              )}
            >
              <div className="mx-auto grid max-w-8xl grid-cols-2 gap-5 sm:px-2 lg:px-8 xl:px-12">
                <div className="self-center">
                  <h1 className="text-4xl font-bold text-emulsifyBlue-900">
                    {post.fields.title}
                  </h1>
                  <p
                    className={classNames(
                      'flex flex-row items-center gap-2 text-sm font-semibold uppercase leading-tight text-gray-600',
                      'md:flex-col md:items-start',
                      'lg:flex-row lg:items-center',
                      'mt-2 text-xs md:text-sm'
                    )}
                  >
                    <span className="flex flex-row items-center gap-1 md:order-2 lg:order-1">
                      {post.fields.author.fields.photo.fields.file.url && (
                        <Image
                          src={`https://${post.fields.author.fields.photo.fields.file.url}`}
                          alt={post.fields.author}
                          width="20"
                          height="20"
                          className="rounded-full"
                        />
                      )}
                      {post.fields.author.fields.name}
                    </span>{' '}
                    <span
                      className={classNames(
                        'text-gray-500 ',
                        'md:text-base lg:text-sm',
                        'lg:order-2'
                      )}
                    >
                      {post.fields.publishDate}
                    </span>
                  </p>
                </div>
                <Image
                  src={`https://${post.fields.heroImage.fields.file.url}`}
                  alt={post.fields.author}
                  width="700"
                  height="400"
                  className=""
                />
              </div>
            </div>
            <Prose className="mx-auto mt-10 max-w-3xl">
              {post.fields.body}
            </Prose>
          </>
        ))}
    </div>
  )
}

BlogPost.getInitialProps = async () => {
  const posts = await getBlogPosts()

  return { posts }
}
