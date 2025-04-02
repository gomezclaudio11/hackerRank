function separateNumbers (s){
        // Iteramos sobre los posibles tamaños del primer número
    for(let i = 1; i <= Math.floor(s.length/2); i++){
        const start = s.slice(0, i); // Extraemos el primer número de tamaño i
        let num = BigInt(start) // Convertimos el número a BigInt para manejar grandes valores
        let built = "" // Variable donde iremos construyendo la secuencia
        // Construimos la secuencia sumando de uno en uno hasta que la longitud sea igual a s
        while(built.length < s.length) built += num ++
        // Si la secuencia generada es igual a la original, imprimimos "YES" y el primer número
        if(built === s) return console.log("YES", start)
    }
    console.log("NO") // Si no encontramos ninguna secuencia válida, imprimimos "NO"
}
/***
 Esta función separateNumbers(s) verifica si una cadena de 
 números s puede ser generada a partir de una secuencia 
 creciente de números enteros positivos.

La razón por la que se usa Math.floor(s.length / 2) en el for 
es para optimizar el número de iteraciones y evitar casos 
innecesarios.
¿Qué representa i?
El valor de i indica el tamaño del primer número que se tomará 
de la cadena s.
Ejemplo con s = "91011":

    Si i = 1, el primer número es "9".
    Si i = 2, el primer número es "91".
    Si i = 3, el primer número es "910", etc.

¿Por qué s.length / 2?

El límite Math.floor(s.length / 2) asegura que el primer número 
nunca sea más de la mitad de la cadena, porque en ese caso no 
podría formar una secuencia válida.
Ejemplo con s = "91011":
    La longitud de s es 5.
    Math.floor(5 / 2) = 2, así que probaremos solo con i = 1 y 
    i = 2.
 Si i = 3, el primer número sería "910" y solo quedaría "11", 
 lo cual no es suficiente para formar una secuencia creciente.
 Si i = 4, el primer número sería "9101" y solo quedaría "1", 
 lo cual tampoco tiene sentido.
*/
/**
 El método .slice() en JavaScript se usa para extraer una parte
 de una cadena o un array, sin modificar el original.
EJEMPLO
 let str = "Hola Mundo";
let subStr = str.slice(0, 4);
console.log(subStr); // "Hola"
console.log(str);    // "Hola Mundo" (sigue intacto)

let s = "91011";
console.log(s.slice(0, 1));  // "9"
console.log(s.slice(0, 2));  // "91"
console.log(s.slice(0, 3));  // "910"
El valor de start cambia en cada iteración del for, probando 
diferentes primeros números.
 */
/**
 bigInt
 BigInt es un tipo de dato en JavaScript que permite trabajar 
 con números enteros extremadamente grandes, más allá del 
 límite de Number (que es 2^53 - 1 o 9007199254740991).
  Ejemplo de uso de BigInt
  let num = BigInt("123456789123456789"); 
console.log(num); // 123456789123456789n
console.log(typeof num); // "bigint"
Si intentaras esto con Number, perderías precisión en valores grandes.
Importante: Los valores BigInt terminan con una "n" (123456789n).

let s = "91011";
let start = s.slice(0, 2);  // "91"
let num = BigInt(start);    // 91n (BigInt)
console.log(num + 1n);      // 92n
Se usa BigInt porque luego se sumará (num++) y generará una secuencia de números grandes.


*/