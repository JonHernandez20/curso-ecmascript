// Clase 24

// flat
const array = [1, 2, 3, [4, [5, [6], 7], 8, 9]];
const arrayCopy = array.flat();
console.log(arrayCopy);

const array2 = [1, 2, 3, [4, [5, [6], 7], 8, 9]];
const arrayCopy2 = array2.flat(2);
console.log(arrayCopy2);

const array3 = [1, 2, 3, [4, [5, [6], 7], 8, 9]];
const arrayCopy3 = array3.flat(Infinity);
console.log(arrayCopy3); 


// flatMap
const string = ["Nunca pares", "de aprender"];
console.log(string.map(es => es.split(' ')))
console.log(string.flatMap(es => es.split(' ')))

const number = [1, 2, 3, 4, 5];
console.log(number.map(es => [es*2]));
console.log(number.flatMap(es => [es*2]));