
function breakingRecords([hl, ...scores]) {
     // Inicializamos variables para el puntaje más bajo,
     // más alto y los resultados de rupturas
    let low = hl;
    let high = hl;
    let hRes = 0;
    let lRes = 0;

    // Iteramos sobre los puntajes restantes
    scores.forEach(score => {
        // Comprobamos si el puntaje actual es menor que el puntaje más bajo
        if(score < low) {
            low = score;//si es asi actualizamos el puntaje mas bajo
            lRes++; //incrementamos el contador de records bajos rotos
        } 
        // Comprobamos si el puntaje actual es mayor que el puntaje más alto
        else if (score > high) {
            high = score;//si es asi actualizamos el puntaje mas alto
            hRes++;//incrementamos el contador de records altos rotos
        }
    })

    return [hRes, lRes]
    
}
/*
desestructuración de arrays 
[hl, ...scores]: Este es un patrón de desestructuración de
 arrays. Con esta sintaxis, se toma el primer elemento del
 array original y se asigna a la variable hl, mientras que
 el operador de propagación (...) se utiliza para recoger
 el resto de los elementos en un nuevo array llamado scores.

 En el caso de la función breakingRecords, se utiliza la 
 desestructuración para separar el primer elemento del 
 array original (que parece ser el puntaje inicial hl) y el
  resto de los elementos en un nuevo array llamado scores. 
  Esto facilita el trabajo con el primer elemento y el
   resto por separado en la lógica de la función.

EJEMPLO
   const arrayOriginal = [10, 20, 30, 40, 50];

const [primero, ...resto] = arrayOriginal;

console.log(primero); // 10
console.log(resto);   // [20, 30, 40, 50]

*/