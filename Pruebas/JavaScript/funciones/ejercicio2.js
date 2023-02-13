
function pedirDatos(texto, texto2) {
    let numero;
    do {
        numero = prompt(texto);
        if (numero < 1 || numero > 10)
            alert("Error!, el número no puede ser vacío ni menor que 1 ni mayor que 10");
        if (isNaN(numero) || numero < 1 || numero > 10)
            alert(texto2);
    } while (isNaN(numero) || numero == "" || numero < 1 || numero > 10);
    return +numero;
}

let num1, num2, modo;
num1 = pedirDatos("Dame un número del 1 al 10", "Error!, te he dicho que me des un número entre 1 y 10");
num2 = pedirDatos("Dame otro número del 1 al 10", "Error!, te he dicho que me des otro número del 1 al 10");
modo = pedirDatos("Elija el modo de visualización: \n 1. Lista \n 2. Párrafo \n 3. Tabla \n 4. Desplegable \n 5. Salir", "Error!, elija una opción válida");

let menor = Math.min(num1, num2);
let mayor = Math.max(num1, num2);

switch (modo) {
    case 1:
        document.write(hacerLista(menor, mayor));
        break;
    case 2:
        document.write(hacerParrafo(menor, mayor));
        break;
    case 3:
        document.write(hacerTabla(menor, mayor));
        break;
   case 4:
        document.write(hacerDesplegable(menor, mayor));
        break;    
    case 5:
        alert("Has salido de la app");
        break;
    default:
        alert("Error!, elija una opción válida");
        break;
}


function hacerLista(min, max) {
    let lista = "<ul>";
    for (let i = 1; i <= max; i++) {
        lista += "<li>" + min + " x " + i + " = " + min * i + "</li>";
    }
    lista += "</ul>";
    return lista;
}

function hacerParrafo(min, max) {
    let parrafo = "<p>";
    for (let i = 1; i <= max; i++) {
        parrafo += min + " x " + i + " = " + min * i + "<br>";
    }
    parrafo += "</p>";
    return parrafo;
}

function hacerTabla(min, max) {
    let tabla = "<table><tr><th>Número</th><th> </th><th>Resultado</th></tr>";
    for (let i = 1; i <= max; i++) {
        tabla += "<tr><td>" + min + " x " + i + "</td><td>=</td><td>" + min * i + "</td></td></tr>";
    }
    tabla += "</table>";
    return tabla;
}

function hacerDesplegable(min, max){
    let desple = "<select>";
    for (let i=1; i<=max;i++){
        desple += "<option>" + min + "x" + i + "=" + min * i + "</option>";
    }
    desple += "</select>";
    return desple;
}

