import { readFileSync } from "fs";


export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function readJsonFile(filePath: string) {
    const data = readFileSync(filePath, "utf-8");

    return JSON.parse(data);
}