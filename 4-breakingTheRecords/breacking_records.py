def breaking_records(scores):
    max_score = min_score = scores[0]  # Primer elemento como referencia
    max_count = min_count = 0

    for score in scores[1:]:  # Itera desde el segundo elemento
        if score > max_score:
            max_score = score
            max_count += 1
        elif score < min_score:
            min_score = score
            min_count += 1

    return [max_count, min_count]

# Ejemplo de uso:
print(breaking_records([10, 5, 20, 20, 4, 5, 2, 25, 1]))  # Output: [2, 4]
