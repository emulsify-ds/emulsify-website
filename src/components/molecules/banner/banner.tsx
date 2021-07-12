import React, { FC } from 'react'
import styles from './banner.module.css'

export const Banner: FC = ({ children }) => (
  <div className={styles.banner}>
    <p className={styles.bannerContent}>{children}</p>
  </div>
)
