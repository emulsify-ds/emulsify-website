import React, { FC } from 'react'

import { Band } from '../../../molecules/Band/Band'
import { Logo } from '../../../../img/logo'

import styles from './footer.module.css'

export const Footer: FC = () => {
  return (
    <Band bgColor="waves" size="large">
      <footer className={styles.footer}>
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
          <div className={styles.footerCopyright}>
            <p className={styles.tm}>
              Emulsify is a registered trademark of Four Kitchens
            </p>
          </div>
          <div className={styles.footerLinks}>
            <a href="https://docs.emulsify.info">Documentation</a>
            <a href="https://github.com/emulsify-ds">Github</a>
            <a href="https://launchpass.com/emulsify">Join us on Slack</a>
          </div>
        </div>
      </footer>
    </Band>
  )
}
