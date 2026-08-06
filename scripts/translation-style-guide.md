# PL Translation Style Guide (blog posts + author page)

## Files
- EN source: `data/blog/<name>.mdx` → PL twin: `data/blog/pl/<name>.mdx` (SAME filename).
- Author page: `data/authors/default.mdx` → `data/authors/pl/default.mdx`.

## Frontmatter
- `title`: translate to Polish. Use DOUBLE quotes if the value contains an apostrophe or single quote.
- `summary`: translate to Polish. Same quoting rule.
- `date`, `lastmod`: copy EXACTLY from EN.
- `tags`: copy EXACTLY from EN (shared English taxonomy — never translate tags).
- Any other frontmatter keys: copy exactly.

## Register
- Natural Polish developer prose, first person, masculine verb forms ("zrobiłem", "zauważyłem").
- KEEP English technical vocabulary where Polish developers use it: deploy, build, cache, bundle,
  endpoint, payload, request, response, commit, branch, hook, middleware, framework, runtime,
  backend, frontend, full-stack, code review, edge case, breaking change, feature flag.
  Inflect naturally where idiomatic: "cache'owanie", "deployu", "bundle'a", "commitów".
- Translate ordinary prose fully — the goal is text a Polish engineer would write, not
  word-for-word translation. Restructure sentences when Polish flows better.
- NEVER produce formal/literary calques ("pamięć podręczna" for cache, "punkt końcowy" for
  endpoint). If unsure whether a term stays EN: does a Polish dev say it in daily standup? Then EN.
- Product/tech names never change: Next.js, Vercel, PostgreSQL, Redis, Nuxt, Prisma, TypeScript.

## Code
- Fenced code blocks (``` ... ```): BYTE-IDENTICAL to EN — including comments, string literals,
  whitespace. Never translate anything inside a fence.
- Inline code (`...`): byte-identical to EN.

## Body mechanics
- Headings: translate the text (`##`/`###` levels unchanged). Anchors regenerate automatically.
- Tables: translate header/prose cells; keep code, numbers, and identifiers as-is.
- Links: translate the link TEXT, never the URL. Internal `/blog/...` links keep the same slug.
- No emojis. No images. Keep the closing one-liner punchy in Polish.
- MDX pitfalls: no `<`, `>`, `{`, `}` outside code (write "poniżej 1 KB", not "<1KB").

## After each file
Run `node scripts/check-i18n-parity.mjs` — zero errors required
(warnings about still-missing OTHER translations are fine mid-migration).
