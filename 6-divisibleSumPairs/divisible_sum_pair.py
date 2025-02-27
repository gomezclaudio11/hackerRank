def divisible_sum_pairs(n, k, ar):
    count = 0
    for i in range(n - 1):
        for j in range(i + 1, n):
            if (ar[i] + ar[j]) % k == 0:
                count += 1
    return count

# Ejemplo de uso:
n = 6
k = 3
ar = [1, 3, 2, 6, 1, 2]
print(divisible_sum_pairs(n, k, ar))  # Salida esperada: 5
