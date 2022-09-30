console.log("-------------------------Challenge1--------------------------");

// Challenge1

// -----------------1-----------------------

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const choice = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    choice < this.answers.length && choice !== "";
    typeof choice === "number" && this.answers[choice]++;
    this.displayResults();
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};
// poll.registerNewAnswer();

// -----------------2-----------------------

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// -----------------Bounus-----------------------
const data1 = {
  answers: [5, 2, 3],
};
const data2 = {
  answers: [1, 5, 3, 9, 6, 1],
};
const displayResults = poll.displayResults;
displayResults.call(data1, "array");
displayResults.call(data1, "string");
displayResults.call(data2, "array");
displayResults.call(data2, "string");
