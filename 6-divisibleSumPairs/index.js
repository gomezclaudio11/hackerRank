function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = 0;
    for(let i=0; i < n - 1; i++) {
        for(let j = i + 1; j < n; j++){
            if ((ar[i]+ar[j]) % k == 0) {count++;}
        }
    }
    return count;
}
/**
En resumen, esta función utiliza dos bucles anidados para 
recorrer todos los pares únicos de elementos en el arreglo
 ar. Para cada par, verifica si la suma de los elementos 
 es divisible por k. Si es así, incrementa el contador 
 count. Al final, la función devuelve la cantidad total de
  pares encontrados que cumplen con la condición de ser 
  divisibles por k.

Es importante señalar que esta implementación puede no
 ser eficiente para arreglos grandes, ya que tiene una 
 complejidad de tiempo de O(n^2), lo que significa que el
  tiempo de ejecución aumenta cuadráticamente con el 
  tamaño del arreglo. Para arreglos grandes, sería deseable
   encontrar un enfoque más eficiente.
 */
/**
 La razón para comenzar desde i + 1 en lugar de i es evitar
  contar el mismo par dos veces y eliminar duplicados.
 */
/**
 ar[i] + ar[j]: Suma los elementos en las posiciones i y j
  del arreglo ar.
% k: Calcula el residuo de la división entre la suma y k.
== 0: Comprueba si el residuo de la división es igual a
cero, lo que indica que la suma es exactamente divisible 
por k
 */
/**
 se evalúa como verdadera si la suma de los elementos en
  las posiciones i y j es divisible por k sin dejar un 
  residuo, es decir, si la suma es un múltiplo entero de k.
  */