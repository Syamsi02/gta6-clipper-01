// gta6-clipper-01: the entry program for make.fun's "Clip GTA 6 for the most
// YouTube views" bounty. The entry itself is the video: this program only
// hands the house the video's address, by copying VIDEO.json from the
// repository root to /output/VIDEO.json, where the gate reads it.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (error) {
  console.error(`Could not copy VIDEO.json from ${BOT_DIR}: ${(error as Error).message}`);
  process.exit(1);
}
