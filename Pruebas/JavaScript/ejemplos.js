console.log("Hola que tal");
//console.error("Algo ha fallado");
//alert("Hola");


//variables en JS
// const pi = 3.1416; como en java es constante 
var x; //var ya no se recomienda utilizar
let y; //undefined

y = 5;//number
y = "hola";//string
y = true;//boolean

//let num1 = parseInt(prompt("Ingrese un número:")); //el prompt siempre es String, entonces hay que parsear el string a numero
//let num2 = Number(prompt("Ingrese otro número:"));
let num1 = +prompt("Ingrese un número");
let num2 = +prompt("Ingrese otro número"); //el + adelante convierte el string a numero
let mayor = (num1 > num2) ? num1 : num2;
let texto;

for (let i = 0; i < mayor; i++) {
    texto = prompt("Dame el texto del párrafo : " + i);
    document.write("<p>" + texto + "</p>");
}

//document.write("HOLA"); //IMPRIMIR EN HTML

// for(let i=0;i<20;i++)
//     if (i%2==0)
//         document.write("<p>Párrafo par</p>");
//     else
//         document.write("<p>Párrafo impar</p>");

//CAST IMPLICITO
let a = 3;
let b = "asdf";
let r1 = a * b; // b es “asdf”, y no será transformado a número
console.log(r1); // Imprime NaN
let c;
let r3 = a + c; // c es undefined, no será transformado a número
console.log(r3); // Imprime NaN
let d = "12";
console.log(a * d); // Imprime 36. d puede ser transformado al número 12
console.log(a + d); // Imprime 312. El operador + concatena si hay un string
console.log(a + +d); // Imprime 15. El operador ‘+’ delante de un valor lo transforma en numérico

//STRINGS

let s1 = "Esto es un string";
// Obtener la longitud del string
console.log(s1.length); // Imprime 17
// Obtener el carácter de una cierta posición del string (Empieza en 0)
console.log(s1.charAt(0)); // Imprime "E"
// Obtiene el índice de la primera ocurrencia
console.log(s1.indexOf("s")); // Imprime 1
// Obtiene el índice de su última ocurrencia
console.log(s1.lastIndexOf("s")); // Imprime 11
// Devuelve un array con todas las coincidencias en de una expresión regular
console.log(s1.match(/.s/g)); // Imprime ["Es", "es", " s"]
// Obtiene la posición de la primera ocurrencia de una expresión regular
console.log(s1.search(/[aeiou]/)); // Imprime 3
// Reemplaza la coincidencia de una expresión regular (o string) con un string (/g opcionalmente reemplazatodas)
console.log(s1.replace(/i/g, "e")); // Imprime "Esto es un streng"
// Devuelve un substring (posición inicial: incluida, posición final: no incluida)
console.log(s1.slice(5, 7)); // Imprime "es"
// Igual que slice
console.log(s1.substring(5, 7)); // Imprime "es"
// Como substring pero con una diferencia (posición inicial, número de caracteres desde la posición inicial)
console.log(s1.substr(5, 7)); // Imprime "es un s"
// Transforma en minúsculas, toLowerCase no funciona con caracteres especiales (ñ, á, é, ...)
console.log(s1.toLocaleLowerCase()); // Imprime "esto es un string"
// Transforma a mayúsculas
console.log(s1.toLocaleUpperCase()); // Imprime "ESTO ES UN STRING"
// Devuelve un string eliminando espacios, tabulaciones y saltos de línea del principio y final
console.log(" String con espacios ".trim()); // Imprime "String con espacios"

//Operaciones con NUMBER
let n1 = "32";
let n2 = "14";
console.log(Number(n1) + Number(n2)); // Imprime 46
console.log(+n1 + +n2); // Imprime 46 //el + adelante del número, castea el número a number

console.log("Raíz cuadrada de 9: " + Math.sqrt(9));
console.log("El valor de PI es: " + Math.PI);
console.log(Math.round(4.546342));
// Número aleatorio entre 1 y 10
console.log(Math.floor(Math.random() * 10) + 1);

//condiciones cuando se todos los casos
let userType = 1;
switch (userType) {
    case 1:
    case 2: // Tipos 1 y 2 entran aquí
        console.log("Puedes acceder a esta zona");
        break;
    case 3:
        console.log("No tienes permisos para acceder aquí");
        break;
    default: // Ninguno de los anteriores
        console.error("Tipo de usuario erróneo!");
}

//ejemplo do while
let num;
do{
  num=+prompt("Dame un número");

  if(isNaN(num))
  alert("Error!, necesito un número");
} while(isNaN(num));

let value = 1;
do { // Imprime 1 2 3 4 5
  console.log(value++);
} while (value <= 5);


//FOR
let limit=5;
for(let i =1; i <= limit;i++) { // Imprime 1 2 3 4 5
  console.log(i);
}