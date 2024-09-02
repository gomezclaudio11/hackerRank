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