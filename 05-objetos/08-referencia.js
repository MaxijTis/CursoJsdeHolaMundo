/**
 * Tipos de datos Primitivos:
 * se copian cuando los asignamos a otras variables
 * string
 * number 
 * boolean
 * null
 * undefined
 * 
 * Por Referencia:
 * Se referencian
 * 
 * objetos
 * arrrays
 * funciones
 */

// let a = 1;
// let b = a;

// b++;
// console.log(a, b);


// let a = {};
// let b = a;

// b.prop = 1;
// console.log(a, b);

let a = 1;

function suma(n){
    n++
}

suma(a);
console.log(a);