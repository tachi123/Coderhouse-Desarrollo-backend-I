import express from 'express';
import mongoose from 'mongoose'; 
import userRouter from './routes/user.router.js';
import estudianteRouter from './routes/estudiante.router.js';

//dotenv me sirve para almacenar variables de entorno
//El archivo .env no se sube NUNCA a un repositorio
import dotenv from "dotenv";
dotenv.config(); //Nos permite poder trabajar con las variables de entorno
//Inicializo las variables de entorno
const URIMongoDB = process.env.URIMONGO; //Leer y almacenar la variable de entorno URI Mongo DB

const app = express();

//Conexión a la base de datos
mongoose.connect(URIMongoDB)
    .then( () => console.log("Conexión a base de datos exitosa"))
    .catch( (error) => {
        console.error("Error en conexión: ", error);
        process.exit();
    });

//Configurar para trabajar con json
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const server = app.listen(8080, () => { console.log("Escuchando en el puerto 8080")} )

app.use('/api/user', userRouter);
app.use('/api/estudiante', estudianteRouter);