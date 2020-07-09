import React from 'react'

import styles from './features.module.css'

export default ({ children }) => (
  <div className={styles.features}>
    <div className="wrapper">
      <h2 className={styles.featuresHeading}>Features of Emulsify</h2>
      <div className={styles.featuresItems}>
        <div className={styles.featuresItem}>
          <h3 className={styles.featuresItemHeading}>Technology and Design Leaders</h3>
          <p>Reduce development, maintenance time, and errors by reusing components and via automated testing</p>
          <p>Create a consistent look and feel by reusing brand-standard  colors, typography, and more</p>
        </div>
        <div className={styles.featuresItem}>
          <h3 className={styles.featuresItemHeading}>Designers and Marketers</h3>
          <p>Document brand and design guidelines for everyone to use</p>
          <p>Make changes in one place and have them update everywhere</p>
          <p>Automate accessibility testing for an accessible user experience</p>
        </div>
        <div className={styles.featuresItem}>
          <h3 className={styles.featuresItemHeading}>Developers</h3>
          <p>Automate testing to simplify prototyping and reduce development time</p>
          <p>Encourage reuse across all properties to reduce errors, development and maintenance efforts</p>
          <p>Maintain flexibility with support for multiple development languages and component customization</p>
        </div>
      </div>
    </div>
  </div>
)
