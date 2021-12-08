const quizForm = document.querySelector(".quiz-form");
const SubmitAnsButton = document.querySelector("#submit-ans-button");
const output = document.querySelector("#output");

const correctAns = ["90°", "250 sq.m"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAns[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  output.innerText = "your score is " + score;
}
SubmitAnsButton.addEventListener("click", calculateScore);
