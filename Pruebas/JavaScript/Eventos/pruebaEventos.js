window.onload = function(){
    let titulo = document.getElementsByTagName("h1")[0];
    titulo.onclick=pulsarTitulo;
    let titulo2 = document.getElementsByTagName("h2")[0];
   // titulo2.onclick=pulsarTitulo2;

    //titulo.addEventListener("click", pulsarTitulo); lo mismo que arriba
    titulo2.addEventListener("click",pulsarTitulo2);
}

function pulsarTitulo(){
    alert("Hola Camila");
}

function pulsarTitulo2(){
    alert("probando otro alert");
}