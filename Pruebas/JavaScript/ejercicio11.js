/*Solicita 2 números al usuario y debes devolver lo
siguiente:
Cantidad de pares
Cantidad de Impares
Cantidad de positivos
Cantidad de negativos
Muestra todos los números que hay entre uno y otro,
contando ambos.
Devuelve la suma de todos
Devuelve el factorial del mayor de los números*/

function pedirNumero(texto, texto2) {
    let numero;
    do {
        numero = prompt(texto);
        if (numero == "")
            alert("Error!, el número no puede ser vacío");
        if (isNaN(numero))
            alert(texto2);
    } while (isNaN(numero) || numero == "");
    return +numero;
}
let num1, num2;
num1= pedirNumero("Dame un número", "Error!, te he dicho que me des un número");
num2= pedirNumero("Dame otro número", "Error!, te he dicho que me des otro número");


let min = Math.min(num1, num2);
let max = Math.max(num1, num2);

let pares = 0, impares = 0, positivos = 0, negativos = 0, suma = 0,
    factorial = 1,
    cadena = "";

for (let i = min; i <= max; i++) {
    suma += i;
    pares += (i % 2 === 0 ? 1 : 0);
    impares += (i % 2 !== 0 ? 1 : 0);
    positivos += (i > 0 ? 1 : 0);
    negativos += (i < 0 ? 1 : 0);
    cadena = cadena + " " + i;
}

for (let i = 1; i > 0 && i <= max; i++) {
    factorial *= i;
}


console.log("Cantidad de pares: " + pares);
console.log("Cantidad de impares: " + impares);
console.log("Cantidad de positivos: " + positivos);
console.log("Cantidad de negativos: " + negativos);
console.log("Todos los números entre " + min + " y " + max + ":" + cadena);
console.log("Suma total: " + suma);
console.log("Factorial del número mayor: " + factorial);


//ejercicio11 programacion funcional 
/*
let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));

if (num1 > num2) {
  [num1, num2] = [num2, num1];
}

const range = Array.from({length: num2 - num1 + 1}, (_, i) => num1 + i);

const pares = range.filter(n => n % 2 === 0).length;
const impares = range.filter(n => n % 2 !== 0).length;
const positivos = range.filter(n => n > 0).length;
const negativos = range.filter(n => n < 0).length;
const suma = range.reduce((a, b) => a + b, 0);
const mayor = Math.max(...range);
const factorial = (n => n === 0 ? 1 : n * factorial(n - 1))(mayor);

console.log("Cantidad de pares: " + pares);
console.log("Cantidad de impares: " + impares);
console.log("Cantidad de positivos: " + positivos);
console.log("Cantidad de negativos: " + negativos);
console.log("Todos los números entre " + num1 + " y " + num2 + ":");
console.log(...range);
console.log("Suma total: " + suma);
console.log("Factorial del número mayor: " + factorial);*/
