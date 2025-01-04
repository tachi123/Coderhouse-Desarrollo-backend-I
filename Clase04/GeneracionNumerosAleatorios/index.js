import { generarNumerosAleatorios, contarFrecuencia }  from './utils.js';

//Función para generar números aleatorios
async function main(){
    try{
        //Generar números aleatorios y almacenarlos en una variable
        const numeros = await generarNumerosAleatorios(10);
        console.log("Números aleatorios generados exitosamente");
        console.log(numeros);
        const frecuencia = await contarFrecuencia(numeros);
        console.log("Termino la generación de frecuencia");
        console.log(frecuencia);
    }catch(error){
        console.error("Error durante la ejecución de la generación de números", error);
    }

}

main();