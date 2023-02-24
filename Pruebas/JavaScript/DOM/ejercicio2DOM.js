window.onload = function(){

    //let parrafos = document.getElementsByTagName("p");
    //utilizando el query
    let parrafos = document.querySelectorAll("p");

    let enlaces = document.getElementsByTagName("a");
    
    let numEnlaces = enlaces.length;
    parrafos[0].innerHTML = "Enlaces de la página: " + numEnlaces;

    let penultimo = enlaces[numEnlaces-2].href;
    parrafos[0].innerHTML += "<br>Penultimo enlace:" +penultimo;

  // Encuentra el número de enlaces que apuntan a http://prueba
  let numPrueba = 0;
  for (let i = 0; i < numEnlaces; i++) {
    if (enlaces[i].href === "http://prueba/") { //tengo que agregar siempre la barra al final
      numPrueba++;
    }
  }
/*
//ejemplo 2 de recorrer el array 
  for(let i in enlaces) {
    if(enlaces[i].href ===  "http://prueba/")
    numPrueba++;
  }

//ejemplo 3 recorrer
let numPrueba = 0;
 for (enlace of enlaces) if (enlace.href === "http://prueba/") numPrueba++;*/
  
  parrafos[0].innerHTML += "<br>Enlaces que apuntan a http://prueba :" +numPrueba;

  let tercerParrafo = parrafos[3].getElementsByTagName("a");
  parrafos[0].innerHTML += "<br>Enlaces del tercer párrafo:" +tercerParrafo.length;

    
}