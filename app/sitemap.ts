import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const enPosts = allBlogs.filter((post) => !post.draft && post.locale === 'en')
  const blogRoutes = enPosts.flatMap((post) => {
    const enUrl = `${siteUrl}/blog/${post.slug}`
    const plUrl = `${siteUrl}/pl/blog/${post.slug}`
    const lastModified = post.lastmod || post.date
    const alternates = { languages: { en: enUrl, pl: plUrl } }
    return [
      { url: enUrl, lastModified, alternates },
      { url: plUrl, lastModified, alternates },
    ]
  })

  const staticRoutes = ['', 'blog', 'projects', 'tags', 'hire', 'about'].flatMap((route) => {
    const enUrl = route ? `${siteUrl}/${route}` : siteUrl
    const plUrl = route ? `${siteUrl}/pl/${route}` : `${siteUrl}/pl`
    const lastModified = new Date().toISOString().split('T')[0]
    const alternates = { languages: { en: enUrl, pl: plUrl } }
    return [
      { url: enUrl, lastModified, alternates },
      { url: plUrl, lastModified, alternates },
    ]
  })

  return [...staticRoutes, ...blogRoutes]
}
