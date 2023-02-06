function sumar(x,y){
    let resultado;
    resultado=x+y;
    return resultado;
}

sumar(2,4); //mal , no estamos utilizando el resultado devuelto 
let x=sumar(8,2); //aquí si 
console.log(sumar(x,x));

//MAL
console.log(sumar()); //undefined
console.log(sumar(5)); //undefined
console.log(sumar(2,3,4,5,6,7,3,"jajaja")); // toma los dos primeros e ignora los demás

//ejercicio 1

