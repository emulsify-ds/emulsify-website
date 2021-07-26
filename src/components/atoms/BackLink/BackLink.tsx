import React, { FC } from 'react'
import { Link } from '../../utility/Link'

import { Arrow } from '../../../img/arrow.inline'

import styles from './backLink.module.css'

export type BackLinkProps = {
  url: string
  text: string
}

export const BackLink: FC<BackLinkProps> = ({ url, text }) => (
  <Link className={styles.backLink} to={url}>
    <Arrow />
    {text}
  </Link>
)
