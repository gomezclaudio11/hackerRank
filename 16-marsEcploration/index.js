
function marsExploration(s) {
    // Write your code here
     let count = 0;
    const sos = "SOS";
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== sos[i % 3]) {
            count++;
        }
    }
    
    return count;
}

/**
 1 Inicialización de Variables:
 2 Iteración a través del mensaje:
 3 Verificación del carácter en comparación con "SOS":
 En lugar de verificar manualmente cada segmento de tres 
caracteres, utilizamos el operador módulo (%) para comparar 
el carácter actual con el correspondiente en "SOS".
sos[i % 3] devuelve "S", "O", o "S" según el valor de i.

Para cada índice i, i % 3 da un resultado cíclico de 
0, 1, 2, 0, 1, 2, etc.
sos[i % 3] dará "S", "O", "S" cíclicamente, comparando así 
cada carácter de s con el carácter correspondiente en "SOS".
 */
/**
Ejemplo Completo

Supongamos s = "SOSTOTSOA":

    Iteración y comparación:
        s[0] es "S", sos[0 % 3] es "S" (coincide).
        s[1] es "O", sos[1 % 3] es "O" (coincide).
        s[2] es "S", sos[2 % 3] es "S" (coincide).
        s[3] es "T", sos[3 % 3] es "S" (no coincide, count incrementa a 1).
        s[4] es "O", sos[4 % 3] es "O" (coincide).
        s[5] es "S", sos[5 % 3] es "S" (coincide).
        s[6] es "S", sos[6 % 3] es "S" (coincide).
        s[7] es "O", sos[7 % 3] es "O" (coincide).
        s[8] es "A", sos[8 % 3] es "S" (no coincide, count incrementa a 2).
 */