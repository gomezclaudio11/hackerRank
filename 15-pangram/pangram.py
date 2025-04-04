def pangrams(s):
    alpha_set = set("abcdefghijklmnopqrstuvwxyz")

    for char in s.lower():
        alpha_set.discard(char)  # elimina el caracter si existe en el set
        if not alpha_set:  # si el set queda vacío
            return "pangram"

    return "not pangram"

"""
set("abcdefghijklmnopqrstuvwxyz"): crea un set con todas las 
letras del abecedario.
s.lower(): convierte el string a minúsculas.
discard(): elimina un elemento del set si existe 
(no lanza error si no está).
if not alpha_set: en Python, un set vacío es False, 
así que esto pregunta si el set ya está vacío.
"""