import { setRequestLocale } from 'next-intl/server'
import Main from './Main'
import { getProjects } from '@/data/projectsData'
import siteMetadata from '@/data/siteMetadata'
import { getPostsByLocale } from '@/lib/posts'
import { BeambackWidget } from '@/components/BeambackWidget'

export const revalidate = 86400 // 1 day

export default async function Page({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale)
  const posts = getPostsByLocale(params.locale).slice(0, siteMetadata.postsPerPage)
  const projects = await getProjects(params.locale)
  return (
    <>
      <Main posts={posts} projects={projects} />
      <BeambackWidget />
    </>
  )
}
