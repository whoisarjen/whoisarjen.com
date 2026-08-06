/* eslint-disable jsx-a11y/anchor-has-content */
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'
import { Link as LocaleLink } from 'i18n/navigation'

const CustomLink = ({
  href,
  ...rest
}: Omit<LinkProps, 'locale'> & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = typeof href === 'string' && href.startsWith('/')
  const isAnchorLink = typeof href === 'string' && href.startsWith('#')

  if (isInternalLink) {
    return <LocaleLink href={href as string} {...rest} />
  }

  if (isAnchorLink) {
    return <a href={href as string} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href as string} {...rest} />
}

export default CustomLink
