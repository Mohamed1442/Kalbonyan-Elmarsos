// Teams gymnastic Dolphins and koalas

const dolphinsAverage = (1 + 1 + 1) / 3;
const koalasAverage = (1 + 1 + 1) / 3;

if (dolphinsAverage > koalasAverage) {
  if (dolphinsAverage >= 100) {
    console.log("Dolphins are the Winners!");
  } else {
    console.log("Dolphins has higher score but they are not Winnder :(");
  }
} else if (dolphinsAverage < koalasAverage) {
  if (koalasAverage >= 100) {
    console.log("Koalas are the Winners!");
  } else {
    console.log("Koalas has higher score but they are not Winnder :(");
  }
} else {
  if (dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log("Draw");
  } else {
    console.log("Both have same score but No draw :(");
  }
}
