/*
    indice validar que no sea menor a 0 
    y que el elemento exista en el array
*/

function getbyIdx(arr, idx){
    if(idx < 0 || arr.length <= idx){
        return 'Elemento no existe';
    }

    return arr[idx];
}

let resultado = getbyIdx([1, 2, 3, 4, 5], 2);
console.log(resultado);