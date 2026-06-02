import { cp, mkdir, rm } from "node:fs/promises";
import { resolve, sep } from "node:path";

const publicDir = resolve("public");
const source = resolve("fm-recruitment", "out");
const target = resolve(publicDir, "fm-recruitment");

if (!target.startsWith(`${publicDir}${sep}`)) {
  throw new Error("Refusing to sync outside the public directory.");
}

await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(source, target, { recursive: true });
