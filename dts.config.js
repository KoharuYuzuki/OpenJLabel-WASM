const static_files = require('rollup-plugin-static-files')

module.exports = {
  rollup(config) {
    config.plugins.push(
      static_files({
        include: [
          './build',
          './src/types'
        ],
        exclude: [
          './build/openjlabel.js',
          './src/types/openjlabel.d.ts'
        ]
      })
    )
    return config
  }
}
