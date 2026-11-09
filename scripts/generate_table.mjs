import fs from "fs";
import { build } from "esbuild";
import { resolve } from "path";
import { pathToFileURL } from "url";

const root = process.cwd();
const cache = resolve(root, ".cache");

const foodOut = resolve(cache, "food-data-temp.mjs");
await build({
  entryPoints: [resolve(root, "src/data/foodData.ts")],
  bundle: true,
  format: "esm",
  platform: "node",
  outfile: foodOut,
  logLevel: "silent",
});
const foodMod = await import(pathToFileURL(foodOut).href);
const dishes = foodMod.getAllDishes();

const infoOut = resolve(cache, "info-data-temp.mjs");
await build({
  entryPoints: [resolve(root, "src/data/infographicsData.ts")],
  bundle: true,
  format: "esm",
  platform: "node",
  outfile: infoOut,
  logLevel: "silent",
});
const infoMod = await import(pathToFileURL(infoOut).href);

const photoJson = JSON.parse(fs.readFileSync("src/data/photography.json", "utf-8")).dishes;

function getPhoto(dishId, key) {
  const p = photoJson[dishId];
  if (!p) return undefined;
  const stage = p[key];
  if (!stage) return undefined;
  if (stage.status === "verified" && stage.local) return stage.local;
  if (stage.fallback) return stage.fallback;
  return undefined;
}

const table = [];

for (const dish of dishes) {
  const dishId = dish.id;
  const entries = [
    { key: "origin", stageNum: 1 },
    { key: "ingredients", stageNum: 2 },
    { key: "method", stageNum: 3 }
  ];

  const circles = [];

  entries.forEach((entry, index) => {
    const next = entries[index + 1];
    let nextUrl = next ? (getPhoto(dishId, next.key) || infoMod.getInfographicForStage(dishId, next.stageNum)?.image) : undefined;

    if (dishId === "puran-poli") {
      if (index === 0) nextUrl = "/images/dishes/puran-poli-2.png";
      else if (index === 1) nextUrl = "/images/dishes/puran-poli-1.png";
      else if (index === 2) nextUrl = undefined;
    } else if (dishId === "makki-di-roti-sarson-saag") {
      if (index === 0) nextUrl = "/images/dishes/makki-di-roti-sarson-saag-stage-2.webp";
      else if (index === 1) nextUrl = "/images/dishes/makki-2.png";
      else if (index === 2) nextUrl = undefined;
    } else if (dishId === "butter-chicken") {
      if (index === 0) nextUrl = "/images/dishes/butter-chicken-ingredients.png";
      else if (index === 1) nextUrl = "/images/dishes/butter-chicken-2.png";
      else if (index === 2) nextUrl = undefined;
    } else if (dishId === "dhokla") {
      if (index === 0) nextUrl = "/images/dishes/dhokla-1.png";
      else if (index === 1) nextUrl = "/images/dishes/dhokla-2.png";
    } else if (dishId === "undhiyu") {
      if (index === 0) nextUrl = "/images/dishes/undhiyu-1.png";
      else if (index === 1) nextUrl = "/images/dishes/undhiyu-2.png";
    } else if (dishId === "dal-baati-churma") {
      if (index === 0) nextUrl = "/images_updated/WhatsApp Image 2026-11-08 at 02.46.45.jpeg";
      else if (index === 1) nextUrl = "/images_updated/WhatsApp Image 2026-11-08 at 02.46.45.jpeg";
    } else if (dishId === "laal-maas") {
      if (index === 0) nextUrl = "/images/dishes/laal-maas-1.png";
      else if (index === 1) nextUrl = "/images_updated/WhatsApp Image 2026-11-08 at 02.47.17.jpeg";
    } else if (dishId === "ghewar") {
      if (index === 0) nextUrl = "/images/dishes/ghewar-stage-4.webp";
      else if (index === 1) nextUrl = "/images_updated/WhatsApp Image 2026-11-08 at 02.47.42.jpeg";
    } else if (dishId === "goan-fish-curry") {
      if (index === 0) nextUrl = "/images/dishes/goan-fish-curry-stage-3.webp";
      else if (index === 1) nextUrl = "/images_updated/WhatsApp Image 2026-11-08 at 02.33.36.jpeg";
    } else if (dishId === "pork-vindaloo") {
      if (index === 0) nextUrl = "/images/dishes/pork-vindaloo-stage-4.webp";
      else if (index === 1) nextUrl = "/images_updated/WhatsApp Image 2026-11-08 at 02.34.14.jpeg";
    } else if (dishId === "bebinca") {
      if (index === 0) nextUrl = "/images/dishes/bebinca-stage-4.webp";
      else if (index === 1) nextUrl = "/images_updated/WhatsApp Image 2026-11-08 at 02.36.07.jpeg";
    } else if (dishId === "indori-poha") {
      if (index === 1) nextUrl = "/images/dishes/indori-poha-stage-3.webp";
    } else if (dishId === "bhutte-ka-kees") {
      if (index === 0) nextUrl = "/images/dishes/bhutte-ka-kees-1.png";
      else if (index === 1) nextUrl = "/images/dishes/bhutte-ka-kees-2.png";
    } else if (dishId === "dal-bafla") {
      if (index === 0) nextUrl = "/images/dishes/dal-bafla-1.png";
      else if (index === 1) nextUrl = "/images/dishes/dal-bafla-2.png";
    } else if (dishId === "amritsari-kulcha") {
      if (index === 0) nextUrl = "/images/dishes/amritsari-kulcha-1.png";
      else if (index === 1) nextUrl = "/images/dishes/amritsari-kulcha-2.png";
    } else if (dishId === "puttu") {
      nextUrl = "/images/dishes/puttu-circle-1.jpg";
    } else if (dishId === "fish-molee") {
      nextUrl = "/images/dishes/fish-molee-circle-1.jpg";
    } else if (dishId === "appam-stew") {
      nextUrl = "/images/dishes/appam-circle-2.jpg";
    } else if (dishId === "siddu") {
      if (index === 0) nextUrl = "/images/dishes/siddu-stage-3.webp";
      else if (index === 1) nextUrl = "/images/dishes/siddu-circle-2.jpg";
    }

    if (nextUrl) {
      circles.push({ circleNum: circles.length + 1, path: nextUrl, role: `Stage ${entry.stageNum} secondaryImage badge` });
    }
  });

  const floatingOrb =
    dishId === "puttu"
      ? "/images/dishes/puttu-circle-2.jpg"
      : dishId === "fish-molee"
        ? "/images/dishes/fish-molee-circle-2.jpg"
        : dishId === "appam-stew"
          ? "/images/dishes/appam-circle-1.jpg"
          : undefined;

  if (floatingOrb) {
    circles.push({ circleNum: circles.length + 1, path: floatingOrb, role: "floatingOrb background plate" });
  }

  table.push({
    dishName: dish.name,
    dishId: dish.id,
    state: dish.state,
    circleCount: circles.length,
    circles
  });
}

fs.writeFileSync(".cache/dishes-table.json", JSON.stringify(table, null, 2));
console.log("Written table data for", table.length, "dishes.");
