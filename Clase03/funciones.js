/* FUNCIONES DEFINIDAS - CON NOMBRE
    SE PUEDEN INVOCAR A PARTIR DE UN NOMBRE
*/

//Funciones tradicionales
function suma(a,b){
    return a + b;
}

//Funciones flecha
const sumaFlecha = (a,b)  => a + b; //(a,b)  => {return a + b};

/*FUNCIONES ANÓNIMAS */
(function(){
    console.log("Soy una función anónima")
})();

//Crear función modificar el comportamiento de generar enemigos en un juego
let generarEnemigos = function(){
    //Lógica para generar enemigos en el nivel 1
};
//después avanzó de nivel y demás
generarEnemigos = function(){
    //Lógica para generar enemigos en el nivel 2
};
