// Clase 6

// Arrays destructuring

let fruits = ['A', 'B',['Jon', 'Gabriel'], 2];
let [a, b, c, d] = fruits;
console.log(fruits);
console.log(a, b, c, d);
console.log(fruits[2][0]);

// Object destructuring

let user = {
    username : 'Jonathan',
    userage : 20
};
console.log(`Hola mi nombre es ${user.username}. Tengo ${user.userage} años de edad.`);

let {username, userage} = user;
console.log(`Hola mi nombre es ${username}. Tengo ${userage} años de edad.`);
const {username: name, userage: age} = user; // Si no nosgusta los nombres podemos cambiarlos con esta sintaxis.
console.log(`Hola mi nombre es ${name}. Tengo ${age} años de edad.`);

function userF ({name, age}) {
    console.log(`Hola mi nombre es ${name}. Tengo ${age} años de edad.`);
}

userF(user)
userF({
    name: 'PP',
    age: 50
})