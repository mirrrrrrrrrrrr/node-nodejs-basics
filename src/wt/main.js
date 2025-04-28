import { Worker } from "worker_threads";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    // Write your code here
    const numCPUs = os.cpus().length;
    const results = new Array(numCPUs);

    const createWorker = (index, value) => {
        return new Promise((resolve) => {
            const worker = new Worker(path.resolve(__dirname, "worker.js"));

            worker.postMessage(value);

            worker.on("message", (message) => {
                results[index] = message;
                resolve();
            });

            worker.on("error", () => {
                results[index] = { status: "error", data: null };
            });
        });
    };

    const tasks = [];
    for (let i = 0; i < numCPUs; i++) {
        const value = 10 + i;
        tasks.push(createWorker(i, value));
    }

    await Promise.all(tasks);

    console.log(results);
};

await performCalculations();
