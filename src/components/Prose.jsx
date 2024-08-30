import clsx from 'clsx'

export function Prose({ as: Component = 'div', className, ...props }) {
  return (
    <Component
      className={clsx(
        'prose prose-emulsify max-w-none dark:prose-invert lg:prose-lg dark:text-emulsifyBlue-200',
        // headings
        'prose-headings:font-bold',
        'prose-h3:text-gray-500',
        'dark:prose-headings:text-emulsifyBlue-200',
        // lead
        'prose-lead:text-gray-500 dark:prose-lead:text-slate-400',
        // links
        'prose-a:font-semibold dark:prose-a:text-sky-400',
        // link underline
        'prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px]',
        // pre
        'prose-pre:rounded-xl prose-pre:bg-gray-100 dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10',
        // code
        'prose-code:rounded-lg prose-code:bg-gray-100 prose-code:font-normal prose-code:text-gray-600',
        'prose-code:px-2 prose-code:py-1',
        'dark:prose-code:rounded-lg dark:prose-code:bg-gray-600 dark:prose-code:text-emulsifyBlue-200',
        // hr
        'dark:prose-hr:border-slate-800',
        className,
      )}
      {...props}
    />
  )
}
