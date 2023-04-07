import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/sharp-solid-svg-icons'
import { useState } from 'react'
import classNames from 'classnames'

const navBorder = 'border-l border-gray-300 dark:border-slate-800'

const Submenu = ({ items, open }) => {
  console.log('Submenu', items)

  return (
    <ul className={classNames('my-2 ml-4', navBorder, { hidden: !open })}>
      <MenuItems items={items} />
    </ul>
  )
}

const MenuItemWithSubmenu = ({ item }) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <>
      <span className="flex items-center leading-none">
        <Link
          href={item.href}
          className={clsx(
            'font-width-75 pl-3.5 text-lg',
            item.href === router.pathname
              ? 'font-semibold text-emulsifyBlue-900 '
              : 'text-gray-700 hover:text-emulsifyBlue-700 dark:text-slate-400  dark:hover:text-slate-300'
          )}
        >
          {item.title}
        </Link>
        <button
          type="button"
          className="ml-auto "
          onClick={() => setOpen((current) => !current)}
        >
          <FontAwesomeIcon
            icon={open ? faCaretUp : faCaretDown}
            className="text-lg text-emulsifyBlue-700"
          />
        </button>
      </span>
      <Submenu items={item.children} open={open} />
    </>
  )
}

const MenuItems = ({ items }) => {
  console.log('MenuItems', items)
  const router = useRouter()

  return (
    <>
      {items.map((item) => (
        <li key={item.href} className="relative">
          {console.log('item', item)}
          {item.href && item.children ? (
            <MenuItemWithSubmenu item={item} />
          ) : (
            <span className="flex">
              <Link
                href={item.href}
                className={clsx(
                  'font-width-75 block w-full pl-3.5 text-lg',
                  item.href === router.pathname
                    ? 'font-semibold text-emulsifyBlue-900 '
                    : 'text-gray-700 hover:text-emulsifyBlue-700 dark:text-slate-400  dark:hover:text-slate-300'
                )}
              >
                {item.title}
              </Link>
            </span>
          )}
        </li>
      ))}
    </>
  )
}

export function Navigation({ navigation, className }) {
  const router = useRouter()

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      {/* <ul className="space-y-9"> */}
      {navigation.map((section) => (
        <>
          <h2 className="font-width-75 text-xl font-bold uppercase text-emulsifyBlue-700 dark:text-white">
            {section.title}
          </h2>
          <Submenu items={section.links} open />
        </>
      ))}
      {/* {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-width-75 text-xl font-bold uppercase text-emulsifyBlue-700 dark:text-white">
              {section.title}
            </h2>

            <ul
              className={clsx(
                'space-y-2lg:mt-4 mt-2 ml-1 lg:space-y-4 ',
                navBorder
              )}
            >
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <div className="flex">
                    <Link
                      href={link.href}
                      className={clsx(
                        'font-width-75 block w-full pl-3.5 text-lg',
                        link.href === router.pathname
                          ? 'font-semibold text-emulsifyBlue-900 '
                          : 'text-gray-700 hover:text-emulsifyBlue-700 dark:text-slate-400  dark:hover:text-slate-300'
                      )}
                    >
                      {link.title}
                    </Link>
                    <button type="button">Open</button>
                  </div>
                  {link.children && (
                    <ul className={clsx('my-1 ml-4', navBorder)}>
                      {link.children.map((firstChild) => (
                        <li>
                          <Link
                            href={firstChild.href}
                            className={clsx(
                              'font-width-75 block w-full pl-3.5 text-lg',
                              firstChild.href === router.pathname
                                ? 'font-semibold text-emulsifyBlue-900 '
                                : 'text-gray-700 hover:text-emulsifyBlue-700 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
                            )}
                          >
                            {firstChild.title}
                          </Link>
                          {firstChild.children && (
                            <ul className={clsx('my-1 ml-4', navBorder)}>
                              {firstChild.children.map((secondChild) => (
                                <li>
                                  <Link
                                    href={secondChild.href}
                                    className={clsx(
                                      'font-width-75 block w-full pl-3.5 text-lg before:pointer-events-none before:absolute before:-left-[0.219rem] before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                                      secondChild.href === router.pathname
                                        ? 'font-semibold text-emulsifyBlue-900 '
                                        : 'text-gray-700 hover:text-emulsifyBlue-700 hover:before:block dark:text-slate-400  dark:hover:text-slate-300'
                                    )}
                                  >
                                    {secondChild.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))} 
      </ul> */}
    </nav>
  )
}
