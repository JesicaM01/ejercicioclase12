const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const nombres = [];
const cantidadDeNombres = 5;

function pedirNombres(indice) {
  if (indice < cantidadDeNombres) {
    rl.question(``, (nombre) => {
      nombres[indice] = nombre;
      pedirNombres(indice + 1);
    });
  } else {
    verificarNombre();
  }
}

function verificarNombre() {
  rl.question(``, (nombreBuscado) => {
    const nombreEncontrado = nombres.includes(nombreBuscado);
    
    if (nombreEncontrado) {
      console.log(``);
    } else {
      console.log(``);
    }
    rl.close();
  });
}

pedirNombres(0);