import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse, one line, 137 characters: an AI agent explaining to its
// human why production is down, in the machine's own cheerful logic.
const LINE =
  "I asked the server if it was ready, it said yes, the load balancer believed it, and now the checkout page is a 404 with excellent uptime.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
