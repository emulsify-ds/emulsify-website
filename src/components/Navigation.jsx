import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/sharp-solid-svg-icons'
import { useState, Fragment } from 'react'
import classNames from 'classnames'

const navBorder = 'border-l border-gray-300 dark:border-emulsifyBlue-800'

const Submenu = ({ items, open }) => (
  <ul className={classNames('my-2 ml-4 text-xl', navBorder, { hidden: !open })}>
    <MenuItems items={items} />
  </ul>
)

const MenuItemWithSubmenu = ({ item }) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <>
      <span className="flex items-center leading-none">
        <Link
          href={item.href}
          className={clsx(
            'font-width-75 pl-3.5',
            item.href === router.pathname
              ? 'font-semibold text-violet-800 dark:text-emulsifyBlue-100'
              : 'text-gray-700 hover:text-emulsifyBlue-700 dark:text-emulsifyBlue-300  dark:hover:text-emulsifyBlue-100',
          )}
        >
          {item.title}
        </Link>
        <button
          type="button"
          className="ml-auto "
          onClick={() => setOpen((current) => !current)}
        >
          <span className="hidden">Expand</span>
          <FontAwesomeIcon
            icon={open ? faCaretUp : faCaretDown}
            className="text-emulsifyBlue-700 hover:text-emulsifyBlue-500 dark:text-emulsifyBlue-500 dark:hover:text-emulsifyBlue-200"
          />
        </button>
      </span>
      <Submenu items={item.children} open={open} />
    </>
  )
}

const MenuItems = ({ items }) => {
  const router = useRouter()

  return (
    <>
      {items.map((item) => (
        <li key={item.href} className="relative py-2">
          {item.href && item.children ? (
            <MenuItemWithSubmenu item={item} />
          ) : (
            <span className="flex leading-none">
              <Link
                href={item.href}
                className={clsx(
                  'font-width-75 block w-full pl-3.5',
                  item.href === router.pathname
                    ? 'font-semibold text-violet-800 dark:text-violet-200'
                    : 'text-gray-700 hover:text-emulsifyBlue-700 dark:text-emulsifyBlue-300  dark:hover:text-emulsifyBlue-100',
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
  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      {navigation.map((section, i) => (
        <Fragment key={i}>
          <h2
            className={classNames(
              'font-width-75 mt-5 text-2xl font-semibold uppercase text-emulsifyBlue-800 dark:text-emulsifyBlue-100',
              { 'mt-0': i === 0 },
            )}
          >
            {section.title}
          </h2>
          <Submenu items={section.links} open />
        </Fragment>
      ))}
    </nav>
  )
}
