import {Router} from 'express';
import { midGetUser } from '../middlewares/auth.js';

const router = Router();

router.get('/', (req, res) => {
    //Usar un objeto prueba, que meteremos en la plantilla para sustituir los campos
    let testUser = {
        name: "Nahuel",
        last_name: "Ramirez",
        age: 33
    }
    //res.render es un método para renderizar platillas. Y se compone así: (NOMBRE de la plantillza, objeto para reemplazar los campos)
    res.render('index',testUser);
})

router.get('/register', (req, res) => {
    res.render('register');
})


router.get('/despedida', midGetUser, (req, res) => {
    res.render('despedida', { user: req.user});
})

export default router;