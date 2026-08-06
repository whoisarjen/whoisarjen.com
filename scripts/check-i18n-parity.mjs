#!/usr/bin/env node
/**
 * Verifies EN<->PL blog translation parity without a full build.
 *   node scripts/check-i18n-parity.mjs            # pairs are validated; missing PL files are warnings
 *   node scripts/check-i18n-parity.mjs --strict   # missing PL files are errors (launch gate)
 */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const strict = process.argv.includes('--strict')
const enDir = 'data/blog'
const plDir = 'data/blog/pl'

const mdxFiles = (dir) =>
  fs.existsSync(dir)
    ? fs
        .readdirSync(dir)
        .filter((f) => f.endsWith('.mdx') && fs.statSync(path.join(dir, f)).isFile())
    : []

const enFiles = mdxFiles(enDir)
const plFiles = mdxFiles(plDir)

const errors = []
const warnings = []

for (const f of enFiles) {
  if (!plFiles.includes(f))
    (strict ? errors : warnings).push(`Missing PL translation: ${plDir}/${f}`)
}
for (const f of plFiles) {
  if (!enFiles.includes(f)) errors.push(`PL file has no EN source: ${plDir}/${f}`)
}

if (strict && !fs.existsSync('data/authors/pl/default.mdx')) {
  errors.push('Missing PL author page: data/authors/pl/default.mdx')
}

const extractFences = (content) => content.match(/```[\s\S]*?```/g) ?? []
const stripCode = (content) =>
  content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`\n]*`/g, '')
    .replace(/^\s*>\s?/gm, '')

const isoDate = (d) => (d instanceof Date ? d.toISOString() : String(d))

for (const f of plFiles.filter((f) => enFiles.includes(f))) {
  const en = matter(fs.readFileSync(path.join(enDir, f), 'utf8'))
  const pl = matter(fs.readFileSync(path.join(plDir, f), 'utf8'))

  if (!pl.data.title) errors.push(`${f}: PL frontmatter missing title`)
  if (!pl.data.summary) errors.push(`${f}: PL frontmatter missing summary`)
  if (isoDate(en.data.date) !== isoDate(pl.data.date))
    errors.push(`${f}: date differs between EN and PL`)
  if (JSON.stringify(en.data.tags ?? []) !== JSON.stringify(pl.data.tags ?? []))
    errors.push(`${f}: tags differ (tags must stay identical to EN)`)
  if (new Date(pl.data.date).getTime() > Date.now())
    errors.push(`${f}: date is in the future (post will not appear)`)

  const enFences = extractFences(en.content)
  const plFences = extractFences(pl.content)
  if (enFences.length !== plFences.length) {
    errors.push(`${f}: code block count differs (EN ${enFences.length} vs PL ${plFences.length})`)
  } else {
    enFences.forEach((fence, i) => {
      if (fence !== plFences[i])
        errors.push(`${f}: code block #${i + 1} differs from EN (must be byte-identical)`)
    })
  }

  const body = stripCode(pl.content)
  if (/[<>]/.test(body)) warnings.push(`${f}: '<' or '>' outside code in PL body — MDX may break`)
  if (/[{}]/.test(body)) warnings.push(`${f}: '{' or '}' outside code in PL body — MDX may break`)
}

for (const w of warnings) console.warn(`WARN  ${w}`)
for (const e of errors) console.error(`ERROR ${e}`)
console.log(
  `\nChecked ${plFiles.length} PL file(s) against ${enFiles.length} EN post(s): ${errors.length} error(s), ${warnings.length} warning(s).`
)
process.exit(errors.length > 0 ? 1 : 0)
