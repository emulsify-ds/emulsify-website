import React, { FC } from 'react'

import styles from './hero.module.css'

export type HeroProps = {
  heading?: string
}

export const Hero: FC<HeroProps> = ({ heading, children }) => (
  <div className={styles.hero}>
    {heading && <h2 className={styles.heroHeading}>{heading}</h2>}
    <div className={styles.ctas}>{children}</div>
  </div>
)
