window.onload = function(){

    // let cuerpo = document.body;
    // let hijos= cuerpo.children; //Array de hijos de body
    // console.log("Cantidad de hijos de body:" + hijos.length);
    // let parrafo2 = hijos[4];
    // console.log(parrafo2.id);
    // let hermanoAnt = parrafo2.previousElementSibling;
    // console.log(hermanoAnt.id);
    // let hermanoSig = parrafo2.nextElementSibling;
    // console.log(hermanoSig.id);
    // let padre = parrafo2.parentNode;
    // console.log(padre.nodeName);

    //Realiza 5 formas de acceder al primer párrafo sacando el nodeName
    // y el innetHTML por el console.log

    //1.
    let parrafo1 = document.getElementsByTagName("p")[0]; //array de todos los p, primer elemento
    console.log(parrafo1.nodeName + " " + parrafo1.innerHTML);

    //2.
    parrafo1 = document.querySelectorAll("p")[0]; //Otro array de p, primer elemento
    console.log(parrafo1.nodeName + " " + parrafo1.innerHTML);

    //3.
    let division=document.getElementById("informacion"); //aqui entro al div
    parrafo1= division.children[0]; //voy al primer hijo
    console.log(parrafo1.nodeName + " " + parrafo1.innerHTML);

    //4.
    let str=document.getElementsByClassName("neg")[0];
    //let str=document.querySelector(".neg");
    parrafo1=str.parentNode;
    console.log(parrafo1.nodeName + " " + parrafo1.innerHTML);

    //5.
    let cabecera=document.head;
    let cuerpo =cabecera.nextElementSibling;
    parrafo1=cuerpo.children[0].children[0];
    console.log(parrafo1.nodeName + " " + parrafo1.innerHTML);

    //6.
    


}