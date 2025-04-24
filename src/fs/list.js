import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const list = async () => {
    // Write your code here 

    // 1. Promise based
    try {
        let list = await readdir(join(import.meta.dirname, 'files'));
        console.log(list);
    } catch (err) {
        if (err.code === 'ENOENT') throw new Error('FS operation failed')
    }

    // 2. Callback
    // readdir(
    //     join(import.meta.dirname, 'files'),
    //     (err, data) => {
    //         if (err) {
    //             if(err.code === 'ENOENT') throw new Error('FS operation failed');
    //             throw err;
    //         }
    //         console.log(data);
    //     });
};

await list();