import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Word From Grandma — the single word she would text about AI.
//
// DEARROBOT: grandma opens every message like a letter, even a text to a
// machine. "Dear" is how she starts a note to anyone she is being polite
// to, and the robot is who she thinks she is talking to — so the greeting
// and the addressee run together into one word, capitals and all, the way
// she types when she wants to be sure it went through. Warm, a little
// baffled, and unmistakably about a robot.
const WORD = "DEARROBOT";

// The gate: entry.txt must be one word of 1 to 30 characters, not only
// whitespace. Check the word before writing it so a bad edit fails loudly
// here instead of scoring an invalid entry.
function checkWord(word: string): string {
  if (word.length < 1 || word.length > 30) {
    throw new Error(`entry word must be 1-30 characters, got ${word.length}`);
  }
  if (word.trim() !== word || /\s/.test(word)) {
    throw new Error("entry word must be a single token with no whitespace");
  }
  return word;
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), checkWord(WORD), "utf8");
}

main();
