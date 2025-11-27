const fs = require("fs");

fs.writeFileSync("data/entries/new.txt", "hello");

fs.unlink("data/entries/new.txt", (error) => {
  if (error) {
    console.log(error.message);
  }
  console.log("file delete successfully");
});
