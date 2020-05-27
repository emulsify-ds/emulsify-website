import React from 'react'

import TwitterIcon from '../../../img/twitter.inline.svg'
import FacebookIcon from '../../../img/facebook-dark.inline.svg'

import styles from './share.module.css'

export default ({ page_url, title }) => (
  <div className={styles.share}>
    <h5 className={styles.heading}>Share this post</h5>
    <ul className={styles.shareList}>
      <li className={styles.shareItem}>
        <a href={`https://twitter.com/intent/tweet/?text=${title}&url=${page_url}`}>
          <TwitterIcon />
        </a>
      </li>
      <li className={styles.shareItem}>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${page_url}`}
          target="_blank"
        >
          <FacebookIcon />
        </a>
      </li>
    </ul>
  </div>
)
