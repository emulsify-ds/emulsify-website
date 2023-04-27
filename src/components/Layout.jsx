/* eslint-disable no-shadow */
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/sharp-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'
import { Hero } from '@/components/Hero'
import { Logo } from '@/components/Logo'
import { MobileNavigation } from '@/components/MobileNavigation'
import { Navigation } from '@/components/Navigation'
import { Prose } from '@/components/Prose'
import { navigation } from '@/data/navigation'
import { ThemeSelector } from './ThemeSelector'
import { Search } from './Search'
import { Footer } from './Footer'

function Header({ navigation }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [])

  return (
    <header
      className={clsx(
        'wave-header relative z-50',
        'sticky top-0 left-0 right-0 w-screen px-4 py-5 sm:px-6 lg:px-8',
        'transition duration-500',
        'bg-emulsifyBlue-800',
        'dark:bg-emulsifyBlue-900'
      )}
    >
      <div className="mx-auto flex max-w-8xl flex-wrap items-center gap-5 sm:px-2 md:justify-between md:gap-0 lg:px-8 xl:px-12">
        <div className="md:hidden">
          <MobileNavigation navigation={navigation} />
        </div>
        <div className="relative flex items-center">
          <Link href="/" aria-label="Home page">
            <Logo className="relative top-[4px] block h-9 w-auto fill-slate-700 dark:fill-sky-100 md:min-h-[60px]" />
          </Link>
        </div>
        <div className="relative ml-10 hidden items-center md:flex">
          <nav
            className={clsx(
              'font-width-75 text-3xl font-semibold uppercase text-white'
            )}
          >
            <ul className={clsx('flex-flow flex gap-8')}>
              <li>
                <Link
                  href="/"
                  className="flex-flow group flex items-center gap-1"
                >
                  <FontAwesomeIcon icon={faBolt} className="text-orange-600" />
                  <span className="whitespace-nowrap border-b border-solid border-emulsifyBlue-400 group-hover:border-emulsifyBlue-200">
                    Quick Start
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className={clsx(
                    'border-b border-solid border-emulsifyBlue-400 pb-1 transition-all hover:border-emulsifyBlue-200'
                  )}
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="border-b border-solid border-emulsifyBlue-400 pb-1 transition-all hover:border-emulsifyBlue-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Search />
              </li>
            </ul>
          </nav>
        </div>
        <div className="relative flex flex-grow basis-0 items-center justify-end gap-6 sm:gap-8">
          <Link
            href="https://github.com/emulsify-ds"
            className="text-4xl text-white transition-colors hover:text-emulsifyBlue-200"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <ThemeSelector className="relative z-10" />
        </div>
      </div>
      {/* 
      
      <div className="-my-5 mr-6 sm:mr-8 md:mr-0">
        <Search />
      </div>
       */}
    </header>
  )
}

