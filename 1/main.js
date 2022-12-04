const { importData } = require("../utility.js");
let array = importData("./input.txt").split("\n\n");
array = array.map((data) => data.split("\n"));

const sums = [];
array.forEach((x) => {
  const initialValue = 0;
  const x_sum = x.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue),
    initialValue
  );
  sums.push(x_sum);
});
sums.sort((a, b) => b - a);

//Part 1
console.log("Highest: ", sums[0]);

//Part 2
const part2 = sums
  .slice(0, 3)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of top3: ", part2);
