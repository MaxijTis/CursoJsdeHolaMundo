//Crear algoritmo que devuelva el precio del producto mas impuesto

function precioCompleto(precio, impuesto){
    total = precio + precio * impuesto;
    return total;
}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);