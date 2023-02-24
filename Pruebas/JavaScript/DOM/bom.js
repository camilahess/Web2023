// Imprime la URL actual
console.log(location.href);
// Imprime el nombre del servidor (o la IP) como “localhost” 192.168.0.34
console.log(location.host);
// Imprime el numero del puerto (normalmente 80)
console.log(location.port);
// Imprime el protocolo usado (http o https)
console.log(location.protocol);
// Recarga la pagina actual
location.reload();
// Carga una nueva pagina. El parámetro es la nueva URL
location.assign("https://google.com");
// Carga una nueva pagina sin guardar la actual en el objeto history
location.replace("https://google.com")
// El más usado. Ir a otra URL desde javaScript, igual que assign
location.href=("https://iessanvicente.com/");