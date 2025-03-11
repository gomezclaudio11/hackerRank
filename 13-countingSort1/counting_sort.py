def countingSort(arr):
    # Crea una lista de tamaño 100, llena de ceros.
    f_arr = [0] * 100

    # Recorre cada elemento del arreglo de entrada.
    for num in arr:
        # Incrementa el valor en el índice correspondiente en f_arr.
        f_arr[num] += 1

    # Retorna la lista de frecuencias.
    return f_arr
