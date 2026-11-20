// gta6-clipper-01 entry program (Node 22, standard library only).
//
// What it does: copies VIDEO.json from the repository root into the output
// directory, where the gate reads the YouTube address of the entered clip.
// Nothing else: the video itself is the entry, and the house reads its views
// from YouTube, so nothing this program writes about the video is scored.
//
// Run it the way the grader does (from the repository root):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`could not copy VIDEO.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
