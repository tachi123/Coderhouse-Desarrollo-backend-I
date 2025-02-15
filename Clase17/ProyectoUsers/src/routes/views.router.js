import { Router } from 'express';
import userModel from '../models/user.model.js';


const router = Router();

router.get('/', async (req,res) => {
    let pageActual = req.query.page;
    let limitActual = req.query.limit;
    let infoPaginate = await userModel.paginate(
        {gender: "Female"},
        { limit: limitActual, page: pageActual});
    console.log(infoPaginate);
    let usersObject = infoPaginate.docs.map( doc => doc.toObject());
    res.render('index', {info: infoPaginate, users: usersObject});
})

export default router;