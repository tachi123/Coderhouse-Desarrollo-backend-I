import fs from 'fs';

class ProductManager {

    static productos = [];

    //Almacenar producto en el archivo
    static async crearProducto(product){
        ProductManager.productos.push(product);
    }

    static async leerProductos(){
        return ProductManager.productos;
    }

    static async actualizarProducto(){
        //buscan en el array
        //lo actualizan
        //retornan el producto
    }

    static async borrarProducto(){
        //buscan en el array
        //lo borran en el array
        //retornan
    }
}

export default ProductManager;