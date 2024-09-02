function diagonalDifference(arr) {
    // Write your code here
    let diag1= 0;
    let diag2= 0
    let pointer = arr.length -1
    
    for (let i = 0; i<arr.length; i++ ) {
        diag1 += arr[i][i]
        diag2 += arr[i][pointer]
        pointer--
    }
    
    return Math.abs(diag1 - diag2)
}
/**
 ¡Claro! Esta función diagonalDifference calcula la diferencia absoluta entre la suma de los elementos en la diagonal principal y la suma de los elementos en la diagonal secundaria de una matriz cuadrada. Aquí está el desglose de la función:

    Se inicializan tres variables:
        diag1 y diag2 para almacenar la suma de los elementos en la diagonal principal y secundaria, respectivamente.
        pointer se inicializa con la longitud de la matriz menos 1. Se utiliza para acceder a los elementos de la diagonal secundaria desde la derecha hacia la izquierda.

    Se itera sobre las filas de la matriz utilizando un bucle for. Para cada fila:
        Se agrega el elemento en la posición [i][i] (diagonal principal) a diag1.
        Se agrega el elemento en la posición [i][pointer] (diagonal secundaria) a diag2.
        Se decrementa pointer para acceder a la siguiente posición de la diagonal secundaria.

    Se devuelve la diferencia absoluta entre diag1 y diag2 utilizando Math.abs(). Esto asegura que el resultado sea siempre positivo

    diag1 += arr[i][i] es donde se suma el elemento de la diagonal principal en cada iteración del bucle.

Vamos a desglosarlo:

    arr[i][i]: Esto accede al elemento en la posición i de la fila y i de la columna en la matriz arr. En una matriz cuadrada, donde el número de filas es igual al número de columnas, esto selecciona el elemento en la diagonal principal.

    diag1 += arr[i][i]: Aquí, diag1 es una variable que se inicializa en 0 al comienzo de la función. En cada iteración del bucle, se le suma el valor del elemento en la diagonal principal de la matriz. Esto se hace utilizando el operador +=, que es una forma abreviada de escribir diag1 = diag1 + arr[i][i].

Entonces, esta línea de código básicamente suma todos los elementos en la diagonal principal de la matriz arr y almacena el resultado en la variable diag1. Al final del bucle, diag1 contendrá la suma de todos los elementos en la diagonal principal de la matriz
 */