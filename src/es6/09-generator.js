// Clase 15

function* generator(array) {
    for(let value of array) {
        yield value;
    }
}

const arrayEmoji = ['❤', '💦', '🙄','😍','🤑'];
// const record = generator(arrayEmoji);
// console.log(record.next().value);
// console.log(record.next().value);
// console.log(record.next().value);
// console.log(record.next().value);
// console.log(record.next());
// console.log(record.next());

// function* numbers () {
//     yield 1;
//     yield 'Jonathan';
//     yield [1,2,3, 'hola'];
// }

// const gen = numbers();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

for(let element in arrayEmoji) {
    console.log(element);
}

const arrayNum = [1,2,3,4,5];
for (let num of arrayNum) {
    num *= 2;
    console.log(num);
}

console.log(arrayNum);

const objeto = {
    a: 1, b:2, c:3
};
for (let element in objeto) {
    console.log(element);
}

