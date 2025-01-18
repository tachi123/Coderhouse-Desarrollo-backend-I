import { Router } from 'express';

const router = Router();

//Array para almacenar
let pets = [];

//Middleware para LOGUEAR HORARIO DEL REQUEST
router.use( (req, res, next)  =>  {
    console.log(`${req.method} ${req.path} - ${new Date()}`);
    next();
});

//MÉTODO GET : Obtener todos los recursos ( EN ESTE CASO pets)
router.get('/', (req, res) => {
    res.json(pets);
})

//MÉTODO POST : Para crear un nuevo recurso (EN ESTE CASO UNA MASCOTA)
router.post('/', (req, res) => {
    const newPet = req.body;
    pets.push(newPet);
    res.json({message: 'Mascota creada exitosamente'});
})


export default router;