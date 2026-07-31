import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
let html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

html = html.replace(/<link rel="stylesheet" crossorigin href="([^"]+)">/, (_match, href) => {
  const css = fs.readFileSync(path.join(dist, href.replace(/^\//, '')), 'utf8')
  return `<style>${css}</style>`
})

let embeddedJs = ''
html = html.replace(/<script type="module" crossorigin src="([^"]+)"><\/script>/, (_match, src) => {
  const js = fs.readFileSync(path.join(dist, src.replace(/^\//, '')), 'utf8').replace(/<\/script/gi, '<\\/script')
  embeddedJs = js
  return ''
})

html = html.replace('</body>', () => `<script>${embeddedJs}</script>\n  </body>`)

const output = path.join(root, 'bundle.html')
fs.writeFileSync(output, html)
const releaseDir = path.join(root, 'release')
fs.mkdirSync(releaseDir, {recursive:true})
fs.writeFileSync(path.join(releaseDir, 'index.html'), html)
console.log(`Bundled ${Math.round(fs.statSync(output).size / 1024)} KB to bundle.html and release/index.html`)
