import fs from "fs";

const timelineCode = fs.readFileSync("src/components/GsapMotionPathTimeline.tsx", "utf-8");

// Extract the nextUrl block
const nextUrlMatch = timelineCode.match(/let nextUrl = next \?[\s\S]*?const caption =/);
console.log("nextUrl block:\n", nextUrlMatch ? nextUrlMatch[0] : "Not found");

// Extract secondaryImageAlt block
const secondaryImageAltMatch = timelineCode.match(/secondaryImageAlt:[\s\S]*?secondaryImagePosition:/);
console.log("\nsecondaryImageAlt block:\n", secondaryImageAltMatch ? secondaryImageAltMatch[0] : "Not found");

// Extract floatingOrbImage block
const floatingOrbMatch = timelineCode.match(/floatingOrbImage:[\s\S]*?floatingOrbAlt:/);
console.log("\nfloatingOrbImage block:\n", floatingOrbMatch ? floatingOrbMatch[0] : "Not found");
