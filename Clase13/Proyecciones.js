//Find {FILTROS} , {Proyeccion}
db.estudiantes.find( {} , {name: 1} )
//Queremos sacar el campo en la visualización USAMOS EL 0
db.estudiantes.find( {} , {name: 0} )

//Sort   
//1 ascendente; -1 descendente
//Listado de estudiantes con nombres y edades

db.estudiantes.find().sort( {apellido: 1, nombre: 1})

//Skip y limit
db.estudiantes.find().sort({apellido: 1}).skip(10).limit(5)