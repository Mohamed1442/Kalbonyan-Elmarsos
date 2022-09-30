let arr = [17, 21, -23];
const printForecast = function (arr) {
  let out = "...";
  for (let i = 1; i <= arr.length; i++) {
    out = out + ` ${arr[i - 1]}°C in ${i} days ...`;
  }

  return out;
};

console.log(printForecast(arr));
