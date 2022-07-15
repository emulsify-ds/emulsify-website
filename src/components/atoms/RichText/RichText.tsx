import React, { FC } from 'react'

import styles from './richText.module.css'

export const RichText: FC = ({ children }) => (
  <div className={styles.richText}>{children}</div>
)
