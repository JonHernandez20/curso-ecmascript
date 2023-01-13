// Clase 10

// Normal

function usuario (nombre, edad, pais, numero) {
    return {
        nombre: nombre,
        edad: edad,
        pais: pais,
        numero: numero
    }
}
console.log(usuario('Jonathan', 20, 'MX', 1));

// ES6

const newUser = (name, age, country, id) => {
    return {
        name,
        age,
        country,
        id
    }
}
console.log(newUser('Jonathan', 20, 'MX', 1));