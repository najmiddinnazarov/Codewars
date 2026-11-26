def well(x):
    good = 0
    bad = 0
    for word in x:
        if (word == "bad"):
            bad += 1
        else:
            good += 1
    if (good > 0 and good < 3):
        return 'Publish!'
    elif (good > 2):
        return 'I smell a series!'
    else:
        return 'Fail!'
print(well(['bad', 'bad', 'bad']))