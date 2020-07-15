import React, { Component } from 'react'

import Play from '../../../img/play.inline.svg'

import styles from './video.module.css'

export default class Video extends Component {

  componentWillMount() {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");

    script1.src = "https://fast.wistia.com/embed/medias/nnkn75an3f.jsonp";
    script1.async = true;

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);
  }

  render() {
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
  };
}
