import React, { FC } from 'react'
import { Cta, CtaProps } from '../../molecules/Cta/Cta'

import styles from './ctaGrid.module.css'

export type CtaGridProps = {
  ctas: CtaProps[]
}

export const CtaGrid: FC<CtaGridProps> = ({ ctas }) => {
  return (
    <div className={styles.ctaGrid}>
      {ctas.map((cta) => (
        <Cta icon={cta.icon} linkText={cta.linkText} linkUrl={cta.linkUrl} />
      ))}
    </div>
  )
}
