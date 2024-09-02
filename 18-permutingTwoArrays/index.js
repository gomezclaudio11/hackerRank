function twoArrays(k, A, B) {
    // Inicializamos el resultado en "YES"
    let result = "YES";
    
    // Ordenamos el arreglo A en orden ascendente
    A = A.sort((a, b) => a - b);
    
    // Ordenamos el arreglo B en orden descendente
    B = B.sort((a, b) => b - a);
    
    // Recorremos los elementos de los arreglos A y B
    for (let i = 0; i < A.length; i++) {
        // Si la suma de A[i] y B[i] es menor que k, cambiamos el resultado a "NO"
        if (A[i] + B[i] < k) {
            result = "NO";
            break; // Salimos del bucle porque ya no necesitamos seguir verificando
        }
    }
    
    // Retornamos el resultado
    return result;
}
