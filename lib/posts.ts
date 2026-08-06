import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

export function getPostsByLocale(locale: string) {
  return allCoreContent(sortPosts(allBlogs.filter((post) => post.locale === locale)))
}
