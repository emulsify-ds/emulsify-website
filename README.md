[![Emulsify Design System](https://user-images.githubusercontent.com/409903/170579210-327abcdd-2c98-4922-87bb-36446a4cc013.svg)](https://www.emulsify.info/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/e8a8811d-96c9-4c15-b3f0-e14473fcff0f/deploy-status)](https://app.netlify.com/sites/emulsify-website/deploys)

# Emulsify website

Built using NextJS and Tailwind for the frontend. Content for the blog comes from Contentful and the documentation is held in this repo as markdown files.

## Requirements and setup

Install npm, preferably with nvm (node version manager) so you can easily use the node version found in `.nvmrc`

Before installation, you will need to set a value for `FONTAWESOME_NPM_AUTH_TOKEN`. This value can be found in the Four Kitchens 1Password shared vault as "FONTAWESOME_NPM_AUTH_TOKEN".

You will also need to copy `.env.example` and fill in the credentials. These can be found in the Four Kitchens 1Password shared vault as "Emulsify Website .env variables".

```bash
npm install
nvm use
cp .env.example .env.local
```

Access to the Emulsify website in Netlify.

Access to Contentful if you want to do anything with blog posts.

## Features

### Content sources

* Blog articles are authored using markdown in Contentful.
* Documenation, found on the site at `/docs/*`, are markdown files found in `./src/pages`
* Documentation navigation is controlled by `src/data/navigation.js`.
* Other page content can be found either in `./src/pages/*` or in the corresponding component in `src/components`.
* Search is managed by [Algolia DocSearch](https://docsearch.algolia.com)

### Adding, editing, or removing blog posts

Blog articles are authored using markdown in Contentful. In order for a blog post to show up, you must check "Publish to Blog" in Contentful.

#### To add or edit an article

1. Author the article in Contentful, check "Publish to Blog", and publish it.
2. Create a pull request with an empty commit. Netlify will create a PR branch site to review.
3. Once approved, merge the PR. Netlify will then rerender the site with the new content.

#### To remove an article

1. Login to Contentful and uncheck "Publish to Blog".
2. Create a pull request with an empty commit. Netlify will create a PR branch site to review.
3. Once approved, merge the PR. Netlify will then rerender the site with the new content.

### Search

This site uses [Algolia DocSearch](https://docsearch.algolia.com) for the global search. DocSearch is free for open-source projects.

### Markdoc

[Markdoc](https://markdoc.dev/) is a Markdown-based syntax and toolchain for creating custom documentation sites, created by Stripe.

The Emulsify website makes use of Markdoc components to customize rendering. They can be found in `src/markdoc/tags`.

* `src/markdoc/tags/callout.js` is a proof-of-concept component and is not used.
* `src/markdoc/tags/gist.js` renders Github Gists
* `src/markdoc/tags/youtube.js` renders YouTube videos
