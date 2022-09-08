let numberButton = document.querySelectorAll(".number-button");
let operationButton = document.querySelectorAll(".operation-button");
let allClearButton = document.querySelector(".all-clear-button");
let deleteButton = document.querySelector(".delete-button");
let equalButton = document.querySelector(".equal-button");
let previousOperand = document.querySelector(".previous-operand");
let currentOperand = document.querySelector(".current-operand");
let operator;


allClearButton.addEventListener ("click",()=>{
currentOperand.textContent="";
previousOperand.textContent="";
operator="";

})

numberButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    currentOperand.textContent =
      currentOperand.textContent + e.target.innerText;
/*if(button=="."){
currentOperand.textContent.contains(”.");
return;
else{
if(currentOperand.textContent="")
currentOperand.textContent="0.";
else{
currentOperand.textContent=currentOperand.textContent+".";

}
}
}*/
  });
});

operationButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    operator = e.target.innerText;
    previousOperand.textContent =previousOperand.textContent+ currentOperand.textContent+operator;
currentOperand.textContent ="";
    
  });
});
equalButton.addEventListener("click",()=>{
if (operator == "+") {
      currentOperand.textContent=
        parseFloat(previousOperand.textContent) +
        parseFloat(currentOperand.textContent)
     
    }
else if (operator == "-") {
      currentOperand.textContent=
        parseFloat(previousOperand.textContent) -
        parseFloat(currentOperand.textContent)
     
    }
else if (operator == "*") {
      currentOperand.textContent=
        parseFloat(previousOperand.textContent) *
        parseFloat(currentOperand.textContent)
     
    }
else if (operator == "/") {
      currentOperand.textContent=
        parseFloat(previousOperand.textContent) /
        parseFloat(currentOperand.textContent)
     
    }

})
