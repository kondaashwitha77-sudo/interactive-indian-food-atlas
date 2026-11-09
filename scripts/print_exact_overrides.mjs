import fs from "fs";

const timelineCode = fs.readFileSync("src/components/GsapMotionPathTimeline.tsx", "utf-8");

const startIdx = timelineCode.indexOf('if (dishId === "puran-poli")');
const endIdx = timelineCode.indexOf('const caption =');

console.log(timelineCode.substring(startIdx, endIdx));
