/*Archivo donde voy a crear funciones que voy a reutilizar en mi proyecto*/

const generarUnNumeroAleatorio = (min,max) => Math.floor(Math.random() * (max-min)) + 1;

const generarNumerosAleatorios = cantidad => {
    return new Promise((resolve, reject) => {
        let numeros = [];
        //Ejecutar la generación de UN numero aleatorio la cantidad de veces recibida como argumento
        for(let i = 0; i < cantidad; i++){
            numeros.push(generarUnNumeroAleatorio(1,20));
        }
        resolve(numeros);
    });
}

const contarFrecuencia = numeros => {
    return new Promise((resolve, reject) => {
        let frecuencia = {};
        //10 ,20 ,5,8,10
        numeros.foreach(
           numero =>  {
                if(frecuencia[numero]){
                    frecuencia[numero]++;
                }else{
                    frecuencia[numero]=1;
                }
           }
        )
        resolve(frecuencia);
    });
}

module.exports = {generarNumerosAleatorios, contarFrecuencia};