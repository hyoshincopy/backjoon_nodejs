const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var number = 0;
var arr = [];
var cnt = 0;
var gatsu = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var result = [];
var value = 1;
rl.on("line", function (line) {
  if (cnt == 2) {
    value *= parseInt(line);
    rl.close();
  }
  value *= parseInt(line);
  cnt += 1;
}).on("close", function () {
  value = value.toString();
  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < 10; j++) {
      if (value[i] == j) {
        gatsu[j] += 1;
      }
    }
  }
  for (let i = 0; i < 10; i++) console.log(gatsu[i]);
  process.exit();
});
