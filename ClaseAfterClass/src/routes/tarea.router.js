import {Router} from 'express';
import {v4 as uuidv4 } from 'uuid';

/**
 * Códigos de estado HTTP:
 * 400 Bad Request: cuando los datos proporcionados no son válidos
 * 404 Not Found: cuando no encontramos la tarea
 * 201 Created: cuando se crea una tarea
 * 204 No content: se usa cuando eliminamos una tarea
 */

const router = Router();

let tareas = [];

//GET /tareas : Devolver un arreglo de todas las tareas
router.get('/tareas', (req, res) => {
    res.json(tareas);
})

//GET /tareas/:id : Devolver una tarea con un ID específico
router.get('/tareas/:id', (req, res) => {
    const tareaIdBuscada = req.params.id;
    const tarea = tareas.find( tarea => tarea.id === tareaIdBuscada);
    //Validamos que haya encontrado algo
    if(!tarea){
        return res.status(404).json({error: 'Tarea no encontrada'})
    }
    res.json(tarea);
})

//POST /tareas : crear una nueva tarea. Donde el cuerpo de solicitud o petición tiene que tener los campos título, descripción y fechaVencimiento
router.post( '/tareas' , (request, response) => {
    const {titulo, descripcion, fechaVencimiento} = request.body;

    //Validación de datos
    if(!titulo || !descripcion || !fechaVencimiento || !isValidDate(fechaVencimiento)){
        return response.status(400).json({ error : 'Datos inválidos'});
    }

    //Validar si la tarea ya existe
    //CREAR ALGORITMO

    const nuevaTarea = {
        id: uuidv4(),
        titulo,
        descripcion,
        fechaVencimiento
    };

    tareas.push(nuevaTarea);
    response.status(201).json(nuevaTarea); //201 - Created
})

//PUT /tareas/:id : actualizar una tarea existente. Debe tener en su petición un cuerpo que contenga los campos titulo, descripcion y fechaVencimiento
router.put( '/tareas/:id' , (req, res) => {
    const tareaIdBuscada = req.params.id;
    const {titulo, descripcion, fechaVencimiento} = req.body;
    const tareaIndex = tareas.findIndex(tarea => tarea.id === tareaIdBuscada)

    //Si no encuentra una tarea con el tareaIdBuscada retorna -1
    if (tareaIndex === -1){
        return res.status(404).json({error: 'Tarea no encontrada'})
    }

    //Validación de datos
    if(fechaVencimiento && !isValidDate(fechaVencimiento)){
        return res.status(400).json({ error : 'Fecha de vencimiento inválida'});
    }

    //Validar campos que queremos agregar
    //Crear algoritmo

    tareas[tareaIndex] = {
        ...tareas[tareaIndex],
        titulo,
        descripcion,
        fechaVencimiento
    };

    res.json(tareas[tareaIndex]);
})

//DELETE /tareas/:id : Eliminar una tarea
router.delete( '/tareas/:id' , (req, res) => {
    const tareaIdAEliminar = req.params.id;
    const tareaIndex = tareas.findIndex(tarea => tarea.id === tareaIdAEliminar);

    if(tareaIndex === -1){
        return res.status(404).json({error: 'Tarea no encontrada'});
    }

    tareas.splice(tareaIndex, 1);
    res.status(204).json({mensaje: 'Tarea eliminada'})
})

export default router;
