
function gradingStudents(grades) {
    // Write your code here
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38 && (grades[i] % 5) >= 3) {
            grades[i] = grades[i] + (5 - (grades[i] % 5));
        }
    }
    
    return grades; 
}
/*Este código implementa la función gradingStudents que 
redondea las calificaciones de acuerdo con las siguientes 
reglas:

    Si la diferencia entre la calificación y el siguiente 
    múltiplo de 5 es menor que 3, la calificación se redondea
     al próximo múltiplo de 5.
    Si la calificación es inferior a 38, no se redondea.

Veamos el código paso a paso:

    Se itera sobre cada calificación en el array grades.
    Se verifica si la calificación es mayor o igual a 38 y si
     la diferencia entre la calificación y el siguiente 
     múltiplo de 5 es mayor o igual a 3.
    Si se cumplen estas condiciones, se redondea la 
    calificación sumándole la diferencia necesaria para 
    alcanzar el próximo múltiplo de 5.
    Se repite este proceso para todas las calificaciones en 
    el array.
    Finalmente, se devuelve el array de calificaciones 
    modificado.

Por ejemplo, si tenemos el array de calificaciones 
[73, 67, 38, 33], el resultado después de llamar a 
gradingStudents será [75, 67, 40, 33], ya que 73 se redondea
 a 75 y 38 se redondea a 40, mientras que 67 y 33 no se
  modifican

   ¿Por qué solo se redondea si (grades[i] % 5) >= 3?
Si el residuo es 3 o más, significa que el número está más 
cerca del siguiente múltiplo de 5 que del actual, entonces 
se redondea hacia arriba.

Si el residuo es menor a 3, no se redondea, porque el número 
está más cerca del múltiplo de 5 anterior.

Ejemplo práctico
Supongamos que grades[i] = 73.

Calculamos el módulo 5 (el residuo de dividir entre 5):

73 % 5 = 3

Esto significa que 73 está a 3 unidades de ser múltiplo de 5 (75).

Aplicamos la fórmula:

5 - (73 % 5) = 5 - 3 = 2

Esto nos da cuánto hay que sumar a 73 para que sea un múltiplo de 5.

Se redondea el número:

grades[i] = 73 + 2 = 75

Ahora grades[i] es 75, que es un múltiplo de 5.
*/