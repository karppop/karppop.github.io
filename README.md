# Informe Piedra Papel Tijera

## PARTE 1: Estructura básica HTML y estilos CSS

* `ìndex.html`este es el archivo base para todo el proyecto.

* `style.css`archivo para dar estilos generales.

## PARTE 2: Obtención del nombre del jugador

* `script.js` archivos para las acciones dinamicas de la app:

     * `capturar()`: función para capturar el nombre del usuario.
     Le puse un alert para que indique que el campo a rellenar está aun vacio.
     Y con el nombre ingresado reemplazo el parrafo que decia jugador, asi durante la partida, queda el juego personalizado con este.
          
## Parte 3: Seleccion de la opcion del jugador y del oponente

Para las opciones usé emojis del sistema ✊✋✌
* `Math.floor(Math.random() * 3)`con esto obtuve una eleccion aleatoria entre 0 y 2 para las opciones de la PC  