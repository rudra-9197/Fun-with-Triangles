const firstSide = document.querySelector("#first-side");
const secondeSide = document.querySelector("#second-side");
const checkHyp = document.querySelector("#checkButton");
const hypOutput = document.querySelector("#output");

function calculateHyp() {
  hyp = Math.sqrt(
    firstSide.value * firstSide.value + secondeSide.value * secondeSide.value
  );
  console.log(hyp);
  hypOutput.innerText =
    "The Hypotenuse of Triangle is " + Number(hyp).toFixed(2) + " m";
}

checkHyp.addEventListener("click", calculateHyp);
