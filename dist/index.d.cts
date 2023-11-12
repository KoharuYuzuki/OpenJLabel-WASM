interface OpenjlabelInstance {
    callMain: (args: string[]) => void;
    FS: {
        mkdir: (path: string) => void;
        writeFile: (path: string, data: Uint8Array) => void;
        readFile: (path: string, options: {
            encoding: 'utf8';
        }) => string;
    };
}
declare const _openjlabel: () => Promise<OpenjlabelInstance>;

export { type OpenjlabelInstance, _openjlabel as default };
