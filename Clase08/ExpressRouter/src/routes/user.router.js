import express from 'express';
import { uploader } from '../utilsMulter.js'; //Importamos el UPLOADER previamente configurado

//Array para almacenar
let users = [];

const router = express.Router();

//MÉTODO GET : Obtener todos los recursos ( EN ESTE CASO users)
router.get('/', (req, res) => {
    res.json(users);
})

//MÉTODO POST : Para crear un nuevo recurso (EN ESTE CASO UN USUARIO)
router.post('/', uploader.single('file') , (req, res) => {
    if(!req.file){ //Si no existe req.file, significa que hubo un error al subir el archivo
        return res.send({status: "error", error: "No se puede guardar la imagen"})
    }
    console.log(req.file); //Revisamos que campos vienen por parte de multer
    const newUser = req.body;
    newUser.thumbnail = req.file.path; //Agregamos al usuario la ruta de su respectiva imagen
    users.push(newUser);
    res.json({message: 'Usuario creado exitosamente'});
})



export default router;