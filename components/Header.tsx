import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'
import LocaleSwitcher from './LocaleSwitcher'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { useTranslations } from 'next-intl'

const Header = () => {
  const t = useTranslations('nav')
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/">
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image
                src={siteMetadata.avatar}
                alt={siteMetadata.author}
                className="rounded-full"
                style={{ objectFit: 'cover' }}
                width={40}
                height={40}
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="hidden font-medium text-gray-100 sm:block"
            >
              {t(link.key)}
            </Link>
          ))}
        <LocaleSwitcher />
        <SearchButton />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
