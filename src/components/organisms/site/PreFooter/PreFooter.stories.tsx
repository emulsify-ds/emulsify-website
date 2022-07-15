import React from 'react'
import { Story } from '@storybook/react'

import { PreFooter, PreFooterProps } from './PreFooter'
import { Callout } from '../../../molecules/Callout/Callout'
import { CardGrid } from '../../../organisms/CardGrid/CardGrid'
import { cards } from '../../../data/cards'

import {
  blogLabel,
  blogHeading,
  blogTeaser,
  blogHeroImage,
  blogReadMoreText,
} from '../../../data/blog'

export default {
  component: 'PreFooter',
  title: 'Organisms/Site/PreFooter',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    teaserLabel: {
      control: {
        type: 'text',
      },
      defaultValue: blogLabel,
    },
    teaserHeading: {
      control: {
        type: 'text',
      },
      defaultValue: blogHeading,
    },
    teaserText: {
      control: {
        type: 'text',
      },
      defaultValue: blogTeaser,
    },
    teaserLinkText: {
      control: {
        type: 'text',
      },
      defaultValue: blogReadMoreText,
    },
  },
}

export const preFooter: Story<PreFooterProps> = ({
  teaserLabel,
  teaserHeading,
  teaserText,
  teaserLinkText,
}) => (
  <PreFooter
    teaserLabel={teaserLabel}
    teaserHeading={teaserHeading}
    teaserLinkUrl="#"
    teaserText={teaserText}
    teaserLinkText={teaserLinkText}
    teaserHeroImage={blogHeroImage}
  >
    <Callout
      heading="Emulsify is open source, built using well-supported technologies developers love."
      text={
        <p>
          Emulsify is an open-source project that's free for everyone. Check out
          the project on <a href="https://github.com/emulsify-ds">GitHub</a> and
          join us on <a href="https://launchpass.com/emulsify">Slack</a> for
          help
        </p>
      }
    />
    <CardGrid cards={cards.slice(3, 5)} />
  </PreFooter>
)
