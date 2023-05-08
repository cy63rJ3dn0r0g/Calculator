const container = document.querySelector(".container");
const output = document.getElementById("output");
const prevOp = document.getElementById("prevOperant");
const currentOp = document.getElementById("currentOperant");
const numbers = container.querySelectorAll(".button");
const decimal = document.querySelector(".decimal");
const deleteEl = document.querySelector(".delete");
const equal = document.querySelector(".equal");
const subtract = document.querySelector(".substract");
const add = document.querySelector(".add");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const clearScreen = document.querySelector(".clearScreen");

let screenValue = "";
let firstOperand = null;
let operator = null;
let secondOperand = null;
let result = null;

function screenClear() {
  prevOp.innerHTML = "";
  currentOp.innerHTML = "";
  screenValue = "";
}

function deleteScreen() {
  currentOp.innerHTML = "";
  screenValue = screenValue.slice(0, -1);
}

function prevOperant() {
  prevOp.innerHTML = screenValue;
}

function screenUpdate() {
  currentOp.innerHTML = screenValue;
}

numbers.forEach((numEl) => {
  numEl.addEventListener("click", numberEl);
});

function numberEl(e) {
  const value = e.target.innerHTML;
  screenValue += value;
  screenUpdate();
  prevOperant();
  console.log(value + " is clicked!");
}

function addFunc(a, b) {
  return (result = a + b);
}

function subtractFunc(a, b) {
  return (result = a - b);
}

function multiplyFunc(a, b) {
  return (result = a * b);
}

function divideFunc(a, b) {
  return (result = a / b);
}

function decimalEl() {
  if (!screenValue.includes(".")) {
    screenValue += ".";
    screenUpdate();
    prevOperant();
  }
}

function handler(e) {
  if (currentOp.innerHTML !== "") {
    firstOperand = parseFloat(currentOp.innerHTML);
  } else if (screenValue !== "") {
    firstOperand = parseFloat(screenValue);
  } else {
    return;
  }
  operator = e.target.innerHTML;
  screenValue = "";
  screenUpdate();
  secondOperand = null;
}

function equalFunc() {
  if (secondOperand === null || isNaN(secondOperand)) {
    secondOperand = parseFloat(screenValue);
  }
  switch (operator) {
    case "+":
      result = addFunc(firstOperand, secondOperand);
      break;
    case "-":
      result = subtractFunc(firstOperand, secondOperand);
      break;
    case "*":
      result = multiplyFunc(firstOperand, secondOperand);
      break;
    case "/":
      if (secondOperand === 0) {
        currentOp.innerHTML = "Error : Can't be divided with Zero";
        return;
      }
      result = divideFunc(firstOperand, secondOperand);
      break;
  }
  currentOp.innerHTML = result;
  prevOp.innerHTML = "";
  screenValue = "";
  secondOperand = null;
}

add.addEventListener("click", handler);
subtract.addEventListener("click", handler);
multiply.addEventListener("click", handler);
divide.addEventListener("click", handler);
equal.addEventListener("click", equalFunc);
clearScreen.addEventListener("click", screenClear);
deleteEl.addEventListener("click", deleteScreen);
decimal.addEventListener("click", decimalEl);
