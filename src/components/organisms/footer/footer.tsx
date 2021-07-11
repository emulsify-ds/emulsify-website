/* eslint-disable */
// This file was converted to .tsx without actually implementing typescript
// @TODO: update this file to tsx and enable eslint
import React from 'react'

import styles from './footer.module.css'

export default () => (
  <footer className={styles.footer}>
    <div className={styles.footerWrap + ' wrapper'}>
      <div className={styles.footerParts}>
        <div className={styles.footerPart}>
          <span className={styles.logo}>Emulsify Design System</span>
          <a
            className={styles.footerLink}
            target="_blank"
            href="https://docs.emulsify.info"
            rel="noopener"
          >
            Documentation
          </a>
          <a
            className={styles.footerLink}
            target="_blank"
            href="https://github.com/emulsify-ds"
            rel="noopener"
          >
            Github
          </a>
          <a
            className={styles.footerLink}
            target="_blank"
            href="https://launchpass.com/emulsify"
            rel="noopener"
          >
            Join us on Slack
          </a>
        </div>
        <div className={styles.footerPart2}>
          <h3 className={styles.footerHeading}>
            Emulsify is a product of{' '}
            <a href="https://fourkitchens.com">Four Kitchens</a>
          </h3>
          <p>
            Our team creates digital experiences that delight, scale, and
            deliver measurable results. If you need help creating a design
            system, the Web Chefs have you covered.{' '}
            <a href="https://fourkitchens.com">Get in touch.</a>
          </p>
        </div>
      </div>
      <p className={styles.tm}>
        Emulsify is a registered trademark of{' '}
        <a target="_blank" href="http://fourkitchens.com" rel="noopener">
          Four Kitchens
        </a>
      </p>
    </div>
  </footer>
)
/* eslint-enable */
