import Link from '@/components/Link'
import { useTranslations } from 'next-intl'

export default function NotFound() {
  const t = useTranslations('notFound')
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-100 md:border-r-2 md:border-gray-700 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal text-gray-100 md:text-2xl">
          {t('heading')}
        </p>
        <p className="mb-8 text-gray-400">{t('body')}</p>
        <Link
          href="/"
          className="inline rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-sky-600 focus:outline-none"
        >
          {t('back')}
        </Link>
      </div>
    </div>
  )
}
