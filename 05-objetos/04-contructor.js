//Las funciones constructoras se hacen con Upper camelcase
// un metodo es una funcion que fue asignada a una propiedad de un elemento

function Usuario(){
    this.id = 1;
    this.recuperarClave = function () {
        console.log('recuperando clave..');
    }
}

let usuario = new Usuario();

console.log(usuario);