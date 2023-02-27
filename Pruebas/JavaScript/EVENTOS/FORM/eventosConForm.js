window.onload = function() {
    // Capturar el submit del formulario
    document.forms["formu"].addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar que se envíe el formulario
  
      let numFilas = document.forms["formu"]["filas"].value;
      let numColumnas = document.forms["formu"]["columnas"].value;
  
      // Validar que los valores introducidos sean números
      if (!validar(numFilas) || !validar(numColumnas)) {
        alert("Por favor, introduce números válidos para filas y columnas.");
        return false;
      }
  
      // Convertir los valores a números
      numFilas = parseInt(numFilas);
      numColumnas = parseInt(numColumnas);
  
      // Llamar a la función lanzar para crear la tabla
      lanzar(numFilas, numColumnas);
    });
  }
  
  function validar(num) {
    // Validar que el valor sea un número
    if (isNaN(num) || num=="" || num<1) {
      return false;
    }
  
    return true;
  }
  
  function crearTabla(numFilas, numColumnas) {
    let tabla = document.createElement("table");
    tabla.style.border = "2px solid green";
    tabla.style.borderCollapse = "collapse";
  
    // Crear las filas y columnas de la tabla
    for (let i = 1; i <= numFilas; i++) {
      let fila = document.createElement("tr");
  
      for (let j = 1; j <= numColumnas; j++) {
        let celda = document.createElement("td");
        celda.style.border = "2px solid green";
        celda.textContent = (i - 1) * numColumnas + j;
  
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
  
    return tabla;
  }
  
  function lanzar(numFilas, numColumnas) {
    // Crear la tabla
    let tabla = crearTabla(numFilas, numColumnas);
    document.body.appendChild(tabla);
  }