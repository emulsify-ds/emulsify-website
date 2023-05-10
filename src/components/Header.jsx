import { useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBolt } from '@fortawesome/sharp-solid-svg-icons'
import { faGithub, faSlack } from '@fortawesome/free-brands-svg-icons'
import { Logo } from '@/components/Logo'
import { MobileNavigation } from '@/components/MobileNavigation'
import { navigation } from '@/data/navigation'
import { ThemeSelector } from './ThemeSelector'
import { Search } from './Search'

export function Header({ transparent }) {
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
        'relative z-50',
        'sticky top-0 left-0 right-0 w-screen px-4 py-5 sm:px-6 lg:px-8',
        'transition duration-500',
        { 'bg-transparent': transparent },
        {
          'wave-header bg-emulsifyBlue-800 dark:bg-emulsifyBlue-900':
            !transparent,
        }
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
              {/* <li>
                <Link
                  href="/"
                  className="flex-flow group flex items-center gap-1"
                >
                  <FontAwesomeIcon icon={faBolt} className="text-orange-600" />
                  <span className="whitespace-nowrap border-b border-solid border-emulsifyBlue-400 group-hover:border-emulsifyBlue-200">
                    Quick Start
                  </span>
                </Link>
              </li> */}
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
          <Link
            href="https://join.slack.com/t/emulsify/shared_invite/zt-1ujfwwcvr-ynvUPkEgWYuaby~wPaHt8g"
            className="text-4xl text-white transition-colors hover:text-emulsifyBlue-200"
          >
            <FontAwesomeIcon icon={faSlack} />
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
