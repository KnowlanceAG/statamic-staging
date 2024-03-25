import { readFile } from 'fs/promises'
import { outputFile } from 'fs-extra/esm'

import path from 'path'
import yaml from 'js-yaml'
import { globStream } from 'glob'

import traverse from 'traverse'

console.time('all')

const filesStream = globStream(['./content/collections/**/*.md'])

const marksObject = {}

for await (const file of filesStream) {
  console.log('checking', file)
  const yamlDocs = yaml.loadAll(await readFile(file, 'utf8'))
  const doc = yamlDocs[0]

  traverse(doc).forEach(function (x) {
    if (x?.marks?.length && x.marks.find((e) => e.type === 'textAlign')) {
      console.log('we are doomed', file)
    } else if (x && x.marks && x.marks.length === undefined) {
      marksObject[file] = marksObject[file] ? marksObject[file] + 1 : 1
    }
  })
}
console.timeEnd('all')

console.log('marksObject', marksObject)
console.log('marksObject.length', Object.keys(marksObject).length)