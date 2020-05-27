import React from 'react'

import styles from './cardGrid.module.css'

export default ({ children }) => (
  <section className={styles.cardGrid}>
    {children}
  </section>
)
