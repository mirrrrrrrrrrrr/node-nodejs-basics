import { Transform } from "stream";

const transform = async () => {
    // Write your code here
    const reverseStream = new Transform({
        transform(chunk, encoding, cb) {
            const reversedChunk = chunk.toString().split("").reverse().join("");
            cb(null, reversedChunk);
        },
    });

    process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
