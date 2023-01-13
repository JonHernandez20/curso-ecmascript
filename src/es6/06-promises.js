// Clase 11

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            resolve('Hola mundo!! :)');
        } else {
            reject('Ups!!');
        }
    })    
};

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));