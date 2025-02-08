import express from 'express';
import handlebars from 'express-handlebars';
import methodOverride from 'method-override';
import __dirname from './utils.js'; //Import __dirname para solucionar la creación del path
import mongoose from "mongoose";

//Importo los routers
import viewsRouter from './routes/views.router.js';
import productRouter from './routes/product.router.js';

/** Import dotenv  para trabajar con las variables de entorno */
import dotenv from "dotenv";
dotenv.config(); //Nos permite poder trabajar con las variables de entorno
const PORT = process.env.PORT;
const URIMongoDB = process.env.URL_MONGODB;

//Inicializo la constante app para utilizar express
const app = express();

//Configuro mi servidor para trabajar con json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Inicializo mi motor de plantillas y lo configuro
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

//Seteo de manera estática la carpeta public
app.use(express.static(__dirname + '/public'));

//Conexión a la base de datos
mongoose.connect(URIMongoDB)
    .then( () => console.log("Conexión realizada con éxito"))
    .catch( (error) => console.error("Error en conexión: ". error));

//Para poder reescribir e interpretar el valor del campo _method de un formulario
app.use(methodOverride('_method'));

const server = app.listen(PORT, () => { console.log(`Listening on port ${PORT}`)});

//Implemento los routers
app.use('/', viewsRouter); //Voy a tener todas las vistas, es decir, devuelvo con res.render()
app.use('/product', productRouter); //Voy a tener las operaciones CRUD pero renderizamos