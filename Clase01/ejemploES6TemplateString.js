let nombre = "Juan";
let mensaje = `Hola ${nombre}, bienvenido!`; // 'Hola, '+nombre+'. Bienvenido!';
console.log(mensaje);

const frutas = ["manzana","pera","banana"];

console.log(frutas);

function estaEnLaLista(unElemento, lista){
    for(let i = 0; i < frutas.length; i++){
        if(lista[i] === unElemento){
            return true;
        }
    }
    return false;
}

console.log(estaEnLaLista("manzana",frutas));
console.log(estaEnLaLista("uva",frutas));

function mostrarLista(lista){
    if(lista.length === 0 ){
        console.log("Lista vacía");
    }else{
        for(let i = 0; i < frutas.length; i++){
            console.log(lista[i]);
        }
    }
}

mostrarLista(frutas);