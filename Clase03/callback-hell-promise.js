//Estructura de promesa
function crearPromesa(){
    return new Promise( (resolve, reject) => {
        //Las acciones a las que me comprometo
    }
    )
}

function prepararHuevos() {
    return new Promise( (resolve, reject) => {
        console.log("Preparando los huevos...");
        setTimeout(() => {
            console.log("¡Huevos listos!");
            resolve("Huevos"); // Éxito, con resultado
        }, 2000); // Simula el tiempo de cocción
    }) 
}
  
  
function prepararTostadas() {
    return new Promise( (resolve, reject) => {
        console.log("Preparando las tostadas...");
        setTimeout(() => {
        console.log("¡Tostadas listas!");
        if(true){
            resolve("Tostadas"); // Éxito, con resultado
        }else{
            reject("Error al preparar tostadas");
        }      
        }, 1500); // Simula el tiempo de tostado
    }) 
}
  

function exprimirJugo() {
    return new Promise( (resolve, reject) => {
        console.log("Exprimiendo el jugo de naranja...");
        setTimeout(() => {
            console.log("¡Jugo de naranja listo!");
            if(true){
                resolve("Jugo de naranja"); // Éxito, con resultado
            }else{
                reject("Error al preparar el juego");
            }
        }, 1000); // Simula el tiempo de exprimido
    }) 
}
prepararHuevos()
    .then(huevos  => {
        console.log("Huevos listos", huevos);
        return prepararTostadas()
    })
    .then(tostadas => {
        console.log("Tostadas listas:", tostadas);
        return exprimirJugo(); // Devuelve la promesa del jugo
    })
    .then(jugo => {
        console.log("Jugo de naranja listo:", jugo);
        console.log("¡Desayuno completo! Tenemos", huevos, tostadas, jugo);
    })
    .catch(error => {
        console.error("Hubo un error:",error);
    })