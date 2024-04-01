let user = {
    id: 1,
    name: 'Chanchito Feliz',
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

//lo siguiente es una explicacion antigua que solia utilizarse antes
//para arrays usar FOR OF
let animales = ['Chanchito Feliz', 'Dragon', 'Canguro'];
for(let indice in animales){
    console.log(indice, animales[indice]);
}