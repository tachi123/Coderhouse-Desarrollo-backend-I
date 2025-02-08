import { Router } from 'express';
import UserModel from '../models/user.model.js';

const router = Router();

/** Creó las operaciones CRUD de mi recurso USUARIO */

//Read: get
router.get('/',  async (req,res) => {
    try{
        const users = await UserModel.find();

        //Lista vacía y demas

        res.json({users});
    }catch(error){
        return res.status(500).send({error: "Error al obtener todos los usuarios"});
    }
});

//Create: post
router.post('/',  async (req,res) => {
    try{
        const newUser = new UserModel(req.body);
        console.log('Info del body', req.body);
        await newUser.save();

        res.json({message: "Usuario creado con éxito"});
    }catch(error){
        return res.status(500).send({error: "Error al crear un usuario"});
    }
});

//Update: PUT
router.put('/:id',  async (req,res) => {
    try{
        const uid = req.params.id; //Obtenemos el userId (uid) de los params
        const userToReplace = req.body; //Tomamos todo el usuario a reemplezar
        if(!userToReplace.name||!userToReplace.last_name||!userToReplace.password){
            return res.send({status: "error", error: "Incomplete values"});
        }
        //Buscamos un usuario por el _id, no por el ID. Porque MongoDB maneja internamente el valor id
        let result = await UserModel.updateOne({_id:uid}, userToReplace);  //Reemplazamos todo el usuario
        res.send({status:"success", payload: result});
    }catch(error){
        return res.status(500).send({error: "Error al actualizar el usuario"});
    }
});

//Delete: DELETE
router.delete('/:uid', async (req,res) => {
    try{
        //Obtenemos el userid (uid) de los params
        let uid = req.params.uid;
        let result = await UserModel.deleteOne({_id: uid});
        res.send({status:"success", payload: result});
    }catch(error){
        return res.status(500).send({error: "Error al borrar un usuario"});
    }
});

export default router;