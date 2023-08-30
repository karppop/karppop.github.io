//Nombré variables para todos los elementos que pensaba usar.
let nombreJugador = document.querySelector(".nombre-jugador");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegiOpcion = document.querySelector("#marca-tu-opcion");
let juegoEnCurso = true;

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-computadora");
//Con esto agrego un evento de click a todos los elementos con clase ".opcion".
//Cuando en cualquiera de estos botones se hace click, se ejecuta la funcion "iniciarTurno()".
let botonesOpcion = document.querySelectorAll(".opcion");
botonesOpcion.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

let puntosUsuario = 0;
let puntosPC = 0;

//Funcion para capturar el nombre de usuario ingresado y que figure en el campo de "Jugador".
function capturar() {
    let nombre = document.getElementById("nombreUsuario").value;
    
    if (nombre !== "") {
    nombreJugador.textContent = nombre;
  } else {
    alert("Debe ingresar su nombre");
  }
}
//Funcion para iniciar turno con la eleccion del usuario y la eleccion de la PC

function iniciarTurno(e) {

    if (!juegoEnCurso) {
        return;
    }
    // Con eta linea de codigo la PC hace su eleccion aleatoriamente entr 0, 1 y 2
    let eleccionPc = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.innerText;

    if (eleccionPc === 0) {
        eleccionPc = "Piedra✊";
    } else if (eleccionPc === 1) {
        eleccionPc = "Papel✋"
    } else if (eleccionPc === 2) {
        eleccionPc = "Tijera✌"
    }
    //Acá marco las reglas para establecer quien gana el punto en juego
    if (
        (eleccionUsuario === "Piedra✊" && eleccionPc === "Tijera✌") ||
        (eleccionUsuario === "Tijera✌" && eleccionPc === "Papel✋") ||
        (eleccionUsuario === "Papel✋" && eleccionPc === "Piedra✊")
    ) {
        ganaUsuario();
    } else if (
        (eleccionPc === "Piedra✊" && eleccionUsuario === "Tijera✌") ||
        (eleccionPc === "Tijera✌" && eleccionUsuario === "Papel✋") ||
        (eleccionPc === "Papel✋" && eleccionUsuario === "Piedra✊")
    ) {
        ganaPc();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPC.innerText = eleccionPc;

    if (puntosUsuario === 3 || puntosPC === 3) {

        if (puntosUsuario === 3) {
            instrucciones.innerText = "🔥 ¡Ganaste el juego! 🔥"
        }

        if (puntosPC === 3) {
            instrucciones.innerText = "😭 ¡La computadora ganó el juego! 😭"
        }

        if (puntosUsuario === 3 || puntosPC === 3) {
            juegoEnCurso = false;
        }

        elegiOpcion.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }
}

function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "¡Ganaste un punto! 🔥"
}

function ganaPc() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "¡La computadora ganó un punto! 😭"
}

function empate() {
    contenedorGanaPunto.innerText = "¡Empate! 😱"
}
//funcion para reiniciar el juego y todos sus parametros
function reiniciarJuego() {
    juegoEnCurso = true;
    reiniciar.classList.add("disabled");
    elegiOpcion.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsuario = 0;
    puntosPC = 0;
    
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;

    instrucciones.innerText = "El primero en llegar a 3 puntos gana."

    contenedorEleccionUsuario.innerText = "";
    contenedorEleccionPC.innerText = "";
    contenedorGanaPunto.innerText = "";

    nombreJugador.textContent = "Jugador";
    document.getElementById("nombreUsuario").value = "";
}





