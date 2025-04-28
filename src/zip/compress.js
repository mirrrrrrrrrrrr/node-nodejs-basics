import { createReadStream, createWriteStream } from "fs";
import process from "process";
import { createGzip } from "zlib";
import { pipeline } from "stream/promises";
import { fileURLToPath } from "url";
import { resolve } from "path";

const compress = async () => {
    // Write your code here

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = resolve(__filename, "..");

    const file = resolve(__dirname, "files", "fileToCompress.txt");
    const dest = resolve(__dirname, "files", "Archive.gz");

    const input = createReadStream(file);
    const output = createWriteStream(dest);
    const gzip = createGzip();

    await pipeline(input, gzip, output);
};

await compress();
