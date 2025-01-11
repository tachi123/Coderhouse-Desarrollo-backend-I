import express from 'express';

const app = express();
//Nuestro servidor listo para recibir información del cliente
const server = app.listen(8080, () => console.log("Listening on port 8080"));

app.use(express.json()); //Indicamos que ahora podemos recibir jsons al momento de recibir solicitudes
app.use(express.urlencoded({encoded:true})); //Permite que se pueda enviar información también desde la URL

let users = [
    {id: "1", first_name: "Nahuel", last_name: "Ramírez"}
]; //Aca almacenaremos los users que vamos a ir creando.

//Método GET: Obtener todos los usuarios
app.get('/api/user', (req,res) => {
    res.send({users});
})

//Método GET: Obtener info de un usuario
app.get('/api/user/:id', (req,res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === userId);//Recordar que estamos comparando STRINGS
    if(!user){
        return res.status(404).send({status: "error", error: "User not found"});
    }
    res.send({user});
})

//Método POST: Crear un nuevo recurso (un usuario)
app.post('/api/user', (req,res) => {
    let user = req.body; // req.body es el JSON que enviará el usuario al momento de hacer la petición
    if(!user.first_name||!user.last_name){//Preguntamos si faltó el nombre o el apellido
        /** Ya que el error es del cliente, porque se equivocó al enviar la información incompleta
         * el status de la response es 400.
         */
        return res.status(400).send({status: "error", error: "Incomplete values"});
    }
    
    //Procederemos a agregar al arreglo de users
    //users.push(user);

    //Agregamos el user pero también le agregamos un id distinto
    users.push({ ...user, id: (users.length + 1).toString()});
    res.send({status: "success", message: "User created"});
})

//Método PUT: Actualizar información de un usuario
app.put('/api/user/:id', (req,res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    //Buscamos el índice o la posición en el array del usuario que queremos actualizar usando su "ID"
    const userIndex = users.findIndex(user => user.id === userId);
    if(userIndex === -1){
        return res.status(404).send({status: "error", error: "User not found"})
    }
    /**
     * //Opcion: 1 - Reemplazamos el usuario completo
    users[userIndex] = updatedUser;
    */
    //Opción 2: Actualizar solo los campos que vienen en el request
    users[userIndex] = { ...users[userIndex], ...updatedUser};
    res.send({status: "success", message: "User updated"});
})

//Método DELETE: Eliminar un usuario
app.delete('/api/user/:id', (req,res) => {
    let userId = req.params.id;
    //Buscamos el índice o la posición en el array del usuario que queremos actualizar usando su "ID"
    const userIndex = users.findIndex(user => user.id === userId);
    if(userIndex === -1){
        return res.status(404).send({status: "error", error: "User not found"})
    }
    users.splice(userIndex,1);
    res.send({status: "success", message: "User deleted"});
})