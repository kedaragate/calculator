let numberButton = document.querySelectorAll(".number-button");
let operationButton = document.querySelectorAll(".operation-button");
let allClearButton = document.querySelector(".all-clear-button");
let clearButton = document.querySelector(".clear-button");
let equalButton = document.querySelector(".equal-button");
let previousOperand = document.querySelector(".previous-operand");
let currentOperand = document.querySelector(".current-operand");

let operator;
let previousOperandText = [];
let currentOperandText = [];

allClearButton.addEventListener("click", () => {
  currentOperand.textContent = "";
  previousOperand.textContent = "";
  operator = "";
});

numberButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText == ".") {
      if (currentOperand.textContent.includes(".")) {
        return;
      }
    }
    currentOperand.textContent =
      currentOperand.textContent + e.target.innerText;

    if (currentOperand.textContent.startsWith(".")) {
      currentOperand.textContent = "0. ";
    }
  });
});

operationButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    operator = e.target.innerText;

    previousOperand.textContent = currentOperand.textContent + operator;
    currentOperand.textContent = "";
  });
});
equalButton.addEventListener("click", () => {
  previousOperand.textContent =
    previousOperand.textContent + currentOperand.textContent;
  if (operator == "+") {
    currentOperand.textContent =
      parseFloat(previousOperand.textContent) +
      parseFloat(currentOperand.textContent);
  } else if (operator == "-") {
    currentOperand.textContent =
      parseFloat(previousOperand.textContent) -
      parseFloat(currentOperand.textContent);
  } else if (operator == "*") {
    currentOperand.textContent =
      parseFloat(previousOperand.textContent) *
      parseFloat(currentOperand.textContent);
  } else if (operator == "/") {
    currentOperand.textContent =
      parseFloat(previousOperand.textContent) /
      parseFloat(currentOperand.textContent);
  }
});
