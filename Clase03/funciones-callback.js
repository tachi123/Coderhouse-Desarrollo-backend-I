//Funciones Callback - Pasamos una función como argumento
function ejecutarTarea(callback){
    //...
    callback(); //Ejecuta el callback
    //...
}

//let tareaActual = () => console.log("Realizando tarea");
ejecutarTarea(() => console.log("Paso1"));
ejecutarTarea(() => console.log("Paso2"));

//Ejemplo de mostrar nombres de un array aplicando callback a cada elemento
const nombres = ["Ana","Pablo","Nahuel"];
nombres.forEach(
    //Callback con función flecha
    nombre => console.log(nombre)
);
nombres.forEach(
    //Callback con función tradicional
    function(nombre) {console.log(nombre) ;}
);

//Agregar comportamiento a un botón
//let boton = document.getElementById("boton1");
//boton.addEventListener("click", () => console.log("Alguien apreto el botón") );




//Utilizaremos este arreglo de prueba
let valoresOriginales = [1,2,3,4,5];
//Estamos acostumbrados a ller una función map de la siguiente forma:
let valoresConsecutivos = valoresOriginales.map(x=>x+1); //nuevos valores tendrá: [2,3,4,5,6]

/**
 * Sin embargo, lo que metemos dentro de la función map es una función (flecha, más específicamente), que indica que se sume en 1 el valor
 * del número que esté en el arreglo.
 * ¿Siempre tenemos que sumar 1? ¡No! Nosotros podemos meter la operación que querramos, ¡y map la ejecutará de manera interna!
 */
let valoresPor2 = valoresOriginales.map(x=>x*2); //otrosValores tendrá: [2,4,6,8,10]
let valoresEnString = valoresOriginales.map(x=>"a"); //masValores tendrá: [“a”,“a”,“a”,“a”,“a”,“a”]

/**
 * Notamos que, no importa cuánto cambie la función que esté metiendo dentro de map, map está hecho para RECIBIR UNA FUNCIÓN COMO PARÁMETRO
 * y poder eecutarla cuando lo considere pertinente. Ahora. Si estructuramos el callback por fuera
 */
const funcionCallback = (valor) => { //Función que evalúa si el valor del arreglo es un número par
	if(valor%2===0){
		return valor
	}
	else{
		return "no es par"
	}
}

const evaluacionesDePares = valoresOriginales.map(funcionCallback); //Estoy pasando la función completa como argumento de la función map
console.log(evaluacionesDePares) // el resulatdo será: [“no es par”,2,”no es par”,4,”no es par]

//Recreación de función map
const miFuncionMap = ( unArray, callback )=> {
    let nuevoArreglo = [];
    for(let i = 0; i>nuevoArreglo.length; i++){
        let nuevoValor = callback(unArray[i]);
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
};
//pongamos en comparación nuestra nueva función con un CALLBACK y la función map
let nuevoArregloPropio = miFuncionMap(arregloDePrueba,x=>x*2); //El nuevo arreglo será: [2,4,6,8,10]
let nuevoArregloConMap = arregloDePrueba.map(x=>x*2); //El arreglo será: [2,4,6,8,10]

/**
 * Nota que no hay diferencia. Acabamos de recrear la función map para entender su funcionamiento interno y 
 * viendo DÓNDE se está utilizando el callback que enviamos como parámetro
 */

/**

 * EXTRA: Si queremos que la función se ejecute sobre el mismo arreglo y no tener que pasarlo como parámetro, debemos agregar nusetra nueva

 * función en el prototitpo del objeto Array

 */
//Recreación de función agregandola a prototype array
Array.prototype.miFuncionMap = ( unArray, callback )=> {
    let nuevoArreglo = [];
    for(let i = 0; i>nuevoArreglo.length; i++){
        let nuevoValor = callback(unArray[i]);
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
};
let nuevoArregloConMiMap = arregloDePrueba.miFuncionMap(x=>x*2); 
