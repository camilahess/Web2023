let madre=document.documentElement;
console.log(madre.lang);
madre.lang="en"; //cambio el valor de lang del html
console.log(madre.nodeName);

let cabecera = document.head;
console.log(cabecera.nodeName);

let cuerpo = document.body;
console.log(cuerpo.nodeName);

//este va por elemento, único
let parrafo1= document.getElementById("p1");
console.log(parrafo1.nodeName);

//GET ELEMENTS SSSS siempre devuelve un array aunque tenga solo un nodo
let parrafosClass = document.getElementsByClassName("parrafos");
let parrafo2 = parrafosClass[0];
console.log(parrafo2.nodeName);
let parrafo3 = parrafosClass[1];
console.log(parrafo3.nodeName);

let parrafosName =document.getElementsByName("pultimo");
let parrafoUltimo = parrafosName [0];
console.log(parrafoUltimo.nodeName);

//array con todos los h1 que haya en la página, array de un elemento en este caso
let titulos = document.getElementsByTagName("h1");
let titulo1 = titulos[0];
console.log(titulo1.nodeName);

//ACCEDER AL CONTENIDO DE UNA ETIQUETA  del nodo donde estoy.
console.log(titulo1.innerHTML);