import {Router} from 'express';
import { ProductManager } from '../fileManager/productManagerMemory.js';

const router = Router();

//YA VA A ESTAR DENTRO DEL PATH /api/products - PORQUE ASÍ LO DEFINIMOS EN EL ARCHIVO APP.JS

/** Método GET: PARA OBTENER TODOS LOS RECURSOS
 * Retornar todos los productos
 */
router.get('/', (req, res) => {
    return ProductManager.leerProductos();
})

/** Método GET: PARA OBTENER UN RECURSO
 * Retornar un producto según su ID .get(/:id)
 */
router.get('/:id', (req, res) => {
    return ProductManager.leerProducto(id);
})

/** Método POST: PARA CREAR UN RECURSO
 * Crear un producto
 */

/** Método PUT: PARA ACTUALIZAR UN RECURSO
 * Actualizar un producto
 */

/** Método DELETE: PARA ELIMINAR UN RECURSO
 * Eliminar un producto
 */



export default router;