//Ejemplo 1: Lectura de un archivo
function leerArchivo(nombreArchivo, callback) {
    // Simula la lectura del archivo (en realidad se usaría una función de Node.js)
    setTimeout(
        //Callback
            () => {
                if (nombreArchivo === "archivo.txt") {
                    callback(null, "Contenido del archivo"); // Éxito, con resultado
                } else {
                    callback("Error: Archivo no encontrado"); // Error
                }
            }
        , 10000); // Simula un retraso para mostrar la asincronía
  }
  
leerArchivo("archivo1.txt", (error, resultado) => {
    if (error) {
        console.error(error); // Maneja el error
    } else {
        console.log(resultado); // Imprime el resultado
    }
});