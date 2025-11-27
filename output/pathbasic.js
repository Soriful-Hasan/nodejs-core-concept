const path = require("path");

console.log("\n", "_".repeat(100));
const fileName = __filename;
console.log(fileName);
console.log("\n", "_".repeat(100));

const dirName = ("directory", path.dirname(fileName));
console.log(dirName);
const fileExtension = ("directory", path.extname(fileName));
console.log("\n", "_".repeat(100));

console.log(fileExtension);
console.log("\n", "_".repeat(100));

const baseName = path.basename(fileName, path.extname(fileName));

console.log(baseName);
console.log("\n", "_".repeat(100));
