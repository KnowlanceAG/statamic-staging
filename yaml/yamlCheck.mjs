import { readFile } from 'fs/promises'
import { outputFile } from 'fs-extra/esm'

import path from 'path'
import yaml from 'js-yaml'
import { globStream } from 'glob'

import traverse from 'traverse'

console.time('all')

const filesStream = globStream(['yaml-test/content/collections/**/*.md'])

for await (const file of filesStream) {
  const yamlDocs = yaml.loadAll(await readFile(file, 'utf8'))
  const doc = yamlDocs[0]

  traverse(doc).forEach(function (x) {
    if (x && x.marks && x.marks.find((e) => e.type === 'textAlign')) {
      console.log('we are doomed', file)
    }
  })
}
console.timeEnd('all')