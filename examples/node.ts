import openjlabel from 'openjlabel-wasm'
import fs from 'fs'
import { join } from 'path'

const dictDirPath = 'path/to/dictDir'
const dictFilePaths = [
  'char.bin',
  'left-id.def',
  'matrix.bin',
  'pos-id.def',
  'rewrite.def',
  'right-id.def',
  'sys.dic',
  'unk.dic'
].map((fileName) => join(dictDirPath, fileName))

const dictData = dictFilePaths.map((filePath) => {
  const buffer = fs.readFileSync(filePath)
  return new Uint8Array(buffer)
})

openjlabel()
.then((instance) => {
  const memoryFS = instance.FS

  memoryFS.mkdir(dictDirPath)
  dictData.forEach((data, i) => memoryFS.writeFile(dictFilePaths[i], data))

  const labelFilePath = '/output.lab'
  const text = 'こんにちは'
  const args = [
    '-d', dictDirPath,
    '-o', labelFilePath,
    text
  ]

  instance.callMain(args)

  const label = memoryFS.readFile(labelFilePath, { encoding: 'utf8' })
  console.log(label)
})
.catch(console.error)
