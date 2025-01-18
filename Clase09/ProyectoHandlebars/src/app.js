import express from 'express';
import __dirname from './utils.js';
import handlebars from 'express-handlebars';

//Importo los routers
import viewsRouter from './routes/views.router.js';
import userRouter from './routes/user.router.js';
import foodRouter from './routes/food.router.js';

const app = express();

//Setear de manera estática nuestra carpeta public
app.use(express.static(__dirname+'/public'));

//CONFIGURO MI MOTOR DE PLANTILLAS - Porque cuando le digamos al servidor que renderize (res.render), sepa que tiene que hacerlo con handlebars
app.engine('handlebars', handlebars.engine()); //Inicializamos el motoro indicando app.engine('que motor utilizaremos', el motor instanciado)
app.set('views', __dirname + '/views'); //con app.set('views',ruta) Indicamos en que parte del proyecto van a estar las vistas
app.set('view engine', 'handlebars'); //Indicamos que el motor que ya inicializamos arriba es el que queremos utilizar.


//Midleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', viewsRouter);
app.use('/user', userRouter);
app.use('/food', foodRouter);

const server = app.listen(8080, () => {
    console.log("Listening on PORT 8080")
})