import { Prose } from '@/components/Prose'

export function LayoutWebinar({ children, title, useProse = true }) {
  return (
    <div className="wave-body">
      <div className="relative mx-auto flex justify-center">
        <div className="w-full">
          <article>
            {title && (
              <header className="mb-9">
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
      </div>
    </div>
  )
}
