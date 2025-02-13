function separateNumbers(s) {
    // Write your code here
    for (let i = 1; i<= Math.floor(s.length/2); i++){ //math.floor para obtener un numero entero de una division
        const start = s.slice(0, i);
        let num = BigInt(start)
        let built = ""
        while (built.length < s.length) built += num ++
        if (built === s) return console.log("YES", start)
    }
    console.log("NO")
}
/**
 Recibe una cadena s y trata de encontrar si es una secuencia 
 numérica válida.
 Intenta dividir s en diferentes secuencias:

    i representa la cantidad de dígitos que tomará como 
    primer número de la secuencia.
    Solo necesita probar hasta la mitad (s.length / 2), 
    porque si el primer número es demasiado grande, no hay 
    espacio suficiente para formar la secuencia.

s.slice(0, i) obtiene el primer número de la secuencia.
Se convierte a BigInt porque los números pueden ser muy 
grandes.

Se construye una nueva cadena built, empezando desde num.
Se va sumando 1 al número y concatenándolo hasta que 
built tenga la misma longitud que s.

Si la secuencia construida built es igual a s, significa 
que s es una secuencia válida y se imprime "YES" seguido del 
primer número (start).
Se usa return para salir de la función inmediatamente si 
se encuentra una secuencia válida.

 */
/**
 Qué hace Math.floor() en JavaScript?

El método Math.floor() redondea un número hacia abajo al 
entero más cercano.
numero: Puede ser un número positivo, negativo o decimal.
Devuelve el entero más grande que sea menor o igual al 
número dado.
console.log(Math.floor(4.9));  // 4  (redondea hacia abajo)
console.log(Math.floor(4.1));  // 4  (redondea hacia abajo)
console.log(Math.floor(4.0));  // 4  (ya es un entero, no cambia)
console.log(Math.floor(-4.9)); // -5 (redondea hacia abajo, más negativo)
console.log(Math.floor(-4.1)); // -5 (siempre baja al siguiente entero)

 */
/**metodo slice()
 El método .slice() se usa en cadenas de texto (string) y 
 arreglos (array) para extraer una parte sin modificar el 
 original.
 array.slice(inicio, fin)
string.slice(inicio, fin)

inicio (obligatorio): Índice desde donde empieza la extracción.
fin (opcional): Índice donde termina (no incluye este índice).
Si fin no se especifica, corta hasta el final.
Si inicio es negativo, cuenta desde el final.

***ejemplo con string
let texto = "Hola, mundo!";
console.log(texto.slice(0, 4));  // "Hola"
console.log(texto.slice(6, 11)); // "mundo"
console.log(texto.slice(6));     // "mundo!"
console.log(texto.slice(-6));    // "mundo!"

Ejemplo con array.slice()
let numeros = [10, 20, 30, 40, 50];

console.log(numeros.slice(1, 4));  // [20, 30, 40]
console.log(numeros.slice(2));     // [30, 40, 50]
console.log(numeros.slice(-3));    // [30, 40, 50]

 Diferencia entre slice() y splice()

    slice() NO modifica el original, solo devuelve una copia.
    splice() modifica el array original, eliminando o 
    agregando elementos.

let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1, 3));  // [2, 3] (original intacto)
console.log(arr);              // [1, 2, 3, 4, 5]

console.log(arr.splice(1, 3)); // [2, 3, 4] (modifica el original)
console.log(arr);              // [1, 5]

*/
/**
 Qué es BigInt en JavaScript?

BigInt es un tipo de dato en JavaScript que permite trabajar 
con números enteros muy grandes, más allá del límite de Number.

Límite de Number en JavaScript
El tipo de dato Number en JavaScript puede representar números
enteros hasta 2⁵³ - 1 (9007199254740991). Si intentas operar 
con números más grandes, puedes perder precisión.

Ejemplo de pérdida de precisión con Number

console.log(9007199254740991 + 1); // 9007199254740992 (Correcto)
console.log(9007199254740991 + 2); // 9007199254740992 (¡Error!)

Se esperaba 9007199254740993, pero por la limitación de Number, da un resultado incorrecto.
 
Cómo usar BigInt

Puedes crear un BigInt de dos maneras:
Agregando una n al final del número

let bigNumber = 9007199254740991n;
console.log(bigNumber); // 9007199254740991n

Usando BigInt()

let bigNumber = BigInt("9007199254740991");
console.log(bigNumber); // 9007199254740991n

Útil cuando el número proviene de una cadena (string).

Cuándo usar BigInt?

 Cuando necesitas manejar números más grandes que Number.MAX_SAFE_INTEGER.
 Para identificadores únicos en bases de datos (Ejemplo: IDs muy largos).
 Para trabajar con criptografía o cálculos financieros de alta precisión.
*/