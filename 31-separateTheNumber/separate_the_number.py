def separate_numbers(s):
    for i in range(1, len(s) // 2 + 1):  # Math.floor(s.length / 2) equivale a len(s) // 2 en Python
        start = s[:i]  # Equivalente a s.slice(0, i)
        num = int(start)  # No es necesario BigInt, Python maneja enteros grandes automáticamente
        built = ""
        
        while len(built) < len(s):
            built += str(num)
            num += 1
        
        if built == s:
            print("YES", start)
            return

    print("NO")
