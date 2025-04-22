def closest_numbers(arr):
    arr.sort()
    result = []

    min_diff = arr[1] - arr[0]

    for i in range(2, len(arr)):
        min_diff = min(min_diff, arr[i] - arr[i - 1])

    for i in range(1, len(arr)):
        if arr[i] - arr[i - 1] == min_diff:
            result.extend([arr[i - 1], arr[i]])

    return result
