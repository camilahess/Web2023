window.onload = function(){
    //let info = document.getElementById("informacion");
    //con query
    let info = document.querySelector("#informacion");

    let mostrarh1 =document.getElementsByTagName("h1");

    //meto dentro de la etiqueta div, con id informacion este texto con inner
    info.innerHTML="Números de h1:"+mostrarh1.length;

    let negritasPagina = document.getElementsByTagName("strong");
    //sobrecargamos el innerHTML y concatenamos
    info.innerHTML+="<br>Cantidad de negritas en la página:"+negritasPagina.length;

    let smallPagina = document.getElementsByTagName("small");
    info.innerHTML+="<br> Cantidad de small en la página:"+smallPagina.length;

    //accedo a la posición 1 del array de párrafos, es decir su hijo Strong
    let p2 =document.getElementsByTagName("p")[1];
    //solo las etiquetas del parrafo 2 (p2)
    let negritasP2 = p2.getElementsByTagName("strong");

    info.innerHTML+="<br> Cantidad de negritas en el párrafo 2: "+negritasP2.length;

    //USANDO QUERYS
    //let arrayH2 = document.getElementsByClassName("titulo2")[0];
    let arrayH2 = document.querySelectorAll(".titulo2"); //acceso al array de todos los nodos que tengan de clase titulo2
    let h2 = document.querySelector(".titulo2"); //acceso al primer nodo que encuentra

    let parrafos = document.querySelectorAll("h1+p"); //hermanos directos
}