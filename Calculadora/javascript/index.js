const display = document.querySelector(".result");
const valor = document.querySelectorAll(".btn-input")

let currentValue = 0;

clearDisplay();

function clearDisplay() {
  currentValue = 0;
  display.textContent = currentValue;
}

function addValue(valor) {
    if (currentValue === 0 || currentValue === "Error"){
        currentValue = valor;
    }else{
        currentValue += valor;
    }
  display.textContent = currentValue;
}

function resultTotal() {
    try {
      let resultado = eval(currentValue);
      if (isNaN(resultado) || !isFinite(resultado)) {
        currentValue = "Error";
      } else {
        currentValue = resultado;
      }
    } catch (error) {
      currentValue = "Error";
    }
    display.textContent = currentValue;
  }

valor.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.textContent === "C") {
      clearDisplay();
    }else if (element.textContent === "="){
        resultTotal();
    } else {
      addValue(element.textContent);
    }
  });
});



