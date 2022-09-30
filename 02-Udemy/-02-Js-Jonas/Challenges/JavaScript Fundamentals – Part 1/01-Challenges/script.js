const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnkBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnkBMI;

console.log(markBMI, johnkBMI);
