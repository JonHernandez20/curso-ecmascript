// Clase 21

const saludar = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(resolve => {
            console.log('Ejecutando archivo...')
        }, 1000)
        : reject(console.log('Archivo denegado!'));
    })
}

const ejecutar = async () => {
    const subir = await saludar();
    console.log(subir);
    console.log('Se termino la ejecucion.');
}

ejecutar();