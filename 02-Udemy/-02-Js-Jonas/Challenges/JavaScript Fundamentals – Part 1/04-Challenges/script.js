const data = 275;
const tip = data >= 50 && data <= 300 ? data * 0.15 : data * 0.2;

console.log(
  `The bill was ${data}, the tip was ${tip},and the total value is ${
    data + tip
  } `
);
