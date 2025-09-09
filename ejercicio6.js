let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];

let sumaTotal = 0;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        let numero = matriz[i][j];

        if (numero >= 10 && numero < 1000) {
            sumaTotal += numero;
        }
    }
}

console.log("La suma de los números que están por encima o igual a 10, pero menores que 1000 es:", sumaTotal);