const dividir = (dividendo, divisor)  => {
    return new Promise( 
        (resolve, reject)  => {
            if(divisor === 0){
                 //Rechazamos la operación porque no es posible
                reject('No se puede dividir por 0');
            }
            else{
                //Resuelvo porque los valores son válidos
                resolve(dividendo/divisor);
            }
})
}

const funcionAsincronica = async (dividendo, divisor)  => {
    try{
        let resultado = await dividir(dividendo,divisor);
        console.log(resultado);
    }catch(error){
        //El bloque catch es obligatorio después de un try{} y sirve igual que el .catch, para poder ATRAPAR ERRORES
        console.log(error);
    }
}

funcionAsincronica(10,0);
funcionAsincronica(10,2);