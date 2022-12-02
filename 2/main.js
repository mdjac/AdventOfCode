//Oversæt til 1,2,3 istedet for bogstaver
const getAsNumbers = (inputString) => {
  const replacements = { A: 1, B: 2, C: 3, X: 1, Y: 2, Z: 3 };
  const result = inputString
    .replace(/[abcxyz]/gi, (x) => replacements[x])
    .split(" ");
  return result;
};

//Funktion der tager 2 tal og returnere en vinder og returnere MIN score
const calcRound = (_otherPlayer, _me) => {
  const otherPlayer = Number(_otherPlayer);
  const me = Number(_me);

  let myScore;

  //For win/draw/loss
  if (me == otherPlayer) {
    myScore = 3;
  } else if (me > otherPlayer) {
    myScore = 6;
  } else {
    myScore = 0;
  }
  myScore = myScore + me;
  return myScore;
};

//Få input i double array
const filepath = "./input.txt";
const fs = require("fs");
let array = fs.readFileSync(filepath).toString().split("\n");
console.log(array.length);

//Loop over alle runder og saml resultatet
const result = [];
array.forEach((x) => {
  const asNumbers = getAsNumbers(x);
  const myScore = calcRound(asNumbers[0], asNumbers[1]);
  result.push(myScore);
});
result.sort();
console.log(result.reduce((a, b) => a + b, 0));
