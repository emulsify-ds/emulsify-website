import React from 'react'

import styles from './signup.module.css'

export default ({ children }) => (
  <div className={styles.signup}>
      <h2 className={styles.signupHeading}>Stay up to date with the latest news from Emulsify</h2>
      {children}
  </div>
)
