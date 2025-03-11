def diagonalDifference(arr):
    diag1 = 0
    diag2 = 0
    pointer = len(arr) - 1

    for i in range(len(arr)):
        diag1 += arr[i][i]
        diag2 += arr[i][pointer]
        pointer -= 1

    return abs(diag1 - diag2)
