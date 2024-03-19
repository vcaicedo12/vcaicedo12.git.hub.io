const display = document.getElementById("display");
let currentNumber = "";
let previousNumber = "";
let operation = "";

function updateDisplay(value) {
  display.value = value;
}

function clearAll() {
  currentNumber = "";
  previousNumber = "";
  operation = "";
  updateDisplay("");
}

function appendNumber(number) {
  currentNumber += number;
  updateDisplay(currentNumber);
}

function handleOperator(op) {
  // Handle cases where an operator is pressed before entering a number
  if (operation !== "" && currentNumber !== "") {
    calculate(); // Perform previous operation before applying new one
  }

  if (op === "sqrt") {
    // Handle sqrt operation immediately
    if (currentNumber === "") {
      alert("Error: Ingrese el numero primero para realizar Raiz Cuadrada.");
      return;
    }
    previousNumber = currentNumber;
    currentNumber = "";
    operation = op;
    calculate(); // Calculate square root directly
    return;
  }

  // Handle other operators (addition, subtraction, etc.)
  operation = op;
  previousNumber = currentNumber;
  currentNumber = "";
}

function calculate() {
  let result;
  const prev = parseFloat(previousNumber);
  const curr = parseFloat(currentNumber);

  switch (operation) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      if (curr === 0) {
        alert("Error: Division by zero!");
        return;
      }
      result = prev / curr;
      break;
    case "%":
      result = prev % curr;
      break;
    case "^":
      result = Math.pow(prev, curr);
      break;
    case "sqrt":
      if (prev < 0) {
        alert("Error: No se puede calcular la raíz cuadrada de un número negativo.");
        return;
      }
      result = Math.sqrt(prev);
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  previousNumber = "";
  operation = "";
  updateDisplay(currentNumber);
}

const buttons = document.querySelectorAll(".calculator button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;

    switch (value) {
      case "clear":
        clearAll();
        break;
      case "=":
        if (operation !== "") {
          calculate();
        }
        break;
      default:
        if (!isNaN(value) || value === ".") {
          appendNumber(value);
        } else {
          handleOperator(value);
        }
    }
  });
});

