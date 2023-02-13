let s1 = "Hoja";
let s2 ="a";
let s3 ="aldre";

console.log(s1.replaceAll(s2,s3));

let posicion;
let posEmpezar = 0;
let veces = 0;
let resultado =s1;

do {
    posicion=s1.indexOf(s2,posEmpezar);
    if(posicion!=-1) {
        posEmpezar = s2.length+posicion;
        veces++;
        resultado = resultado.replace(s2,s3);
    }
} while(posicion>-1);
alert(veces);
alert(resultado);