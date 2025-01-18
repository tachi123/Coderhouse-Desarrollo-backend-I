function prepararHuevos(callback) {
    console.log("Preparando los huevos...");
      setTimeout(() => {
        console.log("¡Huevos listos!");
        callback(null, "Huevos"); // Éxito, con resultado
      }, 2000); // Simula el tiempo de cocción
}
  
  
function prepararTostadas(callback) {
    console.log("Preparando las tostadas...");
    setTimeout(() => {
       console.log("¡Tostadas listas!");
        callback(null, "Tostadas"); // Éxito, con resultado
      }, 1500); // Simula el tiempo de tostado
  
}
  

function exprimirJugo(callback) {
    console.log("Exprimiendo el jugo de naranja...");
    setTimeout(() => {
        console.log("¡Jugo de naranja listo!");
        callback(null, "Jugo de naranja"); // Éxito, con resultado
    }, 1000); // Simula el tiempo de exprimido
}
  
  
prepararHuevos((error, huevos) => {
    if (error) {
        console.error("Error con los huevos:", error);
    } else {
        prepararTostadas((error, tostadas) => {
        if (error) {
            console.error("Error con las tostadas:", error);
        } else {
            exprimirJugo((error, jugo) => {
            if (error) {
                console.error("Error con el jugo:", error);
            } else {
                console.log("¡Desayuno completo! Tenemos", huevos, tostadas, jugo);
            }
            });
        }
        });
    }
});