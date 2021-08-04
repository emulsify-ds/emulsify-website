import React from 'react'
import { Story } from '@storybook/react'

import { FullWidth, FullWidthProps } from '../templates/FullWidth'
import { CtaGrid } from '../organisms/CtaGrid/CtaGrid'
import { Band } from '../molecules/Band/Band'
import { Callout } from '../molecules/Callout/Callout'
import { Features } from '../organisms/Features/Features'
import { Hr } from '../atoms/Hr/Hr'
import { Signup } from '../molecules/Signup/Signup'

import { ctas } from '../data/ctas'
import { featuresData } from '../data/features'
import { CardGrid } from '../organisms/CardGrid/CardGrid'

import { cards } from '../data/cards'
import { navItems } from '../data/navigation'

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

const actonForm = `<div id="aoform-8cb720cf-340b-4191-8e54-6891b9f638fb" style="visibility: visible">
  <form class="ao-form" id="ao-form-8cb720cf-340b-4191-8e54-6891b9f638fb" action="#" data-validate-blur="" >
    <div class="ao-row" id="row-r1594328490896">
      <div class="ao-column ao-column-12 tablet-ao-column-1 mobile-ao-column-1" id="column-c1594328479534" >
        <div class="ao-column-inner">
          <div style="padding-bottom: 0px" class="ao-block-wrapper">
            <div id="block-b1594328211647" class="ao-input-block ao-left">
              <label for="b1594328211647" class="ao-form-label">Enter your email<span class="ao-required">*</span></label>
              <input id="b1594328211647" name="Email" type="text" placeholder=" " value="" data-type="text" tabindex="1" class="ao-form-field ao-left" data-error-message="required|Required field::email|Invalid email address" data-validator="required|email" />
              <span class="ao-form-error-message">&nbsp;</span>
            </div>
          </div>
          <div style="" class="ao-block-wrapper">
            <div id="block-b1594328322862" class="ao-submit-block">
              <div style="text-align: center">
                <button type="submit" class="ao-form-submit" style=" background-color: rgb(26, 150, 202); background-image: none; background-repeat: no-repeat; background-size: auto; background-position: center center; color: rgb(255, 255, 255); border-radius: 2px; display: inline-block; text-decoration: none; font-size: 13pt; font-weight: bold; font-family: Arial, Helvetica, sans-serif; font-style: normal; border-style: solid; border-color: transparent; border-width: 0px; padding: 10px; " tabindex="2" onmouseover="this.style.backgroundColor = '#177da8'; this.style.color = '#ffffff'; this.style.borderColor = 'transparent';" onmouseout="this.style.backgroundColor = 'rgb(26, 150, 202)'; this.style.color = '#ffffff'; this.style.borderColor = 'transparent';" >Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>
`

type HomepageProps = FullWidthProps & {
  pageTitle: string
  callout1Heading: string
}

export const Homepage: Story<HomepageProps> = ({
  pageTitle,
  location,
  callout1Heading,
}) => (
  <FullWidth
    location={location}
    navItems={navItems}
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
      <Hr />
      <Signup>
        <div dangerouslySetInnerHTML={{ __html: actonForm }} />
      </Signup>
    </Band>
    <Band size="medium">
      <Callout
        heading="Emulsify is open source, built using well-supported technologies developers love."
        text={
          <p>
            Emulsify is an open-source project that's free for everyone. Check
            out the project on{' '}
            <a href="https://github.com/emulsify-ds">GitHub</a> and join us on{' '}
            <a href="https://launchpass.com/emulsify">Slack</a> for help.
          </p>
        }
      />
      <CardGrid cards={cards.slice(3, 5)} />
    </Band>
  </FullWidth>
)
