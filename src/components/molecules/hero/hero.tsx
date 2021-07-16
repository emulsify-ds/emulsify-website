import React, { FC } from 'react'

import styles from './hero.module.css'

type HeroProps = {
  heading: string
}

export const Hero: FC<HeroProps> = ({ heading }) => (
  <div className={styles.hero}>
    <h2 className={styles.heroHeading}>{heading}</h2>
  </div>
)
