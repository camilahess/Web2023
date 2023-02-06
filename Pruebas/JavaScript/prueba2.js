//pide un string al usuario
//Di cuantas vocales tiene ese string
//devuelve la cadena invertida

let texto = prompt("Ingrese un texto:");
texto = texto.toLocaleLowerCase();
let contador = 0;
let reves = "";

for (let i = 0; i < texto.length; i++) {
  // if (texto.charAt(i) === 'a' || texto.charAt(i) === 'e' || texto.charAt(i) === 'i' || texto.charAt(i) === 'o' || texto.charAt(i) === 'u') {
  if (texto[i].match(/[aeiou]/)) { // usando expresión regular
    contador++;
  }
  reves = texto.charAt(i) + reves; //usando el mismo for
}

// for (let i = texto.length - 1; i >= 0; i--) {
//     reves += texto[i];
//   }

document.write("<p>La cadena tiene " + contador + " vocales</p>");
document.write("<p>La cadena invertida es: " + reves + "</p>");

