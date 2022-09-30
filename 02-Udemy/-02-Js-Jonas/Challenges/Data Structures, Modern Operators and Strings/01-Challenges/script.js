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

// 1------------------------
const { players } = game;
const [players1, players2] = players;
console.log(players1, players2);
// 2------------------------
const [gk, ...fieldPlayers] = players1;

// 3------------------------
const allPlayers = [...players1, ...players2];

// 4------------------------

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// 5------------------------
const {
  odds: { team1, x: draw, team2 },
} = game;

// 6------------------------

const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  console.log(players.length);
};

printGoals(...game.scored);

// 7------------------------

team1 > team2 && console.log(`${game.team2} more likly to win! `);
team1 < team2 && console.log(`${game.team1} more likly to win! `);
