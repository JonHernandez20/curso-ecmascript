// Clase 4
var lastName = 'Jonathan';
lastName = 'Alejandro';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Watermelon';
console.log(fruit);

const animal = 'Leon';
animal = 'Cat';
console.log(animal);

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple'; // Function scope
        let fruit2 = 'Kiwi'; // Block scope
        const fruit3 = 'Banana'; // Block scope

        console.log(fruit1); // Apple
        console.log(fruit2); // Kiwi
        console.log(fruit3); // BAnana
    }
    console.log(fruit1); // Apple
    console.log(fruit2); // Error
    console.log(fruit3); // Error
}

fruits();