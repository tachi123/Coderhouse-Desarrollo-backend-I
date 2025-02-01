use baseCRUD
db.createCollection("mascotas")
db.mascotas.insertOne({ nombre: "Firulais", especie: "perro", edad: 3 })
db.mascotas.insertMany([{ nombre: "Michi", especie: "gato", edad: 2 },{ nombre: "Loro", especie: "ave", edad: 1 }])
db.mascotas.find({ especie: "perro" })
db.mascotas.countDocuments()