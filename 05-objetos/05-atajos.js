//2 formas de crear objetos

let obj = {};
let obj2 = new Object();

/**
 * new array();
 * new string();
 * new number();
 * new Boolean();
 */

function Usuario(){
    this.name = "Chanchito Feliz";
}
let user = new Usuario();
console.log(user.constructor);

const s1 = ("1 + 1");
const s2 = new String("1 + 1");
console.log(s2.valueOf());
console.log(eval(s1), eval(s2));
