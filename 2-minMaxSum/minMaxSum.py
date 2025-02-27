def mini_max_sum(arr):
    max_val = arr[0]
    min_val = arr[0]
    total_sum = 0

    for num in arr:
        if num > max_val:
            max_val = num
        if num < min_val:
            min_val = num
        total_sum += num

    max_sum = total_sum - min_val
    min_sum = total_sum - max_val

    print(f"{min_sum} {max_sum}")

# Ejemplo de uso:
mini_max_sum([1, 2, 3, 4, 5])
