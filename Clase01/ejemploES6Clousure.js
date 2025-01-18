function crearContador() {
    let contador = 0;
      return function() {
        contador++;
        return contador;
    };
}
    
const miContador = crearContador();
console.log(miContador()); // Imprime 1
console.log(miContador()); // Imprime 2
console.log(miContador()); // Imprime 3