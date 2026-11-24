def kata_13_december(lst): 
    res = []
    for i in lst: 
        if i % 2 == 1: 
            res.append(i)
    return res
print(kata_13_december([1, 2, 2, 2, 4, 3, 4, 5, 6, 7]))