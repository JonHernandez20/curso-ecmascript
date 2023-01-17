// Clase 27

// bigInt
const number = 5689789745456456122146;
console.log(number);
const number2 = 5689789745456456122146n;
console.log(number2);
const number3 = BigInt(5689789745456456122146);
console.log(number3);

// Nullish
const userUno = {};
const nombreUno = userUno.name ?? 'Jonathan';
console.log(nombreUno);

const userDos = {
    name: 'Pedro'
};
const nombreDos = userDos.name ?? 'Juan';

console.log(nombreDos);

// or y nullish

const id = 0;

const orId = id || 'Sin id';
const nullId = id ?? 'Sin id';

console.log(orId);
console.log(nullId);