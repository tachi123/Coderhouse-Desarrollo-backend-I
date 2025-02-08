/**
 * En este router tengo las operaciones CRUD pero devuelvo respuestas con vistas renderizadas
 */
import { Router } from 'express';
import ProductModel from '../models/product.model.js';
import { uploader } from '../utilsMulter.js';

const router = Router();

//C: Create
router.post('/', uploader.single('file') ,async (req, res) => {
    try{
        const newProduct = new ProductModel(req.body);
        console.log('Info del body: ', req.body);
        console.log(req.file); //Revisar que campos vienen por parte de multer
        newProduct.thumbnail = req.file.path; //Agrego al usuario la ruta de su respectiva imagen
        await newProduct.save();

        res.render('product', {product: newProduct.toObject()});
    }catch(error){
        return res.render('error', {error: "Error al insertar el producto"});
    }
})

//R: Read
router.get('/', async (req, res) => {
    try{
        const products = await ProductModel.find();
        
        res.render('products', {products: products.map( product => product.toObject())});
    }catch(error){
        return res.render('error', {error:"Error al obtener productos"});
    }
})

//R: Read PERO UN SOLO PRODUCTO
router.get('/:id', async (req, res) => {
    try{
        const unProducto = await ProductModel.findById(req.params.id);
        if(!unProducto){
            return res.render('error', {error: "Producto no encontrado"});
        }
        res.render('product', {product: unProducto.toObject()});
    }catch(error){
        return res.render('error', {error:"Error al obtener el producto solicitado"});
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const productoAEliminar = await ProductModel.findByIdAndDelete(req.params.id);
        if(!productoAEliminar){ //Si la variable sigue vacía, es que no encontro el producto y no lo elimino
            return res.render('error', {error: "No se encontró el producto a eliminar"})
        }
        res.redirect('/product');
    }catch(error){
        return res.render('error', {error:"Error al eliminar el producto"});
    }
})

export default router;