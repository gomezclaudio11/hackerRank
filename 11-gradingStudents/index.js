
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
*/