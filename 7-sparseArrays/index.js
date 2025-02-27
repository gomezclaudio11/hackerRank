function marchingStrings(strings, queries) {
    const memory = {};
    for(const string of strings) memory[string] = (memory[string] || 0) +1;

    return queries.map(query => memory[query] || 0 )
}

/**
 
Este bloque de código utiliza un bucle for...of para iterar
 sobre cada elemento (cadena) en el arreglo strings. La 
 idea principal es contar la frecuencia de cada cadena y 
 almacenar esa información en el objeto memory.
 
 Explicación paso a paso:

    for (const string of strings): 
    Esto inicia un bucle que recorrerá cada elemento en el
    arreglo strings. En cada iteración, string tomará el 
    valor de la cadena actual.

    memory[string] || 0: 
    Esto verifica si la cadena string ya existe como clave 
    en el objeto memory. Si existe, devuelve el valor actual
    de esa clave; de lo contrario, devuelve 0.

    memory[string] = (memory[string] || 0) + 1;:
    Esto asigna la frecuencia actual de la cadena string en
    el objeto memory. Si la cadena no estaba presente, la 
    frecuencia se establece en 1; si ya estaba presente, 
    se incrementa en 1.

En resumen, este bloque de código cuenta la frecuencia de 
cada cadena en el arreglo strings y almacena esa información
en el objeto memory. Luego, se utiliza este objeto para 
responder consultas sobre la frecuencia de las cadenas en el
 arreglo queries.
 */

 /**
  Este fragmento de código utiliza la función map para 
  crear un nuevo arreglo basado en el arreglo queries, 
  donde cada elemento del nuevo arreglo es la frecuencia 
  de la cadena correspondiente en el objeto memory. Aquí 
  está el desglose
  
  Explicación paso a paso:

    queries.map(query => ...):
    Utiliza el método map en el arreglo queries para aplicar
    una función a cada elemento del arreglo. El resultado es
    un nuevo arreglo basado en la transformación de cada 
    elemento.

    query => memory[query] || 0: 
    La función que se aplica a cada elemento (query) en el 
    arreglo queries. Aquí, memory[query] intenta obtener 
    la frecuencia de la cadena query desde el objeto memory.
     Si la cadena no está en memory, devuelve undefined. 
     Luego, el operador || (o) se utiliza para proporcionar
      un valor predeterminado de 0 en caso de que la cadena
       no exista en memory.

    El nuevo arreglo resultante contiene las frecuencias de
     las cadenas correspondientes en queries. Si una cadena
      no estaba presente en memory, su frecuencia en el 
      nuevo arreglo será 0.

    .map() recorre cada elemento de queries.
Para cada query, busca su frecuencia en memory.
Si no existe en memory, devuelve 0.
Retorna un nuevo array con los resultados.

En resumen, la función devuelve un arreglo que indica 
cuántas veces cada cadena en queries aparece en el arreglo
 original strings
  */
 /**
  Código de Ejemplo

Supongamos que llamamos a la función con:

const strings = ["abc", "def", "abc", "ghi"];
const queries = ["abc", "ghi", "xyz"];
console.log(matchingStrings(strings, queries)); // Salida: [2, 1, 0]

Paso a Paso
1. Inicialización del objeto memory

Se crea un objeto vacío para almacenar el conteo de cada cadena en el arreglo strings:

const memory = {};

2. Recuento de cadenas en strings

El bucle for recorre cada cadena en el arreglo strings y las almacena en memory, incrementando su conteo cada vez que se repite:

for (const string of strings) {
    memory[string] = (memory[string] || 0) + 1;
}

Explicación por iteraciones:

    Primera iteración: string = "abc"
        memory["abc"] no existe todavía, por lo que (memory["abc"] || 0) da 0.
        Incrementa: memory["abc"] = 0 + 1 = 1.

    Resultado de memory: { "abc": 1 }

    Segunda iteración: string = "def"
        memory["def"] no existe, por lo que (memory["def"] || 0) da 0.
        Incrementa: memory["def"] = 0 + 1 = 1.

    Resultado de memory: { "abc": 1, "def": 1 }

    Tercera iteración: string = "abc"
        memory["abc"] ya existe con valor 1.
        Incrementa: memory["abc"] = 1 + 1 = 2.

    Resultado de memory: { "abc": 2, "def": 1 }

    Cuarta iteración: string = "ghi"
        memory["ghi"] no existe, por lo que (memory["ghi"] || 0) da 0.
        Incrementa: memory["ghi"] = 0 + 1 = 1.

    Resultado final de memory: { "abc": 2, "def": 1, "ghi": 1 }

3. Generación del resultado para queries

Se usa map para crear un nuevo arreglo con el número de ocurrencias de cada consulta (query) en memory. Si una consulta no existe en memory, se devuelve 0.

return queries.map(query => memory[query] || 0);

Explicación por iteraciones:

    Primera consulta: query = "abc"
        Existe en memory con valor 2.
        Resultado: 2.

    Segunda consulta: query = "ghi"
        Existe en memory con valor 1.
        Resultado: 1.

    Tercera consulta: query = "xyz"
        No existe en memory.
        Resultado: 0.
  */
 /**
  Beneficio de usar .map():

    Es más limpio y conciso que usar un bucle for.
    Se ejecuta en O(m) (donde m es el tamaño de queries), 
    lo que mantiene la eficiencia.

    Complejidad temporal:

    Construcción del objeto memory: O(n) (donde n es el tamaño de strings).
    Uso de .map(): O(m) (donde m es el tamaño de queries).
    Complejidad total: O(n + m), lo cual es eficiente.

🔹 Resumen: .map() permite recorrer queries y obtener su 
frecuencia en memory de manera eficiente, reemplazando cada 
query con su respectivo valor en memory o 0 si no existe. 🚀
  */