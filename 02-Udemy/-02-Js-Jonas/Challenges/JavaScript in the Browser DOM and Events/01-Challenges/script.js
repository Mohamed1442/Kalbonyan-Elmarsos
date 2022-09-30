const randomGenerator = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = randomGenerator();

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = randomGenerator();
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
});
