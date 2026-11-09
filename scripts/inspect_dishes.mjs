import fs from "fs";
import { build } from "esbuild";
import { resolve } from "path";
import { pathToFileURL } from "url";

const root = process.cwd();
const cache = resolve(root, ".cache");
fs.mkdirSync(cache, { recursive: true });
const out = resolve(cache, "inspect-all-dishes.mjs");

await build({
  entryPoints: [resolve(root, "src/data/foodData.ts")],
  bundle: true,
  format: "esm",
  platform: "node",
  outfile: out,
  logLevel: "silent",
});

const mod = await import(pathToFileURL(out).href);
const dishes = mod.getAllDishes();
const photoJson = JSON.parse(fs.readFileSync("src/data/photography.json", "utf-8"));
const infographicsJson = JSON.parse(fs.readFileSync("src/data/infographicsData.ts", "utf-8").replace("export const INFOGRAPHICS_DATA = ", "").replace(/;\s*$/, ""));

console.log("Total dishes:", dishes.length);
