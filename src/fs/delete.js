import fs from 'node:fs/promises'
import { basename, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    // Write your code here 
    const deletedFile = resolve(__dirname, 'files', 'fileToRemove.txt');
    try {
        await fs.rm(deletedFile);
        console.log(`${basename(deletedFile)} successfuly deleted.`);
    } catch (err) {
        if (err.code === 'ENOENT') throw new Error('FS operation failed')
    }

};

await remove();