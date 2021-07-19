import React, { FC } from 'react'

import styles from './band.module.css'

export type BandProps = {
  bgColor: 'primary' | 'secondary'
}

export const Band: FC<BandProps> = ({ bgColor, children }) => {
  return (
    <div className={styles.band} data-band-color={bgColor}>
      {children}
    </div>
  )
}
