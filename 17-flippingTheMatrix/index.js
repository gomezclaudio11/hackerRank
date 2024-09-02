function flippingMatrix(matrix) {
    let n = matrix.length / 2;
    let total = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let max = Number.MIN_VALUE;
            max = Math.max(matrix[i][j], max);
            max = Math.max(matrix[i][2 * n - j - 1], max);
            max = Math.max(matrix[2 * n - i - 1][j], max);
            max = Math.max(matrix[2 * n - i - 1][2 * n - j - 1], max);
            total += max;
        }
    }
    
    return total;
}
/**
 let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
Aquí n = 2, ya que la matriz es de 4x4, lo que significa que queremos maximizar la suma de la submatriz 2x2 ubicada en la esquina superior izquierda.
Proceso de selección:

    Primer ciclo i = 0, j = 0:
        Posiciones consideradas:
            matrix[0][0] = 1
            matrix[0][3] = 4 (espejo horizontal)
            matrix[3][0] = 13 (espejo vertical)
            matrix[3][3] = 16 (espejo horizontal y vertical)
        Máximo valor: 16
        Acumulado: total = 16

    Segundo ciclo i = 0, j = 1:
        Posiciones consideradas:
            matrix[0][1] = 2
            matrix[0][2] = 3 (espejo horizontal)
            matrix[3][1] = 14 (espejo vertical)
            matrix[3][2] = 15 (espejo horizontal y vertical)
        Máximo valor: 15
        Acumulado: total = 16 + 15 = 31

    Tercer ciclo i = 1, j = 0:
        Posiciones consideradas:
            matrix[1][0] = 5
            matrix[1][3] = 8 (espejo horizontal)
            matrix[2][0] = 9 (espejo vertical)
            matrix[2][3] = 12 (espejo horizontal y vertical)
        Máximo valor: 12
        Acumulado: total = 31 + 12 = 43

    Cuarto ciclo i = 1, j = 1:
        Posiciones consideradas:
            matrix[1][1] = 6
            matrix[1][2] = 7 (espejo horizontal)
            matrix[2][1] = 10 (espejo vertical)
            matrix[2][2] = 11 (espejo horizontal y vertical)
        Máximo valor: 11
        Acumulado: total = 43 + 11 = 54

Resultado final:

Al final, el valor total que se retorna es 54, que es la suma máxima posible de la submatriz 2x2 seleccionando los valores máximos correspondientes, considerando las posibilidades de voltear filas y columnas.
ChatGPT puede cometer errores. Com
 */