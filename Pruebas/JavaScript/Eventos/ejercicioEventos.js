window.onload = function(){
    
    let titulo = document.querySelector('h1');
    titulo.addEventListener('click',eliminarParrafo);

    let primerParrafo = document.querySelector('p');
    primerParrafo.addEventListener('click', agregarParrafo);
}
  
function eliminarParrafo() {
    // Obtener todos los párrafos del documento
    let parrafos = document.querySelectorAll('p');
    // Verificar si hay al menos un párrafo
    if (parrafos.length > 0) {
      // Seleccionar el último párrafo
      let ultimoParrafo = document.querySelector('p:last-of-type');
      // Eliminar el último párrafo
      ultimoParrafo.parentNode.removeChild(ultimoParrafo);
    } else {
      // Mostrar un mensaje de error si no hay párrafos
      console.log("No hay párrafos para eliminar.");
    }
  }

  function agregarParrafo() {
    // Crear un nuevo elemento de párrafo
    let nuevoParrafo = document.createElement('p');
    // Agregar el texto al nuevo párrafo
    nuevoParrafo.textContent = 'Este es un nuevo párrafo.';
    // Agregar el nuevo párrafo al final del cuerpo del documento
    document.body.appendChild(nuevoParrafo);
  }