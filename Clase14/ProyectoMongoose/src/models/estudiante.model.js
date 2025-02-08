import mongoose from "mongoose";

const { Schema } = mongoose;

const estudianteCollection = "Estudiantes";

//Definirmos el esquema para el estudiante
const estudianteSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    edad: {type: Number, required: true},
    dni: {type: String, required: true},
    curso: {type: String, required: true},
    nota: {type: Number, required: true}
});

const EstudianteModel = mongoose.model(estudianteCollection, estudianteSchema);

export default EstudianteModel;
