import express from 'express';
import __dirname from './utils.js';

//Importar los routers
import userRouter from './routes/user.router.js';
import petRouter from './routes/pet.router.js';

const app = express();

//Midleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Inicializar el servidor
app.listen(8080, () => {
    console.log("El servidor se encuentra escuchando");
});


//Implementamos los routers que creamos
app.use('/api/users', userRouter);
app.use('/api/pets', petRouter);

//Para convertir nuestra carpeta PUBLIC en recurso estático
app.use('/static', express.static( __dirname + '/public'));