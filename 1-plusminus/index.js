function plusMinus( arr ) {
    // Write your code here
    let positivos = arr.filter (numero => numero > 0 ).length / arr.length;
    let negativos = arr.filter (numero => numero < 0).length / arr.length;
    let ceros = arr.filter (numero => numero === 0).length / arr.length;
    console.log (positivos.toFixed(6) + "\n" + negativos.toFixed(6)  + "\n" + ceros.toFixed(6))
    
}

/**
 arr.filter(numero => numero > 0).length: Filtra los 
 números positivos en el array y luego calcula la longitud
  del nuevo array resultante (la cantidad de números 
    positivos).
 */

    const numeros = [1, 2, 3, 4, 5];   
    console.log(numeros.length); //5