import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "I'm sorry I disputed your therapist's charges for 'services not rendered' because you've paid her for three years and still seem sad.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  process.env.MAKEFUN_OUTPUT ||
  "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`Wrote ${TEXT.length} characters to ${join(outDir, "entry.txt")}`);
