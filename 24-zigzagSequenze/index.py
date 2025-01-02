def findZigZagSequence(a, n):
    a.sort()
    mid = int((n + 1)/2) -1 #int() redondea hacia abajo 
    a[mid], a[n-1] = a[n-1], a[mid] #intercambio medio con el ultimo
1 2 3 4 5 6 7
1 2 3 7 6 5 4
# intercambio central
    st = mid + 1 
    ed = n - 2
    while(st <= ed):
        a[st], a[ed] = a[ed], a[st]
        st = st + 1 #se actualiza st y ed para no producir un bucle infinito
        ed = ed - 1

    for i in range (n):
        if i == n-1:
            print(a[i])
        else:
            print(a[i], end = ' ')
    return