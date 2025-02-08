


//RENDERIZAMOS LA VISTA home.handlebars
router.get('/products', (req, res)  => {

    //Buscar los productos

    res.render('index', {products});
})


//RENDERIZAMOS LA VISTA realTimeProducts.handlebars
router.get('/realtimeproducts', (req, res)  => {

    res.render('realTimeProducts');
})