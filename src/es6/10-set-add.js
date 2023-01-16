// Clase 17

const array = new Set();
array.add('Jonathan');
array.add('Jose'); // Agrega un nuevo valor.
array.add('Eduardo');
array.add('Maria');
array.add('Adela');
console.log(array.size); // Retorna la longitud de la estructura
console.log(array);

array.delete('Adela'); // Elimina un elemento que contiene el set, retorna un boleano dependiendo si existia o no el booleano.
console.log(array);

console.log(array.has('Jose')); // Retorna un valor boleano dependiendo si existe o no el valor.
array.clear(); // Eliminia todos los valores del Set.
console.log(array);