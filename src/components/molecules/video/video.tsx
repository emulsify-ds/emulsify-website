import React, { FC, useEffect } from 'react'

import { Play } from '../../../img/play.inline'

import styles from './video.module.css'

export type VideoProps = {
  id: string
  heading?: string
}

export const Video: FC<VideoProps> = ({ id, heading }) => {
  useEffect(() => {
    const script1 = document.createElement('script')
    const script2 = document.createElement('script')

    script1.src = `https://fast.wistia.com/embed/medias/${id}.jsonp`
    script1.async = true

    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js'
    script2.async = true

    document.body.appendChild(script1)
    document.body.appendChild(script2)

    return () => {
      document.body.removeChild(script1)
      document.body.removeChild(script2)
    }
  })

  return (
    <div className={styles.video}>
      {heading && (
        <h2 className={styles.heading}>
          <Play />
          {heading}
        </h2>
      )}
      <div className="wistia_responsive_padding">
        <div className="wistia_responsive_wrapper">
          <div className={`wistia_embed wistia_async_${id} videoFoam=true`}>
            <div className="wistia_swatch">
              <img
                src={`https://fast.wistia.com/embed/medias/${id}/swatch`}
                alt=""
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
