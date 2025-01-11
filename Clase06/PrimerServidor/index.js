import http from 'http';

const port = 8080; //Puerto por el cual va a ser visible nuestro servidor

const server = http.createServer(
    (request, response) => {
        response.end("¡Mi primer hola mundo backend actualizado")
    }
);

//Ponemos nuestro servidor a escuchar peticiones
//Por defecto la ip es 127.0.0.1 o localhost
server.listen(port, () => {
    console.log("Listening on port ",port);
})