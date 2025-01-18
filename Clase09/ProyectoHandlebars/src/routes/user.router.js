import {Router} from 'express';

const router = Router();

//Array de usuarios
let users = [
    {name: 'Nahuel', lastName: 'Ramirez', age: 33},
    {name: 'Fernando', lastName: 'Cabral', age: 44},
    {name: 'Roberto', lastName: 'Rodriguez', age: 13},
    {name: 'Andres', lastName: 'Aguilar', age: 53},
    {name: 'Matias', lastName: 'Fazzito', age: 44}
];

router.post('/', (req,res) => {
    const {name, email, password} = req.body;
    //Simulamos el guardado en el array
    users.push({name, email, password});
    res.status(201).send('Usuario registrado exitosamente');
})

router.get('/datos-personales', (req, res) => {
    //Seleccionar un usuario aleatorio
    const randomIndex = Math.floor(Math.random() * users.length);
    const ramdonIndex = users[randomIndex];
    res.render('datospersonales', {user: ramdonIndex});
})

export default router;