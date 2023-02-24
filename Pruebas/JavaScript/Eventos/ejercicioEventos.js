
    function borrarParrafo() {
      let parrafos = document.getElementsByTagName("p");
      if (parrafos.length == 0) alert ("No existen párrafos a eliminar");
      else document.body.removeChild(parrafos[parrafos.length-1]);
  }
  
  function insertarParrafo() {
      let parrafos = document.getElementsByTagName("p");
      let parrafo = document.createElement("p");
      let texto = document.createTextNode("PÁRRAFO "+(parrafos.length+1));
      parrafo.appendChild(texto);
      parrafo.addEventListener("click", insertarParrafo);
      document.body.appendChild(parrafo);
  }
  
  window.onload = function() {
      let titulo = document.querySelector("h1");
      titulo.onclick = borrarParrafo;
      
      let parrafos = document.getElementsByTagName("p");
      for (let elemento of parrafos) elemento.addEventListener("click", insertarParrafo);
  }
 
