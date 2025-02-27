def plus_minus(arr):
    positivos = len ([num for num in arr if num > 0]) / len(arr)
    negativos = len ([num for num in arr if num < 0]) / len(arr)
    ceros = len ([num for num in arr if num == 0]) / len(arr)

    print(f"{positivos:.6f}\n{negativos:.6f}\n{ceros:.6f}")

"""
Explicación:

    Se usa una list comprehension para filtrar los números positivos, negativos y ceros.
    len(lista) / len(arr) calcula la proporción.
    :.6f formatea los valores a 6 decimales.

"""