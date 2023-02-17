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

    let madre=document.documentElement;
    madre.lang="en"; //cambio el valor de lang del html
    console.log(madre.nodeName);
        
    }    