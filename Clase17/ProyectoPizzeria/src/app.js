import mongoose from 'mongoose';
import orderModel from './models/order.model.js';

const urlMongo = 'mongodb://localhost:27017/proyectoMascotas';

const environmentInit = async () => {
    await mongoose.connect(urlMongo);

    let orders = await orderModel.aggregate([
        //Stage 1: Filtrar las órdenes para obtener solo aquellas que tengan el atamaño mediano.
        //Recordamos que match nos permitirá aplicar un filtro como cualquiera de los que hemos hecho
        { $match: {size: "medium"}},
        // Stage 2: Agrupar por sabores ya cumular el número de pizzas de cada sabor
        //NOTA IMPORTANTE: Utilizamos "$name" que es el valor del documento que queremos usar para agrupar
        //Y después vamos a poder acceder a cualquier valor del documento, en este quantity
        { $group: {_id: "$name", totalQuantity: { $sum: "$quantity"} }},
        //Nuevo Stage 3: Ordenar los documentos ya agrupados de mayor a menor
        { $sort: { totalQuantity: -1 }},
        //Stage 4: Guardar los documentos de alagregación, en un nuevo documento que tenga un array de ordenes
        //Guardando los resultados en una colección, y $$ROOT toma todo el documento para insertar
        {$group: {_id: 1, orders: { $push: "$$ROOT"}}},
        //Stage 5: Una vez que agrupamos todos los elementos en un único documento, utilizaremos $project para generar un nuevo ObjectId
        //así podremos guardarlo sin coincidencias
        //Al utilizar $project, si colocamos _id: 0 significa que genere un ObjectId propio
        { $project: {_id: 0, orders: "$orders"}},
        //Stage final: Agregar los elementos a la colección "reports". Si se deseara agregar un nuevo, recordamos que este es el último
        { $merge: { into: "reportes"}}
    ]);

    console.log(orders);
};

environmentInit();