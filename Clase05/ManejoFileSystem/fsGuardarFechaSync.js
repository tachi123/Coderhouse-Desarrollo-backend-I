import fs from 'fs';

function guardarFechaHora(){
    const fechaHoraActual = new Date().toLocaleString();
    fs.writeFileSync('./fechaHora.txt', fechaHoraActual);
}

function leerFechaHora(){
    let contenidoFile = fs.readFileSync('./fechaHora.txt', 'utf-8');
    console.log(contenidoFile);
}

guardarFechaHora();
leerFechaHora();