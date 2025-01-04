import UserManager from "./UserManager.js";

const userManager = new UserManager();

async function main(){
    try{
        //Crear nuevo usuario
        await userManager.crearUsuario(
            {
                nombre: 'Nahuel',
                apellido: 'Ramirez',
                edad: 33,
                curso: 'Programación backend'
            }
        );
        //Consultar usuarios
        const usuarios = await userManager.leerUsuarios();
        console.log('Usuarios: ', usuarios);
    }catch(error){
        console.error('Error en la aplicacion:',error);
    }
}

main();