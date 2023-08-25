


function capturar() {
  
  let nombre = document.getElementById("nombreUsuario").value;
  let nombreJugador = document.querySelector(".nombre-jugador");
  
  if (nombre !== "") {
    nombreJugador.textContent = nombre;
  } else {
    alert("Debe ingresar su nombre");
  }
}
