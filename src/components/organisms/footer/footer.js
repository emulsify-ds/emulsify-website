import React from 'react'

import Github from '../../../img/github.inline.svg';
import Twitter from '../../../img/twitter.inline.svg';

import styles from './footer.module.css'

export default () => (
  <footer className={styles.footer}>
    <div className={styles.footerWrap + ' wrapper'}>
      <ul className={styles.footerMenu}>
        <li className={styles.footerListItem}>
          <a className={styles.twitter} target="_blank" href="https://twitter.com/emulsify" rel="noopener">
          <Twitter />
          </a>
        </li>
        <li className={styles.footerListItem}>
          <a className={styles.github} target="_blank" href="https://github.com/emulsify-ds" rel="noopener">
            <Github />
          </a>
        </li>
      </ul>
      <p>Emulsify is a registered trademark of <a target="_blank" href="http://fourkitchens.com" rel="noopener">Four Kitchens</a></p>
    </div>
  </footer>
)
