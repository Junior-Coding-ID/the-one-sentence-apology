import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "I'm sorry I added a twenty percent tip on your checkout screen so it wouldn't feel bad.";

function resolveOutputDir(): string {
  const fromEnv =
    process.env.MAKEFUN_OUTPUT_DIR ?? process.env.MAKEFUN_OUTPUT;
  if (fromEnv && fromEnv.length > 0) {
    return fromEnv;
  }
  return "/output";
}

function clearDirectoryContents(dir: string): void {
  for (const child of readdirSync(dir)) {
    rmSync(join(dir, child), { recursive: true, force: true });
  }
}

function main(): void {
  if (ENTRY_TEXT.length > 200) {
    throw new Error(
      `entry exceeds 200 characters: got ${ENTRY_TEXT.length}`,
    );
  }
  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  clearDirectoryContents(outDir);
  writeFileSync(join(outDir, "entry.txt"), ENTRY_TEXT, "utf8");
}

main();
