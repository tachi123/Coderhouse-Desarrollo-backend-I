class Circulo{

    #radio = 0;

    constructor(radio, nombre){
        this.nombre= nombre;
        this.#radio = radio;
    }

    get nombre(){
        return this.nombre ?? "Círculo sin nombre";
    }

    get diametro(){
        return this.#radio * 2;
    }

    get area(){
        return Math.PI * this.#radio**2;
    }
}

const miCirculo = new Circulo(10);
console.log(`El ${miCirculo.nombre} tiene de díametro: ${miCirculo.diametro}`);
console.log(`El ${miCirculo.nombre} tiene de área: ${miCirculo.area}`);



