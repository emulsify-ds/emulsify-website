import React from 'react'
import { Story } from '@storybook/react'

import { Layout, LayoutProps } from '../templates/Layout'
import { CtaGrid } from '../organisms/CtaGrid/CtaGrid'
import { Band } from '../molecules/Band/Band'
import { Callout } from '../molecules/Callout/Callout'
import { Features } from '../organisms/Features/Features'

import { ctas } from '../data/ctas'
import { featuresData } from '../data/features'
import { CardGrid } from '../organisms/CardGrid/CardGrid'

import { cards } from '../data/cards'

export default {
  title: 'Pages/Homepage',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    pageTitle: {
      control: {
        type: 'text',
      },
      defaultValue:
        'Emulsify is an open-source tool for creating design systems with reusable components and clear guidelines for teams',
    },
    location: {
      control: {
        type: 'text',
      },
      defaultValue: '/',
    },
    callout1Heading: {
      control: {
        type: 'text',
      },
      defaultValue: 'Unify your websites and teams with a design system.',
    },
  },
}

type HomepageProps = LayoutProps & {
  pageTitle: string
  callout1Heading: string
}

export const Homepage: Story<HomepageProps> = ({
  pageTitle,
  location,
  callout1Heading,
}) => (
  <Layout
    logoUrl="#"
    location={location}
    heading={pageTitle}
    heroChildren={<CtaGrid ctas={ctas} />}
  >
    <Band>
      <Callout
        heading={callout1Heading}
        text="Complex organizations need a design system that simplifies development, encourages consistency, reduces maintenance effort, and scales quickly and affordably — without hampering flexibility for individual developers or departments."
        image={<img src="https://picsum.photos/580" alt="example image" />}
      />
      <Callout
        layout="media-end"
        heading="Give your developer and designers powerful tools all in one place."
        text="Emulsify doesn’t just conveniently join your component library and style guide, but includes all of the workflow tools necessary for prototyping, testing, checking accessibility, and documenting."
        image={<img src="https://picsum.photos/579" alt="example image" />}
      />
    </Band>
    <Band bgColor="primary" size="medium">
      <Features features={featuresData} />
    </Band>
    <Band size="medium">
      <Callout
        heading="Emulsify is open source, built using well-supported technologies developers love."
        text={
          <p>
            Emulsify is an open source project that's free for everyone. Check
            out the project on{' '}
            <a href="https://github.com/emulsify-ds">GitHub</a> and join us on{' '}
            <a href="https://launchpass.com/emulsify">Slack</a> for help
          </p>
        }
      />
      <CardGrid cards={cards.slice(3, 5)} />
    </Band>
  </Layout>
)
