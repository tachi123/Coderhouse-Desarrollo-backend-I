import express from 'express';

import productRouter from './routes/products.router.js';
import cartRouter from './routes/carts.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/api/carts', cartRouter);
app.use('/api/products', productRouter);

const server = app.listen(8080, () => {
    console.log("Listening en PORT 8080");
})