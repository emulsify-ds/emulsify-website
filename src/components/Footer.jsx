import clsx from 'clsx'
import Link from 'next/link'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer
      className={clsx(
        'wave-footer bg-emulsifyBlue-900 text-emulsifyBlue-100',
        'pt-10 pb-36'
      )}
    >
      <div className="mx-auto flex max-w-8xl flex-wrap items-center gap-5 sm:px-2 md:justify-between md:gap-0 lg:px-8 xl:px-12">
        <Link href="/" aria-label="Home page">
          <Logo className="relative top-[4px] block h-9 w-auto fill-slate-700 dark:fill-sky-100 md:min-h-[60px]" />
        </Link>
        This is the footer.
      </div>
    </footer>
  )
}
