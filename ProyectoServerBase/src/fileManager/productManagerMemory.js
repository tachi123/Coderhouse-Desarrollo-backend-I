import fs from 'fs';

class ProductManager {

    static productos = [];

    //Almacenar producto en el archivo
    static crearProducto(product){
        ProductManager.productos.push(product);
    }

    static leerProductos(){
        return ProductManager.productos;
    }

    static leerProducto(id){
       //busco el producto
       //retorno el producto buscado
    }

    static actualizarProducto(){
        //buscan en el array
        //lo actualizan
        //retornan el producto
    }

    static borrarProducto(){
        //buscan en el array
        //lo borran en el array
        //retornan
    }
}

export default ProductManager;