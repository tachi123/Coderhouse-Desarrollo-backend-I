import express from 'express';

const app = express();
const port = 8080;

//Endpoint para la bienvenida
app.get('/bienvenida', (req, res) => {
    res.send('<h1 style="color:blue">¡Bienvenido a mi aplicación express!</h1>')
})

//Endpoint para obtener datos de un usuario
app.get('/usuario', (req, res)  => {
    const usuario = {
        nombre: 'Nahuel',
        apellido: 'Ramirez',
        edad: 33,
        correo: 'mail@mail.com'
    }
    res.json(usuario);
})

//Poner a escuchar nuestro servidor
app.listen( port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
})