//const escribirArchivo = require('./escrArch.js')

console.log('inicio del programa')

// el creador de esta funcion la definió
// como no bloqueante. recibe un callback que
// se ejecutará al finalizar la escritura.
escribirArchivo('hola mundo', () => {
  console.log('terminé de escribir el archivo')
})

console.log('fin del programa')

// se mostrará por pantalla:
// > inicio del programa
// > fin del programa
// > terminé de escribir el archivo

function escribirArchivo(ms, callback) {
    console.log('Simulando escritura en archivo...');
    setTimeout(
        () => {
                console.log(`Escritura completada en ${ms/1000} segundos`);
                callback();
                }, ms); // Simulamos una demora de 2 segundos
}

console.log('Inicio del programa');
escribirArchivo(2000, () => {
    console.log('Terminé de escribir el archivo A');
  });
escribirArchivo(20, () => {
    console.log('Terminé de escribir el archivo B');
});

console.log('Fin del programa');