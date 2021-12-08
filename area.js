const firstSide = document.querySelector("#first-side");
const secondSide = document.querySelector("#second-side");
const thirdSide = document.querySelector("#third-side");
const checkButton = document.querySelector("#check-Button");
const output = document.querySelector("#output");

function calculateArea() {
  a = Number(firstSide.value);
  b = Number(secondSide.value);
  c = Number(thirdSide.value);

  sp = (a + b + c) / 2;
  area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
  if (area == 0 || NaN) {
    ouput.innerText = "please enter a valid sides";
  } else {
    output.innerText = "The area of Triangle is " + area + " m.";
  }
}

checkButton.addEventListener("click", calculateArea);
