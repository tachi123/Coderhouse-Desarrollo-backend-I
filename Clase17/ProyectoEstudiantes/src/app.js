import mongoose from 'mongoose';
import studentModel from './models/student.model.js';

const urlMongo = 'mongodb://localhost:27017/proyectoMascotas';

const environmentInit = async () => {
    await mongoose.connect(urlMongo);

    //1. Obtener a los estudiantes agrupados por calificación del mejor al peor
    let students1 = await studentModel.aggregate([
        { 
            $group: { 
                _id: "$grade", //Agrupamos por calificación
                count: { $sum: 1}, //Contamos cuántos estudiantes hay en cada grupo
            }
        },
        {
            $sort: {_id: -1} //Ordeno los grupos de mayor a menor calificación
        }
    ]);
    console.log(students1);

    //2. Obtener a los estudiantes agrupados por grupo
    let students2 = await studentModel.aggregate([
        {
            $group: {
                _id: "$group", //Agrupamos por grupo
                count: {$sum: 1}, //Contamos cuántos estudiantes hay en cada grupo
            }
        }
    ]);
    console.log(students2);

    //3. Obtener el promedio de los estudiantes del grupo 1B
    let students3 = await studentModel.aggregate([
        {
            $match: { group: "1B"}, //Filtramos solo los estudiantes del grupo 1B
        },
        {
            $group: {
                _id: null, //Agrupamos en un solo gpo para obtener el promedio
                averageGrade: { $avg: "$grade"}, //Calculamos el promedio de las calificaciones
            }
        }
    ]);
    console.log(students3);

    //4. Obtener el promedio de los estudiantes del grupo 1A
    let students4 = await studentModel.aggregate([
        {
            $match: { group: "1A"}, //Filtramos solo los estudiantes del grupo 1B
        },
        {
            $group: {
                _id: "1A", //Agrupamos en un solo gpo para obtener el promedio
                averageGrade: { $avg: "$grade"}, //Calculamos el promedio de las calificaciones
            }
        }
    ]);
    console.log(students4);

    //4. Obtener el promedio general de los estudiantes
    let students5 = await studentModel.aggregate([
        {
            $group: {
                _id: "Promedio_general", //Agrupamos en un solo gpo para obtener el promedio
                averageGrade: { $avg: "$grade"}, //Calculamos el promedio de las calificaciones
            }
        }
    ]);
    console.log(students5);

    //6. Obtener el promedio de los estudiantes que tienen de sexo masculino
    let students6 = await studentModel.aggregate([
        {
            $match: { gender: "Male"}, //Filtramos solo los estudiantes del grupo 1B
        },
        {
            $group: {
                _id: null, //Agrupamos en un solo gpo para obtener el promedio
                averageGrade: { $avg: "$grade"}, //Calculamos el promedio de las calificaciones
            }
        }
    ]);
    console.log(students6);

    //7. Obtener el promedio de los estudiantes que tienen de sexo femenino
    let students7 = await studentModel.aggregate([
        {
            $match: { gender: "Female"}, //Filtramos solo los estudiantes del grupo 1B
        },
        {
            $group: {
                _id: null, //Agrupamos en un solo gpo para obtener el promedio
                averageGrade: { $avg: "$grade"}, //Calculamos el promedio de las calificaciones
            }
        }
    ]);
    console.log(students7);

};

environmentInit();