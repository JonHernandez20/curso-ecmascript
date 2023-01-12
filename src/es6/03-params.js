// Clase 6
function newUser (name, age, country) {
    var name = name || undefined;
    var age = age || 00;
    var country = country || 'animal';

    /* Jonathan
    20 Años
    Es de Mexico
    */

    console.log(`${name}
    ${age} años
    Es de ${country}`); 
}

newUser();/* undefined
0 años
Es de animal
*/
newUser('Gabriel', 41, 'MX'); /* Gabriel
41 años
Es de MX
*/

function newAdmin (name = undefined, age = 10000, country = 'NADIE SABE') {
    console.log(`${name}
    ${age} años
    Es de ${country}`);
}

newAdmin(); /* undefined
0 años
Es de ES UN ANIMAL
*/
newAdmin('Jonathan', 20, 'MX'); /* Gabriel
41 años
Es de MX
*/