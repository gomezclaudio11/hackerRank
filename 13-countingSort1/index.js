function countingSort(arr) {
    // Crea una nueva matriz de tamaño 100, inicializada con ceros.
    let fArr = new Array(100).fill(0);

    // Recorre cada elemento del arreglo de entrada.
    for (let i = 0; i < arr.length; i++) {
        // Incrementa el valor en el índice correspondiente en fArr.
        fArr[arr[i]]++;
    }

    // Retorna la matriz de frecuencias.
    return fArr;
}

/**
 Propósito de la función

La función countingSort implementa el algoritmo de ordenamiento por 
conteo (Counting Sort), que es especialmente útil cuando los valores 
de la matriz de entrada están dentro de un rango pequeño y conocido. 
En este caso, el rango es de 0 a 99.

se crea una nueva matriz llamada fArr con 100 elementos, todos 
inicializados a 0. Esta matriz se usará para contar la frecuencia de 
cada número en la matriz de entrada arr.

Este bucle for recorre cada elemento en la matriz de entrada arr.
Para cada elemento arr[i], incrementa el valor en el índice correspondiente 
de fArr. Es decir, si arr[i] es 5, incrementa fArr[5] en 1. Esto cuenta 
cuántas veces aparece cada número en la matriz de entrada.

Método fill()

El método fill() de un array en JavaScript llena todos los elementos de 
un array desde una posición inicial hasta una posición final con un valor
estático. La sintaxis básica es:
array.fill(valor, inicio, fin)
valor: El valor con el que se desea llenar los elementos del array.
inicio: (Opcional) La posición inicial, por defecto es 0.
fin: (Opcional) La posición final, por defecto es el tamaño del array
En el caso de fill(0), estás diciendo que quieres llenar todos los 
elementos del array con el valor 0.
 */