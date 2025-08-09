import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import projectsData from '@/data/projectsData'
import siteMetadata from '@/data/siteMetadata'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts).slice(0, siteMetadata.postsPerPage)
  const filteredProjects = projectsData.filter((d) => !d.isHiddenOnHomepage)
  return <Main posts={posts} projects={filteredProjects} />
}
