def lonelyinteger(a):
    ans = 0
    for num in a:
        ans ^= num
    return ans
