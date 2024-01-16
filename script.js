function appendNumber(number) {
  document.getElementById("result").value += number;
}

function appendOperator(operator) {
  const result = document.getElementById("result");
  const lastChar = result.value[result.value.length - 1];

  if (
    !isNaN(lastChar) && lastChar !== "." ||
    operator === "." && result.value.indexOf(".") === -1
  ) {
    result.value += operator;
  }
}

function clearScreen() {
  document.getElementById("result").value = "";
}

function calculate() {
  try {
    const expression = document.getElementById("result").value;
    const result = eval(expression);
    document.getElementById("result").value = result;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}
