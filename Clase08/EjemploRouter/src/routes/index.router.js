/**
 * Los routers me sirven para organizar y modularizar mi código
 * Con el objetivo de agrupar los MÉTODOS HTTP relacionados
 */
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola desde el router');
})

//Otro endpoint
router.get('/about',  (req, res) => {
    res.send('Acerca de');
})

export default router;