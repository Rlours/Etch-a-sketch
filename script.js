let container = document.querySelector(".container");
let btn = document.querySelector(".btn");

function initialDisplay() {
  for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    container.style.gridTemplateColumns = `repeat(16, 1fr)`;
    container.style.gridTemplateRows = `repeat(16, 1fr)`;
    div.classList.add("box");
    container.appendChild(div);
  }
}

window.onload = initialDisplay();

const boxes = document.querySelectorAll(".box");
function mouseOver() {
  this.style.backgroundColor = "grey";
}

boxes.forEach((box) => box.addEventListener("mouseover", mouseOver));

function reset() {
  container.innerHTML = ""; //removes all existing boxes
  initialDisplay();
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => box.addEventListener("mouseover", mouseOver));
}

let resetBtn = document.querySelector(".reset-btn");

resetBtn.addEventListener("click", reset);

//To change the matrix or size of the grid

function squareNumbers() {
  container.innerHTML = "";
  let input = Number(prompt("Enter Matrix"));
  if (input < 80) {
    for (let i = 0; i < input * input; i++) {
      let div = document.createElement("div");
      container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
      container.style.gridTemplateRows = `repeat(${input}, 1fr)`;
      div.classList.add("box");
      container.appendChild(div);
    }
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => box.addEventListener("mouseover", mouseOver));
  }
}
btn.addEventListener("click", function () {
  squareNumbers();
});
