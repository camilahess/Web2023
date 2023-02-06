'use strict'; //me obliga a declarar las variables

function calcularPrecio(nombreProducto = "Producto genérico", precio = 100, impuesto = 21) {
    let nombre = String(nombreProducto);
    let price = +precio;
    let tax =  +impuesto;
  
    if (isNaN(price) || isNaN(tax) || price<0 ||tax<0 ) { //controlamos los posibles errores
      console.error("Precio o impuesto inválidos");
    } else {
    let precioFinal = price + (price * tax / 100);
    console.log("Producto: " + nombre + ", Precio final (impuestos incluidos): " + precioFinal);
}
}
  
  // Llamadas a la función
  calcularPrecio();
  calcularPrecio("Producto 1", -100, 18);
  calcularPrecio("Producto 2", 200,10);
  calcularPrecio("Producto 3", 250, "impuesto");
  calcularPrecio("Manzana");
  calcularPrecio(300,40);
