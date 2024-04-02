//las factory funcion usan camelcase
function crearUsuario(name, email){
    return{ 
        email,
        name,
        activo: true,
        recuperarClave: function() {
            console.log('recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Nico', 'nico@io.com');
let user2 = crearUsuario('Felipe', 'felipe@io.com');

console.log(user1, user2);