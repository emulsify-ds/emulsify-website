import React, { ReactNode, FC } from 'react'
import styles from './banner.module.css'

type BannerProps = {
  children: ReactNode
}

export const Banner: FC<BannerProps> = ({ children }) => (
  <div className={styles.banner}>
    <p className={styles.bannerContent}>{children}</p>
  </div>
)
