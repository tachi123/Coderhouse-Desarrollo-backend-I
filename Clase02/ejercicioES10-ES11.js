// String.trim(): Remueve los espacios innecesarios en una cadena. Sirve para validar cadenas enviadas vacías o eliminar los espacios iniciales y finales.
let cadena1 = `                                         hola`//El mensaje no debería enviarse de esa manera, ya que consume espacio innecesario a almacenar.
console.log(cadena1.trim()); //resultado: "hola"

//Podemos validar también si me enviarion un mensaje vacío, para saber si al almacenarlo o no enviar el mensaje (simulando un chat)
let mensajes=[];
let intentoDeMensaje=`                                 `
if(intentoDeMensaje.trim().length>0){//Por lo menos hay un caracter (no espacio) para enviar al usuario, entonces es un mensaje válido.
    mensajes.push(intentoDeMensaje.trim())
}else{//Si la condición entra a else, es porque el mensaje venía vacío y por lo tanto no deberíamos guardarlo niu enviarlo al otro usuario
    console.log("Mensaje vacío, para poder enviar un mensaje, favor de escribir algo")
}
/**
 * Sin el método trim, permitimos muchas brechas de seguridad al momento de querer procesar cadenas de texto, de modo que es bueno limitarlos
 * a un formato que dominemos (sin espacios extras ni cadenas aparentemente vacías)
 */

//Uso de flat
//Array.flat():Remueve anidaciones internas en arrays para dejar un arreglo plano.
let arrayAnidado = [
    1,
    32,
    4,
    5,
    6,
    [1,4,5,1],
    [3411,3,4]
]//Anteriormente, para poder obtener los valores internos de cada arreglo, usábamos
// una técnica llamada "Recursividad", esta vez es más sencillo.
console.log(arrayAnidado.flat());//resultado: [1,32,4,5,6,1,4,5,1,3411,3,4], notamos que ya no hay mas anidación y podemos manejarlos mejor.

//Operador Nullish (??) vs. Operador OR (||)
//OR trabajo con valores falsy incluyen false, 0, "", null, undefined y NaN. 
// (??) trabaja solo con null y undefined
let variable = 0;
console.log(variable || "Sin valor"); // Imprime "Sin valor" porque 0 es falsy
console.log(variable ?? "Sin valor"); // Imprime 0 porque 0 no es null ni undefined