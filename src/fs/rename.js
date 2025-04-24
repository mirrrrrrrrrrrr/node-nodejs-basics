import { rename as fsRename, access, constants } from 'node:fs/promises';

const rename = async () => {
    const oldPath = new URL('./files/wrongFilename.txt', import.meta.url);
    const newPath = new URL('./files/properFilename.md', import.meta.url);

    try {
        await access(oldPath, constants.F_OK);
        try {
            await access(newPath, constants.F_OK);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') throw err;
        }

        await fsRename(oldPath, newPath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();
