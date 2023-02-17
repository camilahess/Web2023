//funcion normal
function sumar(num1,num2){
    return num1+num2;
}

// funciones anónimas
let sumar2 = function(num1,num2){
    return num1+num2;
}

//funcion arrow, quito llaves y no tiene la palabra function
let sumar3=(num1,num2) => num1+num2;

console.log(sumar3);

let sumar4 = (num1,num2) => {
    let resultado;
    resultado= num1+num2;
    return resultado;
}

// en algunos casos de puede eliminar los (), cuando solo hay un parámetro
let square = num => num*num;

function square(num){
    return num*num;
}

