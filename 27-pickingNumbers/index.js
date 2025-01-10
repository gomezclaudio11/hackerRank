function pickingNumbers(a) {
    // Contar frecuencias usando un mapa
    const freq = {};
    for (const num of a) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let max = 0;
    // Calcular el máximo tamaño de subconjunto
    for (const key in freq) {
        const current = freq[key];
        const next = freq[parseInt(key) + 1] || 0; // Frecuencia del siguiente número
        max = Math.max(max, current + next);
    }

    return max;
}

/**
 Paso a Paso
1. Inicialización del objeto de frecuencias

const freq = {};

    Propósito: Usar un objeto (freq) para almacenar la cantidad de veces que aparece cada número en el arreglo a.

2. Contar frecuencias

for (const num of a) {
    freq[num] = (freq[num] || 0) + 1;
}

    Cómo funciona:
        Se recorre cada número (num) en el arreglo a.
        Si freq[num] ya existe, incrementa su valor en 1.
        Si no existe, inicializa con 0 usando (freq[num] || 0) y luego suma 1.

    Ejemplo: Para a = [4, 6, 5, 3, 3, 1]:
        Iteración 1: num = 4 → freq[4] = 0 + 1 → freq = { 4: 1 }
        Iteración 2: num = 6 → freq[6] = 0 + 1 → freq = { 4: 1, 6: 1 }
        Iteración 3: num = 5 → freq[5] = 0 + 1 → freq = { 4: 1, 6: 1, 5: 1 }
        Iteración 4: num = 3 → freq[3] = 0 + 1 → freq = { 4: 1, 6: 1, 5: 1, 3: 1 }
        Iteración 5: num = 3 → freq[3] = 1 + 1 → freq = { 4: 1, 6: 1, 5: 1, 3: 2 }
        Iteración 6: num = 1 → freq[1] = 0 + 1 → freq = { 4: 1, 6: 1, 5: 1, 3: 2, 1: 1 }

Al final, el objeto freq contiene:

{ 1: 1, 3: 2, 4: 1, 5: 1, 6: 1 }

3. Inicialización de max

let max = 0;

    Propósito: Almacenar el tamaño máximo del subconjunto encontrado durante la iteración del objeto freq.

4. Calcular el tamaño máximo del subconjunto

for (const key in freq) {
    const current = freq[key];
    const next = freq[parseInt(key) + 1] || 0; // Frecuencia del siguiente número
    max = Math.max(max, current + next);
}

    Cómo funciona:
        Se recorre cada clave (key) en el objeto freq.
        current: Es la frecuencia del número actual, freq[key].
        next: Es la frecuencia del siguiente número (freq[key + 1]). Si no existe, se toma 0 con || 0.
        Suma current + next para calcular el tamaño del subconjunto formado por los números key y key + 1.
        Si la suma es mayor que el valor actual de max, actualiza max.

    Ejemplo con freq = { 1: 1, 3: 2, 4: 1, 5: 1, 6: 1 }:
        Iteración 1: key = 1
            current = freq[1] = 1, next = freq[2] = 0
            max = Math.max(0, 1 + 0) = 1
        Iteración 2: key = 3
            current = freq[3] = 2, next = freq[4] = 1
            max = Math.max(1, 2 + 1) = 3
        Iteración 3: key = 4
            current = freq[4] = 1, next = freq[5] = 1
            max = Math.max(3, 1 + 1) = 3
        Iteración 4: key = 5
            current = freq[5] = 1, next = freq[6] = 1
            max = Math.max(3, 1 + 1) = 3
        Iteración 5: key = 6
            current = freq[6] = 1, next = freq[7] = 0
            max = Math.max(3, 1 + 0) = 3

5. Devolver el resultado

return max;

    Al final, max contiene el tamaño del subconjunto más grande. Para a = [4, 6, 5, 3, 3, 1], el resultado es 3.

Resumen

La versión mejorada utiliza un objeto para contar frecuencias y solo recorre las claves del objeto, lo que optimiza el espacio y la flexibilidad respecto a la implementación original. Además:

    Eficiencia de tiempo: O(n)O(n), donde nn es el tamaño del arreglo a.
    Eficiencia de espacio: O(k)O(k), donde kk es el número de valores únicos en a.

Esto hace que la solución sea más robusta y escalable.
 */