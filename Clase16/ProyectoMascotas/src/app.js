import mongoose from 'mongoose';

//Importo los modelos
import userModel from './models/user.model.js';
import petModel from './models/pet.model.js';

const mongoURL = 'mongodb://localhost:27017/proyectoMascotas';

const init = async () => {
    await mongoose.connect(mongoURL);
    //Creo un usuario
    const newUser = new userModel({name: 'Mauricio'});
    await newUser.save();

    //Creo dos mascotas
    const pet1 = new petModel({name: 'Orejitas'});
    const pet2 = new petModel({name: 'Patitas'});
    await pet1.save();
    await pet2.save();

    //Agregar las mascotas al usuario (usando el _id de la mascota)
    newUser.pets.push({pet: pet1._id});
    newUser.pets.push({pet: pet2._id});
    await newUser.save();
}

//init();

//Buscamos al usuario con sus mascotas (utilizando populate)
const prueba = async () => {
    await mongoose.connect(mongoURL);
    //populate('nombre del campo dentro del array que va a hacer coincidir con el id', los campos que queremos recuperar)
    const userWithPets = await userModel.find().populate('pets.pet');
    console.log(JSON.stringify(userWithPets, null, 2));
}

prueba();