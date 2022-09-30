const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// ------------------------ 1 ------------------------
for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}
// ------------------------ 2 ------------------------

let oddSum = 0;
const oddArr = Object.values(game.odds);
for (const odd of oddArr) {
  oddSum += odd;
}

const oddAvg = oddSum / oddArr.length;

console.log(oddAvg);
// ------------------------ 3 ------------------------
const oddEntries = Object.entries(game.odds);

for (const [team, odd] of oddEntries) {
  console.log(
    // `Odd of${game[team] ? ' vectory' : ''} ${game[team] ?? 'draw'}: ${odd}`
    `Odd of ${game[team] ? `vectory ${game[team]}` : "draw"}: ${odd}`
  );
  // `Odd of ${game[team] ? `vectory ${game[team]}` : 'draw'}: ${odd}`
}
// ------------------------ 4 ------------------------
const scores = {};
for (const player of game.scored) {
  let i = 0;
  for (const [index] of game.scored.entries()) {
    game.scored[index] === player && i++;
  }
  scores[player] = i;
}

// ------------------Another solution--------------------------
// for (const player of game.scored) {
//   scores[player] ? (scores[player] = scores[player] + 1) : (scores[player] = 1);
// }

console.log(scores);
