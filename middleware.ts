import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Skip API routes, Next internals, and any path with a file extension
  // (feed.xml, sitemap.xml, robots.txt, /static/* images, favicons).
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
