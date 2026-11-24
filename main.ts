import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fortune-cookie wisdom for a developer: the week-long hunt that ends
// in deleting the one line you defended hardest.
const LINE =
  "The bug that takes a week to find will be fixed by deleting one line you swore was essential.";

if (LINE.length === 0 || LINE.length > 120) {
  throw new Error(`line must be 1-120 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");

// The gate counts the file itself (1-120 UTF-8 characters), so check
// what was actually written, not just the in-memory line.
const written = readFileSync(outPath, "utf8");
if (written.length < 1 || written.length > 120) {
  throw new Error(`entry.txt must be 1-120 characters, got ${written.length}`);
}
