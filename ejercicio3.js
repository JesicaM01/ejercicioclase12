const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa un número para contar los impares: ", (input) => {
    let numeroX = parseInt(input);
    
    let contadorImpares = 0;

    for (let i = 0; i <= numeroX; i++) {
        if (i % 2 !== 0) {
            contadorImpares++;
        }
    }
    
    console.log("La cantidad de números impares desde 0 hasta " + numeroX + " (inclusive) es: " + contadorImpares);
    rl.close();
});