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

// Clase 8

// Spread operator

let usuario = [0,1,23];
let corregir = [...usuario];
corregir[2] = 2;
console.log(usuario);
console.log(corregir);
console.log(usuario == corregir);

let numeros = [4,5,6];
let arrayCompleto = [...corregir, 3, ...numeros]; // Como añadir elementos y unir arrays.
console.log(arrayCompleto);

let subElementos = [0,1,2, [3,4], 5]; // Cuidado con la copia en diferentes de profundidad.
let copyElementos = [...subElementos];
console.log(subElementos);
console.log(copyElementos);
console.log(subElementos[3] === copyElementos[3]);
let nuevosElementos = structuredClone(subElementos);
console.log(nuevosElementos);
console.log(subElementos[3] === nuevosElementos[3]);

// Rest

function newUsuario ({name, age, id, ...basura}) {
    let user = {
        name: name,
        age: age,
        id: id
    }
    console.log(user);
    console.log(basura);
}

newUsuario({
    name: 'Jonathan',
    age: 20,
    id: 152015,
    password: 150,
    pago: 150000000
});