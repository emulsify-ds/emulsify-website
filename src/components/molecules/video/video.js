import React from 'react'

import Wistia from '../../../hooks/wistia.js'

import Play from '../../../img/play.inline.svg'

import styles from './video.module.css'

export default () => {
  Wistia();
  return (
    <div className={styles.video}>
      <h2 className={styles.heading}><Play className={styles.icon} />Watch Our Emulsify Overview</h2>
      <div className="wistia_responsive_padding">
        <div className="wistia_responsive_wrapper">
          <div className="wistia_embed wistia_async_nnkn75an3f videoFoam=true">
            <div className="wistia_swatch">
              <img src="https://fast.wistia.com/embed/medias/nnkn75an3f/swatch" alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
