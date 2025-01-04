import fs from 'fs';

class UserManager {

    constructor(){
        this.filePath = './Usuarios.json';
    }

    //Almacenar el usuario en el archivo
    async crearUsuario(usuario){
        try{         
            //Leer el archivo y obtenemos un objeto con los usuarios
            let usuarios = await this.leerUsuarios();
            //Agregar el usuario al listado de usuarios
            usuarios.push(usuario);
            //Escribir el archivo
            await fs.writeFile(this.filePath, JSON.stringify(usuarios,null,2));
            console.log('Usuario creado exitosamente.');
        }catch(error){
            console.error('Error al crear un usuario');
        }
        
    }

    async leerUsuarios(){
        try{
            const data = await fs.readFile(this.filePath, 'utf-8');
            return JSON.parse(data) || [];
        }catch(error){
            if (error.code === 'ENOENT') {
                return [];
            } else {
                console.error('Error al leer usuarios:', error);
                throw error; 
            }
        }
    }
}

export default UserManager;