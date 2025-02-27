def matching_strings(strings, queries):
    memory = {}
    
    for string in strings:
        memory[string] = memory.get(string, 0) + 1
    
    return [memory.get(query, 0) for query in queries]

# Ejemplo de uso:
strings = ["ab", "ab", "abc"]
queries = ["ab", "abc", "bc"]
print(matching_strings(strings, queries))  # Salida esperada: [2, 1, 0]

"""
Explicación:

    Diccionario (memory): Se usa un diccionario para contar la frecuencia de cada string en strings.
    Bucle para contar: Se recorre strings y se incrementa el contador de cada palabra.
    Consulta rápida: Se usa memory.get(query, 0) para obtener el número de veces que aparece cada query, devolviendo 0 si no existe en memory.
    Retorno con list comprehension: Genera la lista de resultados de manera eficiente.
"""