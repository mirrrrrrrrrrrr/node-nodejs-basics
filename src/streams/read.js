import { resolve } from "node:path";
import { createReadStream } from "node:fs";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");

const read = async () => {
    // Write your code here
    const filePath = resolve(__dirname, "files", "fileToRead.txt");
    const readableStream = createReadStream(filePath, "utf-8");
    readableStream.pipe(process.stdout);
};

await read();
