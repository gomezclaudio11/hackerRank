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
                    if(j === 0 && type !== 'C'){
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
 La expresión type === 'M' ? '()' : '' es un operador 
 condicional ternario en JavaScript. La sintaxis general 
 es condición ? expresión_verdadera : expresión_falsa.
 */