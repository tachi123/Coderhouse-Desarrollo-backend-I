const objetos = [ 
    { manzanas: 3, peras: 2, carne: 1, jugos: 5, dulces: 2 },
    { manzanas: 1, sandias: 1, huevos: 6, jugos: 1, panes: 4 }
];

/* Quiero saber todos los tipos de productos que vendí*/
const objetosConTodosLosProductos = {...objetos[0],...objetos[1]};
//console.log(objetosConTodosLosProductos);
const nombreDeLosObjetos = Object.keys(objetosConTodosLosProductos);
console.log("Array con los nombres de productos vendidos: "+nombreDeLosObjetos);

console.log("Array con los nombres de productos vendidos: "+Object.keys({...objetos[0],...objetos[1]}));

/* Quiero saber el total de productos vendidos */
const sumaDeLosProductosVendidosDeCadaObjeto = 
objetos.map(
    productosVendidos  => 
        Object.values(productosVendidos).reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial)
);
console.log(sumaDeLosProductosVendidosDeCadaObjeto.reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial));

 

//OTRA FORMA DE RESOLVER

  // Crear un conjunto (Set) para almacenar los productos únicos
  const productosUnicos = new Set();

   // Iterar sobre cada objeto y agregar sus claves (productos) al conjunto
  objetos.forEach(objeto => {
    Object.keys(objeto).forEach(producto => {
      productosUnicos.add(producto);
    });
  });

   // Convertir el conjunto a un array
  const listaProductos = [...productosUnicos];
  console.log(listaProductos); // Imprimirá: ["manzanas", "peras", "carne", "jugos", "dulces", "sandias", "huevos", "panes"]
  // Función para sumar los valores de un objeto
    function sumarValores(objeto) {
        return Object.values(objeto).reduce((total, cantidad) => total + cantidad, 0);
    }

   // Calcular el total de productos vendidos para cada objeto y luego sumarlos
  const totalProductos = objetos.reduce((total, objeto) => total + sumarValores(objeto), 0);

  console.log(totalProductos); // Imprimirá el total de productos vendidos