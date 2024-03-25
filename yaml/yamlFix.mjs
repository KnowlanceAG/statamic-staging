import { readFile } from 'fs/promises'
import { outputFile } from 'fs-extra/esm'
import path from 'path'
import yaml from 'js-yaml'
import { globStream } from 'glob'

/**
  * Script to fix deprecated text align addon data structure to match the core implementation expecation.
  * This is a one-shot script! It should be removed after successful upgrade.
 */

console.time('all')
const filesStream = globStream(['../content/collections/**/*.md'])

let count = 0
for await (const file of filesStream) {
  const dir = file.substring(0, file.lastIndexOf("/"));
  console.log(file)
  count += 1

  // Read the markdown file
  const yamlDocs = yaml.loadAll(await readFile(file, 'utf8'))

  function updateTextAlign(obj, parent = null) {
    if (Array.isArray(obj)) {
      obj.forEach(element => updateTextAlign(element, parent))
    } else if (obj && typeof obj === 'object') {
      if (Array.isArray(obj.marks)) {
        const textAlignMarkIndex = obj.marks.findIndex(mark => mark.type === 'textAlign')
        if (textAlignMarkIndex !== -1) {
          parent.attrs = parent.attrs || {}
          parent.attrs.textAlign = obj.marks[textAlignMarkIndex].attrs.align
          obj.marks.splice(textAlignMarkIndex, 1)
        }
      }
      Object.values(obj).forEach(value => updateTextAlign(value, obj));
    }
  }

  const doc = yamlDocs[0]
  updateTextAlign(doc)
  const converted = `---\n${yaml.dump(doc)}---\n`;
  await outputFile(`yaml-test/${file}`, converted, 'utf8')
}
console.log('count', count)
console.timeEnd('all')