const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (dogArr1, dogArr2) {
  dogArr1 = dogArr1.slice(1, -2);
  console.log(dogArr1);
  const dogsAge = dogArr1.concat(dogArr2);

  dogsAge.forEach(function (dogAge, i) {
    if (dogAge > 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
      );
    } else if (dogAge < 3) {
      console.log(`Dog number ${i + 1} is still a puppy🐶`);
    }
  });
};

checkDogs(dogsJulia, dogsKate);
