import React from 'react'
import { Story } from '@storybook/react'
import { Play } from '../../img/play.inline'
import { Arrow } from '../../img/arrow.inline'

import { Layout } from '../templates/Layout'
import { CtaGrid } from '../organisms/CtaGrid/CtaGrid'
import { Band } from '../molecules/Band/Band'
import { Callout } from '../molecules/Callout/Callout'
import { Features } from '../organisms/Features/Features'

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
  },
}

type HomepageProps = { pageTitle: string; location: Location }

const ctas = [
  { linkText: 'Watch an Overview', linkUrl: '#', icon: <Play /> },
  { linkText: 'View the Latest Guide', linkUrl: '#', icon: <Arrow /> },
]

const featuresData = [
  {
    heading: 'Technology & Design Leaders',
    children: (
      <>
        <p>
          Reduce development, maintenance time, and errors by reusing components
          and via automated testing
        </p>
        <p>
          Create a consistent look and feel by reusing brand-standard colors,
          typography, and more
        </p>
      </>
    ),
  },
  {
    heading: 'Designers and Marketers',
    children: (
      <>
        <p>Document brand and design guidelines for everyone to use</p>
        <p>Make changes in one place and have them update everywhere</p>
        <p>Automate accessibility testing for an accessible user experience</p>
      </>
    ),
  },
  {
    heading: 'Developers',
    children: (
      <>
        <p>
          Automate testing to simplify prototyping and reduce development time
        </p>
        <p>
          Encourage reuse across all properties to reduce errors, development
          and maintenance efforts
        </p>
        <p>
          Maintain flexibility with support for multiple development languages
          and component customization
        </p>
      </>
    ),
  },
]

export const Homepage: Story<HomepageProps> = ({ pageTitle, location }) => (
  <Layout
    location={location}
    heroHeading={pageTitle}
    heroChildren={<CtaGrid ctas={ctas} />}
  >
    <Band>
      <Callout
        heading="Unify your websites and teams with a design system."
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
  </Layout>
)
