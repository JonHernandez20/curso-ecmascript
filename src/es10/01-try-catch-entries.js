// Clase 25

// try catch
try {
    console.log('Si funcione')
} catch (error) { // Con parametro
    console.log(error);
}

try {
    hello();
} catch { // Sin parametro no nos aviso que no existe la funcion `hello()`.
    console.log('No funcione');
}

// Object.fromEntries
const datos = [
    ['name', 'Jonathan'],
    ['age', 20],
    ['pass', false],
];
console.log(datos);
console.log(new Map(datos));
console.log(Object.fromEntries(datos));