// Clase 12

// Declarando
class user {}
// Instancia de una clase
const userUno = new user();

// Metodos
class User {
    // Metodos FUNCIONES
    greeting() {
        return 'Hello! :)';
    }
}
const gndx = new User();
console.log(gndx.greeting());

// Constructor
class usuario {
    // Constructor
    constructor() {
        console.log('Nuevo usuario.');
    }
    greeting() {
        return 'Hello! :)';
    }
}
const jon = new usuario();
console.log(jon);

// This
class persona {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return 'Hello';
    }

    greeting () {
        return `${this.speak()} ${this.name}`;
    }
}

const personaUno = new persona('Jonathan');
console.log(personaUno.greeting());

// setters getters

class socio {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        return 'Hello';
    }
    greeting () {
        return `${this.speak()} ${this.name}`;
    }
    // Getters
    get uAge () {
        return this.age;
    }
    // Setters
    set uAge (n) {
        this.age = n;
    }
}

const socioUno = new socio('Rogelio', 64);
console.log(socioUno.uAge);
console.log(socioUno.uAge = 65);