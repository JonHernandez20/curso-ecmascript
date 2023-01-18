// Clase 32

// Promise any
const promesaUno = Promise.reject('Promesa 1 fallo');
const promesaDos = Promise.reject('Promesa 2 fallo');
const promesaTres = Promise.resolve('Acerto la promesa 3.');
const promesaCuatro = Promise.resolve('Acerto la promesa 4.');

Promise.any([promesaUno, promesaDos, promesaCuatro, promesaTres])
    .then(resp => console.log(resp))
    .catch(err => console.log(err))

// Metodos privados
class password {
    constructor(pass) {
        this.password = pass;
    }

    cambiar() {
        const newP = prompt('Cual es tu contraseña?');
        if(newP == this.password) {
            const newPass = prompt('Cual es tu nueba contraseña?');
            return this.password = newPass;
        } else {
            console.warn('Intruso');
            return;
        }
    }

    #mostrar() {
        console.log(this.password);
    }
}

const one = new password(1520);
one.cambiar();