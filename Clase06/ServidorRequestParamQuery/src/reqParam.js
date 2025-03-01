import express from 'express';

const app = express();
const port = 8080;

/**
 * Utilizamos los dos puntos ( : ) para indicar que queremos que ese sea el parámetro.
 * Esto nos permite crear una ruta dinámica que pueda recibir cualquier parámetro, en lugar
 * de tratar de adivinarlo. Ahora podemos ingresar cualquier nombre desde la url, en lugar
 * de tener que registrar 10000 rutas con 10000 nombre diferentes
 */
app.get('/unparametro/:usuario', (req, res) => {
    //:parametro ahora se encontrará dentro del objeto req.params
    console.log(req.params.usuario);
    res.send(`¡Bienvenido, ${req.params.usuario}`);
})

app.get('/dosparametros/:nombre/:apellido', (req,res)=>{
    //:nombre y :apellido ahora se encontrarán dentro del objeto req.params
    //¡Podemos definir en nuestro endpoint cuantos paráemtros necesitamos!
    res.send(`El nombre completo es: ${req.params.nombre} ${req.params.apellido}`)
})

//Poner a escuchar nuestro servidor
app.listen( port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
})