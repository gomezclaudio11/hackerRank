function birthday(s, d, m) {
    // Write your code here
    let matches = 0;
    for (let i = 0; i< s.length; i ++) {
        let subarr = s.slice(i, i+m)
        let sum = subarr.reduce((a,b) => a+b)
        if(sum == d){matches++}
    }
        return matches
}

//metodo SLICE
/**
 El método slice() en JavaScript se usa para extraer una sección
  de un arreglo sin modificar el arreglo original. Este método 
  devuelve un nuevo arreglo que contiene los elementos 
  seleccionados a partir de los índices especificados.

  Parámetros:

    inicio (obligatorio): Es el índice en el que comienza la 
    extracción. El elemento en este índice se incluye en el 
    nuevo arreglo. Si inicio es un número negativo, cuenta 
    desde el final del arreglo.

    fin (opcional): Es el índice en el que termina la extracción.
    El elemento en este índice no se incluye en el nuevo arreglo.
    Si fin no se proporciona, la extracción se extiende hasta el
    final del arreglo. Si fin es negativo, cuenta desde el final
    del arreglo.
 */
//metodo reduce
/**
 El método reduce() en JavaScript se utiliza para recorrer un 
 arreglo y "reducir" sus elementos a un único valor. Este método 
 aplica una función sobre cada elemento del arreglo (de izquierda 
 a derecha) para combinarlo en un único valor acumulado.
 Parámetros:

    callback: Una función que se ejecuta en cada elemento del
    arreglo. 
    Tiene cuatro argumentos:
        acumulador: Guarda el resultado acumulado de la función 
        de reducción. En la primera iteración, este valor es 
        igual al valorInicial si se proporciona, o el primer 
        elemento del arreglo si no se proporciona.
        valorActual: El elemento actual que se está procesando 
        en el arreglo.
        índice: El índice del elemento actual (opcional).
        array: El arreglo sobre el que se está aplicando reduce() 
        (opcional).
valorInicial (opcional): Un valor inicial que se usa como primer argumento del acumulador. Si no se proporciona, el primer elemento del arreglo será el valor inicial y la reducción empezará en el segundo elemento.
 
Ejemplos:
1. Sumar todos los números de un arreglo:
let numeros = [1, 2, 3, 4];
let suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma); // 10


2. Multiplicar todos los números de un arreglo:
let numeros = [1, 2, 3, 4];
let producto = numeros.reduce((acumulador, valorActual) => acumulador * valorActual, 1);
console.log(producto); // 24

3. Encontrar el valor máximo en un arreglo:
let numeros = [1, 5, 3, 9, 2];
let maximo = numeros.reduce((acumulador, valorActual) => (acumulador > valorActual ? acumulador : valorActual));
console.log(maximo); // 9

4. Contar la cantidad de veces que aparece un elemento en un arreglo
let letras = ['a', 'b', 'a', 'c', 'b', 'a'];
let conteo = letras.reduce((acumulador, valorActual) => {
  acumulador[valorActual] = (acumulador[valorActual] || 0) + 1;
  return acumulador;
}, {});
console.log(conteo); // { a: 3, b: 2, c: 1 }


*/
