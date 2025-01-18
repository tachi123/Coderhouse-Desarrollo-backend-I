let idPersonaABuscar = 2;

let people = [
    {id:1,first_name: "Luz", last_name: "Escalante", age: 25,gender:"F"},
    {id:2,first_name: "Bruno", last_name: "Guerra", age: 18,gender:"M"},
    {id:3,first_name: "Marisol", last_name: "Cadena", age:23,gender:"F"},
    {id:4,first_name: "Franco", last_name: "Chachagua", age: 30,gender:"M"}
];

people.push(
    {id:5,first_name: "Nahuel", last_name: "Ramírez", age: 33,gender:"M"}
);

let personaEncontrada = people.find(unElem => unElem.id === idPersonaABuscar);
console.log('---Persona buscada con el id '+idPersonaABuscar+'----');
console.log(personaEncontrada);

let personasMasculino = people.filter(unElem => unElem.gender === "M" && unElem.age >= 30);
console.log('---Personas con género masculino---');
console.log(personasMasculino);