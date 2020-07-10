import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Arrow from '../../../img/arrow.inline.svg'

import styles from './card.module.css'

import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

export default ({ title, specialTitle, specialSubTitle, text, image, imageFluid, imageClass, buttonUrl, buttonText }) => {
  let imageClasses = cx({
    image: true,
    demo: imageClass
  });
  return (
    <article className={styles.card}>
      <div className={imageClasses}>
        {imageFluid && 
          <Img fluid={imageFluid} />
        }
      </div>
      <div className={styles.copy}>
        {title &&
          <h2 className={styles.cardTitle}>{title}</h2>
        }
        {specialTitle && 
          <h2 className={styles.cardSpecialTitle}>
            <span>{specialTitle}</span>
            <span className={styles.cardSubTitle}>{specialSubTitle}</span>
          </h2>
        }
        <h3 className={styles.cardText}>{text}</h3>
        {buttonUrl && 
          <div className={styles.cardBtn}>
            <a
              className="button"
              href={buttonUrl}
            >{buttonText}<Arrow className="button-icon" /></a>
          </div>
        }
      </div>
    </article>
  )
}
