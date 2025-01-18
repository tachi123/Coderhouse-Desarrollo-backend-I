/* CAMBIOS EN LAS DISTINTAS VERSIONES DE ES6 A ES11 */
//Function antes de ES6
function sumar(a,b) { return a + b;}

//Función flecha
const sumar1 = (a,b)  => a + b;

//Implementación
const resultado = sumar(2,2);

const potencia = Math.pow(2,3);
const potencia1 = 2 ** 3;

//Exponential ** permite hacer un equivalenta a la operacion Math.pow(base, exp)
// Elevar una base a un exponente dado
let valoresBase = [1,2,3,4,5,6,7,8,9]; //Tenemos un conjunto de valores base
let nuevosValoresAlCuadrado = valoresBase.map( 
        (unNumero) => unNumero**(1/3)
    );

console.log(valoresBase);
console.log(nuevosValoresAlCuadrado);

//Includes: corrobora si algún elemento elemento existe en el array o arreglo
let nombres = ['Juan', 'Camilo', 'María', 'Nahuel'];

const validarSiEsta = nombre => {
    if(nombres.includes(nombre)){//includes devuelve solo true o false
        console.log(nombre+" sí aparece dentro del arreglo");
    }else{
        console.log(`${nombre} no aparece en el arreglo`);
    }
};

validarSiEsta('Nahuel');
validarSiEsta('Roberto');


let impuestos = { // Define el objeto 'impuestos' (no está en el original, pero se infiere)
    impuesto1: 2341,
    impuesto2: 341,   //key : value
    impuesto3: 4611,
    impuesto4: 111
  };
  
  let parLlaveValor = Object.entries(impuestos);
  console.log(parLlaveValor); // Resultado: [ [ 'impuesto1', 2341 ], [ 'impuesto2', 341 ], [ 'impuesto3', 4611 ], [ 'impuesto4', 111 ] ]
  
  // Notamos cómo Object.keys obtiene en arreglos individuales la propiedad con su valor, en caso de que necesitemos utilizarlas por separado.
  let soloPropiedades = Object.keys(impuestos);
  console.log(soloPropiedades); // Resultado: [ 'impuesto1', 'impuesto2', 'impuesto3', 'impuesto4' ]
  
  // Ahora podemos obtener sólo las propiedades del objeto, sin necesidad de su valor, este método es MUY ÚTIL en códigos profesionales,
  // sin embargo, por cuestiones de complejidad se abordará en elementos prácticos más adelante.
  let soloValores = Object.values(impuestos);
  console.log(soloValores); // Resultado: [ 2341, 341, 4611, 111 ]
  
  // Teniendo sólo los valores del objeto, podemos utilizarlos para hacer un total (En este ejemplo nos apoyamos de un método ya existente
  // conocido como .reduce)
  let impuestosTotales = soloValores.reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial);
  console.log(impuestosTotales); // 7404, total de todos los impuestos.

  //Se imprime en pantalla la suma de los valores de los impuestos
  console.log(`Tengo que pagar este mes: ${Object.values(impuestos).reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial)}`);

//Operador nullish
//Proporciona una forma más concisa y segura de asignar valores por defecto cuando una variable podría ser null o undefined.
let nombre = null;
let saludo = nombre ?? 'Invitado';
console.log(saludo);

