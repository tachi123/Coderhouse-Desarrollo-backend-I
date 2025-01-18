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

const prepararDesayunoAsincronicamente = async () => {
    try{
        await prepararHuevos();
        await prepararTostadas();
        await exprimirJugo();
    }catch(error){
        console.log(error);
    }
}