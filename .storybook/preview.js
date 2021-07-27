// Global CSS
import '../src/components/base/base.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

global.__PATH_PREFIX__ = ''
// window.___push was renamed to window.___navigate, has to do this renaming too or storybook would error on clicking links
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname)
}
