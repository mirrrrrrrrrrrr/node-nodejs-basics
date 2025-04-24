import { writeFile } from 'node:fs/promises';
import { basename, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    const content = 'I am fresh and young';
    const filePath = resolve(__dirname, 'files', 'fresh.txt');
    const errorMessage = 'FS operation failed';

    try {
        await writeFile(filePath, content, { flag: 'wx' });
        console.log(`${basename(filePath)} successfully created!`);
    } catch (err) {
        if (err.code === 'EEXIST') {
            throw new Error(errorMessage);
        } else {
            throw err;
        }
    }
};

await create();
