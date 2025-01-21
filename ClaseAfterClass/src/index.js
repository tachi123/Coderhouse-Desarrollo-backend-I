/**
 * Desarrollar una aplicación de gestión de tareas
 * Esta api va a servir como backend una aplicación frontend que permita a los usuarios}
 * Crear, leer, actualizar y eliminar tareas
 */
import express from 'express';
import tareaRouter from './routes/tarea.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(8080, () => 
    console.log("Eschando en el puerto 8080")
);

app.use("/api/tareas", tareaRouter);