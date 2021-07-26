import React, { FC } from 'react'

import { Card, CardProps } from '../../molecules/Card/Card'

import styles from './cardGrid.module.css'

export type CardGridProps = {
  cards: CardProps[]
}

export const CardGrid: FC<CardGridProps> = ({ cards }) => (
  <section className={styles.cardGrid}>
    {cards.map((card, index) => (
      <Card
        key={index}
        heading={card.heading}
        text={card.text}
        linkUrl={card.linkUrl}
        image={card.image}
      />
    ))}
  </section>
)
