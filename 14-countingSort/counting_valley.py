def countingValleys(steps, path):
    valleys = 0
    elevation = 0

    for step in path:
        if step == "D":
            elevation -= 1
        else:  # "U"
            if elevation == -1:
                valleys += 1
            elevation += 1

    return valleys
