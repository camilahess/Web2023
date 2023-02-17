//ARRAYS
let a = new Array(); // Crea un array vacío
let b = new Array(10); // Crea un array de tamaño 10 undefined
//Multi type, String + number
let c = new Array("10", 5, 1); // Crea un array de tres elementos inicializados a los valores pasados


//nota alumnos
let nota=new Array(20);
let nota2=[2,3,4,5,6,7,8]; //declarar y asignar al mismo momento
nota[0]=1;
nota[1]=2;
nota[2]=3; //etc

//Acceso a elementos

let c1 = new Array(); // Crea un array vacío
a[0] = 13;
console.log(c1.length); // Imprime 1
console.log(a[0]); // Imprime 13
console.log(a[1]); // Imprime undefined

//Reducir longitud

let a2 = new Array("a", "b", "c", "d", "e"); // Array con 5 valores
console.log(a2[3]); // Imprime "d"
a2.length = 2; // Posiciones 2-4 serán destruidas
console.log(a2[3]); // Imprime undefined

//creación alternativa , añadir con length en la ultima posición
//lo mismo que hacer un PUSH 

let a3 = ["a", "b", "c", "d", "e"]; // Array de tamaño 5, con 5 valores inicialmente
console.log(typeof a3); // Imprime object
console.log(a3 instanceof Array); // Imprime true. a es una instancia de array
a3[a3.length] = "f"; // Insertamos in nuevo elemento al final
console.log(a3); // Imprime ["a", "b", "c", "d", "e", "f"]

//MÉTODOS
// Podemos insertar elementos al principio de un array (unshift)o al final (push).

let a4 = [];
a4.push("a"); // Inserta el valor al final del array
a4.push("b", "c", "d"); // Inserta estos nuevos valores al final
console.log(a4.valueOf()); // Imprime ["a", "b", "c", "d"]. Puedes omitir valueOf(), aun así será invocado
a4.unshift("A", "B", "C"); // Inserta nuevos valores al principio del array
console.log(a4.toString()); // Imprime A,B,C,a,b,c,d. toString() es un poco diferente de valueOf()

//ELIMINAR PRIMERA Y ÚLTIMA POSICIÓN
console.log(a4.pop()); // Imprime y elimina la última posición → "d"
console.log(a4.shift()); // Imprime y elimina la primera posición → "A"
console.log(a4); // Imprime ["B", "C", "a", "b", "c"]

// ELIMINAR / AGREGAR CON SPLICE

let a8 = ["a", "b", "c", "d", "e", "f"];
a8.splice(1, 3); // Elimina 3 elementos desde la posición 1 ("b", "c", "d")
console.log(a8); // Imprime ["a", "e", "f"]
a8.splice(1,1, "g", "h"); // Elimina 1 elemento en la posición 1 ("e"), e inserta "g", "h" en esa posición
console.log(a8); // Imprime ["a", "g", "h", "f"]
a8.splice(3, 0, "i"); // En la posición 3, no elimina nada, e inserta "i"
console.log(a8); // Imprime ["a", "g", "h", "i", "f"]

//IMPRIMIR ARRAY CON JOIN

let a6 = [3, 21, 15, 61, 9];
console.log(a6.join()); // Imprime "3,21,15,61,9""
console.log(a6.join(" -#- ")); // Imprime "3 -#- 21 -#- 15 -#- 61 -#- 9"

//CONCATENAR

let a7 = ["a", "b", "c"];
let b2 = ["d", "e", "f"];
let c2 = a.concat(b2);
console.log(c2); // Imprime ["a", "b", "c", "d", "e", "f"]
console.log(a7); // Imprime ["a", "b", "c"] . El array a no ha sido modificado


//método EVERY 
//Esta función recibirá cualquier elemento, lo testeará, y
//devolverá cierto o falso dependiendo de si cumple la condición o no.

let a = [3, 21, 15, 61, 9, 54];
console.log(a.every(function(num) { // Comprueba si cada número es menor a 100
return num < 100;
})); // Imprime true
console.log(a.every(function(num) { // Comprueba si cada número es par
return num % 2 == 0;
})); // Imprime false

//RECORRER ARRAY con función anónima

numeros.forEach(function(x){
    console.log(x);
});

for(let i=0;i<numeros.length;i++){
    console.log(numeros[i] + " " + i);
}

//el for in recorre los índices(pocisiones del array)
for (let x in numeros)
    console.log(x);

//esto es como el foreach
for (let num of numeros)
    console.log(num);

//MAPEO

let a = [4, 21, 33, 12, 9, 54];
console.log(a.map(function(num) {
return num*2;
})); // Imprime [8, 42, 66, 24, 18, 108]

//FILTRADO

let a = [4, 21, 33, 12, 9, 54];
console.log(a.filter(function(num) {
return num % 2 == 0; // Si devuelve true, el elemento se queda en el array devuelto
})); // Imprime [4, 12, 54]