import { mkdirSync, writeFileSync } from "node:fs";

const firstHalf = "Beware the quiet night on call: ";
const secondHalf = "silence is only the pager clearing its throat.";
const line = firstHalf + secondHalf;

if (line.length > 120 || line.includes("\n")) {
  throw new Error("line must be 1-120 characters, single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
