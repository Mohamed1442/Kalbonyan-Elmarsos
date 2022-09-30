const mohamed = {
  fullName: "Mohamed Magdy",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const omar = {
  fullName: "omar Magdy",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

mohamed.calcBMI();
omar.calcBMI();

console.log(mohamed.calcBMI());
console.log(omar.calcBMI());

if (mohamed.calcBMI() > omar.calcBMI()) {
  console.log(
    `${mohamed.fullName}'s BMI (${mohamed.calcBMI()}) is higher than ${
      omar.fullName
    }'s BMI (${omar.calcBMI()})!`
  );
} else if (mohamed.calcBMI() < omar.calcBMI()) {
  console.log(
    `${omar.fullName}'s BMI (${omar.calcBMI()}) is higher than ${
      mohamed.fullName
    }'s BMI (${mohamed.calcBMI()})!`
  );
}
