/*Crea una función en JavaScript que reciba tres strings y devuelva un string que
contenga el primer string con todas las apariciones del segundo
string sustituidas por el tercer string. 
Agrega un contador para saber cuantas veces aparece el segundo string en el primero*/

function reemplazarCadena(cad1, cad2, cad3) {
    let contador = 0;
    let nuevaCad = "";
    let posInicio = 0;
  
    while (cad1.indexOf(cad2, posInicio) !== -1) {
      // Encontrar la posición de la primera aparición de cad2 en cad1, empezando en pos
      let index = cad1.indexOf(cad2, posInicio); //devuelve -1 si no lo encuentra en ninguna posicion
      // Incrementar el contador de apariciones
      contador++;
      // Añadir a nuevaCad todo lo que está entre la última posición y esta aparición de cad2
      nuevaCad += cad1.substring(posInicio, index) +cad3;
      // Actualizar pos para empezar la búsqueda desde después de esta aparición de cad2
      posInicio = index + cad2.length;
    }
    // Añadir a nuevaCad todo lo que quede después de la última aparición de cad2
    nuevaCad += cad1.substring(posInicio);
    alert("Se ha reemplazado " + contador + " veces.\n" + "La cadena resultante es: " + nuevaCad);
  }

  reemplazarCadena("hojaaaa","a","aldre");
