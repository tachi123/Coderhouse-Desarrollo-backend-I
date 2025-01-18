//Middleware para simular usuario logueado
export const midGetUser = (req, res, next)  =>  {
    req.user = {
        name: "Nahuel",
        last_name: "Ramirez",
        age: 33
    }
    if(req.user.age > 18){
        next();
    }else{
        res.redirect('/login');
    }
    
};