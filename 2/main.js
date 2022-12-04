const getAsNumbers = (inputString) => {
  const replacements = { A: 1, B: 2, C: 3, X: 1, Y: 2, Z: 3 };
  const result = inputString
    .replace(/[abcxyz]/gi, (x) => replacements[x])
    .split(" ");
  return result;
};

const calcRound = (opponent, me) => {
  let outcome = {
    1: { 1: 3, 2: 6, 3: 0 },
    2: { 1: 0, 2: 3, 3: 6 },
    3: { 1: 6, 2: 0, 3: 3 },
  }[opponent][me];
  return Number(me) + Number(outcome);
};

const { importData } = require("../utility.js");
let array = importData("./input.txt").split("\n");

//PART 1
const result = [];
array.forEach((x) => {
  const asNumbers = getAsNumbers(x);
  const myScore = calcRound(asNumbers[0], asNumbers[1]);
  result.push(myScore);
});
console.log(
  "Part1: ",
  result.reduce((a, b) => a + b, 0)
);

//PART 2
const myCallBack = (acc, [opponent, , me]) => {
  let outcome = {
    A: { X: 3, Y: 4, Z: 8 },
    B: { X: 1, Y: 5, Z: 9 },
    C: { X: 2, Y: 6, Z: 7 },
  }[opponent][me];
  return acc + outcome;
};
const resultPart2 = array.reduce(myCallBack, 0);
/* const resultPart2 = array.reduce((acc, [opponent, , me]) => {
  let outcome = {
    A: { X: 3, Y: 4, Z: 8 },
    B: { X: 1, Y: 5, Z: 9 },
    C: { X: 2, Y: 6, Z: 7 },
  }[opponent][me];
  return acc + outcome;
}, 0); */
console.log("Part2: ", resultPart2);
