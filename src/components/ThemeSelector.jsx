import { useEffect, useState } from 'react'
import {
  Listbox,
  Label,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/react'
import clsx from 'clsx'

const themes = [
  { name: 'Light', value: 'light', icon: LightIcon },
  { name: 'Dark', value: 'dark', icon: DarkIcon },
  { name: 'System', value: 'system', icon: SystemIcon },
]

function LightIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V1Zm4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2.657-5.657a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm-1.415 11.313-.707-.707a1 1 0 0 1 1.415-1.415l.707.708a1 1 0 0 1-1.415 1.414ZM16 7.999a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM7 14a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm-2.536-2.464a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm0-8.486A1 1 0 0 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707ZM3 8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Z"
      />
    </svg>
  )
}

function DarkIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
      />
    </svg>
  )
}

function SystemIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.5l.31 1.242c.084.333.36.573.63.808.091.08.182.158.264.24A1 1 0 0 1 11 15H5a1 1 0 0 1-.704-1.71c.082-.082.173-.16.264-.24.27-.235.546-.475.63-.808L5.5 11H4a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
      />
    </svg>
  )
}

export function ThemeSelector(props) {
  const [selectedTheme, setSelectedTheme] = useState()

  useEffect(() => {
    if (selectedTheme) {
      document.documentElement.setAttribute('data-theme', selectedTheme.value)
    } else {
      setSelectedTheme(
        themes.find(
          (theme) =>
            theme.value === document.documentElement.getAttribute('data-theme'),
        ),
      )
    }
  }, [selectedTheme])

  useEffect(() => {
    const handler = () =>
      setSelectedTheme(
        themes.find(
          (theme) => theme.value === (window.localStorage.theme ?? 'system'),
        ),
      )

    window.addEventListener('storage', handler)

    return () => window.removeEventListener('storage', handler)
  }, [])

  return (
    <Listbox
      as="div"
      value={selectedTheme}
      onChange={setSelectedTheme}
      {...props}
    >
      <Label className="sr-only">Theme</Label>
      <ListboxButton
        className={clsx(
          'flex size-6 items-center justify-center rounded-lg',
          'bg-emulsifyBlue-700 hover:bg-emulsifyBlue-600',
          'dark:bg-emulsifyBlue-800 dark:hover:bg-emulsifyBlue-700',
        )}
        aria-label={selectedTheme?.name}
      >
        <LightIcon className="hidden size-4 fill-white [[data-theme=light]_&]:block" />
        <DarkIcon className="hidden size-4 fill-white [[data-theme=dark]_&]:block" />
        <LightIcon className="hidden size-4 fill-white [:not(.dark)[data-theme=system]_&]:block" />
        <DarkIcon className="hidden size-4 fill-white [.dark[data-theme=system]_&]:block" />
      </ListboxButton>

      <ListboxOptions
        className={clsx(
          'absolute left-[95%] top-full z-70 mt-3 w-36  space-y-1 rounded-xl md:left-[85%] ',
          'bg-emulsifyBlue-200 p-3 text-sm font-medium',
          'border border-solid border-emulsifyBlue-400 shadow-lg',
          'dark:border-emulsifyBlue-700 dark:bg-emulsifyBlue-800',
        )}
        anchor="bottom"
      >
        {themes.map((theme) => (
          <ListboxOption
            key={theme.value}
            value={theme}
            className={({ active, selected }) =>
              clsx(
                'flex cursor-pointer select-none items-center rounded-[0.625rem] p-1',
                {
                  'text-emulsifyBlue-700 dark:text-emulsifyBlue-100': selected,
                  'text-emulsifyBlue-900 dark:text-white': active && !selected,
                  'text-emulsifyBlue-900 dark:text-emulsifyBlue-100':
                    !active && !selected,
                  'bg-emulsifyBlue-500 text-emulsifyBlue-100 dark:bg-emulsifyBlue-700':
                    active,
                },
              )
            }
          >
            {({ selected }) => (
              <>
                <div className="rounded-md bg-white p-1 shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5">
                  <theme.icon
                    className={clsx(
                      'size-4',
                      selected
                        ? 'fill-emulsifyBlue-700 dark:fill-emulsifyBlue-100'
                        : 'fill-emulsifyBlue-700 dark:fill-emulsifyBlue-200',
                    )}
                  />
                </div>
                <div className="ml-3">{theme.name}</div>
              </>
            )}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
