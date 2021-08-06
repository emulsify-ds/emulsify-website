import React, { FC } from 'react'

import { Teaser, TeaserProps } from '../../molecules/Teaser/Teaser'

import styles from './teaserList.module.css'

export type TeaserListProps = {
  heading: string
  teasers: TeaserProps[]
}

export const TeaserList: FC<TeaserListProps> = ({ heading, teasers }) => (
  <section className={styles.teaserList}>
    <h2 className={styles.teaserListHeading}>{heading}</h2>
    <div className={styles.teaserListContent}>
      {teasers.map((teaser) => (
        <Teaser
          key={teaser.id}
          id={teaser.id}
          variation="list"
          label={teaser.label}
          heading={teaser.heading}
          text={teaser.text}
          linkUrl={teaser.linkUrl}
          linkText={teaser.linkText}
          image={teaser.image}
        />
      ))}
    </div>
  </section>
)
