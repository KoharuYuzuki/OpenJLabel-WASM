declare module 'openjlabel' {
  interface Instance {
    callMain: (args: string[]) => void
    FS: {
      mkdir: (path: string) => void
      writeFile: (path: string, data: Uint8Array) => void
      readFile: (path: string, options: { encoding: 'utf8' | 'binary' }) => string | Uint8Array
    }
  }

  let openjlabel: () => Promise<Instance>
  export default openjlabel
}
