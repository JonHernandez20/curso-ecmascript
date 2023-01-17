// Clase 22

// Expresiones regulares
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2020-03-19');
console.log(regexData);
console.log(match);
console.table(match);

// Operadores de propagacion com objetos
const user = {
    name: 'Jonathan',
    age: 20,
    pass: false
};
const { name, ...values } = user;
console.log(user);
console.log(name);
console.log(values);

// Operadores de propagacion con diferente nivel de profundidad
const usuario = {
    name: 'Jonathan',
    age: 20,
    pass: false,
    calificaciones: {
        matematicas: 5,
        espanol: 8,
        historia: 5
    }
};
const copia = {...usuario};
const copiaCorrecta = structuredClone(usuario);

// copiaCorrecta
copiaCorrecta[`name`] = 'Francisco'
copiaCorrecta['age'] = 25;
copiaCorrecta['calificaciones']['matematicas'] = 8;
copiaCorrecta['calificaciones']['espanol'] = 10;
copiaCorrecta['calificaciones']['historia'] = 7;

console.log(usuario);
console.log(copiaCorrecta);