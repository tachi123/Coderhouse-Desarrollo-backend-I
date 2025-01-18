// Definición de variables
let nombre = 'Juan';
let apellido = 'Ramirez';
let edad = 25;
let precio = 50.75;
let series = ['Breaking Bad', 'Stranger Things', 'The Mandalorian'];
let peliculas = ['Pulp Fiction', 'Inception', 'The Matrix'];


// Mostrar los valores por consola
console.log('Nombre:', nombre);
console.log('Edad:', edad);
console.log('Precio:', precio);
console.log('Series:', series);
console.log('Películas:', peliculas);

/* ACTUALIZACIONES
    Voy a hacer actualizaciones en distintas variables
*/
//Incremar la edad en 1
edad++; //edad = edad + 1;

//Añadir una serie a una lista
series.push('Game of Thrones');

//Creo una variable compuesta
nombreYApellido = nombre + ' ' + apellido;

//Mostrar las variables despues de las actualizaciones
console.log('---Después de las actualizaciones ---');
console.log('Edad:', edad);
console.log('Series:', series);
console.log('Nombre y apellido:', nombreYApellido);