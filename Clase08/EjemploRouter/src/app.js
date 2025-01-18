import express from 'express';
import indexRouter from './routes/index.router.js';

const app = express();

//Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Inicializar mi servidor
app.listen(8080, () => {
    console.log("El servidor se encuentra escuchando");
});

//Implementamos router
app.use('/', indexRouter); //Agrupo los métodos relacionados a inicio y informativos