import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import projectsData from '@/data/projectsData'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const filteredProjects = projectsData.filter((d) => !d.isHiddenOnHomepage)
  return <Main posts={posts} projects={filteredProjects} />
}
