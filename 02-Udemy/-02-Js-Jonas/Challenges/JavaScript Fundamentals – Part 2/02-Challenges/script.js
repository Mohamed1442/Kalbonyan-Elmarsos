// Bills list
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let total = [];

// Tip calculation function
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  total[i] = tips[i] + bills[i];
}

console.log(tips, total);
