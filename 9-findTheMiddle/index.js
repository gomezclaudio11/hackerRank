function findTheMiddle (arr) {
    arr.sort((a, b) => a-b);
    let middle = Math.floor(arr.length / 2)
    return arr[middle]
}



console.log(findTheMiddle([1,2,3,4,5,6]));
/**
 * La función Math.floor asegura que se redondee hacia abajo
 * para asegurar que obtengas un índice entero.

 */