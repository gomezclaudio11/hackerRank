function pangrams(s) {
    const alphaSet = new Set("abcdefghijklmnopqrstuvwxyz");

    for (let char of s.toLowerCase()) {
        alphaSet.delete(char);
        if (alphaSet.size === 0) {
            return "pangram";
        }
    }

    return "not pangram";
}


/**
Eficiencia: La nueva función solo recorre la cadena una vez y
 elimina caracteres del conjunto, lo que es eficiente.
Simplicidad: La lógica es más directa y fácil de entender.
Correctitud: Aseguramos que la función verifique correctamente 
la presencia de todas las letras del alfabeto.
 */
/**
 Un Set es una estructura de datos en JavaScript que:

    Solo almacena valores únicos (no repetidos).
    Tiene métodos rápidos para agregar, eliminar y verificar 
    elementos.
    No mantiene el orden de inserción como un array, pero sí 
    recuerda el orden en que los elementos fueron añadidos.

Se convierte el string s a minúsculas.
Se recorre cada caracter del string.
En cada vuelta del bucle, se elimina el caracter actual del Set.
Si en algún momento el Set queda vacío (size === 0), significa
que ya se han encontrado todas las letras del abecedario → 
¡Es un pangrama!
 */