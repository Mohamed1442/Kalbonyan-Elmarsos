document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value.toLocaleLowerCase();
  const textArr = text.split("\n");

  const textArrNew = [];
  for (const [index, item] of textArr.entries()) {
    const itemArr = item.split("_");
    itemArr[1] = itemArr[1][1].toUpperCase() + itemArr[1].slice(1);
    textArrNew.push(itemArr.join(""));
    const finalText =
      itemArr.join("").trim().padEnd(30, " ") + "✅".repeat(index + 1);
    console.log(finalText);
  }
  console.log(textArrNew.join("\n"));
});

const arr = ["1", "2", "3", "4"];

for (const [index, item] of arr.entries()) {
  const val = item + "✅".repeat(index + 1);
  console.log(val);
}
