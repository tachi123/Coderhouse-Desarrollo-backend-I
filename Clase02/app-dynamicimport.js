let modo = "cálculos"

async function ejemploImport(){
    if (modo === "cálculos"){
        const {  Calculadora } = await import('./calculadora.js');
        let calculadora2 = new Calculadora();
        console.log(calculadora2.sumar(4,2)); //3
    }

}
ejemploImport();

