import React from 'react'

import ActOn from '../../../hooks/actOn.js'

import styles from './signup.module.css'

export default () => {
  ActOn();
  return (
    <div id="acton-signup" className={styles.signup}>
        <h2 className={styles.signupHeading}>Stay up to date with the latest news from Emulsify</h2>
    </div>
  )
}
