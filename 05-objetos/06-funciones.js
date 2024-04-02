//
function Usuario(nombre){
    this.nombre = nombre;
}

//Las funciones son objetos, tienen propiedades 
console.log(Usuario.name);
console.log(Usuario.length);

//Podemos asignarlas a otras variables
const U = Usuario
let user = new U('Nicolas');

console.log(user);

//podemos pasarlas como argumentos de otras funciones
function of(Fn, arg){
    return new Fn(arg);
}

let user1 = of(Usuario, 'Chanchito');
console.log(user1);

//Las funciones pueden ser retornadas en JS
function returned(){
    return function(){
        console.log('Hola Mundo');
    }
}

let saludo = returned();
saludo();