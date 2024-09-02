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

En resumen, la función devuelve un arreglo que indica 
cuántas veces cada cadena en queries aparece en el arreglo
 original strings
  */