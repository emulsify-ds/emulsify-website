import Head from 'next/head'
import { slugifyWithCounter } from '@sindresorhus/slugify'
import { useRouter } from 'next/router'
import { LayoutDocs } from '@/components/LayoutDocs'
import { LayoutBlogLP } from '@/components/LayoutBlogLP'
import { LayoutBlogArticle } from '@/components/LayoutBlogArticle'
import 'focus-visible'
import '@/styles/tailwind.css'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import sharingImageDocs from '../images/sharing-image-docs.png'
import sharingImageBlogLP from '../images/sharing-image-blog.png'
import sharingImageHome from '../images/sharing-image-homepage.png'
import favicon from '../images/favicon.png'

function getNodeText(node) {
  let text = ''
  for (const child of node.children ?? []) {
    if (typeof child === 'string') {
      text += child
    }
    text += getNodeText(child)
  }
  return text
}

function collectHeadings(nodes, slugify = slugifyWithCounter()) {
  const sections = []

  for (const node of nodes) {
    if (node.name === 'h2' || node.name === 'h3') {
      const title = getNodeText(node)
      if (title) {
        const id = slugify(title)
        node.attributes.id = id
        if (node.name === 'h3') {
          if (!sections[sections.length - 1]) {
            throw new Error(
              'Cannot add `h3` to table of contents without a preceding `h2`'
            )
          }
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
          })
        } else {
          sections.push({ ...node.attributes, title, children: [] })
        }
      }
    }

    sections.push(...collectHeadings(node.children ?? [], slugify))
  }

  return sections
}

export default function App({ Component, pageProps }) {
  const title = pageProps.markdoc?.frontmatter.title
  const router = useRouter()

  let type = ''
  let useProse = ''
  if (router.pathname.startsWith('/docs')) {
    type = 'docs'
    useProse = true
  }
  if (router.pathname.startsWith('/blog')) {
    type = 'blogLandingPage'
    useProse = false
  }
  if (router.pathname.startsWith('/blog/')) {
    type = 'blog'
    useProse = false
  }
  if (router.pathname.includes('/shareImage')) {
    type = 'none'
    useProse = false
  }
  if (router.pathname === '/') {
    type = 'home'
    useProse = false
  }

  const pageTitle =
    `${pageProps.markdoc?.frontmatter.pageTitle} • Emulsify Docs` ||
    `${pageProps.markdoc?.frontmatter.title} • Emulsify Docs`

  const description = pageProps.markdoc?.frontmatter.description

  const tableOfContents = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : []

  return (
    <>
      <Head>
        <title>
          {router.pathname === '/'
            ? 'Emulsify • Build Beautiful Design Systems with Ease'
            : pageTitle}
        </title>
        {description && <meta name="description" content={description} />}
        {type === 'docs' && (
          <meta property="og:image" content={sharingImageDocs.src} />
        )}
        {type === 'blogLandingPage' && (
          <meta property="og:image" content={sharingImageBlogLP.src} />
        )}
        {type === 'home' && (
          <meta property="og:image" content={sharingImageHome.src} />
        )}
        <link rel="icon" href={favicon.src} />
      </Head>
      <Header transparent={type === 'home'} />

      {type === 'docs' && (
        <LayoutDocs
          title={title}
          tableOfContents={tableOfContents}
          type={type}
          useProse={useProse}
        >
          <Component {...pageProps} />
        </LayoutDocs>
      )}

      {type === 'blogLandingPage' && (
        <LayoutBlogLP title={title} type={type} useProse={useProse}>
          <Component {...pageProps} />
        </LayoutBlogLP>
      )}

      {type === 'blog' && (
        <LayoutBlogArticle title={title} type={type} useProse={useProse}>
          <Component {...pageProps} />
        </LayoutBlogArticle>
      )}

      {type === 'home' && <Component {...pageProps} />}

      <Footer />
    </>
  )
}
