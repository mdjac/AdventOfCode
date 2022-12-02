const filepath = "./input.txt";
const fs = require("fs");
let array = fs.readFileSync(filepath).toString().split("\n\n");
array = array.map((data) => data.split("\n"));

let highest = 0;
array.forEach((x) => {
  const initialValue = 0;
  const x_sum = x.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue),
    initialValue
  );
  if (x_sum > highest) {
    console.log(x);
    highest = x_sum;
  }
});

console.log(highest);
