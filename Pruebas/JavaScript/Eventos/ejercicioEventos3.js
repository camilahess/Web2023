/*
	si pulsamos el titulo eliminar el ultimo parrafo
	
	1) Pide al usuario filas y columnas
	2) Haz una tabla con esas filas y columnas usando DOM en el TABLE del HTML
	Poniendo número empezando por 1. 
	La tabla debe tener 2px solida y color verde. Y debe estar colapsada.
	3) Si pulsas sobre un TD multiplica por 2 el valor de la celda
	4) Si pasas el ratón por encima del TD que el borde del mismo se ponga
	con rojo y de 10px de grosor
	5) Si sale el ratón del TD vuelve a su borde normal

*/	
function pedirCosas(texto){
    let num;
    do{
        num=+prompt(texto); //el + es para convertirlo a número
    } while (isNaN(num) || num<1);
    return num;
}

window.onload = function() {

    let numFilas = pedirCosas("Introduce el número de filas:");
    let numColumnas = pedirCosas("Introduce el número de columnas:");


    // Crear la tabla
    let tabla = document.createElement("table");
    tabla.style.border = "2px solid green";
    tabla.style.borderCollapse = "collapse";
  
    // Crear las filas y columnas de la tabla
    for (let i = 1; i <= numFilas; i++) {
      let fila = document.createElement("tr");
  
      for (let j = 1; j <= numColumnas; j++) {
        let celda = document.createElement("td");
        celda.style.border = "2px solid green";
        celda.textContent = i * j;
  
        // Multiplicar por 2 el valor de la celda al hacer clic
        celda.addEventListener("click", function() {
          celda.textContent *= 2;
        });
  
        // Cambiar el borde al pasar el ratón
        celda.addEventListener("mouseover", function() {
          celda.style.border = "10px solid red";
        });
  
        // Restaurar el borde al sacar el ratón
        celda.addEventListener("mouseout", function() {
          celda.style.border = "2px solid green";
        });
  
        fila.appendChild(celda);
      }
  
      tabla.appendChild(fila);
    }
  
    document.body.appendChild(tabla);
  };