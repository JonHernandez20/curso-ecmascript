export function saludar () {
    alert('Hola, como estas?');
    let ask = prompt('Como estas?');
    if (ask === 'bien') {
        alert('Me alegra mucho, nos vemos.');
        return;
    } 
    if (ask === 'mal') {
        alert('Que todo mejore.');
        return;
    } 
}