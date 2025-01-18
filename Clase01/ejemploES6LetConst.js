//Ejemplo de let y const:
// Usando `let`
let nombre = "Juan";
console.log(nombre); // Muestra "Juan"

if (true) {
  let nombre = "Pedro"; // Esta variable `nombre` solo es válida dentro del bloque if
  console.log(nombre); // Muestra "Pedro"
}

console.log(nombre); // Muestra "Juan"

console.log('--- PRUEBA DE LET ----')

let i = 0;

function foo(){
	i = 1;
	let j = 2;
	if(true) {
		console.log(i); //1
		console.log(j); //2
    }
}
foo();

function foo(){
	let i = 0;
	if(true) {
		// seria otra variable i 
		// solo para el bloque if
		let i = 1;
		console.log(i); //1
    }
    console.log(i); //0
}
foo();

console.log('--- PRUEBA DE CONST ----')
const unNumero = 20;
console.log(unNumero);
/*
TypeError: Assignment to constant
unNumero = 30;
console.log(unNumero);
*/

const miArray = [1, 2, 3];
console.log(miArray); // [1, 2, 3]
miArray[0] = 5;
console.log(miArray); // [5, 2, 3]
miArray.push(6);
console.log(miArray); // [5, 2, 3, 6]
miArray = [1, 2];


