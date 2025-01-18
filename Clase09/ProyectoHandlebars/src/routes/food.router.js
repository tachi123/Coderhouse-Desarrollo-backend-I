import {Router} from 'express';

const router = Router();

let food = [
    {name: "Hamburguesa" , price: "100"},
    {name: "Banana" , price: "20"},
    {name: "Soda" , price: "40"},
    {name: "Ensalada" , price: "120"},
    {name: "Pizza" , price: "150"}
]
/** RENDERIZAR TODA LA COMIDA  */
router.get('/', (req, res) => {
    //Usamos un usuario de prueba para sustuir campos
    let testUser = {
        name: "Nahuel",
        last_name: "Ramirez",
        age: 33,
        role: "admin"
    }

    res.render('indexfood', {
        user: testUser,
        food,
        isAdmin: testUser.role === "admin",
        style: "index.css"
    })
})

export default router;