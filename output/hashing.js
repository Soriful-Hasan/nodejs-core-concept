const crypto = require("crypto");
// console.log(crypto);
const hashedPassword = crypto
  .createHash("md5")
  .update("sorifulHasan$$33")
  .digest("hex");
console.log(hashedPassword);

const strongHash = crypto.createHash("sha256").update("pass").digest("hex");
console.log(strongHash);

const moreStrongHash = crypto.createHash("sha512").update("pass").digest("hex");
console.log(moreStrongHash);
