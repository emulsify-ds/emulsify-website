[![Emulsify Design System](https://user-images.githubusercontent.com/409903/170579210-327abcdd-2c98-4922-87bb-36446a4cc013.svg)](https://www.emulsify.info/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/e8a8811d-96c9-4c15-b3f0-e14473fcff0f/deploy-status)](https://app.netlify.com/sites/emulsify-website/deploys)

# Emulsify.info website

Built using [Gatsby.js](https://www.gatsbyjs.org/), the [Contentful CMS](https://www.contentful.com/), and the [Gatsby Contentful Starter](https://github.com/contentful/starter-gatsby-blog). It is hosted on [Netlify](https://www.netlify.com/).

## Getting started

Install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (if you haven't already).

## Installation

Clone repo and run `npm i`

## Configuration

Copy `.env.example` to `.env.development`, and fill in the required credentials.

## Crucial Commands

### `npm run develop`

Develop on the gatsby site locally.

### `npm run storybook`

Develop on the component library locally.

To deploy your changes, simply commit to the repo and request a PR.

## This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

Commits are vetted against the [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) ruleset. See the configuration in `commitlint.config.js`.

## Note for M1 Macs

If you get an error when running `npm` about "sharp", [this comment](https://github.com/lovell/sharp/issues/2460#issuecomment-751491241) may help you resolve that issue.
