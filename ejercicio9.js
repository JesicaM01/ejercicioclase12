// La matriz de gastos proporcionada
let gastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
];

// a) Total de gastos en una semana
function totalSemana(semana) {
    let indiceFila = semana - 1;
    let total = 0;
    for (let i = 0; i < gastos[indiceFila].length; i++) {
        total += gastos[indiceFila][i];
    }
    return total;
}

// b) Total de gastos en un día
function totalDia(dia) {
    let indiceColumna = dia - 1;
    let total = 0;
    for (let i = 0; i < gastos.length; i++) {
        total += gastos[i][indiceColumna];
    }
    return total;
}

// c) Total de gastos del mes
function totalMes() {
    let total = 0;
    for (let i = 0; i < gastos.length; i++) {
        for (let j = 0; j < gastos[i].length; j++) {
            total += gastos[i][j];
        }
    }
    return total;
}

// d) Semana y día con más gastos
function estadisticas() {
    let semanaMasGastos = 0;
    let totalSemanaMasGastos = 0;
    
    let diaMasGastos = 0;
    let totalDiaMasGastos = 0;

    // Buscar semana con más gastos
    for (let i = 0; i < gastos.length; i++) {
        let totalActual = totalSemana(i + 1);
        if (totalActual > totalSemanaMasGastos) {
            totalSemanaMasGastos = totalActual;
            semanaMasGastos = i + 1;
        }
    }

    // Buscar día con más gastos
    for (let j = 0; j < gastos[0].length; j++) {
        let totalActual = totalDia(j + 1);
        if (totalActual > totalDiaMasGastos) {
            totalDiaMasGastos = totalActual;
            diaMasGastos = j + 1;
        }
    }

    return {
        semana: semanaMasGastos,
        dia: diaMasGastos
    };
}

console.log("a) Total de gastos de la semana 2:", totalSemana(2));
console.log("b) Total de gastos del día 3:", totalDia(3));
console.log("c) Total de gastos del mes:", totalMes());
console.log("d) La semana que más gastos se realizaron fue la:", estadisticas().semana);
console.log("El día que más gastos se realizaron fue el:", estadisticas().dia);