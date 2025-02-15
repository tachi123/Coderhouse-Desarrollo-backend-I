import mongoose from 'mongoose';
import courseModel from './models/course.model.js';
import studentModel from './models/student.model.js';

const urlMongo = 'mongodb://localhost:27017/proyectoMascotas';

const environmentInit = async () => {
    await mongoose.connect(urlMongo);

    //Creamos nuestro curso de prueba en la base
    await courseModel.create({
        title: "Curso de Backend",
        description: "Es un curso que permite desarrollar servidores bien bonitos",
        difficulty: 5,
        topics: ["Javascript", "Servidores", "Motores de plantilla", "Middlewares", "Base de datos"],
        professor: "Nahuel"
    })

    //Creamos nuestro estudiante de prueba base
    await studentModel.create({
        first_name: "Hilda",
        last_name: "Coruño",
        email: "correoHilda@corre.com",
        gender: "Female"
    })
};

//environmentInit();

const environmentTest = async () => {
    await mongoose.connect(urlMongo);

    let student = await studentModel.find({_id: '67b0cb5f02a0647ae3ae2575'});
    console.log(student);
    /**
     * Nota que el curso lo agregamos en un campo llamado "course", no directamente al _id
     */
    student.courses.push({ course: '67b0cb5f02a0647ae3ae2573'});

    let result = await studentModel.updateOne({_id: '67b0cb5f02a0647ae3ae2575'}, student);
    
};

//environmentTest();


const environmentSearch = async () => {
    await mongoose.connect(urlMongo);

    let studentSinPopulate = await studentModel.find({ _id: "62d0ccde16e1b4b228ad5128" });
    console.log(JSON.stringify(studentSinPopulate, null, '\t'));

    let student = await studentModel.find({ _id: "62d0ccde16e1b4b228ad5128" }).populate('courses.course');
    console.log(JSON.stringify(student, null, '\t'));
    
};

environmentSearch();
