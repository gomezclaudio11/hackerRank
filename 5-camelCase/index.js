function processData(input) {
    //Enter your code here
        let words = input.split('\r\n')
    for(let i = 0; i < words.length; i++){
        let split = words[i].substring(0,1) === 'S';
        let type = words[i].substring(2,3);
        let word = words[i].substring(4, words[i].length);
        if(split){
            if(type === 'M'){
                word = word.substring(0,word.length-2) //remove ()
            }
            word = word.split(/(?=[A-Z])/).join(' ').toLowerCase();
        }
        else{
            let arr = word.split(' ')
            word = concat(arr, type)
        }
        console.log(word)
    }
}

function concat(array, type){
    
       array.forEach( (e, j) => {
                array[j] = e.substring(0,1).toUpperCase() + e.substring(1, e.length)
                    if(j === 0 && type !== 'C'){//si no es C
                        array[j] = e.substring(0,1).toLowerCase() + e.substring(1, e.length)
                    }
                } )
        return array.join('').concat( type === 'M'? '()': '')
} 

/**
 El método split() en JavaScript se utiliza para dividir
  una cadena en un array de subcadenas basándose en un 
  separador específico
 */

/**
 La secuencia '\r\n' representa un salto de línea en el 
 formato de retorno de carro y avance de línea 
 (carriage return and line feed) en sistemas basados en
 Windows. Es una combinación de dos caracteres
 especiales:

    \r: Retorno de carro (carriage return).
    \n: Avance de línea (line feed).
 */

/**
 Esta línea de código utiliza expresiones regulares para
 dividir una cadena (word) en un array de subcadenas. 
 La expresión regular /(?=[A-Z])/ se basa en un concepto 
 llamado "positive lookahead" y se interpreta de la 
 siguiente manera:

 (?=[A-Z]): Esto es una "positive lookahead assertion". 
 Significa que se dividirá la cadena en cada posición 
 donde se encuentre una letra mayúscula ([A-Z]), pero la 
 letra en sí no se incluirá en las subcadenas resultantes.

Luego, el método join(' ').toLowerCase() se utiliza para 
juntar las subcadenas resultantes utilizando un espacio 
como separador y convertir todo el texto a minúsculas. 
Veamos un ejemplo para entenderlo mejor:

Supongamos que word tiene el valor "EstaEsUnaCadena".

Usando word.split(/(?=[A-Z])/), obtendríamos el array 
["Esta", "Es", "Una", "Cadena"].
Luego, usando join(' '), obtendríamos la cadena 
"Esta Es Una Cadena".
Finalmente, usando toLowerCase(), obtendríamos 
"esta es una cadena".

Entonces, la línea completa está transformando una cadena en formato de camelCase o PascalCase a una cadena en formato de palabras separadas por espacios y en minúsculas
     */

/**
Esta función llamada concat toma dos parámetros:

    array: Un arreglo de cadenas (strings).
    type: Un tipo de formato, que puede afectar cómo se 
    concatena el arreglo y si se añade () al final del resultado.

Desglose del funcionamiento:

    array.forEach( (e, j) => { ... } ):
        Usa el método forEach para iterar sobre cada elemento 
        del arreglo array.
        Para cada elemento e (que es una cadena), y su índice j, realiza una serie de operaciones.

    Capitalización de las palabras:

 array[j] = e.substring(0,1).toUpperCase() + e.substring(1, e.length)

    Convierte la primera letra de cada palabra en mayúscula.
    La parte e.substring(0, 1).toUpperCase() toma la primera letra de e y la convierte en mayúscula.
    e.substring(1, e.length) toma el resto de la palabra sin cambios y lo agrega.

Si es el primer elemento (j === 0) y el tipo no es 'C':


    if(j === 0 && type !== 'C'){
        array[j] = e.substring(0,1).toLowerCase() + e.substring(1, e.length)
    }

        Para el primer elemento del arreglo (j === 0), si el tipo no es 'C', cambia la primera letra a minúscula.
        Esto se hace con e.substring(0,1).toLowerCase() (convierte la primera letra a minúscula).
        Esto se parece al formato camelCase, donde la primera palabra empieza en minúscula y las siguientes palabras empiezan en mayúscula.

    return array.join('').concat( type === 'M' ? '()' : ''):
        Después de procesar el arreglo, usa array.join('') para concatenar todos los elementos del arreglo en una sola cadena.
        Si el type es 'M', agrega () al final del resultado.
        Si type no es 'M', no se agrega nada al final.

Ejemplo de uso:

    
concat(['hello', 'world'], 'C')

Proceso:

    Se itera sobre el arreglo, y ambas palabras se capitalizan.
    Como el type es 'C', no cambia la primera letra a minúscula.
    Resultado: "HelloWorld"


concat(['hello', 'world'], 'M')

Proceso:

    Se capitalizan ambas palabras.
    Como el type es 'M', se agrega () al final.
    Resultado: "HelloWorld()"

Entrada:

javascript

    concat(['hello', 'world'], 'other')

    Proceso:
        La primera letra de la primera palabra (hello) se convierte en minúscula porque el tipo no es 'C'.
        Resultado: "helloWorld"

Resumen:

Esta función concatena elementos de un arreglo de palabras, capitalizando cada palabra (excepto la primera si el tipo no es 'C'). Dependiendo del tipo, puede agregar () al final si el tipo es 'M'.
 */

/**
 La expresión type === 'M' ? '()' : '' es un operador 
 condicional ternario en JavaScript. La sintaxis general 
 es condición ? expresión_verdadera : expresión_falsa.
 */