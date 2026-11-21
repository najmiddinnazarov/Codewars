def flick_switch(lst):
    switch = True
    res = []
    for word in lst:
        if (word == 'flick' and switch == True):
            switch = False
        elif (word == 'flick' and switch == False):
            switch = True
        res.append(switch)
    return res
print(flick_switch(['codewars', 'flick', 'code', 'wars']))