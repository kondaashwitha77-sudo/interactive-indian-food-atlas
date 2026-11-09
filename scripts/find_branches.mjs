import fs from "fs";

const timelineCode = fs.readFileSync("src/components/GsapMotionPathTimeline.tsx", "utf-8");

// Let's find all dishIds in the nextUrl block
const nextUrlBranches = [];
const nextUrlRegex = /(?:if|else if)\s*\(\s*dishId\s*===\s*"([^"]+)"\s*\)\s*\{([\s\S]*?)(?=(?:else if|\/\/|\n\s*const caption|\n\s*const entries|\n\s*const verifiedUrl))/g;

let match;
while ((match = nextUrlRegex.exec(timelineCode)) !== null) {
  const dishId = match[1];
  const body = match[2];
  nextUrlBranches.push({ dishId, body: body.trim() });
}

console.log("Found", nextUrlBranches.length, "dishes with nextUrl overrides:");
nextUrlBranches.forEach(b => {
  console.log("Dish:", b.dishId);
  console.log(b.body);
  console.log("---");
});
