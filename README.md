# Emulsify.info website

Built using [Gatsby.js](https://www.gatsbyjs.org/), the [Contentful CMS](https://www.contentful.com/), and the [Gatsby Contentful Starter](https://github.com/contentful/starter-gatsby-blog). It is hosted on [Netlify](https://www.netlify.com/).

## Getting started

Install [Yarn](https://yarnpkg.com/en/docs/install) (if you haven't already).

## Installation

Clone repo and run `yarn`

## Configuration

Copy `.env.example` to `.env.development`, and fill in the required credentials.

## Crucial Commands

### `yarn develop`

Develop on the gatsby site locally.

### `yarn storybook`

Develop on the component library locally.

To deploy your changes, simply commit to the repo and request a PR.

## This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

Commits are vetted against the [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) ruleset. See the configuration in `commitlint.config.js`.

## Note for M1 Macs

If you get an error when running `yarn` about "sharp", [this comment](https://github.com/lovell/sharp/issues/2460#issuecomment-751491241) may help you resolve that issue.
