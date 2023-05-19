import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dialog } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeftLong,
  faArrowRightLong,
  faBarsStaggered,
  faXmarkCircle,
  faBolt,
} from '@fortawesome/sharp-solid-svg-icons'
import clsx from 'clsx'
import { Navigation } from '@/components/Navigation'
import { Search } from './Search'

export function MobileNavigation({ navigation }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [whichNavToShow, setWhichNavToShow] = useState('primary')

  useEffect(() => {
    if (!isOpen) return

    function onRouteChange() {
      setIsOpen(false)
    }

    function determineMenuToShow() {
      const path = router.pathname

      if (router.pathname.startsWith('/doc')) {
        setWhichNavToShow('docs')
      }
    }

    determineMenuToShow()

    router.events.on('routeChangeComplete', onRouteChange)
    router.events.on('routeChangeError', onRouteChange)

    return () => {
      router.events.off('routeChangeComplete', onRouteChange)
      router.events.off('routeChangeError', onRouteChange)
    }
  }, [router, isOpen])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative"
        aria-label="Open navigation"
      >
        <FontAwesomeIcon
          icon={faBarsStaggered}
          className="w-[24px] text-2xl text-emulsifyBlue-300"
        />
      </button>
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        className="fixed inset-0 z-50 flex items-start overflow-y-auto bg-emulsifyBlue-900/50 pr-10 backdrop-blur lg:hidden"
        aria-label="Navigation"
      >
        <Dialog.Panel className="wave-background-mobile min-h-full w-full max-w-xs px-4 pt-7 pb-12 sm:px-6">
          <div className="mb-10 flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
              className="flex items-center gap-1 text-lg font-semibold leading-none text-emulsifyBlue-800 dark:text-emulsifyBlue-300"
            >
              <FontAwesomeIcon
                icon={faXmarkCircle}
                className="relative top-[-1px] w-[24px] text-2xl"
              />
              CLOSE
            </button>
          </div>
          {whichNavToShow === 'docs' && (
            <div>
              <button
                type="button"
                className="mb-3 font-semibold uppercase text-emulsifyBlue-600 hover:text-emulsifyBlue-700 dark:text-emulsifyBlue-300 dark:hover:text-emulsifyBlue-400"
                onClick={() => {
                  setWhichNavToShow('primary')
                }}
              >
                <FontAwesomeIcon icon={faArrowLeftLong} className="mr-2" />
                Back
              </button>
              <h2 className="font-width-75 text-5xl font-semibold uppercase text-emulsifyBlue-900 dark:text-emulsifyBlue-200">
                Docs
              </h2>
              <Navigation navigation={navigation} className="mt-2 pr-3" />
            </div>
          )}
          {whichNavToShow === 'primary' && (
            <div>
              <nav
                className={clsx(
                  'font-width-75 text-3xl font-semibold uppercase text-emulsifyBlue-800 dark:text-emulsifyBlue-200'
                )}
              >
                <ul className={clsx('flex-flow flex flex-col gap-5')}>
                  {/* <li>
                    <Link
                      href="/"
                      className="flex-flow group flex items-center gap-1"
                    >
                      <span className="whitespace-nowrap border-b border-solid border-emulsifyBlue-400 group-hover:border-emulsifyBlue-200">
                        Quick Start
                      </span>
                      <FontAwesomeIcon
                        icon={faBolt}
                        className="text-orange-600"
                      />
                    </Link>
                  </li> */}
                  <li className="flex-flow flex items-center leading-none">
                    <Link
                      href="/docs"
                      className={clsx(
                        'border-b border-solid border-emulsifyBlue-400 pb-1 transition-all hover:border-emulsifyBlue-200'
                      )}
                    >
                      Docs
                    </Link>
                    <button
                      type="button"
                      className="font-width-75 mb-3 font-semibold uppercase text-emulsifyBlue-600 hover:text-emulsifyBlue-700 dark:text-emulsifyBlue-300 dark:hover:text-emulsifyBlue-400"
                      onClick={() => {
                        setWhichNavToShow('docs')
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faArrowRightLong}
                        className="ml-2 text-xl"
                      />
                    </button>
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
                    <Search className="dark:text-emulsifyBlue-200" />
                  </li>
                </ul>
              </nav>
            </div>
          )}
          {/*  */}
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
