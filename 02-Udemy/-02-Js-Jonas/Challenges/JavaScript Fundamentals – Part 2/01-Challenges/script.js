const calcAverage = (a, b, c) => (a + b + c) / 3;

let dolphinsAverage = calcAverage(44, 23, 71);
let koalasAverage = calcAverage(65, 54, 49);

console.log(dolphinsAverage);
console.log(koalasAverage);

const checkWinner = function (dolphinsAverage, koalasAverage) {
  if (dolphinsAverage > koalasAverage * 2) {
    console.log(`Dolphins wins. (${dolphinsAverage} vs ${koalasAverage}) `);
  } else if (dolphinsAverage * 2 < koalasAverage) {
    console.log(`Koalas wins. (${koalasAverage} vs ${dolphinsAverage})`);
  } else {
    console.log("Now team win.");
  }
};
// Test 1
checkWinner(dolphinsAverage, koalasAverage);

// Test 2
dolphinsAverage = calcAverage(85, 54, 41);
koalasAverage = calcAverage(23, 34, 27);

console.log(dolphinsAverage);
console.log(koalasAverage);

checkWinner(dolphinsAverage, koalasAverage);
