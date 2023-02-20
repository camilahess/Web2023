window.onload = function() {
    /*Con el html de este formulario dado realiza las siguientes 
    acciones con javaScript:
    1- Que cambie el valor del atributo lang de la etiqueta HTML a "en".
    2- Que imprima en un console.log el valor del action
    3- Accede al primer elemento que tenga la clase "rojo" 
    (debes hacerlo de 2 formas distintas,
    usando la función DOM pertinende y querySelector) Y debes imprimir en
    console.log el valor de la clase y cuantos elementos 
    tienen ese valor de clase.
    4- Finalmente cuantos label hay en el documento*/

    //1.
    let madre=document.documentElement;
    madre.lang="en"; //cambio el valor de lang del html
    //madre.setAttribute("lang","en"); Esto hace lo mismo, para cambiar los atributos
    //let atributoLang = madre.getAttribute("lang"); //obtener valor del atributo
    console.log(madre.nodeName);
   
    //2.

    let formu = document.getElementById("pepito");
    //let formu = document.querySelector("#pepito");
    //let formu =padre.children[1].children[1];
    console.log(formu.action);
    console.log(formu.getAttribute("action"));

    //3.
    let rojos = document.getElementsByClassName("rojo");
    //let classRojos =document.querySelectorAll(".rojo");
    console.log(rojos[0].className)
    console.log(rojos[0].getAttribute("class"));
    console.log("Números de elementos con el class rojo"+rojos.length);

    //4.
    let labels=document.getElementsByTagName("label");
    console.log("Labels total:"+labels.length);
    }    