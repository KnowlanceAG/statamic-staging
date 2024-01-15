import { readFile } from 'fs/promises'
import { outputFile } from 'fs-extra/esm'

import path from 'path'
import yaml from 'js-yaml'
import { globStream } from 'glob'

/**
 *
 * 1. textAlign in marks: move to parent attrs and remove marks entry
 * 2. Link-Extension muss lauffähig werden in Statamic v4
 * 3.
 */

console.time('all')

const filesStream = globStream(['content/collections/**/*.md'])

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

  // console.dir(doc, { depth: null })

  const converted = `---\n${yaml.dump(doc)}---\n`;

  // console.log(converted)

  await outputFile(`yaml-test/${file}`, converted, 'utf8')

}
console.log('count', count)
console.timeEnd('all')