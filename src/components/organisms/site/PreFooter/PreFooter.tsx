import React, { FC, ReactNode } from 'react'

import { Band, BandProps } from '../../../molecules/Band/Band'
import { Teaser } from '../../../molecules/Teaser/Teaser'

import styles from './preFooter.module.css'

export type PreFooterProps = BandProps & {
  teaserLabel: string
  teaserHeading: string
  teaserText: string
  teaserLinkText: string
  teaserHeroImage: ReactNode
}

export const PreFooter: FC<PreFooterProps> = ({
  size = 'large',
  children,
  teaserLabel,
  teaserHeading,
  teaserText,
  teaserLinkText,
  teaserHeroImage,
}) => (
  <Band size={size}>
    <div className={styles.preFooter}>
      <div className={styles.preFooterContent}>{children}</div>
      <div className={styles.preFooterTeaser}>
        <Teaser
          label={teaserLabel}
          heading={teaserHeading}
          text={teaserText}
          linkUrl="#"
          linkText={teaserLinkText}
          image={teaserHeroImage}
        />
      </div>
    </div>
  </Band>
)
