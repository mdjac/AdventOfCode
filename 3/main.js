const { importData } = require("../utility.js");
let array = importData("./input.txt").split("\n");

const result = [];

array.forEach((x) => {
  //Split string på midten
  const charsOnEachSide = x.length / 2;
  //Removes duplicates
  const firstHalf = new Set(x.substring(0, charsOnEachSide));
  const secondHalf = x.substring(charsOnEachSide);
  //Find bogstaver CASE SENSITIVY som er i begge strings
  //Tilføj til array.
  firstHalf.forEach((x) => {
    if (secondHalf.includes(x)) {
      result.push(x);
    }
  });
});
//Lav priority number lookup
//Laver et array fra a-z
const N = 26;
const arr = [...Array(N + 1).keys()].slice(1);
const alphUpper = arr.map((x) => String.fromCharCode(x + 64));
const alphLower = alphUpper.map((x) => x.toLowerCase());
const consolidated = [...alphLower, ...alphUpper];

const finalResult = result.reduce((acc, x) => {
  const score = consolidated.indexOf(x) + 1;
  return acc + score;
}, 0);

console.log("Part1: ", finalResult);

//Part 2
function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}
console.log(array);
const test = sliceIntoChunks(array, 3);
console.log(test);

const resultpart2 = [];
test.forEach((x) => {
  const mySet = new Set(x[0]);
  mySet.forEach((y) => {
    if (x[1].includes(y) && x[2].includes(y)) {
      resultpart2.push(y);
    }
  });
});
console.log(resultpart2);

const finalResult2 = resultpart2.reduce((acc, x) => {
  const score = consolidated.indexOf(x) + 1;
  return acc + score;
}, 0);
console.log(finalResult2);
