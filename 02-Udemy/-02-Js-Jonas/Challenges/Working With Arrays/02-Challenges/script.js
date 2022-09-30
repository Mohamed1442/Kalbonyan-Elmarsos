const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

checkDogs(dogsJulia, dogsKate);

const dogAges = dogsJulia.slice(1, -2).concat(dogsKate);

const calcAverageHumanAge = function (dogeAges) {
  const averageHumanAge = dogeAges.map((dogAge) =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  const filterdAges = averageHumanAge.filter((humanAge) => humanAge >= 18);
  const average = filterdAges.reduce(
    (acc, cur, _, arr) => acc + cur / arr.length,
    0
  );

  console.log(average);
};

calcAverageHumanAge();
