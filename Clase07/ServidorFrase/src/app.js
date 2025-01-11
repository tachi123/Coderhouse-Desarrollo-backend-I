import express from 'express';

const app = express();
const server = app.listen(8080, () => console.log("Listening on port 8080"));

app.use(express.json()); //Indicamos que ahora podemos recibir jsons al momento de recibir solicitudes
app.use(express.urlencoded({encoded:true})); //Permite que se pueda enviar información también desde la URL

let frase = 'Frase inicial con muchas palabras';

//Método GET /api/frase: Obtener toda la frase
app.get('/api/frase', (req,res) => {
    res.json({frase});
})


//Método GET /api/palabra/:pos
app.get('/api/palabra/:pos', (req,res) => {
    const pos = parseInt(req.params.pos);
    const palabrasEnArray = frase.split(' ');//[ frase, inicial, con, muchas, palabras]
    const palabraBuscada = palabrasEnArray[pos-1];
    if(!palabraBuscada){
        return res.status(404).json({error: "Palabra no encontrada"});
    }
    res.json({buscada: palabraBuscada});
})

//Método POST /api/palabra
app.post('/api/palabra', (req,res) => {
    const { palabra } = req.body; // { palabra: unaPalabra}
    frase += ` ${palabra}`;
    const pos = frase.split(' ').length;
    res.json({agregada: palabra, pos});
})

//Método PUT 
app.put('/api/palabra/:id', (req,res) => {
    const pos = parseInt(req.params.pos);
    const { palabra } = req.body;
    const palabrasEnArray = frase.split(' ');
    const palabraAnterior = palabrasEnArray[pos-1];
    palabrasEnArray[pos-1] = palabra;
    frase = palabrasEnArray.join(' ');
    res.json({actualizada: palabra, anterior: palabraAnterior});
})

//Método DELETE
app.delete('/api/palabra/:id', (req,res) => {
    const pos = parseInt(req.params.pos);
    const palabrasEnArray = frase.split(' ');
    palabrasEnArray.splice(pos - 1, 1); //Posición , cantidad de elementos a eliminar
    frase = palabrasEnArray.join(' ');
    res.json({mensaje: 'Palabra eliminada'});
})