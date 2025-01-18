class Persona{

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    static especie = "humano";

    saludar = () => {
        console.log(`¡Hola, soy ${this.nombre} ${this.apellido}, mucho gusto!`);
    }

    getEspecie = () => {
        console.log(`Aunque no lo creas, soy un ${Persona.especie}`);
    }

    setEspecie = (especie)=> {
        Persona.especie = especie;
    }
}

persona1 = new Persona("Jorge","Perez");
persona2 = new Persona("Catalina","Ramirez");

persona1.saludar();
persona2.saludar();

persona1.getEspecie();
persona2.getEspecie();

persona1.setEspecie("ser humano");

persona1.getEspecie();
persona2.getEspecie();