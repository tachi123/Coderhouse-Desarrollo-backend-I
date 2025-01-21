import fs from 'fs';

class ProductManager {

    constructor(){
        this.filePath = './products.json';
    }

    //Almacenar producto en el archivo
    async crearProducto(product){
        try{         
            //Leer el archivo y obtenemos un objeto con los productos
            let productos = await this.leerProductos();
            //Agregar el producto al listado de productos
            productos.push(product);
            //Escribir el archivo
            await fs.writeFile(this.filePath, JSON.stringify(productos,null,2));
            console.log('Producto creado exitosamente.');
        }catch(error){
            console.error('Error al crear un producto');
        }
        
    }

    async leerProductos(){
        try{
            const data = await fs.readFile(this.filePath, 'utf-8');
            return JSON.parse(data) || [];
        }catch(error){
            if (error.code === 'ENOENT') {
                return [];
            } else {
                console.error('Error al leer productos:', error);
                throw error; 
            }
        }
    }
}

export default ProductManager;