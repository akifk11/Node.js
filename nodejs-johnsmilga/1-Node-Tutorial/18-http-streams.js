const { createReadStream, writeFileSync } = require("fs");

// for (let i = 0; i < 1000; i++) {
//   writeFileSync("./content/big.txt", `hello world ${i}`, { flag: "a" });
// }
// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream("./content/big.txt", { encoding: "utf8" });
const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (result) => {
  console.log(result);
});
