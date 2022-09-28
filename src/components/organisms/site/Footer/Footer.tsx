import React, { FC } from 'react'

import { Band } from '../../../molecules/Band/Band'
import { Logo } from '../../../../img/logo'

import styles from './footer.module.css'

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Band bgColor="waves" size="large">
        <div className={styles.footerInner}>
          <div className={styles.footerBranding}>
            <Logo />
            <span className="visually-hidden">Emulsify Design System</span>
          </div>
          <div className={styles.footerContent}>
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
          <div className={styles.footerTrademark}>
            Emulsify is a registered trademark of Four Kitchens
          </div>
          <ul className={styles.footerLinks}>
            <li>
              <a href="https://docs.emulsify.info">Documentation</a>
            </li>
            <li>
              <a href="https://github.com/emulsify-ds">Github</a>
            </li>
            <li>
              <a href="https://launchpass.com/emulsify">Join us on Slack</a>
            </li>
            <li>
              <a href="https://www.emulsify.info/rss.xml">RSS Feed</a>
            </li>
          </ul>
        </div>
      </Band>
    </footer>
  )
}
