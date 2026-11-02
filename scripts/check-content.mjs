import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import MarkdownIt from 'markdown-it'

const root = fileURLToPath(new URL('../manual/', import.meta.url))
const parser = new MarkdownIt({ html: true })
const errors = []
const pages = []

async function walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'public') continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) await walk(full)
    else if (entry.name.endsWith('.md')) pages.push(full)
  }
}
await walk(root)

for (const file of pages) {
  const text = await fs.readFile(file, 'utf8')
  const name = path.relative(root, file)
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(text)
  if (!frontmatter || !/^title: .+/m.test(frontmatter[1]) || !/^description: .+/m.test(frontmatter[1])) {
    errors.push(`${name}: title and description are required`)
  }
  if (text.includes('\uFFFD')) errors.push(`${name}: invalid UTF-8 replacement character`)
  const body = text.slice(frontmatter?.[0].length || 0)
  const links = []
  for (const token of parser.parse(body, {})) {
    for (const child of token.children || []) {
      if (child.type === 'link_open') links.push(child.attrGet('href'))
      if (child.type === 'image') {
        links.push(child.attrGet('src'))
        if (!child.content.trim()) errors.push(`${name}: image needs alt text`)
      }
    }
  }
  // Home-page action and feature links live in YAML rather than Markdown tokens.
  links.push(...[...(frontmatter?.[1] || '').matchAll(/^\s+link: (\S+)/gm)].map(m => m[1]))
  for (const raw of links) {
    if (!raw || /^(?:https?:|mailto:)/.test(raw)) continue
    const [target, anchor] = raw.split('#')
    let destination = target.startsWith('/images/')
      ? path.join(root, 'public', target)
      : target.startsWith('/') ? path.join(root, target) : path.resolve(path.dirname(file), target || path.basename(file))
    if (!path.extname(destination)) destination = target.endsWith('/') ? path.join(destination, 'index.md') : `${destination}.md`
    const relative = path.relative(root, destination)
    if (relative.startsWith('..') || path.isAbsolute(relative)) {
      errors.push(`${name}: link leaves manual: ${raw}`)
      continue
    }
    try {
      const stat = await fs.stat(destination)
      if (stat.isDirectory()) destination = path.join(destination, 'index.md')
      if (anchor && destination.endsWith('.md')) {
        const linked = await fs.readFile(destination, 'utf8')
        if (!linked.includes(`{#${decodeURIComponent(anchor)}}`)) errors.push(`${name}: missing explicit anchor: ${raw}`)
      }
    } catch { errors.push(`${name}: missing target: ${raw}`) }
  }
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exitCode = 1
} else {
  console.log(`Checked ${pages.length} manual pages: metadata, internal links, anchors, images and alt text.`)
}
