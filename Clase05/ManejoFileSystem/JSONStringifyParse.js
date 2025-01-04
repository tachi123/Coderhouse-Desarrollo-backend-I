import { stringify } from "querystring";
import { json } from "stream/consumers";

//Creamos un objeto
const myObject = {name: "Nahuel", age: 30};
//Transformamos esto a un string
const jsonString = JSON.stringify(myObject);
console.log(json);

//Transformar un string a un objeto
const myObjectParseado = JSON.parse(jsonString);
console.log(myObjectParseado);
