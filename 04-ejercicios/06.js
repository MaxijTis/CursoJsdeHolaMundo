//crea algoritmo que devuelva 
//cantidad de numeros positivos de un array

let arr = [2, 5, 7, 15, -5, -100, 55, 14, 18, 54];

function cuantosPositivos(){
    let acu = 0;   
    for(positive of arr){
        if(positive % 2 ==0){
            acu++
        }
    }
    return acu;
}

let resultado = cuantosPositivos(arr);
console.log(resultado);