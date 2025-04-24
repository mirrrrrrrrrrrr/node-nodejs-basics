import { access, copyFile, mkdir, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
// const __dirname = resolve(__filename, '..');

const copy = async () => {
    const srcDir = resolve(__filename, '..', 'files');
    const distDir = resolve(__filename, '..', 'files_copy');

    try {
        await access(srcDir); // 1. check if source exists

        try {
            await mkdir(distDir); // 2. create destination dir
        } catch (err) {
            if (err.code === 'EEXIST') {
                throw new Error('FS operation failed: Destination folder already exists');
            } else {
                throw err;
            }
        }

        const files = await readdir(srcDir); // 3. read files

        await Promise.all(
            files.map(file => {
                const srcFile = resolve(srcDir, file);
                const distFile = resolve(distDir, file);
                return copyFile(srcFile, distFile);
            })
        );

        console.log('All files copied successfully');

    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed: Source folder "files" does not exist');
        } else {
            throw err;
        }
    }
};

await copy();
