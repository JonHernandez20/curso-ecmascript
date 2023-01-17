// Clase 23

// Metodo finally
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hola mundo!! :)');
        } else {
            reject('Ups!!');
        }
    })    
};

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Ejecucion terminada.'));

// Generadores asincronos
async function* generador() {
    yield await Promise.resolve('Ejecutando 1 ...');
    yield await Promise.resolve('Ejecutando 2 ...');
    yield await Promise.resolve('Ejecutando 3 ...');
}

const ejecutar = generador();
ejecutar.next().then(resp => {console.log(resp.value)});
ejecutar.next().then(resp => {console.log(resp.value)});
ejecutar.next().then(resp => {console.log(resp.value)});
ejecutar.next().catch(err => {console.log(err)})
    .finally(() => {console.log('Ejecutado.')});

// for await
async function ciclo() {
    const array = ['🎃', '👓', '🎄','💦','🚩'];
    for await (let valores of array) {
        console.log(valores);
    }
}

ciclo();