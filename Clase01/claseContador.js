class Contador{

    static totalContadores = 0;
    static cuentaGlobal = 0;

    constructor(nombre){
        this.nombre = nombre;
        this.cuenta = 0;
        Contador.totalContadores++;
    }

    incrementar(){
        this.cuenta++;
        Contador.cuentaGlobal++;
    }

    getResponsable(){
        return this.nombre.toUpperCase();
    }

    getCuentaIndividual(){
        return this.cuenta;
    }

    getInfo(){
        console.log(`El/la contador ${this.getResponsable()} tiene en su cuenta ${this.getCuentaIndividual()}`);
    }

    static obtenerTotalContadores(){
        return Contador.totalContadores;
    }

    static obtenerCuentaGlobal(){
        return Contador.cuentaGlobal;
    }
}

//Casos de prueba
let contador1 = new Contador("Juan");
let contador2 = new Contador("Andrea");
let contador3 = new Contador("Nahuel");

contador1.incrementar();
contador1.incrementar();
contador1.incrementar();

contador2.incrementar();

contador3.incrementar();
contador3.incrementar();

contador1.getInfo();
contador2.getInfo();
contador3.getInfo();

console.log('Total contadores: '+Contador.obtenerTotalContadores());
console.log('Cuenta global: '+Contador.obtenerCuentaGlobal());