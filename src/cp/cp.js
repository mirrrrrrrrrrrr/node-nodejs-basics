import { spawn } from "child_process";
import { resolve } from "path";
import { fileURLToPath } from "url";

const spawnChildProcess = async (args) => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = resolve(__filename, "..");
    const scriptFile = resolve(__dirname, "files", "script.js");

    const child = spawn("node", [scriptFile, ...args], {
        stdio: ["pipe", "pipe", "inherit"],
    });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1", "arg2"]);
