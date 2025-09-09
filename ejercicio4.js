const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const notas = [];
const numeroDeNotas = 3;

function pedirNotas(indice) {
  if (indice < numeroDeNotas) {
    rl.question(`Ingresa la nota del estudiante ${indice + 1}: `, (input) => {
      const nota = parseInt(input);
      notas[indice] = nota;
      pedirNotas(indice + 1);
    });
  } else {
    console.log("Las notas ingresadas son:", notas);
    rl.close();
  }
}

pedirNotas(0);