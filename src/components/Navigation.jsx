import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export function Navigation({ navigation, className }) {
  const router = useRouter()

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-width-75 text-xl font-bold uppercase text-emulsifyBlue-700 dark:text-white">
              {section.title}
            </h2>
            <ul className="mt-2 ml-1 space-y-2 border-l border-gray-700 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-gray-300">
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={clsx(
                      'font-width-75 block w-full pl-3.5 text-lg before:pointer-events-none before:absolute before:-left-[0.219rem] before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                      link.href === router.pathname
                        ? 'font-semibold text-emulsifyBlue-900 before:bg-emulsifyBlue-600'
                        : 'text-gray-700 before:hidden before:bg-emulsifyBlue-700 hover:text-emulsifyBlue-700 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
