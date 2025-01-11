import express from 'express';

const app = express();
const port = 8080;
const productos = [
    {id: "1", nombre: "Martillo"},
    {id: "2", nombre: "Pala"}
]

app.get('/productos', (req, res) => {
    let idProductoBuscado = req.query.idProducto; 
    let producto = productos.find( unElem => unElem.id === idProductoBuscado)
    if(!producto) return res.send({error: "Producto no encontrado"});
    res.send({producto});
})

app.listen( port, () => console.log(`Servidor escuchando en el puerto ${port}`));