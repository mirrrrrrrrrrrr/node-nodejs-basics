import { resolve } from "node:path";
import { createWriteStream } from "node:fs";
import { fileURLToPath } from "node:url";
import readline from "node:readline";

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");
const file = resolve(__dirname, "files", "fileToWrite.txt");

const write = async () => {
    const writable = createWriteStream(file, { flags: "a" }); // 'a' - append mode

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: true,
    });

    console.log(
        "Yozishni boshlang (chiqish uchun 'exit' yozing yoki Ctrl+C bosing):",
    );

    rl.on("line", (line) => {
        if (line.trim().toLowerCase() === "exit") {
            rl.close(); // exit yozilsa chiqadi
        } else {
            writable.write(line + "\n");
        }
    });

    rl.on("close", () => {
        writable.end();
        console.log("\n✅ Yozish yakunlandi.");
    });

    process.on("SIGINT", () => {
        rl.close(); // Ctrl+C bosilganda ham xotirjam chiqadi
    });
};

await write();
