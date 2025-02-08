import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

import productRouter from './routes/product.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Configurar express-handlebars
