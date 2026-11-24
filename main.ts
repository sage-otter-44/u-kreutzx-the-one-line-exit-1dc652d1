import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I resign from the escape room: after three years searching for the exit, I finally found it, and it turns out it was this email.";

if (entry.length < 1 || entry.length > 140 || entry.includes("\n")) {
  throw new Error(`entry must be one line of 1-140 chars, got ${entry.length}`);
}
console.log(`entry length: ${entry.length} chars, single line, gate OK`);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
