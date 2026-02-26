import { readdirSync, statSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'

export function buildSidebar(docsPath, dirConfig) {
  return Object.fromEntries(
    dirConfig.flatMap(({ name, title }) => {
      const items = buildItems(docsPath, join(docsPath, name))
      if (!items.length) return []
      return [[`/${name}/`, items]]
    })
  )
}

function buildItems(docsPath, base) {
  return readdirSync(base)
    .filter(f => !/^\./.test(f) && statSync(join(base, f)).isDirectory())
    .flatMap(name => {
      const dir = join(base, name)
      const indexFile = join(dir, 'index.md')
      if (existsSync(indexFile)) {
        const { title, hide } = getFrontmatter(indexFile)
        if (hide === 'true') return []
        return [{ text: title || name, link: '/' + dir.replace(docsPath + '/', '') + '/' }]
      }
      const items = buildItems(docsPath, dir)
      return items.length ? [{ text: name, collapsed: false, items }] : []
    })
}

function getFrontmatter(filePath) {
  const m = readFileSync(filePath, 'utf-8').match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!m) return {}
  return Object.fromEntries(
    m[1].split(/\r?\n/).flatMap(line => {
      const r = line.match(/^(\w+)\s*:\s*['"]?(.+?)['"]?\s*$/)
      return r ? [[r[1], r[2]]] : []
    })
  )
}
