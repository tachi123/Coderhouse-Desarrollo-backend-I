import express from 'express';

const app = express();
const port = 8080;

//Filtraremos por género masculino (M) y femenino (F)
const usuarios = [
    {id: "1", nombre: "Dalia", apellido: "Gómez", genero: "F"},
    {id: "2", nombre: "Myrna", apellido: "Flores", genero: "F"},
    {id: "3", nombre: "Armando", apellido: "Mendoza", genero: "M"},
    {id: "4", nombre: "Dalia", apellido: "Gómez", genero: "F"},
    {id: "5", nombre: "Herminio", apellido: "Fuentes", genero: "M"},
    {id: "6", nombre: "Juan", apellido: "Zepeda", genero: "M"},
]

//Crear un endpoint para filtrar por género
app.get('/', (req, res) => {
    let generoBuscado = req.query.genero;
    //Si no se ingresó genero, o el género no es M ni es F, no vale el filtro
    if(!generoBuscado||(generoBuscado!=="M"&&generoBuscado!=="F")) return res.send({usuarios});
    //En caso contrario, continuamos con el proceso de filtro
    let usuariosFiltrados = usuarios.filter( usuario => usuario.genero === generoBuscado);
    res.send({usuarios:usuariosFiltrados});
})

app.listen( port, () => console.log(`Servidor escuchando en el puerto ${port}`));