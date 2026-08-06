import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  locale?: string
  path?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function genPageMetadata({
  title,
  description,
  image,
  locale = 'en',
  path = '',
  ...rest
}: PageSEOProps): Metadata {
  const enUrl = `${siteMetadata.siteUrl}${path}`
  const plUrl = `${siteMetadata.siteUrl}/pl${path}`
  const { alternates: extraAlternates, ...restProps } = rest
  return {
    title,
    // Omit the key entirely when the caller has none, so the locale-aware
    // description from the layout is inherited instead of overridden.
    ...(description ? { description } : {}),
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: description || siteMetadata.description,
      url: './',
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: locale === 'pl' ? 'pl_PL' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: locale === 'pl' ? plUrl : enUrl,
      languages: { en: enUrl, pl: plUrl, 'x-default': enUrl },
      ...(extraAlternates ?? {}),
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner],
    },
    ...restProps,
  }
}
