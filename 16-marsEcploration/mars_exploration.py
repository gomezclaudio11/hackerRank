def mars_exploration(s):
    count = 0
    sos = "SOS"
    
    for i in range(len(s)):
        if s[i] != sos[i % 3]:
            count += 1
    
    return count
"""
sos = "SOS" → Representa el mensaje original que se repite.
for i in range(len(s)): → Recorremos la cadena s.
if s[i] != sos[i % 3]: → Comparamos cada carácter con la 
secuencia "SOS" repetida.
La expresión i % 3 se usa para hacer que el índice repita los 
valores 0, 1, 2 en un ciclo infinito, asegurando que siempre 
compare con la secuencia "SOS".
La expresión i % 3 se usa para hacer que el índice repita los
 valores 0, 1, 2 en un ciclo infinito, asegurando que siempre 
 compare con la secuencia "SOS".
count += 1 → Si hay una diferencia, incrementamos el contador.
Finalmente, retornamos el número de caracteres alterados.
"""