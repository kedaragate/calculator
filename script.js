let numberButton = document.querySelectorAll(".number-button");
let operationButton = document.querySelectorAll(".operation-button");
let allClearButton = document.querySelector(".all-clear-button");
let deleteButton = document.querySelector(".delete-button");
let equalButton = document.querySelector(".equal-button");
let previousOperand = document.querySelector(".previous-operand");
let currentOperand = document.querySelector(".current-operand");

numberButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    currentOperand.textContent =
      currentOperand.textContent + e.target.innerText;
  });
});

operationButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    let operator = e.target.innerText;
    previousOperand.textContent = currentOperand.textContent;
    if (operator === "+") {
      return (
        parseFloat(previousOperand.textContent) +
        parseFloat(currentOperand.textContent)
      );
    }
  });
});
