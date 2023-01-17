// Clase 28

// promise.all
const promesa1 = Promise.reject("Ups promesa 1 falló")
const promesa2 = Promise.resolve("Promesa 2")
const promesa3 = Promise.reject("Ups promesa 3 falló")

Promise.all([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))

// promise.allsettled

Promise.allSettled([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta))