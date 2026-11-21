def distinct(seq):
    res = []
    for num in seq:
        if (not (num in res)):
            res.append(num)
    return res
print(distinct([1, 1, 2]))