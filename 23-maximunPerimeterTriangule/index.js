function maximumPerimeterTriangle(sticks) {
    // Ordenar los palos en orden ascendente
    sticks.sort((a, b) => a - b);

    let i = sticks.length - 3;

    // Buscar el triángulo con el mayor perímetro posible
    while (i >= 0 && sticks[i] + sticks[i + 1] <= sticks[i + 2]) {
        i--;
    }

    if (i >= 0) {
        // Retornar los lados del triángulo encontrado
        return [sticks[i], sticks[i + 1], sticks[i + 2]];
    } else {
        // Retornar [-1] si no se encontró ningún triángulo válido
        return [-1];
    }
}
/*
Detalles:

    sticks.sort((a, b) => a - b);: Ordena la lista de palos en orden ascendente.
    Bucle while:
        Busca una combinación de tres números consecutivos desde el final que formen un triángulo válido.
        Un triángulo es válido si la suma de dos lados es mayor que el tercer lado.
    Retorno:
        Si encuentra un triángulo válido, devuelve los tres lados.
        Si no, devuelve [-1].

Ejemplo de uso:
console.log(maximumPerimeterTriangle([1, 2, 3, 4, 5, 10])); // [3, 4, 5]
console.log(maximumPerimeterTriangle([1, 1, 1, 2, 3]));     // [1, 1, 1]
console.log(maximumPerimeterTriangle([1, 2, 3]));           // [-1]

*/