import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'tags' })
  return genPageMetadata({
    title: t('title'),
    description: t('description'),
    locale: params.locale,
    path: '/tags',
  })
}

export default async function Page({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale)
  const t = await getTranslations('tags')
  const tBlog = await getTranslations('blog')
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:border-gray-700 md:px-6 md:text-6xl md:leading-14">
            {t('title')}
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {tagKeys.length === 0 && t('noTags')}
          {sortedTags.map((t2) => {
            return (
              <div key={t2} className="mb-2 mr-5 mt-2">
                <Tag text={t2} />
                <Link
                  href={`/tags/${slug(t2)}`}
                  className="-ml-2 text-sm font-semibold uppercase text-gray-300"
                  aria-label={tBlog('viewPostsTagged', { tag: t2 })}
                >
                  {` (${tagCounts[t2]})`}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
