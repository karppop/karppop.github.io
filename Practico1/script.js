let operacionSelect = document.getElementById("operacion");
let resultadoDiv = document.getElementById("resultado");
let operador1Input = document.getElementById("operador1");
let operador2Input = document.getElementById("operador2");

function esNumero(texto) {
    return /^\d+$/.test(texto);
}

function calcular(){
    let num1 = Number(operador1Input.value);
    let num2 = Number(operador2Input.value);
    let operacion = operacionSelect.value;
    let resultado;
    
    if (!esNumero(num1)|| !esNumero(num2)) {
        resultado = "Por favor, ingrese números válidos"
    }
  switch (operacion) {
    case "+" :
        resultado = num1 + num2;
    break;
    
    case "-":
        resultado = num1 - num2;
    break;
    
    case "*":
        resultado = num1 * num2;
    break;
    
    case "/":
       if (num2 === 0) {
        resultado = "Error: No se puede dividir por 0";
      } else {
          resultado = num1 / num2;
        }
        break; 
    
    default: 
        resultado = "Operacion no valida";  
  }

  resultadoDiv.textContent = resultado;
  
    
  }




function reiniciar() {
    operador1Input.value = "";
    operador2Input.value = "";
    resultadoDiv.textContent = "";
}