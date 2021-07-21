/* eslint-disable */
// This component is pulled straight from the Gatsby docs:
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#reminder-use-link-only-for-internal-links
import React, { FC, ReactNode } from 'react'
import { Link as GatsbyLink } from 'gatsby'

type LinkProps = {
  children: ReactNode
  to: string
  className?: string
  activeClassName?: string
  partiallyActive?: boolean
  tabIndex?: number
}

// Since DOM elements <a> cannot receive activeClassName and partiallyActive,
// destructure the prop here and pass it only to GatsbyLink
export const Link: FC<LinkProps> = ({
  children,
  to,
  className,
  activeClassName,
  partiallyActive,
  tabIndex,
}) => {
  // Tailor the following test to your environment. This example assumes that
  // any internal link(intended for Gatsby) will start with exactly one slash,
  // and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        className={className}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        tabIndex={tabIndex}
        to={to}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a className={className} tabIndex={tabIndex} href={to}>
      {children}
    </a>
  )
}
/* eslint-enable */