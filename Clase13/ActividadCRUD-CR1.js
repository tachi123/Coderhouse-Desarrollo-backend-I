//Ejercicio 1: Crear y poblar una colección

//Crear una base de datos colegio
//Crear una colección llamada estudiantes
//Insertar múltiples documentos utilizando insertMany que tengan: Nombre, apellido, curso, edad, correo sexo
//Insert un SOLO estudiante que tenga sólo nombre, apellido y curso

use colegio 
db.createCollection("estudiantes")
db.estudiantes.insertMany([
 { nombre: "Ana", apellido: "Pérez", curso: "Matemáticas", edad: 20, correo: "ana@example.com", sexo: "F" },
  { nombre: "Luis", apellido: "Gómez", curso: "Historia", edad: 22, correo: "luis@example.com", sexo: "M" },
  { nombre: "María", apellido: "López", curso: "Ciencias", edad: 21, correo: "maria@example.com", sexo: "F" },
  { nombre: "Carlos", apellido: "Sánchez", curso: "Física", edad: 23, correo: "carlos@example.com", sexo: "M" },
  { nombre: "Sofía", apellido: "Martínez", curso: "Química", edad: 20, correo: "sofia@example.com", sexo: "F" }
])
db.estudiantes.insertOne( { nombre:"Pedro", apellido: "Ramírez", curso: "Arte" })

//Ejercicio 2: Realizar búsquedas

//Buscar todos los estudiantes
db.estudiantes.find()
//Buscar los estudiantes por sexo
db.estudiantes.find( { sexo: "M" })
//Contar los documentos totales
db.estudiantes.countDocuments()
//Contar estudiantes que tienen el sexo femenino
db.estudiantes.countDocuments( {sexo: "F"})


db.estudiantes.find( { $or: [ {curso: "Física"},{curso:"Ciencias"}], edad: { $gte:22}, sexo: { $exists: true} })

//Comando con expreciones regulares

db.estudiantes.find( {nombre: /^A/})