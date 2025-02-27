import sys
import re

def process_data(input_text):
    words = input_text.split('\r\n')
    
    for word in words:
        split = word.startswith('S')
        type_ = word[2]
        text = word[4:]
        
        if split:
            if type_ == 'M':
                text = text[:-2]  # Eliminar '()'
            text = ' '.join(re.findall('[a-zA-Z][^A-Z]*', text)).lower()
        else:
            text = concat(text.split(' '), type_)
        
        print(text)

def concat(array, type_):
    array = [word.capitalize() for word in array]
    if type_ != 'C':  # Si no es una clase, la primera letra es minúscula
        array[0] = array[0].lower()
    return ''.join(array) + ('()' if type_ == 'M' else '')

# Ejemplo de uso:
input_text = "S;M;plasticCup()\r\nC;V;mobile phone\r\nC;C;coffee machine"
process_data(input_text)

"""
Explicación:

    Divide la entrada en líneas (words = input_text.split('\r\n')).
    Detecta si es una operación de "split" o "combine" (split = word.startswith('S')).
    Si es split, se convierte de CamelCase a formato con espacios y minúsculas.
        Para los métodos, se eliminan los ().
        Usa una expresión regular para detectar mayúsculas y separar palabras (re.findall('[a-zA-Z][^A-Z]*', text)).
    Si es combine, convierte palabras separadas en CamelCase o PascalCase:
        Se capitaliza cada palabra.
        Si no es una clase (C), la primera letra se vuelve minúscula.
        Se añade () si es un método.
"""
