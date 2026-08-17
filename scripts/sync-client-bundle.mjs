import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')

function moduleBody(path) {
  return readFileSync(resolve(root, path), 'utf8')
    .replace(/^import .*$/gm, '')
    .replace(/export function /g, 'function ')
    .replace(/export const /g, 'const ')
    .trim()
}

const source = `window.__ModuleLoader__.load({
  id: "dsh-skin-schierke",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

${moduleBody('shared/art.js')}

${moduleBody('shared/theme-css.js')}

${moduleBody('shared/runtime.js')}

    exports.activateSkin = activateSkin;
    exports.apply = apply;
    exports.inject = inject;
    return module.exports;
  }
});
`

const output = resolve(root, 'lib/client.js')
if (process.argv.includes('--check')) {
  if (readFileSync(output, 'utf8') !== source) {
    console.error('lib/client.js is stale; run node scripts/sync-client-bundle.mjs')
    process.exitCode = 1
  }
} else {
  writeFileSync(output, source)
}