function useTableOfContents(tableOfContents) {
  const [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id)

  const getHeadings = useCallback(
    (tableOfContents) =>
      tableOfContents
        .flatMap((node) => [node.id, ...node.children.map((child) => child.id)])
        .map((id) => {
          const el = document.getElementById(id)
          if (!el) return

          const style = window.getComputedStyle(el)
          const scrollMt = parseFloat(style.scrollMarginTop)

          const top = window.scrollY + el.getBoundingClientRect().top - scrollMt
          return { id, top }
        }),
    []
  )

  useEffect(() => {
    if (tableOfContents.length === 0) return
    const headings = getHeadings(tableOfContents)
    function onScroll() {
      const top = window.scrollY
      let current = headings[0].id
      for (const heading of headings) {
        if (top >= heading.top) {
          current = heading.id
        } else {
          break
        }
      }
      setCurrentSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [getHeadings, tableOfContents])

  return currentSection
}

export function Layout({
  children,
  title,
  tableOfContents,
  type,
  useProse = true,
}) {
  const router = useRouter()
  const section = navigation.find((section) =>
    section.links.find((link) => link.href === router.pathname)
  )
  const currentSection = useTableOfContents(tableOfContents)

  function isActive(section) {
    if (section.id === currentSection) {
      return true
    }
    if (!section.children) {
      return false
    }
    return section.children.findIndex(isActive) > -1
  }

  return (
    <>
      <Header navigation={navigation} />

      {/* {isHomePage && <Hero />} */}

      <div
        className={classNames(
          'relative mx-auto flex justify-center sm:px-2 lg:px-8 xl:px-12',
          { 'max-w-8xl': type === 'docs' },
          {
            'bg-gradient-to-b from-emulsifyBlue-300 via-violet-300 to-emulsifyBlue-400':
              type === 'blog',
          }
          // {
          //   'bg-gradient-to-b from-emulsifyBlue-800 via-violet-900 to-emulsifyBlue-900':
          //     type === 'blog',
          // }
        )}
      >
        {type === 'docs' && (
          <div className="hidden lg:relative lg:block lg:flex-none">
            <div className="absolute inset-y-0 right-0 w-[50vw] bg-emulsifyBlue-600/10 dark:bg-emulsifyBlue-900/10" />
            <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden py-16 pl-0.5">
              <Navigation
                navigation={navigation}
                className="w-64 pr-8 xl:w-72 xl:pr-16"
              />
            </div>
          </div>
        )}

        <div className="w-full max-w-2xl px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
          <article>
            {(title || section) && (
              <header className="mb-9">
                {section && (
                  <p className="text-xl font-black uppercase text-emulsifyBlue-700 dark:text-emulsifyBlue-300">
                    {section.title}
                  </p>
                )}
                {title && (
                  <h1 className="bg-gradient-to-b text-5xl font-bold tracking-tight text-emulsifyBlue-900 dark:text-white ">
                    {title}
                  </h1>
                )}
              </header>
            )}
            {useProse ? <Prose>{children}</Prose> : <div>{children}</div>}
          </article>
        </div>

        {type === 'docs' && (
          <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
            <nav aria-labelledby="on-this-page-title" className="w-56">
              {tableOfContents.length > 0 && (
                <>
                  <h2
                    id="on-this-page-title"
                    className="font-width-75 font-display text-xl font-semibold uppercase text-emulsifyBlue-800 dark:text-emulsifyBlue-100"
                  >
                    On this page
                  </h2>
                  <ol className="mt-4 space-y-3 text-sm">
                    {tableOfContents.map((section) => (
                      <li key={section.id}>
                        <h3>
                          <Link
                            href={`#${section.id}`}
                            className={clsx(
                              isActive(section)
                                ? 'font-width-75 text-xl font-semibold leading-none text-violet-800 dark:text-emulsifyBlue-100'
                                : 'font-width-75 text-xl font-normal leading-none text-gray-700 hover:text-emulsifyBlue-700 dark:text-emulsifyBlue-300  dark:hover:text-emulsifyBlue-100'
                            )}
                          >
                            {section.title}
                          </Link>
                        </h3>
                        {section.children.length > 0 && (
                          <ol className="font-width-75 mt-2 pl-3 text-lg font-normal text-gray-700 dark:text-slate-400">
                            {section.children.map((subSection) => (
                              <li key={subSection.id}>
                                <Link
                                  href={`#${subSection.id}`}
                                  className={
                                    isActive(subSection)
                                      ? 'font-semibold leading-none text-violet-800 dark:text-emulsifyBlue-100'
                                      : 'leading-none hover:text-emulsifyBlue-700 dark:text-emulsifyBlue-300  dark:hover:text-emulsifyBlue-100'
                                  }
                                >
                                  {subSection.title}
                                </Link>
                              </li>
                            ))}
                          </ol>
                        )}
                      </li>
                    ))}
                  </ol>
                </>
              )}
            </nav>
          </div>
        )}
      </div>

      <Footer />
    </>
  )
}
