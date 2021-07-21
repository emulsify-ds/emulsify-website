import React, { FC, ReactNode } from 'react'

import styles from './features.module.css'

type FeatureProps = {
  heading: string
  children: ReactNode
}

const Feature: FC<FeatureProps> = ({ heading, children }) => (
  <li>
    <h3 className={styles.featuresItemHeading}>{heading}</h3>
    {children}
  </li>
)

export type FeaturesProps = {
  features: FeatureProps[]
}

export const Features: FC<FeaturesProps> = ({ features }) => (
  <div className={styles.features}>
    <h2 className={styles.featuresHeading}>Emulsify Features</h2>
    <ul className={styles.featuresItems}>
      {features.map((feature, index) => (
        <Feature heading={feature.heading} key={index}>
          {feature.children}
        </Feature>
      ))}
    </ul>
  </div>
)
