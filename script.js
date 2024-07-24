const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let expression = "";
let mathGate = true;
let numGate = false;
let pointGate = false;
buttons.forEach((button) => {
  let btnValue = button.textContent;
  button.addEventListener("click", () => {
    if (btnValue === "CE") {
      expression = "";
      mathGate = true;
      numGate = false;
      pointGate = false;
      console.log(numGate, mathGate);
      display.textContent = expression;
    } else if (btnValue === "=") {
      let opp;
      let operation = expression.split(/([+\-*/])/);
      let first = Number(operation[0]);
      let second = Number(operation[2]);
      let result = 0;
      if (operation[1] === "+") {
        result = first + second;
      } else if (operation[1] === "-") {
        result = first + second;
      } else if (operation[1] === "*") {
        result = first + second;
      } else if (operation[1] === "/") {
        result = first + second;
      }

      display.textContent = result;
    } else if (btnValue === ".") {
      if (pointGate === false && numGate === true) {
        expression += btnValue;
        display.textContent = expression;
        pointGate = true;
      }
    } else {
      if (["+", "-", "*", "/"].includes(btnValue)) {
        if (mathGate === true && numGate === true) {
          expression += btnValue;
          display.textContent = expression;
        }
        mathGate = false;
        numGate = false;
        pointGate = false;
      } else {
        expression += btnValue;
        display.textContent = expression;
        numGate = true;
      }
    }
  });
});
