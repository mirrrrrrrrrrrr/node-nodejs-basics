import { resolve } from "path";
import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { pipeline } from "stream/promises";
import { fileURLToPath } from "url";

const decompress = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = resolve(__filename, "..");

    const file = resolve(__dirname, "files", "Archive.gz");
    const dest = resolve(__dirname, "files", "fileToCompresss.txt");

    const input = createReadStream(file);
    const output = createWriteStream(dest);
    const gunzip = createGunzip();

    await pipeline(input, gunzip, output);
};

await decompress();
