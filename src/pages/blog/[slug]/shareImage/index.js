import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import getBlogPosts from '../../../../utils/getContentful'
import bkg from '../../../../images/SharingImageBkg.png'
import logo from '../../../../images/emulsifyLogo.svg'

export default function Share({ posts }) {
  const router = useRouter()
  const { slug } = router.query
  const [content, setContent] = useState('')

  useEffect(() => {
    async function getBody() {
      const data = posts.filter((post) => post.fields.slug === slug)
      setContent(data[0].fields)
    }
    getBody()
  }, [posts, slug])

  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      {content && (
        <div className="relative h-[630px] w-[1200px] bg-white">
          <Image
            src={bkg}
            width={1200}
            height={630}
            className="absolute inset-0"
          />
          <div className="relative z-10 flex h-full flex-col leading-none text-white">
            <h1 className="p-24 pb-0 text-[83px] font-black">
              {content.title}
            </h1>
            <div className="mt-auto flex flex-row items-center gap-4 px-24 pb-10">
              <Image
                src={`https://${content.author.fields.photo.fields.file.url}`}
                width={125}
                height={125}
                className="rounded-full border-2 border-solid border-white"
                alt=""
              />
              <span className="text-[48px] font-bold">
                {content.author.fields.name}
              </span>
              <Image
                src={logo}
                width={300}
                height={102}
                alt=""
                className="ml-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
// export default function BlogPost({ posts }) {
//   const router = useRouter()
//   const { slug } = router.query
//   const [content, setContent] = useState('')

//   useEffect(() => {
//     async function getBody() {
//       const data = posts.filter((post) => post.fields.slug === slug)
//       const ast = Markdoc.parse(data[0].fields.body)
//       const processedContent = Markdoc.transform(ast, config)
//       const body = Markdoc.renderers.react(processedContent, React, {
//         components: {
//           // Add markdoc components. Use the same string found in the render method.
//           Callout,
//           GithubGist,
//           YouTube,
//         },
//       })
//       setContent({ body, data: data[0] })
//     }
//     getBody()
//   }, [posts, slug])

//   return (
//     <div>
//       {content && (
//         <>
//           <div
//             className={classNames(
//               'p-9',
//               'bg-emulsifyBlue-600/10 from-emulsifyBlue-800 to-emulsifyBlue-900  dark:bg-gradient-to-b'
//             )}
//           >
//             <div className="mx-auto grid max-w-8xl grid-cols-2 gap-5 sm:px-2 lg:px-8 xl:px-12">
//               <div className="self-center">
//                 <h1 className="text-4xl font-bold text-emulsifyBlue-900 dark:text-emulsifyBlue-200">
//                   {content.data.fields.title}
//                 </h1>
//                 <p
//                   className={classNames(
//                     'flex flex-row items-center gap-2 text-sm font-semibold uppercase leading-tight text-gray-600 dark:text-gray-100',
//                     'md:flex-col md:items-start',
//                     'lg:flex-row lg:items-center',
//                     'mt-2 text-xs md:text-sm'
//                   )}
//                 >
//                   <span className="flex flex-row items-center gap-1 md:order-2 lg:order-1">
//                     {content.data.fields.author.fields.photo.fields.file
//                       .url && (
//                       <Image
//                         src={`https://${content.data.fields.author.fields.photo.fields.file.url}`}
//                         alt={content.data.fields.author}
//                         width="20"
//                         height="20"
//                         className="rounded-full"
//                       />
//                     )}
//                     {content.data.fields.author.fields.name}
//                   </span>{' '}
//                   <span
//                     className={classNames(
//                       'text-gray-500 dark:text-gray-200',
//                       'md:text-base lg:text-sm',
//                       'lg:order-2'
//                     )}
//                   >
//                     {eventFormatter(content.data.fields.publishDate)}
//                   </span>
//                 </p>
//               </div>
//               <Image
//                 src={`https://${content.data.fields.heroImage.fields.file.url}`}
//                 alt={content.data.fields.author}
//                 width="700"
//                 height="400"
//                 className=""
//               />
//             </div>
//           </div>

//           <Prose className="mx-auto mt-10 mb-52 max-w-3xl">
//             {content.body}
//           </Prose>
//         </>
//       )}
//     </div>
//   )
// }

Share.getInitialProps = async () => {
  const posts = await getBlogPosts()
  return { posts }
}
