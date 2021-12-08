const firstAngle = document.querySelector("#first-angle");
const secondAngle = document.querySelector("#second-angle");
const thirdAngle = document.querySelector("#third-angle");
var checkButton = document.querySelector("#check");
var ouput = document.querySelector("#output");

function checkSumOfAngle() {
  console.log(thirdAngle.value);
  sum =
    Number(firstAngle.value) +
    Number(secondAngle.value) +
    Number(thirdAngle.value);

  if (sum ==180) {
    ouput.innerText = "The angles will form a Triangle";
  } else {
    ouput.innerText = "ooops!...The Angles will not form a Triangle";
  }
}

checkButton.addEventListener("click", checkSumOfAngle);
