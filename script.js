let numberButton = document.querySelectorAll(".number-button");
let operationButton = document.querySelectorAll(".operation-button");
let allClearButton = document.querySelector(".all-clear-button");
let deleteButton = document.querySelector(".delete-button");
let equalButton = document.querySelector(".equal-button");
let previousOperand = document.querySelector(".previous-operand");
let currentOperand = document.querySelector(".current-operand");
let memoryHideButton = document.querySelector(".memory-hide-button");
let memoryShowButton = document.querySelector(".memory-show-button");
let operator;
let memoryArray = [];

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
  if (currentOperand.textContent.startsWith(operator)) {
    return null;
  }
  memoryArray.push(previousOperand.textContent);
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
      (parseFloat(previousOperand.textContent) * 10) /
      (parseFloat(currentOperand.textContent) * 10);
  }
});
memoryShowButton.addEventListener("click", () => {
  currentOperand.textContent = memoryArray.at(-1);
});
