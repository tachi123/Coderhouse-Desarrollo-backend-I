import express from 'express';

/**
 * Express ya lo tenemos instalado, sin embargo, para poder tener andando nuestra "app"
 * tenemos que inicializarlo
 */
const app = express(); //la variable app va a tener todas las funcionalidaes de express

/**
 * app.get : apertura de un "endpoint", va a indicar al protocolo HTTP
 * si alguien hace una petición de tipo GET a esta ruta, va a saber que responder
 */
app.get('/saludo', (req, res) => {//req = request (petición); res = response (respuesta)
    res.send("¡Hola a todos, pero ahora desde express!");
    //res.send sirve para "Responder" la petición con un contenido adentro.
})

app.get('/despedida', (req, res) => {
    res.send("¡Chau a todos!");
})

/**
 * Poner a escuchar nuestro servidor en algun puerto
 */
app.listen(8080, () => console.log("Listening on port 8080"))
//El primer parametro es el puerto de escucha
//el segundo parametro es un callback que se ejecuta cuando el servidor se levanta