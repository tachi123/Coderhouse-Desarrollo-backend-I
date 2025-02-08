import { Router } from 'express';
import EstudianteModel from '../models/estudiante.model.js';

const router = Router();

/** Creó las operaciones CRUD de mi recurso ESTUDIANTE */

//Read: get
router.get('/',  async (req,res) => {
    try{
        const students = await EstudianteModel.find();
        //Lista vacía y demas
        res.json({students});
    }catch(error){
        return res.status(500).send({error: "Error al obtener todos los estudiantes"});
    }
});

//Create: post
router.post('/',  async (req,res) => {
    try{
        const newEstudiante = new EstudianteModel(req.body);
        console.log('Info del body', req.body);
        await newEstudiante.save();

        res.json({message: "Estudiante creado con éxito"});
    }catch(error){
        console.log(error);
        return res.status(500).send({error: "Error al crear un estudiante"});
    }
});

//Update: PUT
router.put('/:id',  async (req,res) => {
    try{
        const eid = req.params.id; //Obtenemos el estudianteId (eid) de los params
        const studientToReplace = req.body; //Tomamos todo el estudiante a reemplezar
        //CREAR UN IF PARA VALIDAR TODOS LOS CAMPOS

        //Buscamos un estudiante por el _id, no por el ID. Porque MongoDB maneja internamente el valor id
        let result = await EstudianteModel.updateOne({_id:eid}, studientToReplace);  //Reemplazamos todo el usuario
        res.send({status:"success", payload: result});
    }catch(error){
        return res.status(500).send({error: "Error al actualizar el estudiante"});
    }
});

//Delete: DELETE
router.delete('/:eid', async (req,res) => {
    try{
        //Obtenemos el estudianteid (eid) de los params
        let uid = req.params.eid;
        let result = await EstudianteModel.deleteOne({_id: uid});
        res.send({status:"success", payload: result});
    }catch(error){
        return res.status(500).send({error: "Error al borrar un estudiante"});
    }
});

export default router;