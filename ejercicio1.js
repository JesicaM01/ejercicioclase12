const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let suma = 0;

function pedirNumero() {
  rl.question("Ingresa un número (negativo para terminar): ", (input) => {
    const numero = parseInt(input);

    if (numero >= 0) {
      suma += numero;
      pedirNumero();
    } else {
      console.log("La suma de todos los números es: " + suma);
      rl.close();
    }
  });
}

pedirNumero();