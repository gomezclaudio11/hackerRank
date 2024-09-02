
function lonelyinteger(a) {
    // Write your code here
    let ans = 0
    for (let i = 0; i < a.length; i++) ans ^= a [i];
    return ans
        
}

/**
 Esta función llamada lonelyinteger toma un array de números
 enteros a como entrada y devuelve el único número que 
 aparece una sola vez en el array.

Aquí está el funcionamiento de la función:

Inicialización de ans: Se inicializa una variable ans en 0.
Esta variable se utilizará para almacenar el resultado final.

Operación XOR: La función realiza una operación XOR 
(operación de exclusión lógica) en todos los elementos del 
array a. XOR es una operación binaria que devuelve 1 si los 
bits comparados son diferentes, y 0 si son iguales.

Iteración a través del array: Utiliza un bucle for para iterar
sobre todos los elementos del array a.

Operación XOR en cada elemento: En cada iteración del bucle,
realiza una operación XOR entre el elemento actual del array 
y el valor actual de ans. El resultado se almacena nuevamente
en ans. Esto se hace para cada elemento del array.

Retorno del resultado: Después de que el bucle haya terminado
de iterar sobre todos los elementos del array, la función
devuelve el valor final de ans, que será el único número que 
aparece una sola vez en el array.

En resumen, esta función encuentra el único número que aparece 
una sola vez en el array utilizando la propiedad de la 
operación XOR, que cancela los bits duplicados y deja solo el 
número que aparece una sola vez.

 */
/**
 La operación XOR, abreviatura de "eXclusive OR", es una
  operación lógica que se realiza entre dos valores booleanos
   o entre dos bits individuales. Devuelve un resultado 
   verdadero (1) si uno y solo uno de los dos valores es 
   verdadero, y falso (0) en todos los demás casos.

Aquí hay una tabla de verdad que muestra el resultado de la
 operación XOR para todas las combinaciones posibles de dos 
 bits

 | A | B | A XOR B |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    1    |
| 1 | 0 |    1    |
| 1 | 1 |    0    |

La operación XOR también se puede aplicar a dos números 
enteros o a dos secuencias de bits. En este caso, la 
operación XOR se realiza bit a bit entre los números o las 
secuencias de bits. Para cada par de bits, el resultado será 
1 si los bits son diferentes y 0 si son iguales.

Por ejemplo:

    1010 XOR 1100 = 0110
    101 XOR 110 = 011

La operación XOR es conmutativa, lo que significa que el 
orden de los operandos no importa. Es decir, A XOR B produce 
el mismo resultado que B XOR A.

En el contexto de la función lonelyinteger, se utiliza la
 operación XOR para encontrar el único número que aparece 
 una sola vez en un array de números enteros. Esto funciona 
 porque, cuando se realiza XOR entre un número y él mismo, el
  resultado es 0, y cuando se realiza XOR entre 0 y un número,
   el resultado es el mismo número. Por lo tanto, al realizar
    XOR en todos los números del array, los números que 
    aparecen dos veces se "cancelan" entre sí, dejando solo 
    el número que aparece una sola vez.
 */