import classNames from 'classnames'
import { Prose } from '@/components/Prose'

export function LayoutBlogLP({ children, useProse = true }) {
  return (
    <div>
      <div
        className={classNames(
          'relative mx-auto flex justify-center',
          'sm:px-2 lg:px-8 xl:px-12',
          'bg-gradient-to-b from-emulsifyBlue-300 via-violet-300 to-emulsifyBlue-400',
          'dark:to-emulsifyBlue-90 dark:bg-gradient-to-b dark:from-emulsifyBlue-800 dark:via-violet-800'
        )}
      >
        <div
          className={classNames(
            'w-full',
            'max-w-2xl px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16'
          )}
        >
          <article>
            {useProse ? <Prose>{children}</Prose> : <div>{children}</div>}
          </article>
        </div>
      </div>
    </div>
  )
}
