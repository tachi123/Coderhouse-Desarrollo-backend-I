import fs from 'fs';

function guardarFechaHora(){
    const fechaHoraActual = new Date().toLocaleString();
    fs.writeFile('./fechaHora.txt', fechaHoraActual, (error) => {
        if(error){
            console.error('Error al escribir el archivo');
        }else{
            console.log('Fecha y hora guardadas correctamente.')
        }
    });
}

function leerFechaHora(){
    fs.readFile('./fechaHora.txt', 'utf-8', (error, data) => {
        if(error){
            console.error('Error al leer el archivo');
        }else{
            console.log('Fecha y hora almacendas: ',data)
        }
    });
    console.log(contenidoFile);
}

guardarFechaHora();
leerFechaHora();