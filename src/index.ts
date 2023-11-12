import openjlabel from 'openjlabel'

interface OpenjlabelInstance {
  callMain: (args: string[]) => void
  FS: {
    mkdir: (path: string) => void
    writeFile: (path: string, data: Uint8Array) => void
    readFile: (path: string, options: { encoding: 'utf8' }) => string
  }
}

const _openjlabel = openjlabel as () => Promise<OpenjlabelInstance>

export { _openjlabel as default }
