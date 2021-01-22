const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var number = 0;
var arr = [];
var cnt = 0;
var result = [];
rl.on("line", function (line) {
  if (cnt == 1) {
    arr = line.split(" ");
    arr.map((number) => result.push(parseInt(number)));
    rl.close();
  }
  number = parseInt(line);
  cnt += 1;
}).on("close", function () {
  result.sort((a, b) => a - b);
  const big = result[0];
  const small = result[result.length - 1];
  console.log(big, small);
  process.exit();
});

// ["1", "2", "3"].map((v) => {
//   console.log(v);
//   // arr.push(parseInt(v))
// });

// console.log(arr);
// console.log(a);

// ["1", "2"].map((e) => {
//   console.log(e);
// });

// var arr = [(1, 2), (3, 5)];
// const set = new Set([1, 1, 1, 1, 2, 3, 4]);
// const set2 = new Set([4, 5, 6, 7, 8]);
// "^".repeat(4)
// console.log("^" * 4);
// console.log(set - set2);
// const arr2 = Array.from(set, (e) => e + 1);
// if (1) arr.push(1), 1 + 1, 0;
// console.log(arr);
