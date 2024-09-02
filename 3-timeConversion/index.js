
function timeConversion(s) {
    // Write your code here
    let amPm = s.charAt(8);
    let militaryHour = "";
    if (amPm == "A") {
        if (s.substring(0, 2) == "12") {
            militaryHour = "00"
        }
        else {
            militaryHour = s.substring(0,2)
        }
    } else { //"P"              
        if (s.substring (0,2) == "12") {
            militaryHour = s.substring(0,2)
        } 
        else {
            militaryHour = parseInt(s.substring(0,2), 10) +12;
        }
    }
    return militaryHour + s.substring(2,8)
}

timeConversion("12:01:00AM")
console.log(timeConversion("12:01:00AM"));

//El método charAt() en JavaScript se utiliza para 
//devolver el carácter en la posición especificada 
//dentro de una cadena. La posición se proporciona 
//como un índice, donde el primer carácter tiene el 
//índice 0, el segundo tiene el índice 1 y así 
//sucesivamente.

//El método substring() en JavaScript se utiliza para 
//extraer una porción de una cadena de texto, 
//especificando las posiciones inicial y final. 
//Este método no modifica la cadena original y devuelve
// una nueva cadena que consiste en los caracteres entre
// las posiciones dadas.

//inicio: Índice del carácter donde comienza la
// extracción (incluido).
//fin: Índice del carácter donde termina la extracción 
//(excluido).

//Cuando utilizas la función parseInt() en JavaScript, 
//el segundo argumento especifica la base numérica para 
//la conversión. El valor por defecto es 10, que es la 
//base decimal.


