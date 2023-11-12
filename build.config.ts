import { defineBuildConfig } from 'unbuild'
import copy from 'rollup-plugin-copy'

export default defineBuildConfig({
  rootDir: '.',
  entries: [
    './src/index.ts'
  ],
  clean: true,
  declaration: true,
  outDir: './dist',
  alias: {
    'openjlabel': './build/openjlabel.js'
  },
  failOnWarn: false,
  rollup: {
    emitCJS: true
  },
  hooks: {
    'rollup:options': (ctx, options) => {
      (options.plugins as any).push(
        copy({
          targets: [
            {
              src: './build/openjlabel.wasm',
              dest: './dist'
            }
          ]
        })
      )
    }
  }
})
