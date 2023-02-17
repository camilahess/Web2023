let numeros = [2,3,4,5];
numeros.unshift(0,1);
numeros.push(6,7);
console.log(numeros);
numeros.splice(3,2);
console.log(numeros);
numeros.splice(numeros.length-1,0,80,10);
console.log(numeros);
console.log(numeros.reverse());
console.log(numeros.sort()); //el sort ordena strings , no números


