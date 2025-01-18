function nombreDeLaFuncion(parametros){
	//Cuerpo de la funcion, todas las instrucciones internas que necesitamos que la función realice. 
	let variableParaMiFuncion=2;
	return variableParaMiFuncion;
	// Con la palabra “return” podemos MANDAR FUERA DEL SCOPE alguna variable que necesite en otra parte del código
}

/*EJEMPLO COMPLETO*/
function sumarDosNumeros(numero1,numero2){
	//resultado solo existe dentro de la función
	let resultado;
	resultado = numero1+numero2;
	//Cuando la función acabe, “resultado” muere así que hay que mandarla afuera
	return resultado;
}

//Mandamos llamar a la función con valores reales
let total = sumarDosNumeros(2,3);
console.log(total) //5


/*Una función flecha es ANÓNIMA, quiere decir que No tiene nombre, pero puede asignarse a una variable para poder identificarse. */
const identicadorDeFuncion = (parametros) => {
	/* Cuerpo de la función, todas las instrucciones internas que necesitamos que la función realice. */
	let variableParaMiFuncion=2;
	return variableParaMiFuncion;
	/*Con la palabra “return” podemos MANDAR FUERA DEL SCOPE alguna variable que necesite en otra parte del código. 
    La función flecha cuenta con un return IMPLÍCITO */
}

/*EJEMPLO COMPLETO */
const sumarDosNumeros = (numero1,numero2) =>{
	let resultado;
	resultado = numero1+numero2;
    return resultado;
}

const sumarReturnImplicito = (num1,num2) => num1+num2;



function crearMultiplicador(factor) {
    return (numero) => numero * factor;
}
const multiplicadorPor3 = crearMultiplicador(3);
console.log(multiplicadorPor3(5)); // 15