window.onload = function(){
    
//segundo ejercicio
let cantidad = pedirCantidad();
let select = crearDesplegable(cantidad);
let radioButtons = crearRadioButtons(cantidad);
vincularElementos(select, radioButtons);

}

function pedirCantidad() {
    let cantidad;
    do{
        cantidad=+prompt("Dame una cantidad de opciones:(número)")
    } while(isNaN(cantidad) || cantidad=="" ||cantidad<1)
    return cantidad;
  }
  
  function crearDesplegable(cantidad) {
    let select = document.createElement("select");
    for (let i = 1; i <= cantidad; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.text = `Elemento ${i}`;
      select.appendChild(option);
    }
    document.body.appendChild(select);
    return select;
  }
  
  function crearRadioButtons(cantidad) {
    let radioButtons = [];
    for (let i = 1; i <= cantidad; i++) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.value = i;
      radio.name = "radioGroup";
      radioButtons.push(radio);
      document.body.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = `Elemento ${i}`;
      document.body.appendChild(label);
    }
    return radioButtons;
  }
  
  function vincularElementos(select, radioButtons) {
    radioButtons.forEach(function(radio) {
      radio.addEventListener("change", function() {
        select.value = this.value;
      });
    });
  
    
    select.addEventListener("change", function() {
      let selectedValue = this.value;
      radioButtons.forEach(function(radio) {
        if (radio.value === selectedValue) {
          radio.checked = true;
        }
      });
    });
  }