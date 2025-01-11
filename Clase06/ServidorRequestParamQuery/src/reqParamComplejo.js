import express from 'express';

const app = express();
const port = 8080;

const usuarios = [
    {id: "1", nombre: "Nahuel", apellido: "Espinosa", edad: 33},
    {id: "2", nombre: "Natalia", apellido: "Cardozo", edad: 23},
    {id: "3", nombre: "Roberto", apellido: "Gómez", edad: 30}
]

//Endpoint raíz '/' para devolver todos los usuarios
app.get('/', (req, res) => {
    res.send({usuarios}); 
    //Se recomiendo mandar los datos en formato objeto en lugar de enviarlos como un array
    //Esto permite, si vamos a meter mas info en el futuro no tengamos que cambiar
    //el tipo de respuesta del lado del cliente.
})

//Endpoint que me devuelva información de un usuario puntual
app.get('/:idUsuario', (req, res) => {
    let idUsuarioBuscado = req.params.idUsuario; //Obtener el idUsuario que vino en la petición
    //Procedemos a buscar el usuario que tenga el id buscado
    let usuario = usuarios.find( unUsuario => unUsuario.id === idUsuarioBuscado)
    //Si no encuentra al usuario, debe finalizar la función devolviendo un error
    if(!usuario) return res.send({error: "Usuario no encontrado"});
    //En caso que se encontró el usuario, lo mandamos
    res.send({usuario});
})


app.listen( port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
})