import Image from 'next/image'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/sharp-solid-svg-icons'
import Link from 'next/link'
import Head from 'next/head'
import getBlogPosts from '../utils/getContentful'
import eventFormatter from '../utils/eventFormatter'

const BlogCard = ({
  author,
  authorImage,
  description,
  image,
  moreLinkText,
  publishDate,
  size,
  title,
}) => (
  <div
    className={classNames(
      'group relative ',
      'flex flex-row gap-5',
      'p-3',
      'lg:h-full lg:flex-col lg:gap-0 lg:p-0'
    )}
  >
    <Image
      src={image}
      width="1000"
      height="600"
      alt=""
      className={classNames(
        'inline-block h-full w-1/3',
        'lg:relative lg:top-0 lg:mb-3 lg:w-full lg:rounded lg:rounded-b-3xl lg:transition-all lg:group-hover:-top-[4.5rem]',
        'lg:h-auto'
      )}
    />
    <section
      className={classNames(
        'lg:relative lg:top-0 lg:transition-all lg:group-hover:-top-[4.5rem]',
        { 'lg:px-5 lg:pt-1 lg:pb-5': !size },
        { 'lg:px-8 lg:pt-4 lg:pb-5': size === 'lg' }
      )}
    >
      <h2
        className={classNames(
          'font-bold leading-tight text-emulsifyBlue-800',
          { 'text-xl': !size },
          { 'text-xl lg:text-4xl': size === 'lg' }
        )}
      >
        {title}
      </h2>

      {description && size === 'lg' && (
        <p className="mt-5 hidden text-base leading-snug lg:block">
          {description}
        </p>
      )}

      {author && (
        <p
          className={classNames(
            'flex flex-row items-center gap-2 text-sm font-semibold uppercase leading-tight text-gray-600',
            'md:flex-col md:items-start',
            'lg:flex-row lg:items-center',
            { 'mt-2 text-xs md:text-sm': !size },
            { 'mt-2 text-xs md:text-sm': size === 'lg' }
          )}
        >
          <span className="flex flex-row items-center gap-1 md:order-2 lg:order-1">
            {authorImage && (
              <Image
                src={authorImage}
                alt={author}
                width={size ? '20' : '20'}
                height={size ? '20' : '20'}
                className="rounded-full"
              />
            )}
            {author}
          </span>{' '}
          <span
            className={classNames(
              'text-gray-500 ',
              { 'md:text-base lg:text-sm': !size },
              { 'md:text-base': size === 'lg' },
              'lg:order-2'
            )}
          >
            {publishDate}
          </span>
        </p>
      )}
    </section>
    <div
      className={classNames(
        'wave-bkg-mobile absolute -bottom-[4.5rem] left-0 right-0 hidden h-[4.5rem] w-full bg-emulsifyBlue-400 bg-[length:60%] px-5 pt-3 font-bold text-emulsifyBlue-900 transition-all group-hover:-bottom-0 lg:block',
        { 'text-2xl': size === 'lg' },
        { 'lg:text-xl': !size }
      )}
    >
      {moreLinkText} <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
    </div>
  </div>
)

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Emulsify Blog</title>
        <meta property="og:title" content="Emulsify Blog" key="title" />
      </Head>
      <div>
        <ul
          className={classNames(
            'flex flex-col gap-3',
            'md:grid md:grid-cols-2 md:gap-3',
            'lg:grid lg:grid-cols-3 lg:gap-3'
          )}
        >
          {posts
            .filter((post) => post.fields.publishToBlog === true)
            .map((post, i) => (
              <li
                key={post.sys.id}
                className={classNames(
                  'flex flex-col items-stretch',
                  'rounded border-4 border-solid border-emulsifyBlue-100 bg-emulsifyBlue-100 shadow lg:overflow-hidden lg:rounded-b-xl',
                  { 'lg:col-span-2 lg:row-span-2': i === 0 }
                )}
              >
                <Link href={`/blog/${post.fields.slug}`} className="h-full">
                  <BlogCard
                    title={post.fields.title}
                    image={`https:${post.fields.heroImage.fields.file.url}`}
                    moreLinkText={post.fields.moreLinkText}
                    size={i === 0 ? 'lg' : ''}
                    author={post.fields.author.fields.name}
                    authorImage={`https:${post.fields.author.fields.photo.fields.file.url}`}
                    publishDate={eventFormatter(post.fields.publishDate)}
                    description={post.fields.description}
                  />
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

Blog.getInitialProps = async () => {
  const posts = await getBlogPosts()

  return { posts }
}
