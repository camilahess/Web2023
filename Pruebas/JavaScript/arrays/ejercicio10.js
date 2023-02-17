let diasDeSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

diasDeSemana.forEach(function(d){
    console.log(d);
});

for(let i=0;i<diasDeSemana.length;i++){
    console.log(diasDeSemana[i] + " es el día " + (i+1) + " de la semana");
}

for (let dias of diasDeSemana) 
    console.log(dias);


for (let days in diasDeSemana) 
    console.log(days);


// 1) Concatenar número de la semana usando map
console.log(diasDeSemana.map((dia, index) => dia + " " + (index + 1)).join());


// 2) Filtrar por elementos que terminen en consonante

console.log(diasDeSemana.filter(dia => dia[dia.length - 1] === "s"));


// 3) Verificar si algún día tiene 2 vocales a o e
let tieneDosVocales = diasDeSemana.some(dia => {
  let contadorVocales = 0;
  for (let i = 0; i < dia.length; i++) {
    if (dia[i] === "a" || dia[i] === "e" || dia[i] === "o") {
      contadorVocales++;
    }
    if (contadorVocales >= 2) {
      return true;
    }
  }
  return false;
});
console.log(tieneDosVocales);

// 4) Ordenar descendentemente usando sort
console.log(diasDeSemana.sort().reverse().join());