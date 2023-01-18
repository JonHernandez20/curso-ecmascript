// Clase 29

// globalThis
console.log(global);
console.log(windows);
console.log(globalThis);

// matchAll
const regex = /\b(Apple)+\b/g;
const string = 'Apple, Banana, Aplle, Apple, Uvas, Watermelon';
const array = [...string.matchAll(regex)];

console.log(regex.exec(string));
console.log(array);