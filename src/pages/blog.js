import Image from 'next/image'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/sharp-solid-svg-icons'
import Link from 'next/link'
import getBlogPosts from '../utils'

const BlogCard = ({ title, image, moreLinkText, size }) => (
  <div className="group relative h-full overflow-hidden rounded rounded-b-xl border border-solid border-emulsifyBlue-100 bg-emulsifyBlue-100 shadow">
    <Image
      src={image}
      width="1000"
      height="600"
      alt=""
      className="relative top-0 mb-3 rounded rounded-b-3xl transition-all group-hover:-top-[4.5rem]"
    />
    <section
      className={classNames(
        'relative top-0  transition-all group-hover:-top-[4.5rem] ',
        { 'px-5 pt-1 pb-5': !size },
        { 'px-8 pt-4 pb-5': size === 'lg' }
      )}
    >
      <h2
        className={classNames(
          'font-bold leading-tight text-emulsifyBlue-800',
          { 'text-xl': !size },
          { 'text-4xl': size === 'lg' }
        )}
      >
        {title}
      </h2>
    </section>
    <div className="wave-bkg-mobile absolute -bottom-[4.5rem] left-0 right-0 block h-[4.5rem] w-full bg-emulsifyBlue-400 bg-[length:60%] px-5 pt-3 font-bold text-emulsifyBlue-900 transition-all group-hover:-bottom-0">
      {moreLinkText} <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
    </div>
  </div>
)

export default function Blog({ posts }) {
  return (
    <div>
      <ul className="xl:grid xl:grid-cols-8 xl:gap-9">
        {posts
          .filter((post) => post.fields.publishToBlog === true)
          .map((post, i) => (
            <li
              key={post.sys.id}
              className={classNames(
                'flex flex-col items-stretch',
                {
                  'xl:col-span-2': i !== 0,
                },
                {
                  'xl:col-span-4 xl:row-span-2': i === 0,
                }
              )}
            >
              <Link href={`/blog/${post.fields.slug}`} className="h-full">
                <BlogCard
                  title={post.fields.title}
                  image={`https:${post.fields.heroImage.fields.file.url}`}
                  moreLinkText={post.fields.moreLinkText}
                  size={i === 0 ? 'lg' : ''}
                />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

Blog.getInitialProps = async () => {
  const posts = await getBlogPosts()

  return { posts }
}
