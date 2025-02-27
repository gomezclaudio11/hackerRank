def time_conversion(s):
    am_pm = s[-2]  # Último carácter antes de "M" (A o P)
    military_hour = ""

    if am_pm == "A":
        if s[:2] == "12":
            military_hour = "00"
        else:
            military_hour = s[:2]
    else:  # "P"
        if s[:2] == "12":
            military_hour = s[:2]
        else:
            military_hour = str(int(s[:2]) + 12)

    return military_hour + s[2:8]

# Ejemplo de uso:
print(time_conversion("07:05:45PM"))  # Output: "19:05:45"
