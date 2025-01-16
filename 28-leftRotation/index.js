function rotateLeft(d, arr) {
    // Write your code here
    let rotatedArray = []
    for (let i = d;  i< arr.length; i++){
        rotatedArray.push(arr[i])
    } 
    for (let i = 0; i< d; i ++){
        rotatedArray.push(arr[i])
    }
    return rotatedArray

}

/*

La función rotateLeft toma como entrada dos parámetros:

    d: El número de rotaciones a la izquierda que se deben realizar en el array.
    arr: El array sobre el cual se aplicarán las rotaciones.

El objetivo es reordenar los elementos del array como si estuvieran siendo rotados hacia la izquierda d veces. Vamos a analizar el código paso a paso:
Primera parte:

let rotatedArray = [];
for (let i = d; i < arr.length; i++) {
    rotatedArray.push(arr[i]);
}

    Inicialización:
        Se declara un array vacío llamado rotatedArray, donde se irán almacenando los elementos del array rotado.

    Bucle for:
        Inicio (i = d): Comienza desde el índice d, que es el punto desde el cual los elementos se deben mover al principio del array.
        Condición (i < arr.length): Recorre todos los elementos desde el índice d hasta el final del array.
        Acción (rotatedArray.push(arr[i])): Agrega cada elemento desde arr[d] en adelante al array rotatedArray.

    Por ejemplo, si:

    arr = [1, 2, 3, 4, 5];
    d = 2;

    En esta etapa, el bucle agrega los elementos desde el índice 2 en adelante ([3, 4, 5]) al array rotatedArray.

    Al terminar este bucle, rotatedArray = [3, 4, 5].

Segunda parte:

for (let i = 0; i < d; i++) {
    rotatedArray.push(arr[i]);
}

    Bucle for:
        Inicio (i = 0): Comienza desde el inicio del array original.
        Condición (i < d): Recorre solo los primeros d elementos del array.
        Acción (rotatedArray.push(arr[i])): Agrega estos primeros d elementos al final de rotatedArray.

    Continuando con el ejemplo:

    arr = [1, 2, 3, 4, 5];
    d = 2;

    Este bucle agrega los primeros 2 elementos ([1, 2]) al final de rotatedArray.

    Al terminar este bucle, rotatedArray = [3, 4, 5, 1, 2].

Retorno final:

return rotatedArray;

Finalmente, se retorna el array rotado rotatedArray.
Ejemplo completo:

Con arr = [1, 2, 3, 4, 5] y d = 2:

    Primera parte:
        Desde el índice 2 hasta el final: rotatedArray = [3, 4, 5].
    Segunda parte:
        Desde el índice 0 hasta d - 1: rotatedArray = [3, 4, 5, 1, 2].
    Retorno:

    [3, 4, 5, 1, 2]

Resumen:

El código divide el array en dos partes:

    Desde el índice d hasta el final.
    Desde el inicio hasta el índice d - 1.

Luego, combina ambas partes en el orden correcto para simular la rotación hacia la izquierda.
*/